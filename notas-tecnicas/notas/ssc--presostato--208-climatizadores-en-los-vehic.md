---
id: ssc.presostato.208-climatizadores-en-los-vehic
modulo: ssc
unidad: clima
nt: 811
tipo: elemento
clase: componente
titulo: "Conmutador de presión para climatizador F129"
codigo: "F129"
menu: "Conmutador de presión para cli F129"
grupo: "Control de climatización"
clave: presostato
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: circuito-frigorifico
fuentes: "208 CLIMATIZADORES_EN_LOS_VEHIC.PDF, págs. 32-33"
relacionados: ["embrague-compresor", "electroventilador-condensador"]
palabras: ["F129", "0", "2 MPa", "3", "2 MPa", "1", "6 MPa", "presostato triple"]
---

## Misión

Supervisar la presión en la línea de alta presión para proteger el compresor contra falta de carga o sobrepresión y gobernar la velocidad rápida del ventilador del líquido refrigerante. (págs. 32-33)

## Tipos y características

Presostato de combinación triple (Trinary) montado en la tubería del lado de alta presión. (págs. 32-33)

## Principio de funcionamiento

Procesa tres umbrales de conmutación hidromecánicos:
- **Protección por baja presión / sobrepresión:** Si la presión cae por debajo de 0,2 MPa (2 bar) por fuga de gas o supera los 3,2 MPa (32 bar) por sobrecalentamiento, abre sus contactos cortando la corriente del relé J32 / acoplamiento N25 para desactivar el compresor. (págs. 32-33)
- **Mando del ventilador:** Cuando la presión de alta alcanza los 1,6 MPa (16 bar), cierra su contacto interno alimentando la bobina del relé J101 para conectar la II velocidad del ventilador V7. (págs. 32-33)

## Valores de trabajo

- Umbral de desconexión por baja presión: < 0,2 MPa (2 bar). (pág. 33)
- Umbral de desconexión por alta presión: > 3,2 MPa (32 bar). (pág. 33)
- Umbral de activación de la II velocidad del ventilador: 1,6 MPa (16 bar). (pág. 33)

## Anomalías frecuentes

Sulfatación de contactos o fallo en el mecanismo de conmutación interna por picos de presión. (págs. 32-33)

## Comportamiento en avería

El compresor no se acopla o los ventiladores no conmutan a la II velocidad provocando sobrepresión en parado. (págs. 32-33)

## Cómo comprobarlo

Verificar la continuidad de los contactos con multímetro o comprobar los estados en los bloques de medición del autodiagnóstico. (págs. 32, 71)

## Mantenimiento

En climatizadores de última generación, este conmutador es reemplazado por un transmisor de alta presión continuo (G65). (pág. 33)

## Imágenes requeridas

- Esquema eléctrico de conexiones del conmutador de presión F129 en el circuito de control — Fuente: 208 CLIMATIZADORES_EN_LOS_VEHIC.PDF, pág. 32
