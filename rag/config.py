"""Configuración central del pipeline RAG del Manual Colaborativo.

Ajusta aquí las rutas y parámetros. Todos los scripts importan de este archivo,
así que no hay que tocar la lógica para reapuntar el corpus o cambiar de modelo.
"""
import os
from pathlib import Path

# --- Rutas ---------------------------------------------------------------
BASE_DIR = Path(__file__).resolve().parent.parent

# Carpeta con los PDF de origen y carpeta de salida del índice.
# Por defecto usan corpus/ e index/ dentro del proyecto, pero en Colab se
# redirigen a Drive con las variables de entorno SSC_CORPUS_DIR / SSC_INDEX_DIR.
# ingest.py también acepta la carpeta por argumento: python3 ingest.py "/ruta/pdf"
CORPUS_DIR = Path(os.environ.get("SSC_CORPUS_DIR", BASE_DIR / "corpus"))

INDEX_DIR = Path(os.environ.get("SSC_INDEX_DIR", BASE_DIR / "index"))
CHUNKS_PATH = INDEX_DIR / "chunks.jsonl"        # salida de ingest.py
EMBEDDINGS_PATH = INDEX_DIR / "index.npz"       # salida de embed.py (matriz)
META_PATH = INDEX_DIR / "meta.jsonl"            # salida de embed.py (metadatos)

# --- Troceado (chunking) -------------------------------------------------
# Palabras por fragmento y solapamiento entre fragmentos consecutivos.
# ~250 palabras ≈ un párrafo largo; el solapamiento evita cortar ideas a la mitad.
CHUNK_WORDS = 250
CHUNK_OVERLAP = 50

# --- Modelos Gemini ------------------------------------------------------
# Embeddings: convierte texto en vectores para la búsqueda semántica.
EMBED_MODEL = "gemini-embedding-001"
EMBED_DIM = 1536          # dimensión de salida solicitada (768/1536/3072)

# Generación: redacta la respuesta final a partir de los fragmentos recuperados.
GEN_MODEL = "gemini-2.5-flash"

# La API key NUNCA se guarda en el código. Se lee de la variable de entorno
# GEMINI_API_KEY (profe y alumnos exportan la suya).
API_KEY_ENV = "GEMINI_API_KEY"

# --- Recuperación --------------------------------------------------------
TOP_K = 8                 # nº de fragmentos que se pasan como contexto a Gemini
