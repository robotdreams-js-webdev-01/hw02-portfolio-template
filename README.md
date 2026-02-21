# 2. házi – Personal Portfolio Landing Page

## Kontextus

**Kapcsolódó óra:** 7. óra – HTML szemantika, CSS, Tailwind CSS v4

---

## Tanulási célok

- Semantic HTML elemek helyes használata (`header`, `nav`, `main`, `section`, `footer`)
- Utility-first CSS Tailwind CSS-szel
- Mobile-first reszponzív design (breakpointok: `sm`, `md`, `lg`)
- Statikus oldal deployolása (GitHub Pages / Netlify / Vercel)

---

## Részletes feladatleírás

Készíts egy **reszponzív, egy-oldalas portfólió landing page-t** Tailwind CSS-szel!

### Kötelező szekciók

| Szekció | HTML tag | Tartalom |
|---|---|---|
| Fejléc + navigáció | `<header>` + `<nav>` | Logo, legalább 3 link (#hero, #about, #skills) |
| Hero | `<section id="hero">` | Neved (`<h1>`), tagline (`<p>`), CTA gomb |
| About | `<section id="about">` | Rövid bemutatkozás, motiváció |
| Skills | `<section id="skills">` | Legalább 6 skill kártya, vizuálisan rendezve |
| Lábléc | `<footer>` | Email cím, GitHub link |

### Technikai követelmények

- **Végig semantic HTML** – ne csak `<div>`-eket használj!
- **Mobile-first** – alapértelmezett stílus mobilra, majd breakpointok: `≤640px` (mobile), `≥1024px` (desktop)
- **Tailwind utility osztályok** – minimalizáld a custom CSS-t (a `src/styles.css` szinte üres maradhat)
- **Deploy** – tedd ki élőbe GitHub Pages-re, Netlify-ra vagy Vercel-re, és az **élő URL-t írd bele a README-be**

### Példa skill kártyák

HTML, CSS, JavaScript, TypeScript, Git, Tailwind CSS, React, Node.js – legalább 6-ot szerepeltess!

---

## Minimum elvárások

- Mind az 5 szekció jelen van és semantic HTML tagbe van csomagolva
- Az oldal deployolva van, és az élő URL elérhető a README-ben
- Az oldal mobilon is rendesen néz ki (tesztelj DevTools-szal!)

---

## Pontozás (35 pont)

| Kritérium | Pont |
|---|---|
| Semantic HTML struktúra (helyes tagek, struktúra) | 5p |
| Reszponzív layout (mobile-first, legalább 2 breakpoint) | 8p |
| Tailwind minőség (utility-k, spacing, colors, typography konzisztensen) | 10p |
| Tartalom (saját szövegek, skill kártyák, működő linkek) | 7p |
| Deploy + README (élő link, install/run dokumentálva) | 5p |

---

## Futtatás

```bash
npm install
npm run dev
```

A fejlesztői szerver elindul: `http://localhost:5173`

Build készítése:

```bash
npm run build
```

---

## Tippek

> 💡 Nézd vissza a **7. óra diasorát** –
> Tailwind osztályok, Flexbox/Grid, reszponzivitás, breakpointok!
