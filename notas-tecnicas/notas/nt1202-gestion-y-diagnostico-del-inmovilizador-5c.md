---
id: ssc.sin-clasificar.gestion-y-diagnostico-del-inmovilizador-5c
modulo: ssc
unidad: sin-clasificar
nt: 1202
tipo: proceso
subtipo: diagnostico
titulo: "Gestión Y Diagnóstico Del Inmovilizador 5C"
menu: "Gestión Y Diagnóstico Del Inmovilizado"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la arquitectura, unidades maestras/esclavas y procedimiento de lectura de valores de medición del inmovilizador 5C.

## Fundamento

El inmovilizador 5C equipa un nuevo transponder en las llaves y medidas de seguridad reforzadas. El cuadro J285 actúa como unidad maestra y valida los códigos de las unidades esclavas.

## Condiciones previas

Contacto encendido (+15) y máquina de diagnosis conectada.

## Equipo y material

Equipo de diagnosis con acceso a dirección 17 (Cuadro de instrumentos) y conexión online a servidor FAZIT/Geko.

## Desarrollo

* **Componentes del inmovilizador 5C:**
  * **Unidad de control maestra:** Cuadro de instrumentos J285.
  * **Unidades de control esclavas:** UCE del motor J623, UCE mecatrónica del cambio DSG J743 y actuador de bloqueo de la columna N360.
  * **Elementos de lectura:** Transponder de la llave y bobina lectora D2 (o sistema J518).
* **Consulta de Valores de Medición (Dirección 17):**
  1. **Estado de la unidad maestra:** Código hexadecimal de 20 cifras:
     * *Dígitos:* Estado del inmovilizador (**1:** virgen, **2:** adaptado, **3:** adaptando llaves).
     * *Dígitos:* Contador de nuevas identidades.
     * *Dígitos:* Número de llaves adaptadas.
     * *Dígitos:* Tiempo restante para conectar borne 15 tras un bloqueo.
     * *Dígitos:* Tiempo de bloqueo para descarga en FAZIT.
     * *Dígitos:* Tiempo de bloqueo en minutos para realizar el acceso a Geko.
  2. **Estado de los esclavos:** Código hexadecimal de 2 cifras (convertible a código binario de 8 cifras) para verificar si la unidad esclava está codificada, adaptada, si responde o si tiene contraseña/firma digital válida.

## Valores de referencia

| Código de Medición (Dir. 17) | Posición de Dígitos | Significado de la Información |
| :--- | :--- | :--- |
| **Estado Maestra (Hex 20 cifras)** | Dígitos 1-2 | 1: virgen / 2: adaptado / 3: adaptando llaves |
| **Estado Maestra (Hex 20 cifras)** | Dígitos 9-10 | Número de llaves adaptadas en el sistema |
| **Estado Maestra (Hex 20 cifras)** | Dígitos 17-18 | Tiempo de bloqueo en minutos para acceso a Geko |

## Interpretación y errores frecuentes

* Intentar adaptar unidades esclavas usadas de la generación 5A previa; la generación 5C utiliza una firma digital incompatible.

## Verificación final

Confirmar que el motor arranca sin pararse a los 2 segundos y la ausencia de códigos de avería de inmovilizador en J285 y J623.

## Seguridad y normativa

Protección antirrobo del vehículo conforme a normativa europea de homologación.

## Imágenes requeridas

- Esquema de componentes y red de comunicación del inmovilizador 5C — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, pág. 50
