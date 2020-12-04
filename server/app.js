const express = require('express');
const { dirname } = require('path');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname,'../dist')));

app.get('/', (req, res) => {
  res.send('index.html');
});

app.listen(port, () => {
  console.log(`Proxy listening at http://localhost:${port}`)
});