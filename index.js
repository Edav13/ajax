function ejecutarAjax(nombreUsuario) {
    var resultado = document.getElementById('info');
    var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {

            if(this.responseXML !== null) {
                var xmlDoc = this.responseXML;
                var x = encontrarPersona(xmlDoc, nombreUsuario);
                resultado.innerHTML = x;
            }
        }   
    };
    xmlhttp.open('GET', 'datos.xml', true);
    xmlhttp.send();
};

function encontrarPersona(xmlDoc, usuario) {
    var usuarios = [];
    var persona = xmlDoc.getElementsByTagName('cliente');
    for(var i = 0; i < persona.length ; i++) {
        usuarios.push(persona[i].getElementsByTagName('nombre')[0].childNodes[0].nodeValue);
    }
    var mensaje = usuarios.indexOf(usuario) !== -1 ? 'si fue encontrado' : 'no fue encontrado';
    return mensaje;
}




//0 peticion no ha sido inicializada
//1 peticion no ha sido establecida
//2 peticion ha sido enviada
//3 peticion esta siendo procesada
//4 peticion ha sido finalizada