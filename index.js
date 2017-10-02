function ajaxPost(nombre) {
    var ajaxRequest = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    var resultado = document.getElementById('info');
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var salidaPhp = 'nombre='+ nombre + '&apellido='+apellido;

    ajaxRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var mensaje = ajaxRequest.responseText;
            console.log(mensaje)

            resultado.innerHTML = mensaje;
        }
    };

    ajaxRequest.open("POST", "servidor.php", true);
    ajaxRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    ajaxRequest.send(salidaPhp)
}
//0 peticion no ha sido inicializada
//1 peticion no ha sido establecida
//2 peticion ha sido enviada
//3 peticion esta siendo procesada
//4 peticion ha sido finalizada