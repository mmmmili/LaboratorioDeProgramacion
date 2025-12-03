const express = require("express");
const router = express.Router();

const {obtenerEventosJson, obtenerEventoJson} = require('../models/models_eventos.js');

const path = require('path');

router.use(express.json());

router.get("/", (req, res) => {
    objJson = obtenerEventosJson();
    //const data = objJson.eventos.map(obj => obj.img)
    res.json(objJson);
});

router.get("/:id_evento", (req, res) => {
    const id = Number(req.params.id_evento);
    const evento = obtenerEventoJson(id);
    if(evento){
        res.status(200).json(evento);
    }else{
        res.status(404).json({message: 'El evento con ID ${id} no fue encontrado'});
    }
});

router.get("/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/views', 'index.html'));
});

router.get("/evento.html", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/views', 'evento.html'));
});

router.get("/login.html", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views', 'login.html'));
});

module.exports = router;
