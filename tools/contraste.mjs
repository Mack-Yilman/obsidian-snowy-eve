// Mide el contraste WCAG de la paleta --se-* leída de src/theme.src.css (bloques .theme-dark y .theme-light).
// Sale con código 1 si algún par queda por debajo de su mínimo.
import { readFileSync } from "node:fs";

const src = readFileSync(new URL("../src/theme.src.css", import.meta.url), "utf8");

function palette(mode) {
  const block = src.match(new RegExp(`\\.theme-${mode}\\s*\\{([^}]*)\\}`))?.[1];
  if (!block) throw new Error(`no encontré el bloque .theme-${mode}`);
  return Object.fromEntries([...block.matchAll(/--se-([\w-]+):\s*(#[0-9a-fA-F]{6})/g)].map((m) => [m[1], m[2]]));
}

const lum = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};

// [texto, fondo, mínimo]
const pairs = [
  ["text", "paper", 7], ["text", "canvas", 7], ["muted", "paper", 4.5], ["faint", "paper", 3],
  ["gold", "paper", 4.5], ["red", "paper", 4.5], ["ice", "paper", 4.5], ["pine", "paper", 3], ["ice", "canvas", 4.5],
  ["h1", "paper", 4.5], ["h2", "paper", 4.5], ["h3", "paper", 4.5], ["h4", "paper", 4.5], ["h5", "paper", 4.5], ["h6", "paper", 4.5],
  ["bold", "paper", 4.5], ["code-inline", "code-inline-bg", 4.5], ["text", "mark", 4.5],
  ["gold", "canvas", 4.5], ["muted", "canvas", 4.5], ["faint", "canvas", 3],
];

let fail = false;
for (const mode of ["dark", "light"]) {
  const p = palette(mode);
  console.log(`\n${mode}`);
  for (const [fg, bg, min] of pairs) {
    if (!p[fg] || !p[bg]) throw new Error(`falta --se-${p[fg] ? bg : fg} en .theme-${mode}`);
    const r = ratio(p[fg], p[bg]);
    const ok = r >= min;
    fail ||= !ok;
    console.log(`${ok ? "ok " : "MAL"} ${fg.padEnd(6)} sobre ${bg.padEnd(6)} ${r.toFixed(2)} (mín. ${min})`);
  }
}
process.exit(fail ? 1 : 0);
