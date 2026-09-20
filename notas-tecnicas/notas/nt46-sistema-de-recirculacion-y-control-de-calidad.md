---
id: ssc.clima.sistema-de-recirculacion-y-control-de-calidad-del-aire
modulo: ssc
unidad: clima
nt: 46
tipo: proceso
subtipo: procedimiento
titulo: "Sistema De Recirculación Y Control De Calidad Del Aire"
menu: "Sistema De Recirculación Y Control De "
grupo: Regulación y control
fuentes: "13. Climatización Electrónica.pdf, pág. 98-113"
---

## Objeto y alcance

Establecer el procedimiento de funcionamiento del sistema de recirculación manual y de la recirculación automática gestionada por el sensor de calidad del aire (SnO2). Se aplica para acelerar el acondicionamiento térmico del habitáculo y evitar la entrada de contaminantes y gases de escape.

## Fundamento

La recirculación aísla la entrada de aire exterior. El sensor de calidad del aire utiliza un semiconductor de óxido mixto de estaño (SnO2) que opera a 350 ^{°}C. La absorción o liberación de partículas de oxígeno al entrar en contacto con contaminantes atmosféricos modifica la resistencia eléctrica del semiconductor. La electrónica interna del sensor traduce estas variaciones en una señal digital hacia la UCE del climatizador para cerrar automáticamente la trampilla.

## Condiciones previas

* Encendido conectado y climatizador activado.  
* Motor a temperatura de servicio con tensión de red estable.

## Equipo y material

* Sensor de calidad del aire (SnO2) ubicado en la toma de entrada de aire.  
* Servomotor de la chapaleta de recirculación / retención de aire.  
* Conmutador de marcha atrás conectado a la UCE de red de a bordo.

## Desarrollo

El funcionamiento del sistema de recirculación comprende la siguiente secuencia de eventos:

1. **Activación manual:** El usuario acciona el pulsador del panel de mandos, enviando una señal a la UCE para activar el servomotor o la válvula de vacío de la chapaleta.  
2. **Protección automática en marcha atrás:** Al engranar la marcha atrás, el conmutador de la caja de cambios envía una señal a la UCE de red de a bordo, la cual transmite la información por el CAN-Bus de confort a la UCE del climatizador para cerrar la entrada de aire exterior y evitar la succión de gases de escape.  
3. **Detección de gases oxidables:** Gases como el monóxido de carbono (CO), hexano (C6H14), benceno (C6H6), n-heptano (C7H16) y vapores de combustible reaccionan liberando oxígeno del SnO2, reduciendo su resistencia eléctrica. La electrónica envía una señal digital y la UCE activa la recirculación.  
4. **Detección de gases reducibles:** Gases como los óxidos de nitrógeno (NO_x), dióxido de azufre (SO2), sulfuro de carbono (CS2) y ácido sulfhídrico (H2S) reaccionan cediendo oxígeno al SnO2, aumentando su resistencia eléctrica. La electrónica detecta la variación y ordena el cierre de la trampilla.  
5. **Desconexión temporal:** Transcurrido el tiempo de contaminación o de uso manual, la UCE abre de nuevo la entrada de aire fresco.

## Valores de referencia

| Parámetro / Componente | Valor de referencia | Condiciones de validez |
|---|---|---|
| Temperatura de trabajo del sensor SnO2 | Aprox. 350 °C | Caldeo interno del semiconductor de estaño |
| Potencia absorbida por el sensor | 0,5 W | Consumo de la electrónica y caldeo |
| Reacción con gases oxidables | Disminución de la resistencia eléctrica | Contacto con CO, hexano, benceno, heptano |
| Reacción con gases reducibles | Aumento de la resistencia eléctrica | Contacto con NOx, SO2, H2S, CS2 43, 44 |

## Interpretación y errores frecuentes

* **Uso prolongado no controlado:** Mantener la recirculación activa de forma ininterrumpida produce el viciamiento del aire interior y el empañamiento rápido de los cristales del habitáculo por acumulación de humedad corporal.  
* **Fallo del interruptor de marcha atrás:** En caso de corte o ausencia de señal, la función no se realiza y la entrada de aire exterior se mantiene abierta al circular marcha atrás.

## Verificación final

Verificar el cierre automático inmediato de la chapaleta de recirculación al engranar la marcha atrás o al exponer la toma de aire a un gas de prueba contaminante, comprobando la posterior apertura al restablecer el aire limpio.

## Seguridad y normativa

Prevención de la intoxicación de los ocupantes por monóxido de carbono (CO) y dióxido de nitrógeno (NO_x) procedentes de los escapes de otros vehículos.

## Imágenes requeridas

- Esquema del sensor de calidad del aire mostrando la zona de medición de dióxido de estaño, la electrónica de control y las reacciones de gases oxidables y reducibles — Fuente: 13. Climatización Electrónica.pdf, pág. 112 y 113
