---
id: ssc.sin-clasificar.sistemas-de-climatizacion-y-sus-modos-de-funcionamiento
modulo: ssc
unidad: clima
nt: 178
tipo: proceso
subtipo: fundamento
titulo: "Sistemas De Climatización Y Sus Modos De Funcionamiento"
menu: "Sistemas De Climatización Y Sus Modos "
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Definir los principios de funcionamiento, variantes de equipamiento y lógica de control de los cuatro sistemas de climatización (ventilación/calefacción, aire acondicionado manual, calefacción motorizada y autoclima). Se aplica a la gama SEAT Ibiza y Córdoba modelo 1999.

## Fundamento

El sistema gestiona el caudal, la mezcla térmica y la distribución del aire impulsado al interior del habitáculo. En los equipos mecánicos, la temperatura y la distribución se seleccionan mediante cables y mandos giratorios. En la calefacción motorizada y el autoclima, una unidad de control electrónica (UCE) gobierna servomotores sobre la trampilla de mezcla y la recirculación, mostrando la información en una pantalla central. El autoclima mantiene automáticamente la temperatura seleccionada evaluando la radiación y las temperaturas interior y exterior.

## Condiciones previas

- Tensión de batería en rango nominal.  
- Encendido conectado ("borne 15 ON") o motor en marcha.

## Equipo y material

- Polímetro digital y estación de diagnosis con código de dirección.

## Desarrollo

1. **Ventilación / Calefacción:** La temperatura se regula mezclando el aire que atraviesa el radiador de calefacción de forma mecánica. La velocidad de la turbina se selecciona mediante una escala de resistencias variables en el motor.  
2. **Aire Acondicionado Manual:** Mantiene la arquitectura mecánica de calefacción e incorpora un pulsador de acoplamiento eléctrico para el compresor de refrigeración.  
3. **Calefacción Motorizada:** Ajusta la temperatura mediante el servomotor V68 sobre la trampilla de mezcla y conmuta la recirculación con el servomotor V113. La distribución de aire se mantiene por mando giratorio mecánico.  
4. **Autoclima:** Gestiona electrónicamente la temperatura, la velocidad de la turbina V2, el compresor N25 y la recirculación V113 de forma automática, semiautomática o manual.

## Valores de referencia

| Sistema / Función | Parámetro de control | Condiciones de validez |
|---|---|---|
| **Ajuste automático de sustitución** | 22 ºC en pantalla | Modo sustitutivo por fallo de sensores o pulsadores |
| **Límite de desconexión A/C por helada** | < 5 ºC ambiente | Medido por interruptor térmico F38 en caja de aguas |

## Interpretación y errores frecuentes

- Confundir la calefacción motorizada con el autoclima: la calefacción motorizada no incorpora circuito frigorífico ni sensores de temperatura de conductos, por lo que no puede enfriar por debajo de la temperatura ambiente.

## Verificación final

Comprobar el desplazamiento suave de la trampilla de temperatura de extremo a extremo al modificar los valores en el panel y verificar la salida de aire a la temperatura deseada.

## Imágenes requeridas

- Cuadro esquemático de los cuatro sistemas de climatización del vehículo — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba.pdf, pág. 4
