const express = require("express");
const path = require('path');
const app = express();

const port = 4001;

app.use(express.static(path.join(__dirname, 'TP2')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'TP2', 'index.html'));
});

app.listen(port, () => {
  console.log("Ejemplo aaa");
});