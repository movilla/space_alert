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
	var sonido_serious_threat_zone_blue = document.getElementById("audio_serious_threat_zone_blue");
	var sonido_serious_threat_zone_white = document.getElementById("audio_serious_threat_zone_white");
	var sonido_serious_threat_zone_red = document.getElementById("audio_serious_threat_zone_red");
	var sonido_time_t_plus_1 = document.getElementById("audio_time_t_plus_1");
	var sonido_time_t_plus_2 = document.getElementById("audio_time_t_plus_2");
	var sonido_time_t_plus_3 = document.getElementById("audio_time_t_plus_3");
	var sonido_time_t_plus_4 = document.getElementById("audio_time_t_plus_4");
	var sonido_time_t_plus_5 = document.getElementById("audio_time_t_plus_5");
	var sonido_time_t_plus_6 = document.getElementById("audio_time_t_plus_6");
	var sonido_unconfirmed_report = document.getElementById("unconfirmed_report");
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
	var sonido_communications_down = document.getElementById("audio_communications_down");	
	var sonido_white_noise = document.getElementById("audio_white_noise");	
	var sonido_communications_restored = document.getElementById("audio_communications_restored");
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
		setTimeout(function() {texto_uno.innerHTML = '<a class="texto">  '+ minutos+':'+segundos+' Actividad enemiga detectada. Comienza la fase 1</a>';}, 2000);
		}
	// comienzo primera amenza a 10s
	if ((minutos == 0)&&(segundos == 10)&&(centesimas == 0)) {
		var aleatorio_uno = Math.round(Math.random()*2);
		if (aleatorio_uno == 0) {
			// texto
			texto_dos.innerHTML = '<a class="texto">  '+ minutos+':'+segundos+' Tiempo T+2. Amenaza Zona Azul</a>';
			// sonidos
			sonido_alert.play();
			setTimeout(function(){ sonido_time_t_plus_2.play(); }, 2000);
			setTimeout(function(){ sonido_threat_zone_blue.play(); }, 3000);
			setTimeout(function(){ sonido_repeat.play(); }, 6000);
			setTimeout(function(){ sonido_time_t_plus_2.play(); }, 7000);
			setTimeout(function(){ sonido_threat_zone_blue.play(); }, 8000);
			}	
		if (aleatorio_uno == 1) {
			texto_dos.innerHTML = '<a class="texto">  '+ minutos+':'+segundos+' Tiempo T+2. Amenaza Zona Blanca</a>';
			sonido_alert.play();
			setTimeout(function(){ sonido_time_t_plus_2.play(); }, 2000);
			setTimeout(function(){ sonido_threat_zone_white.play(); }, 3000);
			setTimeout(function(){ sonido_repeat.play(); }, 6000);
			setTimeout(function(){ sonido_time_t_plus_2.play(); }, 7000);
			setTimeout(function(){ sonido_threat_zone_white.play(); }, 8000);
			}
		if (aleatorio_uno == 2) {
			texto_dos.innerHTML = '<a class="texto">  '+ minutos+':'+segundos+' Tiempo T+2. Amenaza Zona Roja</a>';
			sonido_alert.play();
			setTimeout(function(){ sonido_time_t_plus_2.play(); }, 2000);
			setTimeout(function(){ sonido_threat_zone_red.play(); }, 3000);
			setTimeout(function(){ sonido_repeat.play(); }, 6000);
			setTimeout(function(){ sonido_time_t_plus_2.play(); }, 7000);
			setTimeout(function(){ sonido_threat_zone_red.play(); }, 8000);
			}
		}
		
		// recibienddo datos fase 1m10s
		if ((minutos == 1)&&(segundos == 10)&&(centesimas == 0)) {
		sonido_incoming_data.play();
		texto_tres.innerHTML = '<a class="texto">  '+ minutos+':'+segundos+' Recibiendo datos</a>';
		}
		
		// comienzo segunda amenaza a 1m30s
		if ((minutos == 1)&&(segundos == 30)&&(centesimas == 0)) {
			var aleatorio_dos = Math.round(Math.random()*2);
			if (aleatorio_dos == 0) {
			// texto
			texto_cuatro.innerHTML = '<a class="texto">  '+ minutos+':'+segundos+' Tiempo T+3. Amenaza Grave Zona Azul</a>';
			// sonidos
			
			sonido_alert.play();
			setTimeout(function(){ sonido_time_t_plus_3.play(); }, 2000);
			setTimeout(function(){ sonido_serious_threat_zone_blue.play(); }, 3000);
			setTimeout(function(){ sonido_repeat.play(); }, 6000);
			setTimeout(function(){ sonido_time_t_plus_3.play(); }, 7000);
			setTimeout(function(){ sonido_serious_threat_zone_blue.play(); }, 8000);
			}	
		if (aleatorio_dos == 1) {
			texto_cuatro.innerHTML = '<a class="texto">  '+ minutos+':'+segundos+' Tiempo T+3. Amenaza Grave Zona Blanca</a>';
			sonido_alert.play();
			setTimeout(function(){ sonido_time_t_plus_3.play(); }, 2000);
			setTimeout(function(){ sonido_serious_threat_zone_white.play(); }, 3000);
			setTimeout(function(){ sonido_repeat.play(); }, 6000);
			setTimeout(function(){ sonido_time_t_plus_3.play(); }, 7000);
			setTimeout(function(){ sonido_serious_threat_zone_white.play(); }, 8000);
			}
		if (aleatorio_dos == 2) {
			texto_cuatro.innerHTML = '<a class="texto">  '+ minutos+':'+segundos+' Tiempo T+3. Amenaza Grave Zona Roja</a>';
			sonido_alert.play();
			setTimeout(function(){ sonido_time_t_plus_3.play(); }, 2000);
			setTimeout(function(){ sonido_serious_threat_zone_red.play(); }, 3000);
			setTimeout(function(){ sonido_repeat.play(); }, 6000);
			setTimeout(function(){ sonido_time_t_plus_3.play(); }, 7000);
			setTimeout(function(){ sonido_serious_threat_zone_red.play(); }, 8000);
			}
		}
		
		// transferencia datos 2m00s
		if ((minutos == 2)&&(segundos == 0)&&(centesimas == 0)) {
		sonido_data_transfer.play();
		texto_cinco.innerHTML = '<a class="texto">  '+ minutos+':'+segundos+' Transferencia de datos en 5, 4, 3, 2, 1</a>';
		}
		
		// final 1º fase en 60s 2m40s
		if ((minutos == 2)&&(segundos == 40)&&(centesimas == 0)) {
		sonido_first_phase_ends_in_1_minute.play();
		texto_seis.innerHTML = '<a class="texto">  '+ minutos+':'+segundos+' Fin de la primera fase en 1 minuto</a>';
		}
		
		// transferencia datos 2m50s
		if ((minutos == 2)&&(segundos == 50)&&(centesimas == 0)) {
		sonido_data_transfer.play();
		texto_siete.innerHTML = '<a class="texto">  '+ minutos+':'+segundos+' Transferencia de datos en 5, 4, 3, 2, 1</a>';
		}
		
		// final 1º fase en 20s 3m20s
		if ((minutos == 3)&&(segundos == 20)&&(centesimas == 0)) {
		sonido_first_phase_ends_in_20_seconds.play();
		texto_ocho.innerHTML = '<a class="texto">  '+ minutos+':'+segundos+' Fin de la primera fase en 20 segundos</a>';
		}
		
		// final 1º fase 3m35s
		if ((minutos == 3)&&(segundos == 35)&&(centesimas == 0)) {
		sonido_first_phase_ends.play();
		texto_nueve.innerHTML = '<a class="texto">  '+ minutos+':'+segundos+' Fin de la primera fase en 5, 4, 3, 2, 1</a>';
		setTimeout(function(){ sonido_second_phase_begins.play(); }, 12000);
		}
		
		// Pte confirmación comienzo tercera amenaza a 3m50s
		if ((minutos == 3)&&(segundos == 50)&&(centesimas == 0)) {
			var aleatorio_tres = Math.round(Math.random()*2);
			if (aleatorio_tres == 0) {
			// texto
			texto_diez.innerHTML = '<a class="texto">  '+ minutos+':'+segundos+' Pendiente de confirmar. Tiempo T+5. Amenaza Zona Azul</a>';
			// sonidos
			sonido_alert.play();
			setTimeout(function(){ sonido_unconfirmed_report.play(); }, 1000);
			setTimeout(function(){ sonido_time_t_plus_5.play(); }, 3000);
			setTimeout(function(){ sonido_threat_zone_blue.play(); }, 4000);
			setTimeout(function(){ sonido_repeat.play(); }, 6000);
			setTimeout(function(){ sonido_unconfirmed_report.play(); }, 7000);			
			setTimeout(function(){ sonido_time_t_plus_5.play(); }, 9000);
			setTimeout(function(){ sonido_threat_zone_blue.play(); }, 10000);
			}	
		if (aleatorio_tres == 1) {
			texto_diez.innerHTML = '<a class="texto">  '+ minutos+':'+segundos+' Pendiente de confirmar. Tiempo T+5. Amenaza Zona Blanca</a>';
			sonido_alert.play();
			setTimeout(function(){ sonido_unconfirmed_report.play(); }, 1000);
			setTimeout(function(){ sonido_time_t_plus_5.play(); }, 3000);
			setTimeout(function(){ sonido_threat_zone_white.play(); }, 4000);
			setTimeout(function(){ sonido_repeat.play(); }, 6000);
			setTimeout(function(){ sonido_unconfirmed_report.play(); }, 7000);			
			setTimeout(function(){ sonido_time_t_plus_5.play(); }, 9000);
			setTimeout(function(){ sonido_threat_zone_white.play(); }, 10000);
			}
		if (aleatorio_tres == 2) {
			texto_diez.innerHTML = '<a class="texto">  '+ minutos+':'+segundos+' Pendiente de confirmar. Tiempo T+5. Amenaza Zona Roja</a>';
			sonido_alert.play();
			setTimeout(function(){ sonido_unconfirmed_report.play(); }, 1000);
			setTimeout(function(){ sonido_time_t_plus_5.play(); }, 3000);
			setTimeout(function(){ sonido_threat_zone_red.play(); }, 4000);
			setTimeout(function(){ sonido_repeat.play(); }, 6000);
			setTimeout(function(){ sonido_unconfirmed_report.play(); }, 7000);			
			setTimeout(function(){ sonido_time_t_plus_5.play(); }, 9000);
			setTimeout(function(){ sonido_threat_zone_red.play(); }, 10000);
			}
		}
		
		// comienzo cuarta amenaza a 4m50s
		if ((minutos == 4)&&(segundos == 50)&&(centesimas == 0)) {
			var aleatorio_cuarta = Math.round(Math.random()*2);
			if (aleatorio_cuarta == 0) {
			// texto
			texto_once.innerHTML = '<a class="texto">  '+ minutos+':'+segundos+' Tiempo T+6. Amenaza Grave Zona Azul</a>';
			// sonidos
			sonido_alert.play();
			setTimeout(function(){ sonido_time_t_plus_6.play(); }, 2000);
			setTimeout(function(){ sonido_serious_threat_zone_blue.play(); }, 3000);
			setTimeout(function(){ sonido_repeat.play(); }, 6000);
			setTimeout(function(){ sonido_time_t_plus_6.play(); }, 7000);
			setTimeout(function(){ sonido_serious_threat_zone_blue.play(); }, 8000);
			}	
		if (aleatorio_cuarta == 1) {
			texto_once.innerHTML = '<a class="texto">  '+ minutos+':'+segundos+' Tiempo T+6. Amenaza Grave Zona Blanca</a>';
			sonido_alert.play();
			setTimeout(function(){ sonido_time_t_plus_6.play(); }, 2000);
			setTimeout(function(){ sonido_serious_threat_zone_white.play(); }, 3000);
			setTimeout(function(){ sonido_repeat.play(); }, 6000);
			setTimeout(function(){ sonido_time_t_plus_6.play(); }, 7000);
			setTimeout(function(){ sonido_serious_threat_zone_white.play(); }, 8000);
			}
		if (aleatorio_cuarta == 2) {
			texto_once.innerHTML = '<a class="texto">  '+ minutos+':'+segundos+' Tiempo T+6. Amenaza Grave Zona Roja</a>';
			sonido_alert.play();
			setTimeout(function(){ sonido_time_t_plus_3.play(); }, 2000);
			setTimeout(function(){ sonido_serious_threat_zone_red.play(); }, 3000);
			setTimeout(function(){ sonido_repeat.play(); }, 6000);
			setTimeout(function(){ sonido_time_t_plus_3.play(); }, 7000);
			setTimeout(function(){ sonido_serious_threat_zone_red.play(); }, 8000);
			}
		}
		
		// transferencia datos 5m40s
		if ((minutos == 5)&&(segundos == 40)&&(centesimas == 0)) {
		sonido_data_transfer.play();
		texto_doce.innerHTML = '<a class="texto">  '+ minutos+':'+segundos+' Transferencia de datos en 5, 4, 3, 2, 1</a>';
		}
		
		// fallo sistema comunicaciones 6m00s
		if ((minutos == 6)&&(segundos == 00)&&(centesimas == 0)) {
		texto_trece.innerHTML = '<a class="texto">  '+ minutos+':'+segundos+' Fallo en el sistema de comunicaciones</a>';
		sonido_communications_down.play();
		setTimeout(function(){ sonido_white_noise.play(); }, 2000);
		setTimeout(function(){ sonido_communications_restored.play(); }, 19000);
		}
		
