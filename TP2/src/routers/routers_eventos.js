const express = require("express");
const router = express.Router();

const {obtenerEventosJson, obtenerEventoJson} = require('../models/models_eventos.js');


const fs = require("fs");
const path = require("path");


router.use(express.json());

router.get("/", (req, res) => {
    objJson = obtenerEventosJson();
    //const data = objJson.eventos.map(obj => obj.img)
    res.json(objJson);
});



router.get("/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/views', 'index.html'));
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

  doc.getElementById('infoevento').innerHTML = `    
     <h1 class = "evento-particular">
                <p>${evento.titulo}</p>
            </h1>
            <div class = "eventosparticulares">
                <div class = "col1">
                    <img src="${evento.img}"  alt="${evento.titulo}" class="img-eventoGrande">
                </div>
                <div class = "col2">
                    <div class = "row1 rect">
                        <p> Lugar: ${evento.lugar}</a></p>
                    </div>
                    <div class = "row2 rect"> 
                            <p>Apertura: ${evento.apertura} | Cierre: ${evento.cierre}</p>
                    </div>
                    <div class = "row3 rect"> 
                            <a href="${evento.contacto}" target="_blank">Contacto</a>
                    </div>
                    <div class = "row4 ">
                        <iframe class = "rect iframe" src="${evento.url}" width = "100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>   
           `


  res.send(dom.serialize());

});


router.get("/login.html", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/views', 'login.html'));
});

module.exports = router;
