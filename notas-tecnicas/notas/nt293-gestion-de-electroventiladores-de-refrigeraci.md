---
id: ssc.sin-clasificar.gestion-de-electroventiladores-de-refrigeracion-y-condensador
modulo: ssc
unidad: sin-clasificar
nt: 293
tipo: proceso
subtipo: fundamento
titulo: "Gestión De Electroventiladores De Refrigeración Y Condensador"
menu: "Gestión De Electroventiladores De Refr"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar la lógica de activación y conmutación de velocidad de los electroventiladores gobernados por la UCE J293.

## Fundamento

Garantiza el flujo de aire fresco a través del radiador y del condensador, gestionando las velocidades 1 y 2 según la temperatura del motor (F18) y la alta presión del circuito (F129/F118).

## Condiciones previas

Motor en marcha y climatizador activado o temperatura de refrigerante elevada.

## Equipo y material

Esquema de conexiones y polímetro.

## Desarrollo

* **Lógica de funcionamiento combinada:**  
  - **Escalón 1 de velocidad:** Se activa cuando el climatizador está ON y la presión es > 0,2 MPa (2 bar), o cuando F18 detecta temperatura de líquido refrigerante entre 92 ºC y 97 ºC. Ambos ventiladores giran a baja velocidad.  
  - **Escalón 2 de velocidad:** Se activa si la alta presión supera 1,6 MPa (16 bar), o si F18 detecta temperatura de líquido refrigerante entre 99 ºC y 105 ºC. Ambos ventiladores giran a máxima velocidad.  
  - **Retorno a Escalón:** Cuando la alta presión desciende de 1,6 MPa (16 bar) y la temperatura de líquido desciende de 99 ºC.

## Valores de referencia

| Condición de mando | Umbral de activación (ON) | Umbral de desconexión (OFF) |
|---|---|---|
| **F18 - Escalón I (Temp. Agua)** | **92 ºC a 97 ºC** | **84 ºC a 91 ºC** |
| **F18 - Escalón II (Temp. Agua)** | **99 ºC a 105 ºC** | **91 ºC a 98 ºC** |
| **F129 - Escalón II (Alta Presión)** | **1,6 MPa (16 bar)** | Por debajo de 1,6 MPa (16 bar) |
| **Clima ON (Presión > 0,2 MPa / 2 bar)** | **Escalón 1 permanente** | Al apagar el clima |

## Interpretación y errores frecuentes

- Si no salta la velocidad 2 al subir la presión a 16 bar: la presión de alta continuará elevándose hasta provocar la desconexión del compresor por F129/F118 a 30-32 bar.

## Verificación final

Comprobación del giro de ambos electroventiladores en velocidad 1 y velocidad 2 según presiones leídas.

## Imágenes requeridas

- Tabla de conmutación combinada para 2 electroventiladores — Fuente: CLIMATIZADOR MD FRAN.docx, pág. 122
