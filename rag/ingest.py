#!/usr/bin/env python3
"""ingest.py — Paso 1 (profe): PDF -> fragmentos con metadatos.

Recorre todos los PDF de la carpeta de corpus, extrae el texto página a página
y lo trocea en fragmentos solapados. Cada fragmento guarda de qué archivo y de
qué páginas viene, para poder citar la fuente en la respuesta final.

Salida: index/chunks.jsonl  (un fragmento JSON por línea)

Uso:
    python3 ingest.py                 # usa CORPUS_DIR de config.py
    python3 ingest.py "/ruta/a/pdf"   # o una carpeta concreta
"""
import json
import re
import sys
from pathlib import Path

from PyPDF2 import PdfReader

import config


def extract_pages(pdf_path: Path):
    """Devuelve [(nº_página, texto_limpio), ...] del PDF."""
    reader = PdfReader(str(pdf_path))
    pages = []
    for i, page in enumerate(reader.pages, start=1):
        text = page.extract_text() or ""
        text = re.sub(r"[ \t]+", " ", text)
        text = re.sub(r"\n{2,}", "\n", text).strip()
        if text:
            pages.append((i, text))
    return pages


def chunk_pages(pages, chunk_words: int, overlap: int):
    """Trocea el texto en fragmentos de ~chunk_words palabras con solapamiento,
    registrando el rango de páginas que cubre cada fragmento."""
    # Aplanamos a una lista de (palabra, nº_página) para rastrear la página.
    words = []
    for page_num, text in pages:
        for w in text.split():
            words.append((w, page_num))

    chunks = []
    step = max(1, chunk_words - overlap)
    for start in range(0, len(words), step):
        window = words[start:start + chunk_words]
        if not window:
            break
        texto = " ".join(w for w, _ in window)
        page_start = window[0][1]
        page_end = window[-1][1]
        chunks.append((texto, page_start, page_end))
        if start + chunk_words >= len(words):
            break
    return chunks


def main():
    corpus_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else config.CORPUS_DIR
    config.INDEX_DIR.mkdir(parents=True, exist_ok=True)

    pdfs = sorted(corpus_dir.rglob("*.pdf"))
    if not pdfs:
        print(f"No se han encontrado PDF en {corpus_dir}")
        return

    total_chunks = 0
    chunk_id = 0
    with config.CHUNKS_PATH.open("w", encoding="utf-8") as out:
        for pdf_path in pdfs:
            try:
                pages = extract_pages(pdf_path)
            except Exception as e:
                print(f"AVISO: no se pudo leer {pdf_path.name}: {e}")
                continue
            chunks = chunk_pages(pages, config.CHUNK_WORDS, config.CHUNK_OVERLAP)
            for texto, p_start, p_end in chunks:
                record = {
                    "chunk_id": chunk_id,
                    "source_file": pdf_path.name,
                    "source_path": str(pdf_path.relative_to(corpus_dir)),
                    "page_start": p_start,
                    "page_end": p_end,
                    "text": texto,
                }
                out.write(json.dumps(record, ensure_ascii=False) + "\n")
                chunk_id += 1
            total_chunks += len(chunks)
            print(f"OK: {pdf_path.name} -> {len(chunks)} fragmentos")

    print(f"\nTotal: {len(pdfs)} PDF, {total_chunks} fragmentos -> {config.CHUNKS_PATH}")


if __name__ == "__main__":
    main()
