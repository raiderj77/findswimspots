import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('the homepage and trust pages may be indexed', () => {
  const layout = read('src/app/layout.tsx');
  assert.match(layout, /robots:\s*{[\s\S]*?index:\s*true,[\s\S]*?googleBot:\s*{\s*index:\s*true/);
});

test('thin state and listing routes remain noindex,follow', () => {
  for (const path of ['src/app/[state]/page.tsx', 'src/app/[state]/[slug]/page.tsx']) {
    const source = read(path);
    assert.match(source, /robots:\s*{\s*index:\s*false,\s*follow:\s*true/);
    assert.match(source, /googleBot:\s*{\s*index:\s*false,\s*follow:\s*true/);
  }
});

test('directory-only browse hubs remain noindex when present', () => {
  for (const path of ['src/app/browse/page.tsx', 'src/app/browse-states/page.tsx']) {
    const url = new URL(`../${path}`, import.meta.url);
    if (existsSync(url)) {
      assert.match(read(path), /robots:\s*{\s*index:\s*false,\s*follow:\s*true/);
    }
  }
});

test('the sitemap contains only an explicit allowlist', () => {
  const sitemap = read('src/app/sitemap.ts');
  assert.match(sitemap, /INDEXABLE_PATHS/);
  assert.doesNotMatch(sitemap, /data\/locations|locations\.map|statePages|locationPages|parkPages/);
  assert.match(sitemap, /'\/about'/);
  assert.match(sitemap, /'\/contact'/);
});

test('Googlebot can crawl pages to observe route-level noindex rules', () => {
  const robots = read('public/robots.txt');
  assert.match(robots, /User-agent:\s*Googlebot[\s\S]*?Allow:\s*\//i);
});

test('the imported inventory and its field gaps are represented exactly', () => {
  const records = JSON.parse(read('src/data/locations.json'));
  assert.equal(records.length, 4024);
  assert.equal(records.filter((record) => record.city).length, 48);
  assert.equal(new Set(records.map((record) => record.state)).size, 52);
  assert.equal(records.every((record) => record.lat != null && record.lng != null), true);
  assert.equal(records.every((record) => JSON.stringify(record.amenities) === JSON.stringify(['Swimming', 'Public access'])), true);
  assert.equal(records.some((record) => 'source' in record || 'website' in record || 'reviewedAt' in record), false);
});

test('imported records are not presented as verified access or safety guidance', () => {
  const home = read('src/app/page.tsx');
  const state = read('src/app/[state]/page.tsx');
  const detail = read('src/app/[state]/[slug]/page.tsx');
  const about = read('src/app/about/page.tsx');
  const llms = read('public/llms.txt');

  assert.match(home, /imported coordinate records, not verified swimming recommendations/i);
  assert.match(home, /0[\s\S]*Reviewed swim profiles/);
  assert.match(state, /Not source-reviewed/);
  assert.match(detail, /does not record the original source or collection date/i);
  assert.match(detail, /stateSlug === state && record\.slug === slug/);
  assert.match(about, /coordinate is not proof/i);
  assert.match(llms, /Bulk imported pages are not monetization-ready/);
  assert.doesNotMatch(home, /all free, all verified|100%[\s\S]*Free Access|tested swim spots|safety ratings/i);
  assert.doesNotMatch(detail, /'@type': 'Park'|Free \/ Public|Free Access|Natural Spot/i);
});

test('current official safety resources and accessible navigation are visible', () => {
  const home = read('src/app/page.tsx');
  const layout = read('src/app/layout.tsx');
  const browse = read('src/app/browse-states/page.tsx');
  const contact = read('src/app/contact/page.tsx');
  const css = read('src/app/globals.css');

  assert.match(home, /cdc\.gov\/drowning\/prevention/);
  assert.match(home, /epa\.gov\/beaches\/find-information/);
  assert.match(home, /weather\.gov\/safety\/beach-ripcurrents-hazards/);
  assert.match(layout, /Skip to main content/);
  assert.doesNotMatch(layout, /<meta name="robots"/);
  assert.match(browse, /googleBot:\s*{\s*index:\s*false/);
  assert.doesNotMatch(contact, /respond.+2-3 business days/i);
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion/);
});
