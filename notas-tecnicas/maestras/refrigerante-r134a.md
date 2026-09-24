---
id: ssc.maestra.refrigerante-r134a
modulo: ssc
unidad: clima
nt: 1001
tipo: elemento
clase: fluido
titulo: "Agente frigorífico R134a"
menu: "Agente frigorífico R134a"
grupo: "Fluidos frigoríficos"
clave: refrigerante-r134a
area: climatizacion
sistema: "fluidos-frigorificos"
forma_parte_de: circuito-frigorifico
estado: borrador
fusionadas: [22, 167, 363, 253, 265, 355, 228, 313, 323]
fuentes: "Fusión de 9 fuentes: ETAI, Audi, Serca, Hella (2), Formauto, La Climatización, Climatización Introducción, Climatizador MD"
relacionados: ["refrigerante-r12", "refrigerante-r1234yf", "aceite-frigorifico", "recuperacion-refrigerante", "carga-refrigerante"]
palabras: ["R134a", "tetrafluoroetano", "HFC", "PCA 1430", "Directiva 2006/40/CE", "retrofit"]
---

## Designación y norma

**R134a = tetrafluoroetano**, fórmula química **CH2F-CF3** (también escrita CF3-CH2F). Es un **hidrofluorocarbono (HFC)**: lleva flúor e hidrógeno, pero **no lleva cloro** (ETAI, pág. 24; Formauto, págs. 6-7; Hella 2010, págs. 7-8).

- **Nombres comerciales:** R134a, H-FKW 134a, SUVA 134a y KLEA 134a (Audi, págs. 1-2).
- **Por qué existe:** sustituyó al R12 (un CFC que destruye la capa de ozono) tras el Protocolo de Montreal de 1987 (ETAI, pág. 25). En turismos se generaliza entre 1992 y 1995 (Serca, págs. 1-10; La Climatización, pág. 34).
- **Norma que lo retira:** Directiva 2006/40/CE, por su efecto invernadero (ETAI, págs. 24, 26; La Climatización, págs. 38, 152). Ver «Riesgos y normativa».

### Contexto: el R12 al que sustituyó

El R12 es el **diclorodifluorometano (CCl2F2)**, un **clorofluorocarbono (CFC)** que se usó en los turismos antiguos (Formauto, págs. 6-7; Hella 2010, págs. 7-8). Se retiró por tres motivos:

- **Destruye la capa de ozono:** la radiación UV libera sus átomos de cloro (Hella 2010, págs. 7, 9-10).
- **Por encima de 150 ºC, o en contacto con una llama, forma fosgeno**, un gas tóxico (Clim. Introducción, págs. 38, 52; Formauto, págs. 6-7).
- **Es incompatible con el zinc (Zn) y el magnesio (Mg)** (Formauto, págs. 6-7).

Como refrigerante era de baja toxicidad (<20 %), muy estable, no inflamable y con elevado calor de evaporación (Formauto, págs. 6-7).

Su venta se prohibió en Alemania en 1995 (y su carga, desde 1998). En España, desde el 1 de enero de 2001 (Hella 2010, pág. 7).

## Propiedades

| Propiedad | R134a | R12 (comparación) |
|---|---|---|
| Punto de ebullición a presión atmosférica (1 bar = 0,1 MPa) | **-26,5 ºC** | -30 ºC |
| Punto de solidificación | -101,6 ºC | — |
| Temperatura crítica | 100,6 ºC | — |
| Presión crítica | 40,56 bar | — |
| Presión para condensar a 60 ºC | 16,7 bar | — |
| PAO / ODP (daño a la capa de ozono) | **0** | 1,0 |
| PCA / GWP (efecto invernadero, CO2 = 1) | **1430** | — |
| Tiempo de permanencia en la atmósfera | 16 años | 120 años |
| CLP (potencial de escape de cloro) | 0 | 1,5 |

Fuentes de la tabla: ETAI, págs. 19, 24-25; Hella 2010, págs. 7-8; MD Fran; La Climatización, pág. 34; Formauto, págs. 5-7.

- **Aspecto:** en estado gaseoso es invisible; en líquido es incoloro como el agua. No tiene olor (ETAI, pág. 24; MD Fran).
- **Por qué sirve como refrigerante:**
  - absorbe mucho calor al evaporarse (elevado calor de evaporación), con un calor específico alto y un volumen específico bajo;
  - trabaja a presiones moderadas;
  - se mezcla bien con su aceite;
  - no es inflamable ni explosivo;
  - su toxicidad es baja.

  (La Climatización, pág. 33; Clim. Introducción, págs. 34, 37, 40; Formauto, págs. 6-7).
