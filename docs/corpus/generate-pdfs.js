const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const BASE = path.resolve(__dirname);
const CHROME = '"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"';

const docs = [
  { file: 'DIAG-2026-06-04-001', title: 'Diagnóstico Estructural', subtitle: 'GROWTH CORE · Ingreso de Proyecto' },
  { file: 'ACT-2026-06-04-001',  title: 'Plan de Activación',      subtitle: 'GROWTH CORE · Mapa de Agentes y Secuencia' },
  { file: 'CAT1-ADN-GROWTHCORE-v1',      title: 'CAT.1 — ADN del Ecosistema',        subtitle: 'GROWTH CORE · Identidad Fundacional' },
  { file: 'CAT2-PILARES-GROWTHCORE-v1',          title: 'CAT.2 — Pilares Estratégicos',         subtitle: 'GROWTH CORE · Ejes estructurales del ecosistema' },
  { file: 'CAT3-METODOLOGIA-COMUNICACION-v1',   title: 'CAT.3 — Metodología de Comunicación',  subtitle: 'GROWTH CORE · Cómo razona y habla el ecosistema' },
  { file: 'CAT4-IDENTIDAD-VERBAL-v1',          title: 'CAT.4 — Identidad Verbal',             subtitle: 'GROWTH CORE · Vocabulario · Frases · Prohibiciones' },
  { file: 'CAT5-ARQUITECTURA-CONTENIDO-v1',   title: 'CAT.5 — Arquitectura de Contenido',    subtitle: 'GROWTH CORE · Qué produce · Para quién · Con qué lógica' },
  { file: 'INV-MERCADO-PRECIOS-v1',          title: 'Investigación de Mercado — Precios',    subtitle: 'GROWTH CORE · Benchmark competitivo y capacidad de pago LATAM' },
  { file: 'FICHAS-PRODUCTO-v1',                    title: 'Fichas de Producto',                   subtitle: 'GROWTH CORE · Las 4 herramientas · Precios · Bundles' },
  { file: 'PROPUESTA-COMERCIAL-TEMPLATE-v1',      title: 'Propuesta Comercial',                  subtitle: 'GROWTH CORE · Template · Personalizar antes de enviar' },
];

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@page { size: A4; margin: 20mm 18mm 20mm 18mm; }
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  font-size: 10.5pt;
  color: #1E293B;
  background: #ffffff;
  line-height: 1.65;
}

/* ── HEADER ── */
.doc-header {
  background: #0A1022;
  color: #F8FAFC;
  padding: 22px 28px 18px;
  margin-bottom: 28px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}
