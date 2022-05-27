let luchador1;
let luchador2;
let luchador3;
let luchador4;

const cambiarPantalla = (screenDestino) => {

    let destino = document.getElementById(screenDestino);
    destino.style.display = "flex";

    let arrayDestino = ["pantallaPrincipal","pantallaSeleccionpj"];

    for (let screen of arrayDestino){
        if (screen != screenDestino){
            document.getElementById(screen).style.display = "none";
        };
    };
}



const seleccionarPersonaje = () => {

}