#!/usr/bin/env python3
"""Arma el portal como página suelta, para verlo sin desplegar nada.

    python3 portal/previsualizar.py

Resuelve los include() de Apps Script y sustituye google.script.run por un
doble que devuelve datos de mentira. Sirve para mirar la maquetación y que no
se envíe interfaz a ciegas; NO sustituye a probarlo desplegado, porque aquí no
hay ni servidor ni datos reales.
"""

import json
import re
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent
SALIDA = RAIZ.parent / "web-preview" / "portal.html"

# Lo que devolvería el servidor. Suficiente para pintar, nada más.
FALSO = {
    "usuarioActual": "alumno@ejemplo.edu",
    "soyProfe": True,
    "miEstado": {"consultas": 0, "sinLimite": True, "permitidas": None,
                 "restantes": None, "aportaciones": 0, "valoraciones": 0,
                 "bloqueado": False, "mensaje": ""},
    "miProgreso": {"usuario": "alumno@ejemplo.edu", "leidas": 12,
                   "notasLeidas": [1, 2, 3, 5, 7, 13, 40, 41, 50, 54, 98, 99],
                   "casosTotales": 2, "casosResueltos": 1, "intentos": 3,
                   "siguiente": {"tipo": "caso", "id": "leon-n280-cable",
                                 "titulo": "Cable gn/sw cortado entre T4t/3 y N280"},
                   "horasEntreIntentos": 12},
    "listarEstructura": {"id": "raiz", "name": "Climatización", "children": [], "files": []},
    "tengoClaveIA": True,
    "registrarConexion": True,
    "registrarLatido": True,
}


def cargar_falso_notas():
    """El índice de apuntes sale del notas.json de verdad, si está."""
    ruta = RAIZ.parent / "notas-tecnicas" / "web" / "notas.json"
    if not ruta.exists():
        return {"generado": "—", "total": 0, "grupos": [], "notas": []}
    d = json.loads(ruta.read_text(encoding="utf-8"))
    leidas = set(FALSO["miProgreso"]["notasLeidas"])
    return {
        "generado": d["generado"], "total": d["total"], "grupos": d["grupos"],
        "unidades": d.get("unidades", []),
        "notas": [{"nt": n["nt"], "titulo": n["titulo"], "menu": n["menu"],
                   "grupo": n["grupo"], "codigo": n["codigo"], "tipo": n["tipo"],
                   "unidad": n.get("unidad", ""),
                   "subtipo": n["subtipo"], "fuentes": n["fuentes"],
                   "leida": n["nt"] in leidas} for n in d["notas"]],
    }


DOBLE = """
<script>
/* ===== Doble del servidor: esto NO existe en el portal real ===== */
var _FALSO = %s;
var _NOTAS = %s;
window.google = { script: { run: (function () {
  function API(ok, mal) { this._ok = ok; this._mal = mal; }
  API.prototype.withSuccessHandler = function (f) { var a = new API(f, this._mal); return a; };
  API.prototype.withFailureHandler = function (f) { var a = new API(this._ok, f); return a; };
  var metodos = ['usuarioActual','soyProfe','miEstado','miProgreso','listarEstructura',
                 'tengoClaveIA','registrarConexion','registrarLatido','listarNotas',
                 'cargarNota','listarCasosSimulador','cargarCasoSimulador','puedoIntentar',
                 'registrarIntento','tareasAbiertas','aportacionesParaValorar','panelProfesor',
                 'listarRondas','obtenerPrompt'];
  metodos.forEach(function (m) {
    API.prototype[m] = function () {
      var args = arguments, self = this;
      setTimeout(function () {
        var r;
        if (m === 'listarNotas') r = _NOTAS;
        else if (m === 'cargarNota') r = { nt: args[0], titulo: 'Nota de ejemplo ' + args[0],
          codigo: 'G65', ubicacion: 'Tubo de alta presión',
          apartados: [{ titulo: 'Misión', texto: 'Texto de ejemplo para ver la maquetación.' },
                      { titulo: 'Cómo comprobarlo', texto: 'Otro apartado de ejemplo.' }],
          fuentes: 'Manual de ejemplo, pág. 1' };
        else if (m === 'listarCasosSimulador') r = [{ id: 'x', titulo: 'Caso de ejemplo',
          vehiculo: 'Seat León 1P · Climatronic', sintoma: 'No enfría.' }];
        else if (m === 'puedoIntentar') r = { puede: true };
        else if (m === 'tareasAbiertas' || m === 'aportacionesParaValorar' || m === 'listarRondas') r = [];
        else r = _FALSO[m];
        if (self._ok) self._ok(r);
      }, 60);
      return self;
    };
  });
  var raiz = new API();
  var salida = {};
  metodos.concat(['withSuccessHandler','withFailureHandler']).forEach(function (m) {
    salida[m] = function () { return API.prototype[m].apply(new API(), arguments); };
  });
  return salida;
})() } };
</script>
"""


def main():
    html = (RAIZ / "Portal.html").read_text(encoding="utf-8")

    def incluir(m):
        f = RAIZ / (m.group(1) + ".html")
        if not f.exists():
            print(f"No encuentro {f.name}", file=sys.stderr)
            return ""
        return f.read_text(encoding="utf-8")

    html = re.sub(r"<\?!=\s*include\('([A-Za-z]+)'\)\s*\?>", incluir, html)
    if "<?!=" in html:
        print("Han quedado plantillas sin resolver.", file=sys.stderr)
        return 1

    doble = DOBLE % (json.dumps(FALSO, ensure_ascii=False),
                     json.dumps(cargar_falso_notas(), ensure_ascii=False))
    html = html.replace("</head>", doble + "</head>", 1)

    SALIDA.parent.mkdir(exist_ok=True)
    SALIDA.write_text(html, encoding="utf-8")
    print(f"Generado {SALIDA.relative_to(RAIZ.parent)} "
          f"({len(html.encode())/1024:.0f} KB). Ábrelo en el navegador.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
