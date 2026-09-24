```yaml
tipo: fundamento
titulo: Cierre centralizado en la red de a bordo
entidad: cierre-centralizado
area: confort-y-seguridad
sistema: NUEVO-cierre-y-bloqueo
fabricante: SEAT
fuente: "SSP 168 SISTEMA ELÉCTRICO Confort.pdf"
paginas: "39-41"
relacionados: [unidad-control-red-a-bordo]
palabras: [cierre centralizado, bloqueo safe, bloqueo por velocidad, bloqueo automatico, borne s]
```

## Objeto
Gestionar el bloqueo y desbloqueo de las puertas y portón del vehículo bajo diversas condiciones de seguridad e interacción del usuario. (pág. 39)

## Fundamento
La unidad de control de la red de a bordo J519 actúa como unidad maestra y coordina las funciones del cierre centralizado procesando señales de la llave, sensores de choque, ABS e interruptores. (págs. 39-41)

## Desarrollo
El cierre centralizado asume las siguientes funciones:
- Bloqueo simple o SAFE: se realiza al recibir señales del mando a distancia, cerradura de puerta o unidad J518 (acceso y arranque).
- Bloqueo por velocidad: se activa al superar los 15 km/h con la señal de velocidad enviada por la UCE del ABS J104 a través del CAN-Bus.
- Bloqueo automático: si tras desbloquear con el mando no se abre ninguna puerta en 45 segundos, las puertas se vuelven a bloquear de forma automática.
- Desbloqueo por borne S: desbloquea las cerraduras al extraer la llave del conmutador de encendido tras haber conectado el contacto.
- Desbloqueo por activación del airbag: recibe por CAN-Bus la señal de colisión de la UCE del airbag J234 y desbloquea inmediatamente todas las puertas.
- Desbloqueo del portón: accionado por el conmutador E165.
- Avisos de confirmación: la UCE J519 realiza 1 destello de intermitentes al bloquear y 2 destellos al desbloquear. (págs. 39-41)

📷 IMAGEN: Esquema del circuito del cierre centralizado con UCE J519, unidades de cierre VX21 a VX25 e interconexión CAN-Bus — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, pág. 40

## Valores de referencia
- Umbral de velocidad para bloqueo automático: mayor a 15 km/h.
- Tiempo para rebloqueo automático sin apertura de puerta: 45 segundos.
- Destellos de confirmación de intermitentes: 1 destello al bloquear / 2 destellos al desbloquear. (págs. 39-40)

## Errores de concepto frecuentes
Creer que el desbloqueo por impacto requiere una conexión cableada directa entre la UCE de airbag y las cerraduras. La señal de colisión se transmite digitalmente a través de la red CAN-Bus a la unidad J519. (págs. 39-41)

---

```yaml
tipo: fundamento
titulo: Elevalunas eléctricos y funciones de confort
entidad: elevalunas-electricos
area: confort-y-seguridad
sistema: NUEVO-elevalunas
fabricante: SEAT
fuente: "SSP 168 SISTEMA ELÉCTRICO Confort.pdf"
paginas: "42-43"
relacionados: [unidad-control-red-a-bordo]
palabras: [elevalunas, normalizacion, apertura de confort, antiaprisionamiento, proteccion termica, lin-bus]
```

## Objeto
Gobernar el movimiento de los cristales de las puertas garantizando la protección antiaprisionamiento, el confort de manejo y la seguridad térmica de los motores. (págs. 42-43)

## Fundamento
Las unidades de control de puerta (J386, J387, J388, J389) comunican los cambios de estado de los conmutadores a la UCE de red de a bordo J519 mediante el LIN-Bus puertas, autorizando J519 la subida o bajada. (págs. 42-43)

## Desarrollo
El sistema abarca las siguientes funciones:
- Subida y bajada: comandada desde los pulsadores de las puertas bajo autorización de la UCE J519.
- Normalización: proceso de aprendizaje mediante el cual las UCEs de puerta reconocen los topes mecánicos superior e inferior. Se realiza subiendo manualmente el cristal al tope superior, liberando el pulsador y volviéndolo a mantener en subida unos segundos, para ejecutar luego una bajada automática.
- Apertura y cierre de confort: permite subir o bajar todos los cristales desde la cerradura, mando a distancia o manilla con sistema sin llave (requiere haber realizado la normalización previa).
- Antiaprisionamiento: detiene e invierte la subida del cristal al detectar un obstáculo (requiere normalización previa).
- Bloqueo de elevalunas traseros: accionado desde la puerta del conductor (iluminado en amarillo). La UCE J519 recibe las peticiones de las puertas traseras pero deniega la autorización de movimiento.
- Protección térmica: cálculo interno en la UCE de puerta que bloquea el motor en su posición hasta que la temperatura calculada sea segura.
- Función de emergencia: en caso de avería o corte de la línea LIN-Bus, se anulan las funciones centralizadas y solo es posible accionar cada elevalunas desde su propia puerta. (págs. 42-43)

