---
id: ssc.autodiagnostico-climatizador.audi-a5-coupe-2008-aire-acondicionado
modulo: ssc
unidad: clima
nt: 168
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Autodiagnosis y protección de componentes en la unidad Climatronic"
codigo: "J255"
menu: "Autodiagnosis y protección de  J255"
grupo: "Control de climatización"
clave: autodiagnostico-climatizador
area: climatizacion
sistema: "control-climatizacion"
marca: "Audi"
fuentes: "Audi A5 Coupé_2008_aire acondicionado.pdf, págs. 4-11"
relacionados: ["unidad-control-climatizador"]
palabras: ["J255", "dirección 08", "protección de componentes", "memoria no volátil", "averías esporádicas"]
---

## Objeto

Explicar el funcionamiento del sistema de autodiagnosis, la gestión de memoria de averías y el mecanismo de protección de componentes en la unidad de control para Climatronic J255. (págs. 4-11)

## Fundamento

La unidad de control J255 supervisa continuamente los sensores y actuadores del sistema. Integra una memoria no volátil que registra las averías e incorpora un protocolo de seguridad antirrobo denominado protección de componentes. (págs. 4-7)

## Desarrollo

- **Dirección de diagnóstico:** El acceso al sistema mediante el equipo de diagnosis (VAS 5051/5052) se realiza a través del código de dirección "08 - Electrónica de climatización/calefacción". (pág. 8)
- **Memoria de averías:** Es de tipo no volátil (no pierde los datos al desconectar la batería). Clasifica los fallos en estáticos (permanentes) o esporádicos (/SP). Las averías esporádicas que no vuelven a reproducirse se borran automáticamente tras un periodo determinado. Junto a la avería se memorizan las condiciones de entorno (kilometraje, fecha, temperatura del motor, régimen y tensión). (págs. 5, 9)
- **Protección de componentes:** Al adaptar una unidad J255 a un vehículo, queda vinculada electrónicamente a él. Si se instala en otro vehículo sin desinmovilizar previa verificación, la protección de componentes inhibe las funciones de confort y solo mantiene operativas las funciones de seguridad. (págs. 4, 26)

## Valores de referencia

- Código de dirección del climatizador: 08 (Electrónica de climatización/calefacción). (pág. 8)

## Errores de concepto frecuentes

- Asumir que al desconectar la batería del vehículo se borra la memoria de averías del Climatronic J255. (pág. 5)
- Creer que una unidad de control J255 usada se puede intercambiar directamente entre dos vehículos sin desactivar la protección de componentes. (pág. 4)

## Imágenes requeridas

- Pantalla del equipo de diagnosis VAS 5051 con la selección del código de dirección 08 — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 9
