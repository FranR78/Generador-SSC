---
id: ssc.sin-clasificar.estrategia-y-funcionamiento-de-los-cinturones-de-seguridad-inerciales
modulo: ssc
unidad: sin-clasificar
nt: 456
tipo: proceso
subtipo: fundamento
titulo: "Estrategia Y Funcionamiento De Los Cinturones De Seguridad Inerciales"
menu: "Estrategia Y Funcionamiento De Los Cin"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar las estrategias de retención, tensado pirotécnico, limitación de esfuerzo y tensado reversible en los cinturones de seguridad inerciales delanteros en función del equipamiento del vehículo (con o sin Audi presense basic / plus).

## Fundamento

En un impacto o maniobra crítica, el sistema reduce la holgura entre el cinturón y el ocupante para minimizar el desplazamiento hacia adelante. A continuación, el limitador de fuerza cede de forma controlada a partir de un umbral de esfuerzo para reducir las cargas mecánicas sobre el tórax. La unidad de control del airbag (J234) coordina la activación de los detonadores y motores eléctricos con el disparo de los airbags.

## Desarrollo

- **Vehículos sin Audi presense basic / plus:**  
  - *Pretensado:* Activado pirotécnicamente (N153/N154) mediante la deformación de un bucle de cinta metálica que hace girar el eje del retractor.  
  - *Limitación de esfuerzo:* Limitador de dos escalones basado en dos barras de torsión acopladas por engranajes. Inicialmente trabajan ambas barras a la vez (nivel de fuerza alto). Si J234 lo determina por la gravedad del impacto, se activa un detonador que desplaza un elemento deslizante para desacoplar la segunda barra de torsión, dejando actuar solo una barra (nivel de fuerza bajo).  
- **Vehículos con Audi presense basic / plus:**  
  - *Tensores reversibles:* Controlados por las UCEs J854 (izquierda) y J855 (derecha) mediante motores eléctricos con tres niveles de fuerza (baja, media, alta) comunicados por bus Extended CAN y J533.  
  - *Pretensado pirotécnico:* Mecanismo de cremallera y piñón con pistón impulsado por gas que acciona un embrague de rueda libre por rodillos.

## Valores de referencia

| Función / Componente | Parámetro de trabajo | Condiciones de activación |
|---|---|---|
| **Niveles de fuerza eléctrica (J854/J855)** | **Nivel: Fuerza baja** | Reducción de la holgura del cinturón |
| **Niveles de fuerza eléctrica (J854/J855)** | **Nivel: Fuerza media** | Tensado parcial |
| **Niveles de fuerza eléctrica (J854/J855)** | **Nivel: Fuerza alta** | Tensado total por colisión frontal leve detectada por J234 |
| **Limitador de fuerza pirotécnico** | **No se activan G551 y G552** | En caso de impacto lateral o trasero |

## Interpretación y errores frecuentes

- Esperar la activación pirotécnica de los limitadores de fuerza G551/G552 en colisiones laterales o traseras: la UCE J234 no los activa en este tipo de impactos.

## Seguridad y normativa

Componentes pirotécnicos sometidos a reglamentación de explosivos y seguridad pasiva del automóvil.

## Imágenes requeridas

- Componentes del carrete retractor y detonador del pretensionador de cinta metálica — Fuente: SSP 484 A7 Info y Clima (arrastrado).pdf, pág. 14
