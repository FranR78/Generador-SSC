---
id: ssc.sin-clasificar.cuadro-de-instrumentos
modulo: ssc
unidad: sin-clasificar
nt: 1201
titulo: "Cuadro De Instrumentos"
codigo: "J285"
ubicacion: "En el salpicadero, frente al volante"
aplicacion: "Cuadro de instrumentos en SEAT Ibiza y Arona"
menu: "Cuadro De Instrumentos J285"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Mostrar la velocidad, revoluciones y estado del vehículo al conductor, y actuar como unidad de control maestra del sistema de inmovilizador electrónico.

## Principio de funcionamiento

Unidad electrónica de control y visualización. Recibe datos por CAN-Bus Confort para representarlos en pantalla y ejecuta los algoritmos de seguridad del inmovilizador 5C.

## Características

Disponible en 2 versiones:
* **Versión Basic:** Pantalla central mediante display de segmentos.
* **Versión Mid:** Pantalla central TFT en color blanco.  
Monta un botón inferior de ajuste y visualización multifunción.

## Valores de trabajo

* **Funciones según el tiempo de pulsación del botón de ajuste:**
  * *Accionamiento e inmediato corte:* Reinicia el contador de kilometraje parcial (trip).
  * *Pulsación durante 3 segundos:* Accede al menú de ajuste de la hora.
  * *Pulsación durante 5 segundos:* Muestra en pantalla el tiempo y kilometraje restante hasta el siguiente servicio de mantenimiento.
  * *Pulsación durante 15 segundos:* Visualiza en la pantalla las letras distintivas del motor (ejemplo: CHZJ). Para salir hay que desconectar el contacto.

## Anomalías frecuentes

Fallo en la pantalla central o avería en el chip de memoria del inmovilizador.

## Comportamiento en avería

Imposibilidad de arrancar el motor (el inmovilizador bloquea la UCE del motor J623) o apagado del cuadro de instrumentos.

## Cómo comprobarlo

Efectuar el test de actuadores y consultar los bloques de medición de la dirección 17 (Cuadro de instrumentos) con el equipo de diagnosis.
