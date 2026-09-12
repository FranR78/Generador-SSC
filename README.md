# Generador-SSC — Biblioteca de PDF consultable + super-manual colaborativo

Sistema para que el alumnado de **Sistemas de Seguridad y Confortabilidad** y
**Optativa de Osciloscopio** (IES La Palma · Fran Rosales) consulte una
biblioteca de cientos de PDF con **su propia API key de Gemini** —sin el límite
de 50 fuentes de NotebookLM— y construya entre todos un manual de referencia.

## Cómo encajan las piezas

GitHub es el **armario del código** (no ejecuta nada, no tiene los PDF). El
trabajo pesado corre en **Colab**, que lee los PDF de **Drive**. Los alumnos
consultan desde el **portal** web.

```
TU MAC (+ Claude)  →  escribe/arregla el código
      │  push
      ▼
GITHUB (este repo) →  guarda el código con historial   ← armario, no trabaja
      │  Colab descarga el código
      ▼
GOOGLE COLAB       →  monta Drive, lee los PDF, crea el índice   ← aquí se trabaja
      │
      ▼
PORTAL web         →  el alumnado consulta con su propia key de Gemini
```

Los **PDF viven en Drive**, nunca en GitHub ni en el Mac.

## Estructura del repo

```
├── portal/     Frontend web (Google Apps Script): login Google, Gemini, Drive,
│               incrustable en Sites y usable desde el móvil.
│   ├── Code.gs
│   ├── index.html
│   └── appsscript.json
├── rag/        Pipeline Python de búsqueda semántica (lo nuevo).
│   ├── config.py       Rutas, modelos y parámetros en un solo sitio.
│   ├── ingest.py       PDF -> fragmentos con su página de origen.
│   ├── embed.py        Fragmentos -> índice de embeddings (resumible).
│   ├── query.py        Pregunta -> respuesta citada por PDF y página.
│   └── requirements.txt
├── colab/      Notebook de indexado en la nube (pendiente).
├── corpus/     (local) PDF de prueba. Los de verdad están en Drive.
└── index/      (local/Colab) salida del índice. No se sube a git.
```

## Estado

- [x] `portal/` — app Apps Script (MVP anterior: filtra por carpeta, máx. 5 PDF/pregunta)
- [x] `rag/` — pipeline de embeddings para búsqueda semántica sobre TODA la colección
- [ ] `colab/` — notebook de indexado (siguiente paso)
- [ ] Enchufar el índice al portal (búsqueda semántica real en la web)
- [ ] Capa colaborativa: super-manual con propuestas y votación

## Uso del pipeline (rag/)

```bash
cd rag
export GEMINI_API_KEY="tu_clave"        # https://aistudio.google.com/apikey
./venv/bin/python ingest.py "/ruta/a/carpeta/pdf"   # trocea los PDF
./venv/bin/python embed.py                          # crea el índice (usa tu key)
./venv/bin/python query.py "¿presión de trabajo en alta?"   # consulta de prueba
```

> Nota: los PDF de Drive suelen estar "solo online". Para indexar en local hay
> que marcarlos como "Disponible sin conexión"; en Colab no hace falta.
