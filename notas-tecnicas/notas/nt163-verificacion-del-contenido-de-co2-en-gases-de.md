---
id: ssc.sin-clasificar.verificacion-del-contenido-de-co2-en-gases-de-escape
modulo: ssc
unidad: sin-clasificar
nt: 163
tipo: proceso
subtipo: diagnostico
titulo: "Verificación Del Contenido De Co2 En Gases De Escape"
menu: "Verificación Del Contenido De Co2 En G"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Describir la medición del porcentaje de dióxido de carbono (CO2) en los gases de escape de la calefacción independiente [147, 148]. Se aplica para comprobar la calidad de la combustión tras sustituir componentes (turbina -V6-, quemador, bujía -Q9-) o ante la emisión de humo [47, 85, 146].

## Fundamento

El porcentaje de CO2 en los gases quemados refleja la proporción exacta entre el aire introducido por la turbina -V6- y el combustible inyectado por la bomba -V54- [32, 147]. Valores fuera de tolerancia indican desajustes de caudal o restricciones en la aspiración/escape [85].

## Condiciones previas

- Depósito con suficiente combustible y batería cargada [147].  
- Memoria de averías consultada y sin registros [149].  
- Calefactor funcionando en régimen de plena carga estabilizado durante al menos 4 minutos [150, 151].

## Equipo y material

- Estación de análisis de gases de escape homologada (-VAS 6300-) [152].  
- Sonda de extracción de gases con tubo flexible [149, 153].  
- Equipo de diagnosis (VAS 5051 / VAS 5052) [152].

## Desarrollo

1. Arrancar el motor del vehículo y conectar el equipo de diagnosis [149, 154].  
2. Introducir la sonda de gases -B- de la estación -VAS 6300- en el tubo de escape -A- del calefactor [149].  
3. Seleccionar la temperatura máxima ("HI") en el climatizador y ajustar la turbina de aire al 50% [153].  
4. Activar la calefacción independiente (vía MMI o por Ajuste Básico grupo "011" u "022") [150, 155].  
5. Desacoplar opcionalmente el conector de la válvula -N279- para forzar al calefactor a trabajar a plena carga sin calentar el motor prematuramente [151].  
6. Esperar a que el calefactor alcance el modo de plena carga y mantenerlo funcionando ahí durante un mínimo de 1 minuto adicional [150, 151].  
7. Leer el valor del porcentaje en volumen de CO2 mostrado en el analizador [156]. Si la aguja oscila, calcular la media aritmética entre el valor máximo y mínimo leídos [137].

## Valores de referencia

| Tipo de Combustible | Valor nominal de CO2 (% en volumen) | Condiciones de medición |
|---|---|---|
| Motor Diésel | 8,0 % a 11,0 % en vol. | Plena carga estabilizada tras 4 min [145] |
| Motor Gasolina | 7,5 % a 10,5 % en vol. | Plena carga estabilizada tras 4 min [145] |

## Interpretación y errores frecuentes

- Valores de CO2 bajos (< 9% en diésel / < 8,5% en gasolina): Provocan fallos de combustión al circular a altas velocidades; verificar el caudal de la bomba dosificadora -V54- [137, 145].  
- Valores fuera de norma con caudal de bomba correcto: Comprobar la existencia de suciedad o estrechamientos en la tubería de aspiración de aire o en el tubo de escape, o fallo en la turbina -V6- [85].  
- Oscilación fuerte de la lectura (> ±0,6%): La sonda de medición está mal posicionada dentro del tubo de escape [137].

## Verificación final

Reacoplar el conector de la válvula -N279-, consultar y borrar la memoria de averías y hacer funcionar el sistema durante 10 minutos a plena carga [146, 151, 156].

## Seguridad y normativa

Peligro de quemaduras graves: No tocar con las manos desnudas la sonda de gases ni el tubo de escape del calefactor durante o inmediatamente después de la prueba, ya que alcanzan temperaturas extremadamente elevadas [149].

💡 ¿Quieres que continuemos ahora procesando el documento «Audi A5 Coupé_2008_aire acondicionado.pdf» para redactar las notas de los componentes de climatización del habitáculo y vano motor?