📷 IMAGEN: Esquema del sistema de elevalunas eléctricos con red LIN-Bus puertas y unidades de control J386-J389 — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, pág. 43

## Valores de referencia
No documentado en fuentes. (págs. 42-43)

## Errores de concepto frecuentes
Pensar que si se interrumpe el LIN-Bus los elevalunas quedan totalmente inoperativos. En modo de emergencia, cada cristal se puede seguir accionando localmente desde el pulsador de su propia puerta. (pág. 43)

---

```yaml
tipo: fundamento
titulo: Sistema de alarma antirrobo
entidad: alarma-antirrobo
area: confort-y-seguridad
sistema: NUEVO-alarma-antirrobo
fabricante: SEAT
fuente: "SSP 168 SISTEMA ELÉCTRICO Confort.pdf"
paginas: "44"
relacionados: [unidad-control-red-a-bordo]
palabras: [alarma antirrobo, ultrasonidos, g273, acelerometro, lin-bus, bocina h12]
```

## Objeto
Detectar e indicar intentos de intrusión, remolcado no autorizado o apertura de accesos en el vehículo. (pág. 44)

## Fundamento
La UCE de la red de a bordo J519 monitoriza los sensores de habitáculo, inclinación, conmutadores de accesos y la continuidad de la bocina H12 por LIN-Bus. (pág. 44)

## Desarrollo
El sistema integra las siguientes funciones de vigilancia:
- Vigilancia del habitáculo y protección contra remolcado: realizadas mediante el sensor G273. La vigilancia del habitáculo utiliza tecnología de ultrasonidos, mientras que la protección contra remolcado emplea un sensor capacitivo que actúa como acelerómetro de inclinación.
- Vigilancia de aperturas: supervisa el estado de puertas, maletero y capó delantero mediante sus respectivos conmutadores de contacto.
- Vigilancia de la bocina H12: realiza verificaciones continuas por la línea serie LIN-Bus de la bocina de alarma.
- Disparo de alarma: ante cualquier anomalía detectada, la UCE J519 activa cíclicamente la bocina H12 y las lámparas de los intermitentes. (pág. 44)

📷 IMAGEN: Esquema eléctrico de la alarma antirrobo con sensor G273, bocina H8/H12 en LIN-Bus y conexiones a J519 — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, pág. 44

## Valores de referencia
No documentado en fuentes. (pág. 44)

## Errores de concepto frecuentes
Creer que el sensor de remolcado utiliza un interruptor de mercurio o péndulo físico. Emplea un sensor capacitivo integrado que funciona como acelerómetro para medir variaciones de inclinación. (pág. 44)

---

```yaml
tipo: componente
titulo: Espejos retrovisores exteriores
entidad: retrovisores-exteriores
area: confort-y-seguridad
sistema: NUEVO-retrovisores
fabricante: SEAT
fuente: "SSP 168 SISTEMA ELÉCTRICO Confort.pdf"
paginas: "45"
forma_parte_de: confort-y-seguridad
relacionados: [unidad-control-red-a-bordo]
palabras: [retrovisores exteriores, calefaccion, luneta termica, version min, version max, plegado]
```

## Misión
Proporcionar visibilidad trasera al conductor permitiendo la regulación eléctrica de los espejos, su desempañado térmico y el plegado del conjunto. (pág. 45)

## Tipos y características
Existen dos equipamientos según la versión de las UCEs de puerta:
- Versión "Min": no admite plegado eléctrico. La regulación eléctrica se alimenta directamente desde el conmutador E43.
- Versión "Max": admite plegado eléctrico. La regulación y el plegado los alimentan las UCEs de las puertas delanteras J386 y J387. (págs. 38, 45)

📷 IMAGEN: Esquema del sistema de retrovisores exteriores con conmutador E43 y UCEs de puerta J386/J387 — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, pág. 45

