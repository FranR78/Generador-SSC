---
id: ssc.sin-clasificar.sustitucion-de-compresor-de-regulacion-externa-por-compresor-con-embrague
modulo: ssc
unidad: clima
nt: 513
tipo: proceso
subtipo: procedimiento
titulo: "Sustitución De Compresor De Regulación Externa Por Compresor Con Embrague"
menu: "Sustitución De Compresor De Regulación"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Establecer la adaptación eléctrica para sustituir un compresor de regulación externa electrónica (sin embrague, tipo Denso 6SEU12) por un compresor convencional provisto de embrague electromagnético.

## Fundamento

Permite interconectar la salida de excitación por impulsos de la UCE con la bobina electromagnética de 12 V de un compresor estándar utilizando un relé de conmutación.

## Condiciones previas

Encendido desconectado y circuito despresurizado.

## Equipo y material

Relé estándar automotriz de 5 patillas, cableado, fusible de protección y máquina de diagnosis oficial (para el método oficial).

## Desarrollo

- **Proceso Recomendado por Opel (Método Oficial):**  
  1. Conectar el cable +12 V procedentes de la antigua electroválvula reguladora al cable positivo (marrón) del nuevo compresor.  
  2. Conectar un positivo directo de batería (+) protegido con fusible al terminal 86 del relé.  
  3. Conectar un negativo directo de batería (-) al terminal 30 del relé.  
  4. Conectar el cable de negativo por impulsos (-) de la antigua electroválvula al terminal 85 del relé.  
  5. Conectar la salida del terminal 87 del relé al cable de negativo (negro/blanco) del nuevo compresor.  
  6. Reprogramar la UCE del vehículo con la máquina de diagnosis original para cambiar la salida de negativo por impulsos (-) a negativo continuo (-).  
- **Proceso Alternativo Extraoficial (Sin reprogramación de UCE):**  
  1. Conectar el cable negativo (negro/blanco) del nuevo compresor a masa/negativo directo de batería (-).  
  2. Conectar un positivo directo de batería (+) protegido con fusible al terminal 30 del relé.  
  3. Conectar el terminal 86 del relé a negativo directo de batería (-).  
  4. Conectar el cable +12 V de la antigua electroválvula al terminal 85 del relé.  
  5. Conectar el terminal 87 del relé al cable positivo (marrón) del nuevo compresor.  
  6. Anular y aislar el cable (-) por pulsos de la antigua electroválvula.

## Valores de referencia

| Terminal del relé | Alimentación / Conexión |
|---|---|
| **Terminal 30** | Positivo (+) de batería con fusible (o Masa - en método Opel) |
| **Terminal 85 / 86** | Excitación de bobina desde señal de climatización / Masa |
| **Terminal 87** | Salida de alimentación hacia el nuevo compresor |

## Interpretación y errores frecuentes

- En el método oficial, omitir la reconfiguración de la centralita con la diagnosis provocaría la vibración constante del relé debido a la frecuencia de impulsos.

## Verificación final

Acoplamiento firme y silencioso del embrague electromagnético al accionar el interruptor de A/C.

## Seguridad y normativa

Instalar siempre un fusible aéreo de protección en la línea directa de batería.

## Imágenes requeridas

- Esquema eléctrico de conexiones del relé para sustitución de compresores — Fuente: ZZAA AUTOMOCION 1 Enero 2010 HELLA.pptx, pág. 164-169
