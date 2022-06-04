let luchadores = [];
let opaco;
let cargas1 = 0;
let cargasEspecial1 = 0;
let cargasEspecial2 = 0;
let cargas2 = 0;
let pantallaDeLuchaLuchadores = document.getElementById("mitadInferior");
let pantallaDeLuchaNombresIz = document.getElementById("cajaNombreLuchadorIz");
let pantallaDeLuchaNombresDrch = document.getElementById("cajaNombreLuchadorDrch");
let iconosGolpesIz = document.getElementById("iconoPegarLuchadorIz");
let iconosGolpesDrch = document.getElementById("iconoPegarLuchadorDrch");
let vidaIzquierda = document.getElementById("marcadorVidaLuchadorIz");
let vidaDerecha = document.getElementById("marcadorVidaLuchadorDrch");
let golpear = document.getElementById("golpear");
let pantallaVictoria = document.getElementById("pantallaVictoria");
let audioCombate = document.getElementById("audio2");
let videoEspeciales = document.getElementById("huecoIconoCentroSuperior");

        /* FUNCION PARA CAMBIAR DE PANTALLA */

const cambiarPantalla = (screenDestino) => {

    setTimeout(()=>{
        let destino = document.getElementById(screenDestino);
        destino.style.display = "flex";

        let arrayDestino = ["pantallaPrincipal", "pantallaSeleccionPj", "pantallaLucha", "pantallaVictoria"];

        for (let screen of arrayDestino){
            if (screen != screenDestino){
                document.getElementById(screen).style.display = "none";
                let audio = document.getElementById("audioPrincipal");
                audio.innerHTML = `<audio src="audios/musicaMenuPrincipal.mp3" muted></audio>`;      
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

                let audioSeleccion1 = document.getElementById("audioSeleccion");
                audioSeleccion1.innerHTML = `<audio src="audios/cambioPantalla.mp3" autoplay></audio>`;      

                setTimeout(()=>{             
                    pantallaDeLuchaLuchadores.innerHTML = `<div class="luchadorFinal" id="imagenLuchadorIz"><img class='gif' src='img/${luchadores[0].nombre}.gif' alt='luchador1'></div><div id="huecoIconoCentroSuperior"><img id="versus" src="img/Vs.png" alt="versus"></div><div class="luchadorFinal" id="imagenLuchadorDrch"><img class='gif' src='img/${luchadores[1].nombre}.gif' alt='luchador2'></div>`;

                    pantallaDeLuchaNombresIz.innerHTML = `<div id="nombreLuchadorIz">${luchadores[0].nombre}</div>`;

                    pantallaDeLuchaNombresDrch.innerHTML = `<div id="nombreLuchadorDrch">${luchadores[1].nombre}</div>`;

                    iconosGolpesIz.innerHTML = `<img class="golpesIz" id="puñetazoIz" src="img/${luchadores[0].puñetazoImagen}.jpeg" alt="puñetazo" onclick="puño1()"><img class="golpesIz" id="patadaIz" src="img/${luchadores[0].patadaImagen}.jpeg" alt="patada" onclick="patada1()"><img class="golpesIz" id="especialIz" src="img/${luchadores[0].especialImagen}.jpeg" alt="especial" onclick="especial1()">`;

                    iconosGolpesDrch.innerHTML = `<img class="golpesDrch" id="puñetazoDrch" src="img/${luchadores[1].puñetazoImagen}.jpeg" alt="puñetazo" onclick="puño2()"><img class="golpesDrch" id="patadaIDrch" src="img/${luchadores[1].patadaImagen}.jpeg" alt="patada" onclick="patada2()"><img class="golpesDrch" id="especialDrch" src="img/${luchadores[1].especialImagen}.jpeg" alt="especial" onclick="especial2()">`;

                    setTimeout(()=>{
                        cambiarPantalla("pantallaLucha");
                        audioCombate.innerHTML = `<audio src="audios/musicaPelea.mp3" autoplay></audio>`;
                    }, 2800);      
                }, 500);
            },500);
        };
    };
}       
        /* FUNCIONES PARA GOLPEAR LUCHADOR IZQUIERDA */

