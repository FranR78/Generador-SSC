---
id: ssc.presostato.temperatura-refrigerante-motor.aa-automocion-md-fr
modulo: ssc
unidad: clima
nt: 497
tipo: elemento
clase: componente
titulo: "Conmutador de aviso de temperatura del líquido refrigerante"
menu: "Conmutador de aviso de temperatura del"
grupo: "Refrigeración del motor"
clave: presostato
variante: temperatura-refrigerante-motor
area: motor
sistema: "refrigeracion-motor"
forma_parte_de: circuito-refrigeracion-motor
fuentes: "AA AUTOMOCION MD FR.pdf, págs. 138-139"
relacionados: ["compresor", "unidad-control-climatizador"]
palabras: ["sobrecalentamiento motor", "desconexión de seguridad", "119 ºC", "112 ºC"]
---

## Misión

Proteger el motor del vehículo contra sobrecalentamientos severos al someterlo a cargas muy intensas (ej. subida de puertos de montaña), desacoplando temporalmente la carga adicional que representa el compresor de aire acondicionado. (pág. 138)

## Tipos y características

Sensor/conmutador térmico de contactos montado en el circuito de refrigeración del motor. Conectado en serie con el circuito de mando del embrague del compresor. (pág. 138, 141)

## Principio de funcionamiento

Elemento bimetálico en contacto con el líquido refrigerante del motor. En condiciones normales de temperatura mantiene sus contactos cerrados. Si la temperatura del líquido refrigerante del motor alcanza un nivel crítico, los contactos se abren e interrumpen la corriente del compresor. (pág. 138)

## Valores de trabajo

- Umbral de desconexión del compresor: aproximadamente a 119 ºC.
- Umbral de reconexión del compresor: al descender a 112 ºC. (pág. 138)

## Anomalías frecuentes

Contactos oxidados o mecánicamente atascados en posición abierta.

## Comportamiento en avería

Si se avería quedando abierto, el compresor de aire acondicionado se desconecta permanentemente aunque el motor esté a temperatura normal. (pág. 138)

## Cómo comprobarlo

Medir continuidad eléctrica entre sus terminales con multímetro (debe dar 0 ohm a temperaturas de refrigerante del motor inferiores a 119 ºC). (pág. 138)

## Mantenimiento

Sustitución del conmutador y verificación del nivel de anticongelante del motor. (pág. 138)
