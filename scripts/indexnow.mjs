// scripts/indexnow.mjs — IndexNow: yangi yoki o'zgargan sahifalarni Yandex, Bing va
// boshqa IndexNow a'zolariga darhol yuborish. Google IndexNow'ni ishlatmaydi —
// u sitemap.xml orqali oladi (Search Console'da «Request indexing» alohida).
//
// Foydalanish:
//   npm run indexnow                          — sitemap.xml dagi BARCHA URL'lar
//   npm run indexnow -- /uz/blog/slug /ru/…   — faqat berilgan yo'llar (yoki to'liq URL)
//   npm run indexnow -- --dry …               — yubormasdan, nima ketishini ko'rsatadi
//
// Kalit maxfiy emas: u public/<kalit>.txt da ochiq turadi — IndexNow aynan shu
// fayl orqali sayt egasi ekanini tekshiradi. Kalitni o'zgartirsangiz, faylni ham.
// api.indexnow.org bitta so'rovni barcha a'zo qidiruvlarga tarqatadi.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const SITE = "https://www.starstg.uz";
const HOST = "www.starstg.uz";
const KEY = "7c17e2cd28ac7ad53d5e43493b7e12e3";
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const MAX_PER_REQUEST = 10_000;

const args = process.argv.slice(2);
const dry = args.includes("--dry");
const given = args.filter((a) => !a.startsWith("--"));

// Kalit fayli repo'da bormi — deploy'dan oldin xato topilsin
const keyFile = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public", `${KEY}.txt`);
if (readFileSync(keyFile, "utf8").trim() !== KEY) {
  console.error(`❌ public/${KEY}.txt ichidagi kalit mos emas`);
  process.exit(1);
}

const toUrl = (p) => (p.startsWith("http") ? p : `${SITE}${p.startsWith("/") ? "" : "/"}${p}`);

async function sitemapUrls() {
  const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

const urls = [...new Set(given.length ? given.map(toUrl) : await sitemapUrls())];
if (!urls.length) {
  console.error("❌ Yuboriladigan URL yo'q");
  process.exit(1);
}

if (!dry) {
  // Jonli saytda kalit fayli ochilishini tekshiramiz — aks holda hamma so'rov rad etiladi
  const live = await fetch(KEY_LOCATION).then((r) => (r.ok ? r.text() : "")).catch(() => "");
  if (live.trim() !== KEY) {
    console.error(`❌ ${KEY_LOCATION} ochilmadi yoki kalit mos emas — avval deploy qiling`);
    process.exit(1);
  }
}

console.log(`IndexNow: ${urls.length} ta URL${dry ? " (dry — yuborilmaydi)" : ""}`);
for (let i = 0; i < urls.length; i += MAX_PER_REQUEST) {
  const urlList = urls.slice(i, i + MAX_PER_REQUEST);
  if (dry) {
    urlList.slice(0, 20).forEach((u) => console.log("  ", u));
    if (urlList.length > 20) console.log(`   … yana ${urlList.length - 20} ta`);
    continue;
  }
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });
  // 200 OK / 202 Accepted — qabul qilindi; 422 — URL hostga mos emas; 403 — kalit xato; 429 — tez-tez
  const label = { 200: "OK", 202: "Accepted", 400: "Bad request", 403: "Forbidden (kalit)", 422: "Unprocessable (URL/host)", 429: "Too many requests" }[res.status] || "";
  console.log(`   → ${res.status} ${label}`.trimEnd());
  if (res.status >= 400) process.exitCode = 1;
}
