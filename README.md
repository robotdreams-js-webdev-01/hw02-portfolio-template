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

### Kötelező szekciók és elvárások

A sablon már tartalmazza a szekcióvázat (header, nav, main, section-ök, footer). **Neked kell megvalósítanod:**

| Elvárás       | Részletek                                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Navigáció** | A `<nav>`-ban legyenek **belső hivatkozások** a szekciókra: pl. `href="#hero"`, `href="#about"`, `href="#skills"` (legalább 2 ilyen link). |
| **Hero**      | Neved `<h1>`-ben, rövid tagline, opcionális CTA gomb.                                                                                      |
| **About**     | Rövid bemutatkozás, motiváció.                                                                                                             |
| **Skills**    | **Legalább 6** skill kártya vagy listaelem (pl. HTML, CSS, JS, Git, Tailwind…), vizuálisan rendezve.                                       |
| **Footer**    | **Kapcsolati adat**: email és/vagy GitHub (vagy LinkedIn) link.                                                                            |
| **README**    | Az élő (deployolt) oldal **URL-jét** írd bele a README-be.                                                                                 |

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

## Pontozás

- **Automatikus pont (CI tesztek):** max 22 p
- **Manuális pont (dizájn, deploy, reszponzivitás – az oktató adja):** max 13 p
- **Összesen:** 35 pont

---

## Futtatás

### 0. Gyors setup ellenőrzés (első lépés)

```bash
npm install
npm run dev
```

Nyisd meg: `http://localhost:5173`
Ha látod a `Portfolio template elindult ✅` szöveget, a környezet rendben van.

### 1. Házi fejlesztése

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
