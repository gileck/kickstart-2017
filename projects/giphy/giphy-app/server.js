const express = require('express');
const app = express();

const giphyLib = require('../giphy-lib/index.js');

app.use(express.static(__dirname));

app.get('/gif/:query',function (req,res) {
    const query = req.params.query;
    giphyLib.search(query).then(data => res.send(data));
});

app.listen(3000, function () {
    console.log('app is running on post 3000');
});
