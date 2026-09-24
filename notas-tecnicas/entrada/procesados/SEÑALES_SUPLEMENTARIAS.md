```yaml
tipo: fundamento
titulo: Señales suplementarias para la regulación de la climatización
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
fuente: "SEÑALES SUPLEMENTARIAS.pdf"
paginas: "50-51"
relacionados: [unidad-control-climatizador, servomotor-trampilla, sensor-temperatura-exterior]
palabras: [senales suplementarias, tiempo en parado, velocidad de marcha, regimen del motor, chapaleta de velocidad]
```

## Objeto
Aumentar el confort y optimizar la regulación del sistema de climatización mediante el procesamiento de información adicional procedente de otras unidades de control del vehículo. (pág. 50)

## Fundamento
La unidad de control del climatizador no trabaja únicamente con las mediciones de sus propios sensores térmicos, sino que procesa señales enviadas por otras UCEs del vehículo (cuadro de instrumentos, UCE del motor) para ajustar la posición de las trampillas y gestionar la conexión del compresor. (págs. 50-51)

## Desarrollo
El sistema procesa tres señales suplementarias principales:

1. Señal de tiempo en parado (th):
Contabiliza el intervalo transcurrido con el encendido desconectado hasta que se vuelve a arrancar el motor. Tras un nuevo arranque, la unidad de control procesa los valores de temperatura exterior memorizados antes de la parada. De este modo, la regulación evita verse influida por mediciones erróneas causadas por el calor radiado del motor en parado, logrando alcanzar la temperatura de confort más rápidamente y evitando un enfriamiento excesivo. (págs. 50-51)

2. Señal de velocidad de marcha (v):
Procede del transmisor del velocímetro y es procesada por la unidad de control para gestionar la chapaleta de velocidad. A velocidades elevadas del vehículo, reduce la sección de paso para el aire fresco con el fin de mantener prácticamente constante el caudal de aire que ingresa al habitáculo. (págs. 50-51)

3. Señal de régimen del motor (n):
Informa de forma continua a la unidad de control del climatizador sobre el funcionamiento del motor. Se utiliza para la regulación del sistema y la desactivación de seguridad del acoplamiento electromagnético del compresor, por ejemplo desconectando el compresor al ausentarse la señal de revoluciones. (págs. 50-51)

📷 IMAGEN: Esquema del flujo de señales suplementarias entre el cuadro de instrumentos, la UCE de motor y la UCE del climatizador hacia las chapaletas y el compresor — Fuente: SEÑALES SUPLEMENTARIAS.pdf, pág. 50

## Valores de referencia
No documentado en fuentes. (págs. 50-51)

## Errores de concepto frecuentes
Considerar que tras arrancar el motor la unidad de climatización toma de inmediato la medición directa del sensor de temperatura exterior. Si el tiempo en parado ha sido breve, la unidad utiliza inicialmente los valores memorizados antes de la parada para evitar que el calor radiado por el motor desajuste la regulación térmica. (págs. 50-51)

---

COBERTURA: documento «SEÑALES SUPLEMENTARIAS.pdf», páginas 50 a 51 de 51. [completo]