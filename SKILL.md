---
name: meow-cafe-skill
description: Use when user wants to create, modify, or deploy an interactive cat-themed cafe web app. Provides config-driven multi-page templates with Web Audio sound effects, localStorage statistics, and CLI management tools.
version: 1.0.0
author: onsanU
license: MIT
metadata:
  hermes:
    tags: [creative, web, cat, p5js, interactive, template]
    related_skills: [p5js, popular-web-designs, web-companion-app]
---

# 🐱 Meow Cafe Skill — AI猫猫陪伴助手

## Overview

A config-driven interactive cat cafe web application featuring 7 pages (homepage with quiz matching, 4 cat character pages, menu, gallery). Designed around a "cat companion" emotional experience — each cat has unique personality, color palette, sound effects, and interaction mechanics. All styling is centralized in `references/config.js`, so changing one color value updates every page automatically.

Built as a Hermes Agent Skill so the agent can help users generate, customize, and extend their own cat cafe website.

## When to Use

- User asks to build a cat-themed interactive website
- User wants to add/remove cat characters from an existing cafe page
- User needs to customize colors, menu items, or cat personalities
- User asks to generate a new cat character page from a template
- User wants to understand the config-driven architecture for teaching/learning

Don't use for:
- General landing pages without interactive cat elements — use `popular-web-designs` or `sketch` instead
- p5.js-only creative sketches — use `p5js` skill

## Architecture

```
meow-cafe-skill/
├── SKILL.md                   ← This file
├── references/
│   └── config.js              ← 🎨 SINGLE SOURCE OF TRUTH: all cats, colors, menus
├── scripts/
│   └── generate.py            ← 🛠️ CLI: list/add cats & menu items
├── templates/
│   ├── index.html             ← 🏠 Homepage: quiz → cat matching → fish sprinkling
│   ├── cream.html             ← 🐱 Cream: petting counter + AI chat window
│   ├── orange.html            ← 🍊 Orange: eating game with scoring
│   ├── black.html             ← 🌙 Black: night guardian + comfort messages
│   ├── mimi.html              ← 😺 Mimi (Boss): dashboard monitoring all cats
│   ├── menu.html              ← ☕ Menu: shopping cart + checkout
│   ├── gallery.html           ← 🖼️ Gallery: haiku + cat portraits
│   ├── sound.js               ← 🔊 Web Audio API: 7 synthesized cat sounds
│   └── stats.js               ← 📊 localStorage: weekly-reset visit stats
└── assets/
    ├── 咪咪.png, 奶油.png, 橘橘.png, 黑黑.png, cat4.png
    ├── black_loop.mp3          ← BGM: rain sounds for black.html
    └── black_bgm.m4a           ← BGM: alternative format
```

## Key Design Principles

### 1. Config-Driven (改一处，全站更新)

Every cat's colors, emoji, descriptions, monitor statuses, and gallery haikus live in `references/config.js` under `CATS_CONFIG`. HTML templates reference these values. To change a cat's body color: edit one line in config.js → all 7 pages update.

### 2. Zero-Dependency Sound System

`sound.js` synthesizes all audio via Web Audio API — no audio files needed for core sounds:
- `playPurr()` — 25Hz low-frequency purr vibration
- `playMeow()` — 400→600→300Hz triangle wave meow
- `playClick()` / `playScore()` / `playDream()` / `playSuccess()` — UI feedback sounds

### 3. Weekly Statistics with Auto-Reset

`stats.js` tracks pet counts, game scores, dream levels across pages via localStorage. Auto-resets every Monday (`getMonday()` calculation).

### 4. CLI Extensibility

`scripts/generate.py` provides:
```
python3 generate.py list              # Show all cats + menu
python3 generate.py add-cat           # Interactive new cat wizard
python3 generate.py add-menu          # Interactive new menu item
python3 generate.py export-config     # Summary stats
```

## How to Use

### Quick Start

1. Copy all templates to a web server or open `templates/index.html` in browser
2. All pages load `config.js`, `sound.js`, `stats.js` from the same directory
3. Open `index.html` → take the 4-question quiz → get matched to a cat → enter cafe

### Adding a New Cat

```bash
cd scripts/
python3 generate.py add-cat
# Follow prompts: ID, name, emoji, colors...
# Then copy templates/cream.html → templates/<new-cat>.html
# Replace color references and interaction logic
```

### Customizing Colors

Edit `references/config.js`:
```javascript
const CATS_CONFIG = {
  cream: {
    bodyColor: '#F5D5E0',   // ← change this → all cream pages update
    eyeColor: '#4A7C59',
    // ...
  }
};
```

### Deploying

All files are static HTML/JS/CSS — deploy to GitHub Pages, Netlify, Vercel, or any static host. No build step required.

## Page Features Summary

| Page | Cat | Core Interaction | Special Feature |
|------|-----|-----------------|-----------------|
| index.html | All 4 | Quiz → matching → recommendation | Sprinkle fish food (cats gather!) |
| cream.html | 奶油 | Pet counter + love hearts | AI chat window (15 messages) |
| orange.html | 橘橘 | Click-to-eat scoring game | Score tracking + leaderboard |
| black.html | 黑黑 | Click for comfort messages | Starry background + firefly cursor |
| mimi.html | 咪咪 | Boss dashboard | Live stats from other cats |
| menu.html | — | Shopping cart | Checkout with success sound |
| gallery.html | — | Cat portrait gallery | Haiku poems (CN + JP) |

## Common Pitfalls

1. **config.js path**: HTML pages reference `../references/config.js` — adjust paths if deploying files to a different directory structure.

2. **Browser autoplay policy**: Audio in black.html requires a user click before playing (browser security). The page shows a click-to-start prompt.

3. **localStorage weekly reset**: Stats reset every Monday. If testing across weeks, clear localStorage or modify `getMonday()`.

4. **p5.js CDN dependency**: All pages load p5.js from CDN. Offline use requires downloading p5.js locally and updating `<script>` tags.

5. **File size warning**: `assets/black_bgm.m4a` is ~104MB — exceeds GitHub's 100MB limit. Use Git LFS or compress before pushing.

6. **Emoji rendering**: Cat emoji filters use CSS `hue-rotate()` — rendering varies by OS/browser. Test on target platforms.

## Verification Checklist

- [ ] All 7 HTML pages load without console errors
- [ ] `config.js` changes propagate to all pages on refresh
- [ ] Sound effects play on interaction (click, score, purr)
- [ ] Stats increment and persist across page navigations
- [ ] `generate.py list` shows correct cat/menu counts
- [ ] Mobile responsive: pages render correctly at 375px width
- [ ] GitHub Pages / static host deployment works
