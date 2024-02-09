import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import * as curlconverter from "curlconverter";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_PATH = path.join(__dirname, "..", "..", "src", "snippets");

const languages = ["go", "node", "php", "python", "ruby"];
const endpoints = [
  "auth_api",
  "contacts_api",
  "messages_api",
  "templates_api",
  "webhooks_api",
  "teams_api",
  "channels_api",
];
const curlDir = path.join(BASE_PATH, "curl/");

const translationMethods = (snippet) => ({
  go: () => curlconverter.toGo(snippet),
  node: () => curlconverter.toNodeAxios(snippet),
  php: () => curlconverter.toPhp(snippet),
  python: () => curlconverter.toPython(snippet),
  ruby: () => curlconverter.toRuby(snippet),
});

const readFiles = () => {
  endpoints.map(async (endpoint) => {
    const endpointDir = path.join(curlDir, endpoint);

    try {
      const files = await fs.readdir(endpointDir);

      for (const file of files) {
        const fileToRead = path.join(endpointDir, file);

        readFile(fileToRead, endpoint, file);
      }
    } catch (err) {
      console.error(err);
    }
  });
};

const translateSnippet = (snippet, endpoint, fileName) => {
  const methods = translationMethods(snippet);
  languages.map((lang) =>
    generateSnippet(lang, methods[lang](), endpoint, fileName)
  );
};

const generateFile = async (snippet, lang, endpoint, fileName) => {
  const newPath = path.join(BASE_PATH, lang, endpoint, fileName);
  try {
    await fs.mkdir(path.dirname(newPath), { recursive: true });

    await fs.writeFile(newPath, snippet);
  } catch (err) {
    console.error(err.message);
  }
};

const generateSnippet = (lang, script, endpoint, fileName) => {
  const formatSnippet = "".concat(
    "```",
    lang === "node" ? "js" : lang,
    "\n",
    script,
    "\n",
    "```"
  );

  generateFile(formatSnippet, lang, endpoint, fileName);
};

const readFile = async (file, endpoint, fileName) => {
  try {
    const contents = await fs.readFile(file, { encoding: "utf8" });
    translateSnippet(
      contents.replace("```bash", "").replace("```", ""),
      endpoint,
      fileName
    );
  } catch (err) {
    console.error(err.message);
  }
};

readFiles();
