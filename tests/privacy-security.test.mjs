import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import test from "node:test";

const root = fileURLToPath(new URL("../", import.meta.url));
const read = (path) => readFileSync(join(root, path), "utf8");
const layout = read("src/app/layout.tsx");
const privacy = read("src/app/privacy/page.tsx");
const policy = read("next.config.ts");

test("Creator footer link is removed without changing unrelated network links", () => {
  assert.doesNotMatch(layout, /creatorrevenuecalculator|Creator Revenue Calculator/i);
  assert.doesNotMatch(layout, /https:\/\/(?:www\.)?fibertools\.app/i);
  assert.match(layout, /\{ name: 'Mind Check Tools', href: 'https:\/\/mindchecktools\.com' \}/);
  assert.match(layout, /\{ name: 'Flip My Case', href: 'https:\/\/flipmycase\.com' \}/);
  assert.equal(existsSync(join(root, "src/components/CreatorRevenueLink.tsx")), false);
  assert.equal(existsSync(join(root, "src/lib/creator-link-rel.mjs")), false);
});

test("optional advertising and analytics do not execute", () => {
  assert.doesNotMatch(layout, /googletagmanager|googlesyndication\.com\/pagead|clarity\.ms|Cookiebot/i);
  assert.doesNotMatch(policy, /unsafe-eval|googletagmanager|googlesyndication|clarity\.ms|Cookiebot/i);
});

test("obsolete tracking cookie middleware is absent", () => {
  assert.equal(existsSync(join(root, "src/middleware.ts")), false);
  assert.equal(existsSync(join(root, "src/lib/gpc.ts")), false);
});

test("public disclosures and publisher verification match production", () => {
  assert.match(privacy, /not\s+currently\s+enabled/i);
  assert.match(read("public/ads.txt"), /pub-7171402107622932/);
});
