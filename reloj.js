function fecha() {  
    //Esto define la fecha y hora  
    var systemdate = new Date();  
   
    //Para cambiar el html y poner la hora actual
    document.getElementById("clock").innerHTML = systemdate.toLocaleTimeString();  
} 
   setInterval(fecha, 1000);