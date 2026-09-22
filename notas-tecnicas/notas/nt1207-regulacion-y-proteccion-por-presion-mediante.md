---
id: ssc.sin-clasificar.regulacion-y-proteccion-por-presion-mediante-presostato-trinario
modulo: ssc
unidad: sin-clasificar
nt: 1207
tipo: proceso
subtipo: fundamento
titulo: "Regulación Y Protección Por Presión Mediante Presostato Trinario"
menu: "Regulación Y Protección Por Presión Me"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la lógica de control, los umbrales de disparo y las condiciones de seguridad hidráulica y eléctrica gobernadas por el conmutador de presión trinario en el tramo de alta. Aplica al diagnóstico y mantenimiento de sistemas de aire acondicionado.

## Fundamento

Protección activa del circuito presurizado. Para evitar la destrucción del compresor por falta de lubricante (en caso de fuga) o el reventón de componentes por sobrepresión (falta de condensación), el presostato trinario desconecta la alimentación del embrague electromagnético e intensifica el caudal de aire forzado sobre el condensador cuando la presión se eleva.

## Condiciones previas

Motor térmico en marcha, sistema A/C activado y conector del presostato trinario acoplado.

## Equipo y material

Puente de manómetros de climatización, polímetro digital y estación de servicio de A/C.

## Desarrollo

* **Lógica de Funcionamiento del Conmutador Trinario:**
  1. *Corte por baja presión (P < 2 bar):* Cuando la presión en el tramo de alta cae por debajo de 2 bares debido a una fuga de refrigerante, se abren los contactos de los bornes 1 y 2, interrumpiendo la alimentación del embrague electromagnético para proteger el compresor.
  2. *Conexión del electroventilador (P > 16 bar):* Al alcanzar los 16 bares en el tramo de alta, se cierran los contactos de los bornes 3 y 4, alimentando el electroventilador a máxima velocidad para refrigerar el condensador y reducir la presión.
  3. *Corte por alta presión (P > 24 a 32 bar):* Si la presión aumenta hasta situarse entre 24 y 32 bares (por exceso de suciedad en el condensador u obturación del circuito), se abren de nuevo los contactos 1 y 2, desactivando el compresor por seguridad.
* **Evolución técnica:** En modelos actuales, el presostato mecánico trinario ha sido reemplazado por un sensor de presión de señal continua (sensor MAP).

## Valores de referencia

| Umbral de Presión (Tramo de Alta) | Estado de Bornes del Presostato | Condición Técnica y Causa |
| :--- | :--- | :--- |
| **P < 2 bar** | Abre bornes 1 y 2 (Corte de compresor) | Fuga de fluido refrigerante en el circuito |
| **P > 16 bar** | Cierra bornes 3 y 4 (Marcha electroventilador) | Incremento de presión; optimización de condensación |
| **P > 24 a 32 bar** | Abre bornes 1 y 2 (Corte de compresor) | Sobrepresión; suciedad en condensador u obturación |

## Interpretación y errores frecuentes

* Diagnosticar un fallo eléctrico en el compresor sin medir la presión hidráulica del circuito; si la presión cae de 2 bar por fuga de gas, el presostato trinario actúa correctamente impidiendo la marcha del compresor.
* Puentear los bornes 1 y 2 de forma permanente para forzar la marcha del compresor sin refrigerante; provoca el gripado del compresor por falta de retorno de aceite.

## Verificación final

Comprobar que el embrague del compresor se acopla con presiones de alta entre 2 bar y 24-32 bar, y verificar la activación del electroventilador a máxima velocidad al superar los 16 bar en el manómetro de alta.

## Seguridad y normativa

Prohibido anular o puentear de forma permanente los dispositivos presostáticos de seguridad del circuito de A/C.

💡 ¿Quieres que preparemos una guía de diagnóstico paso a paso para el control del presostato trinario o una hoja de ejercicios prácticos para medir sus bornes en el taller?

## Imágenes requeridas

- Esquema del conmutador trinario, bornes de accionamiento (1 y 2 para compresor, 3 y 4 para electroventilador) y valores de presión — Fuente: Trinary y conmutadores.pdf, pág. 88
