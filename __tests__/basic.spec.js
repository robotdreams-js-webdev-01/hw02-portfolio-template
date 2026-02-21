const fs = require('fs');

describe('HW02 – alapvető ellenőrzések', () => {
  test('src/index.html exists', () => {
    expect(fs.existsSync('./src/index.html')).toBe(true);
  });

  test('index.html contains at least one section element', () => {
    const html = fs.readFileSync('./src/index.html', 'utf8');
    expect(html.includes('<section')).toBe(true);
  });

  test('tailwind.config.js exists', () => {
    expect(fs.existsSync('./tailwind.config.js')).toBe(true);
  });
});
