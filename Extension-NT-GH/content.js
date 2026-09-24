// content.js — NotebookLM → GitHub (v0.4)
const sleep = ms => new Promise(r => setTimeout(r, ms));
let SEL = DEFAULTS.sel;
let running = false, stopRequested = false;
let turno = 0;   // cambia al vencer el límite de una fuente: los bucles del turno viejo se paran
const vigente = t => { if (t !== turno || stopRequested) throw new Error("cancelado"); };
// Texto de NotebookLM cuando está saturado o falla (por la tarde pasa mucho).
const ERROR_NLM = /algo (ha )?(salido|ido) mal|se ha producido un error|int[ée]ntalo de nuevo|something went wrong|try again|no se ha podido generar/i;
const $$ = s => [...document.querySelectorAll(s)];

// ---------- Panel de progreso en la página ----------
function ui(msg, kind = "") {
  let box = document.getElementById("nlm-ui");
  if (!box) {
    box = document.createElement("div");
    box.id = "nlm-ui";
    box.innerHTML = `
      <div style="background:#007932;color:#fff;padding:8px 12px;font-weight:600;display:flex;gap:10px;align-items:center">
        <span style="flex:1">NotebookLM → GitHub</span>
        <span id="nlm-stop" style="cursor:pointer;background:#fff;color:#007932;border-radius:4px;padding:1px 8px;font-size:12px">Detener</span>
        <span id="nlm-x" style="cursor:pointer">✕</span>
      </div>
      <div id="nlm-log" style="padding:8px 12px;max-height:220px;overflow:auto"></div>`;
    Object.assign(box.style, {
      position: "fixed", right: "16px", bottom: "16px", width: "300px", zIndex: 99999,
      background: "#fff", border: "1px solid #27ae60", borderRadius: "8px", overflow: "hidden",
      font: "13px/1.4 'Open Sans',system-ui,sans-serif", color: "#222", boxShadow: "0 4px 16px rgba(0,0,0,.15)"
    });
    document.body.appendChild(box);
    box.querySelector("#nlm-x").onclick = () => box.remove();
    box.querySelector("#nlm-stop").onclick = () => { if (running) { stopRequested = true; ui("Deteniendo tras la fuente actual…"); } };
  }
  const color = { ok: "#007932", err: "#c0392b" }[kind] || "#444";
  const line = document.createElement("div");
  line.style.color = color;
  line.textContent = msg;
  const log = box.querySelector("#nlm-log");
  log.appendChild(line);
  log.scrollTop = log.scrollHeight;
  console.log("[NLM]", msg);
}

// ---------- Pasos ----------
// Espera a que haya respuesta nueva, con botón copiar (= terminada) y texto estable
async function waitAnswer(prev, t0 = turno) {
  let last = "", stable = 0;
  for (let t = 0; t < 600 && stable < 3; t++) {
    await sleep(1500);
    vigente(t0);
    const a = $$(SEL.answer);
    if (a.length <= prev) continue;
    const el = a.at(-1);
    if (ERROR_NLM.test(el.innerText || "") && (el.innerText || "").length < 400)
      throw new Error("NotebookLM devolvió un error (saturado)");
    if (!el.querySelector(SEL.copy)) { stable = 0; continue; }
    const txt = el.innerText;
    stable = (txt && txt === last) ? stable + 1 : 0;
    last = txt;
  }
  if (stable < 3) throw new Error("tiempo agotado esperando la respuesta");
}

