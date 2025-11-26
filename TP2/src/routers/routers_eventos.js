const express = require("express");
const path = require('path');
const router = express.Router();
const {obtenerEventosJson, obtenerEventoJson} = require('../models/models_eventos.js');
router.use(express.json());

router.get("/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/views', 'index.html'));
});

router.get("/evento.html", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/views', 'evento.html'));
});

router.get("/login.html", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views', 'login.html'));
});

router.get("/eventos", (req, res) => {
    objJson = JSON.parse(fs.readFileSync('eventos.json', 'utf8'));
    const data = objJson.eventos.map(obj => obj.img)
    res.json();
});

router.get("/api/eventos/:id_evento", (req, res) => {
    objJson = JSON.parse(fs.readFileSync('eventos.json', 'utf8'));
    let evento = obtenerEventoJson(req.params.id_evento);
    res.json(evento);
});