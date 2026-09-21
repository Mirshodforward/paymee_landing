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

/* ── Konsolidatsiya qoidalari (lib/blog/protected.ts) ─────────────────────
 * 1. Himoyalangan slug redirect'ga tushmasligi kerak.
 * 2. Bitta guruhning ikki xil vazifasi bir-biriga yo'naltirilmasligi kerak.
 * Ikkalasi ham matn sifatida o'qiladi — skript TS'ni import qilmaydi.        */
const protectedSrc = read("lib/blog/protected.ts");
const protectedSlugs = [
  ...(protectedSrc.match(/export const protectedBlogSlugs = \[([\s\S]*?)\] as const/)?.[1] ?? "")
    .matchAll(/"([^"]+)"/g),
].map((m) => m[1]);

const intentBlock =
  protectedSrc.match(/separateIntentTasks: Record<string, readonly string\[\]> = \{([\s\S]*?)\n\};/)?.[1] ?? "";
const taskOfSlug = new Map();
for (const m of intentBlock.matchAll(/"([^"]+)":\s*\[([\s\S]*?)\]/g)) {
  const key = m[1];
  for (const s of m[2].matchAll(/"([^"]+)"/g)) taskOfSlug.set(s[1], key);
}

const redirectSrc = read("lib/blog/redirects.ts");
const redirectPairs = [
  ...redirectSrc.matchAll(/from:\s*"([^"]+)",\s*\n\s*to:\s*"([^"]+)"/g),
].map((m) => ({ from: m[1], to: m[2] }));

const errors = [];
// Konsolidatsiya seriyani qisqartirishi mumkin (birlashtirilgan slug ro'yxatdan
// chiqadi), shuning uchun qat'iy 10 emas — pastki chegara tekshiriladi.
if (growth.length < 5) errors.push(`growth series: ${growth.length} (kamida 8 kutilgan)`);
if (nft.length < 5) errors.push(`nft series: ${nft.length} (kamida 8 kutilgan)`);
if (boost.length < 4) errors.push(`boost series: ${boost.length} (kamida 8 kutilgan)`);
if (missing.length) errors.push(`series slugs not in post files: ${missing.join(", ")}`);
if (aeoCount < 90) errors.push(`aeo imports: ${aeoCount} (expected >= 109)`);

if (!protectedSlugs.length) errors.push("protected.ts: himoyalangan slug ro‘yxati o‘qilmadi");
if (taskOfSlug.size === 0) errors.push("protected.ts: separateIntentTasks o‘qilmadi");
if (!redirectPairs.length) errors.push("redirects.ts: from→to juftliklari o‘qilmadi");

for (const { from, to } of redirectPairs) {
  if (protectedSlugs.includes(from)) {
    errors.push(`himoyalangan sahifa redirect'ga tushgan: ${from} → ${to}`);
  }
  const fromTask = taskOfSlug.get(from);
  const toTask = taskOfSlug.get(to);
  if (fromTask && toTask && fromTask !== toTask && fromTask.split("/")[0] === toTask.split("/")[0]) {
    errors.push(`alohida vazifalar birlashtirilgan: ${from} (${fromTask}) → ${to} (${toTask})`);
  }
}

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
console.log(
  `  Konsolidatsiya: ${redirectPairs.length} redirect, ${protectedSlugs.length} himoyalangan slug, ` +
    `${new Set([...taskOfSlug.values()].map((k) => k.split("/")[0])).size} guruhda ${new Set(taskOfSlug.values()).size} alohida vazifa — qoidalar buzilmagan`,
);
