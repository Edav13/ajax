function ejecutarAJAX(){
	//var ajaxRequest = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	//0 peticion no ha sido inicializada
	//1 peticion no ha sido establecida
	//2 peticion ha sido enviada
	//3 peticion esta siendo procesada
	//4 peticion ha sido finalizada
	var ajaxRequest = new XMLHttpRequest();
	console.log(ajaxRequest)
	ajaxRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("info").innerHTML = this.responseText;
		}
	};
	ajaxRequest.open("GET", "archivo.txt", true);
	ajaxRequest.send();
}