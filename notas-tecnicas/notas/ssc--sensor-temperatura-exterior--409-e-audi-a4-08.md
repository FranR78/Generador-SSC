---
id: ssc.sensor-temperatura-exterior.409-e-audi-a4-08
modulo: ssc
unidad: clima
nt: 419
tipo: elemento
clase: componente
titulo: "Sensor de temperatura exterior G17"
codigo: "G17"
menu: "Sensor de temperatura exterior G17"
grupo: "Control de climatización"
clave: sensor-temperatura-exterior
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
marca: "Audi"
fuentes: "409_e         Audi A4 _08.pdf, págs. 66-67"
relacionados: ["unidad-control-climatizador"]
palabras: ["g17", "temperatura exterior", "paragolpes", "led ac", "desactivación ac"]
---

## Misión

Medir la temperatura del aire ambiente exterior para la regulación de la climatización y la indicación en el cuadro de instrumentos. (págs. 66-67)

## Tipos y características

Sensor de temperatura único (NTC) montado en la zona frontal del vehículo, situado detrás del paragolpes delantero y por delante del condensador. (págs. 66-67)

## Principio de funcionamiento

Mide la temperatura exterior y transmite su señal resistiva a la unidad de control de la red de a bordo J519. La J519 retransmite el valor por el bus CAN a la unidad indicadora del cuadro de instrumentos J285 y a la unidad de control para Climatronic J255. (págs. 66-67)

## Anomalías frecuentes

Avería en la resistencia interna del sensor o interrupción de su cableado. (pág. 67)

## Comportamiento en avería

Si se avería el sensor de temperatura exterior G17, se desactiva de forma automática la función AC. El LED de la tecla AC permanece inactivo señalizando que el compresor del climatizador no marcha y que el climatizador automático está desactivado. (pág. 67)

## Cómo comprobarlo

Lectura del bloque de valores de medición a través del puerto de diagnosis en la unidad J519/J255 y verificación visual del estado del LED AC. (págs. 66-67)

## Mantenimiento

No requiere mantenimiento periódico. En caso de colisión frontal, verificar su correcto posicionamiento ante el condensador. (pág. 66)
