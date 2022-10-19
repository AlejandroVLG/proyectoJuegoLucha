class Luchador {

    nombre = "";
    vida = 0.00;
    puñetazo = 0.0;
    patada = 0.0;
    especial = 0.0;
    puñetazoImagen = "";
    patadaImagen = "";
    especialImagen = "";
    especialVideo = "";

    constructor(
        nombre,
        puñetazo,
        patada,
        especial,
        puñetazoImagen,
        patadaImagen,
        especialImagen,
        especialVideo
    ) {

        this.nombre = nombre;
        this.vida = 24;
        this.puñetazo = puñetazo;
        this.patada = patada;
        this.especial = especial;
        this.puñetazoImagen = puñetazoImagen;
        this.patadaImagen = patadaImagen;
        this.especialImagen = especialImagen;
        this.especialVideo = especialVideo;
    };

    puño() {
        this.vida = this.vida - Math.round(Math.random(this.puñetazo) * this.puñetazo);
    };
    patadon() {
        this.vida = this.vida - Math.round(Math.random(this.patada) * this.patada);
    };
    golpeEspecial() {
        this.vida = this.vida - Math.round(Math.random(this.especial) * this.especial);
    };
}

let ryu = new Luchador("Ryu", 4, 2, 8, "puñetazoRyu", "patadaRyu", "especialRyu", "especialRyuVideo");
let ken = new Luchador("Ken", 4, 2, 8, "puñetazoKen", "patadaKen", "especialKen", "especialKenVideo");
let chunlee = new Luchador("Chun-Lee", 2, 4, 8, "puñetazoChunlee", "patadaChunlee", "especialChunlee", "especialChunleeVideo");
let bison = new Luchador("M.Bison", 2, 4, 8, "puñetazoBison", "patadaBison", "especialBison", "especialM.bison.Video");

let conjuntoLuchadores = {
    "ryu": ryu,
    "ken": ken,
    "chunlee": chunlee,
    "bison": bison
}
