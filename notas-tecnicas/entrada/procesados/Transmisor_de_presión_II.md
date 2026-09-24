```yaml
tipo: componente
titulo: Transmisor de presión electrónico
entidad: transmisor-presion
area: climatizacion
sistema: circuito-frigorifico
codigo: G65
fuente: "Copia de Transmisor de presión II.pdf"
paginas: "15-17"
forma_parte_de: circuito-frigorifico
relacionados: [unidad-control-climatizador, electroventilador-condensador, compresor]
palabras: [G65, transmisor de presión, ralentí, 16 bares, función sustitutiva]
```

## Misión
Medir la presión del fluido refrigerante en el circuito y enviar la señal de presión a la **unidad de control del motor** y a la **unidad de control del aire acondicionado**. (págs. 15-17)

## Tipos y características
Es un transmisor de presión electrónico de diseño idéntico al montado en el modelo Toledo.
📷 IMAGEN: Transmisor de presión G65 y esquema de conexionado eléctrico con la unidad del aire acondicionado J293, la unidad del motor y la unidad del autoclima J255 — Fuente: Copia de Transmisor de presión II.pdf, pág. 17 (págs. 15-17)

## Principio de funcionamiento
El transmisor mide la presión del circuito frigorífico y transmite la señal a dos unidades de control:
- **Unidad del aire acondicionado:** procesa la señal para efectuar la desconexión del compresor por presión máxima o mínima, conectar la 2ª velocidad de los ventiladores del líquido refrigerante al llegar a 16 bares e informar a la unidad del autoclima J255 sobre la conexión o desconexión del compresor.
- **Unidad de control del motor:** procesa la señal enviada por el transmisor y actúa sobre la regulación del ralentí según las necesidades requeridas por la carga del motor. (págs. 15-17)

## Valores de trabajo
- **Presión para conexión de la 2ª velocidad de los ventiladores del líquido refrigerante:** 16 bares. (pág. 15)

## Anomalías frecuentes
Avería en el propio transmisor de presión. (pág. 17)

## Comportamiento en avería
En caso de avería en el transmisor G65:
- La **unidad de control del aire acondicionado desactiva el compresor** como función sustitutiva.
- La avería de este transmisor únicamente queda registrada en la **memoria de averías de la unidad de control del motor**. (pág. 17)

## Cómo comprobarlo
No documentado en fuentes. (págs. 15-17)

## Mantenimiento
No documentado en fuentes. (págs. 15-17)

COBERTURA: documento «Copia de Transmisor de presión II.pdf», páginas 15 a 17 de 17. [completo]