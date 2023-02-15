// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Juicebox Docs",
  tagline: "Fund your thing.",
  url: "https://docs.juicebox.money",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.svg",
  trailingSlash: true,
  organizationName: "Juicebox", // Usually your GitHub org/user name.
  projectName: "juice-docs", // Usually your repo name.
  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "town-hall",
        routeBasePath: "town-hall",
        path: "./blogs/town-hall",
        showReadingTime: true,
        editUrl: "https://github.com/jbx-protocol/juice-docs/blob/main",
        blogSidebarTitle: "Town Halls",
        blogSidebarCount: "ALL",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "updates",
        routeBasePath: "updates",
        path: "./blogs/updates",
        showReadingTime: true,
        editUrl: "https://github.com/jbx-protocol/juice-docs/blob/main",
        blogSidebarTitle: "Updates",
        blogSidebarCount: "ALL",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "misc",
        routeBasePath: "misc",
        path: "./blogs/misc",
        showReadingTime: true,
        editUrl: "https://github.com/jbx-protocol/juice-docs/blob/main",
        blogSidebarTitle: "Articles",
        blogSidebarCount: "ALL",
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://github.com/jbx-protocol/juice-docs/blob/main",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/jbx-protocol/juice-docs/blob/main",
          blogSidebarTitle: "Articles",
          blogSidebarCount: "ALL",
          feedOptions: {
            type: "all",
            copyright: `Licensed under the MIT License`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
  },
  themeConfig: {
    image: "img/juicedocs.webp",
    metadata: [
      {
        name: "keywords",
        content:
          "juicebox, crypto, cryptocurrency, eth, ethereum, fundraising, treasury, JuiceboxDAO, dao, daos, funding, web3",
      },
      {
        name: "google-site-verification",
        content: "0Jp7zERBL5i76DiM-bODvBGgbjuVMEQGSuwOchP_ZnE",
      },
    ],
    algolia: {
      appId: "6C0XLHGK46",
      apiKey: "cf4910b7f8d618e1ee356e575db8120b",
      indexName: "juicebox",
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    mermaid: {
      theme: { light: "default", dark: "dark" },
    },
    navbar: {
      logo: {
        alt: "Juicebox Logo",
        src: "img/logo.webp",
      },
      items: [
        {
          type: "docSidebar",
          position: "left",
          sidebarId: "dev",
          label: "Docs",
        },
        {
          type: "docSidebar",
          position: "left",
          sidebarId: "user",
          label: "Project Creators",
        },
        {
          type: "docSidebar",
          position: "left",
          sidebarId: "dao",
          label: "Juicebox DAO",
        },
        {
          type: "dropdown",
          label: "Blogs",
          to: "/blogs",
          position: "left",
          items: [
            {
              label: "For Project Creators",
              to: "/blog",
            },
            {
              label: "Updates",
              to: "/updates",
            },
            {
              label: "Town Halls",
              to: "/town-hall",
            },
            {
              label: "Miscellaneous",
              to: "/misc",
            },
          ],
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          type: "dropdown",
          label: "Resources",
          position: "right",
          items: [
            {
              label: "juicebox.money",
              to: "https://juicebox.money",
            },
            {
              label: "Contact us",
              to: "https://juicebox.money/contact",
            },
            {
              label: "GitHub",
              to: "https://github.com/jbx-protocol",
            },
            {
              label: "Notion",
              to: "https://juicebox.notion.site/Juicebox-Notion-7b2436cec0c145c88b3efa0376c6dba3",
            },
            {
              label: "Dune Analytics",
              to: "https://dune.com/juicebox",
            },
            {
              label: "Proposals",
              to: "https://juicetool.xyz/nance/juicebox",
            },
            {
              label: "Voting",
              to: "https://juicetool.xyz/snapshot/jbdao.eth",
            },
          ],
        },
        {
          type: "dropdown",
          label: "Media",
          position: "right",
          items: [
            {
              label: "Discord",
              to: "https://discord.gg/juicebox",
            },
            {
              label: "Twitter",
              to: "https://twitter.com/juiceboxETH",
            },
            {
              label: "Newsletter",
              to: "https://juicenews.beehiiv.com/",
            },
            {
              label: "Podcast",
              to: "https://anchor.fm/thejuicecast",
            },
            {
              label: "Metaverse Juicebar",
              to: "https://www.cryptovoxels.com/parcels/6188",
            },
            {
              label: "YouTube",
              to: "https://www.youtube.com/c/JuiceboxDAO/",
            },
          ],
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      defaultLanguage: "solidity",
      additionalLanguages: ["solidity"],
    },
  },
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  scripts: [
    {
      src: "https://energetic-unwavering.juicebox.money/script.js",
      defer: true,
      "data-site": "UMYOVGDG",
    },
  ],
};
module.exports = config;
