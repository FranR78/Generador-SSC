```yaml
tipo: componente
titulo: Presostato de cuatro etapas
entidad: presostato
variante: trinary-cuatro-etapas
area: climatizacion
sistema: control-climatizacion
fuente: "MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf"
paginas: "13-14"
forma_parte_de: circuito-frigorifico
relacionados: [embrague-compresor, electroventilador-condensador]
palabras: [presostato, trinary, cuatro etapas, corte por baja, corte por alta, velocidad del ventilador]
```

## Misión
Supervisar de forma continuada las presiones del fluido refrigerante en la línea de alta presión para conectar las velocidades del electroventilador y proteger el compresor contra faltas de carga o sobrepresiones peligrosas. (págs. 13-14)

## Tipos y características
Sensor e interruptor hidromecánico de presión de cuatro etapas (Trinary) montado en la tubería de alta presión, dividiendo internamente su mecanismo en dos zonas de trabajo: una para el control de los ventiladores de refrigeración y otra para el circuito de activación del compresor. (págs. 13-14)

## Principio de funcionamiento
Procesa la señal de presión del fluido repartida en cuatro secuencias o etapas operativas:
- **1ª Etapa (Sin líquido refrigerante / Presión insuficiente):** Ante una fuga o falta de gas, la baja presión mantiene abierto el contacto eléctrico de la línea del compresor, impidiendo su acoplamiento para evitar el trabajo sin aceite. (pág. 13)
- **2ª Etapa (Con líquido refrigerante / Presión de trabajo normal):** Al alcanzar la presión de servicio adecuada, el contacto se cierra, permitiendo el paso de corriente para activar el acoplamiento magnético del compresor. (pág. 13)
- **3ª Etapa (Aumento de presión / Ventilador a máxima velocidad):** Cuando la presión de alta se eleva por incremento térmico en el condensador, el presostato cierra el contacto del electroventilador para conectarlo a su máxima velocidad de soplado y forzar la condensación. (pág. 13)
- **4ª Etapa (Desconexión por sobrepresión alta):** Si la presión alcanza el límite máximo de seguridad, se abre de inmediato el contacto del compresor para interrumpir su funcionamiento y evitar el reventón de mangueras o componentes. (pág. 14)

📷 IMAGEN: Esquema funcional de las cuatro etapas del presostato trinary identificando los contactos del compresor y del electroventilador — Fuente: MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf, págs. 13-14

## Valores de trabajo
No documentado en fuentes en las páginas 13-14.

## Anomalías frecuentes
Sulfatación de bornes o agarrotamiento del diafragma interno por picos continuos de sobrepresión. (págs. 13-14)

## Comportamiento en avería
Imposibilidad de acoplar el compresor por fallo en la 1ª/2ª etapa o falta de activación de la velocidad rápida del ventilador, provocando sobrecalentamiento del condensador. (págs. 13-14)

## Cómo comprobarlo
Medir la continuidad eléctrica con multímetro entre las bornes de la etapa del compresor y de los ventiladores verificando la conmutación al presurizar la toma. (págs. 13-14)

## Mantenimiento
No documentado en fuentes en las páginas 13-14.

---

```yaml
tipo: componente
titulo: Cilindro de carga graduado de refrigerante
entidad: equipos-taller
variante: cilindro-carga
area: climatizacion
sistema: equipos-taller
fuente: "MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf"
paginas: "38-39"
forma_parte_de: equipos-taller
relacionados: [carga-refrigerante]
palabras: [cilindro de carga, escala, manómetro, líneas de presión constante, dosificación]
```

## Misión
Medir y dosificar volumétricamente la cantidad exacta en gramos de fluido refrigerante que se inyecta al circuito frigorífico durante la fase de carga. (págs. 38-39)

## Tiposand características
Recipiente cilíndrico transparente provisto de un manómetro de presión superior, indicador de nivel transparente, funda de plástico giratoria con escalas calibradas de peso y presión, y válvulas manuales de paso. (págs. 38-39)

## Principio de funcionamiento
Debido a que la densidad del refrigerante líquido varía en función de la presión y la temperatura almacenada dentro del cilindro, la envoltura plástica exterior dispone de curvas inclinadas para corregir la lectura:
1. El técnico lee la presión indicada en el manómetro superior del cilindro. (pág. 38)
2. Se gira la funda transparente orientando la columna de la escala sobre el valor de presión leído. (pág. 38)
3. La intersección entre el nivel visual del líquido y la línea de peso inclinada indica los gramos exactos de refrigerante contenidos en el depósito antes y después de la carga. (págs. 38-39)

📷 IMAGEN: Detalle del cilindro de carga con sus manómetros, llaves de paso y envoltura plástica giratoria de lectura corregida — Fuente: MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf, pág. 38

## Valores de trabajo
- Corrección de escala: lectura de peso referida a la presión interna marcada por el manómetro del cilindro. (pág. 38)

## Anomalías frecuentes
Fugas de gas por las juntas de las llaves de paso o rozamiento/opacidad en el plástico visor graduado. (págs. 38-39)

## Comportamiento en avería
Inexactitud en los gramos de gas inyectados al vehículo, provocando cargas deficientes o excesivas. (págs. 38-39)

## Cómo comprobarlo
Contrastar la cantidad de gas introducida con una balanza digital de precisión de taller. (págs. 38-39)

## Mantenimiento
Mantener cerradas las llaves de paso mientras el equipo permanezca fuera de servicio. (pág. 38)

---

```yaml
tipo: procedimiento
titulo: Carga universal de refrigerante en el circuito
entidad: carga-refrigerante
area: climatizacion
sistema: circuito-frigorifico
fuente: "MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf"
paginas: "39-40"
relacionados: [vacio-circuito, lectura-manometros]
palabras: [carga de refrigerante, vacío, alta presión, baja presión, ralentí, 500 gramos]
```