// Convierte el HTML de la respuesta a Markdown (plan B si la copia no se captura)
function toMd(root) {
  const walk = (n, ctx = {}) => {
    if (n.nodeType === 3) return n.textContent.replace(/\s+/g, " ");
    if (n.nodeType !== 1) return "";
    const tag = n.tagName.toLowerCase();
    if (["button", "mat-icon", "svg", "script", "style"].includes(tag)) return "";
    const kids = (c = ctx) => [...n.childNodes].map(k => walk(k, c)).join("");
    switch (tag) {
      case "h1": case "h2": case "h3": case "h4": case "h5": case "h6":
        return `\n\n${"#".repeat(+tag[1])} ${kids().trim()}\n\n`;
      case "p": case "div": return `\n\n${kids().trim()}\n\n`;
      case "br": return "  \n";
      case "strong": case "b": { const t = kids().trim(); return t ? `**${t}**` : ""; }
      case "em": case "i": { const t = kids().trim(); return t ? `*${t}*` : ""; }
      case "code": return "`" + n.textContent + "`";
      case "pre": return "\n\n```\n" + n.textContent.trim() + "\n```\n\n";
      case "a": return `[${kids().trim()}](${n.href})`;
      case "ul": case "ol": {
        const depth = (ctx.depth ?? -1) + 1;
        const items = [...n.children].filter(c => c.tagName === "LI").map((li, i) =>
          `${"  ".repeat(depth)}${tag === "ol" ? `${i + 1}.` : "-"} ${[...li.childNodes].map(k => walk(k, { depth })).join("").trim().replace(/\n{2,}/g, "\n")}`);
        return `\n\n${items.join("\n")}\n\n`;
      }
      case "table": {
        const rows = [...n.querySelectorAll("tr")].map(tr =>
          "| " + [...tr.children].map(c => walk(c).trim().replace(/\|/g, "\\|").replace(/\s*\n+\s*/g, " ")).join(" | ") + " |");
        if (!rows.length) return "";
        const cols = rows[0].split(" | ").length;
        rows.splice(1, 0, "|" + " --- |".repeat(cols));
        return `\n\n${rows.join("\n")}\n\n`;
      }
      default: return kids();
    }
  };
  return walk(root).replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}

// Pulsa "copiar" y captura el texto vía hook.js; si falla, lee la respuesta del DOM
async function copyAnswer(ans) {
  const btn = ans.querySelector(SEL.copy);
  const fromDom = () => toMd(ans.querySelector(".message-text-content") || ans);
  if (!btn) return { md: fromDom(), via: "DOM" };
  const got = new Promise(resolve => {
    const t = setTimeout(() => { window.removeEventListener("message", on); resolve(null); }, 5000);
    function on(e) {
      if (e.source === window && e.data && e.data.__nlmCopy) {
        clearTimeout(t); window.removeEventListener("message", on); resolve(e.data.text);
      }
    }
    window.addEventListener("message", on);
  });
  document.documentElement.dataset.nlmArm = "1";
  btn.click();
  const text = await got;
  delete document.documentElement.dataset.nlmArm;
  return text ? { md: text, via: "copiar" } : { md: fromDom(), via: "DOM" };
}

async function selectOnly(rows, i) {
  rows.forEach((r, j) => {
    const cb = r.querySelector(SEL.sourceCheck);
    if (cb && cb.checked !== (i === j)) cb.click();
  });
  await sleep(800);
}

async function sendPrompt(prompt, t0 = turno) {
  const box = document.querySelector(SEL.input);
  if (!box) throw new Error("no encuentro la caja del chat");
  box.focus();
  box.value = prompt;
  box.dispatchEvent(new Event("input", { bubbles: true }));
  // Reintenta hasta que la caja se vacíe (= enviado). Si NotebookLM sigue generando, espera.
  for (let t = 0; t < 300; t++) {
    await sleep(t ? 3000 : 500);
    vigente(t0);
    if (!box.value.trim()) return;
    const btn = document.querySelector(SEL.send) || (box.closest("form") || document).querySelector("button[type=submit]");
    if (btn && !btn.disabled) btn.click();
    else box.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", code: "Enter", keyCode: 13, bubbles: true }));
  }
  throw new Error("no se pudo enviar el mensaje");
}

