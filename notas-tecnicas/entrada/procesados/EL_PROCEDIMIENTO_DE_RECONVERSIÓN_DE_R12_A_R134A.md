```yaml
tipo: fundamento
titulo: Justificación y marco normativo de la reconversión de R12 a R134a
entidad: reconversion-r12-r134a
area: general
sistema: normativa-y-medioambiente
fabricante: Valeo
fuente: "EL PROCEDIMIENTO DE RECONVERSIÓN DE R12 A R134A.PDF"
paginas: "1-3"
relacionados: [refrigerante-r12, refrigerante-r134a, ciclo-frigorifico]
palabras: [eliminación R12, fluido de sustitución, mezclas zeotrópicas, ODP, HGWP, Valeo Clim Service]
```

## Objeto
Promover la eliminación del refrigerante R12 en los vehículos automóviles y establecer el empleo del R134a como único fluido de sustitución recomendado por el programa Valeo Clim Service (pág. 1, 2).

## Fundamento
La prohibición de la producción de R12 desde el 31/12/1994 y la regulación comunitaria (propuesta de prohibición de comercialización según la postura común nº 19/1999 de la UE) obligan a sustituir el R12. El R134a es el único fluido puro con condiciones de funcionamiento similares al R12 aprobado globalmente por constructores (Ford, GM, Daimler-Chrysler, Nissan, Mitsubishi) y fabricantes de equipos (Visteon, Calsonic, Delphi, Valeo) (pág. 2, 4).

## Desarrollo
- **Inconvenientes de los fluidos de transición y mezclas zeotrópicas**:
  - Aunque son miscibles con el aceite mineral y no requieren sustitución inmediata de componentes, ofrecen un rendimiento inferior o similar al R134a, y claramente inferior al sistema original con R12 (pág. 2).
  - Exigen ajustes en la válvula de expansión y adición de aceite éster, lo que complica el proceso (pág. 2).
  - Las mezclas zeotrópicas aumentan el riesgo de contaminación cruzada, tienen un número limitado de reciclajes por descomposición química, favorecen el incremento de fugas y deterioran los componentes a largo plazo (pág. 2).
  - Contienen R600 (isobutano), que es un hidrocarburo inflamable (pág. 2).
  - Producen un mayor grado de recalentamiento global (HGWP) que el R134a (caso de ISCEON 49) (pág. 2).
- **Ventajas de la reconversión a R134a**:
  - Fluido puro con ODP cero (sin daño a la capa de ozono) disponible a largo plazo y con un precio inferior a las mezclas (pág. 2).
  - Mantiene las prestaciones del sistema, la estanqueidad y la longevidad de los componentes (especialmente el compresor) (pág. 1).
  - Procedimiento comprobado por fabricantes de compresores (Sanden), constructores (Volvo) y fabricantes de fluidos (Elf-Atochem) (pág. 2).

## Valores de referencia
- Fecha de prohibición de producción de R12: 31/12/1994 (pág. 4).
- Potencial de reducción de ozono (ODP) del R134a: 0 (pág. 2).

## Errores de concepto frecuentes
Considerar más ventajosos los fluidos de transición o mezclas zeotrópicas por no requerir cambio de componentes, ignorando que provocan pérdida de rendimiento, riesgos de inflamabilidad por contenido de R600, descomposición química, incremento de fugas y un HGWP superior al R134a (pág. 2).

---

```yaml
tipo: fundamento
titulo: Diferencias técnicas entre circuitos de R12 y R134a
entidad: diferencias-circuito-r12-r134a
area: climatizacion
sistema: circuito-frigorifico
fabricante: Valeo
fuente: "EL PROCEDIMIENTO DE RECONVERSIÓN DE R12 A R134A.PDF"
paginas: "3"
relacionados: [refrigerante-r12, refrigerante-r134a, filtro-deshidratador, condensador, compresor, valvula-expansion, presostato]
palabras: [miscibilidad, aceite PAG, aceite POE, juntas tóricas, gel desecante, tarado válvula expansión, 80% de carga]
```

## Objeto
Análisis de las divergencias físicas y químicas entre los refrigerantes R12 y R134a y sus efectos sobre las modificaciones requeridas en los componentes del circuito (pág. 3).

## Fundamento
El R134a presenta menor miscibilidad con el aceite mineral, mayor agresividad con elastómeros sintéticos, menor tolerancia a la humedad y presiones de trabajo diferentes (alta presión mayor y baja presión menor) respecto al R12 (pág. 3).

