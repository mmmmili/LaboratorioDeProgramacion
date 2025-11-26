const express = require("express");
const path = require('path');
const routersEventos = require('./routers/routers_eventos.js');

const app = express();

const port = 4001;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../public/images')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views', 'index.html'));
});

app.listen(port, () => {
  console.log("Ejemplo aaa");
});

app.use('/api/eventos', routersEventos);