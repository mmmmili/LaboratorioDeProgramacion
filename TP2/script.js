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
    }
  };

  const evento = eventos[id];
  /* el innerHTML rellena el div que tiene ese id con lo que sigue dsp */
  if(evento){
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