## Principio de funcionamiento
- Calefacción: se conecta conjuntamente con la luneta térmica Z1 y la gobierna la UCE de la red de a bordo J519 controlando el positivo y la masa de los cristales térmicos.
- Regulación: ajusta la orientación del cristal mediante motores eléctricos internos. En versión "Min" accionados por E43; en versión "Max" accionados por J386/J387.
- Plegado: exclusivo de la versión "Max", repliega eléctricamente la carcasa del retrovisor hacia la carrocería. (pág. 45)

## Valores de trabajo
No documentado en fuentes. (pág. 45)

## Anomalías frecuentes
No documentado en fuentes. (pág. 45)

## Comportamiento en avería
No documentado en fuentes. (pág. 45)

## Cómo comprobarlo
No documentado en fuentes. (pág. 45)

## Mantenimiento
No documentado en fuentes. (pág. 45)

---

```yaml
tipo: fundamento
titulo: Inmovilizador electrónico 5C
entidad: inmovilizador-5c
area: electricidad-electronica
sistema: NUEVO-inmovilizador
fabricante: SEAT
fuente: "SSP 168 SISTEMA ELÉCTRICO Confort.pdf"
paginas: "49-51"
relacionados: [unidad-control-red-a-bordo]
palabras: [inmovilizador 5c, transponder, cuadro de instrumentos j285, j623, j743, n360, codigo hexadecimal]
```

## Objeto
Impedir el arranque del motor y la puesta en marcha del vehículo a personas no autorizadas mediante una arquitectura de seguridad digital criptográfica. (págs. 49-50)

## Fundamento
Generación de inmovilizador que evoluciona respecto a la 5A incorporando un nuevo transponder en las llaves y mayor robustez criptográfica. El cuadro de instrumentos J285 actúa como UCE maestra y valida las UCEs esclavas antes de autorizar el arranque. (págs. 49-50)

## Desarrollo
Estructura de componentes:
- UCE Maestra: Cuadro de instrumentos J285.
- UCEs Esclavas: UCE de motor J623, UCE mecatrónica del cambio DSG J743 y actuador de bloqueo de la columna de dirección N360.
- Elementos de lectura: Bobina lectora D2 y transponder integrado en la llave con mando.

Diagnóstico y valores de medición (Código de dirección 17 - Cuadro de instrumentos):
- Estado de la UCE Maestra: código hexadecimal de 20 cifras.
  - Dígitos 1-2: Estado del inmovilizador (1: virgen, 2: adaptado, 3: adaptando llaves).
  - Dígitos 3-4: Contador de nuevas identidades.
  - Dígitos 9-10: Número de llaves adaptadas.
  - Dígitos 13-14: Tiempo restante para conectar borne 15 tras un bloqueo.
  - Dígitos 15-16: Tiempo de bloqueo para descarga en servidor FAZIT.
  - Dígitos 17-18: Tiempo de bloqueo en minutos para acceso GeKo.
- Estado de UCEs Esclavas: código hexadecimal de 2 cifras convertible a binario de 8 cifras para verificar si está codificada, adaptada, si responde a solicitudes y si posee firma digital y contraseña válidas. (págs. 49-51)

📷 IMAGEN: Esquema de la red de componentes del inmovilizador 5C con J285, J623, J743, N360 y D2 — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, pág. 49

## Valores de referencia
- Código de dirección de diagnosis: 17 (Cuadro de instrumentos).
- Valores de estado del inmovilizador (dígitos 1-2): 1 = virgen, 2 = adaptado, 3 = adaptando llaves. (págs. 50-51)

## Errores de concepto frecuentes
Creer que el inmovilizador solo bloquea la UCE del motor. En el inmovilizador 5C, la mecatrónica del cambio DSG (J743) y el bloqueo de la columna (N360) son UCEs esclavas que deben autenticarse de forma independiente ante el cuadro J285. (pág. 50)

---

```yaml
tipo: componente
titulo: Techo panorámico deflector y corredizo
entidad: techo-panoramico
area: confort-y-seguridad
sistema: NUEVO-techo-panoramico
fabricante: SEAT
fuente: "SSP 168 SISTEMA ELÉCTRICO Confort.pdf"
paginas: "52-53"
forma_parte_de: confort-y-seguridad
relacionados: [unidad-control-red-a-bordo]
palabras: [techo panoramico, j245, motor v1, sensores hall, normalizacion, antiaprisionamiento]
```

