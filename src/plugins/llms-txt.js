const fs = require("fs");
const path = require("path");

const DOC_EXTENSIONS = [".md", ".mdx"];
const SNIPPETS_DIR = path.join(__dirname, "..", "snippets", "curl");

const readFrontMatter = (source) => {
  const match = source.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) {
    return { data: {}, body: source };
  }
  const data = {};
  match[1].split("\n").forEach((line) => {
    const pair = line.match(/^(\w+):\s*(.*)$/);
    if (pair) {
      data[pair[1]] = pair[2].replace(/^["']|["']$/g, "").trim();
    }
  });
  return { data, body: source.slice(match[0].length) };
};

const readCategory = (dir) => {
  const file = path.join(dir, "_category_.json");
  if (!fs.existsSync(file)) {
    return {};
  }
  return JSON.parse(fs.readFileSync(file, "utf8"));
};

const position = (value) => (value === undefined || value === "" ? Infinity : Number(value));

const byPosition = (a, b) => a.position - b.position || a.name.localeCompare(b.name);

const collectDocs = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true }).filter((entry) => !entry.name.startsWith("_") && entry.name !== "assets");
  const items = entries.flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const category = readCategory(full);
      return [{ name: entry.name, position: position(category.position), label: category.label, children: collectDocs(full), dir: full }];
    }
    if (!DOC_EXTENSIONS.includes(path.extname(entry.name))) {
      return [];
    }
    const { data, body } = readFrontMatter(fs.readFileSync(full, "utf8"));
    return [{ name: entry.name, position: position(data.sidebar_position), file: full, data, body }];
  });
  return items.sort(byPosition);
};

const GENERIC_TITLES = ["Introduction", "Overview"];

const flatten = (items, label) => items.flatMap((item) => (item.children ? flatten(item.children, item.label || label) : [{ ...item, category: label }]));

const resolveRoute = (docsDir, doc, routes) => {
  if (doc.data.slug) {
    return doc.data.slug;
  }
  const id = path.relative(docsDir, doc.file).replace(/\.mdx?$/, "").split(path.sep).join("/");
  const parent = id.split("/").slice(0, -1).join("/");
  const candidates = [`/${id}`, `/${id}/`, `/${parent}/`, `/${parent}`];
  return candidates.find((route) => routes.has(route));
};

const rawTitleOf = (doc) => {
  if (doc.data.title) {
    return doc.data.title;
  }
  const heading = doc.body.match(/^#\s+(.+)$/m);
  if (heading) {
    return heading[1].trim();
  }
  return doc.name.replace(/\.mdx?$/, "").replace(/_/g, " ");
};

const titleOf = (doc) => {
  const title = rawTitleOf(doc);
  if (!GENERIC_TITLES.includes(title) || !doc.category) {
    return title;
  }
  return `${doc.category}: ${title}`;
};

const summaryOf = (doc) => {
  if (doc.data.description) {
    return doc.data.description;
  }
  const paragraph = doc.body
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .find((block) => /^[A-Za-z*_`[]/.test(block) && !block.startsWith("import ") && !block.includes("\n|"));
  if (!paragraph) {
    return "";
  }
  const text = paragraph.replace(/\s+/g, " ").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[*`]/g, "");
  return text.length > 160 ? `${text.slice(0, 157).trimEnd()}...` : text;
};

const curlSnippet = (endpoint, request) => {
  const file = path.join(SNIPPETS_DIR, endpoint, `_${request}.mdx`);
  if (!fs.existsSync(file)) {
    return "";
  }
  return fs.readFileSync(file, "utf8").trim();
};

const toMarkdown = (body, origin) => {
  let inFence = false;
  const lines = body.split("\n").flatMap((line) => {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      return [line];
    }
    if (inFence) {
      return [line];
    }
    if (/^import\s.+from\s/.test(line)) {
      return [];
    }
    const requestTabs = line.match(/<RequestTabs\s+endpoint=['"]([^'"]+)['"]\s+request=['"]([^'"]+)['"]\s*\/>/);
    if (requestTabs) {
      return [curlSnippet(requestTabs[1], requestTabs[2])];
    }
    const tabItem = line.match(/^\s*<TabItem\b[^>]*label=["']([^"']+)["']/);
    if (tabItem) {
      return [`**${tabItem[1]}**`];
    }
    const iframe = line.match(/<iframe\b[^>]*src="([^"]+)"[^>]*title="([^"]*)"/);
    if (iframe) {
      return [`Video: [${iframe[2].replace(/&quot;/g, '"')}](${iframe[1]})`];
    }
    if (/^\s*<\/?(img|div|Tabs|TabItem|iframe)\b[^>]*>?\s*$/.test(line) || /^\s*<img\b.*\/>\s*$/.test(line)) {
      return [];
    }
    return [line.replace(/\]\((\/[^)\s]*)\)/g, `](${origin}$1)`)];
  });
  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
};

module.exports = function llmsTxtPlugin(context) {
  return {
    name: "llms-txt",
    async postBuild({ outDir, routesPaths }) {
      if (context.i18n.currentLocale !== context.i18n.defaultLocale) {
        return;
      }
      const { siteConfig } = context;
      const origin = siteConfig.url.replace(/\/$/, "");
      const docsDir = path.join(context.siteDir, "docs");
      const routes = new Set(routesPaths);
      const tree = collectDocs(docsDir);
      const pages = (items) =>
        flatten(items)
          .map((doc) => ({ ...doc, route: resolveRoute(docsDir, doc, routes) }))
          .filter((doc) => doc.route);

      const rootDocs = pages(tree.filter((item) => !item.children));
      const sections = tree.filter((item) => item.children).map((item) => ({ label: item.label || item.name, docs: pages(item.children) }));
      const link = (doc) => {
        const summary = summaryOf(doc);
        return `- [${titleOf(doc)}](${origin}${doc.route})${summary ? `: ${summary}` : ""}`;
      };

      const index = [
        `# ${siteConfig.title}`,
        "",
        `> ${siteConfig.customFields.llmsDescription}`,
        "",
        `The full content of every page below is in ${origin}/llms-full.txt.`,
        "",
        ...rootDocs.map(link),
        "",
        ...sections.flatMap((section) => [`## ${section.label}`, "", ...section.docs.map(link), ""]),
      ].join("\n");

      const full = [
        `# ${siteConfig.title}`,
        "",
        `> ${siteConfig.customFields.llmsDescription}`,
        "",
        ...[...rootDocs, ...sections.flatMap((section) => section.docs)].flatMap((doc) => [
          "---",
          "",
          `Source: ${origin}${doc.route}`,
          "",
          doc.data.title && !/^#\s/m.test(doc.body) ? `# ${doc.data.title}\n\n${toMarkdown(doc.body, origin)}` : toMarkdown(doc.body, origin),
          "",
        ]),
      ].join("\n");

      fs.writeFileSync(path.join(outDir, "llms.txt"), index);
      fs.writeFileSync(path.join(outDir, "llms-full.txt"), full);
    },
  };
};
