#!/usr/bin/env python3
"""query.py — Consulta (alumno o profe): pregunta -> respuesta con fuentes.

Carga el índice (index.npz + meta.jsonl), busca los fragmentos más parecidos a
la pregunta y pide a Gemini que redacte una respuesta CITANDO de qué PDF y página
sale cada dato. Es la versión de línea de comandos; la misma lógica va en el
notebook del alumno.

Requiere:  export GEMINI_API_KEY="tu_key"
Uso:       python3 query.py "¿Qué misión tiene el compresor G65?"
"""
import json
import os
import sys

import numpy as np

import config

try:
    from google import genai
    from google.genai import types
except ImportError:
    sys.exit("Falta el SDK. Instala:  pip install google-genai numpy")


SYSTEM_PROMPT = (
    "Eres un asistente técnico para alumnado de Electromecánica de Vehículos. "
    "Responde SOLO con la información de los fragmentos proporcionados. "
    "Si la respuesta no está en los fragmentos, dilo claramente. "
    "Cita siempre la fuente entre corchetes con el formato [archivo, pág. N]."
)


def get_client():
    key = os.environ.get(config.API_KEY_ENV)
    if not key:
        sys.exit(f"Define tu clave:  export {config.API_KEY_ENV}=\"tu_key_de_gemini\"")
    return genai.Client(api_key=key)


def load_index():
    if not (config.EMBEDDINGS_PATH.exists() and config.META_PATH.exists()):
        sys.exit("No hay índice. Ejecuta ingest.py y embed.py, o descarga index/ de Drive.")
    mat = np.load(config.EMBEDDINGS_PATH)["embeddings"]
    meta = [json.loads(line) for line in config.META_PATH.open(encoding="utf-8") if line.strip()]
    return mat, meta


def embed_query(client, question):
    resp = client.models.embed_content(
        model=config.EMBED_MODEL,
        contents=question,
        config=types.EmbedContentConfig(
            task_type="RETRIEVAL_QUERY",
            output_dimensionality=config.EMBED_DIM,
        ),
    )
    v = np.asarray(resp.embeddings[0].values, dtype=np.float32)
    return v / (np.linalg.norm(v) + 1e-9)


def search(qvec, mat, meta, k):
    scores = mat @ qvec                      # coseno (todo está normalizado L2)
    top = np.argsort(-scores)[:k]
    return [(meta[i], float(scores[i])) for i in top]


def build_context(hits):
    bloques = []
    for m, _ in hits:
        etiqueta = f'[{m["source_file"]}, pág. {m["page_start"]}]'
        bloques.append(f'{etiqueta}\n{m["text"]}')
    return "\n\n---\n\n".join(bloques)


def main():
    if len(sys.argv) < 2:
        sys.exit('Uso: python3 query.py "tu pregunta"')
    question = " ".join(sys.argv[1:])

    client = get_client()
    mat, meta = load_index()
    hits = search(embed_query(client, question), mat, meta, config.TOP_K)

    contenido = f"FRAGMENTOS:\n{build_context(hits)}\n\nPREGUNTA: {question}"
    resp = client.models.generate_content(
        model=config.GEN_MODEL,
        contents=contenido,
        config=types.GenerateContentConfig(system_instruction=SYSTEM_PROMPT),
    )

    print("\n" + "=" * 70)
    print(resp.text)
    print("=" * 70)
    print("\nFuentes consultadas:")
    for m, score in hits:
        print(f"  · {m['source_file']} (pág. {m['page_start']}-{m['page_end']})  sim={score:.2f}")


if __name__ == "__main__":
    main()
