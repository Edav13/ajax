function mostrarDatosJSON(nombre) {
    var ajaxRequest = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    var resultado = document.getElementById('info');
    console.log(nombre.lenght)
    if(nombre === '' || nombre === undefined) {
        resultado.innerHTML = '';
    }else {
        ajaxRequest.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var datos = JSON.parse(this.responseText);
                var min = [];
                datos.forEach(function(datoSimple){
                    min.push(datoSimple.Nombre);
                });
                resultado.innerHTML = min.indexOf(nombre) > -1 ? '<br>Nombre encontrado': '<br>Nombre no encontrado'
            }
        };
        ajaxRequest.open("GET", "datos.json", true);
        ajaxRequest.send();
    }
}
//0 peticion no ha sido inicializada
//1 peticion no ha sido establecida
//2 peticion ha sido enviada
//3 peticion esta siendo procesada
//4 peticion ha sido finalizada