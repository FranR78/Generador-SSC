---
id: ssc.sin-clasificar.diagnostico-de-climatizacion-con-climtest
modulo: ssc
unidad: sin-clasificar
nt: 241
tipo: proceso
subtipo: diagnostico
titulo: "Diagnóstico De Climatización Con Climtest"
menu: "Diagnóstico De Climatización Con Climt"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Realizar un diagnóstico automático integral de las prestaciones y componentes del circuito frigorífico mediante la estación de comprobación Climtest. Se aplica a mantenimientos preventivos y localización de averías.

## Fundamento

El equipo Climtest toma simultáneamente 6 magnitudes (presión HP, presión BP, temperatura de entrada a la válvula de expansión, temperatura de aspiración del compresor, temperatura ambiente y temperatura del aire soplado en toberas). Realiza 100 mediciones cada 20 segundos y calcula automáticamente el subenfriamiento y el recalentamiento, mostrando el diagnóstico en pantalla.

## Condiciones previas

- Temperatura ambiente exterior > 16  ºC (a temperaturas inferiores el compresor corta por seguridad imposibilitando la prueba).  
- Seleccionar correctamente el tipo de fluido frigorífico en el aparato (R12 o R134a).

## Equipo y material

- Estación portátil **Valeo Climtest**.

## Desarrollo

1. Conectar las tomas de presión y las sondas térmicas del Climtest en los puntos del circuito correspondientes.  
2. Encender el Climtest y seleccionar el tipo de gas (**R12** o **R134a**).  
3. Poner en marcha el motor y el sistema de aire acondicionado al máximo rendimiento.  
4. Esperar a que el microprocesador procese las cadenas de ciclos de medición.  
5. Leer el resultado del diagnóstico en el display digital del equipo:  
   - *"OK"*  Sistema en perfecto estado.  
   - *"Falta fluido frigorífico"*  Fuga o subcarga.  
   - *"Exceso de fluido en circuito"*  Sobrecarga.  
   - *"Filtro Deshidratante saturado"*  Obstrucción en la línea de líquido.  
   - *"Problema en circuito"*  Fallo en compresor o válvula de expansión.  
   - *"Error. Revise conexiones"*  Sonda o latiguillo mal conectado.

## Valores de referencia

| Parámetro evaluado por Climtest | Criterio de validez interna |
|---|---|
| **Límite de temperatura ambiental** | **> 16 ºC** para realizar la prueba |
| **Muestreo del calculador** | **100 mediciones cada 20 segundos** sobre 6 magnitudes |
| **Temperatura en difusores (T_{as})** | **2 ºC a 10 ºC** (para T_{ext} entre 15 ºC y 25 ºC) |

## Interpretación y errores frecuentes

- Realizar la prueba con temperatura exterior < 16  ºC: arroja diagnósticos erróneos al entrar la cilindrada variable en posición mínima.  
- Un error de tan solo 1 ºC en la colocación de una sonda de contacto alterará el cálculo del subenfriamiento provocando un falso diagnóstico.

## Verificación final

Confirmar la indicación de mensaje *"OK"* en la pantalla del Climtest tras concluir la reparación.

## Imágenes requeridas

- Dispositivo Valeo Climtest y sus conexiones para la medición del circuito — Fuente: CLIMATIZACION INTRODUCCION.PDF, pág. 190 y 238
