function ejecutarAjax() {
    var resultado = document.getElementById('listaDeUsuarios');
    var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            if(this.responseXML !== null) {
                var xmlDoc = xmlhttp.responseXML;
                var usuarios = '';
                var persona = xmlDoc.getElementsByTagName('cliente');
                for(var i = 0; i < persona.length;i++){
                    usuarios += '<option>' + persona[i].getElementsByTagName('nombre')[0].childNodes[0].nodeValue + '</option>';
                }
                resultado.innerHTML = usuarios;
            }
        }
    };
    xmlhttp.open('GET', 'datos.xml', true);
    xmlhttp.send();

}
ejecutarAjax();

function usuarioSeleccionado() {
    var e = document.getElementById('listaDeUsuarios');
    var usuario = e.options[e.selectedIndex].text;
    document.getElementById('info').innerHTML = usuario + ' fue seleccionado.';
}

//0 peticion no ha sido inicializada
//1 peticion no ha sido establecida
//2 peticion ha sido enviada
//3 peticion esta siendo procesada
//4 peticion ha sido finalizada