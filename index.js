function ejecutarAJAx() {
    var ajaxRequest = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    var resultado = document.getElementById('info');
    var num1 = document.getElementById('n1').value;
    var num2 = document.getElementById('n2').value;
    var cadena = 'num1=' + num1 + '&num2=' + num2;

    ajaxRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            resultado.innerHTML  = ajaxRequest.responseText;
        }
    };
    console.log(cadena)
    ajaxRequest.open("GET", "servidor.php?" + cadena, true);
    ajaxRequest.send();
}
//0 peticion no ha sido inicializada
//1 peticion no ha sido establecida
//2 peticion ha sido enviada
//3 peticion esta siendo procesada
//4 peticion ha sido finalizada