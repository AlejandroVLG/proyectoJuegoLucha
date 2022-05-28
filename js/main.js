let luchadores = [];

let pantallaDeLucha = document.getElementById("pantallaLucha");

const cambiarPantalla = (screenDestino) => {

    setTimeout(()=>{
        let destino = document.getElementById(screenDestino);
        destino.style.display = "flex";

        let arrayDestino = ["pantallaPrincipal","pantallaSeleccionPj", "pantallaLucha"];

        for (let screen of arrayDestino){
            if (screen != screenDestino){
                document.getElementById(screen).style.display = "none";
            };
        };
    }, 900);
}

const seleccionarLuchador = (luchador) => {

    if (luchadores.length < 2){

        luchadores.push(conjuntoLuchadores[luchador]);
        console.log(luchadores);
        setTimeout(()=>{
            let opaco = document.getElementById(luchador);
            opaco.style.opacity = 0.4;
        }, 100);
        if(luchadores.length === 2){
            setTimeout(()=>{
                let animacionfight = document.getElementById("fight");
                animacionfight.style.hover = 1;

                setTimeout(()=>{               
                    pantallaDeLucha.innerHTML = 
    
    
                    setTimeout(()=>{
                        cambiarPantalla("pantallaLucha");
                    }, 1000);      
                }, 500);
            },500)
            
        };
    };
}
