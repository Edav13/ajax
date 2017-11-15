var resultado = document.getElementById('mostrar');

function mostrarClientes() {
    var ajaxRequest = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    ajaxRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            resultado.innerHTML  = ajaxRequest.responseText;
        }
    };
    ajaxRequest.open('GET', 'servidor.php', true);
    ajaxRequest.send();

}
function buscarUsuario(nombre) {
    var ajaxRequest = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    ajaxRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            resultado.innerHTML  = ajaxRequest.responseText;
        }
    };
    ajaxRequest.open('GET', 'servidor.php?nombre='+nombre, true);
    ajaxRequest.send();
}

function toggleOverlay(elemento) {
    var overlay = document.getElementById('overlay');
    var informacionDelUsuario = document.getElementById('informacionDelUsuario');
    var info = document.getElementById('info');
    overlay.style.opacity = 0.6;
    console.log(overlay.style.display)
    if(overlay.style.display === "block") {
        overlay.style.display = "none";
        informacionDelUsuario.style.display = "none";
    } else {
        overlay.style.display = "block";
        informacionDelUsuario.style.display = "block";
    }
    var nombre = elemento.innerHTML;
    var correo = elemento.nextSibling.value;
    info.innerHTML = '<strong>Nombre: </strong>' + nombre +'<br>'+
                    '<strong>Correo: </strong>' + correo +'<br>';
}   
//0 peticion no ha sido inicializada
//1 peticion no ha sido establecida
//2 peticion ha sido enviada
//3 peticion esta siendo procesada
//4 peticion ha sido finalizada