---
id: ssc.ciclo-frigorifico.el-evaporador
modulo: ssc
unidad: clima
nt: 748
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Ciclo frigorífico y Diagrama de Mollier"
menu: "Ciclo frigorífico y Diagrama de Mollie"
grupo: "Circuito frigorífico"
clave: ciclo-frigorifico
area: climatizacion
sistema: "circuito-frigorifico"
marca: "Valeo"
fuentes: "EL EVAPORADOR.PDF, págs. 9-10"
relacionados: ["evaporador", "condensador", "compresor"]
palabras: ["diagrama de mollier", "entalpia", "curva de saturacion", "calor latente", "calor especifico"]
---

## Objeto

Definición de los requisitos térmicos del cambio de estado, el concepto de entalpía y la representación del estado del fluido frigorífico en el Diagrama de Mollier (pág. 9, 10).

## Fundamento

Para que el fluido ceda calor en el condensador y absorba calor en el evaporador, sus temperaturas de cambio de estado deben cumplir Tc > Tambiente y Tev < Tambiente (pág. 9).

## Desarrollo

- **Condiciones de temperatura**:
  - Para funcionamiento con aire exterior: Tc > Tambiente y Tev < Tambiente (pág. 9).
  - La temperatura del aire exterior condiciona directamente Tc y Tev, fijando las presiones de alta y baja del circuito (pág. 9).
- **Entalpía (J/kg)**: representa la cantidad de energía por unidad de masa en forma de calor o presión. En transformaciones a presión constante (evaporación o condensación), el calor intercambiado equivale al producto de la masa por la variación de entalpía (pág. 9).
- **Diagrama de Mollier**:
  - **Curva de saturación (Csat)**: curva en campana que delimita la zona líquida (izquierda), zona vapor (derecha) y zona difásica líquido+vapor (bajo la curva, marcada con líneas de % de título de vapor) (pág. 9, 10).
  - **Isotermas (T)**: en la región difásica son horizontales, indicando que a presión constante la evaporación (puntos A -> B) y la condensación (puntos B -> A) transcurren a temperatura constante (pág. 10).
- **Magnitudes caloríficas**:
  - **Calor específico (Cp)**: energía térmica necesaria para modificar la temperatura de un sistema sin cambio de fase (pág. 10).
  - **Calor latente de evaporación (L = hB - hA)**: energía térmica necesaria para evaporar o condensar completamente una masa de fluido a presión constante (pág. 10).

## Valores de referencia

- Requisito de temperatura en condensador: Tc > Tambiente (pág. 9).
- Requisito de temperatura en evaporador: Tev < Tambiente (pág. 9).

## Errores de concepto frecuentes

Intentar evaluar las prestaciones de un ciclo frigorífico considerando únicamente las temperaturas antes y después del evaporador, ignorando la humedad del aire aspirado (cuanto más húmedo esté el aire, mayor es la condensación sobre aletas y menor el enfriamiento sensible del aire) (pág. 3).

## Imágenes requeridas

- Diagrama de Mollier con la curva de saturación Csat, regiones de estado y proceso de cambio de estado entre puntos A y B — Fuente: EL EVAPORADOR.PDF, pág. 10 (pág. 10).
