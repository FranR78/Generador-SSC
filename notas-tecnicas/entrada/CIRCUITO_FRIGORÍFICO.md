```yaml
tipo: fundamento
titulo: Circuito frigorífico
entidad: ciclo-frigorifico
area: climatizacion
sistema: circuito-frigorifico
fuente: "CIRCUITO FRIGORÍFICO.pdf"
paginas: "7"
relacionados: [compresor, filtro-deshidratador, valvula-expansion, evaporador, silenciador, refrigerante-r134a]
palabras: [autoclima, aire acondicionado manual, alta presion, baja presion]
```

## Objeto
Circuito frigorífico montado en el autoclima, idéntico al utilizado en el sistema de aire acondicionado de accionamiento manual (pág. 7).

## Fundamento
Circuito cerrado de climatización estructurado en una zona de alta presión y una zona de baja presión para el acondicionamiento del aire (pág. 7).

## Desarrollo
El circuito está formado por los siguientes elementos:
- **Condensador**: ubicado por delante del radiador del líquido refrigerante del motor (pág. 7).
- **Filtro deshidratador**: retiene la humedad, filtra residuos de abrasión y evita la formación de burbujas (pág. 7).
- **Válvula de expansión**: controla la presión y el caudal del agente frigorífico (pág. 7). Junto a ella, en el circuito de alta presión, se monta el conmutador de presión F129 o el transmisor electrónico G65 según la motorización (pág. 7).
- **Evaporador**: ubicado en la unidad climática, donde se produce la expansión e intercambio térmico con el aire de entrada al habitáculo (pág. 7).
- **Compresor**: genera la presión del circuito; es de tipo autorregulado con 7 cilindros, accionado por correa Poly V y acoplamiento magnético (pág. 7).
- **Silenciador**: montado en el circuito de baja presión, cerca del compresor, entre la válvula de expansión y el compresor (pág. 7).

📷 IMAGEN: Esquema del circuito frigorífico con la ubicación del compresor, condensador, filtro deshidratador, válvula de expansión, transmisor de presión, evaporador y silenciador — Fuente: CIRCUITO FRIGORÍFICO.pdf, pág. 7 (pág. 7).

## Valores de referencia
Carga de agente frigorífico R134a: 750-50 gramos en el circuito (pág. 7).

## Errores de concepto frecuentes
No documentado en fuentes (pág. 7).

---

```yaml
tipo: componente
titulo: Filtro deshidratador
entidad: filtro-deshidratador
area: climatizacion
sistema: circuito-frigorifico
fuente: "CIRCUITO FRIGORÍFICO.pdf"
paginas: "7"
forma_parte_de: ciclo-frigorifico
relacionados: [valvula-expansion, refrigerante-r134a]
palabras: [humedad, residuos, abrasión, burbujas]
```

## Misión
Retener la humedad, filtrar los residuos procedentes de la abrasión y evitar que se produzcan burbujas en el circuito frigorífico (pág. 7).

## Tipos y características
No documentado en fuentes (pág. 7).

## Principio de funcionamiento
No documentado en fuentes (pág. 7).

## Valores de trabajo
No documentado en fuentes (pág. 7).

## Anomalías frecuentes
No documentado en fuentes (pág. 7).

## Comportamiento en avería
No documentado en fuentes (pág. 7).

## Cómo comprobarlo
No documentado en fuentes (pág. 7).

## Mantenimiento
No documentado en fuentes (pág. 7).

---

```yaml
tipo: componente
titulo: Válvula de expansión
entidad: valvula-expansion
area: climatizacion
sistema: circuito-frigorifico
fuente: "CIRCUITO FRIGORÍFICO.pdf"
paginas: "7"
forma_parte_de: ciclo-frigorifico
relacionados: [evaporador, silenciador, ciclo-frigorifico]
palabras: [presión, caudal, agente frigorífico, alta presión]
```

## Misión
Controlar la presión y el caudal del agente frigorífico dentro del circuito (pág. 7).

## Tipos y características
Se ubica en el circuito de alta presión, junto a la cual se monta el conmutador de presión F129 o el transmisor electrónico G65 según motorización (pág. 7).

## Principio de funcionamiento
No documentado en fuentes (pág. 7).

## Valores de trabajo
No documentado en fuentes (pág. 7).

## Anomalías frecuentes
No documentado en fuentes (pág. 7).

## Comportamiento en avería
No documentado en fuentes (pág. 7).

## Cómo comprobarlo
No documentado en fuentes (pág. 7).

## Mantenimiento
No documentado en fuentes (pág. 7).

---

