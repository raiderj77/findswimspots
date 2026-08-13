import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import test from "node:test";
import { creatorRevenueRel } from "../src/lib/creator-link-rel.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const read = (path) => readFileSync(join(root, path), "utf8");
const layout = read("src/app/layout.tsx");
const privacy = read("src/app/privacy/page.tsx");
const policy = read("next.config.ts");

test("Creator link is nofollow off the homepage without changing unrelated footer links", () => {
  assert.equal(creatorRevenueRel("/"), "noopener noreferrer");
  assert.equal(creatorRevenueRel("/about"), "nofollow noopener noreferrer");
  assert.equal(creatorRevenueRel("/florida/example-spot"), "nofollow noopener noreferrer");

  assert.match(layout, /\{ name: 'Fiber Tools', href: 'https:\/\/fibertools\.app' \}/);
  assert.match(
    layout,
    /s\.href === CREATOR_REVENUE_URL \? \([\s\S]*?<CreatorRevenueLink[\s\S]*?\) : \(\s*<a href=\{s\.href\} target="_blank" rel="noopener noreferrer"/,
  );
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