## Desarrollo
- **Lubricación**: El R134a no es miscible con aceite mineral, exigiendo el uso de aceites higroscópicos de tipo PAG o POE, específicos en tipo y cantidad para cada compresor (pág. 3).
- **Elastómeros y tuberías**: El R134a ataca ciertos componentes flexibles. Requiere juntas tóricas de mayor diámetro a base de Neopreno o Nitrilo Halogenado, y sustitución de tuberías por rígidas o por flexibles adaptadas con caucho compuesto a base de Cloruro de Butilo (pág. 3).
- **Humedad y filtrado**: Admite menor porcentaje de humedad. Requiere aumentar hasta un 20% la cantidad de gel desecante, obligando a usar filtros deshidratantes para R134a de mayor tamaño y envases de aceite sellados (pág. 3).
- **Intercambiadores y compresor**: La mayor presión de alta y menor de baja exigen aumentar el rendimiento de los condensadores hasta un 40%, e incrementar la potencia de arrastre del embrague electromagnético del compresor, además de retenes y válvulas resistentes a la variación de presiones (pág. 3).
- **Expansión y regulación**: La válvula de expansión requiere un tarado distinto con un orificio más pequeño por requerir una mayor caída de presión. El presostato puede requerir sustitución por la variación de las presiones de trabajo (pág. 3).
- **Carga de fluido**: La cantidad de carga de R134a necesaria es del 80% de la masa de R12 original (pág. 3).
- **Identificación y servicio**: Prohibición de mezclar R134a con R12 o aceite mineral. Obliga a instalar etiquetas de reconversión, cambiar las válvulas de carga por racores específicos y emplear estaciones de carga y reciclaje exclusivas para R134a (pág. 3).

## Valores de referencia
- Aumento de gel desecante en filtros deshidratantes: hasta un 20% más (pág. 3).
- Incremento de rendimiento requerido en condensador: hasta un 40% (pág. 3).
- Porcentaje de carga de R134a respecto a R12: 80% de la cantidad original de R12 (pág. 3).

## Errores de concepto frecuentes
Intentar cargar la misma masa de R134a que la especificada originalmente para R12, en lugar de reducir la carga al 80% (pág. 3).

---

```yaml
tipo: diagnostico
titulo: Diagnóstico previo del circuito antes de la reconversión
entidad: diagnostico-previo-reconversion
area: climatizacion
sistema: circuito-frigorifico
fabricante: Valeo
fuente: "EL PROCEDIMIENTO DE RECONVERSIÓN DE R12 A R134A.PDF"
paginas: "4"
relacionados: [ciclo-frigorifico, refrigerante-r12, aceite-frigorifico]
palabras: [puntos de fuga, R12 residual, rendimiento original, puesta a punto]
```

## Síntoma
Evaluación inicial del estado de funcionamiento del sistema de aire acondicionado con R12 previa a la ejecución de la reconversión a R134a (pág. 4).

## Causas posibles
- Presencia de fugas de refrigerante en las canalizaciones del circuito (pág. 4).
- Falta o degradación del fluido R12 en el circuito (pág. 4).
- Ausencia o deficiencia de aceite en el compresor (pág. 4).
- Defectos mecánicos o eléctricos en los componentes antes de la intervención (pág. 4).

## Cómo separar las causas
1. Buscar posibles fugas en las canalizaciones y elementos del circuito (pág. 4).
2. Comprobar la presencia de fluido R12 en el circuito (pág. 4).
3. Comprobar la presencia de aceite mineral en el circuito (pág. 4).
4. Estimar las prestaciones térmicas del circuito utilizando el R12 existente (pág. 4).

## Valores de referencia
No documentado en fuentes (pág. 4).

## Verificación tras la reparación
Realizar la puesta a punto indispensable del circuito. Si debe sustituirse algún componente defectuoso durante el diagnóstico, instalar componentes aptos para R134a una vez vaciado el circuito de R12 y de aceite mineral (pág. 4).

---

```yaml
tipo: procedimiento
titulo: Reconversión ligera de circuito de R12 a R134a
entidad: reconversion-ligera-r12-r134a
area: climatizacion
sistema: circuito-frigorifico
fabricante: Valeo
fuente: "EL PROCEDIMIENTO DE RECONVERSIÓN DE R12 A R134A.PDF"
paginas: "4-7"
relacionados: [refrigerante-r12, refrigerante-r134a, aceite-frigorifico, filtro-deshidratador, presostato]
palabras: [recuperación R12, vacio, R141b, nitrógeno, aceite PAG, 80% de carga, etiqueta reconversión]
```

## Objeto y alcance
Procedimiento para la reconversión de un sistema de climatización de R12 a R134a mediante la sustitución del número mínimo de componentes en equipos cuyo rendimiento resulta correcto sin modificaciones pesadas (pág. 4).

