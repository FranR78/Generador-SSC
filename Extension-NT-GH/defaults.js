// Configuración por defecto (compartida por todas las piezas)
const DEFAULTS = {
  repo: "",
  dir: "notas-tecnicas/entrada",
  informes: "notas-tecnicas/informes",
  origenId: "",    // Drive: lo pone él en Opciones; cambia en cada extracción
  destinoId: "",
  token: "",
  limite: 6,   // minutos máximos por fuente antes de darla por colgada
  prompt: "Procesa la fuente seleccionada.",
  sel: {
    notebookTitle: "h1.notebook-title, .notebook-title, input.title-input",
    sourceRow: ".single-source-container",
    sourceTitle: ".source-title",
    sourceCheck: "input.mdc-checkbox__native-control",
    input: 'textarea:not([formcontrolname="discoverSourcesQuery"])',
    send: 'button[aria-label="Enviar"]',
    answer: "chat-message .to-user-container",
    copy: 'button[aria-label="Copiar respuesta del modelo en el portapapeles"]'
  }
};

async function getCfg() {
  const { cfg = {} } = await chrome.storage.local.get("cfg");
  return { ...DEFAULTS, ...cfg, sel: { ...DEFAULTS.sel, ...(cfg.sel || {}) } };
}

// Contrato de nombres (docs/CONTRATO_NOMBRES.md): IDÉNTICO en datos/Movedor.gs.
// Título de la fuente / nombre del PDF → nombre del .md en GitHub.
function sanear(s) {
  return String(s).normalize("NFC").replace(/\.[^.]+$/, "").replace(/[^\p{L}\p{M}\p{N}_-]+/gu, "_");
}
