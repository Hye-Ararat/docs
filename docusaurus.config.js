// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Hye Ararat",
  tagline: "Take your infrastructure to its peak",
  url: "https://hyeararat.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Hye-Ararat", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Hye-Ararat/docs/tree/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Hye-Ararat/docs/tree/master/",
        },
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
        title: "Hye Ararat",
        logo: {
          alt: "Hye Ararat",
          src: "img/araratLogo.png",
        },
        items: [
          { to: "/home", label: "Home", position: "left" },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },

          { to: "/blog", label: "Blog", position: "left" },

          {
            href: "https://github.com/Hye-Ararat/docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      /*     announcementBar: {
        id: "yergu",
        content: "🎉 The All New Hye Ararat Yergu Is Now In Beta 🎉",
      }, */
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Terms of Service",
                to: "/tos",
              },
              {
                label: "Privacy Policy",
                to: "/privacy",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/nXeMVBXeps",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/HyeCompany",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/Hye-Ararat",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hye Hosting LLC.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark",
      },
    }),
};

module.exports = config;
