#!/usr/bin/env python3
"""embed.py — Paso 2 (profe, 1 sola vez): fragmentos -> índice de embeddings.

Lee index/chunks.jsonl, pide a Gemini el embedding de cada fragmento y guarda:
  - index/index.npz  : matriz numpy (N x DIM) float32, normalizada
  - index/meta.jsonl : metadatos paralelos (mismo orden que las filas)

Es RESUMIBLE: si se corta, vuelve a lanzarlo y continúa donde lo dejó.
El índice resultante es lo que subes a Drive para que lo usen los alumnos.

Requiere:  export GEMINI_API_KEY="tu_key"
Uso:       python3 embed.py
"""
import json
import os
import sys
import time

import numpy as np

import config

try:
    from google import genai
    from google.genai import types
except ImportError:
    sys.exit("Falta el SDK. Instala:  pip install google-genai numpy")


BATCH = 50            # fragmentos por llamada
MAX_RETRIES = 5


def get_client():
    key = os.environ.get(config.API_KEY_ENV)
    if not key:
        sys.exit(f"Define tu clave:  export {config.API_KEY_ENV}=\"tu_key_de_gemini\"")
    return genai.Client(api_key=key)


def load_chunks():
    with config.CHUNKS_PATH.open(encoding="utf-8") as f:
        return [json.loads(line) for line in f if line.strip()]


def load_progress():
    """Devuelve (embeddings_previos, nº_ya_procesados) para poder reanudar."""
    if config.EMBEDDINGS_PATH.exists() and config.META_PATH.exists():
        data = np.load(config.EMBEDDINGS_PATH)
        done = sum(1 for _ in config.META_PATH.open(encoding="utf-8"))
        return list(data["embeddings"]), done
    return [], 0


def embed_batch(client, texts):
    for attempt in range(MAX_RETRIES):
        try:
            resp = client.models.embed_content(
                model=config.EMBED_MODEL,
                contents=texts,
                config=types.EmbedContentConfig(
                    task_type="RETRIEVAL_DOCUMENT",
                    output_dimensionality=config.EMBED_DIM,
                ),
            )
            return [e.values for e in resp.embeddings]
        except Exception as e:
            wait = 2 ** attempt
            print(f"  reintento {attempt+1}/{MAX_RETRIES} tras error ({e}); espero {wait}s")
            time.sleep(wait)
    raise RuntimeError("Se agotaron los reintentos con la API de embeddings")


def main():
    if not config.CHUNKS_PATH.exists():
        sys.exit("No existe chunks.jsonl. Ejecuta primero ingest.py")

    client = get_client()
    chunks = load_chunks()
    embeddings, done = load_progress()
    if done:
        print(f"Reanudando: {done}/{len(chunks)} fragmentos ya procesados")

    meta_mode = "a" if done else "w"
    with config.META_PATH.open(meta_mode, encoding="utf-8") as meta_out:
        for start in range(done, len(chunks), BATCH):
            batch = chunks[start:start + BATCH]
            vectors = embed_batch(client, [c["text"] for c in batch])
            for c, v in zip(batch, vectors):
                embeddings.append(v)
                meta = {k: c[k] for k in
                        ("chunk_id", "source_file", "source_path", "page_start", "page_end", "text")}
                meta_out.write(json.dumps(meta, ensure_ascii=False) + "\n")
            meta_out.flush()
            # Guardado incremental de la matriz (por si se corta).
            mat = np.asarray(embeddings, dtype=np.float32)
            mat /= (np.linalg.norm(mat, axis=1, keepdims=True) + 1e-9)  # normaliza L2
            np.savez_compressed(config.EMBEDDINGS_PATH, embeddings=mat)
            print(f"  {min(start+BATCH, len(chunks))}/{len(chunks)} fragmentos")

    print(f"\nÍndice listo: {len(embeddings)} vectores -> {config.EMBEDDINGS_PATH}")
    print("Sube la carpeta index/ a Drive para compartirla con el alumnado.")


if __name__ == "__main__":
    main()
