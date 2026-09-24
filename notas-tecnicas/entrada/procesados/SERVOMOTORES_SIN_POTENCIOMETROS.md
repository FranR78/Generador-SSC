```yaml
tipo: componente
titulo: Servomotor de trampillas sin potenciómetro
entidad: servomotor-trampilla
variante: sin-potenciometro
area: climatizacion
sistema: distribucion-aire
fuente: "SERVOMOTORES SIN POTENCIOMETROS.pdf"
paginas: "81"
forma_parte_de: distribucion-aire
relacionados: [unidad-control-j255, lin-bus]
palabras: [motor paso a paso, bus LIN, conexión en serie, sin potenciómetro]
```

## Misión
Son los encargados de realizar el accionamiento de las diferentes chapaletas del sistema de climatización. (pág. 81)

📷 IMAGEN: Esquema de conexión en serie de los servomotores en el LIN-Bus con asignación de bornes (A1 a A4) — Fuente: SERVOMOTORES SIN POTENCIOMETROS.pdf, pág. 81

## Tipos y características
Todos los servomotores de accionamiento presentan el mismo diseño, lo que permite asociarlos a cualquier chapaleta. Son motores paso a paso que no necesitan potenciómetros. Se conectan en serie y son gestionados a través de un LIN-Bus independiente.
El climatizador automático de zona única dispone de 6 servomotores, mientras que el climatizador automático de tres zonas posee 10 servomotores conectados en serie.
Asignación de bornes en el conector:
- A1: Borne 31 (masa).
- A2: LIN IN (entrada de datos LIN-Bus).
- A3: LIN OUT (salida de datos LIN-Bus).
- A4: Borne 30 (positivo constante). (pág. 81)

## Principio de funcionamiento
Funcionan como motores paso a paso gestionados por la unidad de control Climatronic J255 mediante comunicación por LIN-Bus en serie. Para que cada servomotor pueda ser asignado a su chapaleta correspondiente, debe vincularse con un código de dirección específico de cada accionamiento. (pág. 81)

## Valores de trabajo
- Alimentación eléctrica: Borne 30 en terminal A4 y Borne 31 en terminal A1.
- Línea de datos: LIN IN en terminal A2 y LIN OUT en terminal A3.
- Cantidad de actuadores: 6 servomotores en climatizador monozona y 10 servomotores en climatizador trizona. (pág. 81)

## Anomalías frecuentes
No documentado en fuentes. (pág. 81)

## Comportamiento en avería
No documentado en fuentes. (pág. 81)

## Cómo comprobarlo
No documentado en fuentes. (pág. 81)

## Mantenimiento
Una vez realizado el direccionamiento, no se deben intercambiar los conectores ni los servomotores entre sí. (pág. 81)

---

```yaml
tipo: procedimiento
titulo: Direccionamiento de servomotores
entidad: direccionamiento-servomotores
area: climatizacion
sistema: control-climatizacion
fuente: "SERVOMOTORES SIN POTENCIOMETROS.pdf"
paginas: "81"
relacionados: [servomotor-trampilla, unidad-control-j255]
palabras: [tester VAS, autodireccionamiento, ajuste básico, canal 001, LIN-Bus]
```

## Objeto y alcance
Asignar automáticamente las direcciones a los diferentes servomotores de las chapaletas conectados en serie por LIN-Bus para que la unidad de control Climatronic J255 reconozca la función de cada uno. Es obligatorio ejecutarlo antes del ajuste básico y cada vez que se desacople un conector o un servomotor. (pág. 81)

## Condiciones previas
Debe ejecutarse antes de realizar el ajuste básico en el canal 001 y canal 003. Es imprescindible realizarlo si se ha desacoplado uno o varios conectores o un servomotor. (pág. 81)

## Equipo y material
Tester de diagnosis VAS (programas de Localización guiada de averías o Funciones guiadas). (pág. 81)

## Pasos
1. Conectar el tester de diagnosis VAS y acceder a los programas de Localización guiada de averías o Funciones guiadas. (pág. 81)
2. Seleccionar la función de direccionamiento antes de efectuar el ajuste básico en el canal 001. (pág. 81)
3. Iniciar el procedimiento para provocar el reinicio de todos los servomotores. (pág. 81)
4. Transmitir desde la unidad de control Climatronic J255 la orden de autodireccionamiento para asignar automáticamente las direcciones a los servomotores. (pág. 81)
5. Realizar los ajustes básicos en los canales 001 y 003 una vez finalizado el direccionamiento. (pág. 81)

## Valores de referencia
- Paso previo al ajuste básico: Direccionamiento en canal 001.
- Canales de ajuste básico posterior: Canal 001 y Canal 003. (pág. 81)

## Verificación final
Comprobar la correcta asignación automática de direcciones antes de dar paso a los ajustes básicos en los canales 001 y 003. (pág. 81)

## Seguridad y normativa
Una vez ejecutado el direccionamiento, queda prohibido intercambiar la posición de los conectores o de los servomotores. (pág. 81)

COBERTURA: documento «SERVOMOTORES SIN POTENCIOMETROS.pdf», páginas 81 a 81 de 81. completo