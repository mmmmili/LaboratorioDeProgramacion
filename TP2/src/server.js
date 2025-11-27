const express = require("express");
const path = require('path');
const routersEventos = require('./routers/routers_eventos.js');

const app = express();
const port = 4001;

const staticPath = path.join(__dirname, '../public');
const indexPath = path.join(staticPath, '/views/index.html')

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../public/images')));

app.get("/", (req, res) => {
  res.sendFile(indexPath);
});

app.listen(port, () => {
  console.log("UP");
});

app.use('/api/eventos', routersEventos);