---
id: ssc.autodiagnostico-climatizador.audi-a5-coupe-2008-calefaccion-independi
modulo: ssc
unidad: clima
nt: 574
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Autodiagnosis y gestión de memoria de averías de la calefacción independiente"
codigo: "J364"
menu: "Autodiagnosis y gestión de mem J364"
grupo: "Control de climatización"
clave: autodiagnostico-climatizador
area: climatizacion
sistema: "control-climatizacion"
marca: "Audi"
fuentes: "Audi A5 Coupé_2008_Calefacción independiente.pdf, págs. 3-6"
relacionados: ["unidad-control-j364"]
palabras: ["J364", "dirección 18", "memoria permanente", "averías esporádicas", "protección de componentes"]
---

## Objeto

Explicar el funcionamiento del sistema de autodiagnosis, el registro de fallos en memoria no volátil y el protocolo de protección de componentes en la unidad de control para calefacción adicional J364. (págs. 3-6)

## Fundamento

La unidad de control J364 analiza continuamente las señales registradas por los sensores y supervisa los actuadores del calefactor independiente. Las anomalías detectadas se inscriben en una memoria no volátil que conserva la información independientemente de la tensión de alimentación. (págs. 3-5)

## Desarrollo

- **Acceso al sistema:** La autodiagnosis se realiza con el equipo de diagnosis (VAS 5051/5052) bajo el código de dirección "18 - Calefacción adicional/independiente". Requiere el encendido conectado para iniciar la comunicación con la interfaz J533; una vez establecida la fase de diagnosis, esta puede continuar con el encendido desconectado. (págs. 5, 8)
- **Clasificación de averías:** Los fallos se catalogan en estáticos (permanentes) o esporádicos (/SP). Si las condiciones de la avería desaparecen durante un periodo determinado, el registro pasa a esporádico y termina borrándose automáticamente tras un tiempo. Junto a cada código se memorizan las condiciones de entorno (kilometraje, hora, fecha, temperatura del motor, tensión de servicio y régimen). (págs. 4, 8)
- **Bloqueos especiales:** En caso de impacto con transmisión de la "señal de colisión" por el bus de datos, el sistema se bloquea de inmediato sin registrar ningún fallo explícito. (pág. 9)
- **Protección de componentes:** Al instalar una calefacción nueva o sustituir la unidad J364, puede activarse el bloqueo por protección de componentes, requiriendo la ejecución de un ciclo de autoadaptación en la localización guiada de averías. (págs. 3-4)

## Valores de referencia

- Código de dirección para equipo de diagnosis: 18 (Calefacción adicional/independiente). (pág. 8)

## Errores de concepto frecuentes

- Intentar realizar la diagnosis de la calefacción independiente utilizando los lectores de averías antiguos V.A.G 1551 o V.A.G 1552. (pág. 4)
- Esperar un código de avería específico tras un accidente con disparo de la señal de colisión, cuando el sistema realiza un bloqueo directo e incondicional. (pág. 9)