## Condiciones previas
- Diagnóstico y puesta a punto previa del circuito realizados (pág. 4).
- Motor al ralentí con el aire acondicionado conectado y ventilador al máximo durante 10 minutos para alcanzar la fluidez necesaria del aceite, apagando el motor a continuación (pág. 5).
- Disponer de botella específica etiquetada para la recuperación del R12 residual (pág. 5).

## Equipo y material
- Estación de carga o máquina de recuperación/reciclaje de R12 (pág. 5).
- Bomba de vacío con manómetros y vacuómetro (pág. 5, 6).
- Máquina de limpieza de circuitos con fluido R141b y botella de nitrógeno (N2) a presión (pág. 6).
- Aceite PAG con viscosidad de 100 cSt a 40 ºC y jeringa o estación de carga (pág. 7).
- Refrigerante R134a y adaptadores de R12 a R134a para las válvulas de carga (pág. 4, 6, 7).
- Juntas tóricas lubrificadas específicas para R134a y nuevo filtro deshidratante (pág. 4, 6).
- Presostato (solo si el original no está preparado para funcionar con R12 y R134a) (pág. 4).
- Detector electrónico de fugas con sensibilidad mínima de 1 g/año (pág. 7).
- Etiqueta informativa de reconversión a R134a (pág. 7).

## Pasos
1. Poner el motor al ralentí con A/C y ventilador al máximo durante 10 minutos, y apagar el motor (pág. 5).
2. Recuperar el R12 en una botella específica hasta que la cantidad de R12 residual en el circuito sea inferior al 1% (pág. 5).
3. Efectuar un primer vacío conectando la bomba de 10 a 15 minutos y comprobar que el nivel se mantiene durante 5 minutos para descarrilar fugas (pág. 5).
4. Limpiar el circuito por tramos utilizando una máquina de limpieza con R141b (sin limpiar la válvula de expansión ni el compresor) y hacer pasar nitrógeno N2 a presión para eliminar restos del fluido de limpieza (pág. 6).
5. Desmontar el compresor para vaciar el aceite mineral viejo y sustituir el compresor si se encuentra deteriorado (pág. 6).
6. Sustituir imperativamente el filtro deshidratante y las juntas tóricas lubrificadas de todas las canalizaciones (pág. 6).
7. Instalar las válvulas de rellenado específicas para R134a comprobando su correcta fijación (pág. 6).
8. Realizar un segundo vacío conectando la bomba entre 20 y 60 minutos, cerrando grifos y verificando durante 5 a 10 minutos que el nivel de vacío se mantiene (pág. 6).
9. Inyectar de 100 a 150 cm3 de aceite PAG (viscosidad 100 cSt a 40 ºC) evitando la entrada de aire en el circuito (pág. 7).
10. Recargar con R134a con el compresor parado, abriendo obligatoriamente en orden los grifos de alimentación de fluido, carga de refrigerante, alta y baja, hasta alcanzar el 80% de la carga de R12 (pág. 7).
11. Buscar posibles fugas mediante el detector electrónico de sensibilidad mínima de 1 g/año (pág. 7).
12. Pegar de manera visible en el vehículo la etiqueta de información indicando la fecha de conversión, tipo y cantidad del nuevo fluido, y tipo y cantidad de aceite (pág. 7).

## Valores de referencia
- Cantidad de R12 residual tras la recuperación: inferior al 1% (pág. 5).
- Tiempo de primer vacío: 10 a 15 minutos (pág. 5).
- Tiempo de segundo vacío: 20 a 60 minutos (pág. 6).
- Viscosidad del aceite PAG: 100 cSt a 40 ºC (pág. 7).
- Volumen de aceite PAG a inyectar: 100 a 150 cm3 (pág. 7).
- Carga de R134a: 80% de la carga de R12 original (pág. 7).
- Umbral de sensibilidad mínima del detector de fugas: 1 g/año (pág. 7).
- Degradación máxima admisible de la temperatura del aire impulsado: entre 2 y 3 ºC respecto al R12 (pág. 7).

## Verificación final
Controlar las prestaciones del circuito verificando la temperatura del aire impulsado; la degradación máxima de temperatura admisible es de 2 a 3 ºC (pág. 7).

## Seguridad y normativa
- Entregar la botella de R12 recuperado al proveedor de fluido para su destrucción indicando el tipo de fluido en la etiqueta (pág. 5).
- Prohibida la limpieza de la válvula de expansión y del compresor con R141b (pág. 6).
- Cargar masa de aceite suplementaria en el depósito auxiliar para evitar rigurosamente la entrada de aire al inyectar el aceite PAG debido a su alta higroscopía (pág. 7).

