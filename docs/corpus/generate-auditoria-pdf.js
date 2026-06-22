/*
 * Generador de PDF — Auditoría de Estado GrowthCore
 * Portada de marca (navy + verde + logo) + render del documento de auditoría.
 * Uso: node docs/corpus/generate-auditoria-pdf.js
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const BASE = path.resolve(__dirname);
const MD_PATH = path.join(BASE, 'AUDITORIA-ESTADO-GROWTHCORE-2026-06-21.md');
const HTML_PATH = path.join(BASE, 'AUDITORIA-ESTADO-GROWTHCORE-2026-06-21.html');
const PDF_PATH = path.join(BASE, 'GrowthCore-Auditoria-Estado-2026-06-21.pdf');

const CHROME_CANDIDATES = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
];
const CHROME = CHROME_CANDIDATES.find(p => fs.existsSync(p));

// Logos OFICIALES (public/brand/).
// Wordmark dark = navy sobre claro (header). Mark white = isotipo blanco para portada navy.
const BRAND_DIR = path.resolve(BASE, '..', '..', 'public', 'brand');
const LOGO_WORDMARK = fs.readFileSync(path.join(BRAND_DIR, 'growthcore-logo-dark.svg'), 'utf8');
const LOGO_ICON = fs.readFileSync(path.join(BRAND_DIR, 'growthcore-mark-white.svg'), 'utf8');

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:wght@400;500;700&display=swap');
@page { size: A4; margin: 18mm 16mm 16mm 16mm; }
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'DM Sans','Segoe UI',Arial,sans-serif; font-size: 10.5pt; color: #1E293B; background: #fff; line-height: 1.7; }

/* ── PORTADA ── */
.cover {
  position: relative; height: 257mm; background: #0A1022; border-radius: 6px;
  color: #F8FAFC; display: flex; flex-direction: column; justify-content: center;
  align-items: center; text-align: center; overflow: hidden; page-break-after: always;
}
.cover::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(circle at 50% 28%, rgba(34,197,94,0.16), transparent 42%),
              radial-gradient(circle at 85% 88%, rgba(34,197,94,0.10), transparent 40%);
}
.cover-grid {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(148,163,184,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(148,163,184,0.05) 1px, transparent 1px);
  background-size: 26px 26px;
}
.cover-logo { position: relative; width: 120px; height: 120px; margin-bottom: 26px; }
.cover-logo svg { width: 100%; height: 100%; }
.cover-logo .ring { position: absolute; inset: -22px; border: 1.5px solid rgba(34,197,94,0.35); border-radius: 50%; }
.cover-eyebrow { position: relative; font-family: 'Space Grotesk',sans-serif; font-size: 9pt; font-weight: 600; letter-spacing: 0.32em; text-transform: uppercase; color: #22C55E; margin-bottom: 16px; }
.cover-title { position: relative; font-family: 'Space Grotesk',sans-serif; font-size: 34pt; font-weight: 700; letter-spacing: -0.02em; line-height: 1.08; color: #F8FAFC; margin-bottom: 12px; max-width: 420px; }
.cover-sub { position: relative; font-size: 12pt; color: #94A3B8; max-width: 380px; line-height: 1.5; }
.cover-pills { position: relative; margin-top: 28px; display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; }
.cover-pill { padding: 8px 16px; border: 1px solid rgba(34,197,94,0.3); border-radius: 40px; font-family: 'Space Grotesk',sans-serif; font-size: 9pt; color: #DCFCE7; }
.cover-pill b { color: #22C55E; }
.cover-foot { position: absolute; bottom: 26px; left: 0; right: 0; display: flex; justify-content: space-between; padding: 0 34px; font-size: 8.5pt; color: #64748B; }
.cover-foot strong { color: #94A3B8; font-weight: 600; }

/* ── HEADER CORRIDO ── */
.run-header { display: flex; align-items: center; gap: 10px; padding-bottom: 12px; margin-bottom: 8px; border-bottom: 1.5px solid #E2E8F0; }
.run-header svg { height: 26px; width: auto; }
.run-header .tag { margin-left: auto; font-family: 'Space Grotesk',sans-serif; font-size: 8pt; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #22C55E; }

/* ── TIPOGRAFÍA ── */
h1 { font-family: 'Space Grotesk',sans-serif; font-size: 17pt; font-weight: 700; color: #0A1022; margin: 30px 0 12px; padding: 10px 0 10px 14px; border-left: 5px solid #22C55E; letter-spacing: -0.01em; page-break-after: avoid; }
h2 { font-family: 'Space Grotesk',sans-serif; font-size: 13pt; font-weight: 600; color: #0A1022; margin: 24px 0 8px; padding-bottom: 5px; border-bottom: 1.5px solid #22C55E; page-break-after: avoid; }
h3 { font-family: 'Space Grotesk',sans-serif; font-size: 10.5pt; font-weight: 600; color: #16A34A; margin: 16px 0 6px; text-transform: uppercase; letter-spacing: 0.05em; page-break-after: avoid; }
p { margin-bottom: 10px; }
strong { font-weight: 700; color: #0A1022; }
em { color: #475569; font-style: italic; }

blockquote { background: #F0FDF4; border-left: 4px solid #22C55E; border-radius: 0 5px 5px 0; padding: 14px 18px; margin: 16px 0; font-size: 11pt; color: #166534; font-style: italic; page-break-inside: avoid; }
blockquote p { margin: 0; }

pre { background: #0A1022; color: #E2E8F0; border-radius: 6px; padding: 14px 18px; font-family: 'Cascadia Code','Consolas',monospace; font-size: 8.5pt; line-height: 1.6; margin: 12px 0; white-space: pre-wrap; overflow-wrap: break-word; page-break-inside: avoid; }
code { background: #F1F5F9; color: #0A1022; padding: 1px 5px; border-radius: 3px; font-size: 8.5pt; font-family: 'Cascadia Code','Consolas',monospace; }
pre code { background: transparent; color: #94A3B8; padding: 0; }

table { width: 100%; border-collapse: collapse; margin: 14px 0; font-size: 9.3pt; page-break-inside: avoid; }
thead tr { background: #0A1022; color: #F8FAFC; }
thead th { padding: 9px 12px; text-align: left; font-family: 'Space Grotesk',sans-serif; font-weight: 600; font-size: 8.5pt; letter-spacing: 0.04em; }
tbody tr:nth-child(even) { background: #F8FAFC; }
tbody td { padding: 8px 12px; border-bottom: 1px solid #E2E8F0; vertical-align: top; }

ul, ol { padding-left: 20px; margin-bottom: 10px; }
li { margin-bottom: 4px; }
hr { border: none; border-top: 1.5px solid #E2E8F0; margin: 22px 0; }

.doc-footer { margin-top: 36px; padding-top: 12px; border-top: 1px solid #E2E8F0; display: flex; justify-content: space-between; font-size: 8pt; color: #94A3B8; }
.doc-footer .brand { color: #16A34A; font-weight: 700; font-family: 'Space Grotesk',sans-serif; }
`;

function escHtml(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function mdToHtml(md) {
  let html = md
    .replace(/```[\w]*\n([\s\S]*?)```/g, (_, code) => `<pre><code>${escHtml(code.trim())}</code></pre>`)
    .replace(/^######\s+(.+)$/gm, '<h6>$1</h6>')
    .replace(/^#####\s+(.+)$/gm,  '<h5>$1</h5>')
    .replace(/^####\s+(.+)$/gm,   '<h4>$1</h4>')
    .replace(/^###\s+(.+)$/gm,    '<h3>$1</h3>')
    .replace(/^##\s+(.+)$/gm,     '<h2>$1</h2>')
    .replace(/^#\s+(.+)$/gm,      '<h1>$1</h1>')
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g,     '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g,         '<em>$1</em>')
    .replace(/^>\s+(.+)$/gm, '<blockquote><p>$1</p></blockquote>')
    .replace(/^---$/gm, '<hr>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/^\s*[-*]\s+(.+)$/gm, '<li>$1</li>')
    .replace(/(<li>[\s\S]*?<\/li>\n?)+/g, m => `<ul>${m}</ul>`)
    .replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>')
    .split(/\n{2,}/).map(block => {
      block = block.trim();
      if (!block) return '';
      if (/^<(h[1-6]|ul|ol|li|pre|blockquote|table|hr|div)/.test(block)) return block;
      return `<p>${block.replace(/\n/g, '<br>')}</p>`;
    }).join('\n');

  html = html.replace(/<p>(\|.+\|)<\/p>/g, (_, table) => {
    const lines = table.split('<br>').map(l => l.trim()).filter(Boolean);
    if (lines.length < 2) return `<p>${table}</p>`;
    let out = '<table>';
    lines.forEach((line, i) => {
      if (/^\|[-| :]+\|$/.test(line)) return;
      const cells = line.split('|').filter(c => c.trim() !== '');
      const tag = (i === 0) ? 'th' : 'td';
      out += (i === 0)
        ? `<thead><tr>${cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join('')}</tr></thead><tbody>`
        : `<tr>${cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join('')}</tr>`;
    });
    out += '</tbody></table>';
    return out;
  });
  return html;
}

const COVER = `
<div class="cover">
  <div class="cover-grid"></div>
  <div class="cover-logo"><div class="ring"></div>${LOGO_ICON}</div>
  <div class="cover-eyebrow">Growth Core · by Evoluciona Inteligente</div>
  <div class="cover-title">Auditoría de Estado</div>
  <div class="cover-sub">Resumen ejecutivo · Antes y después de la aplicación del ADN/corpus.</div>
  <div class="cover-pills">
    <div class="cover-pill"><b>Ingreso ADN:</b> 2026-06-04</div>
    <div class="cover-pill"><b>Corte:</b> 2026-06-21</div>
    <div class="cover-pill"><b>Dev:</b> ~2 meses · ≈140 h</div>
  </div>
  <div class="cover-foot">
    <span><strong>Documento interno</strong> · Confidencial</span>
    <span>usegrowthcore.com</span>
  </div>
</div>`;

function build(md) {
  return `<!DOCTYPE html><html lang="es"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>GrowthCore · Auditoría de Estado 2026-06-21</title><style>${CSS}</style></head>
<body>
${COVER}
<div class="run-header">${LOGO_WORDMARK}<span class="tag">Auditoría de Estado</span></div>
${mdToHtml(md)}
<div class="doc-footer">
  <span><span class="brand">GROWTH CORE</span> · Auditoría de Estado · 2026-06-21</span>
  <span>by Evoluciona Inteligente · 2026</span>
</div>
</body></html>`;
}

if (!fs.existsSync(MD_PATH)) { console.error('No existe la auditoría:', MD_PATH); process.exit(1); }
const md = fs.readFileSync(MD_PATH, 'utf8');
fs.writeFileSync(HTML_PATH, build(md), 'utf8');
console.log('HTML generado:', HTML_PATH);

if (!CHROME) { console.log('\n⚠ No se encontró Chrome/Edge. HTML listo — imprime a PDF manualmente.'); process.exit(0); }
const fileUrl = `file:///${HTML_PATH.replace(/\\/g, '/')}`;
try {
  execSync(`"${CHROME}" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="${PDF_PATH}" "${fileUrl}"`,
    { stdio: 'pipe', timeout: 45000 });
  const kb = Math.round(fs.statSync(PDF_PATH).size / 1024);
  console.log(`PDF generado:  ${PDF_PATH}  (${kb} KB)`);
} catch (e) {
  console.error('ERROR al generar PDF:', e.message.slice(0, 160));
  console.log('HTML disponible para impresión manual:', HTML_PATH);
  process.exit(1);
}
