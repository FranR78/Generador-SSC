```yaml
tipo: componente
titulo: Válvula de expansión termostática
entidad: valvula-expansion
area: climatizacion
sistema: circuito-frigorifico
fabricante: Valeo
fuente: "LA VALVULA DE EXPANSION.PDF"
paginas: "1-13"
forma_parte_de: circuito-frigorifico
relacionados: [evaporador, compresor, filtro-deshidratador, refrigerante-r134a, refrigerante-r12]
palabras: [recalentamiento, equilibrado interno, equilibrado externo, bulbo, diafragma, adsorción, bombeo, presiones]
```

## Misión
- Expandir el fluido frigorífico asegurando el paso del estado de alta presión y temperatura al estado de baja presión y temperatura (pág. 1, 10, 18).
- Regular y mantener un recalentamiento específico (cuasi constante) a la salida del evaporador, modulando el suministro y caudal de refrigerante en función de las necesidades energéticas del evaporador (pág. 1, 10, 11).

## Tipos y características
- Dimensionada específicamente para cada circuito de climatización; se caracteriza por el recalentamiento que asegura (en K) y su capacidad frigorífica (en Ton) (pág. 1, 2).
- Clasificación según el equilibrado de presión (pág. 4, 5, 6):
  - **Equilibrado interno**: mide la presión al principio de la evaporación. Adecuada para instalaciones de poca capacidad con bajas pérdidas de carga en el evaporador. Si las pérdidas son elevadas, el recalentamiento estático aumenta y reduce la zona de evaporación útil (pág. 5).
  - **Equilibrado externo**: mide la presión al final de la evaporación, eliminando la influencia de las pérdidas de carga del evaporador. Muy común en automoción en forma de válvula monobloque por facilidad de montaje y aislamiento (pág. 4, 6).
- Clasificación según la carga del bulbo (pág. 6, 7, 8):
  - **Carga cruzada**: el bulbo contiene un refrigerante distinto al del circuito (ej. R12 en bulbo para circuito con R134a y viceversa) (pág. 7).
  - **Carga mixta**: el bulbo contiene una mezcla de fluidos (R12 + NH2 + ...) (pág. 7).
  - **Carga de adsorción**: contiene fluido frigorífico y carbono activo. Presenta respuesta diferida/retrasada ante cambios de temperatura, indicada para amortiguar fluctuaciones (pág. 7, 32).
  - **Carga gaseosa**: contiene refrigerante en estado gaseoso que condensa parcialmente. Reacciona muy rápidamente por tener una masa de carga mínima (pág. 8, 32).
  - **Carga líquida**: contiene fluido en estado líquido en volumen suficiente para conservar siempre fase líquida. Respuesta más lenta que la gaseosa (pág. 8).
- Clasificación según la posición del bulbo: exterior al cuerpo (ej. válvula EGELHOF) o interior al cuerpo (ej. válvula TGK con carga de adsorción y R13) (pág. 9).
- Elementos constitutivos (pág. 11, 12, 14, 19):
  - Válvula: orificio de paso, vástago de empuje, bola o cabeza de válvula, muelle de carrera, muelle de recalentamiento y tubo de expansión (pág. 12).
  - Mecanismo de regulación: membrana o diafragma, apoyo de protección intercalado, vástago, fluido frigorífico en el bulbo y tubo de rellenado (más carbono activo en válvulas de adsorción) (pág. 14, 19).

📷 IMAGEN: Esquema comparativo de válvulas de expansión (bloque, ángulo y orificio calibrado) — Fuente: LA VALVULA DE EXPANSION.PDF, pág. 1 (pág. 3).
📷 IMAGEN: Sección en despiece de la válvula de expansión termostática con indicación de la cabeza termostática, vástago, membrana, muelle de reglaje, bola o cabeza de válvula y conexiones — Fuente: LA VALVULA DE EXPANSION.PDF, pág. 5 (pág. 18, 19).

## Principio de funcionamiento
- **Expansión y cambio de fase**: el fluido entra en estado líquido a alta presión y temperatura. Al atravesar el orificio calibrado por la bola o cabeza de válvula, sufre una expansión brusca hacia estado difásico (líquido-gas) a baja presión y temperatura antes de entrar al evaporador (pág. 18).
- **Equilibrio de fuerzas sobre la membrana** (pág. 20, 21, 22):
  - **Fuerza F1 (Apertura)**: ejercida por la presión del bulbo (Pb), que depende de la temperatura del fluido a la salida del evaporador y de la carga del bulbo. Empuja la membrana hacia abajo aumentando el caudal (pág. 20, 21).
  - **Fuerza F2 (Cierre)**: ejercida por la presión de evaporación (Pe) existente a la salida del evaporador, actuando sobre la parte inferior de la membrana para reducir el caudal (pág. 20, 21).
  - **Fuerza F3 (Cierre)**: ejercida por el muelle de recalentamiento (de constante elástica fija), que actúa en el sentido de cierre para iniciar la apertura (pág. 13, 21).
  - El caudal se mantiene constante mientras F1 = F2 + F3 (pág. 21).
- **Regulación dinámica del recalentamiento** (diferencia entre temperatura de salida del evaporador y temperatura de saturación) (pág. 15, 24, 25, 26, 27):
  - Caudal insuficiente: aumenta el recalentamiento y la temperatura en la salida del evaporador -> sube Pb y la fuerza F1 -> la membrana se desplaza empujando el vástago y la bola -> aumenta la sección de paso y el caudal de fluido (pág. 27).
  - Caudal excesivo: disminuye el recalentamiento -> baja la temperatura y Pb -> F2 + F3 superan a F1 -> el vástago se eleva reduciendo la sección de paso -> disminuye el caudal de fluido (pág. 27).
  - Variaciones del caudal de aire: al aumentar el caudal de aire sube Pe y aumenta el caudal másico de refrigerante; al disminuir el caudal de aire baja Pe y se reduce el caudal (pág. 28).
  - Parada del compresor: Pe sube rápidamente por falta de aspiración y la válvula se cierra por completo (pág. 28).