## Misión
Proporcionar iluminación natural y ventilación al habitáculo mediante un cristal deflector y corredizo de accionamiento eléctrico. (págs. 52-53)

## Tipos y características
Sistema electromecánico compuesto por la UCE para techo corredizo J245 (conectada al CAN-Bus Confort) y el motor eléctrico V1 como dos componentes independientes ubicados en la parte trasera del techo. (pág. 52)

📷 IMAGEN: Ubicación de la UCE J245, motor V1 y conmutador E8 en el techo panorámico — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, pág. 52

## Principio de funcionamiento
El motor V1 contiene internamente 2 sensores Hall enfrentados al eje y decalados entre sí, lo que permite a la UCE J245 reconocer la posición exacta y el sentido de giro del cristal.
- Apertura y cierre: comandados desde el conmutador E8.
- Normalización: se realiza cerrando por completo el techo y manteniendo accionado el conmutador E8 en posición de cierre. Es imprescindible para habilitar las funciones confort y antiaprisionamiento.
- Apertura/cierre de confort: ejecutados por la UCE J245 tras recibir la orden de J519 conjuntamente con los elevalunas.
- Antiaprisionamiento: si detecta un obstáculo durante el cierre, invierte inmediatamente la marcha y abre el techo. Si se intenta cerrar de nuevo en los siguientes 5 segundos, la función antiaprisionamiento queda desactivada. (págs. 52-53)

## Valores de trabajo
- Intervalo de anulación del antiaprisionamiento tras reacondicionamiento: 5 segundos. (pág. 53)

## Anomalías frecuentes
No documentado en fuentes. (págs. 52-53)

## Comportamiento en avería
Si se pierde la normalización, se anulan automáticamente la apertura/cierre de confort y el antiaprisionamiento. (pág. 53)

## Cómo comprobarlo
No documentado en fuentes. (págs. 52-53)

## Mantenimiento
Realizar el proceso de normalización mediante el conmutador E8 tras intervenciones eléctricas o mecánicas. (pág. 53)

---

```yaml
tipo: componente
titulo: Unidad de control para detección del remolque J345
entidad: deteccion-remolque
area: confort-y-seguridad
sistema: NUEVO-equipo-remolque
codigo: J345
fabricante: SEAT
fuente: "SSP 168 SISTEMA ELÉCTRICO Confort.pdf"
paginas: "54"
forma_parte_de: confort-y-seguridad
relacionados: [unidad-control-red-a-bordo]
palabras: [j345, remolque, toma u10, tsa, estabilizacion, sensores aparcamiento, angulo muerto]
```

## Misión
Detectar la conexión eléctrica de un remolque e informar a la red de a bordo para adaptar el funcionamiento de los sistemas de seguridad, motor, alumbrado y asistencia del vehículo. (pág. 54)

## Tipos y características
Unidad de control electrónica conectada al CAN-Bus Confort e interconectada con la toma de corriente para remolque U10. (pág. 54)

📷 IMAGEN: Esquema de interconexión vía CAN-Bus de la UCE J345 con J519, J104, J623, J446 e interfaz J533 — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, pág. 54

## Principio de funcionamiento
Al conectar un remolque en la toma U10, la J345 lo detecta e emite un mensaje por la red CAN-Bus. Las distintas UCEs reaccionan adaptando sus funciones:
- UCE de red de a bordo J519: desactiva las luces antiniebla traseras del vehículo, activa los pilotos del remolque y supervisa sus lámparas.
- UCE del ABS J104: activa la función de estabilización del conjunto vehículo-remolque (TSA).
- UCE de motor J623: ajusta los mapas de inyección para compensar el incremento de masa del vehículo.
- UCE de ayuda al aparcamiento J446: desconecta automáticamente los sensores de aparcamiento traseros.
- UCEs de detección de ángulo muerto J1086 y J1087: se desactivan temporalmente. (pág. 54)

## Valores de referencia
No documentado en fuentes. (pág. 54)

## Anomalías frecuentes
No documentado en fuentes. (pág. 54)

## Comportamiento en avería
No documentado en fuentes. (pág. 54)

## Cómo comprobarlo
Verificar la presencia del código de avería en el diagnóstico del CAN-Bus Confort y comprobar la señal de detección al insertar la clavija en la toma U10. (pág. 54)

## Mantenimiento
No requiere. (pág. 54)

---

COBERTURA: documento «SSP 168 SISTEMA ELÉCTRICO Confort.pdf», páginas 38 a 54 de 54. [completo]