// ---------- Bucle principal ----------
// start: índice inicial (popup). only: lista de índices concretos (reintentar fallidas).
async function run(start = 0, only = null, auto = false) {
  if (running) return;
  running = true; stopRequested = false;
  document.getElementById("nlm-retry")?.remove();
  const cfg = await getCfg();
  SEL = cfg.sel;
  const limite = Math.max(2, +cfg.limite || 6) * 60000;   // minutos por fuente
  const rows = $$(SEL.sourceRow);
  let queue;
  if (only) {
    queue = only.filter(i => i < rows.length);
    ui(`Reintentando ${queue.length} fuente(s) fallida(s).`);
  } else {
    start = Math.min(Math.max(0, start | 0), rows.length - 1);
    queue = rows.map((_, i) => i).slice(start);
    ui(`${rows.length} fuentes. Empiezo por la ${start + 1}.`);
  }
  let ok = 0, seguidos = 0;
  const failed = [], lote = [];
  const lotId = nombreLote();

  for (const [k, i] of queue.entries()) {
    if (stopRequested) { ui("Detenido por el usuario."); break; }
    const row = rows[i];
    const title = row.querySelector(SEL.sourceTitle)?.innerText.trim() || `fuente_${i + 1}`;
    const name = sanear(title);
    const t0 = ++turno;
    try {
      ui(`${i + 1}/${rows.length} · ${title}…`);
      const r = await conLimite(procesar(rows, i, cfg, t0), limite,
        `sin respuesta en ${limite / 60000} min (NotebookLM colgado o saturado)`);
      const res = await chrome.runtime.sendMessage({ cmd: "upload", name, md: r.md });
      if (!res.ok) throw new Error(`GitHub respondió ${res.status}`);
      ui(`✓ ${name}.md ${res.updated ? "actualizado" : "subido"} (${r.via})`, "ok");
      ok++; seguidos = 0;
      lote.push({ title, name, ok: true });
    } catch (e) {
      turno++;   // corta cualquier bucle que siguiera vivo de esta fuente
      ui(`✗ ${title}: ${e.message}`, "err");
      failed.push(i); seguidos++;
      lote.push({ title, name, ok: false, motivo: e.message });
    }
    // El informe se sube tras CADA fuente: si la tanda se cuelga, queda escrito hasta dónde llegó.
    await informe(cfg, lote, lotId, `EN CURSO · ${k + 1} de ${queue.length}`);
    if (seguidos >= 2 && !stopRequested) {
      ui("NotebookLM parece saturado: pausa de 3 min antes de seguir…", "err");
      await sleep(180000); seguidos = 0;
    } else await sleep(5000);
  }
  const estado = stopRequested ? "DETENIDO" : "TERMINADO";
  ui(`${estado === "DETENIDO" ? "Detenido" : "Terminado"}: ${ok} subidos, ${failed.length} con error.`, failed.length ? "err" : "ok");
  await informe(cfg, lote, lotId, estado, true);
  running = false;
  // Un reintento automático de las fallidas, tras una pausa, si no lo ha parado el usuario.
  if (failed.length && !only && !stopRequested && !auto) {
    ui("Reintento automático de las fallidas en 2 min…");
    await sleep(120000);
    if (!stopRequested) return run(0, failed, true);
  }
  if (failed.length) retryButton(failed);
}

// Una fuente: seleccionar, preguntar, esperar y copiar. Devuelve {md, via}.
async function procesar(rows, i, cfg, t0) {
  await selectOnly(rows, i);
  vigente(t0);
  const prev = $$(SEL.answer).length;
  await sendPrompt(cfg.prompt, t0);
  await waitAnswer(prev, t0);
  vigente(t0);
  const r = await copyAnswer($$(SEL.answer).at(-1));
  if (/no puede responder/i.test(r.md)) throw new Error("NotebookLM no ha podido responder");
  if (ERROR_NLM.test(r.md) && r.md.length < 400) throw new Error("NotebookLM devolvió un error (saturado)");
  return r;
}

function conLimite(promesa, ms, motivo) {
  let t;
  return Promise.race([promesa, new Promise((_, no) => { t = setTimeout(() => no(new Error(motivo)), ms); })])
    .finally(() => clearTimeout(t));
}

