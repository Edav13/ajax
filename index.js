function mostrarDatosJSON() {
    var ajaxRequest = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    var resultado = document.getElementById('info');
    ajaxRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var datos = JSON.parse(this.responseText);
            resultado.innerHTML = '';
            var min = [];
            //var min = datos[0].Edad
            datos.forEach(function(datoSimple){
                min.push(datoSimple.Edad);
                //min = min < datoSimple.Edad ? min : datoSimple.Edad;
            });
            resultado.innerHTML += 'La edad menor es:' + Math.min.apply(null, min);
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