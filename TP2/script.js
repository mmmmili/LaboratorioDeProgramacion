const param = new URLSearchParams(window.location.search);
const id = param.get("id");

const eventos = {
    kiwi: {
        titulo: "Kiwi",
        img: "images/kiwi.jpeg",
        lugar: "La Nonina",
        apertura: "00:00hs",
        cierre: "07:00hs",
        contacto: "https://www.instagram.com/fiesta_kiwi/",
        ubicacion: "https://maps.app.goo.gl/HFv7RjbetbU9fR1CA",
    },
    tecno: {
        titulo: "Jodita",
        img: "images/vision.jpeg",
        lugar: "Club X",
        apertura: "23:00hs",
        cierre: "06:00hs",
        contacto: "https://instagram.com/jodita",
        ubicacion: "https://maps.app.goo.gl/HFv7RjbetbU9fR1CA",

    },
    rkt: {
        titulo: "RKT",
        img: "images/caserio2.jpeg",
        lugar: "El Caserío",
        apertura: "01:00hs",
        cierre: "08:00hs",
        contacto: "https://instagram.com/rktfiesta",
        ubicacion: "https://maps.app.goo.gl/HFv7RjbetbU9fR1CA",
    },
    moritz: {
        titulo: "Moritz Hofbauer + Malena Narvay",
        img: "images/moritz-malena.jpeg",
        lugar: "Finca La Nonina, Patagonia",
        apertura: "23:00hs",
        cierre: "07:00hs",
        contacto: "https://instagram.com/visionclub",
        ubicacion: "https://maps.app.goo.gl/HFv7RjbetbU9fR1CA",
    },
    kevin: {
        titulo: "Kevin Di Serna + Maxi Degrassi",
        img: "images/kevin-maxi.jpeg",
        lugar: "Finca La Nonina, Patagonia",
        apertura: "23:00hs",
        cierre: "07:00hs",
        contacto: "https://instagram.com/visionclub",
        ubicacion: "https://maps.app.goo.gl/HFv7RjbetbU9fR1CA",
    },
    fideles: {
        titulo: "Fideles + Lion + Farizano",
        img: "images/fideles.jpeg",
        lugar: "La Mansa Arena",
        apertura: "23:00hs",
        cierre: "06:00hs",
        contacto: "https://instagram.com/visionclub",
        ubicacion: "https://maps.app.goo.gl/HFv7RjbetbU9fR1CA",
    },
    simon: {
        titulo: "Simon Vuarambon (Extended Set) + Doyel",
        img: "images/simon.jpeg",
        lugar: "Finca La Nonina, Patagonia",
        apertura: "23:00hs",
        cierre: "07:00hs",
        contacto: "https://instagram.com/visionclub",
        ubicacion: "https://maps.app.goo.gl/HFv7RjbetbU9fR1CA",
    },
    primavera: {
        titulo: "Primavera Vision",
        img: "images/primavera.jpeg",
        lugar: "Finca La Nonina, Patagonia",
        apertura: "23:00hs",
        cierre: "07:00hs",
        contacto: "https://instagram.com/visionclub",
        ubicacion: "https://maps.app.goo.gl/HFv7RjbetbU9fR1CA",
    },
    caserio: {
        titulo: "El Caserío Club",
        img: "images/caserio.jpeg",
        lugar: "El Caserío Club, Temperley",
        apertura: "01:00hs",
        cierre: "08:00hs",
        contacto: "https://instagram.com/elcaserioclub",
        ubicacion: "https://maps.app.goo.gl/HFv7RjbetbU9fR1CA",
    },
    nasari: {
        titulo: "Nasari Neuquén",
        img: "images/nasari.jpeg",
        lugar: "Mood, Neuquén",
        apertura: "23:00hs",
        cierre: "06:00hs",
        contacto: "https://instagram.com/nasarineuquen",
        ubicacion: "https://maps.app.goo.gl/HFv7RjbetbU9fR1CA",
    },
    modoRkt: {
        titulo: "Modo RKT",
        img: "images/rkt.jpeg",
        lugar: "Mood Club",
        apertura: "23:00hs",
        cierre: "06:00hs",
        contacto: "https://instagram.com/modorkt",
        ubicacion: "https://maps.app.goo.gl/HFv7RjbetbU9fR1CA",
    },
    caserio2: {
        titulo: "El Caserío Club - DJs Invitados",
        img: "images/caserio2.jpeg",
        lugar: "El Caserío Club, Temperley",
        apertura: "01:00hs",
        cierre: "08:00hs",
        contacto: "https://instagram.com/elcaserioclub",
        ubicacion: "https://maps.app.goo.gl/HFv7RjbetbU9fR1CA",
    },
    rktNight: {
        titulo: "RKT Night",
        img: "images/rkt2.jpeg",
        lugar: "Mandoo, Adrogué",
        apertura: "19:30hs",
        cierre: "03:00hs",
        contacto: "https://instagram.com/mandooklub",
        ubicacion: "https://maps.app.goo.gl/HFv7RjbetbU9fR1CA",
    },
};

const evento = eventos[id];
/* el innerHTML rellena el div que tiene ese id con lo que sigue dsp */
if (evento) {
    document.getElementById("infoevento").innerHTML = `
        <h1>${evento.titulo}</h1>
        <img src="${evento.img}" alt="${evento.titulo}" class="img">
        <h3><a href="${evento.ubicacion}">Lugar: ${evento.lugar}</a></h3>
        <p>Hora de apertura: ${evento.apertura}</p>
        <p>Hora de cierre: ${evento.cierre}</p>
        <a href="${evento.contacto}" target="_blank">Contacto</a>
    `;
    document.title = evento.titulo;
}

/*  <!--                 <map name="destacado">
 <area shape="rect" coords="0,0,1000,1000" href="evento.html" onclick="funcionEvento()">
 </map>
 <script>
 function funcionEvento() {
     alert("Se accede al evento destacado!");
 }
  </script> --> */