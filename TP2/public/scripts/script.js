let eventos;

function traerEventos() {
    console.log("trayendo eventos...");
    fetch(`http://localhost:4001/eventos`)

        .then(response => {
            if (!response.ok) throw new Error('Error cargando JSON');
            return response.json();
        })
        .then(json => {
            console.log("Eventos cargados");
            eventos = json;
            funcionBusqueda();

        })
        .catch(error => console.error(error));

}


/*    function mostrarEvento(evento) {

       el innerHTML rellena el div que tiene ese id con lo que sigue dsp 
       if (!evento) {
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
                       <iframe class = "rect iframe" src="${evento.url}" width = "100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                   </div>
               </div>
           </div>
       `
           document.title = evento.titulo;
       }
   }
   cargarEvento();
} */
const inputCiudad = document.getElementById("input-ciudad"); // agarro el input
const resultados = document.getElementById("result-busqueda"); // agarro el ul de resultados
console.log("input ciudad:", inputCiudad);


/* para mover los carruseles */



const funcionBusqueda = () => {
    console.log("buscando...");

    const filtro = inputCiudad.value.toLowerCase(); // a minuscula el input
    resultados.innerHTML = "";

    if (filtro.trim() != "") {
        const filtrados = eventos.filter(evento =>
            removerAcentos(evento.ciudad).toLowerCase().startsWith(removerAcentos(filtro))
        );

        const ciudadesUnicas = [...new Set(filtrados.map(evento => evento.ciudad))]; //elimino repetidos
        console.log(ciudadesUnicas);

        ciudadesUnicas.forEach(ciudad => {
            const li = document.createElement("li");
            li.textContent = ciudad;
            li.classList.add("resultado-list");
            resultados.appendChild(li);


            li.addEventListener("click", () => {
                inputCiudad.value = ciudad;
                resultados.innerHTML = "";

                eventos.forEach(evento => {
                    console.log("evento ciudad:", evento.id_evento);
                    const eventosDoc = document.getElementById(evento.id_evento);
                    console.log("eventoDoc:", eventosDoc);
                    if (evento.ciudad === ciudad) {
                        eventosDoc.style.display = "block";
                    } else {
                        eventosDoc.style.display = "none";
                    }

                })
            })
        });
    }
}



if(inputCiudad!=null){
inputCiudad.addEventListener("click", traerEventos);
inputCiudad.addEventListener("input", funcionBusqueda);}




function removerAcentos(cadena) {
    return cadena
        .normalize('NFD') // Descompone los caracteres en base y marca diacrítica
        .replace(/[\u0300-\u036f]/g, ''); // Elimina las marcas diacríticas
}



let formularioLogin = document.getElementById("loginForm");
if (formularioLogin != null) {
    formularioLogin.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const pass = document.getElementById("password").value;

        try {
            const res = await fetch("/login.html", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, pass })
            });

            const data = await res.json();
            console.log(data)
            window.location.replace('/admin.html');
            /*if (res.cookies.token) {
                //window.location.replace('/admin.html');
            } else {
                alert("Credenciales invalidas");
            }*/
        } catch (err) {
            console.error("Error de login:", err);
        }
    });
}


document.querySelectorAll(".carrusel-contenedor").forEach(contenedor => {
    const carrusel = contenedor.querySelector(".carrusel");
    const btnIzq = contenedor.querySelector(".izquierda");
    const btnDer = contenedor.querySelector(".derecha");

    const scrollCantidad = 300; // cuanto se mueve

    btnIzq.addEventListener("click", () => {
        carrusel.scrollBy({
            left: -scrollCantidad,
            behavior: "smooth"
        });
    });

    btnDer.addEventListener("click", () => {
        carrusel.scrollBy({
            left: scrollCantidad,
            behavior: "smooth"
        });
    });
});


/*const funcionBusqueda = () => {
    const filtro = inputCiudad.value.toLowerCase(); // a minuscula el input
    resultados.innerHTML = "";

    if (filtro.trim() != "") {
        const filtrados = eventos.filter(evento =>
            removerAcentos(evento.ciudad).toLowerCase().startsWith(removerAcentos(filtro))
        );

        const ciudadesUnicas = [...new Set(filtrados.map(evento => evento.ciudad))]; //elimino repetidos
        console.log(ciudadesUnicas);

        ciudadesUnicas.forEach(ciudad => {
            const li = document.createElement("li");
            li.textContent = ciudad;
            li.classList.add("resultado-list");
            resultados.appendChild(li);


            li.addEventListener("click", () => {
                inputCiudad.value = ciudad;
                resultados.innerHTML = "";

                eventos.forEach(evento => {
                    console.log("evento ciudad:", evento.id_evento);
                    const eventosDoc = document.getElementById(evento.id_evento);
                    console.log("eventoDoc:", eventosDoc);
                    if (evento.ciudad === ciudad ) {
                        eventosDoc.style.display = "block";
                    } else {
                        eventosDoc.style.display = "none";
                    }

                })
            })
        });
    }
}



    inputCiudad.addEventListener("click", traerEventos);
    inputCiudad.addEventListener("input", funcionBusqueda);


function removerAcentos(cadena) {
    return cadena
      .normalize('NFD') // Descompone los caracteres en base y marca diacrítica
      .replace(/[\u0300-\u036f]/g, ''); // Elimina las marcas diacríticas
}
      


let formularioLogin = document.getElementById("loginForm");
if(formularioLogin!=null){
    formularioLogin.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    try {
        const res = await fetch("/login.html", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, pass })
        });
        
        const data = await res.json();
        console.log(data)
        window.location.replace('/admin.html');
        /*if (res.cookies.token) {
            //window.location.replace('/admin.html');
        } else {
            alert("Credenciales invalidas");
        }
    } catch (err) {
        console.error("Error de login:", err);
    }
});}
*/

document.querySelectorAll(".carrusel-contenedor").forEach(contenedor => {
    const carrusel = contenedor.querySelector(".carrusel");
    const btnIzq = contenedor.querySelector(".izquierda");
    const btnDer = contenedor.querySelector(".derecha");

    const scrollCantidad = 300; // cuanto se mueve

    btnIzq.addEventListener("click", () => {
        carrusel.scrollBy({
            left: -scrollCantidad,
            behavior: "smooth"
        });
    });

    btnDer.addEventListener("click", () => {
        carrusel.scrollBy({
            left: scrollCantidad,
            behavior: "smooth"
        });
    });
});

function toggler() {
    var x = document.getElementById("password");
    (x.type === "password") ? x.type = "text" : x.type = "password";
    x = document.getElementById("toggle-password");
    (x.className === "fa-solid fa-eye") ? x.className = "fa-solid fa-eye-slash" : x.className = "fa-solid fa-eye";
}