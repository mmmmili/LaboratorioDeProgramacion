const express = require("express");
const path = require('path');
const app = express();

const port = 4001;

app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get("/evento.html", (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'evento.html'));
});

app.get("/login.html", (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.listen(port, () => {
  console.log("Ejemplo aaa");
});