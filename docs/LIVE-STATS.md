# Landingdagi jonli statistika

Landing bosh sahifasidagi to‘rt raqam (xizmat yili, yetkazish vaqti, foydalanuvchi,
bajarilgan buyurtma) ilgari `lib/products.ts` dagi `STATS` da qo‘lda yozilgan edi.
Endi ularning ikkitasi bot bazasidan keladi.

## Ma’lumot yo‘li

```
starspaymeebot/backend/server.js          landings/starspaymeelanding
  GET /api/public/stats                     lib/live-stats.ts
  ├─ 10 daqiqa xotirada kesh        ──►     ├─ Next keshi: 15 daqiqa (ISR)
  ├─ Cache-Control: 300s                    ├─ timeout: 4 s
  └─ faqat jamlangan raqamlar               └─ xato bo‘lsa → STATS zaxirasi
                                                    │
                                            app/[locale]/page.tsx
                                            app/llms.txt/route.ts
```

Landing **faqat o‘qiydi** — hech narsa yozmaydi va hech qanday maxfiy
ma’lumot so‘ramaydi.

## Backend: `GET /api/public/stats`

Joylashuvi: `starspaymeebot/backend/server.js`, `/api/status` dan keyin.

Autentifikatsiya **yo‘q** — chunki javobda faqat jamlangan raqamlar bor:
na `user_id`, na `username`, na to‘lov summasi. `/api/` umumiy rate limit
ostida ishlaydi.

Javob namunasi:

```json
{
  "ok": true,
  "users": 7421,
  "ordersCompleted": 186342,
  "starsDelivered": 24815900,
  "since": "2024-07-19",
  "yearsInService": 2,
  "updatedAt": "2026-09-11T13:12:42.800Z",
  "cached": true
}
```

| Maydon | Qayerdan | Landingda |
|---|---|---|
| `users` | `users` (banlanganlar hisobga olinmaydi) | «Faol foydalanuvchi» |
| `ordersCompleted` | `orders`, yetkazilgan statuslar | «Bajarilgan buyurtma» |
| `starsDelivered` | `orders.type_amount` yig‘indisi | hozircha ko‘rsatilmaydi |
| `yearsInService` | eng erta `users.created_at` dan hisoblanadi | «+ yil» |
| `since` | eng erta ro‘yxatdan o‘tish sanasi | diagnostika uchun |

### Yetkazish vaqti nega jonli emas

`orders` jadvalida yetkazish tugagan vaqtni saqlovchi ustun **yo‘q**
(`completed_at` faqat `user_missions` da). Shuning uchun o‘rtacha vaqtni
hisoblab bo‘lmaydi va landing uni `STATS.deliverySeconds` dan oladi.

Kelajakda `orders` ga `delivered_at TIMESTAMPTZ` qo‘shilsa:

1. `buildPublicStats()` ga `AVG(EXTRACT(EPOCH FROM (delivered_at - created_at)))`
   so‘rovini qo‘shib, natijani `out.avgDeliverySeconds` ga yozish;
2. boshqa hech narsa kerak emas — `lib/live-stats.ts` bu maydonni allaqachon
   o‘qiydi va topilsa jonli qiymatga o‘tadi.

### Tekshirish

```bash
curl -s https://starspaymee.starstg.uz/api/public/stats | jq
```

## Landing: `lib/live-stats.ts`

`getLandingStats()` server tomonida chaqiriladi va hech qachon xato
tashlamaydi — quyidagi har bir holatda zaxira qiymat qaytaradi:

- backend o‘chiq yoki tarmoq xatosi;
- 4 soniyadan uzoq javob bermasa;
- JSON buzuq yoki `ok: false`;
- raqam musbat butun son bo‘lmasa yoki mantiqiy chegaradan oshsa.

Shuning uchun **API o‘chib qolsa ham build buzilmaydi** va sayt eski raqam
bilan ishlashda davom etadi. Buni sinash uchun:

```bash
STATS_API_URL="http://127.0.0.1:59999" npm run build   # API yo‘q → zaxira
```

### Sozlama

| O‘zgaruvchi | Standart qiymat |
|---|---|
| `STATS_API_URL` | `https://starspaymee.starstg.uz` |

Standart qiymat production manzili bo‘lgani uchun Vercel’da **hech narsa
sozlash shart emas**. O‘zgaruvchi faqat backend boshqa domenga ko‘chsa yoki
lokal sinov uchun kerak bo‘ladi. `NEXT_PUBLIC_` prefiksi **yo‘q** — manzil
faqat serverda o‘qiladi.

### Sahifa ISR bilan yangilanadi

`app/[locale]/page.tsx` da `export const revalidate = 900`. Ya’ni raqamlar
15 daqiqada bir marta yangilanadi va buning uchun qayta deploy qilish kerak
emas.

## Nega raqam server tomonida yoziladi

Ilgari HTML’da `0` turardi va uni faqat `components/v2/v2-effects.tsx`
hisoblagichi almashtirardi — ya’ni qidiruv botlari va JS o‘chiq brauzerlar
to‘rtta nol ko‘rardi. Endi raqam server tomonida yoziladi, `data-target` esa
saqlanadi: hisoblagich ishlashda davom etadi va bir xil format chiqargani
uchun raqam «sakramaydi».

## Raqamlar pasayishi mumkin

Muhim: bu endpoint bazadagi **haqiqiy** holatni qaytaradi. Agar bazadagi son
hozirgi `STATS` dagi qiymatdan kichik bo‘lsa, landingdagi raqam ham pasayadi.
Deploydan keyin yuqoridagi `curl` bilan tekshirib, raqamlar kutganingizga mos
ekanini ko‘rib chiqish tavsiya etiladi.
