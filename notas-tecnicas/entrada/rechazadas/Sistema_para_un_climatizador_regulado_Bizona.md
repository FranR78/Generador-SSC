# Rechazadas de Sistema_para_un_climatizador_regulado_Bizona.md

## ?

**Motivo:** YAML ilegible: while scanning for the next token
found character '>' that cannot start any token
  in "<unicode string>", line 12, column 57:
     ... alto voltaje, vehículo híbrido, >200 V, inversor trifásico, acei ... 
                                         ^

```yaml
tipo: componente
titulo: Compresor eléctrico de alto voltaje para vehículos híbridos
entidad: compresor
variante: alto-voltaje-hibrido
area: climatizacion
sistema: circuito-frigorifico
fabricante: Behr Hella
fuente: "Climatizacion basicos.pdf"
paginas: "50-51, 61"
forma_parte_de: circuito-frigorifico
relacionados: [aceite-frigorifico, unidad-control-climatizador]
palabras: [compresor de alto voltaje, vehículo híbrido, >200 V, inversor trifásico, aceite POE, aislamiento eléctrico]
```

## Misión
Comprimir e impulsar el gas refrigerante en el circuito sin depender del funcionamiento del motor de combustión interna, permitiendo la climatización previa del habitáculo estacionado. (pág. 50)

## Tipos y características
Compresor accionado por un motor eléctrico trifásico sin escobillas integrado en el mismo cuerpo. Funciona alimentado por una tensión continua de alta tensión superior a 200 V. (págs. 50-51)

## Principio de funcionamiento
Un inversor electrónico integrado convierte la tensión continua de alta tensión procedente de la batería del vehículo (más de 200 V) en la tensión alterna trifásica requerida por el motor eléctrico. El movimiento del rotor acciona el mecanismo de compresión. Dado que el lubricante entra en contacto directo con los bobinados del estátor, exige de forma imperativa el empleo de aceite dieléctrico no conductor de tipo POE para evitar cortocircuitos o derivaciones a masa. (págs. 50-51, 61)

📷 IMAGEN: Esquema del compresor de alto voltaje indicando la integración del inversor electrónico y el bobinado trifásico del motor — Fuente: Climatizacion basicos.pdf, pág. 50

## Valores de trabajo
- Tensión de alimentación continua: > 200 V de corriente continua (alta tensión). (pág. 50)
- Tensión interna de trabajo: corriente alterna trifásica modulada por el inversor. (pág. 50)
- Tipo de lubricante obligatorio: aceite sintético POE de alta rigidez dieléctrica. (págs. 51, 61)

## Anomalías frecuentes
Fallo de aislamiento eléctrico o derivación a masa por la presencia de humedad o por haber cargado el circuito con aceite convencional PAG. (págs. 51, 61)

## Comportamiento en avería
Desconexión automática de la red de alta tensión por la unidad de control de seguridad del vehículo híbrido y neutralización total de la climatización. (pág. 51)

## Cómo comprobarlo
Intervención restringida a personal con certificación oficial en sistemas de alto voltaje. Comprobar la ausencia de tensión de seguridad, verificar el aislamiento de las fases con un medidor específico y consultar la memoria de averías del inversor. (pág. 51)

## Mantenimiento
Utilizar máquinas de servicio de A/C equipadas con función de lavado interno y depósito independiente para aceite POE para impedir la contaminación cruzada con aceites PAG. (pág. 51)

---
