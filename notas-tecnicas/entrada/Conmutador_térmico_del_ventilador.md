```yaml
tipo: componente
titulo: Regulador de la iluminación
entidad: regulador-iluminacion
area: electricidad-electronica
sistema: control-climatizacion
codigo: E20
fuente: "Conmutador térmico del ventilador.pdf"
paginas: "19"
forma_parte_de: conmutador-luces
relacionados: [unidad-control-climatizador]
palabras: [E20, resistencia interna, iluminación, tensión de alimentación]
```

## Misión
Modificar la tensión de alimentación para variar la luminosidad de los distintos componentes (cuadro de instrumentos, display de la unidad de manejo e indicación y luz de localización de los mandos), permitiendo regular el nivel de iluminación de los pictogramas del mando giratorio de la distribución de aire y la intensidad de la iluminación del display y pulsadores. (pág. 19)

## Tipos y características
Está ubicado en el lado izquierdo del tablero de instrumentos y forma una pieza única con el conmutador de luces y la regulación de altura de los faros. (pág. 19)
📷 IMAGEN: Regulador de iluminación E20 e interconexión con la unidad de manejo — Fuente: Conmutador térmico del ventilador.pdf, pág. 19

## Principio de funcionamiento
Modifica la tensión de alimentación mediante una resistencia interna. La señal emitida es utilizada por la unidad de control del autoclima o calefacción motorizada para regular la iluminación de los pictogramas del mando giratorio de la distribución de aire, y por el radiocasete para controlar la intensidad de la iluminación del display y pulsadores de la unidad de manejo e indicación. (pág. 19)

## Valores de trabajo
No documentado en fuentes. (pág. 19)

## Anomalías frecuentes
No documentado en fuentes. (pág. 19)

## Comportamiento en avería
No tiene función sustitutiva. (pág. 19)

## Cómo comprobarlo
No documentado en fuentes. (pág. 19)

## Mantenimiento
No documentado en fuentes. (pág. 19)

```yaml
tipo: componente
titulo: Conmutador térmico del ventilador
entidad: conmutador-termico-ventilador
area: motor
sistema: refrigeracion-motor
codigo: F18
fuente: "Conmutador térmico del ventilador.pdf"
paginas: "19"
forma_parte_de: circuito-refrigeracion-motor
relacionados: [electroventilador-condensador, unidad-control-climatizador, liquido-refrigerante-motor]
palabras: [F18, radiador, 95 ºC, 105 ºC, primera velocidad, segunda velocidad, positivo 30]
```

## Misión
Garantizar la refrigeración del líquido refrigerante activando las velocidades del ventilador al alcanzar temperaturas determinadas en el radiador. (pág. 19)

## Tipos y características
Se encuentra en el radiador del líquido refrigerante y está formado por dos interruptores normalmente abiertos. (pág. 19)
📷 IMAGEN: Ubicación y conexionado del conmutador térmico F18 en el radiador del líquido refrigerante — Fuente: Conmutador térmico del ventilador.pdf, pág. 19

## Principio de funcionamiento
- El primer interruptor cierra a los 95 ºC de temperatura del líquido refrigerante y alimenta con positivo directo (borne 30) a los motores de los ventiladores del líquido refrigerante, activando la 1ª velocidad.
- El segundo interruptor cierra a los 105 ºC y envía una señal de positivo (borne 30) a la unidad de control del aire acondicionado, la cual activa la 2ª velocidad de los ventiladores del líquido refrigerante al recibir dicha señal. (pág. 19)

## Valores de trabajo
- Cierre del primer interruptor (activación de 1ª velocidad): 95 ºC del líquido refrigerante.
- Cierre del segundo interruptor (señal para 2ª velocidad): 105 ºC del líquido refrigerante.
- Tensión de alimentación: positivo directo (borne 30). (pág. 19)

## Anomalías frecuentes
No documentado en fuentes. (pág. 19)

## Comportamiento en avería
No tiene función sustitutiva. (pág. 19)

## Cómo comprobarlo
No documentado en fuentes. (pág. 19)

## Mantenimiento
No documentado en fuentes. (pág. 19)

COBERTURA: documento «Conmutador térmico del ventilador.pdf», página 19 de 19. [completo]