class Luchador {

    nombre = "";
    vida = 0.00;
    defensa = 0.00;
    peso = 0.00;
    velocidad = 0.00;
    daño = 0.00;

    constructor (nombre, defensa, peso, velocidad, daño) {

        this.nombre = nombre;
        this.vida = 25;
        this.defensa = defensa;
        this.peso = peso;
        this.velocidad = velocidad;
        this.daño = daño;
    };

    golpear () {
        this.vida = this.vida - (this.daño * this.velocidad);
    }
}

let ryu = new Luchador ("Ryu", 90, 95, 0.6, 5);
let ken = new Luchador ("Ken", 95, 80, 0.7, 4);
let chunlee = new Luchador ("Chun-Lee", 80, 65, 0.9, 3.5);
let bison = new Luchador ("M.Bison", 90, 70, 0.7, 5.5);

let conjuntoLuchadores = {
    "ryu": ryu,
    "ken": ken,
    "chunlee": chunlee,
    "bison": bison
}
