---
id: ssc.control-ventiladores.la-climatizacion
modulo: ssc
unidad: clima
nt: 830
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Gestión electrónica de los electroventiladores"
menu: "Gestión electrónica de los electrovent"
grupo: "Control de climatización"
clave: control-ventiladores
area: climatizacion
sistema: "control-climatizacion"
fuentes: "LA CLIMATIZACIÓN.pdf, págs. 99-102"
relacionados: ["presostato", "sensor-temperatura-agua", "condensador"]
palabras: ["UEGV", "electroventilador", "velocidad 1", "velocidad 2", "condensación"]
---

## Objeto

Regular la activación y la velocidad de rotación del electroventilador (o conjunto de electroventiladores) para disipar el calor del condensador de climatización y del radiador del motor térmico. (págs. 99-101)

## Fundamento

El flujo de aire forzado generado por el ventilador es imprescindible para condensar el refrigerante a alta presión y mantener controlada la temperatura del motor térmico, gestionado por la Unidad Electrónica de Gestión del Ventilador (UEGV). (págs. 99-102)

## Desarrollo

La UEGV procesa las informaciones recibidas del termoconmutador del radiador (F18) y del presostato del circuito frigorífico (F129/G65):
- **Con el climatizador desconectado:** El electroventilador solo funciona en velocidad 1 o 2 en función exclusiva de la temperatura del líquido refrigerante del motor. (pág. 102)
- **Con el climatizador conectado:** El electroventilador se activa inmediatamente en el escalón 1 al acoplarse el compresor. Si la presión en el circuito frigorífico aumenta (alcanzando el umbral del presostato) o la temperatura del motor sobrepasa el límite, la UEGV conmuta al escalón 2 de máxima velocidad. (págs. 101-102)

## Valores de referencia

- Disposiciones de ventiladores: Un ventilador con dos escalones de velocidad o dos ventiladores con dos escalones de velocidad. (pág. 100)

## Errores de concepto frecuentes

- Creer que el electroventilador solo funciona para enfriar el motor térmico, ignorando su función crítica en la condensación del fluido frigorífico. (págs. 99, 102)