/*
		// recibienddo datos fase 5m30s
		if ((minutos == 5)&&(segundos == 30)&&(centesimas == 0)) {
		sonido_incoming_data.play();
		texto_once.innerHTML = '<a class="texto">  '+ minutos+':'+segundos+' Recibiendo datos</a>';
		}
		
		
		// La operación termina en 1 minuto
		if ((minutos == 6)&&(segundos == 00)&&(centesimas == 0)) {
		sonido_operation_ends_in_1_minute.play();
		texto_doce.innerHTML = '<a class="texto">  '+ minutos+':'+segundos+' La operación termina en 1 minuto</a>';
		}
		// La operación termina en 20s
		if ((minutos == 6)&&(segundos == 40)&&(centesimas == 0)) {
		sonido_operation_ends_in_20_seconds.play();
		texto_trece.innerHTML = '<a class="texto">  '+ minutos+':'+segundos+' La operación termina en 20 segundos</a>';
		}
		// La operación termina
		if ((minutos == 6)&&(segundos == 55)&&(centesimas == 0)) {
		sonido_operation_ends.play();
		texto_catorce.innerHTML = '<a class="texto">  '+ minutos+':'+segundos+' La operación finaliza en 5, 4, 3, 2, 1.</a>';
		}
		// La operación termina
		if ((minutos == 7)&&(segundos == 08)&&(centesimas == 0)) {
		parar();
		}
		
*/
}
