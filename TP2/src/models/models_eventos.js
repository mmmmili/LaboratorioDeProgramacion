const fs = require('fs');
const path = require('path');

const pathJson = path.join(__dirname, '../../public/json/eventos.json');

function obtenerEventosJson() {
    const archivoEventos = fs.readFileSync(pathJson, 'utf-8');
    const eventosJson = JSON.parse(archivoEventos);
    return eventosJson;
}

function obtenerEventoJson(id) {
    const archivoEventos = fs.readFileSync(pathJson, 'utf-8');
    const eventosJson = JSON.parse(archivoEventos);
    return eventosJson.find(evento => evento.id_evento == id);
}

function cargarEventoParticular(contenedor, evento) {
    contenedor.innerHTML = ` 
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
            </div>   `

}

function cargarEventosPorCat(contenedor, eventos,limite) {
   
    for (let i = 0; i < Math.min(eventos.length, limite); i++) {
        const evento = eventos[i];
        const enlaceEvento = contenedor.ownerDocument.createElement('a');
        enlaceEvento.href = `/eventos/${evento.id_evento}`;
        enlaceEvento.innerHTML = `<img src="${evento.img}" alt="${evento.titulo}" class="img-eventos">`;
        contenedor.appendChild(enlaceEvento);
        enlaceEvento.className = 'elemento-carrusel';
    }
    
}

module.exports = { obtenerEventoJson, obtenerEventosJson, cargarEventoParticular, cargarEventosPorCat };