const express = require("express");
const path = require('path');
const fs = require('fs');
const app = express();

const port = 4001;
var objJson = []; 

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

app.get("/eventos", (req, res) => {
  objJson = JSON.parse(fs.readFileSync('eventos.json', 'utf8'));
  const data = objJson.eventos.map(obj => obj.img)
  res.json(data);
});

app.get("/api/eventos/:id_evento", (req, res) => {
  objJson.eventos.find()
  res.json(objJson);
});

app.listen(port, () => {
  console.log("Ejemplo aaa");
});