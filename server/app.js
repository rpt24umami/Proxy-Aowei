const express = require('express');
const { dirname } = require('path');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname,'../dist')));

app.get('/products/:id', (req, res) => {
  res.sendFile(path.join(__dirname,'../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Proxy listening at http://localhost:${port}`)
});