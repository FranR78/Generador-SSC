---
id: ssc.sin-clasificar.comprobacion-de-la-potencia-frigorifica-y-salto-termico
modulo: ssc
unidad: clima
nt: 176
tipo: proceso
subtipo: diagnostico
titulo: "Comprobación De La Potencia Frigorífica Y Salto Térmico"
menu: "Comprobación De La Potencia Frigorífic"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Establecer el procedimiento de verificación del rendimiento del circuito frigorífico midiendo la temperatura de salida del evaporador y el salto térmico en los difusores centrales. Se aplica en el diagnóstico de falta de rendimiento del aire acondicionado.

## Fundamento

Con el compresor trabajando a plena carga (N280 alimentada a 0,65 A), el R134a ebulle en el evaporador absorbiendo la energía del aire soplado. La sonda de temperatura de salida del evaporador -G263- permite verificar la regulación de la masa de refrigerante. Contrastando la lectura de -G263- con la temperatura ambiente y las presiones del circuito se aísla si el fallo es de compresión, carga de gas o de regulación de trampillas.

## Condiciones previas

- Temperatura ambiente exterior > 15 ºC.  
- Motor a temperatura de servicio (> 80 ºC).  
- Correa Poly-V y condensador limpios y en buen estado.  
- Puertas, ventanillas y capó delantero cerrados.  
- Climatizador en modo "Auto", preselección de temperatura en "LO" (mínima), compresor activado (AC ON), turbina a régimen máximo (nivel 10) y difusores del salpicadero abiertos.

## Equipo y material

- Equipo de diagnosis OBD (VAS 5051 / VAS 5052).  
- Termómetro digital de varilla / contacto para difusores.

## Desarrollo

1. Conectar el equipo de diagnosis y verificar en el bloque 001 que la corriente de N280 sea > 0,55 A y la presión en el campo 4 se eleve normalmente.  
2. Seleccionar el modo de **recirculación de aire** e incrementar el régimen del motor a **2.000 rpm constantes** durante 5 minutos.  
3. Acceder al bloque de valores de medición **grupo 035 campo 1** para leer la temperatura de la sonda del evaporador -G263-.  
4. Comparar la lectura de -G263- con la gráfica de tolerancia oficial:  
   - A 20 ºC ambiente: La temperatura de -G263- debe situarse entre **2 ºC y 5 ºC**.  
   - A 30 ºC ambiente: La temperatura de -G263- debe situarse entre **3 ºC y 7 ºC**.  
5. Medir con el termómetro de sonda la temperatura del aire expelido por los difusores centrales del tablero (debe ser como máximo 5 ºC superior a la temperatura indicada por -G263-).

## Valores de referencia

| Temperatura Ambiente | Temp. Teórica Evaporador (-G263-) | Presión Alta (HP) en Trabajo |
|---|---|---|
| **15 ºC a 20 ºC** | 2,0 ºC a 5,0 ºC | 9,0 a 14,0 bar |
| **25 ºC a 30 ºC** | 3,0 ºC a 7,0 ºC | 12,0 a 18,0 bar |
| **35 ºC a 40 ºC** | 5,0 ºC a 9,0 ºC | 16,0 a 24,0 bar |

## Interpretación y errores frecuentes

- **Presión HP no sube y G263 > 10 ºC:** Subcarga de refrigerante R134a por fugas o válvula N280 averiada.  
- **Presión HP > 25 bar y G263 > 10 ºC:** Falta de condensación; comprobar suciedad en el condensador o fallo de los electroventiladores V7/V177.  
- **G263 < 0 ºC sostenido con pérdida de caudal:** Congelación del evaporador por humedad en el circuito o sonda G263 descalibrada.

## Verificación final

Estabilización de la lectura de temperatura en los difusores centrales dentro de los márgenes de la curva de tolerancia.

## Imágenes requeridas

- Gráfica de tolerancia de la temperatura de salida del evaporador G263 en función de la temperatura ambiente — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 317
