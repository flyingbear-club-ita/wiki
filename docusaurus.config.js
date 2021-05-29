/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Flying Bear Ghost Wiki',
  tagline: 'Setup, calibrazioni, upgrade e molto altro',
  url: 'https://flyingbear-club-ita.github.io/',
  baseUrl: '/wiki/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'flyingbear-club-ita',
  projectName: 'wiki',
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: '/gallery',
          label: 'Scheda tecnica',
          position: 'left',
          items:[
            {
              href:'/four_s',
              label: 'Ghost 4s',
              position: 'left',
            },
            {
              href: '/five',
              label: 'Ghost 5',
              position: 'left',
            }
          ]
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Wiki',
          position: 'left',
        },
        {
          href: '/gallery',
          label: 'Gallery',
          position: 'left',
        },
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
          href: '/faq',
          label: 'FAQ',
          position: 'left',
        },
        {
          href: 'https://github.com/flyingbear-club-ita',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: 'Created by the Flyingbear Italian Community',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/flyingbear-club-ita',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
