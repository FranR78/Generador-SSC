---
id: ssc.sin-clasificar.regulacion-y-proteccion-basica-del-sistema
modulo: ssc
unidad: clima
nt: 285
tipo: proceso
subtipo: fundamento
titulo: "Regulación Y Protección Básica Del Sistema"
menu: "Regulación Y Protección Básica Del Sis"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar la lógica de control, dispositivos de vigilancia e interconexión de seguridad en un climatizador manual simple.

## Fundamento

Una unidad de control procesa señales de presostatos y sensores de temperatura para conectar o desconectar el acoplamiento N25 y ajustar la velocidad de los ventiladores, manteniendo las presiones dentro de márgenes seguros.

## Condiciones previas

Encendido conectado y selector del climatizador en posición ON.

## Equipo y material

Esquema de circuitos de corriente del vehículo.

## Desarrollo

* **Cadena de protección y control:**  
  - El conmutador E35 envía la orden a la UCE J301/J293.  
  - La UCE evalúa el conmutador de presión F129 (o F73/F118), el transmisor de evaporador G153 y el sensor del motor G62/F18.  
  - Se comunica con la UCE del motor J257 para elevar el régimen de ralentí antes de acoplar el compresor N25.  
  - Si cualquier presostato o sensor detecta un parámetro fuera de rango, deshabilita el compresor.

## Interpretación y errores frecuentes

- Desconexión del compresor al acelerar o en ralentí: puede estar provocado por fallos en las señales de entrada de la UCE del motor o presostatos defectuosos.

## Verificación final

Acoplamiento del embrague N25 y elevación compensatoria del régimen de ralentí del motor.

## Seguridad y normativa

Inhibición de la conexión del compresor por debajo de +3 ºC / +5 ºC de temperatura exterior para evitar la congelación del evaporador.

## Imágenes requeridas

- Esquema eléctrico de conexiones y componentes de protección del climatizador manual — Fuente: CLIMATIZADOR MD FRAN.docx, pág. 100 y 104
