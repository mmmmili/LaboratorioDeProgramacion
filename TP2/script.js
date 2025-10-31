const param = new URLSearchParams(window.location.search);
const id = param.get("id");

const eventos = eventos.json;

const evento = eventos[id_evento];
/* el innerHTML rellena el div que tiene ese id con lo que sigue dsp */
if (evento) {
    document.getElementById("infoevento").innerHTML = `        
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
                    <iframe class = "rect iframe" src=${evento.url} width = "100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            <div>
        </div>
    `;
    document.title = evento.titulo;
}

function toggler(){
    var x = document.getElementById("password");
    (x.type === "password") ? x.type= "text" : x.type = "password";
}