const puño1 = () => { 

    document.getElementById("versus").style.display = "none";

    luchadores[1].puño();
    
    cargas1 ++;

    vidaDerecha.style.width = `${luchadores[1].vida}em`;
    vidaDerecha.style.borderRadius = "0.7em 0em 0em 0.7em";

    if (cargas1 >= 4){
        document.getElementById("especialIz").style.opacity = 1;
        document.getElementById("especialIz").style.boxShadow = `0em 0.0em 2em 2em rgb(235, 231, 91)`;
    };
        
    if (luchadores[0].vida <= 0){

        audioCombate.innerHTML = `<audio src="audios/musicaPelea.mp3" muted></audio>`;
        pantallaVictoria.innerHTML = `<video class='video' autoplay src="videos/${luchadores[1].nombre}.mp4" type="video/mp4"></video>`;
        
        cambiarPantalla("pantallaVictoria");
                   
        setTimeout(()=>{ 
            cambiarPantalla("pantallaPrincipal");
            let botonReset = document.getElementById("iconoParteSuperior");
            botonReset.innerHTML = `<h1 id="resetText" onclick="reset()">PRESS TO RESET</h1>`;
        }, 7500);   

    }else if (luchadores[1].vida <= 0){

        audioCombate.innerHTML = `<audio src="audios/musicaPelea.mp3" muted></audio>`;
        pantallaVictoria.innerHTML = `<video class='video'autoplay src="videos/${luchadores[0].nombre}.mp4" type="video/mp4"></video>`;
            
        cambiarPantalla("pantallaVictoria");

        setTimeout(()=>{
            cambiarPantalla("pantallaPrincipal");
            let botonReset = document.getElementById("iconoParteSuperior");
            botonReset.innerHTML = `<h1 id="resetText" onclick="reset()">PRESS TO RESET</h1>`;
        }, 7500);  
    };
}

const patada1 = () => { 

    document.getElementById("versus").style.display = "none";

    luchadores[1].patadon();
    
    cargas1 ++;

    vidaDerecha.style.width = `${luchadores[1].vida}em`;
    vidaDerecha.style.borderRadius = "0.7em 0em 0em 0.7em";

    if (cargas1 >= 4){
        document.getElementById("especialIz").style.opacity = 1;
        document.getElementById("especialIz").style.boxShadow = `0em 0.0em 2em 2em rgb(235, 231, 91)`;
    };
        
    if (luchadores[0].vida <= 0){

        audioCombate.innerHTML = `<audio src="audios/musicaPelea.mp3" muted></audio>`;
        pantallaVictoria.innerHTML = `<video class='video' autoplay src="videos/${luchadores[1].nombre}.mp4" type="video/mp4"></video>`;
               
        cambiarPantalla("pantallaVictoria");
                   
        setTimeout(()=>{ 
            cambiarPantalla("pantallaPrincipal");
            let botonReset = document.getElementById("iconoParteSuperior");
            botonReset.innerHTML = `<h1 id="resetText" onclick="reset()">PRESS TO RESET</h1>`;
        }, 7500);   

    }else if (luchadores[1].vida <= 0){

        audioCombate.innerHTML = `<audio src="audios/musicaPelea.mp3" muted></audio>`;
        pantallaVictoria.innerHTML = `<video class='video' autoplay src="videos/${luchadores[0].nombre}.mp4" type="video/mp4"></video>`;
            
        cambiarPantalla("pantallaVictoria");

        setTimeout(()=>{
            cambiarPantalla("pantallaPrincipal");
            let botonReset = document.getElementById("iconoParteSuperior");
            botonReset.innerHTML = `<h1 id="resetText" onclick="reset()">PRESS TO RESET</h1>`;
        }, 7500);  
    }; 
}
const especial1 = () => { 

    document.getElementById("versus").style.display = "none";

    cargasEspecial1 ++;

    if (cargas1 >= 4){    
        
        if(cargasEspecial1 <= 1){
            
            luchadores[1].golpeEspecial();
            vidaDerecha.style.width = `${luchadores[1].vida}em`;
            vidaDerecha.style.borderRadius = "0.7em 0em 0em 0.7em";

            videoEspeciales.style.opacity = 1;
            videoEspeciales.innerHTML = `<video class="especialVideo" autoplay src="videos/${luchadores[0].especialVideo}.mp4" type="video/mp4"></video>`;
            setTimeout(()=>{
            videoEspeciales.style.opacity = 0;
            },6000);
        };
    };
       
    if (luchadores[0].vida <= 0){

        audioCombate.innerHTML = `<audio src="audios/musicaPelea.mp3" muted></audio>`;
        pantallaVictoria.innerHTML = `<video class='video' autoplay src="videos/${luchadores[1].nombre}.mp4" type="video/mp4"></video>`;
               
        cambiarPantalla("pantallaVictoria");
                   
        setTimeout(()=>{ 
            cambiarPantalla("pantallaPrincipal");
            let botonReset = document.getElementById("iconoParteSuperior");
            botonReset.innerHTML = `<h1 id="resetText" onclick="reset()">PRESS TO RESET</h1>`;
        }, 7500);   

    }else if (luchadores[1].vida <= 0){

        audioCombate.innerHTML = `<audio src="audios/musicaPelea.mp3" muted></audio>`;
        pantallaVictoria.innerHTML = `<video class='video'autoplay src="videos/${luchadores[0].nombre}.mp4" type="video/mp4"></video>`;
            
        cambiarPantalla("pantallaVictoria");

        setTimeout(()=>{
            cambiarPantalla("pantallaPrincipal");
            let botonReset = document.getElementById("iconoParteSuperior");
            botonReset.innerHTML = `<h1 id="resetText" onclick="reset()">PRESS TO RESET</h1>`;
        }, 7500);  
    }; 
}

        /* FUNCIONES PARA GOLPEAR LUCHADOR DERECHA */

