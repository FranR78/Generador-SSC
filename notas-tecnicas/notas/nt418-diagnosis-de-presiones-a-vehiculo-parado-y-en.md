---
id: ssc.sin-clasificar.diagnosis-de-presiones-a-vehiculo-parado-y-en-marcha
modulo: ssc
unidad: clima
nt: 418
tipo: proceso
subtipo: diagnostico
titulo: "Diagnosis De Presiones A Vehículo Parado Y En Marcha"
menu: "Diagnosis De Presiones A Vehículo Para"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Diagnosticar el estado de la carga de refrigerante, presencia de aire, obstrucciones o fallos en el compresor evaluando las presiones en manómetros a motor parado, a ralentí y a 2.000 rpm.

## Fundamento

- **A motor parado:** La presión se iguala en el circuito según la temperatura ambiente/condensador.  
- **En marcha:** La diferencia entre la alta y la baja presión refleja el rendimiento de la compresión y la expansión.

## Condiciones previas

Calibración previa a cero de las agujas del puente de manómetros con las mangueras al aire.

## Equipo y material

Puente de manómetros (LO/HI) y termómetro de contacto/ambiente.

## Desarrollo y diagnóstico

* **Comprobación a motor parado:**  
  - Carga correcta: 6,5 bar en baja a 24 ºC - 26 ºC en condensador y ambiente.  
  - Falta de líquido: 6,5 bar a 30 ºC ambiente/condensador.  
  - Aire en el circuito (asociación de gases): 7,5 bar a 24 ºC - 26 ºC ambiente.  
  - Exceso de carga: 7,5 bar a 24 ºC - 26 ºC ambiente con motor frío.  
* **Comprobación a motor arrancado a ralentí:**  
  - Presiones normales: Baja = **1 a 2 bar** / Alta = **14 a 17 bar**.  
  - Exceso de líquido: Baja > **2 bar** / Alta > **17 bar**.  
  - Falta de líquido: Baja < **1 bar** / Alta < **14 bar**.  
  - Obstrucción en válvula de expansión: Baja < **1 bar** / Alta > **17 bar**.  
  - Válvula de expansión abierta: Baja > **2 bar** / Alta = **14 a 17 bar (Normal)**.  
  - Electroventilador parado: Baja = **Normal** / Alta = **Alta (> 17 bar)**.  
  - Válvulas de escape del compresor defectuosas: Baja = **Normal** / Alta = **Oscilando**.  
  - Válvulas de admisión del compresor defectuosas: Baja = **Oscilando** / Alta = **Normal**.  
* **Comprobación a 2.000 rpm:**  
  - Falta de líquido: Normal a ralentí, pero a 2.000 rpm la baja pasa a **Baja** y la alta a **Baja**.  
  - Exceso de líquido: Normal a ralentí, pero a 2.000 rpm la baja pasa a **Alta** y la alta a **Alta**.

## Valores de referencia

| Parámetro ambiental | Temperatura Condensador (+20 ºC) | Presión de Alta Mínima (En reposo) |
|---|---|---|
| **20 ºC ambiente** | **40 ºC** | **9 bares** |
| **30 ºC ambiente** | **50 ºC** | **12 bares** |
| **40 ºC ambiente** | **60 ºC** | **15,5 bares** |

## Interpretación y errores frecuentes

- Confundir láminas rotas de admisión con las de escape: aguja de baja oscilando indica admisión defectuosa; aguja de alta oscilando indica escape defectuoso.

## Verificación final

Obtención de presiones nominales (1-2 bar en BP / 14-17 bar en AP) tras realizar la corrección.

## Imágenes requeridas

- Manómetros de prueba y diagnóstico de presiones — Fuente: MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf, pág. 41-46
