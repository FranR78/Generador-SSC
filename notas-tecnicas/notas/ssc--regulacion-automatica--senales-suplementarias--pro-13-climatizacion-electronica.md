---
id: ssc.regulacion-automatica.senales-suplementarias.pro-13-climatizacion-electronica
modulo: ssc
unidad: clima
nt: 162
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Señales suplementarias de intercambio de datos entre UCEs"
menu: "Señales suplementarias de intercambio "
grupo: "Control de climatización"
clave: regulacion-automatica
variante: senales-suplementarias
area: climatizacion
sistema: "control-climatizacion"
fuentes: "PRO 13. Climatización Electrónica.pdf, págs. 109"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla", "compresor"]
palabras: ["tiempo parado Tp", "velocidad marcha v", "régimen n", "acelerador a fondo", "Can-Bus"]
---

## Objeto

Aumentar el confort térmico y optimizar la potencia del motor integrando datos dinámicos transmitidos vía Can-Bus desde otras unidades de control (pág. 109).

## Fundamento

Uso compartido de las señales de tiempo de parada, velocidad del vehículo y r.p.m. del motor entre el cuadro de instrumentos, la UCE de motor y la UCE del climatizador (pág. 109).

## Desarrollo

Efecto de las tres señales suplementarias:
1. Tiempo del vehículo parado (Tp): mide el tiempo desde que se desconecta el encendido hasta que se vuelve a conectar. Al arrancar, la UCE utiliza la temperatura exterior previa para evitar errores por calor radiado del motor, impidiendo un enfriamiento excesivo (pág. 109).
2. Velocidad de marcha (v): procedente del velocímetro/ABS. A medida que aumenta la velocidad, la UCE reduce la sección de paso de la chapaleta de velocidad para mantener invariable el caudal que entra (pág. 109).
3. Régimen de revoluciones (n): procedente de la UCE de motor. Impide conectar el compresor si el motor está parado o el ralentí no está estabilizado, y desconecta el compresor unos segundos al pisar el acelerador a fondo para disponer de toda la potencia en adelantamientos (pág. 109).

## Errores de concepto frecuentes

- Creer que al pisar a fondo el acelerador para adelantar el compresor permanece conectado restando potencia al motor (pág. 109).
