module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'be', 'be-de', 'be-nl', 'be-fr'],
    defaultLocale: 'en',
    domains: [
      {
        domain: 'example.be',
        defaultLocale: 'be',
        locales: ['be-de', 'be-nl', 'be-fr'],
      },
    ],
  },
};
