function mostrarDatosJSON() {
    var ajaxRequest = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    var resultado = document.getElementById('info');
    ajaxRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var datos = JSON.parse(this.responseText);
            resultado.innerHTML = '';
            for(var a in datos) {
                resultado.innerHTML += '<h3>'+a+'</h3>';
                for(var b in datos[a]){
                    resultado.innerHTML += b+': '+ datos[a][b]+'<br>';
                }
                resultado.innerHTML += '<hr>';
            }
        }
    };
    ajaxRequest.open("GET", "datos.json", true);
    ajaxRequest.send();
}
//0 peticion no ha sido inicializada
//1 peticion no ha sido establecida
//2 peticion ha sido enviada
//3 peticion esta siendo procesada
//4 peticion ha sido finalizada