- **Frente al R1234yf:** las presiones y temperaturas de trabajo son muy parecidas. Las curvas de presión se cruzan a 30 ºC: por encima de 30 ºC, el R134a tiene menos presión de saturación que el R1234yf; por debajo, más (ETAI, págs. 25-26).
- **Emisiones en uso:** las fugas inevitables de un vehículo equivalen a 7 g de CO2 por kilómetro (ETAI, pág. 26).
- **Tamaño de molécula:** es más pequeña que la del R12 (Clim. Introducción, págs. 41-42).

## Dónde se usa y cantidades

Es el fluido de los circuitos cerrados de aire acondicionado de turismos y vehículos industriales desde 1992-1995 hasta que lo retira la normativa: nuevos modelos homologados hasta 2011 y vehículos nuevos vendidos hasta 2017 (Serca, págs. 1-10; La Climatización, págs. 34, 39; ETAI, págs. 24, 26).

**La carga exacta, en gramos, la da el fabricante** en la placa del vano motor. Depende de la marca, el modelo, el motor, el año y de si lleva equipo trasero (Audi, págs. 1, 4; ETAI, pág. 27; Serca, págs. 1-10). Ejemplos de la tabla Serca:

| Vehículo | Carga de R134a |
|---|---|
| Smart Fortwo 450 (2003-06) | 450 g |
| Audi A4 B6 (2000-04) | 480-530 g |
| Citroën Xsara 1.6i / 2.0 HDi (2000-06) | 540-590 g |
| Opel Corsa C diésel (2000-05) | 560 g |
| BMW Serie 3 E46 gasolina (1998-04) | 715-765 g |
| Seat Ibiza II / Córdoba (1993-99, volante a la izquierda) | 850-880 g |
| VW Sharan (1995-00) | 950-1.000 g; **1.350-1.400 g** con equipo trasero |
| Chrysler Voyager (1994-00) | 960 g; **1.360 g** con equipo trasero |
| Iveco Eurocargo (2003-05) | 440 g |
| DAF 95 XF (1997-2004) | 700 g |
| Mercedes-Benz Actros (1997-02) | 1.100 g |
| Renault Magnum / Kerax (1996-99) | 1.400-1.450 g |
| Scania 114 / 124 / 144 / 164 (1995-) | 1.450 g |
| Iveco Eurostar / Eurotech, condensador lateral (1992-00) | 1.900 g |

**En otros sectores**, los sustitutos HFC son distintos: R407c en autobuses (en lugar del R22) y R404a o R507 en camiones frigoríficos (en lugar del R502) (Formauto, pág. 7).

### Reconversiones (retrofit) y mezclas de sustitución

- Un equipo de **R12 se puede pasar a R134a** con un kit especial (método *Retrofit*) y el lubricante adecuado. El rendimiento frigorífico queda ligeramente por debajo del original (Hella 2010, págs. 7, 27; MD Fran).
- Existen **mezclas de sustitución directa** para reconversiones (Hella ppt, pág. 99):
  - **R-406a:** R-22 (55 % ± 2 %), R-142b (41 % ± 1 %, parcialmente inflamable) y R-600a (4 % ± 1 %, inflamable).
  - **R-413a (ISCEON-49):** R-134a (88 % ± 2 %), R-218 (9 % ± 1 %) y R-600a (3 % ± 1 %, inflamable).
  - Por el isobutano (R-600a) que llevan, **son inflamables** y requieren precauciones especiales.

## Compatibilidades y mezclas prohibidas

- **Nunca se mezcla con otro refrigerante:** ni con R12, ni con R1234yf, ni con R744. Se usa solo el que especifica el sistema (ETAI, pág. 24; Clim. Introducción, págs. 41-42; MD Fran).
- **Aceites compatibles:** sintéticos **PAG** (PAG 46, PAG 100, PAG 150), **PAO 68** o Ester, según indique el fabricante (ETAI, págs. 27-28; Formauto, págs. 6-7).
- **Aceites incompatibles:**
  - los minerales del R12 (La Climatización, págs. 34, 37; Formauto, págs. 6-7);
  - el POE para compresores eléctricos, si no hay especificación técnica que lo permita (ETAI, págs. 28-29).
- **Con humedad forma ácido fluorhídrico**, muy corrosivo para los metales (Hella 2010, pág. 7; MD Fran; Clim. Introducción, págs. 41-42).

## Identificación

- **Etiqueta o placa en el vano motor.** Indica:
  - «R-134a»;
  - la cantidad de carga en gramos;
  - el tipo de aceite;
  - las instrucciones de seguridad.

  (ETAI, pág. 27; Audi, pág. 4).
