---
id: ssc.calefaccion-independiente.audi-a5-coupe-2008-calefaccion-independi
modulo: ssc
unidad: clima
nt: 844
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Sistema de calefacción y ventilación independiente"
codigo: "J364"
menu: "Sistema de calefacción y venti J364"
grupo: "Calefacción"
clave: calefaccion-independiente
area: climatizacion
sistema: "calefaccion"
marca: "Audi"
fuentes: "Audi A5 Coupé_2008_Calefacción independiente.pdf, págs. 1-3, 69-89, 118-121"
relacionados: ["bomba-dosificadora-combustible", "bomba-recirculacion-liquido-refrigerante", "valvula-cierre-calefaccion"]
palabras: ["calefacción independiente", "ventilación independiente", "J364", "Eberspächer", "combustión", "líquido refrigerante"]
---

## Objeto

Calentar o ventilar el habitáculo del vehículo cuando el motor térmico está parado o apoyar la generación de calor a bajas temperaturas exteriores en versiones diésel. (págs. 1, 69-70)

## Fundamento

El sistema utiliza una unidad calefactora autónoma por combustión (J364) conectada al sistema de combustible y al circuito de refrigerante del motor. Al quemar combustible en su interior, calienta el líquido refrigerante que la bomba V55 hace circular hacia el intercambiador de calor del climatizador, mientras la turbina del habitáculo difunde el aire caliente. (págs. 69-70, 118)

## Desarrollo

El funcionamiento de la calefacción independiente se organiza en las siguientes fases operativas:
- **Arranque y precalentamiento:** La UCE J364 activa la bomba de recirculación V55 y la válvula de cierre N279. Aplica tensión a la bujía de precalentamiento Q9 para calentar la cámara de combustión e inicia la rotación gradual de la turbina de aire de combustión V6. A continuación, activa la bomba dosificadora V54 a 4 Hz para inyectar combustible. (págs. 71-74)
- **Fase de combustión a plena carga:** Tras detectarse la presencia de llama mediante el guardallamas G64, se desconecta la bujía Q9. La turbina V6 se alimenta a 12 V y la bomba V54 trabaja a máxima frecuencia (8 Hz) suministrando 5,0 kW de potencia calorífica. (págs. 74-76)
- **Conmutación a carga parcial y pausa de regulación:** Si la temperatura del líquido refrigerante en el calefactor alcanza los 77 ºC, la UCE reduce la tensión de V6 a 6 V y la frecuencia de V54 a 4 Hz (potencia al 50%). Si la temperatura asciende a 89 ºC, el sistema pasa a la pausa de regulación (deteniendo V54 y V6 mientras V55 mantiene el flujo). Si el refrigerante cae por debajo de 65 ºC, se reinicia la combustión. (págs. 76-79)
- **Ciclo de post-marcha y desconexión:** Al desactivar la calefacción, la bomba V54 se corta inmediatamente mientras la turbina V6 funciona entre 8 V y 12 V durante 15 a 120 segundos para purgar los gases de escape y enfriar el intercambiador. (págs. 81-82)
- **Función de ventilación independiente:** Durante el verano, si la temperatura interior supera la consigna, la UCE activa únicamente la turbina de aire fresco del habitáculo sin encender el quemador de combustible. (pág. 82)

## Valores de referencia

- Temperatura de conmutación a carga parcial: 77 ºC en el líquido refrigerante. (pág. 76)
- Temperatura de conmutación a pausa de regulación: 89 ºC en el líquido refrigerante. (pág. 79)
- Temperatura de reinicio tras pausa de regulación: < 65 ºC en el líquido refrigerante. (pág. 79)
- Rendimiento térmico nominal a plena carga: 5,0 kW. (pág. 1)

## Errores de concepto frecuentes

- Creer que la calefacción independiente consume la energía de la batería para generar calor mediante resistencias eléctricas masivas, ignorando que la energía térmica procede del combustible del depósito. (págs. 1, 69)
- Suponer que la ventilación independiente utiliza el compresor del aire acondicionado con el motor parado, cuando únicamente hace circular aire exterior. (pág. 82)

## Imágenes requeridas

- Esquema del circuito de líquido refrigerante integrando la calefacción independiente, la bomba V55 y la válvula N279 — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 118
