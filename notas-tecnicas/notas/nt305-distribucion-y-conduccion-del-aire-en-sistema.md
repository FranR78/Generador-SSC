---
id: ssc.sin-clasificar.distribucion-y-conduccion-del-aire-en-sistema-climatizador-dual
modulo: ssc
unidad: sin-clasificar
nt: 305
tipo: proceso
subtipo: fundamento
titulo: "Distribución Y Conducción Del Aire En Sistema Climatizador Dual"
menu: "Distribución Y Conducción Del Aire En "
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Describir la distribución de aire con regulación de temperatura independiente para los lados izquierdo y derecho del habitáculo (ej. Audi A6 / Golf / Audi A3).

## Fundamento

Divide la carcasa de distribución de aire en dos canales independientes conducidos por servomotores específicos para cada lado.

## Condiciones previas

Encendido conectado y consignas térmicas seleccionadas en el panel E87.

## Equipo y material

Equipo de autodiagnóstico OBD.

## Desarrollo

* **Distribución de servomotores en sistema dual:**  
  - **V71 (con potenciómetro G113):** Servomotor para chapaletas de velocidad y aire fresco/recirculación.  
  - **V107 (con potenciómetro G135):** Servomotor para chapaleta de descongelación del parabrisas.  
  - **V158 (con potenciómetro G220):** Servomotor para chapaleta de temperatura del lado izquierdo.  
  - **V159 (con potenciómetro G221):** Servomotor para chapaleta de temperatura del lado derecho.  
  - **V70 (con potenciómetro G112):** Servomotor para chapaleta central y vano reposapiés.  
  - **V2 / J126:** Turbina de aire fresco y unidad de control de la turbina.

## Valores de referencia

| Parámetro de ajuste | Margen numérico |
|---|---|
| **Ajuste de temperatura dual** | **18 ºC a 29 ºC** independientes para lado izquierdo y derecho |

## Interpretación y errores frecuentes

- Fallo en el servomotor V158: el lado izquierdo no responderá a los cambios de temperatura seleccionados, permaneciendo en frío o caliente.

## Verificación final

Verificación de diferencias térmicas efectivas entre las toberas izquierdas y derechas.

## Imágenes requeridas

- Cuadro general del sistema de climatización regulado electrónicamente dual — Fuente: CLIMATIZADOR MD FRAN.docx, pág. 153-154
