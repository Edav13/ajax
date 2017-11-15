function ajax_post() {
    var ajaxRequest = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    var resultado = document.getElementById('info');

    var a = document.getElementById("nombre").value;
    var b = document.getElementById("correo").value;

    var informacionDelUsuario = 'nombre=' + a + '&correo=' + b;

    ajaxRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            resultado.innerHTML  = ajaxRequest.responseText;
        }
    };
    ajaxRequest.open('POST', 'servidor.php', true);
    ajaxRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    ajaxRequest.send(informacionDelUsuario);

}
//0 peticion no ha sido inicializada
//1 peticion no ha sido establecida
//2 peticion ha sido enviada
//3 peticion esta siendo procesada
//4 peticion ha sido finalizada