---
id: ssc.clima.lectura-e-interpretacion-de-manometros
modulo: ssc
unidad: clima
nt: 32
tipo: proceso
subtipo: diagnostico
titulo: Lectura e interpretación de manómetros
menu: Lectura de manómetros
grupo: Diagnóstico
fuentes: AA Automoción (Hella), apartados 10, 11 y 16, págs. 113-118 y 130-145
---

## Objeto y alcance
Diagnosticar el estado del circuito a partir de la pareja de lecturas de alta y baja
presión. Es la herramienta de diagnóstico principal y la más rápida: antes de desmontar
nada, las dos agujas ya dicen por dónde va la avería.

## Fundamento
Cada componente del circuito impone una restricción o un aporte de presión conocidos. Una
obstrucción, una fuga o un fallo de regulación desplazan las dos presiones de forma
característica, por lo que **el par de valores identifica la causa** mejor que cualquiera de
los dos por separado.

## Condiciones previas
| Parámetro | Valor |
|---|---|
| Temperatura exterior de referencia | **30 °C** |
| Régimen del motor | **1.500 a 1.800 rpm** |
| Equipo | Máximo o reciclaje, ventilador del evaporador al máximo |
| Tiempo de estabilización | 15 a 30 minutos |

La presión varía **0,7 bar por cada 3,5 °C** de temperatura ambiente. Con 23,5 °C la presión
de referencia es de 5,6 bar. Sin corregir por temperatura, la lectura no significa nada.

## Equipo y material
Estación de carga con manómetros de alta y baja, termómetro de contacto, y spray enfriador o
refrigerante líquido para las pruebas de contraste.

## Desarrollo
| Baja | Alta | Diagnóstico |
|---|---|---|
| 1,8 – 2,1 bar | 6 – 13 bar | Cilindrada variable, **correcto** |
| 2,2 – 0,8 bar | 8 – 20 bar | Cíclico, **correcto** (0,8 solo con ambiente muy seco) |
| 0,5 – 0,8 bar | 6 – 8 bar | Falta de refrigerante o válvula de alta semicerrada |
| 3 – 3,8 bar | 12 – 14 bar | Bulbo de la válvula suelto |
| 3,5 – 4,5 bar | 10 – 14 bar | Válvula de expansión demasiado abierta |
| 0 bar → vacío | 10 – 13 bar | Válvula cerrada u obturada, o bulbo roto |
| Sobre 0 bar | 4 – 6 bar | Válvulas de baja tapadas, o gota de hielo en la expansión |
| 2,2 – 2,5 bar | 10 – 12 bar | Válvula de baja comunicada |
| Casi 0 bar | 7 – 10 bar | Evaporador congelado |
| 2,5 – 2,7 bar | 16 – 18 bar | Exceso de refrigerante |
| 2,3 – 2,5 bar | Sobre 22 bar | Electroventilador girando al revés |
| 2,3 – 2,8 bar | Sobre 25 bar | Electroventilador parado o condensador tapado |
| 4,5 – 5,7 bar | 21 – 27 bar | Filtro deshumidificador obstruido |
| 1,8 bar | 12 – 15 bar | No sale aire frío: trampillas de calefacción |
| 4,5 – 4,8 bar | 7 – 8 bar | Tubos de aspiración y descarga invertidos |
| 4,5 – 6 bar | Igual a la baja | No conecta el compresor o patina el embrague |
| 0 bar | 0 bar | Manómetros sin conectar, u obuses sin pinchar |
| 1 atm de depresión | Aguja al tope | Vacío efectuado: prueba de estanqueidad |

## Valores de referencia
| Tipo de compresor | Alta | Baja |
|---|---|---|
| Cíclico o de cilindrada fija | 10 a 20 bar | 0,8 a 2,2 bar |
| Cilindrada variable | 7,5 a 13 bar | 1,8 a 2,2 bar |

Otras comprobaciones de un equipo correcto: temperatura interior en torno a **22 °C** tras
30 minutos (con 36 °C exteriores y 60 % de humedad), salida del salpicadero entre **8 y
4 °C**, circuito de alta uniformemente caliente y el de baja uniformemente frío.

## Interpretación y errores frecuentes
Cuatro pares de casos dan lecturas parecidas y se distinguen así:

1. **Falta de gas o válvula de alta semicerrada:** añadir 50-100 g de refrigerante. Si los
   manómetros no reaccionan, es la válvula.
2. **Válvulas tapadas o gota de hielo:** si es hielo, al parar y rearrancar el equipo el
   síntoma desaparece, y reaparece al volver a pasar humedad.
3. **Condensador sucio por dentro:** regar su parte superior con agua. Si la aguja de alta
   baja mientras dura el riego, está sucio internamente.
4. **Válvulas del compresor comunicadas:** enfriar el bulbo hasta 0 bar y parar el
   compresor. Si la aguja de baja sube con rapidez, las presiones se comunican.

El exceso de refrigerante es **bastante más frecuente de lo que se imagina**: un circuito de
800 g al que se le han metido 1.100 g da baja alta y alta algo alta, con el ventilador
funcionando sin parar.

## Verificación final
Un equipo correcto debe mostrar además el visor libre de burbujas, y el presostato y el
termostato conectando y desconectando el compresor según su tarado.

## Advertencias
Para terminar de cargar por baja, hazlo **en pequeñas dosis**, con el motor al ralentí y sin
acelerar. Nunca de golpe: el refrigerante líquido llegaría al compresor.
