var resultado = document.getElementById('info');

function mostrarUsuarios() {
    var ajaxRequest = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    ajaxRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            resultado.innerHTML  = ajaxRequest.responseText;
        }
    };
    ajaxRequest.open('GET', 'servidor.php?personas='+'personas', true);
    ajaxRequest.send();

}
mostrarUsuarios();

function editarUsuario(usuarioID) {
    var nombreID = "nombreID" + usuarioID;
    var emailID = 'emailID'+ usuarioID;
    var borrar = 'borrar' + usuarioID;
    var actualizar = 'actualizar' + usuarioID;
    var editarNombreID = nombreID + '-editar';

    var nombreDelUsuario = document.getElementById(nombreID).innerHTML;

    var parent = document.querySelector('#' + nombreID);
    if(parent.querySelector('#' + editarNombreID) === null) {
        document.getElementById(nombreID).innerHTML = '<input type="text" id="'+editarNombreID+'" value="'+nombreDelUsuario+'">';
        document.getElementById(borrar).disabled = true;
        document.getElementById(actualizar).style.display = 'block';
    }
}

function actualizarUsuario(usuarioID) {
    var ajaxRequest = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    var nombreActualizado = document.getElementById('nombreID' + usuarioID + '-editar').value;
    ajaxRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            mostrarUsuarios();
        }
    };

    ajaxRequest.open('GET', 'servidor.php?usuarioIDActualizado=' + usuarioID + '&nombreActualizado=' + nombreActualizado, true);
    ajaxRequest.send();
}

function borrarUsuario(usuarioID) {
    var ajaxRequest = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    var respuesta = confirm('Estas seguro de borrar este usuario?');
    if(respuesta) {
        ajaxRequest.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                mostrarUsuarios();
            }
        };

        ajaxRequest.open('GET', 'servidor.php?usuarioIDEliminado=' + usuarioID, true);
        ajaxRequest.send();
    }
}

var overlay = document.getElementById('overlay');
var nuevaVentana = document.getElementById('nuevaVentana');

function ejecutarNuevaVentana(){
    overlay.style.opacity = 0.5;
    if(overlay.style.display === 'block') {
        overlay.style.display = 'none';
        nuevaVentana.style.display = 'none';
    } else {
        overlay.style.display = 'block';
        nuevaVentana.style.display = 'block';
    }
    document.getElementById('nuevoUsuarioID').value = '';
    document.getElementById('nuevoEmailID').value = '';
}

function agregarUsuario() {

    overlay.style.display = 'none';
    nuevaVentana.style.display = 'none';
    var ajaxRequest = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    var nuevoUsuario = document.getElementById('nuevoUsuarioID').value;
    var nuevoEmail = document.getElementById('nuevoEmailID').value;
    ajaxRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            mostrarUsuarios();
        }
    };
    ajaxRequest.open('GET', 'servidor.php?nuevoUsuario=' + nuevoUsuario + '&nuevoEmail=' + nuevoEmail, true);
    ajaxRequest.send();
}
//0 peticion no ha sido inicializada
//1 peticion no ha sido establecida
//2 peticion ha sido enviada
//3 peticion esta siendo procesada
//4 peticion ha sido finalizada