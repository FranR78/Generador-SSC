---
id: ssc.clima.carga-de-refrigerante-touareg
modulo: ssc
unidad: clima
nt: 147
tipo: proceso
subtipo: procedimiento
titulo: Carga de agente frigorífico y elementos del circuito
menu: Carga del circuito
grupo: POR CLASIFICAR
aplicacion:
  - VW Touareg
fuentes: VW SSP 301 «Climatización en el Touareg»
---

## Objeto y alcance
Qué lleva el circuito frigorífico de este vehículo y con cuánto refrigerante trabaja. Llega hasta la
cantidad de carga y la identificación de los elementos; no cubre el manejo de la estación de carga.

## Fundamento
Un circuito frigorífico solo da el rendimiento previsto con la cantidad exacta de refrigerante. De
menos no enfría; de más, sube la presión de alta y el rendimiento también cae. Por eso la carga se
mide en gramos y no «hasta que enfríe».

## Condiciones previas
Circuito recuperado con la estación antes de abrir nada, y vehículo identificado: la cantidad de carga
es de ese modelo y esa motorización, no del taller.

## Equipo y material
Estación de recuperación y carga, y el agente frigorífico del tipo que pide el vehículo. En este
circuito, **R134a**.

## Desarrollo
Los elementos que componen el circuito, según el manual:

1. **Filtro deshidratador**, que retiene la humedad, filtra los residuos de la abrasión y evita que se
   formen burbujas en el circuito.
2. **Válvula de expansión**, donde se controlan la presión y el caudal del agente frigorífico.
3. **Evaporador**, en la unidad climática, donde se produce la expansión y el intercambio de calor con
   el aire que entra al habitáculo.
4. **Compresor**, que genera la presión: autorregulado, de 7 cilindros.
5. **Silenciador**, en el circuito de baja presión y cerca del compresor, para amortiguar el ruido de
   las ondas de presión entre la válvula de expansión y el compresor.
6. En el circuito de alta, junto a la válvula de expansión, el **conmutador de presión F129** o el
   **transmisor electrónico G65**, según motorización.

## Valores de referencia
| Dato | Valor | Origen |
|---|---|---|
| Carga del circuito | 750 ± 50 g de R134a | Teórico OEM |
| Tarado de la válvula de seguridad | 44 bares | Teórico OEM |
| Conexión del electroventilador | 16 bares | Teórico OEM |

## Interpretación y errores frecuentes
El error más repetido es cargar «a ojo» mirando solo los manómetros. Con el compresor autorregulado,
además, las presiones no responden igual que en un circuito con embrague, así que la lectura de
manómetros por sí sola despista todavía más. La cantidad se pesa.

El silenciador desorienta a quien no lo conoce: no filtra ni regula nada, solo amortigua ruido. No es
un elemento a sustituir cuando el sistema no enfría.

## Verificación final
Carga pesada dentro de tolerancia, ausencia de fugas comprobada, y temperatura de salida del aire
coherente con la temperatura ambiente.

## Seguridad y normativa
El R134a es un gas fluorado: su recuperación es obligatoria y no puede liberarse a la atmósfera.
Manipular el circuito cargado es la causa habitual de quemaduras por frío.
