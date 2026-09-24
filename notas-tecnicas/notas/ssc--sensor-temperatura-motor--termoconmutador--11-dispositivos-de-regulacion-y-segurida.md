---
id: ssc.sensor-temperatura-motor.termoconmutador.11-dispositivos-de-regulacion-y-segurida
modulo: ssc
unidad: clima
nt: 69
tipo: elemento
clase: componente
titulo: "Termoconmutador para la temperatura de refrigerante"
menu: "Termoconmutador para la temperatura de"
grupo: "Refrigeración del motor"
clave: sensor-temperatura-motor
variante: termoconmutador
area: motor
sistema: "refrigeracion-motor"
forma_parte_de: circuito-refrigeracion-motor
fuentes: "11. Dispositivos de regulación y seguridad.pdf, págs. 91-92"
relacionados: ["compresor", "unidad-control-climatizador", "liquido-refrigerante-motor"]
palabras: ["termoconmutador", "119 ºC", "112 ºC", "sobrecalentamiento", "Can-Bus", "carga motor"]
---

## Misión

Proteger el motor del vehículo frente a sobrecalentamientos térmicos desacoplando la carga adicional que supone el compresor del aire acondicionado (págs. 91-92).

## Tipos y características

Interruptor térmico de contacto tarado o sonda NTC montada en el circuito de refrigeración del motor que transmite información a través de la red Can-Bus (págs. 91-92).

## Principio de funcionamiento

Mide la temperatura del líquido refrigerante del motor. Si durante una conducción con alta exigencia (subida de pendientes o fuerte carga) la temperatura del refrigerante alcanza aproximadamente 119 ºC, el conmutador abre sus contactos (o la unidad de motor envía la orden por Can-Bus a la unidad de climatización) y desacopla el compresor (págs. 91-92). Cuando el motor se enfría y el líquido desciende a 112 ºC, vuelve a conectar el compresor (pág. 92).

## Valores de trabajo

- Temperatura de desconexión del compresor: 119 ºC aproximadamente (pág. 92).
- Temperatura de reconexión del compresor: 112 ºC aproximadamente (pág. 92).
