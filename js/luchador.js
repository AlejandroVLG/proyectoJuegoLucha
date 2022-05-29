class Luchador {

    nombre = "";
    vida = 0.00;
    defensa = 0.00;
    peso = 0.00;
    velocidad = 0.00;
    daño = 0.00;

    constructor (nombre, vida, defensa, peso, velocidad, daño) {

        this.nombre = nombre;
        this.vida = vida;
        this.defensa = defensa;
        this.peso = peso;
        this.velocidad = velocidad;
        this.daño = daño;
    };
}

let ryu = new Luchador ("Ryu", 90, 85, 95, 65, 85);
let ken = new Luchador ("Ken", 85, 95, 80, 70, 80);
let chunlee = new Luchador ("Chun-Lee", 80, 80, 64, 90, 75);
let bison = new Luchador ("M.Bison", 100, 90, 60, 90);

let conjuntoLuchadores = {
    "ryu": ryu,
    "ken": ken,
    "chunlee": chunlee,
    "bison": bison
}
