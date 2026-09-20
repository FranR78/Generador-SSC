---
id: ssc.clima.presostato-de-climatizacion
modulo: ssc
unidad: clima
nt: 136
titulo: "Presostato De Climatización"
ubicacion: "Montado sobre un racor roscado provisto de obús de seguridad en el filtro deshidratador o tubería de alta presión [160, 163, 164]"
aplicacion: "Protección y control electromecánico en sistemas de aire acondicionado [160, 163, 165]"
menu: "Presostato De Climatización"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Supervisar la presión del refrigerante en la línea de alta presión para proteger el compresor contra presiones anormales (mínima y máxima) y gestionar la activación de las velocidades del electroventilador del condensador [160, 163-165].

## Principio de funcionamiento

Interruptor accionado por presión hidráulica. La presión del refrigerante actúa sobre una membrana interna venciendo muelles calibrados para abrir o cerrar contactos eléctricos:  
- *Contacto de Mínima (I Nivel):* abre el circuito si la presión cae por debajo del umbral de seguridad por falta de refrigerante, desacoplando el compresor [160, 163, 164].  
- *Contacto de Velocidad (II Nivel):* cierra sus contactos al subir la presión para conectar la velocidad rápida del electroventilador y aumentar la condensación [163, 164].  
- *Contacto de Máxima (III Nivel):* abre el circuito si la presión sube a niveles peligrosos por falta de condensación, desconectando el compresor [163, 164, 166].

## Características

- **Presostato de Mínima:** 1 contacto normalmente abierto [160, 163].  
- **Presostato de Máxima:** 1 contacto normalmente cerrado [163, 166].  
- **Presostato de 3 Funciones (Trinaria):** combina en un único cuerpo roscado los 3 niveles de conmutación de presión [163-165, 167].

## Valores de trabajo

| Nivel de Conmutación | Umbral de Presión | Función / Acción eléctrica |
|---|---|---|
| **I Nivel (Mínima)** | Conecta a 2.0 bar | Permite el acoplamiento del compresor [164] |
| **II Nivel (Ventilador)** | Conecta a 17.0 bar / Desconecta a 14.0 bar | Activa la velocidad rápida del electroventilador [164] |
| **III Nivel (Máxima)** | Desconecta a 27.0 bar / Conecta a 22.0 bar | Desconecta el compresor por sobrepresión [164] |

## Anomalías frecuentes

Fallo de contactos por fogueo eléctrico; fuga de gas a través del sellado del cuerpo; membrana endurecida que altera las presiones de conmutación [163, 164].

## Comportamiento en avería

- Si falla la etapa de mínima: el compresor no se acopla nunca [31, 163].  
- Si falla la etapa de II nivel: el electroventilador no pasa a alta velocidad, subiendo la alta presión hasta hacer saltar el III nivel de máxima [38, 164].

## Cómo comprobarlo

Desconectar el conector eléctrico y medir continuidad con el polímetro entre las parejas de bornes de cada nivel (I, II y III) verificando su estado abierto o cerrado de acuerdo con la presión existente en el circuito [81, 163, 164].
