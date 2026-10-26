// Genera theme.css desde src/theme.src.css incrustando las fuentes en base64 y los adornos SVG como texto.
//   /*@@FONTS@@*/          → @font-face de cada fonts/*.woff2 (familia, peso y estilo en fonts/fonts.json)
//   @@SVG:nombre@@         → src/ornaments/nombre.svg tal cual (para mask-image)
//   @@SVG:nombre:#rrggbb@@ → el mismo SVG con el negro cambiado por ese color (para background-image)
//   @@EMOJI:🎄@@           → un SVG con ese emoji (para adornar encabezados en la vista previa en vivo)
// Si existe _prueba-vault/, copia theme.css y manifest.json a su carpeta de temas.
import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync } from "node:fs";

const root = new URL(".", import.meta.url);
const read = (p, enc) => readFileSync(new URL(p, root), enc);
const b64 = (data) => Buffer.from(data).toString("base64");
// SVG as URL-encoded text, not base64: about a third smaller
const svgUrl = (svg) => {
  const min = svg.replace(/\s+/g, " ").replace(/>\s+</g, "><").replace(/"/g, "'").trim();
  return `url("data:image/svg+xml,${min.replace(/[%#<>?[\\\]^`{|}]/g, encodeURIComponent)}")`;
};

const fonts = JSON.parse(read("fonts/fonts.json", "utf8"));
const fontFaces = Object.entries(fonts).map(([file, f]) => [
  "@font-face {",
  `  font-family: "${f.family}";`,
  `  font-style: ${f.style ?? "normal"};`,
  `  font-weight: ${f.weight ?? 400};`,
  "  font-display: swap;",
  `  src: url("data:font/woff2;base64,${b64(read(`fonts/${file}`))}") format("woff2");`,
  "}",
].join("\n")).join("\n\n");

let css = read("src/theme.src.css", "utf8")
  .replace(/\/\*\s*@@FONTS@@\s*\*\//, () => fontFaces)
  .replace(/@@SVG:([\w-]+)(?::(#[0-9a-fA-F]{3,8}))?@@/g, (_, name, color) => {
    const svg = read(`src/ornaments/${name}.svg`, "utf8");
    return svgUrl(color ? svg.replace(/#000(000)?\b/g, color) : svg);
  })
  .replace(/@@EMOJI:([^@]+)@@/g, (_, emoji) => svgUrl(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><text x="16" y="26" font-size="26" text-anchor="middle">${emoji}</text></svg>`,
  ));

// Reglas de la revisión de Obsidian: nada remoto, sin !important, sin marcadores sin resolver.
const problems = [
  [/@@/, "marcador sin resolver"],
  [/!important/, "!important"],
  [/@import/, "@import"],
  [/url\(\s*(?!["']?(?:data:|#))/, "url() que no es data:"],
].filter(([re]) => re.test(css)).map(([, msg]) => msg);
if (problems.length) throw new Error(`theme.css no cumple: ${problems.join(", ")}`);

writeFileSync(new URL("theme.css", root), css);
console.log(`theme.css: ${(css.length / 1024).toFixed(0)} KB`);

if (existsSync(new URL("_prueba-vault/", root))) {
  const dest = new URL("_prueba-vault/.obsidian/themes/Snowy Eve/", root);
  mkdirSync(dest, { recursive: true });
  for (const f of ["theme.css", "manifest.json"]) copyFileSync(new URL(f, root), new URL(f, dest));
  console.log("copiado a _prueba-vault/");
}