```yaml
tipo: componente
titulo: Evaporador
entidad: evaporador
area: climatizacion
sistema: circuito-frigorifico
fuente: "CIRCUITO FRIGORÍFICO.pdf"
paginas: "7"
forma_parte_de: ciclo-frigorifico
relacionados: [valvula-expansion, ciclo-frigorifico]
palabras: [unidad climática, expansión, intercambio de calor, habitáculo]
```

## Misión
Producir la expansión del agente frigorífico y dar lugar al intercambio de calor entre el agente frigorífico y el aire de entrada al habitáculo (pág. 7).

## Tipos y características
Se encuentra ubicado en la unidad climática (pág. 7).

## Principio de funcionamiento
No documentado en fuentes (pág. 7).

## Valores de trabajo
No documentado en fuentes (pág. 7).

## Anomalías frecuentes
No documentado en fuentes (pág. 7).

## Comportamiento en avería
No documentado en fuentes (pág. 7).

## Cómo comprobarlo
No documentado en fuentes (pág. 7).

## Mantenimiento
No documentado en fuentes (pág. 7).

---

```yaml
tipo: componente
titulo: Compresor
entidad: compresor
variante: autorregulado-7-cilindros
area: climatizacion
sistema: circuito-frigorifico
fuente: "CIRCUITO FRIGORÍFICO.pdf"
paginas: "7"
forma_parte_de: ciclo-frigorifico
relacionados: [silenciador, ciclo-frigorifico]
palabras: [autorregulado, 7 cilindros, correa Poly V, acoplamiento magnético, válvula de seguridad, 44 bares]
```

## Misión
Generar la presión necesaria en el circuito frigorífico (pág. 7).

## Tipos y características
- Compresor autorregulado de 7 cilindros (pág. 7).
- Arrastre realizado mediante correa Poly V y acoplamiento magnético (pág. 7).
- Cuenta con una válvula de seguridad tarada a 44 bares (pág. 7).

## Principio de funcionamiento
El acoplamiento magnético se activa por la solicitud del usuario o por la unidad de control del autoclima (pág. 7).

## Valores de trabajo
Presión de tarado de la válvula de seguridad: 44 bares (pág. 7).

## Anomalías frecuentes
No documentado en fuentes (pág. 7).

## Comportamiento en avería
No documentado en fuentes (pág. 7).

## Cómo comprobarlo
No documentado en fuentes (pág. 7).

## Mantenimiento
No documentado en fuentes (pág. 7).

---

```yaml
tipo: componente
titulo: Silenciador
entidad: silenciador
area: climatizacion
sistema: circuito-frigorifico
fuente: "CIRCUITO FRIGORÍFICO.pdf"
paginas: "7"
forma_parte_de: ciclo-frigorifico
relacionados: [compresor, valvula-expansion]
palabras: [baja presión, ondas de presión, ruido, amortiguar]
```

## Misión
Amortiguar el ruido producido por las ondas de presión entre la válvula de expansión y el compresor (pág. 7).

## Tipos y características
Ubicado en el circuito de baja presión, cerca del compresor (pág. 7).

## Principio de funcionamiento
No documentado en fuentes (pág. 7).

## Valores de trabajo
No documentado en fuentes (pág. 7).

## Anomalías frecuentes
No documentado en fuentes (pág. 7).

## Comportamiento en avería
No documentado en fuentes (pág. 7).

## Cómo comprobarlo
No documentado en fuentes (pág. 7).

## Mantenimiento
No documentado en fuentes (pág. 7).

---

```yaml
tipo: fluido
titulo: Agente frigorífico R134a
entidad: refrigerante-r134a
area: climatizacion
sistema: fluidos-frigorificos
fuente: "CIRCUITO FRIGORÍFICO.pdf"
paginas: "7"
relacionados: [ciclo-frigorifico]
palabras: [agente frigorífico, R134a, carga, gramos]
```

## Designación y norma
Agente frigorífico del tipo R134a (pág. 7).

## Propiedades
No documentado en fuentes (pág. 7).

## Dónde se usa y cantidades
Se utiliza en el circuito frigorífico del autoclima con una carga de 750-50 gramos (pág. 7).

## Compatibilidades y mezclas prohibidas
No documentado en fuentes (pág. 7).

## Identificación
No documentado en fuentes (pág. 7).

## Manipulación, almacenamiento y residuos
No documentado en fuentes (pág. 7).

## Riesgos y normativa
No documentado en fuentes (pág. 7).

COBERTURA: documento «CIRCUITO FRIGORÍFICO.pdf», páginas 7 a 7 de 7. [completo]