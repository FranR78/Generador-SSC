# Generador-SSC — Consulta de apuntes en PDF

Web app (Google Apps Script) que deja al alumnado filtrar tu colección de PDF por carpeta/tema y preguntar sobre su contenido. Las respuestas se generan con Gemini a partir únicamente de los PDF seleccionados (sin vector DB, sin coste de infraestructura propia).

## Despliegue

1. Crea un proyecto de Apps Script (script.google.com) o vincúlalo a una hoja/carpeta.
2. Sube `Code.gs`, `index.html` y `appsscript.json` (con `clasp push` o copiando el contenido).
3. En **Configuración del proyecto → Propiedades del script**, añade:
   - `ROOT_FOLDER_ID`: ID de la carpeta de Drive con la colección de PDF (organizada en subcarpetas por módulo/tema).
   - `GEMINI_API_KEY`: API key de [Google AI Studio](https://aistudio.google.com/apikey) (cuenta personal, capa gratuita).
4. **Implementar → Nueva implementación → Aplicación web**. Acceso: "Cualquier usuario" (o restringe al dominio si prefieres).
5. Comparte la URL con el alumnado, o insértala en Sites con un iframe/enlace.

## Organización de la colección en Drive

```
Carpeta raíz (ROOT_FOLDER_ID)
├── Módulo X
│   ├── Tema 1
│   │   ├── apunte1.pdf
│   │   └── apunte2.pdf
│   └── Tema 2
└── Módulo Y
```

El árbol de carpetas es el único "filtro": no hace falta mantener metadatos aparte. Cuantos más niveles y nombres claros, más fácil de filtrar para el alumnado.

## Límites del MVP

- Máximo 5 PDF por pregunta y 15 MB por PDF (limitación de la API de Gemini vía datos incrustados).
- No hay búsqueda semántica entre cientos de documentos a la vez: el alumnado filtra primero por carpeta/tema y luego pregunta sobre lo filtrado.
- Si el volumen de consultas crece, el siguiente paso natural es indexar embeddings para búsqueda automática entre toda la colección sin filtrado manual.
