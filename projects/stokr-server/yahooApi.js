const YahooFinanceAPI = require('yahoo-finance-data').default;
let api;

exports.default = {
  init: (key, secret) => {
    api = new YahooFinanceAPI({
      key,
      secret
    });
  },
  get: () => api
};
