// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Callbell Documentation",
  tagline: "",
  url: "https://www.callbell.eu",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "callbellchat", // Usually your GitHub org/user name.
  projectName: "callbell-public-docs", // Usually your repo name.

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: "filename",
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: "/",
        highlightSearchTermsOnTargetPage: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "pt", "it", "fr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Callbell Docs",
        logo: {
          alt: "My Site Logo",
          src: "img/logo-v2-no-text.svg",
        },
        items: [
          {
            to: "/",
            position: "left",
            label: "Home",
            activeBaseRegex: "^/$",
          },
          {
            to: "/api/reference/introduction",
            position: "left",
            label: "API Reference",
            activeBasePath: "/api/reference/",
          },
          {
            href: "https://feedback.callbell.eu/changelog ",
            position: "left",
            label: "Product Updates",
          },
          {
            href: "https://status.callbell.eu",
            position: "left",
            label: "Service Status",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          "ruby",
          "php",
          "go",
          "python",
          "csharp",
          "java",
          "rust",
        ],
      },
    }),
};

module.exports = config;
