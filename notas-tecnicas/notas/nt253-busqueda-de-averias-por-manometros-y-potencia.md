---
id: ssc.sin-clasificar.busqueda-de-averias-por-manometros-y-potencia
modulo: ssc
unidad: sin-clasificar
nt: 253
tipo: proceso
subtipo: diagnostico
titulo: "Búsqueda De Averías Por Manómetros Y Potencia"
menu: "Búsqueda De Averías Por Manómetros Y P"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto and alcance

Establecer la pauta de diagnóstico lógico para la localización de fallos en el sistema de aire acondicionado mediante la interpretación de presiones de trabajo y temperaturas. Se aplica a la resolución de averías en el taller.

## Fundamento

Las lecturas de la Baja Presión (BP) y la Alta Presión (AP) en el puente de manómetros, combinadas con la temperatura del aire expulsado en la tobera central, reflejan el estado operativo del compresor, el nivel de carga de refrigerante, la eficacia del condensador y el comportamiento de la válvula de expansión.

## Condiciones previas

- Motor en marcha y estabilizado a un régimen de 2.000 a 2.500 rpm.  
- Selector de temperatura a la máxima potencia de refrigeración, soplador en nivel medio y toberas centrales abiertas.

## Equipo y material

- Puente de manómetros para R134a.  
- Termómetro digital con sonda para tobera.  
- Equipo de diagnosis OBD para lectura de memoria de averías.

## Desarrollo

1. Verificar si la ventilación del habitáculo funciona en todas sus velocidades; si no funciona, revisar fusibles, relés e interruptores.  
2. Comprobar si el embrague electromagnético o la regulación del compresor se activa; si no conecta, revisar el suministro eléctrico, los presostatos y la cantidad de carga.  
3. Medir la temperatura en la tobera central tras varios minutos de funcionamiento (debe situarse entre 3 ºC y 8 ºC).  
4. Conectar el puente de manómetros y medir BP y AP a 2.000 - 2.500 rpm.  
5. Comparar las lecturas obtenidas con la tabla de averías según el tipo de válvula:

* **Sistemas con Válvula de Expansión:**  
  - *BP Alta / AP Alta:* Motor sobrecalentado, condensador sucio, ventilador girando al revés o circuito saturado.  
  - *BP Normal a Baja / AP Alta (temporal):* Válvula de expansión oprimida o parcialmente cerrada.  
  - *BP Normal / AP Alta:* Filtro deshidratante envejecido o condensador sucio.  
  - *BP Normal pero no uniforme / AP Normal pero no uniforme:* Humedad en el sistema o válvula de expansión defectuosa.  
  - *BP Variable / AP Variable:* Válvula de expansión o compresor defectuosos.  
  - *BP Normal a Baja / AP Normal a Baja:* Evaporador sucio o falta de refrigerante.  
  - *BP Alta / AP Baja:* Válvula de expansión comprimida abierta o compresor defectuoso (sin compresión).  
  - *BP Baja / AP Baja:* Falta de refrigerante en el circuito.  
  - *BP y AP IGUALES:* Falta total de refrigerante, compresor defectuoso o fallo en la instalación eléctrica.

* **Sistemas con Válvula de Mariposa Fija (Tubo con Orificio):**  
  - *BP Alta / AP Alta:* Motor sobrecalentado, condensador sucio, ventilador incorrecto o sistema saturado.  
  - *BP Normal a Alta / AP Alta:* Instalación saturada de refrigerante o condensador sucio.  
  - *BP Normal / AP Normal a Alta (variable):* Humedad en la instalación o tubo de orificio obstruido temporalmente.  
  - *BP Alta / AP Normal:* Válvula de mariposa defectuosa en su sección.  
  - *BP y AP IGUALES:* Falta de refrigerante, compresor destruido o fallo eléctrico.

## Valores de referencia

| Magnitud de prueba | Valor teóricamente correcto | Condiciones de validez |
|---|---|---|
| **Baja Presión (BP) estándar** | **0,5 a 3,0 bar** | Motor a 2.000 - 2.500 rpm |
| **Baja Presión (compresor regulado)** | **Aprox. 2,0 bar (constante)** | Motor a 2.000 - 2.500 rpm |
| **Alta Presión (AP)** | **6,0 a 25,0 bar** | Motor a 2.000 - 2.500 rpm |
| **Temperatura en tobera central** | **3 ºC a 8 ºC** | Régimen medio de soplado tras varios minutos |

## Interpretación y errores frecuentes

- Lecturas de alta y baja presión igualadas: no implica siempre la rotura del compresor; debe verificarse primero si llega tensión (+12 V o señal PWM) a la bobina o válvula reguladora.  
- Desbalance de presiones por humedad: se detecta por la congelación intermitente de la válvula de expansión y oscilaciones en las agujas de los manómetros.

## Verificación final

Confirmar que tras la reparación la temperatura de salida en tobera baje al rango de 3 a 8 ºC y que las presiones se estabilicen en sus márgenes nominales.