const puño2 = () => { 

    document.getElementById("versus").style.display = "none";
        
    luchadores[0].puño();

    vidaIzquierda.style.width = `${luchadores[0].vida}em`;
    vidaIzquierda.style.borderRadius = "0.7em 0em 0em 0.7em";

    cargas2 ++;

    if (cargas2 >= 4){
        document.getElementById("especialDrch").style.opacity = 1;
        document.getElementById("especialDrch").style.boxShadow = `0em 0.0em 2em 2em rgb(235, 231, 91)`;
    };
        
    if (luchadores[0].vida <= 0){

        audioCombate.innerHTML = `<audio src="audios/musicaPelea.mp3" muted></audio>`;
        pantallaVictoria.innerHTML = `<video class='video' autoplay src="videos/${luchadores[1].nombre}.mp4" type="video/mp4"></video>`;
               
        cambiarPantalla("pantallaVictoria");
                   
        setTimeout(()=>{ 
            cambiarPantalla("pantallaPrincipal");
            let botonReset = document.getElementById("iconoParteSuperior");
            botonReset.innerHTML = `<h1 id="resetText" onclick="reset()">PRESS TO RESET</h1>`;
        }, 7500);   

    }else if (luchadores[1].vida <= 0){

        audioCombate.innerHTML = `<audio src="audios/musicaPelea.mp3" muted></audio>`;
        pantallaVictoria.innerHTML = `<video class='video'autoplay src="videos/${luchadores[0].nombre}.mp4" type="video/mp4"></video>`;
            
        cambiarPantalla("pantallaVictoria");

        setTimeout(()=>{
            cambiarPantalla("pantallaPrincipal");
            let botonReset = document.getElementById("iconoParteSuperior");
            botonReset.innerHTML = `<h1 id="resetText" onclick="reset()">PRESS TO RESET</h1>`;
        }, 7500);  
    }; 
}
const patada2 = () => { 

    document.getElementById("versus").style.display = "none";

    luchadores[0].patadon();

    cargas2 ++;

    vidaIzquierda.style.width = `${luchadores[0].vida}em`;
    vidaIzquierda.style.borderRadius = "0.7em 0em 0em 0.7em";

    if (cargas2 >= 4){
        document.getElementById("especialDrch").style.opacity = 1;
        document.getElementById("especialDrch").style.boxShadow = `0em 0.0em 2em 2em rgb(235, 231, 91)`;
    };
    
    if (luchadores[0].vida <= 0){

        audioCombate.innerHTML = `<audio src="audios/musicaPelea.mp3" muted></audio>`;
        pantallaVictoria.innerHTML = `<video class='video' autoplay src="videos/${luchadores[1].nombre}.mp4" type="video/mp4"></video>`;
               
        cambiarPantalla("pantallaVictoria");
                   
        setTimeout(()=>{ 
            cambiarPantalla("pantallaPrincipal");
            let botonReset = document.getElementById("iconoParteSuperior");
            botonReset.innerHTML = `<h1 id="resetText" onclick="reset()">PRESS TO RESET</h1>`;
        }, 7500);   

    }else if (luchadores[1].vida <= 0){

        audioCombate.innerHTML = `<audio src="audios/musicaPelea.mp3" muted></audio>`;
        pantallaVictoria.innerHTML = `<video class='video'autoplay src="videos/${luchadores[0].nombre}.mp4" type="video/mp4"></video>`;
            
        cambiarPantalla("pantallaVictoria");

        setTimeout(()=>{
            cambiarPantalla("pantallaPrincipal");
            let botonReset = document.getElementById("iconoParteSuperior");
            botonReset.innerHTML = `<h1 id="resetText" onclick="reset()">PRESS TO RESET</h1>`;
        }, 7500);  
    }; 
}
const especial2 = () => { 

    document.getElementById("versus").style.display = "none";

    cargasEspecial2++;
    

    if (cargas1 >= 4){    
        
        if(cargasEspecial1 <= 1){
            
            luchadores[0].golpeEspecial();
            vidaDerecha.style.width = `${luchadores[0].vida}em`;
            vidaDerecha.style.borderRadius = "0.7em 0em 0em 0.7em";

            videoEspeciales.style.opacity = 1;
            videoEspeciales.innerHTML = `<video class="especialVideo" autoplay src="videos/${luchadores[1].especialVideo}.mp4" type="video/mp4"></video>`;
            setTimeout(()=>{
            videoEspeciales.style.opacity = 0;
            },6000);
        };
    };
         
    if (luchadores[0].vida <= 0){

        audioCombate.innerHTML = `<audio src="audios/musicaPelea.mp3" muted></audio>`;
        pantallaVictoria.innerHTML = `<video class='video' autoplay src="videos/${luchadores[1].nombre}.mp4" type="video/mp4"></video>`;
               
        cambiarPantalla("pantallaVictoria");
                   
        setTimeout(()=>{ 
            cambiarPantalla("pantallaPrincipal");
            let botonReset = document.getElementById("iconoParteSuperior");
            botonReset.innerHTML = `<h1 id="resetText" onclick="reset()">PRESS TO RESET</h1>`;
        }, 7500);   

    }else if (luchadores[1].vida <= 0){

        audioCombate.innerHTML = `<audio src="audios/musicaPelea.mp3" muted></audio>`;
        pantallaVictoria.innerHTML = `<video class='video'autoplay src="videos/${luchadores[0].nombre}.mp4" type="video/mp4"></video>`;
            
        cambiarPantalla("pantallaVictoria");

        setTimeout(()=>{
            cambiarPantalla("pantallaPrincipal");
            let botonReset = document.getElementById("iconoParteSuperior");
            botonReset.innerHTML = `<h1 id="resetText" onclick="reset()">PRESS TO RESET</h1>`;
        }, 7500);  
    }; 
}
        /* FUNCION PARA RESETEAR VARIABLES */

