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
Medir la presión del fluido refrigerante en el circuito y enviar la señal electrónica a la **unidad de control del motor** y a la **unidad de control del aire acondicionado** (pág. 15).

## Tipos y características
Transmisor de presión electrónico con un diseño idéntico al montado en el modelo Toledo (pág. 15).
📷 IMAGEN: Transmisor de presión G65 y esquema de conexionado eléctrico con la unidad del aire acondicionado J293, la unidad del motor y la unidad del autoclima J255 — Fuente: Copia de Transmisor de presión II.pdf, págs. 15-17

## Principio de funcionamiento
El transmisor mide la presión del circuito frigorífico y transmite la señal a dos unidades de control:
- **Unidad del aire acondicionado:** procesa la señal para gestionar la desconexión del compresor por presión máxima o mínima, conectar la 2ª velocidad de los ventiladores del líquido refrigerante al alcanzar 16 bares e informar a la unidad del autoclima J255 sobre la conexión o desconexión del compresor (pág. 15).
- **Unidad de control del motor:** procesa la señal enviada por el transmisor y actúa sobre la regulación del ralentí según las necesidades requeridas por la carga del motor (pág. 17).

## Valores de trabajo
- **Presión para activación de la 2ª velocidad de los ventiladores del líquido refrigerante:** 16 bares (pág. 15).

## Anomalías frecuentes
Avería o fallo interno en el propio transmisor de presión (pág. 17).

## Comportamiento en avería
En caso de avería en el transmisor G65:
- La **unidad de control del aire acondicionado desactiva el compresor** como función sustitutiva (pág. 17).
- La avería únicamente queda registrada en la **memoria de averías de la unidad de control del motor** (pág. 17).

## Cómo comprobarlo
No documentado en fuentes (págs. 15-17).

## Mantenimiento
No documentado en fuentes (págs. 15-17).

COBERTURA: documento «Copia de Transmisor de presión II.pdf», páginas 15 a 17 de 17. [completo]