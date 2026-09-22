---
id: ssc.sin-clasificar.diferencias-termodinamicas-y-ciclo-frigorifico-supercritico-con-r744
modulo: ssc
unidad: sin-clasificar
nt: 1172
tipo: proceso
subtipo: fundamento
titulo: "Diferencias Termodinámicas Y Ciclo Frigorífico Supercrítico Con R744"
menu: "Diferencias Termodinámicas Y Ciclo Fri"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica las diferencias de comportamiento térmico, presiones, temperaturas y componentes entre los circuitos de R1234yf y R744 (CO2), incluyendo el funcionamiento del Intercambiador de Calor Interno (IWT).

## Fundamento

El R744 tiene una temperatura crítica muy baja (31 ºC). Cuando la temperatura ambiente supera los 25 ºC, el fluido trabaja en régimen supercrítico (no existe separación entre líquido y gas) y disipa calor mediante un "refrigerador de gas" en lugar de un condensador. Para mejorar la eficiencia, se añade un Intercambiador de Calor Interno (IWT) coaxial contra flujo.

## Desarrollo

* **Comparativa de Parámetros de Trabajo:**
  - *Circuito R1234yf:* Presiones de alta entre 10 y 20 bar; presiones de baja entre 3 y 5 bar; temperatura de gas caliente hasta 140 ºC. La disipación de calor se realiza por condensación (cambio de estado a líquido).
  - *Circuito R744 (CO2):* Presiones de alta entre 60 y 130 bar; presiones de baja entre 35 y 50 bar; temperatura de gas caliente hasta 165 ºC. La disipación de calor se realiza por enfriamiento continuo del gas supercrítico en el refrigerador de gas.
* **Función del Intercambiador de Calor Interno (IWT):**
  - Tubería coaxial contra flujo que transfiere calor desde la línea de alta presión hacia la línea de baja presión.
  - Al enfriar el gas de alta antes de la válvula de expansión, reduce drásticamente la entalpía a la entrada del evaporador, aumentando el rendimiento frigorífico útil del sistema.
* **Variantes de Configuración del Circuito R744:**
  - *Opción:* Circuito R744 con acumulador e IWT independientes.
  - *Opción:* Circuito R744 con unidad combinada (acumulador + IWT en un solo bloque).

## Valores de referencia

| Parámetro Frigorífico | Circuito R1234yf | Circuito R744 (CO2) |
| :--- | :--- | :--- |
| Presión en tramo de alta | 10 a 20 bar | **60 a 130 bar** |
| Presión en tramo de baja | 3 a 5 bar | **35 a 50 bar** |
| Temperatura máx. gas caliente | Hasta 140 ºC | **Hasta 165 ºC** |
| Disipación de calor frontal | Condensación (cambio a líquido) | Refrigeración del gas (proceso supercrítico) |
| Umbral de trabajo supercrítico | No aplica | Temperatura exterior **> 25 ºC** |

## Interpretación y errores frecuentes

* Buscar la licuación completa del gas en el radiador frontal de un vehículo con R744 en un día caluroso (> 25 ºC); en condiciones supercríticas el gas se enfría sin pasar a estado líquido.

## Verificación final

Verificar el correcto salto térmico entre la entrada y la salida del IWT mediante lecturas de temperatura por contacto.

## Imágenes requeridas

- Diagrama de entalpía y ciclo frigorífico supercrítico comparativo de R1234yf y R744 — Fuente: Nº10. R1234yf R744 CO2.pdf, pág. 150
- Esquema del circuito frigorífico de R744 con intercambiador térmico interno (IWT) y acumulador — Fuente: Nº10. R1234yf R744 CO2.pdf, pág. 151
