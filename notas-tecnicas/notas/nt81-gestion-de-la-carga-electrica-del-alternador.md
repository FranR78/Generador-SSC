---
nt: 81
tipo: proceso
subtipo: fundamento
titulo: "Gestión De La Carga Eléctrica Del Alternador"
menu: "Gestión De La Carga Eléctrica Del Alte"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar la función de protección del alternador y la batería gestionada por la UCE del climatizador. Se aplica cuando la carga eléctrica del vehículo llega a su límite máximo.

## Fundamento

El alternador transmite su estado de carga a la UCE de red de a bordo analizando la tensión (borne L) y su rendimiento (borne +/DF). Si se supera un umbral crítico, la UCE de red de a bordo manda un mensaje vía CAN-Bus a la UCE del climatizador para desconectar consumidores térmicos y proteger la batería.

## Condiciones previas

Motor en marcha con alto consumo eléctrico en el vehículo.

## Equipo y material

* Alternador (bornes L y +/DF).  
* UCE de red de a bordo, UCE del climatizador y red CAN-Bus.

## Desarrollo

1. El alternador elabora una señal digital de carga basada en la tensión del borne L y el rendimiento del borne +/DF.  
2. La señal se transmite a la UCE de red de a bordo.  
3. Al superar el límite de trabajo del alternador, la UCE de red de a bordo emite un mensaje en el CAN-Bus de confort.  
4. La UCE del climatizador desactiva el compresor y desconecta los electroventiladores para evitar la descarga de la batería.

## Valores de referencia

| Señal / Borne | Origen | Función |
| ----- | ----- | ----- |
| Borne L | Alternador -> UCE Red de a bordo | Tensión de trabajo del alternador |
| Borne +/DF | Alternador -> UCE Red de a bordo | Rendimiento del alternador |

## Interpretación y errores frecuentes

No existe función de emergencia. En caso de corte o ausencia de señal, la protección no se realiza y queda desactivada.

## Verificación final

Verificación del mensaje de estado del alternador mediante equipo de diagnosis en la red CAN de confort.

## Seguridad y normativa

Protección del alternador contra sobrecargas y prevención del agotamiento de la batería de servicio.

## Imágenes requeridas

- Esquema de conexión entre el alternador, la UCE de red de a bordo y la UCE del climatizador mediante la red CAN-Bus — Fuente: 13. Climatización Electrónica.pdf, pág. 105
