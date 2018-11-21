var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
function inicio () {
	control = setInterval(cronometro,10);
	document.getElementById("inicio").disabled = true;
	document.getElementById("parar").disabled = false;
	document.getElementById("continuar").disabled = true;
	document.getElementById("reinicio").disabled = false;
}
function parar () {
	clearInterval(control);
	document.getElementById("parar").disabled = true;
	document.getElementById("continuar").disabled = false;
}
function reinicio () {
	clearInterval(control);
	centesimas = 0;
	segundos = 0;
	minutos = 0;
	horas = 0;
	Centesimas.innerHTML = ":00";
	Segundos.innerHTML = ":00";
	Minutos.innerHTML = ":00";
	Horas.innerHTML = "00";
	document.getElementById("inicio").disabled = false;
	document.getElementById("parar").disabled = true;
	document.getElementById("continuar").disabled = true;
	document.getElementById("reinicio").disabled = true;
}
function cronometro () {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
		Centesimas.innerHTML = ":"+centesimas;
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
		Segundos.innerHTML = ":"+segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
		Minutos.innerHTML = ":"+minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10) { horas = "0"+horas }
		Horas.innerHTML = horas;
	}
	// variables con todos los sonidos y texto que se utilizan
	var sonido_alert= document.getElementById("audio_alert");
	var sonido_begin_first_phase = document.getElementById("audio_begin_first_phase");
	var sonido_threat_zone_blue = document.getElementById("audio_threat_zone_blue");
	var sonido_threat_zone_white = document.getElementById("audio_threat_zone_white");
	var sonido_threat_zone_red = document.getElementById("audio_threat_zone_red");
	var sonido_time_t_plus_1 = document.getElementById("audio_time_t_plus_1");
	var sonido_repeat = document.getElementById("audio_repeat");
	var texto_uno = document.getElementById("texto_uno");
	var texto_dos = document.getElementById("texto_dos");
	// comienzo primera fase
	if ((minutos == 0)&&(segundos == 0)&&(centesimas == 5)) {
		sonido_begin_first_phase.play();
		setTimeout(function() {texto_uno.innerHTML = '<a class="texto">Actividad enemiga detectada. Comience la fase 1</a>';}, 2000);
		}
	// comienzo primera amenza a 15s
	if ((minutos == 0)&&(segundos == 15)&&(centesimas == 0)) {
		var aleatorio = Math.round(Math.random()*2);
		if (aleatorio == 0) {
			// texto
			texto_dos.innerHTML = '<a class="texto">Tiempo T+1. Amenaza Zona Azul</a>';
			// sonidos
			sonido_alert.play();
			setTimeout(function(){ sonido_time_t_plus_1.play(); }, 2000);
			setTimeout(function(){ sonido_threat_zone_blue.play(); }, 3000);
			setTimeout(function(){ sonido_repeat.play(); }, 6000);
			setTimeout(function(){ sonido_time_t_plus_1.play(); }, 7000);
			setTimeout(function(){ sonido_threat_zone_blue.play(); }, 8000);
			}	
		if (aleatorio == 1) {
			texto_dos.innerHTML = '<a class="texto">Tiempo T+1. Amenaza Zona Blanca</a>';
			sonido_alert.play();
			setTimeout(function(){ sonido_time_t_plus_1.play(); }, 2000);
			setTimeout(function(){ sonido_threat_zone_white.play(); }, 3000);
			setTimeout(function(){ sonido_repeat.play(); }, 6000);
			setTimeout(function(){ sonido_time_t_plus_1.play(); }, 7000);
			setTimeout(function(){ sonido_threat_zone_white.play(); }, 8000);
			}
		if (aleatorio == 2) {
			var texto_dos = document.getElementById("texto_uno");
			texto_uno.innerHTML = '<a class="texto">Tiempo T+1. Amenaza Zona Roja</a>';
			sonido_alert.play();
			setTimeout(function(){ sonido_time_t_plus_1.play(); }, 2000);
			setTimeout(function(){ sonido_threat_zone_red.play(); }, 3000);
			setTimeout(function(){ sonido_repeat.play(); }, 6000);
			setTimeout(function(){ sonido_time_t_plus_1.play(); }, 7000);
			setTimeout(function(){ sonido_threat_zone_red.play(); }, 8000);
			}
		}
}

//setTimeout(function(){ alert(segundos); }, 3000);
