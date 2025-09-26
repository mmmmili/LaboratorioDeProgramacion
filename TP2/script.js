const param = new URLSearchParams(window.location.search);
const id = param.get("id");

const eventos = {
    /*---------- CACHENGUE   ----------*/ 
    kiwi: {
        titulo: "Kiwi",
        img: "images/kiwi.jpeg",
        lugar: "Finca la Nonnina",
        apertura: "00:00hs",
        cierre: "07:00hs",
        contacto: "https://www.instagram.com/fiesta_kiwi/",
        ubicacion: "https://maps.app.goo.gl/HFv7RjbetbU9fR1CA",
    },
    tuki: {
        titulo: "TUKI Halloween Old School",
        img: "images/tuki.jpg",
        lugar: "MOOD ",
        apertura: "00:30hs",
        cierre: "06:00hs",
        contacto: "https://instagram.com/moodliveok",
        ubicacion: "https://maps.app.goo.gl/HFLYTMRo8y1SW6pb8",
    },
    bresh: {
        titulo: "BRESH",
        img: "images/breshita.jpg",
        lugar: "Espacio Duam ",
        apertura: "00:30hs",
        cierre: "06:00hs",
        contacto: "https://instagram.com/bresh",
        ubicacion: "https://maps.app.goo.gl/vNpyynu9TzPmdJPH7",
    },
    summer: {
        titulo: "Summer",
        img: "images/cachengue.jpg",
        lugar: "Espacio Duam ",
        apertura: "00:30hs",
        cierre: "06:00hs",
        contacto: "https://instagram.com/summerfest",
        ubicacion: "https://maps.app.goo.gl/vNpyynu9TzPmdJPH7",
    },
    tulum: {
        titulo: "Slay",
        img: "images/cachengue2.jpg",
        lugar: "TULUM CLUB ",
        apertura: "00:00hs",
        cierre: "07:00hs",
        contacto: "https://instagram.com/tulumbarok",
        ubicacion: "https://maps.app.goo.gl/jsMpK9o7WoRUmy477",
    },
    /*------- TECNO -------- */
    tecno: {
        titulo: "Moritz Hofbauer + Malena Narvay",
        img: "images/vision.jpeg",
        lugar: "Finca la Nonnina",
        apertura: "23:00hs",
        cierre: "06:00hs",
        contacto: "https://instagram.com/vision.festival",
        ubicacion: "https://maps.app.goo.gl/aKwALfqynxykBW5s8",

    },
    tecno2: {
        titulo: "Vision - Kevin Di Serna + Maxi Degrassi",
        img: "images/tec2.jpg",
        lugar: "Finca la Nonnina ",
        apertura: "00:00hs",
        cierre: "08:00hs",
        contacto: "https://instagram.com/vision.festival",
        ubicacion: "https://maps.app.goo.gl/aKwALfqynxykBW5s8",
    },
    tecno3: {
        titulo: "Vision - Fideles + Lion + Farizano",
        img: "images/tec3.jpg",
        lugar: "Finca la Nonnina ",
        apertura: "00:00hs",
        cierre: "08:00hs",
        contacto: "https://instagram.com/vision.festival",
        ubicacion: "https://maps.app.goo.gl/aKwALfqynxykBW5s8",
    },
    tecno4: {
        titulo: "Vision - Simon Vuarambon (Extended Set) + Doyel",
        img: "images/tec4.jpg",
        lugar: "Finca la Nonnina ",
        apertura: "00:00hs",
        cierre: "08:00hs",
        contacto: "https://instagram.com/vision.festival",
        ubicacion: "https://maps.app.goo.gl/aKwALfqynxykBW5s8",
    },
    vision2: {
        titulo: "Primavera Vision",
        img: "images/vision2.jpeg",
        lugar: "Finca la Nonnina ",
        apertura: "00:00hs",
        cierre: "08:00hs",
        contacto: "https://instagram.com/vision.festival",
        ubicacion: "https://maps.app.goo.gl/aKwALfqynxykBW5s8",
    },
    /*--------- RKT --------- */
    rkt: {
        titulo: "RKT",
        img: "images/caserio2.jpeg",
        lugar: "El Caserío",
        apertura: "01:00hs",
        cierre: "08:00hs",
        contacto: "https://instagram.com/rktfiesta",
        ubicacion: "https://maps.app.goo.gl/HFv7RjbetbU9fR1CA",
    },
    caserio: {
        titulo: "El Caserío Club",
        img: "images/caserio.jpeg",
        lugar: "El Caserío Club",
        apertura: "01:00hs",
        cierre: "08:00hs",
        contacto: "https://instagram.com/elcaserioclub",
        ubicacion: "https://maps.app.goo.gl/HFv7RjbetbU9fR1CA",
    },
    wasabi: {
        titulo: "Wasabi Neuquén",
        img: "images/wasabi.jpg",
        lugar: "MOOD",
        apertura: "23:00hs",
        cierre: "06:00hs",
        contacto: "https://instagram.com/moodliveok",
        ubicacion: "https://maps.app.goo.gl/HFLYTMRo8y1SW6pb8",
    },
    modoRkt: {
        titulo: "Modo RKT",
        img: "images/rkt.jpg",
        lugar: "Mood",
        apertura: "23:00hs",
        cierre: "06:00hs",
        contacto: "https://instagram.com/modorkt",
        ubicacion: "https://maps.app.goo.gl/HFv7RjbetbU9fR1CA",
    },
    caserio2: {
        titulo: "El Caserío Club - DJs Invitados",
        img: "images/caserio.jpeg",
        lugar: "El Caserío Club",
        apertura: "01:00hs",
        cierre: "08:00hs",
        contacto: "https://instagram.com/elcaserioclub",
        ubicacion: "https://maps.app.goo.gl/HFv7RjbetbU9fR1CA",
    },
    rktNight: {
        titulo: "RKT Night",
        img: "images/rkt1.jpg",
        lugar: "MOOD",
        apertura: "19:30hs",
        cierre: "03:00hs",
        contacto: "https://instagram.com/moodliveok",
        ubicacion: "https://maps.app.goo.gl/HFLYTMRo8y1SW6pb8",
    },
};

const evento = eventos[id];
/* el innerHTML rellena el div que tiene ese id con lo que sigue dsp */
if (evento) {
    document.getElementById("infoevento").innerHTML = `
        <h1>${evento.titulo}</h1>
        <img src="${evento.img}"  alt="${evento.titulo}" class="img-eventoGrande">
        <h3><p> Lugar: <a href="${evento.ubicacion}"> ${evento.lugar}</a></p></h3>
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