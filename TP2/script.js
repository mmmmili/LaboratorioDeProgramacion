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
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24821.156123862045!2d-68.08900098916011!3d-38.954948799999976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33d462a98bef%3A0xb9170f526e01c4d1!2sLA%20NONNINA%20Espacio%20de%20Eventos!5e0!3m2!1ses!2sar!4v1759432761341!5m2!1ses!2sar",
    },
    
    tuki: {
        titulo: "TUKI Halloween Old School",
        img: "images/tuki.jpg",
        lugar: "MOOD ",
        apertura: "00:30hs",
        cierre: "06:00hs",
        contacto: "https://instagram.com/moodliveok",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.790159065663!2d-68.0583724!3d-38.951622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33196ae9bf47%3A0x8935eaa087a2d345!2sMood%20Live!5e0!3m2!1ses!2sar!4v1760044539504!5m2!1ses!2sar",
    },
    bresh: {
        titulo: "BRESH",
        img: "images/breshita.jpg",
        lugar: "Espacio Duam ",
        apertura: "00:30hs",
        cierre: "06:00hs",
        contacto: "https://instagram.com/bresh",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.674307862607!2d-68.1380886!3d-38.9542683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a333579b9b721%3A0xb25a8725a0874a24!2sEspacio%20Duam!5e0!3m2!1ses!2sar!4v1760044955380!5m2!1ses!2sar",
    },
    summer: {
        titulo: "Summer",
        img: "images/cachengue.jpg",
        lugar: "Espacio Duam ",
        apertura: "00:30hs",
        cierre: "06:00hs",
        contacto: "https://instagram.com/summerfest",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.674307862607!2d-68.1380886!3d-38.9542683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a333579b9b721%3A0xb25a8725a0874a24!2sEspacio%20Duam!5e0!3m2!1ses!2sar!4v1760044955380!5m2!1ses!2sar",
    },
    tulum: {
        titulo: "Slay",
        img: "images/cachengue2.jpg",
        lugar: "TULUM CLUB ",
        apertura: "00:00hs",
        cierre: "07:00hs",
        contacto: "https://instagram.com/tulumbarok",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.8704538165!2d-68.06197209999999!3d-38.949787799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a3300645c25d1%3A0x4879de12bb99adb0!2stulum!5e0!3m2!1ses!2sar!4v1760045029466!5m2!1ses!2sar",
    },
    /*------- TECNO -------- */
    tecno: {
        titulo: "Moritz Hofbauer + Malena Narvay",
        img: "images/vision.jpeg",
        lugar: "Finca la Nonnina",
        apertura: "23:00hs",
        cierre: "06:00hs",
        contacto: "https://instagram.com/vision.festival",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24821.156123862045!2d-68.08900098916011!3d-38.954948799999976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33d462a98bef%3A0xb9170f526e01c4d1!2sLA%20NONNINA%20Espacio%20de%20Eventos!5e0!3m2!1ses!2sar!4v1759432761341!5m2!1ses!2sar",

    },
    tecno2: {
        titulo: "Vision - Kevin Di Serna + Maxi Degrassi",
        img: "images/tec2.jpg",
        lugar: "Finca la Nonnina ",
        apertura: "00:00hs",
        cierre: "08:00hs",
        contacto: "https://instagram.com/vision.festival",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24821.156123862045!2d-68.08900098916011!3d-38.954948799999976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33d462a98bef%3A0xb9170f526e01c4d1!2sLA%20NONNINA%20Espacio%20de%20Eventos!5e0!3m2!1ses!2sar!4v1759432761341!5m2!1ses!2sar",
    },
    tecno3: {
        titulo: "Vision - Fideles + Lion + Farizano",
        img: "images/tec3.jpg",
        lugar: "Finca la Nonnina ",
        apertura: "00:00hs",
        cierre: "08:00hs",
        contacto: "https://instagram.com/vision.festival",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24821.156123862045!2d-68.08900098916011!3d-38.954948799999976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33d462a98bef%3A0xb9170f526e01c4d1!2sLA%20NONNINA%20Espacio%20de%20Eventos!5e0!3m2!1ses!2sar!4v1759432761341!5m2!1ses!2sar",
    },
    tecno4: {
        titulo: "Vision - Simon Vuarambon (Extended Set) + Doyel",
        img: "images/tec4.jpg",
        lugar: "Finca la Nonnina ",
        apertura: "00:00hs",
        cierre: "08:00hs",
        contacto: "https://instagram.com/vision.festival",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24821.156123862045!2d-68.08900098916011!3d-38.954948799999976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33d462a98bef%3A0xb9170f526e01c4d1!2sLA%20NONNINA%20Espacio%20de%20Eventos!5e0!3m2!1ses!2sar!4v1759432761341!5m2!1ses!2sar",
    },
    vision2: {
        titulo: "Primavera Vision",
        img: "images/vision2.jpeg",
        lugar: "Finca la Nonnina ",
        apertura: "00:00hs",
        cierre: "08:00hs",
        contacto: "https://instagram.com/vision.festival",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24821.156123862045!2d-68.08900098916011!3d-38.954948799999976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33d462a98bef%3A0xb9170f526e01c4d1!2sLA%20NONNINA%20Espacio%20de%20Eventos!5e0!3m2!1ses!2sar!4v1759432761341!5m2!1ses!2sar",
    },
    /*--------- RKT --------- */
    rkt: {
        titulo: "RKT",
        img: "images/caserio2.jpeg",
        lugar: "El Caserío",
        apertura: "01:00hs",
        cierre: "08:00hs",
        contacto: "https://instagram.com/rktfiesta",
        url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6205.27475851252!2d-68.0529558!3d-38.9551118!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33d462cc3157%3A0x51e8005c84277f11!2sIndependencia%20428%2C%20Q8300%20Neuqu%C3%A9n!5e0!3m2!1ses!2sar!4v1760044851950!5m2!1ses!2sar",
    },
    caserio: {
        titulo: "El Caserío Club",
        img: "images/caserio.jpeg",
        lugar: "El Caserío Club",
        apertura: "01:00hs",
        cierre: "08:00hs",
        contacto: "https://instagram.com/elcaserioclub",
        url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6205.27475851252!2d-68.0529558!3d-38.9551118!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33d462cc3157%3A0x51e8005c84277f11!2sIndependencia%20428%2C%20Q8300%20Neuqu%C3%A9n!5e0!3m2!1ses!2sar!4v1760044851950!5m2!1ses!2sar",
    },
    wasabi: {
        titulo: "Wasabi Neuquén",
        img: "images/wasabi.jpg",
        lugar: "MOOD",
        apertura: "23:00hs",
        cierre: "06:00hs",
        contacto: "https://instagram.com/moodliveok",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.790159065663!2d-68.0583724!3d-38.951622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33196ae9bf47%3A0x8935eaa087a2d345!2sMood%20Live!5e0!3m2!1ses!2sar!4v1760044539504!5m2!1ses!2sar",
    },
    modoRkt: {
        titulo: "Modo RKT",
        img: "images/rkt.jpg",
        lugar: "Mood",
        apertura: "23:00hs",
        cierre: "06:00hs",
        contacto: "https://instagram.com/modorkt",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.790159065663!2d-68.0583724!3d-38.951622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33196ae9bf47%3A0x8935eaa087a2d345!2sMood%20Live!5e0!3m2!1ses!2sar!4v1760044539504!5m2!1ses!2sar",
    },
    caserio2: {
        titulo: "El Caserío Club - DJs Invitados",
        img: "images/caserio.jpeg",
        lugar: "El Caserío Club",
        apertura: "01:00hs",
        cierre: "08:00hs",
        contacto: "https://instagram.com/elcaserioclub",
        url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6205.27475851252!2d-68.0529558!3d-38.9551118!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33d462cc3157%3A0x51e8005c84277f11!2sIndependencia%20428%2C%20Q8300%20Neuqu%C3%A9n!5e0!3m2!1ses!2sar!4v1760044851950!5m2!1ses!2sar",
    },
    rktNight: {
        titulo: "RKT Night",
        img: "images/rkt1.jpg",
        lugar: "MOOD",
        apertura: "19:30hs",
        cierre: "03:00hs",
        contacto: "https://instagram.com/moodliveok",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.790159065663!2d-68.0583724!3d-38.951622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33196ae9bf47%3A0x8935eaa087a2d345!2sMood%20Live!5e0!3m2!1ses!2sar!4v1760044539504!5m2!1ses!2sar",
    },
};

const evento = eventos[id];
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