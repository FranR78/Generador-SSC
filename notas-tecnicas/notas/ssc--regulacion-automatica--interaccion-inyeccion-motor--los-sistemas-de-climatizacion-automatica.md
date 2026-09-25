---
id: ssc.regulacion-automatica.interaccion-inyeccion-motor.los-sistemas-de-climatizacion-automatica
modulo: ssc
unidad: clima
nt: 879
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Interacción entre la climatización automática y el módulo de inyección del motor"
menu: "Interacción entre la climatización aut"
grupo: "Control de climatización"
clave: regulacion-automatica
variante: interaccion-inyeccion-motor
area: climatizacion
sistema: "control-climatizacion"
marca: "Valeo"
fuentes: "LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF, págs. 4"
relacionados: ["compresor", "unidad-control-climatizador"]
palabras: ["módulo de inyección", "ECM", "corte de compresor", "aceleración brusca", "demanda de potencia"]
---

## Objeto

Desconectar temporalmente el compresor del aire acondicionado a través de la comunicación entre la tarjeta electrónica del climatizador y la centralita de inyección del motor (ECM) durante fuertes solicitaciones de carga. (pág. 4)

## Fundamento

El compresor de climatización es arrastrado mecánicamente por el motor térmico a través de la correa de accesorios. En situaciones de demanda de máxima aceleración, la absorción de potencia del compresor resta capacidad de empuje al vehículo. (pág. 4)

## Desarrollo

La centralita de inyección del motor (ECM) está interconectada con la tarjeta electrónica del climatizador. Al detectar un pisotón a fondo o aceleración rápida, el módulo de inyección transmite una señal a la centralita de climatización para cortar la alimentación del acoplamiento del compresor, liberando toda la potencia del motor térmico para la tracción. Una vez estabilizada la aceleración, se restablece el acoplamiento del compresor. (pág. 4)

## Errores de concepto frecuentes

- Creer que el corte del compresor en aceleración brusca procede de un fallo de presión en el circuito frigorífico, cuando responde a una estrategia deliberada de gestión de potencia del motor. (pág. 4)
