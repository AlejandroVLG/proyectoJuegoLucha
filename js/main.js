
const cambiarPantalla = (screenDestino) => {

    let destino = document.getElementById(screenDestino);
    destino.style.display = "flex";

    let arrayDestino = ["pantallaPrincipal","pantallaSeleccionPj"];

    for (let screen of arrayDestino){
        if (screen != screenDestino){
            document.getElementById(screen).style.display = "none";
        };
    };
}

let luchador1 = "";
let luchador2 = "";
let luchador3 = "";
let luchador4 = "";

let turnoLuchador = 1;


const seleccionarLuchador = (seleccionado) => {
    
    switch (turnoLuchador){
        case 1:
            luchador1 = conjuntoLuchadores[seleccionado];
            break;
        case 2:
            luchador2 = conjuntoLuchadores[seleccionado];
            break;
        case 3:
            luchador3 = conjuntoLuchadores[seleccionado];
            break;
        case 4:
            luchador4 = conjuntoLuchadores[seleccionado];
            break;     
        default:
            break;     
    };

    turnoLuchador++;

    if (turnoLuchador == 2){
        console.log("luchadores seleccionados");
    };
}