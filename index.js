function mostrarDatosJSON() {
	var ajaxRequest = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	//0 peticion no ha sido inicializada
	//1 peticion no ha sido establecida
	//2 peticion ha sido enviada
	//3 peticion esta siendo procesada
	//4 peticion ha sido finalizada
	var resultado = document.getElementById('info');
	//var ajaxRequest = new XMLHttpRequest();
	ajaxRequest.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			var datos = JSON.parse(this.responseText);
			resultado.innerHTML = '';
			datos.forEach(function(datoSimple){
				resultado.innerHTML += datoSimple.Nombre+' tiene '+ datoSimple.Edad +' años.<hr>';
			});
		}
	};
	ajaxRequest.open("GET", "datos.json", true);
	ajaxRequest.send();
}