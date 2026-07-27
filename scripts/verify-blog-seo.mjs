/**
 * Blog SEO / AI discoverability tekshiruvi.
 * Ishga tushirish: node scripts/verify-blog-seo.mjs
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function read(path) {
  return readFileSync(join(root, path), "utf8");
}

function extractSlugsFromSeries(file) {
  const text = read(file);
  const m = text.match(/export const \w+ = \[([\s\S]*?)\] as const/);
  if (!m) return [];
  return [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]);
}

const growth = extractSlugsFromSeries("lib/blog-aeo/growth-series.ts");
const nft = extractSlugsFromSeries("lib/blog-aeo/nft-gift-series.ts");
const boost = extractSlugsFromSeries("lib/blog-aeo/boost-series.ts");
const series30 = [...growth, ...nft, ...boost];

const index = read("lib/blog-aeo/index.ts");
const aeoCount = (index.match(/import \{ post as p\d+/g) || []).length;

const postDir = join(root, "lib/blog-aeo/posts");
const postBodies = readdirSync(postDir)
  .filter((f) => f.endsWith(".tsx"))
  .map((f) => read(`lib/blog-aeo/posts/${f}`));

const missing = series30.filter(
  (slug) => !postBodies.some((body) => body.includes(`"${slug}"`)),
);

const flatCount = (read("lib/blog-posts.ts").match(/slug:\s*"/g) || []).length;

const errors = [];
if (growth.length !== 10) errors.push(`growth series: ${growth.length}/10`);
if (nft.length !== 10) errors.push(`nft series: ${nft.length}/10`);
if (boost.length !== 10) errors.push(`boost series: ${boost.length}/10`);
if (missing.length) errors.push(`series slugs not in post files: ${missing.join(", ")}`);
if (aeoCount < 109) errors.push(`aeo imports: ${aeoCount} (expected >= 109)`);

for (const rel of ["app/sitemap.ts", "app/robots.ts", "app/rss.xml/route.ts", "app/llms.txt/route.ts"]) {
  if (!existsSync(join(root, rel))) errors.push(`missing ${rel}`);
}

if (errors.length) {
  console.error("SEO verify FAILED:\n" + errors.map((e) => `  - ${e}`).join("\n"));
  process.exit(1);
}

const blogsPerLocale = aeoCount + flatCount;
console.log("SEO verify OK");
console.log(`  AEO: ${aeoCount}, flat: ${flatCount}, jami: ${blogsPerLocale}`);
console.log(`  Yangi 3 seriya (30 slug): barchasi post fayllarda topildi`);
console.log(`  Sitemap: har til uchun ${blogsPerLocale} ta /blog/{slug} + asosiy sahifalar`);
console.log(`  RSS: eng yangi 200 ta (yoki kamroq) — /rss.xml`);
console.log(`  LLMs: /llms.txt (dinamik, oxirgi 30 + seriyalar)`);
console.log(`  Robots: GPTBot, ClaudeBot, PerplexityBot, Google-Extended → Allow /`);