## Objeto y alcance
Introducir la masa nominal de fluido refrigerante prescrita por el fabricante en el interior del circuito frigorífico tras haber completado el proceso de vacío y deshidratación. (págs. 39-40)

## Condiciones previas
1. Circuito frigorífico sometido previamente a un vacío continuo de al menos 20 minutos sin pérdidas de depresión. (pág. 39)
2. Estación de carga o botella conectada a las tomas de servicio mediante mangueras provistas de llaves de corte. (págs. 38-39)
3. Motor del vehículo apagado en la primera fase de inyección de gas. (pág. 39)

## Equipo y material
Estación de servicio o estación recirculadora de A/C, manómetros de alta y baja presión, termómetro digital de rejilla y depósito de refrigerante. (págs. 38-40)

## Pasos
1. Completar la fase de evacuación e higienización manteniendo el vacío del circuito durante un mínimo de 20 minutos. (pág. 39)
2. Con el motor parado y los manómetros conectados, abrir la válvula de la manguera de alta presión (roja) e introducir una primera dosis inicial de 500 gramos de refrigerante en estado líquido. (pág. 39)
3. Insertar la sonda de un termómetro digital en el interior del conducto de una tobera de aireación central del salpicadero. (pág. 39)
4. Desactivar la función de recirculación de aire en el panel y ajustar la velocidad del electroventilador del habitáculo al mínimo. (pág. 39)
5. Arrancar el motor del vehículo, dejarlo estabilizado al régimen de ralentí y activar el sistema de aire acondicionado (A/C). (págs. 39-40)
6. Completar la carga introduciendo lentamente el resto de la masa de gas necesaria por la toma de baja presión (manguera azul) con el compresor en marcha, vigilando la evolución de las presiones de trabajo y el descenso de temperatura en el termómetro de la tobera. (págs. 39-40)

## Valores de referencia
- Tiempo mínimo de vacío previo: 20 minutos. (pág. 39)
- Carga inicial en fase líquida por alta presión con motor parado: 500 gramos. (pág. 39)
- Régimen del motor durante el ajuste final: ralentí con A/C conectado y soplador al mínimo. (págs. 39-40)

## Verificación final
Comprobar que la temperatura medida en el aireador central alcanza los valores de enfriamiento nominales y verificar que las presiones en los manómetros de alta y baja se estabilizan dentro del margen de servicio especificado. (págs. 39-40)

## Seguridad y normativa
Trabajar con gafas y guantes de protección para evitar lesiones por salpicaduras de refrigerante líquido al manipular los acoplamientos rápidos. (págs. 38, 40)

---

```yaml
tipo: diagnostico
titulo: Diagnóstico del estado de la carga a vehículo parado
entidad: lectura-manometros
variante: vehiculo-parado
area: climatizacion
sistema: circuito-frigorifico
fuente: "MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf"
paginas: "41, 47"
relacionados: [carga-refrigerante, presostato]
palabras: [diagnóstico en parado, 6.5 bar, 7.5 bar, falta de líquido, exceso de carga, asociación de gases]
```

## Síntoma
Falta de enfriamiento en el habitáculo o comportamiento anómalo de las presiones detectado antes de poner en marcha el motor. (págs. 41, 47)

## Causas posibles
- Fuga de gas con pérdida de masa de líquido refrigerante. (págs. 41, 47)
- Contaminación del circuito por mezcla de aire no purgado o presencia de gases incondensables (asociación de gases). (págs. 41, 47)
- Sobrecarga de fluido frigorífico por un proceso de llenado incorrecto. (págs. 41, 47)

## Cómo separar las causas
1. Conectar la estación de manómetros al vehículo con el motor parado y a temperatura de reposo (frenado y estabilizado). (págs. 41, 47)
2. Medir la temperatura ambiental exterior y la temperatura del condensador con un termómetro de contacto. (págs. 41, 47)
3. Leer la presión de reposo indicada por el manómetro de baja presión y comparar los valores con la tabla de diagnóstico a vehículo parado:
   - **Presión de 6,5 bar con 25 ºC en manómetro, 24-26 ºC en condensador y 24-26 ºC ambiental:** Indica **carga correcta**. (págs. 41, 47)
   - **Presión de 6,5 bar con 25 ºC en manómetro, pero 30 ºC en condensador y 30 ºC ambiental:** Indica **falta de líquido** refrigerante en la instalación. (págs. 41, 47)
   - **Presión elevada de 7,5 bar con 30 ºC en manómetro frente a 24-26 ºC ambientales:** Indica **asociación de gases / presencia de aire** incondensable en el circuito. (págs. 41, 47)
   - **Presión elevada de 7,5 bar con 30 ºC en manómetro y 30 ºC en condensador con motor frío a 24-26 ºC ambientales:** Indica **exceso de carga** de fluido. (págs. 41, 47)

## Valores de referencia
- Presión teórica de reposo nominal a 25 ºC ambiental: 6,5 bar. (págs. 41, 47)
- Umbral de sobrepresión en parado por exceso de carga / aire: 7,5 bar a 24-26 ºC ambientales. (págs. 41, 47)

## Verificación tras la reparación
Si se detecta falta de líquido, realizar la prueba de detección de fugas; si se determina la presencia de aire o exceso de carga, evacuar por completo el refrigerante, efectuar un vacío de 20 minutos y recargar la masa exacta de fluido recomendada. (págs. 39, 41, 47)

---

COBERTURA: documento «MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf», páginas 1 a 47 de 47. [completo]

👉 *¿Quieres procesar la fuente «clima ibizaIII ASY.pdf» o prefieres hacer alguna consulta sobre los esquemas de carga y presostatos analizados?*