/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Flyingbear Ghost Wiki',
  tagline: 'Setup, calibrazioni, upgrade e molto altro',
  url: 'https://flyingbearghost.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'flyingbear-club-ita',
  trailingSlash: false,
  projectName: 'wiki',
  scripts: [
    {
      src: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      async: true,
    },
    {
    src: '/anchorAd.js',
    },
  ],
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: '/',
          label: 'Scheda tecnica',
          position: 'left',
          items:[
            {
              href:'/four_s',
              label: 'Ghost 4s',
            },
            {
              href: '/five',
              label: 'Ghost 5',
            }
          ]
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Wiki',
          position: 'left',
        },
        // {
        //   href: '/gallery',
        //   label: 'Gallery',
        //   position: 'left',
        // },
        {
          href: '/upgrades',
          label: 'Upgrades',
          position: 'left',
        },
        {
          href: '/ricambi',
          label: 'Ricambi',
          position: 'left',
        },
        {
          href: 'https://github.com/flyingbear-club-ita',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: 'Created by the Flyingbear Italian Community',
    },
    googleAnalytics: {
      trackingID: 'UA-199656279-2',
      // Optional fields.
      anonymizeIP: false, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/flyingbear-club-ita/wiki/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      "docusaurus2-dotenv",
      {
        systemvars: true,
      },
    ],
  ],
  i18n: {
    defaultLocale: 'it',
    locales: ['en', 'it'],
  },
};
