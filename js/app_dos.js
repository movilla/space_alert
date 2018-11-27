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
	var sonido_time_t_plus_2 = document.getElementById("audio_time_t_plus_2");
	var sonido_time_t_plus_3 = document.getElementById("audio_time_t_plus_3");
	var sonido_repeat = document.getElementById("audio_repeat");
	var sonido_data_transfer = document.getElementById("data_transfer");
	var sonido_first_phase_ends_in_1_minute = document.getElementById("audio_first_phase_ends_in_1_minute");
	var sonido_first_phase_ends_in_20_seconds = document.getElementById("audio_first_phase_ends_in_20_seconds");
	var sonido_first_phase_ends = document.getElementById("audio_first_phase_ends");
	var sonido_second_phase_begins = document.getElementById("audio_second_phase_begins");
	var sonido_incoming_data = document.getElementById("audio_incoming_data");
	var sonido_operation_ends_in_1_minute = document.getElementById("audio_operation_ends_in_1_minute");	
	var sonido_operation_ends_in_20_seconds = document.getElementById("audio_operation_ends_in_20_seconds");	
	var sonido_operation_ends = document.getElementById("audio_operation_ends");		
	var texto_uno = document.getElementById("texto_uno");
	var texto_dos = document.getElementById("texto_dos");
	var texto_tres = document.getElementById("texto_tres");
	var texto_cuatro = document.getElementById("texto_cuatro");
	var texto_cinco = document.getElementById("texto_cinco");
	var texto_seis = document.getElementById("texto_seis");
	var texto_siete = document.getElementById("texto_siete");
	var texto_ocho = document.getElementById("texto_ocho");
	var texto_nueve = document.getElementById("texto_nueve");
	var texto_diez = document.getElementById("texto_diez");
	var texto_once = document.getElementById("texto_once");
	var texto_doce = document.getElementById("texto_doce");
	var texto_trece = document.getElementById("texto_trece");
	var texto_catorce = document.getElementById("texto_catorce");
	// comienzo primera fase
	if ((minutos == 0)&&(segundos == 0)&&(centesimas == 5)) {
		sonido_begin_first_phase.play();
		setTimeout(function() {texto_uno.innerHTML = '<a class="texto">Actividad enemiga detectada. Comienza la fase 1</a>';}, 2000);
		}
	// comienzo primera amenza a 15s
	if ((minutos == 0)&&(segundos == 10)&&(centesimas == 0)) {
		var aleatorio_uno = Math.round(Math.random()*2);
		if (aleatorio_uno == 0) {
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
		if (aleatorio_uno == 1) {
			texto_dos.innerHTML = '<a class="texto">Tiempo T+1. Amenaza Zona Blanca</a>';
			sonido_alert.play();
			setTimeout(function(){ sonido_time_t_plus_1.play(); }, 2000);
			setTimeout(function(){ sonido_threat_zone_white.play(); }, 3000);
			setTimeout(function(){ sonido_repeat.play(); }, 6000);
			setTimeout(function(){ sonido_time_t_plus_1.play(); }, 7000);
			setTimeout(function(){ sonido_threat_zone_white.play(); }, 8000);
			}
		if (aleatorio_uno == 2) {
			texto_dos.innerHTML = '<a class="texto">Tiempo T+1. Amenaza Zona Roja</a>';
			sonido_alert.play();
			setTimeout(function(){ sonido_time_t_plus_1.play(); }, 2000);
			setTimeout(function(){ sonido_threat_zone_red.play(); }, 3000);
			setTimeout(function(){ sonido_repeat.play(); }, 6000);
			setTimeout(function(){ sonido_time_t_plus_1.play(); }, 7000);
			setTimeout(function(){ sonido_threat_zone_red.play(); }, 8000);
			}
		}
		// comienzo primera amenaza a 60s
		if ((minutos == 1)&&(segundos == 20)&&(centesimas == 0)) {
			var aleatorio_dos = Math.round(Math.random()*2);
			if (aleatorio_dos == 0) {
			// texto
			texto_tres.innerHTML = '<a class="texto">Tiempo T+2. Amenaza Zona Azul</a>';
			// sonidos
			sonido_alert.play();
			setTimeout(function(){ sonido_time_t_plus_2.play(); }, 2000);
			setTimeout(function(){ sonido_threat_zone_blue.play(); }, 3000);
			setTimeout(function(){ sonido_repeat.play(); }, 6000);
			setTimeout(function(){ sonido_time_t_plus_2.play(); }, 7000);
			setTimeout(function(){ sonido_threat_zone_blue.play(); }, 8000);
			}	
		if (aleatorio_dos == 1) {
			texto_tres.innerHTML = '<a class="texto">Tiempo T+2. Amenaza Zona Blanca</a>';
			sonido_alert.play();
			setTimeout(function(){ sonido_time_t_plus_2.play(); }, 2000);
			setTimeout(function(){ sonido_threat_zone_white.play(); }, 3000);
			setTimeout(function(){ sonido_repeat.play(); }, 6000);
			setTimeout(function(){ sonido_time_t_plus_2.play(); }, 7000);
			setTimeout(function(){ sonido_threat_zone_white.play(); }, 8000);
			}
		if (aleatorio_dos == 2) {
			texto_tres.innerHTML = '<a class="texto">Tiempo T+2. Amenaza Zona Roja</a>';
			sonido_alert.play();
			setTimeout(function(){ sonido_time_t_plus_2.play(); }, 2000);
			setTimeout(function(){ sonido_threat_zone_red.play(); }, 3000);
			setTimeout(function(){ sonido_repeat.play(); }, 6000);
			setTimeout(function(){ sonido_time_t_plus_2.play(); }, 7000);
			setTimeout(function(){ sonido_threat_zone_red.play(); }, 8000);
			}
		}
		// transferencia datos 1m30s
		if ((minutos == 2)&&(segundos == 15)&&(centesimas == 0)) {
		sonido_data_transfer.play();
		texto_cuatro.innerHTML = '<a class="texto">Transferencia de datos en 5, 4, 3, 2, 1</a>';
		}
		
		// comienzo tercera amenaza a 2m15s
		if ((minutos == 3)&&(segundos == 45)&&(centesimas == 0)) {
			var aleatorio_tres = Math.round(Math.random()*2);
			if (aleatorio_tres == 0) {
			// texto
			texto_cinco.innerHTML = '<a class="texto">Tiempo T+3. Amenaza Zona Azul</a>';
			// sonidos
			sonido_alert.play();
			setTimeout(function(){ sonido_time_t_plus_3.play(); }, 2000);
			setTimeout(function(){ sonido_threat_zone_blue.play(); }, 3000);
			setTimeout(function(){ sonido_repeat.play(); }, 6000);
			setTimeout(function(){ sonido_time_t_plus_3.play(); }, 7000);
			setTimeout(function(){ sonido_threat_zone_blue.play(); }, 8000);
			}	
		if (aleatorio_tres == 1) {
			texto_cinco.innerHTML = '<a class="texto">Tiempo T+3. Amenaza Zona Blanca</a>';
			sonido_alert.play();
			setTimeout(function(){ sonido_time_t_plus_3.play(); }, 2000);
			setTimeout(function(){ sonido_threat_zone_white.play(); }, 3000);
			setTimeout(function(){ sonido_repeat.play(); }, 6000);
			setTimeout(function(){ sonido_time_t_plus_3.play(); }, 7000);
			setTimeout(function(){ sonido_threat_zone_white.play(); }, 8000);
			}
		if (aleatorio_tres == 2) {
			texto_cinco.innerHTML = '<a class="texto">Tiempo T+3. Amenaza Zona Roja</a>';
			sonido_alert.play();
			setTimeout(function(){ sonido_time_t_plus_3.play(); }, 2000);
			setTimeout(function(){ sonido_threat_zone_red.play(); }, 3000);
			setTimeout(function(){ sonido_repeat.play(); }, 6000);
			setTimeout(function(){ sonido_time_t_plus_3.play(); }, 7000);
			setTimeout(function(){ sonido_threat_zone_red.play(); }, 8000);
			}
		}
		// final 1º fase en 60s 3m10s
		if ((minutos == 2)&&(segundos == 40)&&(centesimas == 0)) {
		sonido_first_phase_ends_in_1_minute.play();
		texto_seis.innerHTML = '<a class="texto">Fin de la primera fase en 1 minuto</a>';
		}
		// transferencia datos 3m20s
		if ((minutos == 4)&&(segundos == 50)&&(centesimas == 0)) {
		sonido_data_transfer.play();
		texto_siete.innerHTML = '<a class="texto">Transferencia de datos en 5, 4, 3, 2, 1</a>';
		}
		// final 1º fase en 20s 3m50s
		if ((minutos == 3)&&(segundos == 20)&&(centesimas == 0)) {
		sonido_first_phase_ends_in_20_seconds.play();
		texto_ocho.innerHTML = '<a class="texto">Fin de la primera fase en 20 segundos</a>';
		}
		// final 1º fase 4m05s
		if ((minutos == 3)&&(segundos == 35)&&(centesimas == 0)) {
		sonido_first_phase_ends.play();
		texto_nueve.innerHTML = '<a class="texto">Fin de la primera fase en 5, 4, 3, 2, 1</a>';
		setTimeout(function(){ sonido_second_phase_begins.play(); }, 12000);
		}
		// recibienddo datos fase 4m40s
		if ((minutos == 0)&&(segundos == 50)&&(centesimas == 0)) {
		sonido_incoming_data.play();
		texto_diez.innerHTML = '<a class="texto">Recibiendo datos</a>';
		setTimeout(function(){ sonido_second_phase_begins.play(); }, 12000);
		}
		// recibienddo datos fase 4m40s
		if ((minutos == 5)&&(segundos == 30)&&(centesimas == 0)) {
		sonido_incoming_data.play();
		texto_diez.innerHTML = '<a class="texto">Recibiendo datos</a>';
		setTimeout(function(){ sonido_second_phase_begins.play(); }, 12000);
		}
		// La operación termina en 1 minuto
		if ((minutos == 6)&&(segundos == 00)&&(centesimas == 0)) {
		sonido_operation_ends_in_1_minute.play();
		texto_doce.innerHTML = '<a class="texto">La operación termina en 1 minuto</a>';
		}
		// La operación termina en 20s
		if ((minutos == 6)&&(segundos == 40)&&(centesimas == 0)) {
		sonido_operation_ends_in_20_seconds.play();
		texto_trece.innerHTML = '<a class="texto">La operación termina en 20 segundos</a>';
		}
		// La operación termina
		if ((minutos == 6)&&(segundos == 55)&&(centesimas == 0)) {
		sonido_operation_ends.play();
		texto_catorce.innerHTML = '<a class="texto">La operación finaliza en 5, 4, 3, 2, 1.</a>';
		}
		// La operación termina
		if ((minutos == 7)&&(segundos == 08)&&(centesimas == 0)) {
		parar();
		}
		
}
