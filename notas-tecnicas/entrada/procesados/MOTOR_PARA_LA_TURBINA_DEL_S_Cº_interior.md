```yaml
tipo: componente
titulo: Motor para la turbina del transmisor de temperatura interior
entidad: sensor-temperatura-interior
area: climatizacion
sistema: control-climatizacion
codigo: V42
fuente: "MOTOR PARA LA TURBINA DEL S. Cº interior.pdf"
paginas: "24"
relacionados: [transmisor-temperatura-interior-g56, unidad-control-climatizador]
palabras: [turbina, transmisor G56, placa electrónica, señal de 15]
```

## Misión
Forma un único conjunto con el transmisor de temperatura interior G56. Su misión es generar un flujo de aire continuo que atraviese el transmisor para poder registrar el valor de la temperatura del habitáculo. (pág. 24)

📷 IMAGEN: Componentes internos del motor V42 mostrando la placa electrónica, el estator y la turbina con eje imantado (rotor) — Fuente: MOTOR PARA LA TURBINA DEL S. Cº interior.pdf, pág. 24

## Tipos y características
El motor monta en su interior una placa electrónica que gobierna su funcionamiento y detecta sus posibles averías. Su rotor está constituido por una turbina con eje imantado. (pág. 24)

## Principio de funcionamiento
Es excitado con positivo y negativo por la unidad de control del autoclima mientras esta reciba la señal de «15». (pág. 24)

## Valores de trabajo
Señal de excitación: Positivo y negativo condicionados a la presencia de señal de borne «15». (pág. 24)

## Anomalías frecuentes
No documentado en fuentes. (pág. 24)

## Comportamiento en avería
Cuando se detecta una avería del motor, la unidad del autoclima aplica factores de corrección a la temperatura registrada por el transmisor G56 para simular un valor más o menos próximo al real. (pág. 24)

## Cómo comprobarlo
No documentado en fuentes. (pág. 24)

## Mantenimiento
No documentado en fuentes. (pág. 24)

---

```yaml
tipo: fundamento
titulo: Señal de salida para conexión del aire acondicionado
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
fuente: "MOTOR PARA LA TURBINA DEL S. Cº interior.pdf"
paginas: "24"
relacionados: [unidad-control-climatizador, compresor, embrague-compresor, unidad-control-motor]
palabras: [activación aire acondicionado, señal de positivo, régimen de ralentí, acoplamiento magnético]
```

## Objeto
Habilitar la activación del compresor de aire acondicionado y coordinar el incremento de carga con la unidad de control del motor térmico. (pág. 24)

📷 IMAGEN: Esquema del envío de la señal de positivo desde la unidad del autoclima hacia la unidad del aire acondicionado y la unidad del motor — Fuente: MOTOR PARA LA TURBINA DEL S. Cº interior.pdf, pág. 24

## Fundamento
La solicitud de conexión del aire acondicionado requiere el acoplamiento del compresor y el aumento simultáneo del régimen de ralentí para compensar el esfuerzo mecánico aplicado al motor. (pág. 24)

## Desarrollo
Para activar el aire acondicionado, la unidad del autoclima envía una señal de positivo hacia la unidad del aire acondicionado y a la unidad de control del motor. Con esta señal, la unidad del aire acondicionado conecta el compresor activando el acoplamiento magnético y la unidad del motor eleva el régimen de ralentí. No existe función sustitutiva. (pág. 24)

## Valores de referencia
Tensión de señal: Positivo (12 V). (pág. 24)

## Errores de concepto frecuentes
No documentado en fuentes. (pág. 24)

COBERTURA: documento «MOTOR PARA LA TURBINA DEL S. Cº interior.pdf», páginas 24 a 24 de 24. completo