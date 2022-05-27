let luchadores = [];

const cambiarPantalla = (screenDestino) => {

    setTimeout(()=>{
        let destino = document.getElementById(screenDestino);
        destino.style.display = "flex";

        let arrayDestino = ["pantallaPrincipal","pantallaSeleccionPj"];

        for (let screen of arrayDestino){
            if (screen != screenDestino){
                document.getElementById(screen).style.display = "none";
            };
        };
    }, 2000);
}

const seleccionarLuchador = (luchador) => {

    if (luchadores.length < 2){

        luchadores.push(conjuntoLuchadores[luchador]);
        console.log(luchadores);
        let opaco = document.getElementById(luchador);
        opaco.style.opacity = 0.4;
    }
}
