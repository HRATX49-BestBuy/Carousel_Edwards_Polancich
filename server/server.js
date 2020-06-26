const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8081;
const dbquery = require ('../db/queries')
const { createProxyMiddleware } = require('http-proxy-middleware');
// REVIEWS COMPONENT


app.use(express.static(path.join(__dirname, '../frontEnd/dist')));
app.use(express.json())



app.get('/products', (req, res) => {
  queries.getProducts((error, result) => {
      if (error) {
          console.error('error at endpoint with getting products', error);
      } else {
          res.send(result);
      }
  });
});

// Need to move server compiled into same folder as server


app.listen(PORT, () => {
  console.log(`server is CONNECTED on PORT:${PORT}`);
});
