let luchadores = [];
let opaco;
let animacionfight;
let pantallaDeLuchaLuchadores = document.getElementById("mitadInferior");
let pantallaDeLuchaNombresIz = document.getElementById("cajaNombreLuchadorIz");
let pantallaDeLuchaNombresDrch = document.getElementById("cajaNombreLuchadorDrch");
let vidaIzquierda = document.getElementById("marcadorVidaLuchadorIz");
let vidaDerecha = document.getElementById("marcadorVidaLuchadorDrch");
let golpear = document.getElementById("golpear");
let pantallaVictoria = document.getElementById("pantallaVictoria");

        /* FUNCION PARA CAMBIAR DE PANTALLA */

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
    }, 500);
}
        /* FUNCION PARA SELECCIONAR LUCHADOR */

const seleccionarLuchador = (luchador) => {

    if (luchadores.length < 2){

        luchadores.push(conjuntoLuchadores[luchador]);
        console.log(luchadores);
        setTimeout(()=>{
            opaco = document.getElementById(luchador);
            opaco.style.opacity = 0.3;

        }, 100);
        if(luchadores.length == 2){
            setTimeout(()=>{
                animacionfight = document.getElementById("fight");
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
        /* FUNCIONES PARA GOLPEAR LUCHADOR IZQUIERDA */

const puño1 = () => { 

    document.getElementById("versus").style.display = "none";

    luchadores[1].puño();
    
    vidaDerecha.style.width = `${luchadores[1].vida}em`;
    vidaDerecha.style.borderRadius = "0.7em 0em 0em 0.7em";
        
    if (luchadores[0].vida <= 0){

        pantallaVictoria.innerHTML = `<video class='video' autoplay src="videos/${luchadores[1].nombre}.mp4" type="video/mp4"></video>`;
               
        cambiarPantalla("pantallaVictoria");
                   
        setTimeout(()=>{ 
            cambiarPantalla("pantallaPrincipal");
        }, 7500);   

    }else if (luchadores[1].vida <= 0){

        pantallaVictoria.innerHTML = `<video class='video'autoplay src="videos/${luchadores[0].nombre}.mp4" type="video/mp4"></video>`;
            
        cambiarPantalla("pantallaVictoria");

        setTimeout(()=>{
            cambiarPantalla("pantallaPrincipal");
        }, 7500);  
    }; 
}
const patada1 = () => { 

    document.getElementById("versus").style.display = "none";

    luchadores[1].patadon();
    
    vidaDerecha.style.width = `${luchadores[1].vida}em`;
    vidaDerecha.style.borderRadius = "0.7em 0em 0em 0.7em";
        
    if (luchadores[0].vida <= 0){

        pantallaVictoria.innerHTML = `<video class='video' autoplay src="videos/${luchadores[1].nombre}.mp4" type="video/mp4"></video>`;
               
        cambiarPantalla("pantallaVictoria");
                   
        setTimeout(()=>{ 
            cambiarPantalla("pantallaPrincipal");
        }, 7500);   

    }else if (luchadores[1].vida <= 0){

        pantallaVictoria.innerHTML = `<video class='video'autoplay src="videos/${luchadores[0].nombre}.mp4" type="video/mp4"></video>`;
            
        cambiarPantalla("pantallaVictoria");

        setTimeout(()=>{
            cambiarPantalla("pantallaPrincipal");
        }, 7500);  
    }; 
}
const especial1 = () => { 

    document.getElementById("versus").style.display = "none";

    luchadores[1].golpeEspecial();
    
    vidaDerecha.style.width = `${luchadores[1].vida}em`;
    vidaDerecha.style.borderRadius = "0.7em 0em 0em 0.7em";
        
    if (luchadores[0].vida <= 0){

        pantallaVictoria.innerHTML = `<video class='video' autoplay src="videos/${luchadores[1].nombre}.mp4" type="video/mp4"></video>`;
               
        cambiarPantalla("pantallaVictoria");
                   
        setTimeout(()=>{ 
            cambiarPantalla("pantallaPrincipal");
        }, 7500);   

    }else if (luchadores[1].vida <= 0){

        pantallaVictoria.innerHTML = `<video class='video'autoplay src="videos/${luchadores[0].nombre}.mp4" type="video/mp4"></video>`;
            
        cambiarPantalla("pantallaVictoria");

        setTimeout(()=>{
            cambiarPantalla("pantallaPrincipal");
        }, 7500);  
    }; 
}

        /* FUNCIONES PARA GOLPEAR LUCHADOR DERECHA */

const puño2 = () => { 

    document.getElementById("versus").style.display = "none";

    luchadores[0].puño();
    
    vidaIzquierda.style.width = `${luchadores[0].vida}em`;
    vidaIzquierda.style.borderRadius = "0.7em 0em 0em 0.7em";
        
    if (luchadores[0].vida <= 0){

        pantallaVictoria.innerHTML = `<video class='video' autoplay src="videos/${luchadores[1].nombre}.mp4" type="video/mp4"></video>`;
               
        cambiarPantalla("pantallaVictoria");
                   
        setTimeout(()=>{ 
            cambiarPantalla("pantallaPrincipal");
        }, 7500);   

    }else if (luchadores[1].vida <= 0){

        pantallaVictoria.innerHTML = `<video class='video'autoplay src="videos/${luchadores[0].nombre}.mp4" type="video/mp4"></video>`;
            
        cambiarPantalla("pantallaVictoria");

        setTimeout(()=>{
            cambiarPantalla("pantallaPrincipal");
        }, 7500);  
    }; 
}
const patada2 = () => { 

    document.getElementById("versus").style.display = "none";

    luchadores[0].patadon();
    
    vidaIzquierda.style.width = `${luchadores[0].vida}em`;
    vidaIzquierda.style.borderRadius = "0.7em 0em 0em 0.7em";
        
    if (luchadores[0].vida <= 0){

        pantallaVictoria.innerHTML = `<video class='video' autoplay src="videos/${luchadores[1].nombre}.mp4" type="video/mp4"></video>`;
               
        cambiarPantalla("pantallaVictoria");
                   
        setTimeout(()=>{ 
            cambiarPantalla("pantallaPrincipal");
        }, 7500);   

    }else if (luchadores[1].vida <= 0){

        pantallaVictoria.innerHTML = `<video class='video'autoplay src="videos/${luchadores[0].nombre}.mp4" type="video/mp4"></video>`;
            
        cambiarPantalla("pantallaVictoria");

        setTimeout(()=>{
            cambiarPantalla("pantallaPrincipal");
        }, 7500);  
    }; 
}
const especial2 = () => { 

    document.getElementById("versus").style.display = "none";

    luchadores[0].golpeEspecial();
    
    vidaIzquierda.style.width = `${luchadores[0].vida}em`;
    vidaIzquierda.style.borderRadius = "0.7em 0em 0em 0.7em";
        
    if (luchadores[0].vida <= 0){

        pantallaVictoria.innerHTML = `<video class='video' autoplay src="videos/${luchadores[1].nombre}.mp4" type="video/mp4"></video>`;
               
        cambiarPantalla("pantallaVictoria");
                   
        setTimeout(()=>{ 
            cambiarPantalla("pantallaPrincipal");
        }, 7500);   

    }else if (luchadores[1].vida <= 0){

        pantallaVictoria.innerHTML = `<video class='video'autoplay src="videos/${luchadores[0].nombre}.mp4" type="video/mp4"></video>`;
            
        cambiarPantalla("pantallaVictoria");

        setTimeout(()=>{
            cambiarPantalla("pantallaPrincipal");
        }, 7500);  
    }; 
}
        /* FUNCION PARA RESETEAR VARIABLES */

const reset = () => {

    luchadores = [];
    random = "";
    document.getElementById("ryu").style.opacity = 1;
    document.getElementById("chunlee").style.opacity = 1;
    document.getElementById("ken").style.opacity = 1;
    document.getElementById("bison").style.opacity = 1;
    vidaIzquierda.style.width = ``;
    vidaIzquierda.style.borderRadius = "0.7em";
    vidaDerecha.style.width = ``;
    vidaDerecha.style.borderRadius = "0.7em";
    ryu.vida = 24;
    ken.vida = 24;
    bison.vida = 24;
    chunlee.vida = 24;
}