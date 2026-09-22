---
id: ssc.sin-clasificar.senal-de-carga-electrica-del-alternador
modulo: ssc
unidad: sin-clasificar
nt: 1089
tipo: proceso
subtipo: fundamento
titulo: "Señal De Carga Eléctrica Del Alternador"
menu: "Señal De Carga Eléctrica Del Alternado"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la estrategia de protección eléctrica del vehículo mediante el corte del compresor y electroventiladores en situaciones de sobrecarga del alternador.

## Fundamento

La UCE de la red de a bordo evalúa el rendimiento del alternador (borne L y +/DF). Si la carga supera un umbral límite, emite un mensaje digital vía CAN Confort hacia la UCE del climatizador para reducir la demanda eléctrica y mecánica sobre el motor.

## Desarrollo

* El alternador transmite su estado mediante una señal digital a la UCE de red de a bordo.
* Al detectarse una carga límite, la UCE de red de a bordo emite el mensaje correspondiente por la línea CAN-Bus de confort.
* La UCE del climatizador recibe la trama, desactiva la bobina del compresor y desconecta los electroventiladores para prevenir la descarga de la batería.

## Interpretación y errores frecuentes

* No existe función de emergencia; en caso de ausencia o corte de la señal de carga del alternador, la función de protección queda totalmente desactivada.
