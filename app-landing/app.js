$(document).ready(function(){

    $("#checkLightDark").click(function() {
        $(".menu").toggleClass("dark_mode");
        $("body").toggleClass("dark_mode");
        $("header").toggleClass("dark_mode");
        $("#titulo").toggleClass("dark_mode");
        $("#subtitulo").toggleClass("dark_mode");
    });

    // Mostramos por consola el navegador utilizado por el usuario
    var navegadores = ["chrome", "firefox", "safari", "opera", "trident", "msie", "edg"];
    for(var i in navegadores){
        if(window.navigator.userAgent.toLowerCase().indexOf(navegadores[i]) != -1 ){
            console.log("Navegador: " + navegadores[i]);
        }
    }
    
    // Mostramos por consola el sistema operativo utilizado por el usuario
    var sistemasOperativos = ["win", "linux", "mac"];
    for(var i in sistemasOperativos){
        if(window.navigator.appVersion.toLowerCase().indexOf(sistemasOperativos[i]) != -1 ){
            console.log("Sistema operativo: " + sistemasOperativos[i]);
        }
    }

    // Mostramos por consola el dispositivo usado por el usuario
    var movil = /android|iphone/i;
    var kindle = /kindle/i;
    var ipad = /ipad/i;

    if (movil.test(window.navigator.userAgent) == true) {
        console.log("El usuario está usando un teléfono móvil");
    } else if (kindle.test(window.navigator.userAgent) == true){
        console.log("El usuario está usando un kindle");
    } else if (ipad.test(window.navigator.userAgent) == true){
        console.log("El usuario está usando un ipad");
    } else {
        console.log("El usuario está usando un dispositivo de escritorio");
    }

    // Posición del ratón
    $(document).mousemove(function(event){
        $("#coordenadas").text(event.pageX + ", " + event.pageY);
    });

    // Segundos que lleva el usuario conectado
    var minutos = 0;
    var segundos = 0;

    function segundosTranscurridos() {
        $("#tiempo").text(minutos + " min " + segundos + " seg");
        segundos++;

        if (segundos == 60) {
            segundos = 0;
            minutos++;
        }
    }

    setInterval(segundosTranscurridos, 1000);
    
});