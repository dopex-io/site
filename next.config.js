const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  async redirects() {
    return [
      {
        source: '/frontier',
        destination: 'https://galxe.com/Dopex/campaign/GCfLytU9Qf',
        permanent: false,
      },
    ];
  },
};
