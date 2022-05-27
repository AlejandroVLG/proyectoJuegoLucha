class Luchador {

    nombre = "";
    fechaNacimiento = 0.0;
    nacionalidad = "";
    peso = 0.00;
    estiloLucha = "";
    ocupacion = "";

    constructor (nombre, fechaNacimiento, nacionalidad, peso, estiloLucha, ocupacion) {

        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.nacionalidad = nacionalidad;
        this.peso = peso;
        this.estiloLucha = estiloLucha;
        this.ocupacion = ocupacion;
    };
}

let ryu = new Luchador ("Ryu", "21/07/1964", "Japon", 85, "Karate", "Martial Artist");
let ken = new Luchador ("Ken", "14/02/1965", 77, "EEUU", "Karate, Ansatsuken", "Martial Artist");
let chunlee = new Luchador ("Chun-Lee", "01/03/1968", "China", 64, "Artes marciales Chinas", "Interpol");
let bison = new Luchador ("M. Bison", "17/04/1954", 80, "desconocido", "Psycho Power", "Shadaloo King");

let conjuntoLuchadores = {
    "ryu": ryu,
    "ken": ken,
    "chunlee": chunlee,
    "bison": bison
}
