
const esPaginaEvento = window.location.pathname.includes("evento.html");

if (esPaginaEvento) {
    const param = new URLSearchParams(window.location.search);
    const id = param.get("id_evento");

    let eventos = [];

    fetch(`http://localhost:4001/api/eventos`)

        .then(response => {
            if (!response.ok) throw new Error('Error cargando JSON');
            return response.json();
        })
        .then(json => {
            eventos = json.eventos;
            //loadedEvents(); no se q onda esto

        })
        .catch(error => console.error(error));


  /*   
    function cargarEvento() {
        fetch(`http://localhost:4001/api/eventos/${id}`)
            .then(response => {
                if (!response.ok) throw new Error("Error cargando JSON");
                return response.json();
            })
            .then(evento => {
                console.log("Evento cargado:", evento);
                mostrarEvento(evento);
            })
            .catch(err => console.error(err));
    } */
    /*const evento = eventos[id_evento];*/

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


/* para mover los carruseles */

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
      */
}

document.getElementById("loginForm").addEventListener("submit", async (e) => {
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

        if (data.token) {
            // store JWT in localStorage
            localStorage.setItem("token", data.token);
            console.log("Token saved:", data.token);

            // redirect or show message
            //window.location.href = "/admin.html";
        } else {
            alert("Credenciales invalidas");
        }

    } catch (err) {
        console.error("Login error:", err);
    }
});


function toggler() {
    var x = document.getElementById("password");
    (x.type === "password") ? x.type = "text" : x.type = "password";
    x = document.getElementById("toggle-password");
    (x.className === "fa-solid fa-eye") ? x.className = "fa-solid fa-eye-slash" : x.className = "fa-solid fa-eye";
}