- **Inscripción grabada en los racores de carga** (tomas de servicio) (La Climatización, pág. 34; Hella 2010, pág. 7).
- En las tablas Serca, todo modelo que no lleva el símbolo de R12 es de R134a (Serca, pág. 2).

## Manipulación, almacenamiento y residuos

1. **Está prohibido liberarlo a la atmósfera.**
2. **Antes de abrir el circuito hay que recuperar el gas**, con una estación de recuperación, reciclaje y carga homologada.

   (Audi, págs. 2-3; MD Fran; La Climatización, págs. 143, 149; Clim. Introducción, pág. 42).
3. **Estación, máquina y aceites exclusivos de R134a:** no se comparten con otros refrigerantes (ETAI, pág. 27).
4. **Recuperación obligatoria del 100 %:** en cargas de más de 2 kg desde 1998, y de más de 0,5 kg desde 2000 (Clim. Introducción, págs. 34, 42).
5. **Si hay una fuga, no inhalar la mezcla de gas y aire:** aspirarla con el equipo de extracción de gases del taller (Audi, págs. 2-3).
6. **No dejar componentes abiertos mucho tiempo:** entra humedad y ya no se puede cargar sin cambiar algunos componentes (Audi, págs. 2-3).
7. **Pintura:** en el horno de secado o en la zona de precalentamiento, la pieza no debe pasar de 80 ºC (Audi, págs. 2-3).

## Riesgos y normativa

**Riesgos para quien lo manipula**

- **Congelación:** sale a -26,5 ºC. En contacto con la piel u otras partes del cuerpo, congela (Audi, págs. 1-3; MD Fran; La Climatización).
- **Ojos o piel:** aclarar con agua abundante durante 15 minutos como mínimo e ir al médico (al oftalmólogo, si son los ojos), diciendo qué refrigerante era (Audi; MD Fran).
- **Asfixia:** es más denso que el aire, no huele y no se ve. En fosos y locales cerrados desplaza al oxígeno (MD Fran).
- **Calor y llama:** está prohibido soldar (con soldadura dura o blanda) o estañar componentes con el circuito cargado. Con temperatura alta o una llama, el gas se descompone y da gases tóxicos e irritantes. Calentar el circuito lleno crea una sobrepresión que puede hacerlo estallar (Audi, págs. 1-3; MD Fran).

**Normativa**

- **Capa de ozono:** no la daña (PAO = 0, porque no tiene cloro).
- **Efecto invernadero:** sí contribuye. Su PCA de 1430 supera el límite de 150 que marca la normativa (ETAI, págs. 24-25; La Climatización, pág. 38; Hella 2010, págs. 7, 9-10).
- **Directiva 2006/40/CE:**
  - prohibido en **nuevos modelos homologados desde el 1 de enero de 2011**;
  - prohibido en **todos los vehículos nuevos vendidos desde el 1 de enero de 2017**.

  (ETAI, págs. 24, 26; La Climatización, págs. 38, 144, 152).
- **Se sigue permitiendo recargarlo** en los vehículos que lo montaban de serie (ETAI, pág. 24).
- En España se aplica también el RD 795/2010 (La Climatización, pág. 152).

## Discrepancias

- **PCA/GWP:** 1430 en ETAI (págs. 24-25) frente a 0,26 en Hella 2010 (pág. 7) y MD Fran. No es una contradicción: son escalas distintas. La cifra de 0,26 se da en una escala en la que el R12 vale 3,1; en la escala del CO2 (= 1) el R12 vale 8100 (ver la nota de PCA). **Para el taller y la normativa vale 1430.**
- **Punto de ebullición:** -26,5 ºC (ETAI, Hella 2010, MD Fran) frente a -26 ºC (La Climatización, Formauto). Es solo redondeo.
- **Temperatura crítica:** 100,6 ºC (Hella 2010, MD Fran) frente a 102 ºC (La Climatización, pág. 34).
- **Presión crítica en MPa:** 40,56 bar equivalen a 4,056 MPa (La Climatización, pág. 34). Hella 2010 y MD Fran escriben «4,56 MPa»: es una errata de las fuentes.
- **Fórmula:** La Climatización (pág. 34) escribe «CH2F-CH3». Es una errata: la fórmula correcta es CH2F-CF3, como en el resto de fuentes.

## Imágenes requeridas

- Curvas comparativas de presión-temperatura del R134a y el R1234yf — Fuente: 3. Refrigerantes.pdf, pág. 26
- Etiqueta identificativa de un vehículo con R134a y cantidad de carga — Fuente: 3. Refrigerantes.pdf, pág. 27
- Cabecera de la tabla de cargas Serca en gramos — Fuente: Cargas Aire Acondicionado.pdf, pág. 2
