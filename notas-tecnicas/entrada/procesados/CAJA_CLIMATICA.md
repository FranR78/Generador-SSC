```yaml
tipo: fundamento
titulo: Conducción no dividida del aire en el calefactor y climatizador
entidad: distribucion-aire
variante: no-dividida
area: climatizacion
sistema: distribucion-aire
fuente: "CAJA CLIMATICA.pdf"
paginas: "53-55"
relacionados: [regulacion-automatica, servomotor-trampilla, evaporador]
palabras: [conduccion del aire, rendimiento frigorifico, rendimiento calefaccion, funcionamiento mixto, deshidratacion]
```

## Objeto
Guiar el caudal de aire fresco hacia el habitáculo de forma global sin separación entre los lados izquierdo y derecho, regulando su temperatura y nivel de humedad según el modo de funcionamiento seleccionado. (pág. 53)

## Fundamento
El flujo de aire pasa de manera secuencial por la turbina de aire fresco, el evaporador (refrigeración/deshidratación) y el intercambiador de calor (calefacción), siendo canalizado mediante chapaletas posicionadoras hacia los diferentes aireadores del vehículo. (págs. 53-54)

## Desarrollo
El sistema configura el guiado del aire en tres modos de funcionamiento:
1. Máximo rendimiento frigorífico: el aire fresco muy caliente atraviesa el evaporador en funcionamiento y se dirige directamente a los aireadores. El conducto hacia el intercambiador de calor permanece cerrado. (pág. 53)
2. Máximo rendimiento de calefacción (climatizador desactivado, calefacción activada): el aire fresco frío atraviesa el evaporador fuera de servicio y se conduce en su totalidad a través del intercambiador de calor para calentarse antes de pasar al habitáculo. (pág. 54)
3. Funcionamiento mixto (climatizador activado, calefacción activada): el aire fresco caliente se enfría al pasar por el evaporador. Al enfriarse en exceso, una parte del caudal se deriva a través del intercambiador de calor para alcanzar la temperatura de confort seleccionada dentro del margen de reglaje personalizado. Si el aire exterior es húmedo y frío, el evaporador actúa deshidratando el aire para eliminar el empañamiento de los cristales. (pág. 55)

La estructura básica del calefactor/climatizador comprende: entrada de aire exterior, entrada de aire para recirculación (si está prevista), turbina de aire fresco, evaporador, intercambiador de calor y chapaletas posicionadoras con conductos para el vano reposapiés, descongelación y aireadores del tablero de instrumentos. (pág. 54)

📷 IMAGEN: Esquema de la conducción no dividida del aire en el climatizador para máximo rendimiento frigorífico, máximo rendimiento de calefacción y funcionamiento mixto — Fuente: CAJA CLIMATICA.pdf, págs. 53-55

## Valores de referencia
No documentado en fuentes. (págs. 53-55)

## Errores de concepto frecuentes
Creer que el evaporador solo se utiliza para enfriar en verano. En funcionamiento mixto con aire húmedo y frío, el evaporador se activa para deshidratar el aire y evitar que se empañen los cristales. (pág. 55)

---

```yaml
tipo: fundamento
titulo: Distribución dividida del aire y regulación bizona
entidad: distribucion-aire
variante: dividida-bizona
area: climatizacion
sistema: distribucion-aire
fuente: "CAJA CLIMATICA.pdf"
paginas: "55-57"
relacionados: [regulacion-automatica, servomotor-trampilla]
palabras: [distribucion dividida, bizona, lado izquierdo, lado derecho, carcasa de distribucion, servomotores]
```

## Objeto
Permitir el ajuste independiente y diferido de la temperatura del aire para los lados izquierdo y derecho del habitáculo mediante la división del flujo en la carcasa de distribución. (págs. 55-57)

## Fundamento
Gestión automática o manual de chapaletas accionadas por servomotores eléctricos independientes para la zona izquierda y la zona derecha, combinando de forma diferenciada las proporciones de aire frío y caliente. (págs. 56-57)

## Desarrollo
A diferencia de la conducción no dividida, este sistema ofrece mayor confort al permitir temperaturas personalizadas entre el conductor y el acompañante, lo que requiere un mayor número de sensores, actuadores y chapaletas de aire. (págs. 53, 56)

En la carcasa de distribución de aire, el caudal se divide en aire frío/caliente y para las partes izquierda/derecha del habitáculo. Según las demandas seleccionadas en el panel de mandos e indicación (por ejemplo, Climatronic), la unidad de control gestiona las chapaletas de temperatura por el lado del aire (a diferencia de sistemas que lo regulan por el lado del agua, como en el Audi A8). (págs. 56-57)

El accionamiento de las chapaletas de temperatura se realiza mediante:
- Un servomotor eléctrico para la parte izquierda del habitáculo.
- Un servomotor eléctrico para la parte derecha del habitáculo. (págs. 56-57)

El reglaje de la posición de las chapaletas se ejecuta de forma automática según un programa definido por la unidad de control frente a variaciones de la temperatura exterior o interior, o mediante selección manual del usuario. (pág. 56)

📷 IMAGEN: Carcasa de distribución de aire con división de caudal izquierdo/derecho y chapaletas de temperatura con servomotores independientes — Fuente: CAJA CLIMATICA.pdf, págs. 56-57

## Valores de referencia
No documentado en fuentes. (págs. 55-57)

## Errores de concepto frecuentes
Asumir que todos los sistemas de regulación dividida ajustan la temperatura modulando el paso del agua caliente. En esta arquitectura (ejemplo Audi A6), la regulación bizona se efectúa por el lado del aire mediante chapaletas de mezcla accionadas por servomotores eléctricos independientes. (págs. 56-57)

---

COBERTURA: documento «CAJA CLIMATICA.pdf», páginas 53 a 57 de 57. [completo]