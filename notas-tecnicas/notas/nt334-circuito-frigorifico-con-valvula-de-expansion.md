---
id: ssc.sin-clasificar.circuito-frigorifico-con-valvula-de-expansion-3
modulo: ssc
unidad: sin-clasificar
nt: 334
tipo: proceso
subtipo: fundamento
titulo: "Circuito Frigorífico Con Válvula De Expansión"
menu: "Circuito Frigorífico Con Válvula De Ex"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Describir la circulación, presiones, temperaturas y cambios de estado del fluido en un circuito equipado con válvula de expansión. Se aplica al análisis de trabajo del sistema.

## Fundamento

El circuito cerrado transforma la energía mecánica en cambios de estado del fluido R134a. Al elevar la presión se calienta el gas para ceder calor al exterior en el condensador; al bajar la presión en la válvula de expansión, el fluido hierve a baja temperatura en el evaporador absorbiendo el calor del aire del habitáculo.

## Condiciones previas

- Prueba de referencia: 20 minutos de funcionamiento continuo.  
- Temperatura del aire exterior: 20 ºC.  
- Régimen del motor: entre 1.500 rpm y 2.000 rpm.

## Equipo y material

Puente de manómetros.

## Desarrollo

1. **Compresión y Calentamiento:** El compresor aspira gas de baja presión y lo impulsa a la zona de alta presión a 16 bar (1,6 MPa) y entre 80 ºC y 90 ºC.  
2. **Enfriamiento y Condensación:** En el condensador el gas cede calor al aire exterior, se enfría aproximadamente 15 ºC y se condensa, saliendo en estado líquido a 16 bar y entre 50 ºC y 60 ºC.  
3. **Expansión y Evaporación:** La válvula de expansión estrangula el líquido de 16 bar a 2 bar (0,2 MPa), bajando su temperatura de 55 ºC a -1 ºC (mezcla líquido-vapor). En el evaporador se evapora pasando a gas, enfriando el aire que entra al habitáculo a una temperatura de 3 ºC a 7 ºC.

## Valores de referencia

| Tramo / Estado del circuito | Presión de trabajo | Temperatura de trabajo | Estado del fluido |
|---|---|---|---|
| **Circuito en reposo (motor parado)** | **4,7 bar (0,47 MPa)** | **20 ºC ambiente** | Gas/Líquido en reposo |
| **Salida del compresor (Alta Presión)** | **16 bar (1,6 MPa)** | **80 ºC a 90 ºC** | Gas sobrecalentado |
| **Salida del condensador** | **16 bar (1,6 MPa)** | **50 ºC a 60 ºC** | Líquido subenfriado |
| **Salida de la válvula de expansión** | **2 bar (0,2 MPa)** | **-1 ºC (-5 ºC)** | Mezcla líquido-vapor |
| **Aire expulsado hacia el habitáculo** | Presión atmosférica | **3 ºC a 7 ºC** | Aire enfriado y seco |

## Interpretación y errores frecuentes

- Medir presiones con el motor recién arrancado o a ralentí inestable: las presiones de referencia solo son válidas tras 20 minutos a 1.500-2.000 rpm con 20 ºC exteriores.

## Verificación final

Verificar la temperatura de salida en toberas entre 3 ºC y 7 ºC.
