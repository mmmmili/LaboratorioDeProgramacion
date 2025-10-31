const param = new URLSearchParams(window.location.search);
const id = param.get("id_evento");
/*
Cuando pasemos a NodeJS se usa así
const eventos = require('./eventos.json');
*/
const eventos = [];
fetch("eventos.json")
    .then(response => {
        if(!response.ok) throw new Error("Error!!");
        return response.json;
    })
    .then(data => {
        this.eventos = data;
    })


console.log(eventos);
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


const inputCiudad = document.getElementById("input-ciudad"); // agarro el input
const resultados = document.getElementById("result-busqueda"); // agarro el ul de resultados

const funcionBusqueda = () => {
    const filtro = inputCiudad.value.toLowerCase(); // a minuscula el input
    resultados.innerHTML = "";

    if(filtro.trim() != "") {
    const filtrados = Object.values(eventos).filter(evento =>
        removerAcentos(evento.ciudad).toLowerCase().startsWith(removerAcentos(filtro))
    );

    const ciudadesUnicas = [...new Set(filtrados.map(evento => evento.ciudad))]; //elimino repetidos

    ciudadesUnicas.forEach(ciudad => {
        const li = document.createElement("li");
        li.textContent = ciudad;
        li.classList.add("resultado-list");
        resultados.appendChild(li);
    });

    li.addEventListener("click",() => {
        inputCiudad.value = ciudad;
        resultados.innerHTML = "";

        eventos.forEach(evento => {
            if(evento.ciudad === ciudad) {
                evento.style.display = "block";
            } else {
                evento.style.display = "none";
            }
        })
    })
}
}


inputCiudad.addEventListener("input", funcionBusqueda);


function removerAcentos(cadena) {
    return cadena
      .normalize('NFD') // Descompone los caracteres en base y marca diacrítica
      .replace(/[\u0300-\u036f]/g, ''); // Elimina las marcas diacríticas
}

function toggler(){
    var x = document.getElementById("password");
    (x.type === "password") ? x.type= "text" : x.type = "password";
}
refs/remotes/origin/main




/* el innerHTML rellena el div que tiene ese id con lo que sigue dsp */
