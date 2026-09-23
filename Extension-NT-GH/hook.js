// hook.js — contexto de la página. Mientras <html data-nlm-arm="1">, intercepta
// lo que NotebookLM copia y lo entrega a content.js sin usar el portapapeles real.
(() => {
  const armed = () => document.documentElement.dataset.nlmArm === "1";
  const send = (t, via) => {
    if (!armed() || !t) return false;
    delete document.documentElement.dataset.nlmArm;
    console.log("[NLM hook] capturado vía", via, String(t).length, "caracteres");
    window.postMessage({ __nlmCopy: true, text: String(t) }, "*");
    return true;
  };

  if (window.Clipboard) {
    const P = Clipboard.prototype;
    const wt = P.writeText, w = P.write;
    P.writeText = function (t) { return send(t, "writeText") ? Promise.resolve() : wt.call(this, t); };
    if (w) P.write = async function (items) {
      if (armed()) for (const it of items || []) {
        if (it.types.includes("text/plain")) {
          const txt = await (await it.getType("text/plain")).text();
          if (send(txt, "write")) return;
        }
      }
      return w.call(this, items);
    };
  }

  const ex = Document.prototype.execCommand;
  Document.prototype.execCommand = function (cmd, ...a) {
    if (armed() && String(cmd).toLowerCase() === "copy") {
      const el = document.activeElement;
      const t = el && typeof el.value === "string" && el.value
        ? el.value.slice(el.selectionStart ?? 0, el.selectionEnd ?? undefined)
        : String(getSelection());
      if (send(t, "execCommand")) return true;
    }
    return ex.call(this, cmd, ...a);
  };

  const sd = DataTransfer.prototype.setData;
  DataTransfer.prototype.setData = function (type, val) {
    if (type === "text/plain") send(val, "setData");
    return sd.call(this, type, val);
  };
})();
