function ejecutarAjax() {
    var resultado = document.getElementById('info');
    var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            if(this.responseXML !== null) {
                var xmlDoc = xmlhttp.responseXML;
                var tabla = '<tr><th>Nombre</th><th>Apellido</th></tr>';
                var persona = xmlDoc.getElementsByTagName('cliente');
                for(var i=0; i < persona.length;i++){
                    tabla += '<tr><td>' + persona[i].getElementsByTagName('nombre')[0].childNodes[0].nodeValue + '</td><td>' + persona[i].getElementsByTagName('apellido')[0].childNodes[0].nodeValue + '</td></tr>'
                }
                resultado.innerHTML = tabla;
            }
        }
    };
    xmlhttp.open('GET', 'datos.xml', true);
    xmlhttp.send();

}

//0 peticion no ha sido inicializada
//1 peticion no ha sido establecida
//2 peticion ha sido enviada
//3 peticion esta siendo procesada
//4 peticion ha sido finalizada