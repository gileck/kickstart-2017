const express = require('express');
const symbols = require('./symbols').default;
const yahooApi = require('./yahooApi').default;
const cors = require('cors')
const app = express();

app.use(cors());

app.get('/quotes', function (req, res) {
  console.log(`Getting quotes for query: ${req.query.q}`);

  yahooApi
    .get()
    .getRealtimeQuotes(req.query.q)
    .then(data => res.send(data))
    .catch(err => {
      console.log('Failed getting quotes', err);
      res.status(500).send('Oops, Something is broken!');
    });
});

app.get('/search', function (req, res) {
  console.log(`Searching quotes for query: ${req.query.q}`);
  
  yahooApi
    .get()
    .tickerSearch(req.query.q)
    .then(data => res.send(data))
    .catch(err => {
      console.log('Failed searching quotes', err);
      res.status(500).send('Oops, Something is broken!');
    });
});

app.get('/symbol', function (req, res) {
  console.log(`Listing symbols`);
  res.send(symbols.list());
});

app.post('/symbol/:symbol', function (req, res) {
  console.log(`Adding symbol: ${req.params.symbol}`);
  const symbol = (req.params.symbol || '').toUpperCase();
  symbols.add(symbol);
  res.send(true);
});

app.delete('/symbol/:symbol', function (req, res) {
  console.log(`Removing symbol: ${req.params.symbol}`);
  const symbol = (req.params.symbol || '').toUpperCase();
  symbols.remove(symbol);
  res.send(true);
});

exports.default = {
  start: (key, secret) => {
    yahooApi.init(key, secret);
    app.listen(7000, function () {
      console.log('Stokr-Server app listening on port 7000!');
    });
  }
};
