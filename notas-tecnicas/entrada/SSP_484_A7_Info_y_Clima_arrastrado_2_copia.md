```yaml
tipo: componente
titulo: Servomotor de trampilla con bus LIN
entidad: servomotor-trampilla
variante: bus-lin
area: climatizacion
sistema: distribucion-aire
codigo: J255
fabricante: Audi
fuente: "SSP 484 A7 Info y Clima (arrastrado) 2 copia.pdf"
paginas: "52-53"
forma_parte_de: unidad-control-climatizador
relacionados: [unidad-control-climatizador, autodiagnostico-climatizador]
palabras: [servomotor, bus LIN, conector de 4 pines, direccionamiento automático, terminal 30]
```

## Misión
Accionar y posicionar las trampillas individuales del sistema de climatización mediante la recepción de órdenes e información de adaptación a través del bus LIN. (pág. 53).

## Tipos y características
Servomotores conectados en serie a la unidad de control Climatronic J255 o a la unidad de control e indicación del climatizador trasero E265 mediante el bus LIN. Incorporan un conector de 4 pines:
- Pin A1: terminal 31 (masa).
- Pin A2: LIN in (entrada de la línea de datos bus LIN).
- Pin A3: LIN out (salida de la línea de datos bus LIN).
- Pin A4: terminal 30 (alimentación de positivo permanente). (págs. 52-53).

## Principio de funcionamiento
Se adaptan y activan mediante la conexión en serie a la línea de datos bus LIN. Cada servomotor recibe la asignación de su trampilla correspondiente mediante una codificación de dirección obtenida durante el proceso de direccionamiento automático (auto-addressing). La señal de datos entra por el pin A2 (LIN in) y se transmite hacia el siguiente servomotor de la serie por el pin A3 (LIN out). (págs. 52-53).

📷 IMAGEN: Esquema de conexión en serie del conector de 4 pines (A1 terminal 31, A2 LIN in, A3 LIN out, A4 terminal 30) entre servomotores — Fuente: SSP 484 A7 Info y Clima (arrastrado) 2 copia.pdf, pág. 53

## Valores de trabajo
Alimentación eléctrica por terminal 30 (positivo permanente) y terminal 31 (masa). (pág. 53).

## Anomalías frecuentes
Interrupción de la línea del bus LIN en el servomotor, o intercambio accidental de conectores o de posiciones físicas entre servomotores durante trabajos de reparación. (pág. 53).

## Comportamiento en avería
- Si la línea del bus LIN se interrumpe en un servomotor, se indican como averiados ese servomotor y todos los servomotores conectados en serie a continuación (aguas abajo / downstream).
- Si se intercambian los conectores de dos o más servomotores, mantendrán sus funciones anteriores hasta el siguiente ciclo de direccionamiento automático; tras dicho ciclo, se les asignarán trampillas incorrectas al no coincidir el orden de los conectores en el mazo de cables.
- Si se intercambia la ubicación física de dos servomotores, no funcionarán correctamente con la asignación de dirección antigua en la nueva posición.
- Ante cualquier fallo se registra un código de avería (DTC) en la memoria de averías. (pág. 53).

## Cómo comprobarlo
Leer y consultar la memoria de averías (DTC) utilizando la herramienta de diagnóstico (VAS Scan Tool). (pág. 53).

## Mantenimiento
Respetar el orden correcto de los conectores en el mazo de cables y ejecutar el ciclo de direccionamiento automático tras sustituir o permutar servomotores. (pág. 53).

---

```yaml
tipo: fundamento
titulo: Direccionamiento automático de servomotores en bus LIN
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
codigo: J255
fabricante: Audi
fuente: "SSP 484 A7 Info y Clima (arrastrado) 2 copia.pdf"
paginas: "52-53"
relacionados: [servomotor-trampilla, unidad-control-climatizador, autodiagnostico-climatizador]
palabras: [auto-addressing, direccionamiento automático, bus LIN, conexión en serie, codificación de dirección]
```

## Objeto
Asignar direcciones individuales a cada servomotor de trampilla conectado en serie en el bus LIN para su adaptación y control desde la unidad Climatronic J255 o E265. (pág. 53).

## Fundamento
Los servomotores están enlazados en serie a través del bus LIN. Para que la unidad de mando identifique qué trampilla acciona cada servomotor, se ejecuta un proceso de codificación de dirección denominado direccionamiento automático (auto-addressing). (pág. 53).

## Desarrollo
1. Estructura de la conexión: La línea de datos bus LIN entra en cada servomotor por el pin A2 (LIN in) y sale hacia el siguiente por el pin A3 (LIN out), compartiendo todos la alimentación por terminal 30 (pin A4) y terminal 31 (pin A1). (pág. 53).
2. Proceso de asignación: La unidad de control J255 o E265 asigna las direcciones a las trampillas respetando el orden físico de los conectores en el mazo de cables de la conexión en serie. (pág. 53).
3. Gestión de averías en la red LIN:
   - Si se interrumpe el bus LIN en un servomotor, se detecta avería en dicho servomotor y en todos los situados a continuación en la serie (aguas abajo). (pág. 53).
   - Cualquier fallo genera un registro de avería (DTC) en la memoria de averías accesible por diagnóstico. (pág. 53).

## Valores de referencia
No documentado en fuentes. (págs. 52-53).

## Errores de concepto frecuentes
Creer que permutar la posición física de dos servomotores soluciona un fallo; no funcionarán con la dirección antigua en la nueva ubicación y, tras el siguiente ciclo de auto-addressing, se les asignarán las trampillas correspondientes al orden físico de los conectores del mazo de cables. (pág. 53).

COBERTURA: documento «SSP 484 A7 Info y Clima (arrastrado) 2 copia.pdf», páginas 52 a 53 de 53. [completo]