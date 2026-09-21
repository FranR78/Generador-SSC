---
id: ssc.sin-clasificar.diagnostico-de-averias-mediante-manometros-con-motor-en-marcha
modulo: ssc
unidad: sin-clasificar
nt: 398
tipo: proceso
subtipo: diagnostico
titulo: "Diagnóstico De Averías Mediante Manómetros Con Motor En Marcha"
menu: "Diagnóstico De Averías Mediante Manóme"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Identificar averías mecánicas del compresor, de la válvula de expansión, del electroventilador o descompensaciones de carga evaluando las presiones de alta y baja a régimen de ralentí y a 2.000 rpm.

## Fundamento

En funcionamiento, el compresor aspira el gas del lado de baja y lo comprime hacia el de alta. El comportamiento de las agujas (valores descompensados o fluctuaciones oscilantes) permite diagnosticar fallos en láminas de válvulas, obstrucciones en el elemento de expansión o deficiencias de intercambio térmico.

## Condiciones previas

- Motor en marcha a régimen de ralentí o acelerado a 2.000 rpm según la prueba.  
- Climatizador / Aire acondicionado conectado a máxima potencia frigorífica.

## Equipo y material

- Puente de manómetros acoplado a las tomas de servicio HD (alta) y ND (baja).

## Desarrollo

- **Presiones normales de trabajo (motor a ralentí):**  
  * Presión de alta: de **14 a 17 bar**.  
  * Presión de baja: de **1 a 2 bar**.  
- **Exceso de líquido refrigerante:**  
  * A ralentí: Alta presión **mayor de 17 bar** y Baja presión **mayor de 2 bar**.  
  * A 2.000 rpm: si a ralentí daba presiones normales pero a 2.000 rpm la Alta sube a **Alta** y la Baja sube a **Alta**, confirma sobrecarga de refrigerante.  
- **Falta de líquido refrigerante:**  
  * A ralentí: Alta presión **menor de 14 bar** y Baja presión **menor de 1 bar**.  
  * A 2.000 rpm: si a ralentí daba normal pero a 2.000 rpm la Alta cae a **Baja** y la Baja cae a **Baja**, confirma falta de refrigerante.  
- **Obstrucción en válvula de expansión:**  
  * A ralentí: Alta presión **mayor de 17 bar** y Baja presión **menor de 1 bar**.  
- **Válvula de expansión abierta:**  
  * A ralentí: Alta presión **normal** (14 a 17 bar) y Baja presión **mayor de 2 bar**.  
- **Válvulas de escape del compresor defectuosas:**  
  * A ralentí: Alta presión **oscilando** y Baja presión **normal** (1 a 2 bar).  
- **Válvulas de admisión del compresor defectuosas:**  
  * A ralentí: Alta presión **normal** (14 a 17 bar) y Baja presión **oscilando**.  
- **Electroventilador del condensador parado:**  
  * A ralentí: Alta presión **alta** (mayor de 17 bar) y Baja presión **normal** (1 a 2 bar).

## Valores de referencia

| Estado del sistema / Avería diagnosticada | Presión de Alta (HP) | Presión de Baja (BP) | Régimen de motor / Condición |
|---|---|---|---|
| **Servicio normal** | **14 a 17 bar** | **1 a 2 bar** | Motor arrancado a ralentí |
| **Exceso de líquido refrigerante** | **> 17 bar** | **> 2 bar** | Motor arrancado a ralentí |
| **Exceso de líquido refrigerante** | **Alta (> 17 bar)** | **Alta (> 2 bar)** | Motor acelerado a 2.000 rpm |
| **Falta de líquido refrigerante** | **< 14 bar** | **< 1 bar** | Motor arrancado a ralentí |
| **Falta de líquido refrigerante** | **Baja (< 14 bar)** | **Baja (< 1 bar)** | Motor acelerado a 2.000 rpm |
| **Obstrucción en válvula de expansión** | **> 17 bar** | **< 1 bar** | Motor arrancado a ralentí |
| **Válvula de expansión abierta** | **Normal (14-17 bar)** | **> 2 bar** | Motor arrancado a ralentí |
| **Válvulas de escape defectuosas** | **Oscilando** | **Normal (1-2 bar)** | Motor arrancado a ralentí |
| **Válvulas de admisión defectuosas** | **Normal (14-17 bar)** | **Oscilando** | Motor arrancado a ralentí |
| **Electroventilador del condensador parado** | **Alta (> 17 bar)** | **Normal (1-2 bar)** | Motor arrancado a ralentí |

## Interpretación y errores frecuentes

- **Diferenciación de válvulas rotas del compresor:**  
  * Aguja de alta **oscilando** con baja normal → fallos en láminas/válvulas de **escape**.  
  * Aguja de baja **oscilando** con alta normal → fallos en láminas/válvulas de **admisión**.  
- **Diferenciación de fallos en válvula de expansión:**  
  * Alta > 17 bar y Baja < 1 bar → válvula de expansión **obstruida/cerrada**.  
  * Alta normal y Baja > 2 bar → válvula de expansión **bloqueada abierta**.  
- **Prueba a 2.000 rpm:** Permite detectar subcargas o sobrecargas leves que a ralentí se disimulan en lecturas aparentemente normales.

## Verificación final

Restablecimiento de los valores nominales (14 a 17 bar en alta y 1 a 2 bar en baja) a ralentí tras corregir la avería.

## Imágenes requeridas

- Lecturas de manómetros en régimen de trabajo a ralentí y 2.000 rpm — Fuente: MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf, pág. 3-12
