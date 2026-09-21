---
id: ssc.sin-clasificar.presostatos-de-seguridad-y-transmisor-de-presion-electronico
modulo: ssc
unidad: sin-clasificar
nt: 523
titulo: "Presostatos De Seguridad Y Transmisor De Presión Electrónico"
ubicacion: "Montados en las tuberías de la línea de alta presión o sobre el filtro deshidratador"
aplicacion: "Protección de seguridad y gestión de los electroventiladores"
menu: "Presostatos De Seguridad Y Transmisor "
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Desconectar el compresor por presión insuficiente o excesiva, y comandar los escalones de velocidad del electroventilador.

## Principio de funcionamiento

- *Presostato de Mínima:* Contacto mecánico que abre si p < 2 bar para evitar el giro del compresor sin gas/aceite.  
- *Presostato de Máxima:* Abre contactos si p > 27 bar (re-cierra a 22 bar) por sobrepresión.  
- *Presostato Trinario (3 funciones):* Combina Mínima (corta < 2 bar), 2ª velocidad del ventilador (conecta > 17 bar / desconecta < 14 bar) y Máxima (corta > 27 bar / conecta < 22 bar).  
- *Transmisor de Presión (Electrónico):* Cristal de silicio piezoeléctrico. Un microprocesador emite una señal cuadrada PWM a 50 Hz (período de 20 ms). El ancho del pulso varía de 2,6 ms (a 1,4 bar) a 18 ms (a 37 bar).

## Características

Presostatos electromecánicos de membrana o transmisor electrónico piezoeléctrico de 3 pines.

## Valores de trabajo

| Presión en el circuito | Ancho de pulso PWM | Porcentaje del período (20 ms a 50 Hz) |
|---|---|---|
| **Nivel de Baja Presión: 1,4 bar** | **2,6 ms** | **13 % de duración del pulso** |
| **Nivel de Alta Presión: 37 bar** | **18 ms** | **90 % de duración del pulso** |

## Anomalías frecuentes

Fogueo de contactos en presostatos mecánicos; interrupción del cable de señal del transmisor PWM.

## Comportamiento en avería

El compresor no acopla o no salta la velocidad rápida del electroventilador.

## Cómo comprobarlo

Verificar continuidad en presostatos mecánicos u observar la señal cuadrada a 50 Hz con osciloscopio.