---

```yaml
tipo: procedimiento
titulo: Reconversión integral o pesada de circuito de R12 a R134a
entidad: reconversion-pesada-r12-r134a
area: climatizacion
sistema: circuito-frigorifico
fabricante: Valeo
fuente: "EL PROCEDIMIENTO DE RECONVERSIÓN DE R12 A R134A.PDF"
paginas: "4, 8"
relacionados: [reconversion-ligera-r12-r134a, condensador, valvula-expansion, filtro-deshidratador]
palabras: [reconversión pesada, condensador de elevadas prestaciones, válvula de expansión R134a]
```

## Objeto y alcance
Procedimiento de reconversión de R12 a R134a para equipos de climatización que requieren la sustitución de componentes suplementarios para garantizar unas prestaciones térmicas adecuadas (pág. 4, 8).

## Condiciones previas
- Diagnóstico previo del circuito y estimación de prestaciones con R12 (pág. 4).
- Puesta del motor al ralentí con A/C y ventilación al máximo durante 10 minutos previo al apagado para fluidificar el aceite (pág. 5).

## Equipo y material
- Estación de recuperación/reciclaje de R12 y botella específica de recuperación (pág. 5).
- Bomba de vacío, equipo de limpieza con R141b y botella de nitrógeno N2 (pág. 5, 6).
- Condensador de elevadas prestaciones con las mismas dimensiones externas que el sustituido (pág. 4, 8).
- Válvula de expansión específica para refrigerante R134a (tarado con orificio más pequeño) (pág. 3, 4, 8).
- Juego de juntas tóricas para R134a y filtro deshidratante para R134a (pág. 4, 8).
- Aceite PAG (100 cSt a 40 ºC), refrigerante R134a, adaptadores de válvulas de rellenado, detector de fugas y etiqueta de reconversión (pág. 4, 7, 8).

## Pasos
1. Recuperar el R12 del circuito con la máquina de recuperación en botella específica (pág. 5, 8).
2. Hacer el primer vacío durante 10 a 15 minutos para control inicial de fugas (pág. 5, 8).
3. Limpiar el circuito por tramos con R141b y barrer con nitrógeno N2 a presión (sin limpiar compresor ni válvula de expansión) (pág. 6, 8).
4. Sustituir las juntas de todas las canalizaciones por juntas específicas para R134a (pág. 6, 8).
5. Sustituir el condensador original por un condensador de elevadas prestaciones e idénticas dimensiones (pág. 4, 8).
6. Sustituir la válvula de expansión original por una válvula de expansión específica para R134a (pág. 4, 8).
7. Sustituir el compresor si se encuentra deteriorado, o vaciar su aceite mineral (pág. 6, 8).
8. Sustituir el filtro deshidratante por uno específico para R134a (pág. 6, 8).
9. Instalar las válvulas de rellenado para R134a (pág. 6, 8).
10. Hacer el segundo vacío durante 20 a 60 minutos y verificar la estanqueidad tras 5-10 minutos (pág. 6, 8).
11. Introducir entre 100 y 150 cm3 de aceite PAG (viscosidad 100 cSt a 40 ºC) (pág. 7, 8).
12. Recargar con R134a a compresor parado hasta el 80% de la masa de la carga de R12 original (pág. 7, 8).
13. Buscar posibles fugas mediante detector electrónico (sensibilidad mínima 1 g/año) (pág. 7, 8).
14. Pegar de manera visible la etiqueta de información de conversión a R134a en el vehículo (pág. 7, 8).

## Valores de referencia
- Carga de R134a: 80% de la carga de R12 (pág. 7, 8).
- Volumen de aceite PAG: 100 a 150 cm3 (pág. 7, 8).
- Viscosidad del aceite PAG: 100 cSt a 40 ºC (pág. 7, 8).
- Sensibilidad del detector de fugas: 1 g/año (pág. 7, 8).
- Límite de degradación de temperatura del aire impulsado: 2 a 3 ºC (pág. 7, 8).

## Verificación final
Controlar las prestaciones del circuito verificando la temperatura del aire impulsado en los difusores (pág. 7, 8).

## Seguridad y normativa
- Gestión del R12 recuperado entregándolo en botella específica para su destrucción (pág. 5).
- Instalar componentes de condensación y expansión calibrados para soportar las presiones de trabajo del R134a (pág. 3, 4).

COBERTURA: documento «EL PROCEDIMIENTO DE RECONVERSIÓN DE R12 A R134A.PDF», páginas 1 a 8 de 8. [completo]