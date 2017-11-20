function ejecutarAjax() {
    var resultado = document.getElementById('info');
    var arr = [];
    var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            arr.push(xmlhttp.responseXML.getElementsByTagName('nombre').item(0));
            arr.push(xmlhttp.responseXML.getElementsByTagName('apellido').item(0));
            arr.push(xmlhttp.responseXML.getElementsByTagName('edad').item(0));

            resultado.innerHTML = arr[0].firstChild.nodeValue + " " + arr[1].firstChild.nodeValue + " tiene " + arr[2].firstChild.nodeValue + " años";
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