function mostrarSugerencia(nombre) {
    var ajaxRequest = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    var resultado = document.getElementById('info');
    if(nombre.length === 0){

    } else {
        ajaxRequest.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                resultado.innerHTML  = ajaxRequest.responseText;
            }
        };
        ajaxRequest.open("GET", "servidor.php?nombre=" + nombre, true);
        ajaxRequest.send();
    }
}
//0 peticion no ha sido inicializada
//1 peticion no ha sido establecida
//2 peticion ha sido enviada
//3 peticion esta siendo procesada
//4 peticion ha sido finalizada