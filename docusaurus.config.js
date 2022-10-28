// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SupportWell',
  url: 'https://supportwell.samuelsharp.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'glossary',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true
      },
      navbar: {
        title: 'SupportWell',
        logo: {
          alt: 'SupportWell Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            label: 'Emergency',
            position: 'right',
            to: '/emergency',
          },
          {
            label: 'Resources',
            to: '/resources',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Glossary',
          },
          {
            label: 'Bullying',
            to: '/bullying',
          }
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
