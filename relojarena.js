let tiempoReferencia = Date.now()
let tiempoAcum = 0
let estadoRelojArena = false
let porcentajeArenaTop = 0
let limiteTop = 1
let limiteBottom = 81.2

setInterval(()=>{
    let tiempo = document.getElementById("hourglass-timer")
    if(estadoRelojArena){
        tiempoAcum +=  Date.now() - tiempoReferencia
    }
    tiempoReferencia = Date.now()
    hourglasstimer.innerHTML = conversionTiempo(tiempoAcum)
    //  +"ORG"+tiempoAcum 

//Para cambiar el CSS


   if(tiempoAcum<=60000 && estadoRelojArena==true){
    //Para aumentar el tamaño del cover de la arena
    limiteTop += 0.023
    limiteBottom -= 0.023
    cambiarEstilo(limiteTop,limiteBottom)
   }else{
    pausar()
   }
},1000/60);

//  conversion del tiempo 
function conversionTiempo(micSeg){
    let miliS = micSeg%1000
    let tiempoBase = Math.floor(((micSeg-miliS)/1000))
    let seg = tiempoBase%60
    let min = Math.floor((tiempoBase / 60) % 60)
    Number.prototype.ceros = function(n){
        return (this+"").padStart(n, 0)
    }
    return min.ceros(2) + ":" + seg.ceros(2)
}

//Estados del cronómetro

function iniciar() {
    estadoRelojArena = true
}
function pausar() {
    estadoRelojArena = false
}
function reiniciar() {
    location.reload();
}


//función para realizar el cambio en el css y que la arena sea cubierta


function cambiarEstilo(porcentajeArenaTop,porcentajeArenaBottom) {
    document.querySelector(".top-sandcover").style.height = porcentajeArenaTop+"px";
    document.querySelector(".top-sandcover").style.opacity = "100%";

    document.querySelector(".bottom-sandcover").style.height = porcentajeArenaBottom+"px";
    document.querySelector(".bottom-sandcover").style.opacity = "100%";
  }