// ---------- Informe del lote (docs/AUTOMATIZACION.md) ----------
// .md para leerlo en el móvil; .json gemelo para el movedor (datos/Movedor.gs).
function tituloCuaderno() {
  const el = document.querySelector(SEL.notebookTitle);
  const t = (el?.value || el?.innerText || "").trim() || document.title.replace(/\s*[-|–].*NotebookLM.*$/i, "").trim();
  return t || "cuaderno";
}

function nombreLote() {
  const a = new Date(), p = n => String(n).padStart(2, "0");
  return `${a.getFullYear()}-${p(a.getMonth() + 1)}-${p(a.getDate())}_${p(a.getHours())}${p(a.getMinutes())}_${sanear(tituloCuaderno())}`;
}

async function informe(cfg, lote, name, estado, avisar = false) {
  const cuaderno = tituloCuaderno();
  const ahora = new Date();
  const oks = lote.filter(x => x.ok), kos = lote.filter(x => !x.ok);
  const json = {
    cuaderno, estado, fecha: ahora.toISOString(), origenId: cfg.origenId || "", destinoId: cfg.destinoId || "",
    dirNotas: cfg.dir, total: lote.length, subidos: oks.length, fallidos: kos.length, fuentes: lote
  };
  const md = [
    `# Informe · ${cuaderno}`, "",
    `- Estado: **${estado}**`,
    `- Última actualización: ${ahora.toLocaleString("es-ES")}`,
    `- Subidos: **${oks.length}** · Fallidos: **${kos.length}** · Total: ${lote.length}`,
    `- Origen Drive: ${cfg.origenId || "(sin poner)"} · Destino: ${cfg.destinoId || "(NT-GH-Procesados)"}`, "",
    "> **Subido** = PUT OK. **Nota confirmada** = existe `entrada/procesados/<name>.md`.",
    "> Vaciar el cuaderno solo cuando el movedor haya pasado el PDF a Procesados.", "",
    "## Subidos", "", ...(oks.length ? oks.map(x => `- [ ] ${x.title} → \`${x.name}.md\``) : ["(ninguno)"]), "",
    "## Fallidos", "", ...(kos.length ? kos.map(x => `- ${x.title}: ${x.motivo}`) : ["(ninguno)"]), ""
  ].join("\n");
  for (const [ext, body] of [["json", JSON.stringify(json, null, 2) + "\n"], ["md", md]]) {
    const res = await chrome.runtime.sendMessage({ cmd: "upload", name, md: body, dir: cfg.informes, ext });
    if (!res.ok) { ui(`✗ Informe .${ext}: GitHub respondió ${res.status}`, "err"); return; }
  }
  if (avisar) ui(`✓ Informe: ${cfg.informes}/${name}.md`, "ok");
}

function retryButton(failed) {
  const log = document.getElementById("nlm-log");
  if (!log) return;
  const b = document.createElement("button");
  b.id = "nlm-retry";
  b.textContent = `Reintentar fallidas (${failed.length})`;
  Object.assign(b.style, {
    margin: "8px 0 4px", padding: "6px 12px", border: "0", borderRadius: "6px",
    background: "#27ae60", color: "#fff", font: "600 13px 'Open Sans',system-ui,sans-serif", cursor: "pointer"
  });
  b.onclick = () => run(0, failed);
  log.appendChild(b);
  log.scrollTop = log.scrollHeight;
}

// ---------- Mensajes del popup ----------
chrome.runtime.onMessage.addListener((m, _, reply) => {
  if (m.cmd === "status") {
    getCfg().then(c => {
      try {
        const rows = [...document.querySelectorAll(c.sel.sourceRow)];
        const titles = rows.map((r, i) => r.querySelector(c.sel.sourceTitle)?.innerText.trim() || `Fuente ${i + 1}`);
        reply({ running, sources: rows.length, titles });
      } catch { reply({ running, sources: -1, titles: [] }); }
    });
    return true;
  }
  if (m.cmd === "start") run(m.start);
});
