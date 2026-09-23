const $ = id => document.getElementById(id);
const F = ["repo", "dir", "informes", "token", "prompt", "origenId", "destinoId"];
const LABELS = {
  notebookTitle: "Título del cuaderno (informe)",
  sourceRow: "Fila de cada fuente",
  sourceTitle: "Título de la fuente",
  sourceCheck: "Casilla de la fuente",
  input: "Caja del chat",
  send: "Botón enviar",
  answer: "Respuesta del modelo",
  copy: "Botón copiar de la respuesta"
};

// Crear un campo por selector
for (const k of Object.keys(DEFAULTS.sel)) {
  $("sels").insertAdjacentHTML("beforeend",
    `<label for="sel_${k}">${LABELS[k] || k}</label><input id="sel_${k}">`);
}

function fill(c) {
  F.forEach(k => $(k).value = c[k]);
  Object.keys(DEFAULTS.sel).forEach(k => $("sel_" + k).value = c.sel[k]);
}
getCfg().then(fill);

function flash(el, text, kind) {
  el.textContent = text; el.className = "msg " + kind;
  if (kind === "ok") setTimeout(() => el.textContent = "", 2500);
}

$("save").onclick = async () => {
  const cfg = Object.fromEntries(F.map(k => [k, $(k).value.trim()]));
  cfg.sel = Object.fromEntries(Object.keys(DEFAULTS.sel).map(k => [k, $("sel_" + k).value.trim() || DEFAULTS.sel[k]]));
  const id = /^[\w-]{10,}$/;
  if ([cfg.origenId, cfg.destinoId].some(v => v && !id.test(v))) return flash($("saveMsg"), "ID de carpeta no válido: pega solo lo que va tras /folders/.", "err");
  if (cfg.repo && !/^[\w.-]+\/[\w.-]+$/.test(cfg.repo)) return flash($("saveMsg"), "El repositorio debe tener formato usuario/repo.", "err");
  await chrome.storage.local.set({ cfg });
  flash($("saveMsg"), "Guardado ✓", "ok");
};

$("reset").onclick = () => Object.keys(DEFAULTS.sel).forEach(k => $("sel_" + k).value = DEFAULTS.sel[k]);

$("test").onclick = async () => {
  const repo = $("repo").value.trim(), token = $("token").value.trim();
  if (!repo || !token) return flash($("testMsg"), "Rellena repositorio y token.", "err");
  flash($("testMsg"), "Comprobando…", "");
  try {
    const r = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" }
    });
    if (r.ok) flash($("testMsg"), "Conexión correcta ✓", "ok");
    else if (r.status === 401) flash($("testMsg"), "Token no válido o caducado.", "err");
    else if (r.status === 404) flash($("testMsg"), "No encuentro el repo o el token no tiene acceso a él.", "err");
    else flash($("testMsg"), `GitHub respondió ${r.status}.`, "err");
  } catch { flash($("testMsg"), "Sin conexión con GitHub.", "err"); }
};

$("testUp").onclick = async () => {
  flash($("testMsg"), "Guarda primero los cambios. Subiendo…", "");
  const res = await chrome.runtime.sendMessage({ cmd: "upload", name: "_prueba_extension", md: `# Prueba\n\nSubido desde la extensión el ${new Date().toLocaleString("es-ES")}.\n` });
  if (res && res.ok) {
    const c = await getCfg();
    flash($("testMsg"), `Subido ✓ → ${c.dir.replace(/^\/+|\/+$/g, "")}/_prueba_extension.md`, "ok");
  } else flash($("testMsg"), `Error al subir: ${res ? res.status : "sin respuesta"}`, "err");
};
