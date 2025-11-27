const fs = require('fs');
const pathJson = "public/json/eventos.json"

function obtenerEventosJson(){
    const archivoEventos = fs.readFileSync(pathJson, 'utf-8');
    const eventosJson = JSON.parse(archivoEventos);
    return eventosJson;
}

function obtenerEventoJson(id){
    const archivoEventos = fs.readFileSync(pathJson, 'utf-8');
    const eventosJson = JSON.parse(archivoEventos);
    return eventosJson.find(evento => evento.id_evento == id );
}

module.exports = {obtenerEventoJson, obtenerEventosJson};