const reset = () => {

    luchadores = [];
    random = "";
    cargas1 = 0;
    cargasEspecial1 = 0;
    cargasEspecial2 = 0;
    cargas2 = 0;
    document.getElementById("ryu").style.opacity = 1;
    document.getElementById("chunlee").style.opacity = 1;
    document.getElementById("ken").style.opacity = 1;
    document.getElementById("bison").style.opacity = 1;
    document.getElementById("especialIz").style.opacity = 0.3;
    document.getElementById("especialIz").style.boxShadow = `0em 0.0em 0.3em 0.1em rgb(76, 0, 0)`;
    document.getElementById("especialDrch").style.opacity = 0.3;
    document.getElementById("especialDrch").style.boxShadow = `0em 0.0em 0.3em 0.1em rgb(76, 0, 0)`;
    vidaIzquierda.style.width = ``;
    vidaIzquierda.style.borderRadius = "0.7em";
    vidaDerecha.style.width = ``;
    vidaDerecha.style.borderRadius = "0.7em";
    ryu.vida = 24;
    ken.vida = 24;
    bison.vida = 24;
    chunlee.vida = 24;
    audio = document.getElementById("audioPrincipal");
    audio.innerHTML = `<audio src="audios/musicaMenuPrincipal.mp3" autoplay></audio>`;
    videoEspeciales.style.opacity = 0;
}