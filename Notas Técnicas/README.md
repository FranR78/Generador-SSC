# Notas Técnicas — Climatización Automotriz

Dashboard HTML de notas técnicas por componente. Cada componente es un archivo `.md` en
`notas/`; el generador produce un único HTML navegable con buscador.

## Añadir una nota nueva

1. Copia cualquier ficha de `notas/` como plantilla.
2. Cambia el número `nt:` (que debe ser único) y los metadatos.
3. Genera:
   ```bash
   python3 generador/construir.py
   ```

No hay que tocar el menú ni el HTML: el generador agrupa por el campo `grupo` y ordena por
el número `nt`.

## Dos tipos de nota

| Tipo | Para qué | Cuaderno de NotebookLM |
|---|---|---|
| `tipo: elemento` (por defecto) | Piezas físicas sustituibles | Cuaderno de Elementos |
| `tipo: proceso` | Fundamentos, procedimientos y diagnóstico | Cuaderno de Procesos |

Las de proceso necesitan además un `subtipo`: `fundamento`, `procedimiento` o `diagnostico`.
Se distinguen a simple vista porque su cabecera es verde en vez de azul.

Cada tipo tiene sus propios apartados y sus propios criterios de evaluación. Los prompts de
NotebookLM están en `prompts/`: uno por cuaderno. **No mezcles fuentes de los dos tipos en el
mismo cuaderno**: el prompt de Elementos pide ubicación física y tensión de alimentación, que
no significan nada para un cálculo como el subenfriamiento.

## Metadatos de una ficha

```yaml
---
nt: 13                      # número, único, define el orden
titulo: Transmisor de alta presión
codigo: G65                 # código del fabricante, o "Sin código documentado"
menu: Transmisor G65        # texto corto para el menú lateral
grupo: Sensores de presión  # agrupa en el menú
aplicacion: [VW Golf, Audi A3]
ubicacion: Tubo de alta presión del circuito
marca: ✦ FUSIONADO — 3 fuentes   # opcional, aparece en la cabecera azul
fuentes: Manual X, págs. 89-90 · Guía Y, pág. 50
---
```

## Apartados

Se escriben con `## ` y el generador los ordena solo. Los criterios de evaluación los añade
el generador automáticamente, según este mapa fijo:

| Apartado | Criterio |
|---|---|
| Misión | RA1-CEa · RA1-CEb |
| Principio de funcionamiento | RA1-CEb |
| Características | RA1-CEb |
| Valores de trabajo | RA3-CEh |
| Anomalías frecuentes | RA2-CEa · RA2-CEi |
| Comportamiento en avería | RA2-CEa |
| Cómo comprobarlo | RA2-CEd · RA2-CEe · RA2-CEg |

Y para las notas de proceso:

| Apartado | Criterio |
|---|---|
| Objeto y alcance | RA1-CEa |
| Fundamento | RA1-CEb |
| Condiciones previas | RA3-CEh |
| Equipo y material | RA2-CEd |
| Desarrollo | RA3-CEh |
| Valores de referencia | RA3-CEh |
| Interpretación y errores frecuentes | RA2-CEa · RA2-CEi |
| Verificación final | RA2-CEe · RA2-CEg |
| Seguridad y normativa | RA4-CEa |

Los criterios de las notas de proceso son una **propuesta sin contrastar** con el currículo
oficial. Revísalos antes de darlos por buenos.

Dos apartados se pintan como caja de color en vez de como apartado normal:

- `## Advertencias` → caja roja con ⚠️
- `## Discrepancias` → caja ámbar con 🔀, para cuando dos fuentes no coinciden

Y `## Imágenes requeridas` convierte cada elemento de la lista en una tarjeta punteada con
su referencia de página, para ir recortando las figuras del PDF cuando haya tiempo.

## Traer notas desde NotebookLM

No hace falta copiar nada a mano. Exporta la respuesta de NotebookLM a `.md` y pásasela
al importador, diciéndole por qué número empiezan las notas:

    python3 generador/importar.py respuesta.md --desde 40

Parte el archivo por notas, escribe una ficha en `notas/` por cada una y aparta la lista
de "elementos que van al otro cuaderno" en `PENDIENTES.md`, para que no se pierda.

Por el camino arregla lo que NotebookLM añade por su cuenta:

- las tablas que exporta como columnas separadas por comas, que pasa a tablas Markdown;
- las fórmulas en LaTeX (`\(SnO_2\)` → `SnO2`);
- los símbolos escapados (`1\.` → `1.`);
- los números de cita al cerrar cada frase (`...alta presión 1, 2.`).

Lo de las citas es delicado, porque en el texto hay números que sí importan. La regla es
que una cita va siempre **detrás de una letra y delante del punto que cierra la frase**.
Un valor real no cumple eso: o va detrás de dos puntos (`ambiente: 20 °C`), o lleva la
unidad pegada (`14 bares`), o el punto es separador de millar (`1.500`). Por eso
`1.500-2.000 rpm` sale intacto y `alta presión 1, 2.` se limpia.

Lo único que queda por rellenar a mano en cada ficha es `grupo` y `fuentes`; el importador
los deja marcados como `POR CLASIFICAR` y `POR COMPLETAR` para que se vean de un vistazo.

## Capturas: cómo se emparejan

El apartado `## Imágenes requeridas` de cada nota declara los huecos en orden. El generador
numera cada hueco y **muestra en pantalla el nombre exacto que debe tener el archivo**:

    NT21_01   ← primer hueco de la nota 21
    NT21_02   ← segundo hueco

Quien haga la foto solo tiene que copiar ese nombre. Cuando el archivo aparece en
`imagenes/`, la foto sustituye al hueco y hereda su descripción como pie.

Si alguien sube una captura con un número que no corresponde a ningún hueco declarado
(`NT21_05`), se pinta igualmente al final del apartado: no se pierde.

## Notas duplicadas

Cuando dos cuadernos generan la misma nota desde fuentes distintas, `construir.py` avisa
al validar. Detecta tres casos:

- El mismo código de componente en dos notas (G65 en NT13 y NT40).
- Dos títulos idénticos.
- Dos títulos que comparten sus palabras significativas.

**No las fusiona solo**: decidir si dos notas son la misma es una decisión de contenido.
Para fusionarlas: vuelca los apartados de una en la otra, suma las fuentes en el campo
`fuentes`, pon `marca: ✦ FUSIONADO — 2 fuentes` y borra la ficha sobrante. Las capturas de
la nota borrada hay que renumerarlas al hueco que les toque en la nota superviviente.

## Salidas

- `web/notas-tecnicas.html` — para abrir en el navegador.
- `web/notas-tecnicas.txt` — mismo contenido, para pegar en Google Sites con
  «Insertar → Insertar código».