.doc-header::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 5px; height: 100%;
  background: #22C55E;
}
.brand-tag {
  font-size: 8.5pt;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #22C55E;
  margin-bottom: 6px;
}
.doc-title {
  font-size: 20pt;
  font-weight: 700;
  color: #F8FAFC;
  line-height: 1.2;
  margin-bottom: 4px;
}
.doc-subtitle {
  font-size: 10pt;
  color: #94A3B8;
  font-weight: 400;
}
.doc-meta {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(255,255,255,0.1);
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}
.meta-item { font-size: 8pt; color: #94A3B8; }
.meta-item span { color: #F8FAFC; font-weight: 500; }

/* ── TYPOGRAPHY ── */
h1 {
  font-size: 15pt;
  font-weight: 700;
  color: #0A1022;
  margin: 28px 0 10px;
  padding-left: 12px;
  border-left: 4px solid #22C55E;
  page-break-after: avoid;
}
h2 {
  font-size: 12pt;
  font-weight: 600;
  color: #0A1022;
  margin: 22px 0 8px;
  padding-bottom: 4px;
  border-bottom: 1.5px solid #22C55E;
  page-break-after: avoid;
}
h3 {
  font-size: 10.5pt;
  font-weight: 600;
  color: #22C55E;
  margin: 16px 0 6px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  page-break-after: avoid;
}
p { margin-bottom: 10px; }
strong { font-weight: 600; color: #0A1022; }
em { color: #475569; font-style: italic; }

/* ── BLOCKQUOTE ── */
blockquote {
  background: #F0FDF4;
  border-left: 4px solid #22C55E;
  border-radius: 0 4px 4px 0;
  padding: 14px 18px;
  margin: 16px 0;
  font-size: 10.5pt;
  color: #166534;
  font-style: italic;
}
blockquote p { margin: 0; }

/* ── CODE BLOCKS ── */
pre {
  background: #0A1022;
  color: #E2E8F0;
  border-radius: 6px;
  padding: 14px 18px;
  font-family: 'Cascadia Code', 'Fira Code', 'Consolas', monospace;
  font-size: 8.5pt;
  line-height: 1.6;
  margin: 12px 0;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  page-break-inside: avoid;
}
pre code { color: #94A3B8; }
code {
  background: #F1F5F9;
  color: #0A1022;
  padding: 1px 5px;
  border-radius: 3px;
  font-size: 8.5pt;
  font-family: 'Cascadia Code', 'Consolas', monospace;
}
pre code {
  background: transparent;
  color: inherit;
  padding: 0;
}

/* ── TABLES ── */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
  font-size: 9.5pt;
  page-break-inside: avoid;
}
thead tr { background: #0A1022; color: #F8FAFC; }
thead th {
  padding: 9px 12px;
  text-align: left;
  font-weight: 600;
  font-size: 8.5pt;
  letter-spacing: 0.04em;
}
tbody tr:nth-child(even) { background: #F8FAFC; }
tbody tr:nth-child(odd)  { background: #ffffff; }
tbody td {
  padding: 8px 12px;
  border-bottom: 1px solid #E2E8F0;
  vertical-align: top;
}
tbody tr:hover { background: #F0FDF4; }

/* ── LISTS ── */
ul, ol {
  padding-left: 20px;
  margin-bottom: 10px;
}
li { margin-bottom: 4px; }
li strong { color: #22C55E; }

/* ── HORIZONTAL RULE ── */
hr {
  border: none;
  border-top: 1.5px solid #E2E8F0;
  margin: 24px 0;
}

/* ── STATUS BADGES ── */
.badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 20px;
  font-size: 8pt;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.badge-green  { background: #DCFCE7; color: #166534; }
.badge-red    { background: #FEE2E2; color: #991B1B; }
.badge-yellow { background: #FEF9C3; color: #854D0E; }

/* ── FOOTER ── */
.doc-footer {
  margin-top: 40px;
  padding-top: 12px;
  border-top: 1px solid #E2E8F0;
  display: flex;
  justify-content: space-between;
  font-size: 8pt;
  color: #94A3B8;
}
.doc-footer .brand { color: #22C55E; font-weight: 600; }
`;

function mdToHtml(md) {
  // Basic markdown → HTML conversion sufficient for these documents
  let html = md
    // Fenced code blocks
    .replace(/```[\w]*\n([\s\S]*?)```/g, (_, code) => `<pre><code>${escHtml(code.trim())}</code></pre>`)
    // Headers
    .replace(/^######\s+(.+)$/gm, '<h6>$1</h6>')
    .replace(/^#####\s+(.+)$/gm,  '<h5>$1</h5>')
    .replace(/^####\s+(.+)$/gm,   '<h4>$1</h4>')
    .replace(/^###\s+(.+)$/gm,    '<h3>$1</h3>')
    .replace(/^##\s+(.+)$/gm,     '<h2>$1</h2>')
    .replace(/^#\s+(.+)$/gm,      '<h1>$1</h1>')
    // Bold / italic
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g,     '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g,         '<em>$1</em>')
    // Blockquote
    .replace(/^>\s+(.+)$/gm, '<blockquote><p>$1</p></blockquote>')
    // Horizontal rule
    .replace(/^---$/gm, '<hr>')
    // Tables
    .replace(/^\|(.+)\|$/gm, (line) => line)  // handled below
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Unordered list items
    .replace(/^\s*[-*]\s+(.+)$/gm, '<li>$1</li>')
    // Wrap consecutive <li> in <ul>
    .replace(/(<li>[\s\S]*?<\/li>\n?)+/g, m => `<ul>${m}</ul>`)
    // Ordered list items
    .replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>')
    // Paragraphs: double newline → <p>
    .split(/\n{2,}/).map(block => {
      block = block.trim();
      if (!block) return '';
      if (/^<(h[1-6]|ul|ol|li|pre|blockquote|table|hr|div)/.test(block)) return block;
      return `<p>${block.replace(/\n/g, '<br>')}</p>`;
    }).join('\n');

  // Tables: parse markdown table syntax
  html = html.replace(/<p>(\|.+\|)<\/p>/g, (_, table) => {
    const lines = table.split('<br>').map(l => l.trim()).filter(Boolean);
    if (lines.length < 2) return `<p>${table}</p>`;
    let out = '<table>';
    lines.forEach((line, i) => {
      if (/^\|[-| :]+\|$/.test(line)) return; // separator row
      const cells = line.split('|').filter(c => c.trim() !== '');
      const tag = (i === 0) ? 'th' : 'td';
      const row = cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join('');
      out += (i === 0) ? `<thead><tr>${row}</tr></thead><tbody>` : `<tr>${row}</tr>`;
    });
    out += '</tbody></table>';
    return out;
  });

  return html;
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function buildHtml(docMeta, mdContent) {
  const body = mdToHtml(mdContent);
  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${docMeta.title} · Growth Core by Evoluciona Inteligente</title>
<style>${CSS}</style>
</head>
<body>

<div class="doc-header">
  <div class="brand-tag">Growth Core <span style="color:#94A3B8;font-weight:400">by</span> Evoluciona Inteligente</div>
  <div class="doc-title">${docMeta.title}</div>
  <div class="doc-subtitle">${docMeta.subtitle}</div>
  <div class="doc-meta">
    <div class="meta-item">Fecha: <span>2026-06-04</span></div>
    <div class="meta-item">Elaborado por: <span>Adriana Díaz · Evoluciona Inteligente</span></div>
    <div class="meta-item">Estado: <span>Aprobado</span></div>
  </div>
</div>

${body}

<div class="doc-footer">
  <span><span class="brand">GROWTH CORE</span> <span style="color:#64748B">by</span> <span style="color:#94A3B8;font-weight:500">Evoluciona Inteligente</span> · v1.0</span>
  <span>Elaborado por <strong style="color:#94A3B8">Adriana Díaz</strong> · Evoluciona Inteligente · 2026</span>
</div>

</body>
</html>`;
}

let errors = [];

for (const doc of docs) {
  const mdPath   = path.join(BASE, `${doc.file}.md`);
  const htmlPath = path.join(BASE, `${doc.file}.html`);
  const pdfPath  = path.join(BASE, `${doc.file}.pdf`);

  if (!fs.existsSync(mdPath)) {
    console.log(`SKIP (no existe): ${doc.file}.md`);
    continue;
  }

  // 1. Build HTML
  const md   = fs.readFileSync(mdPath, 'utf8');
  const html = buildHtml(doc, md);
  fs.writeFileSync(htmlPath, html, 'utf8');
  console.log(`HTML generado: ${doc.file}.html`);

  // 2. Chrome headless → PDF
  const fileUrl = `file:///${htmlPath.replace(/\\/g, '/')}`;
  try {
    execSync(
      `${CHROME} --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPath}" "${fileUrl}"`,
      { stdio: 'pipe', timeout: 30000 }
    );
    const kb = Math.round(fs.statSync(pdfPath).size / 1024);
    console.log(`PDF generado:  ${doc.file}.pdf  (${kb} KB)`);
  } catch (e) {
    errors.push(`${doc.file}: ${e.message.slice(0,120)}`);
    console.log(`ERROR PDF ${doc.file}: ${e.message.slice(0,80)}`);
  }
}

if (errors.length) {
  console.log('\nErrores:', errors.join('\n'));
} else {
  console.log('\nTodos los documentos generados correctamente.');
}
