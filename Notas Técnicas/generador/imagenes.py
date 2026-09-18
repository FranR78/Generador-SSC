"""Engancha las capturas de imagenes/ a su nota, por el nombre del archivo.

Convención: el archivo empieza por el número de nota y sigue con un guion bajo.

    NT13_01.jpg      → Nota Técnica 13, primera foto
    NT13_02_osciloscopio.jpg → Nota 13, segunda foto, con descripción
    NT30_01.png      → Nota de Proceso 30

Todo lo que venga después del número de orden se usa como pie de foto, cambiando
los guiones bajos por espacios. Mayúsculas y minúsculas dan igual.
"""

import base64
import io
import re
from pathlib import Path

from PIL import Image, ImageOps

NOMBRE = re.compile(r"^nt(\d+)[_-](\d+)(?:[_-](.*))?$", re.I)
EXTENSIONES = {".jpg", ".jpeg", ".png", ".webp", ".gif"}

# Las capturas se reescalan antes de incrustarlas: una foto de móvil son 4 MB y
# dentro del HTML no aportaría nada frente a estos 1.100 px de ancho.
ANCHO_MAX = 1100
CALIDAD = 78


def recopilar(dir_imagenes: Path):
    """Devuelve {numero_de_nota: [(orden, pie, ruta), ...]} y la lista de descartes."""
    porNota, descartes = {}, []
    if not dir_imagenes.exists():
        return porNota, descartes

    for ruta in sorted(dir_imagenes.iterdir()):
        if not ruta.is_file() or ruta.name.startswith("."):
            continue
        if ruta.suffix.lower() not in EXTENSIONES:
            descartes.append((ruta.name, "no es una imagen"))
            continue

        m = NOMBRE.match(ruta.stem)
        if not m:
            descartes.append((ruta.name, "el nombre no empieza por NT<número>_<orden>"))
            continue

        nota = int(m.group(1))
        orden = int(m.group(2))
        pie = (m.group(3) or "").replace("_", " ").replace("-", " ").strip()
        porNota.setdefault(nota, []).append((orden, pie, ruta))

    for lista in porNota.values():
        lista.sort(key=lambda x: x[0])
    return porNota, descartes


def incrustar(ruta: Path):
    """Reescala la imagen y la devuelve como data URI lista para el <img>."""
    with Image.open(ruta) as img:
        img = ImageOps.exif_transpose(img)  # respeta la orientación de la foto
        if img.mode in ("RGBA", "P", "LA"):
            fondo = Image.new("RGB", img.size, (255, 255, 255))
            fondo.paste(img, mask=img.convert("RGBA").split()[-1])
            img = fondo
        elif img.mode != "RGB":
            img = img.convert("RGB")

        if img.width > ANCHO_MAX:
            alto = round(img.height * ANCHO_MAX / img.width)
            img = img.resize((ANCHO_MAX, alto), Image.LANCZOS)

        buffer = io.BytesIO()
        # El EXIF no se copia al guardar: la geolocalización de la foto se queda fuera.
        img.save(buffer, format="JPEG", quality=CALIDAD, optimize=True)

    datos = base64.b64encode(buffer.getvalue()).decode("ascii")
    return f"data:image/jpeg;base64,{datos}", len(datos)
