"use strict";

var express = require('express');

var app = express();

var path = require('path');

var PORT = process.env.PORT || 8081;

var dbquery = require('../db/queries');

var _require = require('http-proxy-middleware'),
    createProxyMiddleware = _require.createProxyMiddleware; // REVIEWS COMPONENT


app.use(express["static"](path.join(__dirname, '../frontEnd/dist')));
app.use(express.json());
app.get('/products', function (req, res) {
  queries.getProducts(function (error, result) {
    if (error) {
      console.error('error at endpoint with getting products', error);
    } else {
      res.send(result);
    }
  });
}); // Need to move server compiled into same folder as server

app.listen(PORT, function () {
  console.log("server is CONNECTED on PORT:".concat(PORT));
});
