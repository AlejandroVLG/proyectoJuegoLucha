let luchadores = [];
let pantallaDeLuchaLuchadores = document.getElementById("mitadInferior");
let pantallaDeLuchaNombresIz = document.getElementById("cajaNombreLuchadorIz");
let pantallaDeLuchaNombresDrch = document.getElementById("cajaNombreLuchadorDrch");
let vidaIzquierda = document.getElementById("marcadorVidaLuchadorIz");
let vidaDerecha = document.getElementById("marcadorVidaLuchadorDrch");
let golpear = document.getElementById("golpear");
let pantallaVictoria = document.getElementById("pantallaVictoria")

const cambiarPantalla = (screenDestino) => {

    setTimeout(()=>{
        let destino = document.getElementById(screenDestino);
        destino.style.display = "flex";

        let arrayDestino = ["pantallaPrincipal", "pantallaSeleccionPj", "pantallaLucha", "pantallaVictoria"];

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
        if(luchadores.length == 2){
            setTimeout(()=>{
                let animacionfight = document.getElementById("fight");
                animacionfight.style.hover = 1;

                setTimeout(()=>{             
                    pantallaDeLuchaLuchadores.innerHTML = `<div class="luchadorFinal" id="imagenLuchadorIz"><img class='gif' src='img/${luchadores[0].nombre}.gif' alt='luchador1'></div><div id="huecoIconoCentroSuperior"><img id="versus" src="img/Vs.png" alt="versus"></div><div class="luchadorFinal" id="imagenLuchadorDrch"><img class='gif' src='img/${luchadores[1].nombre}.gif' alt='luchador2'></div>`;

                    pantallaDeLuchaNombresIz.innerHTML = `<div id="nombreLuchadorIz">${luchadores[0].nombre}</div>`;

                    pantallaDeLuchaNombresDrch.innerHTML = `<div id="nombreLuchadorDrch">${luchadores[1].nombre}</div>`;

                    setTimeout(()=>{
                        cambiarPantalla("pantallaLucha");
                    }, 1000);      
                }, 500);
            },500);
        };
    };
}

const luchar = () => {
    document.getElementById("versus").style.display = "none";
    
    let random = Math.round(Math.random());

    luchadores[random].golpear();

    if(random == 0){

        vidaIzquierda.style.width = `${luchadores[0].vida}em`;
        vidaIzquierda.style.borderRadius = "0.7em 0em 0em 0.7em";
        
        if (luchadores[0].vida <= 0){

            pantallaVictoria.innerHTML = `<img class="video" src="img/${luchadores[1].nombre}.mp4" alt="winnerVideo">`;
               
            cambiarPantalla("pantallaVictoria");
            
            setTimeout(()=>{
                cambiarPantalla("pantallaPrincipal");
            }, 4500);   

        }else if (luchadores[1].vida <= 0){

            pantallaVictoria.innerHTML = `<img class="video" src="img/${luchadores[0].nombre}.mp4" alt="winnerVideo">`;
            
            cambiarPantalla("pantallaVictoria");

            setTimeout(()=>{
                cambiarPantalla("pantallaPrincipal");
            }, 4500);   
        };

    }else{
        vidaDerecha.style.width = `${luchadores[1].vida}em`;
        vidaDerecha.style.borderRadius = "0.7em 0em 0em 0.7em";
    };
}

const reset = () => {

    luchadores = [];
    random = "";
    animacionfight = "";
    opaco = "";
    pantallaDeLuchaLuchadores.innerHTML = ``;
    pantallaDeLuchaNombresIz.innerHTML = ``;
    pantallaDeLuchaNombresDrch.innerHTML = ``;
    vidaIzquierda.style.width = ``;
    vidaIzquierda.style.borderRadius = ``;
    pantallaVictoria.innerHTML = ``;
    ryu.vida = 25;
    ken.vida = 25;
    bison.vida = 25;
    chunlee.vida = 25;
}