- **Mecanismo de adsorción (bulbo interno con carbono activo)** (pág. 29, 30, 32):
  - El carbono activo captura (adsorbe) moléculas de gas en su superficie a bajas temperaturas reduciendo Pb, y las libera a altas temperaturas.
  - Ofrece un tiempo de respuesta más largo ante variaciones térmicas que la carga gaseosa, permitiendo amortiguar oscilaciones (pág. 7, 32).

📷 IMAGEN: Diagrama de las fuerzas F1 (presión bulbo), F2 (presión evaporador) y F3 (muelle) actuando sobre la membrana de la válvula — Fuente: LA VALVULA DE EXPANSION.PDF, pág. 6 (pág. 20, 21).

## Valores de trabajo
- Capacidad frigorífica: expresada en Ton (ejemplo: 1,5 Ton, 2 Ton) (pág. 2).
- Recalentamiento estático de regulación: expresado en K (ejemplo: 2 K, 3,5 K) (pág. 2).
- Presión máxima interna admisible: 15 bar (pág. 40).
- Tamaño máximo de partículas en fluido: 50 micras (pág. 41).
- Presión y temperatura de trabajo típicas en expansión correcta: de alta presión a 4 bar y 9 ºC a la salida de la válvula (pág. 36).

## Anomalías frecuentes
- **Bombeo de la válvula de expansión**: oscilaciones continuas e inestables de apertura y cierre por una respuesta demasiado rápida a las variaciones de presión (frecuente en válvulas de carga gaseosa) (pág. 34, 35, 36).
- **Uso de una válvula adaptable o inadaptada** (con orificio o parámetros distintos a la de origen, ej. orificio con diámetro inadecuado que genera 6 bar y 21 ºC a la salida): produce un caudal de fluido demasiado débil, aumento excesivo de la presión de evaporación (5 bar) y elevación de la temperatura de evaporación (25 ºC) (pág. 36, 37, 38).
- **Fuga de la carga termostática**: provocada por la torsión o rotura del tubo capilar soldado en la cabeza termostática (pág. 39).
- **Descalibración por manipulación del tornillo de reglaje**: alteración del tarado preciso fijado en fábrica bajo condiciones específicas (pág. 40).
- **Deformación irreversible de la membrana**: causada por someter la válvula a una presión interna superior a 15 bar (pág. 40).
- **Obstrucción u obturación del orificio**: provocada por presencia de impurezas o partículas superiores a 50 micras, o por tapones de hielo generados por humedad acumulada al estar el filtro deshidratante saturado (pág. 41).

📷 IMAGEN: Curva temporal de presión y apertura de válvula mostrando el fenómeno de inestabilidad por bombeo — Fuente: LA VALVULA DE EXPANSION.PDF, pág. 10 (pág. 34, 35).
📷 IMAGEN: Esquema comparativo entre la válvula de origen (4 bar / 9 ºC) y una válvula adaptable inadaptada (6 bar / 21 ºC y 5 bar / 25 ºC en evaporador) — Fuente: LA VALVULA DE EXPANSION.PDF, pág. 11-12 (pág. 36, 37).

## Comportamiento en avería
- Carencia de potencia frigorífica y falta de suministro de aire frío en el habitáculo (pág. 2, 38).
- Funcionamiento cíclico intermitente del compresor, produciendo desgaste prematuro del compresor y de la correa auxiliar, además de fluctuaciones desagradables de calor y frío en el habitáculo (pág. 2).
- Anulación del funcionamiento del detector por pérdida de la carga termostática del capilar (pág. 39).
- Bloqueo funcional de la válvula por deformación de la membrana o por taponamiento físico de hielo/impurezas (pág. 40, 41).

## Cómo comprobarlo
- Diferenciar claramente los síntomas de una válvula inadaptada respecto a una falta de fluido frigorífico en el circuito (pág. 38).
- Verificar visualmente que el tubo capilar de la cabeza termostática no presente deformaciones, torsiones ni pérdidas de estanqueidad en sus soldaduras (pág. 39).
- Comprobar que no existan bloqueos en la válvula provocados por partículas metálicas o suciedad mayores a 50 micras (pág. 41).

## Mantenimiento
- Prohibida la sustitución de una válvula de origen por otra adaptable que no cumpla exactamente las especificaciones de capacidad frigorífica (Ton) y recalentamiento (K) (pág. 1, 2, 38).
- Manejar con precaución evitando caídas o choques mecánicos que alteren sus características funcionales (pág. 39).
- No manipular ni modificar la posición del tornillo de reglaje/tarado de fábrica situado bajo la válvula (pág. 40).
- No someter la válvula a presiones internas superiores a 15 bar durante pruebas o manipulaciones (pág. 40).
- Taponar las tuberías e independizar el circuito inmediatamente después de cualquier intervención para evitar la entrada de impurezas (> 50 micras) (pág. 41).
- Sustituir el filtro deshidratante como mínimo cada dos años para evitar la saturación por humedad y la formación de tapones de hielo en el orificio de la válvula (pág. 41).

COBERTURA: documento «LA VALVULA DE EXPANSION.PDF», páginas 1 a 13 de 13. [completo]