'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
assert.ok(html.includes('<span class="typewriter">engineering workflows.</span>'));
assert.equal((html.match(/id="impact"/g) || []).length, 1);
assert.ok(!html.includes('<section class="impact'));
assert.equal((html.match(/class="research-card /g) || []).length, 3);
assert.ok(html.includes('href="engineering-vision-atlas/"'));
assert.ok(html.includes('href="assets/Kishore_Resume.pdf"'));
for (const file of ['ImageCaptioning.html', 'styletransfer.html', 'tsr.html', 'intrinsic.html']) {
    assert.ok(!html.includes(`href="${file}"`));
    assert.ok(fs.readFileSync(path.join(root, 'projects.html'), 'utf8').includes(`href="${file}"`));
}
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
assert.equal(ids.length, new Set(ids).size, 'No duplicate homepage IDs');
for (const match of html.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(ids.includes(match[1]), `Missing homepage anchor ${match[1]}`);
}
const app = fs.readFileSync(path.join(root, 'assets/js/app.js'), 'utf8');
const start = app.indexOf('function initTypingEffect()');
const end = app.indexOf('    // =========================================================================', start);
let scheduled = 0;
const element = { textContent: 'engineering workflows.', style: {} };
vm.runInNewContext(app.slice(start, end) + '\ninitTypingEffect();', {
    document: { querySelector: () => element },
    window: { matchMedia: () => ({ matches: true }) },
    setInterval: () => scheduled++, setTimeout: () => scheduled++,
});
assert.equal(scheduled, 0, 'Reduced motion must not start typing or blinking timers');
assert.equal(element.textContent, 'engineering workflows.');
console.log('PASS: headline fallback, reduced motion, retained deep links, selected research cards, and archive links.');
