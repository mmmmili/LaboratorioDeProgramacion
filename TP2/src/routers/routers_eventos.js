const express = require("express");
const router = express.Router();

const {obtenerEventosJson, obtenerEventoJson,cargarEventoParticular} = require('../models/models_eventos.js');


const fs = require("fs");
const path = require("path");


router.use(express.json());

router.get("/", (req, res) => {
    objJson = obtenerEventosJson();
    //const data = objJson.eventos.map(obj => obj.img)
    res.json(objJson);
});



router.get("/index.html", async (req, res) => {
    //es.sendFile(path.join(__dirname, '../../public/views', 'index.html'));
    const eventos = obtenerEventosJson();
    const html = await fs.promises.readFile(path.join(__dirname, '../../public/views', 'index.html'), 'utf8');
    const { JSDOM } = require('jsdom');
    const dom = new JSDOM(html);
    const doc = dom.window.document;

    const contenedorCachengue = doc.getElementById('eventos-cachengue');

});

router.get("/evento.html", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/views', 'evento.html'));
});

router.get("/eventos/:id", async (req, res) => {
  const id = Number(req.params.id);
  const evento = obtenerEventoJson(id);

  const html = await fs.promises.readFile(path.join(__dirname, '../../public/views', 'evento.html'), 'utf8');

  const { JSDOM } = require('jsdom');
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  cargarEventoParticular(doc.getElementById('infoevento'), evento);


  res.send(dom.serialize());

});


router.get("/login.html", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/views', 'login.html'));
});

module.exports = router;
