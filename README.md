# Snowy Eve ❄️

A cozy Christmas theme for [Obsidian](https://obsidian.md): a midnight blue sky with faint stars behind notes, snow-white text, golden lights, and red baubles by night, and snow-white paper with night-blue ink by day. Classic serif and script typography, festive ornaments, Santa's sleigh under every note title, snowflake folder toggles, a snowy village, and gently falling snow.

![Snowy Eve — dark mode](docs/dark.png)

![Snowy Eve — light mode](docs/light.png)

## Features

- **Dark and light modes** — *Snowy Christmas Eve* (midnight blue sky with faint stars behind notes, snow-white text, golden lights, red baubles) and *Snowy morning* (snow-white paper, night-blue ink). Text contrast meets WCAG AA in both.
- **Typography** — Lora for reading, Cormorant Garamond for headings, and the calligraphic Great Vibes for the note title, all embedded (no network requests). Option to use Cormorant Garamond for note titles as well.
- **Ornaments** — Santa and his reindeer sleigh under each note title (or a golden star), a gold rule with a star under H1 and on dividers, red baubles (golden in sublists) as bullets, a bauble on H3, and checked tasks with a golden star over a red bauble.
- **File explorer** — a snowflake replaces the folder arrow (rotates and turns gold when opened) and a snowy village with glowing windows sits at the foot of the panel.
- **Falling snow** over your notes; it never catches clicks and hides itself when your system asks to reduce motion.
- **Frost frames** — a thin double line with snowflake corners around sidebar panels and dialogs.
- **New tab** with a glowing lantern over the snowy village under the starry sky.

## Settings

Install the [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) plugin to tweak the theme:

| Option | Default |
|---|---|
| Disable falling snow | Off |
| Snow intensity | 0.6 |
| Disable the starry sky behind notes | Off |
| Disable the snowy village under the file explorer | Off |
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

Tema navideño para Obsidian, claro y oscuro: cielo azul medianoche con estrellas tenues, luces doradas y esferas rojas de noche, y papel blanco nieve con tinta azul noche de día. Tipografía con serifa y caligráfica, trineo de Santa bajo el título de cada nota, copos de nieve en las carpetas, un pueblo nevado y nieve que cae suavemente. Las opciones se configuran con el plugin Style Settings.

## Credits

Made by Mack Chirinos. Font licenses are listed in [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md).

## License

[MIT](LICENSE)
