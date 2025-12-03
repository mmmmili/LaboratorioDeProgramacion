const express = require("express");
const path = require('path');
const routersEventos = require('./routers/routers_eventos.js');

const app = express();
const port = 4001;

//const staticPath = path.join(__dirname, '../public');
//const indexPath = path.join(staticPath, '/views/index.html');
const rootPath = __dirname; 

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, '../public/images')));
app.use('/api/eventos', routersEventos);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/views/index.html"));
});

app.get("api/eventos/:id_evento", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/views/evento.html"))
});

app.listen(port, () => {
  console.log("UP");
});

