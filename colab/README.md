# colab/ — Indexado en la nube

**`indexar.ipynb`**: abre en Google Colab (botón derecho → Abrir con → Colab, o
súbelo a colab.research.google.com) y ejecuta las celdas en orden.

Qué hace, todo en la nube de Google (gratis, sin tocar el Mac ni el servidor):

1. Autentica con tu cuenta Google.
2. Localiza los 181 PDF de la carpeta de Drive (por ID, incluye subcarpetas).
3. Los descarga a la máquina temporal de Colab.
4. Descarga el código `rag/` desde GitHub e instala dependencias.
5. Pide tu API key de Gemini y monta tu Drive para la salida.
6-7. Trocea (`ingest`) y crea el índice de embeddings (`embed`).
8. Prueba una consulta.

El índice queda en tu Drive en **`MyDrive/Generador-SSC-index/`**, listo para
enchufarlo al portal. Se puede lanzar desde el móvil.
