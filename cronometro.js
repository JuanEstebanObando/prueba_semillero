let tiempoReferencia = Date.now()
let tiempoAcum = 0
let estadoCronometro = false

setInterval(()=>{

 let tiempo = document.getElementById("tiempo")

 if(estadoCronometro){
 tiempoAcum +=  Date.now() - tiempoReferencia
 }

tiempoReferencia = Date.now()
 tiempo.innerHTML = conversionTiempo(tiempoAcum)
},1000/60);

//  conversion del tiempo 
function conversionTiempo(micSeg){
    let miliS = micSeg%1000
    let tiempoBase = Math.floor(((micSeg-miliS)/1000))
    let seg = tiempoBase%60
    let min = Math.floor((tiempoBase / 60) % 60)
    let hor = Math.floor((tiempoBase/60 / 60))
    Number.prototype.ceros = function(n){
        return (this+"").padStart(n, 0)
    }
    return hor.ceros(2) + ":" + min.ceros(2) + ":" + seg.ceros(2)
}

//Estados del cronómetro

function iniciar() {
    estadoCronometro = true
}
function pausar() {
    estadoCronometro = false
}
function reiniciar() {
    tiempoAcum = 0
}





const div = document.querySelector("all-cronometer");

document.querySelector(".btn-digital").addEventListener("click", () => {
  div.classList.add("all-cronometer_btn-digital");
});

document.querySelector(".show").addEventListener("click", () => {
  div.classList.remove("div_hide");
});
Refere