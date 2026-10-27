# Snowy Eve ❄️

A cozy Christmas theme for [Obsidian](https://obsidian.md): Christmas Eve by night — a midnight blue sky with faint stars, golden lights and red baubles — and Christmas Day by morning — a clear blue sky, warm white paper and coloured houses. Classic serif and script typography, festive headings, Santa's sleigh under every note title, a lit Christmas tree over a decorated village, snowflake folder toggles and gently falling snow.

![Snowy Eve — Christmas Eve (dark mode)](docs/dark.png)

![Snowy Eve — Christmas Day (light mode)](docs/light.png)

The new tab: Santa's sleigh over the decorated village, with a lit tree in the file explorer.

![Snowy Eve — new tab, dark mode](docs/new-tab-dark.png)

![Snowy Eve — new tab, light mode](docs/new-tab-light.png)

![Snowy Eve — graph view, dark mode](docs/graph.png)

## Features

- **Dark and light modes** — *Christmas Eve* (midnight blue sky with faint stars behind notes, snow-white text, golden lights, red baubles) and *Christmas Day* (a sunny morning: clear blue sky, warm white paper, red, pine green and gold). Text contrast meets WCAG AA in both, headings included.
- **Typography** — Lora for reading, bold Cormorant Garamond for headings, and the calligraphic Great Vibes for the note title, all embedded (no network requests). Option to use Cormorant Garamond for note titles as well.
- **Festive headings** — each level has its own Christmas colour: gold, coral red, holly green, ice blue, frost silver and copper by night (with a soft glow on H1–H3); red, pine green, gold, blue, plum and copper by day. H2 carries a red-to-gold ribbon. Bold, italics, highlights and inline code are tinted to match.
- **Ornaments** — Santa and his reindeer sleigh under each note title (or a golden star), a gold rule with a star under H1 and on dividers, red baubles (golden in sublists) as bullets, a bauble on H3, and checked tasks with a golden star over a red bauble.
- **File explorer** — larger names and icons, and each top-level folder gets its own Christmas colour in order (red, gold, green, ice blue, plum, copper), shared by its subfolders. A snowflake replaces the folder arrow (rotates when opened), and a lit Christmas tree with presents stands over a village decorated with strings of lights, wreaths and a snowman (night houses with glowing windows; coloured houses with snowy roofs by day).
- **Falling snow** over your notes and the new tab (ice-blue snowflakes by day); it never catches clicks and hides itself when your system asks to reduce motion.
- **Frost frames** — a thin double line with snowflake corners around sidebar panels and dialogs.
- **New tab** with Santa's sleigh crossing the sky over the decorated village, with falling snow.
- **Graph view** — notes glow like the bulbs of a string of lights (gold by night, red by day; tags and attachments in their own Christmas colours) over the sky, the decorated village and falling snow, in the global and the local graph.
- **Dates in note titles** — slashes (`/`, `⁄`, `∕`) are drawn in the serif face, so dates like `24∕10∕26` stay clean in the calligraphic title; headings use lining figures, so the digits of a date line up.

## Settings

Install the [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) plugin to tweak the theme:

| Option | Default |
|---|---|
| Disable falling snow | Off |
| Snow intensity | 0.6 |
| Disable the sky behind notes (stars by night, morning glow by day) | Off |
| Disable the decorated village under the file explorer | Off |
| Disable the Christmas tree in the file explorer | Off |
| Single-colour folders (gold snowflakes, no colour per folder) | Off |
| Plain graph background (keep the node colours only) | Off |
| Emblem under the note title | Santa's sleigh |
| Folder toggle in the file explorer | Snowflake |
| Plain list bullets | Off |
| Disable heading and divider ornaments | Off |
| Disable frost frames | Off |
| Serif note title | Off |
| Golden lights | Theme palette |
| Bauble red | Theme palette |
| Ice blue | Theme palette |

The accent color (buttons, selection) follows **Settings → Appearance → Accent color**.

## Installation

- **From Obsidian:** Settings → Appearance → Themes → Manage → search for *Snowy Eve* → Install and use.
- **Manually:** download `manifest.json` and `theme.css` from the
  [latest release](https://github.com/Mack-Yilman/obsidian-snowy-eve/releases/latest) into
  `<your vault>/.obsidian/themes/Snowy Eve/`, then pick the theme in Settings → Appearance.

## Development

`theme.css` is generated: edit `src/theme.src.css` and the SVGs in `src/ornaments/`, then run:

```bash
npm install
node build.mjs          # builds theme.css with fonts and ornaments embedded as base64
npm run lint            # Obsidian's official stylelint rules
node tools/contraste.mjs  # checks the palette contrast
```

## Español

Tema navideño para Obsidian: de noche, la espera de Nochebuena (cielo azul medianoche con estrellas, luces doradas y esferas rojas); de día, la mañana de Navidad (cielo azul despejado, papel blanco cálido y casas de colores). Encabezados con un color navideño por nivel, trineo de Santa bajo el título de cada nota, un árbol iluminado sobre un pueblo adornado con luces, copos de nieve en las carpetas y nieve que cae suavemente. Las opciones se configuran con el plugin Style Settings.

## Credits

Made by Mack Chirinos. Font licenses are listed in [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md).

## License

[MIT](LICENSE)
