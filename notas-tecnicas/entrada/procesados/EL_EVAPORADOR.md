```yaml
tipo: componente
titulo: Evaporador
entidad: evaporador
area: climatizacion
sistema: circuito-frigorifico
fabricante: Valeo
fuente: "EL EVAPORADOR.PDF"
paginas: "1-8"
forma_parte_de: ciclo-frigorifico
relacionados: [compresor, valvula-expansion, sensor-evaporador, ventilador-habitaculo]
palabras: [intercambiador termico, deshumidificacion, recalentamiento, serpentin, placas, tubos y aletas]
```

## Misión
Enfriar y deshumidificar el aire enviado hacia el habitáculo absorbiendo el calor del flujo de aire puesto en movimiento por el impulsor (pág. 1, 2).

## Tipos y características
- Ubicación: localizado en el conjunto de distribución de trampillas, situado después del impulsor (ventilador centrífugo) y antes del radiador de calefacción (pág. 1, 2).
- Tecnologías de haz de tubos (pág. 7, 8):
  - **Evaporador de serpentín**: compuesto por un único tubo plano extruido con múltiples canalizaciones internas y aletas en acordeón intercaladas, soldado por calor (utilizado por constructores japoneses) (pág. 7).
  - **Evaporador de tubos y aletas**: constituido por tubos cilíndricos en horquilla insertados paralelamente entre aletas y expandidos mecánicamente, subdividido en secciones paralelas alimentadas por capilares desde un venturi tras la válvula de expansión (utilizado por constructores europeos) (pág. 7).
  - **Evaporador de placas**: formado por placas colocadas unas sobre otras en forma de cubetas con aletas en acordeón intercaladas, galvanizado en horno al vacío o en atmósfera neutra (sustituye progresivamente al de tubos y aletas por ser más económico en grandes series, utilizado por constructores americanos) (pág. 8).

## Principio de funcionamiento
- **Mecanismos de intercambio**: combinación de conducción térmica (a través de los materiales) y convección térmica (entre el aire y la superficie externa, y entre el fluido y la superficie interna) (pág. 4, 5).
- **Balance energético del aire**:
  - Pfrigo = Qa · Cp · (Ti - Tf) + Qa · (Hai - Haf) · L (si existe condensación en aletas, cumpliendo Hai > Haf al enfriar el aire por debajo de su temperatura de rocío) (pág. 1).
  - Si no existe condensación (temperatura final Tf superior a la de rocío): Pfrigo = Qa · Cp · (Ti - Tf) (pág. 3).
- **Balance energético del fluido**:
  - Pfrigo = Qf · (h2 - h1) (pág. 3).
  - Etapa 1 -> 1': el fluido en estado difásico (líquido/gas) termina de evaporarse a temperatura constante Tev (presión de baja) mediante calor latente (pág. 3, 4).
  - Etapa 1' -> 2: el fluido en estado vapor se recalienta de Tev a T2 mediante calor sensible (pág. 3, 4).
- **Eficacia de intercambio (hevap)**:
  - Pfrigo = hevap · S · (Ti - Tev) (pág. 5).
  - Si se sustituye por un evaporador de menor eficacia (hevap inferior), requiere una menor temperatura de evaporación Tev y menor presión de baja BP (pág. 5).
  - Consecuencias del evaporador de menor eficacia: aumento de la relación de compresión, caída del rendimiento volumétrico y efectivo del compresor, aumento del volumen específico del fluido, reducción del salto de entalpía (h2 - h1), pérdida de potencia frigorífica y cortes cíclicos ordenados por la sonda del evaporador (pág. 5, 6).

📷 IMAGEN: Diagrama psicrométrico de condensación de agua en aletas para aire a 35 ºC y 40% HR saliendo a 10 ºC y 100% HR — Fuente: EL EVAPORADOR.PDF, pág. 2 (pág. 2).
📷 IMAGEN: Evolución del ciclo en el Diagrama de Mollier al sustituir el evaporador por uno de menor eficacia con caída de BP a BP' — Fuente: EL EVAPORADOR.PDF, pág. 5 (pág. 5).

## Valores de trabajo
- Recalentamiento mínimo (RC = T2 - Tev): superior a 2 ºC para asegurar que la totalidad del fluido entra en estado vapor al compresor y proteger dicho componente (pág. 4).
- Ejemplo práctico de condensados: con Ti = 35 ºC (40% HR, Hai = 0,0141 kg/kg), Tf = 10 ºC (100% HR, Haf = 0,0078 kg/kg) y caudal impulsado de 500 kg/h, la producción de agua en aletas es de 3,15 kg/h (pág. 2).

## Anomalías frecuentes
- **Sustitución por un evaporador adaptable de menor eficacia**: provoca caída de la presión de baja (BP'), reducción de la potencia frigorífica y cortes cíclicos del compresor (pág. 5, 6).
- **Congelación de la superficie externa**: provocada por fallo o avería en la sonda de temperatura del evaporador (pág. 8).
- Acumulación de suciedad o presencia de corrosión en la superficie externa del haz de tubos (pág. 8).

## Comportamiento en avería
Pérdida de rendimiento del circuito de climatización, empañado de las superficies acristaladas por falta de deshumidificación y desconexiones cíclicas continuas del compresor (pág. 2, 5, 8).

## Cómo comprobarlo
- Verificar que la superficie externa esté exenta de suciedad y corrosión (pág. 8).
- Verificar que la superficie externa no se congele controlando el funcionamiento de la sonda del evaporador (pág. 8).

## Mantenimiento
- Prohibido sustituir un evaporador original por un modelo adaptable de menor eficacia (pág. 8).
- Inspección y limpieza de la superficie externa manteniendo el componente libre de suciedad y corrosión (pág. 8).
- Control periódico del estado de la sonda del evaporador para prevenir la congelación (pág. 8).

---

```yaml
tipo: fundamento
titulo: Ciclo frigorífico y Diagrama de Mollier
entidad: ciclo-frigorifico
area: climatizacion
sistema: circuito-frigorifico
fabricante: Valeo
fuente: "EL EVAPORADOR.PDF"
paginas: "9-10"
relacionados: [evaporador, condensador, compresor]
palabras: [diagrama de mollier, entalpia, curva de saturacion, calor latente, calor especifico]
```

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

📷 IMAGEN: Diagrama de Mollier con la curva de saturación Csat, regiones de estado y proceso de cambio de estado entre puntos A y B — Fuente: EL EVAPORADOR.PDF, pág. 10 (pág. 10).

## Valores de referencia
- Requisito de temperatura en condensador: Tc > Tambiente (pág. 9).
- Requisito de temperatura en evaporador: Tev < Tambiente (pág. 9).

## Errores de concepto frecuentes
Intentar evaluar las prestaciones de un ciclo frigorífico considerando únicamente las temperaturas antes y después del evaporador, ignorando la humedad del aire aspirado (cuanto más húmedo esté el aire, mayor es la condensación sobre aletas y menor el enfriamiento sensible del aire) (pág. 3).

COBERTURA: documento «EL EVAPORADOR.PDF», páginas 1 a 10 de 10. [completo]