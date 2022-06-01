class Luchador {

    nombre = "";
    vida = 0.00;
    puñetazo = 0.0;
    patada = 0.0;
    especial = 0.0;
    

    constructor (nombre, puñetazo, patada, especial) {

        this.nombre = nombre;
        this.vida = 24;
        this.puñetazo = puñetazo;
        this.patada = patada;
        this.especial = especial;
    };

    puño () {
        this.vida = this.vida - this.puñetazo;
    };
    patadon () {
        this.vida = this.vida - this.patada;
    };
    golpeEspecial () {
        this.vida = this.vida - this.especial;
    };
}

let ryu = new Luchador ("Ryu", 4, 2, 8);
let ken = new Luchador ("Ken", 4, 2, 8);
let chunlee = new Luchador ("Chun-Lee", 2, 4, 8);
let bison = new Luchador ("M.Bison", 2, 4, 8);

let conjuntoLuchadores = {
    "ryu": ryu,
    "ken": ken,
    "chunlee": chunlee,
    "bison": bison
}
