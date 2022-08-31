let tiempoReferencia = Date.now()
let sumaTiempos = 0
let seconds = 0
let tiempoAcum = sumaTiempos
let estadoTemporizador = false

function enterTime(){

 seconds = document.getElementById("seconds").value
 seconds= seconds*1000

 minutes = document.getElementById("minutes").value
 minutes= (minutes*1000)*60

 hours = document.getElementById("hours").value
 hours= ((hours*1000)*60)*60

 sumaTiempos = seconds+minutes+hours

 tiempoAcum = sumaTiempos


 console.log(minutes)
 }


setInterval(()=>{
 let tiempo = document.getElementById("timer")

 if(estadoTemporizador){
 tiempoAcum -=  Date.now() - tiempoReferencia
 
 }

 if(tiempoAcum <=0){
pausar()
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
    estadoTemporizador = true
}
function pausar() {
    estadoTemporizador = false
}
function reiniciar() {
    tiempoAcum = sumaTiempos
}







