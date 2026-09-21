---
id: ssc.sin-clasificar.comprobacion-de-presiones-y-diagnostico-en-circuitos-frigorificos
modulo: ssc
unidad: sin-clasificar
nt: 542
tipo: proceso
subtipo: diagnostico
titulo: "Comprobación De Presiones Y Diagnóstico En Circuitos Frigoríficos"
menu: "Comprobación De Presiones Y Diagnóstic"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Localizar averías en el circuito frigorífico mediante la lectura de las presiones de alta (HD) y baja (ND) en el puente de manómetros según el tipo de compresor y sistema de expansión.

## Fundamento

Las presiones de trabajo varían según el régimen del motor, la carga de gas, la temperatura ambiental y el tipo de regulación del compresor (interna o electrónica externa N280).

## Condiciones previas

- Motor a temperatura de servicio y régimen estabilizado a 2.000 rpm.  
- Climatizador ajustado en modo de máxima potencia frigorífica ("LO", Auto, ventilador al máximo y recirculación activada).  
- Temperatura ambiente superior a 15 ºC.

## Equipo y material

Estación de servicio o puente de manómetros homologado para R134a.

## Desarrollo y cuadro de diagnóstico

1. Conectar las mangueras de servicio a las tomas HD y ND del vehículo.  
2. Mantener el motor a 2.000 rpm durante 20 minutos para estabilizar el sistema.  
3. Leer las presiones e interpretar según el cuadro de desviaciones:  
   - **Alta presión NORMAL / Baja presión NORMAL:** Sistema correcto. *(En compresor variable N280: baja presión entre 1,5 bar y 2,2 bar absolutos según la corriente PWM de 0,3 A a 0,85 A).*  
   - **Alta presión BAJA / Baja presión BAJA (o en vacío):** Falta de refrigerante por fuga, o estrangulador/válvula de expansión bloqueada cerrada.  
   - **Alta presión ALTA / Baja presión BAJA:** Obstrucción o estrechamiento físico en la línea de alta o en el evaporador; humedad congelada en el elemento de expansión.  
   - **Alta presión ALTA / Baja presión ALTA:** Exceso de carga de refrigerante, condensador sucio o avería de los electroventiladores.  
   - **Alta y Baja presión CASI IGUALES (con compresor girando):** Compresor defectuoso (placa de válvulas rota) o falla de excitación de la electroválvula reguladora N280.

## Valores de referencia

| Tipo de sistema / Parámetro | Presión de Baja (ND) | Presión de Alta (HD) |
|---|---|---|
| **Reposos a 20 ºC (Motor parado)** | **4,7 bar (sobrepresión)** | **4,7 bar (sobrepresión)** |
| **Sistema con Estrangulador (a 2.000 rpm)** | **1,4 a 1,6 bar (sobrepresión)** | **Hasta 20 bar (sobrepresión)** |
| **Sistema con Válvula de Expansión (a 2.000 rpm)** | **1,2 a 1,6 bar (sobrepresión)** | **Hasta 20 bar (sobrepresión)** |
| **Sistema con Regulación Externa N280** | **1,5 a 2,5 bar (absolutos)** | **Aumentando hasta 20 bar (o 29 bar máx)** |

## Interpretación y errores frecuentes

- Interpretar una baja presión elevada como fallo de gas sin verificar la corriente de control de N280 en el bloque de valores de medición del climatizador.

## Verificación final

Presiones de HD y ND estabilizadas dentro de los márgenes teóricos del diagrama y producción continua de aire frío en difusores.

## Seguridad y normativa

No abrir las válvulas de paso de la estación estando el motor en marcha.
