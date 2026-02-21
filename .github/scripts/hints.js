const fs = require('fs');
const path = require('path');

const hwId = 'hw02';
const hintLevel = process.env.HINT_LEVEL;

const hints = {
  '1': '💡 Nézd meg a 7. óra diasorát – Tailwind spacing utility-k (p-, m-, gap-) és color osztályok!',
  '2': '💡 Ellenőrizd: minden szekció saját <section> tagben van-e? A nav linkek (#hero, #about, #skills) a megfelelő section id-kre mutatnak-e?',
  '3': "💡 Hero tipp: 'flex flex-col items-center justify-center min-h-screen' középre igazít. Skills kártyákhoz: 'grid grid-cols-2 md:grid-cols-3 gap-6' reszponzív rácsot ad.",
};

const hintText = hints[hintLevel];
if (!hintText) {
  console.error(`Ismeretlen hint szint: ${hintLevel}`);
  process.exit(1);
}

// Read hints-usage.json
let hintsData;
try {
  const raw = fs.readFileSync(path.join(process.cwd(), 'hints-usage.json'), 'utf8');
  hintsData = JSON.parse(raw);
} catch {
  hintsData = {};
}

// Increment usage counter
if (!hintsData[hwId]) {
  hintsData[hwId] = { usedHints: 0 };
}
hintsData[hwId].usedHints += 1;

// Append hint to GitHub Step Summary
const summary = `## 💡 Hint ${hintLevel} – 2. házi\n\n${hintText}\n\n> Felhasznált hintek száma: ${hintsData[hwId].usedHints}\n`;
fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);

// Write updated hints-usage.json
fs.writeFileSync(
  path.join(process.cwd(), 'hints-usage.json'),
  JSON.stringify(hintsData, null, 2)
);

console.log(`Hint ${hintLevel} megjelenítve. Összes felhasznált hint (${hwId}): ${hintsData[hwId].usedHints}`);
