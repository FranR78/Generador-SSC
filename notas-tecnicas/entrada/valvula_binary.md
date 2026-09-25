```yaml
tipo: fundamento
titulo: Interacción entre la climatización automática y el módulo de inyección del motor
entidad: regulacion-automatica
variante: interaccion-inyeccion-motor
area: climatizacion
sistema: control-climatizacion
fabricante: Valeo
fuente: "LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF"
paginas: "4"
relacionados: [compresor, unidad-control-climatizador]
palabras: [módulo de inyección, ECM, corte de compresor, aceleración brusca, demanda de potencia]
```

## Objeto
Desconectar temporalmente el compresor del aire acondicionado a través de la comunicación entre la tarjeta electrónica del climatizador y la centralita de inyección del motor (ECM) durante fuertes solicitaciones de carga. (pág. 4)

## Fundamento
El compresor de climatización es arrastrado mecánicamente por el motor térmico a través de la correa de accesorios. En situaciones de demanda de máxima aceleración, la absorción de potencia del compresor resta capacidad de empuje al vehículo. (pág. 4)

## Desarrollo
La centralita de inyección del motor (ECM) está interconectada con la tarjeta electrónica del climatizador. Al detectar un pisotón a fondo o aceleración rápida, el módulo de inyección transmite una señal a la centralita de climatización para cortar la alimentación del acoplamiento del compresor, liberando toda la potencia del motor térmico para la tracción. Una vez estabilizada la aceleración, se restablece el acoplamiento del compresor. (pág. 4)

## Valores de referencia
No documentado en fuentes en la página 4.

## Errores de concepto frecuentes
- Creer que el corte del compresor en aceleración brusca procede de un fallo de presión en el circuito frigorífico, cuando responde a una estrategia deliberada de gestión de potencia del motor. (pág. 4)

---

```yaml
tipo: fundamento
titulo: Gestión del confort térmico mediante calculador electrónico central
entidad: regulacion-automatica
variante: calculador-central
area: climatizacion
sistema: control-climatizacion
fabricante: Valeo
fuente: "LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF"
paginas: "1-3, 5-8"
relacionados: [unidad-control-climatizador, servomotor-trampilla, presostato]
palabras: [tarjeta electrónica, calculador, sondas de temperatura, red de entornos, bucle de regulación]
```

## Objeto
Procesar la información captada en los diferentes entornos del vehículo (habitáculo, tablero de mandos, conjunto A/C y compartimento motor) para gobernar automáticamente los actuadores de mezcla, distribución e impulsor de aire. (págs. 1, 6-8)

## Fundamento
La tarjeta electrónica o calculador central, instalada habitualmente tras el panel de mandos, actúa como núcleo de control recibiendo señales de entrada de sensores térmicos y emitiendo órdenes hacia los actuadores mecánicos y eléctricos del circuito. (págs. 6, 8)

## Desarrollo
El calculador gestiona el bucle de regulación evaluando las siguientes variables:
- **Entradas de información:** Lee la temperatura ambiente del habitáculo, la temperatura exterior, la temperatura del aire soplado en conductos y la temperatura de la superficie del evaporador para prevenir congelaciones. Lee asimismo la presión del fluido a través del presostato para activar el electroventilador (GMV) o cortar el compresor. (págs. 2, 5, 7)
- **Procesamiento y salidas:** Compara las mediciones reales con la temperatura de consigna seleccionada por el usuario en el display. Genera señales de mando dirigidas a los servomotores de las trampillas de mezcla frío/caliente, repartición de caudal y recirculación, regulando además la velocidad del impulsor de aire. (págs. 6-8)

📷 IMAGEN: Esquema general de la tarjeta electrónica interactuando con los entornos del habitáculo, tablero de mandos, conjunto A/C y compartimento motor — Fuente: LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF, pág. 7

## Valores de referencia
No documentado en fuentes en las páginas 1-3, 5-8.

## Errores de concepto frecuentes
- Atribuir fallos de regulación automática a averías mecánicas complejas, omitiendo que la interrupción o corte de cableado en un sensor secundario altera por completo el algoritmo del calculador. (págs. 6, 8)

---

COBERTURA: documento «LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF», páginas 1 a 8 de 8. [completo]

🎓 *Se han procesado exhaustivamente todos los documentos técnicos seleccionados del cuaderno. Si necesitas realizar consultas sobre algún componente, cuadro de diagnóstico o procedimiento redactado, dímelo.*