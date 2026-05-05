# 🌟 STARSJOY - TO'LIQ LOYIHA HUJJATI

## 📋 Loyiha Haqida Umumiy Ma'lumot

**Starsjoy** — Telegram Mini App (WebApp) sifatida ishlaydigan Telegram Stars, Premium va Gift sotib olish platformasi. Foydalanuvchilar UzCard/HUMO bank kartalari orqali to'lov qilib, Telegram yulduzlarini, Premium obunani yoki Gift sovg'alarini sotib olishlari mumkin.

### 🎯 Loyiha Maqsadi
- Telegram Stars'ni UZS (so'm) orqali sotib olish imkoniyati
- Telegram Premium obunani (3, 6, 12 oy) sotib olish
- Telegram Gift sovg'alarini yuborish
- Referral dasturi orqali foydalanuvchilar jalb qilish va bonus olish
- Chegirma paketlari va promocodlar tizimi

---

## 🛠️ Texnologiyalar

### Backend
| Texnologiya | Versiya | Maqsad |
|-------------|---------|--------|
| **Node.js** | 18+ | Server runtime |
| **Express.js** | 4.18.2 | REST API framework |
| **PostgreSQL** | 8.11.5 (pg) | Ma'lumotlar bazasi |
| **Telegraf** | 4.16.3 | Telegram Bot API |
| **Telegram (GramJS)** | 2.26.22 | Userbot (SMS listener, Stars yuborish) |
| **Helmet** | 8.1.0 | HTTP security headers |
| **express-rate-limit** | 8.2.1 | Rate limiting |
| **node-fetch** | 3.3.2 | HTTP so'rovlar |
| **dotenv** | 16.4.1 | Environment variables |

### Frontend
| Texnologiya | Versiya | Maqsad |
|-------------|---------|--------|
| **React** | 19.1.1 | UI framework |
| **Vite** | 7.3.0 | Build tool & dev server |
| **React Router DOM** | 6.28.0 | SPA routing |
| **Axios** | 1.12.2 | HTTP client |
| **@twa-dev/sdk** | 8.0.2 | Telegram WebApp SDK |
| **Lottie Web** | 5.13.0 | TGS animatsiyalar |
| **Pako** | 2.1.0 | Gzip decompression (TGS uchun) |
| **Lucide React** | 0.554.0 | Ikonlar |

### Xavfsizlik
- **Telegram initData validatsiya** — HMAC-SHA256 bilan tekshirish
- **CORS** — Faqat ruxsat etilgan domenlar
- **Rate Limiting** — IP asosida so'rovlarni cheklash
- **Helmet** — HTTP security headers
- **Internal API Secret** — Server-to-server so'rovlar uchun

---

## 📁 Loyiha Tuzilishi

```
starsjoy/
├── backend/
│   ├── main.js              # Barcha servicesni ishga tushiruvchi entry point
│   ├── server.js            # Express API server
│   ├── token.js             # Telegram bot (Telegraf)
│   ├── balanceChecker.js    # SMS listener (GramJS userbot)
│   ├── check.js             # Yordamchi skriptlar
│   ├── check-pending.js     # Pending orderlarni tekshirish
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx          # Asosiy React komponenti
│   │   ├── main.jsx         # React entry point
│   │   ├── index.css        # Global stillar
│   │   ├── theme.css        # Tema stillari
│   │   │
│   │   ├── pages/           # Sahifalar
│   │   │   ├── Homepage/    # Bosh sahifa (Dashboard)
│   │   │   ├── Stars/       # Stars sotib olish
│   │   │   ├── Premium/     # Premium sotib olish
│   │   │   ├── Gift/        # Gift yuborish
│   │   │   ├── Referral/    # Referral dasturi
│   │   │   ├── History/     # Buyurtmalar tarixi
│   │   │   ├── Profile/     # Profil sozlamalari
│   │   │   ├── Statistics/  # Statistika
│   │   │   ├── Discount/    # Chegirma paketlari
│   │   │   ├── Challenges/  # Vazifalar/NFT
│   │   │   ├── Notifications/ # Bildirishnomalar
│   │   │   ├── Admin/       # Admin panel
│   │   │   ├── Legal/       # Huquqiy hujjatlar
│   │   │   └── Maintenance/ # Texnik ish sahifasi
│   │   │
│   │   ├── components/      # Qayta ishlatiladigan komponentlar
│   │   │   ├── TGSSticker.jsx      # TGS animatsiya player
│   │   │   ├── TelegramGate.jsx    # Telegram auth gate
│   │   │   ├── ThemeToggle.jsx     # Tema almashtirish
│   │   │   ├── LanguageSelector.jsx # Til tanlash
│   │   │   └── ErrorBoundary.jsx   # Xato tutish
│   │   │
│   │   ├── context/         # React Context
│   │   │   ├── LanguageContext.jsx # Ko'p tillilik
│   │   │   └── ThemeContext.jsx    # Mavzu boshqaruvi
│   │   │
│   │   ├── locales/         # Tarjimalar
│   │   │   ├── uz.json      # O'zbek tili
│   │   │   ├── ru.json      # Rus tili
│   │   │   └── en.json      # Ingliz tili
│   │   │
│   │   ├── utils/           # Yordamchi funksiyalar
│   │   │   └── apiFetch.js  # API so'rovlar utility
│   │   │
│   │   └── assets/          # Rasm va TGS fayllar
│   │
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── starsjoy.md              # Ushbu hujjat
```

---

## 📱 Sahifalar va Funksiyalar (Batafsil)

---

### 1. 🏠 Dashboard (Bosh sahifa)
**Fayl:** `frontend/src/pages/Homepage/Dashboard.jsx`
**URL:** `/`

#### Interfeys Tuzilishi
```
┌─────────────────────────────────────────────┐
│  👤 Avatar + Username    🔔 Notifications   │
├─────────────────────────────────────────────┤
│  ⭐ Stars    💎 Premium   🎁 Gift   👥 Ref  │  ← Action Cards
├─────────────────────────────────────────────┤
│  🏆 Leaderboard (TOP-10)                    │
│  ├── 🥇 User1 - 500,000 so'm                │
│  ├── 🥈 User2 - 350,000 so'm                │
│  └── ...                                     │
├─────────────────────────────────────────────┤
│  📊 Tab: Savdo | Referal                    │
├─────────────────────────────────────────────┤
│  🌐 Til   📦 History   👤 Profile   📊 Stats│  ← Bottom Nav
└─────────────────────────────────────────────┘
```

#### Ishlash Jarayoni
1. **Sahifa yuklanganda:**
   - Telegram WebApp SDK ishga tushadi
   - Foydalanuvchi ma'lumotlari olinadi (username, avatar, user_id)
   - `/api/dashboard/init` API chaqiriladi (bir so'rovda barcha ma'lumot)
   - Splash screen 2 sekund ko'rsatiladi

2. **Dashboard Init API qaytaradi:**
   - `leaderboard.top10` — Savdo TOP-10
   - `leaderboard.me` — Foydalanuvchining o'rni
   - `referralLeaderboard.top10` — Referral TOP-10
   - `history` — Oxirgi buyurtmalar
   - `referralStats` — Referral balans va statistika
   - `unreadCount` — O'qilmagan bildirishnomalar

3. **Action Cards bosilganda:**
   - Stars → `/stars` sahifasiga o'tadi
   - Premium → `/premium` sahifasiga o'tadi
   - Gift → `/gift` sahifasiga o'tadi
   - Referral → `/referral` sahifasiga o'tadi

4. **Bildirishnomalar:**
   - 🔔 belgisi ustida o'qilmagan soni ko'rsatiladi
   - Har 30 sekundda yangilanadi

5. **Til almashtirish:**
   - 🌐 tugmasi bosilganda modal ochiladi
   - O'zbekcha / Русский / English tanlanadi
   - localStorage ga saqlanadi

**API Endpointlar:**
| Endpoint | Maqsad |
|----------|--------|
| `GET /api/dashboard/init?username=X&user_id=Y` | Barcha dashboard ma'lumotlari |
| `GET /api/notifications/unread/{userId}` | O'qilmagan bildirishnomalar soni |

---

### 2. ⭐ Stars (Yulduzlar sotib olish)
**Fayl:** `frontend/src/pages/Stars/Stars.jsx`
**URL:** `/stars`

#### Interfeys Tuzilishi
```
┌─────────────────────────────────────────────┐
│  ← Back        ⭐ Stars sotib olish         │
├─────────────────────────────────────────────┤
│  🎭 TGS Sticker animatsiya                  │
├─────────────────────────────────────────────┤
│  👤 Username: [@username]  [📱 Men]         │
│  ┌─────────────────────────────────────┐    │
│  │ 🔍 Loading... / ✅ Avatar + Name    │    │
│  └─────────────────────────────────────┘    │
├─────────────────────────────────────────────┤
│  ⭐ Stars miqdorini tanlang:                │
│  [50] [100] [200] [350] [500]               │
│  [Show more ▼]                              │
│  [750] [1000] [2000] [5000] [10000]         │
├─────────────────────────────────────────────┤
│  💰 Narx: 12,000 so'm                       │
│  🏷️ Promocode: [______] [Tekshir]          │
│  ✅ Chegirma: -10% = 10,800 so'm            │
├─────────────────────────────────────────────┤
│  [      ⭐ Sotib olish      ]               │
└─────────────────────────────────────────────┘
```

#### Ishlash Jarayoni

**1-Qadam: Username kiritish**
```
Foydalanuvchi → Username yozadi → 800ms debounce
                                        ↓
                              POST /api/search
                                        ↓
              ┌─────────────────────────────────────┐
              │ Backend: RobynHood API orqali      │
              │ Telegram foydalanuvchisini qidiradi│
              └─────────────────────────────────────┘
                                        ↓
              Avatar, fullName, recipient_id qaytadi
```

**2-Qadam: Stars miqdorini tanlash**
```
Foydalanuvchi → 50 stars tanladi
                        ↓
              GET /api/stars/price/50
                        ↓
              ┌─────────────────────────────────────┐
              │ Backend: Slot tizimidan narx oladi  │
              │ - Bo'sh slot bor: 12000 so'm        │
              │ - Slot band: 11950 so'm (keyingi)   │
              │ - Hamma band: available=false       │
              └─────────────────────────────────────┘
```

**3-Qadam: Promocode (ixtiyoriy)**
```
Foydalanuvchi → "STARS10" kiritdi → [Tekshir]
                                        ↓
              POST /api/promocode/check
              { code: "STARS10", type: "stars", amount: 50, price: 12000 }
                                        ↓
              ┌─────────────────────────────────────┐
              │ Tekshirish:                         │
              │ - Promocode mavjudmi?               │
              │ - target_type = stars?              │
              │ - target_amount = 50?               │
              │ - usage_limit tugamaganmi?          │
              └─────────────────────────────────────┘
                                        ↓
              { discount_percent: 10, new_price: 10800 }
```

**4-Qadam: Sotib olish**
```
Foydalanuvchi → [Sotib olish] bosdi
                        ↓
              ┌─────────────────────────────────────┐
              │ Warning Modal:                      │
              │ "To'lov qilishdan oldin o'qing..."  │
              │ [Bekor qilish] [Davom etish]        │
              └─────────────────────────────────────┘
                        ↓ Davom etish
              POST /api/stars/order
              {
                username: "john_doe",
                recipient: "123456789",
                stars: 50,
                price: 10800,
                promocode: "STARS10"
              }
                        ↓
              ┌─────────────────────────────────────┐
              │ Backend:                            │
              │ 1. Slot band qilish (lock)          │
              │ 2. Order yaratish (pending)         │
              │ 3. Global cache ga qo'shish         │
              │ 4. Promocode used_count++           │
              └─────────────────────────────────────┘
                        ↓
              Order qaytadi: { id, amount, status }
```

**5-Qadam: To'lov Modal**
```
┌─────────────────────────────────────────────┐
│  💳 To'lov ma'lumotlari                     │
├─────────────────────────────────────────────┤
│  Karta: 8600 1234 5678 2022      [📋 Copy] │
│  Summa: 10,800 so'm              [📋 Copy] │
│  Egasi: JOHN DOE                            │
├─────────────────────────────────────────────┤
│  ⏱️ Qolgan vaqt: 04:32                      │
├─────────────────────────────────────────────┤
│  Status: ⏳ To'lov kutilmoqda...            │
└─────────────────────────────────────────────┘
```

**6-Qadam: Polling (har 3 sekund)**
```
Frontend → GET /api/stars/order/{orderId}
                        ↓
              ┌─────────────────────────────────────┐
              │ Status turlari:                     │
              │ - pending: davom etadi              │
              │ - stars_sent: SUCCESS modal         │
              │ - expired: EXPIRED modal            │
              │ - failed: ERROR modal               │
              └─────────────────────────────────────┘
```

**7-Qadam: SMS to'lov kelganda (Backend)**
```
UZCARD SMS → BalanceChecker (GramJS)
                        ↓
              Parse: amount=10800, card_last4=2022
                        ↓
              POST /api/internal/stars/match
                        ↓
              ┌─────────────────────────────────────┐
              │ Backend: Amount bo'yicha qidirish   │
              │ SELECT * FROM orders                │
              │ WHERE summ = 10800                  │
              │   AND status = 'pending'            │
              │ ORDER BY created_at ASC             │
              │ LIMIT 1                             │
              └─────────────────────────────────────┘
                        ↓
              Order topildi → Stars yuborish
                        ↓
              Telegram Bot API / Fragment API
              → Stars recipient ga yuborildi
                        ↓
              Order status = 'stars_sent'
              Referral bonus hisoblanadi
```

**Slot Tizimi Diagrammasi:**
```
50 Stars uchun slot pool:
┌────────────────────────────────────────────────────┐
│ Slot │ Narx    │ Status    │ Order ID │ Vaqt      │
├────────────────────────────────────────────────────┤
│  0   │ 12,000  │ 🔒 Band   │ #1001    │ 4:32 qoldi│
│  1   │ 11,950  │ 🔒 Band   │ #1002    │ 2:15 qoldi│
│  2   │ 11,900  │ ✅ Bo'sh  │ -        │ -         │
│  3   │ 11,850  │ ✅ Bo'sh  │ -        │ -         │
│ ...  │ ...     │ ...       │ ...      │ ...       │
│  19  │ 11,050  │ ✅ Bo'sh  │ -        │ -         │
└────────────────────────────────────────────────────┘
Yangi order → Slot 2 ga ketadi (11,900 so'm)
```

**API Endpointlar:**
| Endpoint | Method | Maqsad |
|----------|--------|--------|
| `/api/search` | POST | Username qidirish |
| `/api/stars/price/{amount}` | GET | Slot-based narx |
| `/api/promocode/check` | POST | Promocode tekshirish |
| `/api/stars/order` | POST | Order yaratish |
| `/api/stars/order/{id}` | GET | Order statusi |

---

### 3. 💎 Premium (Premium sotib olish)
**Fayl:** `frontend/src/pages/Premium/Premium.jsx`
**URL:** `/premium`

#### Interfeys Tuzilishi
```
┌─────────────────────────────────────────────┐
│  ← Back       💎 Premium sotib olish        │
├─────────────────────────────────────────────┤
│  🎭 TGS Sticker (diamond animatsiya)        │
├─────────────────────────────────────────────┤
│  👤 Username: [@username]  [📱 Men]         │
│  ┌─────────────────────────────────────┐    │
│  │ ✅ John Doe                         │    │
│  │ Premium emas ✓                      │    │
│  └─────────────────────────────────────┘    │
├─────────────────────────────────────────────┤
│  📅 Tarifni tanlang:                        │
│  ┌──────────┬──────────┬──────────┐         │
│  │  3 oy    │  6 oy    │  1 yil   │         │
│  │ 250,000  │ 450,000  │ 800,000  │         │
│  │   [ ]    │   [✓]    │   [ ]    │         │
│  └──────────┴──────────┴──────────┘         │
├─────────────────────────────────────────────┤
│  🏷️ Promocode: [______] [Tekshir]          │
├─────────────────────────────────────────────┤
│  [      💎 Sotib olish      ]               │
└─────────────────────────────────────────────┘
```

#### Ishlash Jarayoni

**1-Qadam: Username qidirish**
```
POST /api/premium/search
{ username: "john_doe", months: 6 }
        ↓
┌─────────────────────────────────────────────┐
│ Backend tekshiradi:                         │
│ 1. Foydalanuvchi mavjudmi?                  │
│ 2. Allaqachon Premium bormi?                │
│    - Ha: Xato qaytaradi                     │
│    - Yo'q: Ma'lumot qaytaradi               │
└─────────────────────────────────────────────┘
        ↓
{ username, fullName, imageUrl, recipient, hasPremium: false }
```

**2-Qadam: Tarif tanlash**
```
Tariflar (env dan):
- 3 oy:  VITE_PREMIUM_3  = 250,000 so'm
- 6 oy:  VITE_PREMIUM_6  = 450,000 so'm
- 12 oy: VITE_PREMIUM_12 = 800,000 so'm

Har bir tarif uchun alohida slot pool mavjud
```

**3-Qadam: Order yaratish**
```
POST /api/premium/order
{
  username: "john_doe",
  recipient: "123456789",
  months: 6,
  price: 450000,
  promocode: null
}
        ↓
Backend:
1. Premium slot olish (20 ta unique narx)
2. Order yaratish (order_type: 'premium')
3. To'lov kutish (5 daqiqa)
```

**4-Qadam: Premium yuborish (to'lovdan keyin)**
```
SMS keldi → Match API
        ↓
Backend → Telegram Premium Gift API
        ↓
Premium 6 oy qo'shildi
        ↓
Status = 'premium_sent'
```

**API Endpointlar:**
| Endpoint | Method | Maqsad |
|----------|--------|--------|
| `/api/premium/search` | POST | Foydalanuvchi qidirish + Premium tekshirish |
| `/api/promocode/check` | POST | Promocode (type: premium) |
| `/api/premium/order` | POST | Order yaratish |
| `/api/premium/order/{id}` | GET | Order statusi |

---

### 4. 🎁 Gift (Sovg'a yuborish)
**Fayl:** `frontend/src/pages/Gift/Gift.jsx`
**URL:** `/gift`

#### Interfeys Tuzilishi
```
┌─────────────────────────────────────────────┐
│  ← Back         🎁 Gift yuborish            │
├─────────────────────────────────────────────┤
│  👤 Username: [@username]  [📱 Men]         │
├─────────────────────────────────────────────┤
│  🎁 Gift tanlang:                           │
│  ┌─────┬─────┬─────┬─────┐                  │
│  │ 🎀  │ 🎈  │ 🧸  │ 💐  │  15⭐ = 4,000   │
│  ├─────┼─────┼─────┼─────┤                  │
│  │ 🎂  │ 🍰  │ 🎁  │ 🎊  │  50⭐ = 12,000  │
│  ├─────┼─────┼─────┼─────┤                  │
│  │ 💎  │ 👑  │ 🏆  │ 🌟  │  100⭐ = 24,000 │
│  └─────┴─────┴─────┴─────┘                  │
├─────────────────────────────────────────────┤
│  ☐ Anonim yuborish                          │
│  💬 Izoh: [________________] (128 belgi)    │
├─────────────────────────────────────────────┤
│  🏷️ Promocode: [______] [Tekshir]          │
├─────────────────────────────────────────────┤
│  [      🎁 Yuborish - 12,000 so'm      ]    │
└─────────────────────────────────────────────┘
```

#### Ishlash Jarayoni

**1-Qadam: Gift tanlash (Bottom Sheet Modal)**
```
Foydalanuvchi → Gift ustiga bosadi
                        ↓
┌─────────────────────────────────────────────┐
│  🎁 Gift ma'lumotlari                       │
├─────────────────────────────────────────────┤
│  [TGS Animatsiya]                           │
│  50 ⭐ Gift                                 │
│  Narx: 12,000 so'm                          │
├─────────────────────────────────────────────┤
│  ☐ Anonim yuborish                          │
│  💬 Izoh: [________________]                │
├─────────────────────────────────────────────┤
│  🏷️ Promocode: [______] [Tekshir]          │
├─────────────────────────────────────────────┤
│  [Bekor qilish]  [🎁 Yuborish]              │
└─────────────────────────────────────────────┘
```

**2-Qadam: Gift Order**
```
POST /api/gift/order
{
  username: "john_doe",
  recipient: "123456789",
  gift_id: "5170144170496491616",
  stars: 50,
  price: 12000,
  is_anonymous: true,
  comment: "Tug'ilgan kuning muborak!",
  promocode: null
}
```

**3-Qadam: Gift yuborish (to'lovdan keyin)**
```
Backend → Telegram sendGift API
{
  user_id: recipient,
  gift_id: "5170144170496491616",
  text: "Tug'ilgan kuning muborak!",
  text_parse_mode: "Markdown",
  // Anonim bo'lsa:
  // pay_for_upgrade: false qoladi
}
        ↓
Gift yuborildi → Status = 'gift_sent'
```

**Gift ID lari va TGS fayllar:**
```
assets/
├── 5170145012310081615.tgs  (15⭐)
├── 5170233102089322756.tgs  (15⭐)
├── 5170250947678437525.tgs  (25⭐)
├── 5168103777563050263.tgs  (25⭐)
├── 5170144170496491616.tgs  (50⭐)
├── ... (16 ta gift)
```

**API Endpointlar:**
| Endpoint | Method | Maqsad |
|----------|--------|--------|
| `/api/search` | POST | Qabul qiluvchi qidirish |
| `/api/promocode/check` | POST | Promocode (type: gift) |
| `/api/gift/order` | POST | Gift order yaratish |
| `/api/gift/status/{id}` | GET | Order statusi |

---

### 5. 👥 Referral (Taklif dasturi)
**Fayl:** `frontend/src/pages/Referral/Referral.jsx`
**URL:** `/referral`

#### Interfeys Tuzilishi
```
┌─────────────────────────────────────────────┐
│  ← Back       👥 Referral dasturi           │
├─────────────────────────────────────────────┤
│  🎭 TGS Sticker                             │
├─────────────────────────────────────────────┤
│  📊 Statistika                              │
│  ┌────────────┬────────────┬────────────┐   │
│  │  Balans    │  Daromad   │  Do'stlar  │   │
│  │  150 ⭐    │  500 ⭐    │  12 ta     │   │
│  └────────────┴────────────┴────────────┘   │
├─────────────────────────────────────────────┤
│  🔗 Sizning havolangiz:                     │
│  ┌─────────────────────────────────────┐    │
│  │ t.me/starsjoy_bot?start=ABC123     │    │
│  └─────────────────────────────────────┘    │
│  [📋 Nusxalash]  [📤 Ulashish]              │
├─────────────────────────────────────────────┤
│  👫 Do'stlaringiz (12):                     │
│  ├── @user1 ✅ Tasdiqlangan                 │
│  ├── @user2 ⏳ Kutilmoqda                   │
│  └── @user3 ✅ Tasdiqlangan                 │
├─────────────────────────────────────────────┤
│  💰 Daromad tarixi:                         │
│  ├── +10⭐ @user1 dan (Stars xaridi)        │
│  ├── +25⭐ @user3 dan (Premium xaridi)      │
│  └── ...                                     │
├─────────────────────────────────────────────┤
│  [      🎁 Yechib olish (150⭐)      ]      │
└─────────────────────────────────────────────┘
```

#### Ishlash Jarayoni

**1-Qadam: Ro'yxatdan o'tish (avtomatik)**
```
Dashboard yuklanganda:
POST /api/referral/register
{
  username: "john_doe",
  referral_code: "ABC123"  // URL dan (agar bor bo'lsa)
}
        ↓
Backend:
1. Foydalanuvchi mavjudmi? → Yangilash
2. Yangi → Yaratish + referral_code generatsiya
3. referral_code berilgan → referrer_username saqlash
```

**2-Qadam: Statistika yuklash**
```
GET /api/referral/stats/{username}
        ↓
{
  referral_balance: 150,    // Joriy balans (stars)
  total_earnings: 500,      // Jami daromad
  total_referrals: 12,      // Jami referrallar
  som_balance: 0            // So'm balansi
}
```

**3-Qadam: Referral havola**
```
GET /api/referral/link/{username}
        ↓
{
  referral_code: "ABC123",
  referral_link: "https://t.me/starsjoy_bot?start=ABC123"
}
```

**4-Qadam: Bonus hisoblash (xarid bo'lganda)**
```
Foydalanuvchi A → Referral link bilan keldi
        ↓
Foydalanuvchi A → 12,000 so'm Stars xarid qildi
        ↓
Backend:
1. A ning referrer_username = B
2. B ga bonus: 12,000 × 5% = 600 so'm = ~2.5⭐
3. B.referral_balance += 3 (yaxlitlangan)
4. referral_earnings jadvaliga yozish
```

**5-Qadam: Yechib olish**
```
Foydalanuvchi → [Yechib olish] bosdi
        ↓
┌─────────────────────────────────────────────┐
│  🎁 Gift tanlang (yechish uchun):           │
│  ┌─────────────────────────────────────┐    │
│  │ [TGS] 50⭐  │ [TGS] 100⭐           │    │
│  └─────────────────────────────────────┘    │
│  [Bekor]  [Yechib olish]                    │
└─────────────────────────────────────────────┘
        ↓
POST /api/referral/withdraw
{
  username: "john_doe",
  amount: 50,
  gift_id: "5170144170496491616"
}
        ↓
Backend:
1. Balans tekshirish (≥50)
2. referral_withdrawals ga yozish (pending)
3. Admin tasdiqlashini kutish
```

**API Endpointlar:**
| Endpoint | Method | Maqsad |
|----------|--------|--------|
| `/api/referral/register` | POST | Ro'yxatdan o'tish |
| `/api/referral/link/{username}` | GET | Referral link |
| `/api/referral/stats/{username}` | GET | Statistika |
| `/api/referral/earnings/{username}` | GET | Daromad tarixi |
| `/api/referral/my-friends/{username}` | GET | Do'stlar ro'yxati |
| `/api/referral/friends-count/{username}` | GET | Do'stlar soni |
| `/api/referral/withdrawals/{username}` | GET | Yechish tarixi |
| `/api/referral/withdraw` | POST | Yechib olish so'rovi |
| `/api/referral/leaderboard` | GET | TOP-10 referrallar |

---

### 6. 📦 History (Buyurtmalar tarixi)
**Fayl:** `frontend/src/pages/History/History.jsx`
**URL:** `/history`

#### Interfeys Tuzilishi
```
┌─────────────────────────────────────────────┐
│  ← Back       📦 Buyurtmalar tarixi         │
├─────────────────────────────────────────────┤
│  🎭 TGS Sticker                             │
├─────────────────────────────────────────────┤
│  Filter: [Barchasi][✅][❌][⏱][⏳]         │
├─────────────────────────────────────────────┤
│  ┌─────────────────────────────────────┐    │
│  │ ⭐ 50 Stars          12,000 so'm   │    │
│  │ 📅 01.04.2026 14:32  ✅ Bajarildi  │    │
│  └─────────────────────────────────────┘    │
│  ┌─────────────────────────────────────┐    │
│  │ 💎 Premium 6 oy      450,000 so'm  │    │
│  │ 📅 28.03.2026 10:15  ✅ Bajarildi  │    │
│  └─────────────────────────────────────┘    │
│  ┌─────────────────────────────────────┐    │
│  │ ⭐ 100 Stars         24,000 so'm   │    │
│  │ 📅 25.03.2026 18:45  ⏱ Eskirgan   │    │
│  └─────────────────────────────────────┘    │
└─────────────────────────────────────────────┘
```

#### Ishlash Jarayoni

**1-Qadam: Buyurtmalar yuklash**
```
GET /api/user/history/{userId}
        ↓
Backend:
SELECT * FROM orders
WHERE owner_user_id = userId
ORDER BY created_at DESC
LIMIT 100
        ↓
[
  { id, kind: "stars", stars: 50, amount: 12000, status: "stars_sent", created_at },
  { id, kind: "premium", stars: 6, amount: 450000, status: "premium_sent", created_at },
  { id, kind: "stars", stars: 100, amount: 24000, status: "expired", created_at }
]
```

**2-Qadam: Filtrlash (frontend)**
```
Filter tugmalari:
- Barchasi: Hamma orderlar
- ✅ Muvaffaqiyatli: stars_sent, premium_sent, gift_sent, completed
- ❌ Muvaffaqiyatsiz: failed, error
- ⏱ Eskirgan: expired
- ⏳ Kutilmoqda: pending
```

**Status Ranglari:**
| Status | Rang | Icon |
|--------|------|------|
| pending | 🟡 Sariq | ⏳ Spinner |
| stars_sent / premium_sent | 🟢 Yashil | ✓ |
| failed / error | 🔴 Qizil | ✕ |
| expired | ⚫ Kulrang | ⏱ |

**API Endpointlar:**
| Endpoint | Method | Maqsad |
|----------|--------|--------|
| `/api/user/history/{userId}` | GET | Barcha buyurtmalar |

---

### 7. 👤 Profile (Profil)
**Fayl:** `frontend/src/pages/Profile/Profile.jsx`
**URL:** `/profile`

#### Interfeys Tuzilishi
```
┌─────────────────────────────────────────────┐
│              👤 Profil                       │
├─────────────────────────────────────────────┤
│         [  Avatar  ]                        │
│         @john_doe                           │
│         John Doe                            │
├─────────────────────────────────────────────┤
│  🌐 Til                    O'zbekcha  ›     │
│  📦 Mening buyurtmalarim              ›     │
│  💰 Referral balans           150⭐   ›     │
│  👥 Do'stlar soni              12     ›     │
├─────────────────────────────────────────────┤
│  🛟 Yordam               @starsjoy_bot ›    │
│  📢 Yangiliklar kanali      @starsjoy  ›    │
├─────────────────────────────────────────────┤
│  ─────────────────────────────────────────  │
│  📜 Foydalanish shartlari              ›    │
│  🔒 Maxfiylik siyosati                 ›    │
├─────────────────────────────────────────────┤
│           © 2026 Starsjoy                   │
│         Barcha huquqlar himoyalangan        │
│               v3.1.1                        │
└─────────────────────────────────────────────┘
```

#### Ishlash Jarayoni

**1-Qadam: Ma'lumotlar yuklash**
```
Telegram WebApp SDK dan:
- username
- photo_url (avatar)

GET /api/referral/stats/{username}
        ↓
{ referral_balance: 150, total_referrals: 12 }
```

**2-Qadam: Til almashtirish**
```
[🌐 Til] bosilganda:
        ↓
┌─────────────────────────────────────────────┐
│  🌐 Tilni tanlang                           │
├─────────────────────────────────────────────┤
│  ○ O'zbekcha                                │
│  ● English                                  │
│  ○ Русский                                  │
├─────────────────────────────────────────────┤
│  [Bekor qilish]  [Saqlash]                  │
└─────────────────────────────────────────────┘
        ↓
localStorage.setItem("language", "en")
LanguageContext yangilanadi
```

**3-Qadam: Navigatsiya**
```
Mening buyurtmalarim → navigate("/history")
Referral balans → navigate("/referral")
Do'stlar soni → navigate("/referral")
Yordam → WebApp.openTelegramLink("t.me/starsjoy_bot")
Yangiliklar → WebApp.openTelegramLink("t.me/starsjoy")
Shartlar → navigate("/terms")
Maxfiylik → navigate("/privacy")
```

---

### 8. 📊 Statistics (Statistika)
**Fayl:** `frontend/src/pages/Statistics/Statistics.jsx`
**URL:** `/statistics`

#### Interfeys Tuzilishi
```
┌─────────────────────────────────────────────┐
│  ← Back       🏆 Statistika                 │
├─────────────────────────────────────────────┤
│  Tab: [⭐ Savdo] [👥 Referal]               │
├─────────────────────────────────────────────┤
│  Period: [Bugun] [Hafta] [Oy]               │
├─────────────────────────────────────────────┤
│  🏆 TOP-10 Xaridorlar                       │
│  ┌─────────────────────────────────────┐    │
│  │ 🥇 @user1        500,000 so'm      │    │
│  │ 🥈 @user2        350,000 so'm      │    │
│  │ 🥉 @user3        280,000 so'm      │    │
│  │ #4 @user4        150,000 so'm      │    │
│  │ #5 @user5        120,000 so'm      │    │
│  │ ...                                 │    │
│  └─────────────────────────────────────┘    │
├─────────────────────────────────────────────┤
│  📍 Sizning o'rningiz                       │
│  ┌─────────────────────────────────────┐    │
│  │ #15 @john_doe     45,000 so'm      │    │
│  └─────────────────────────────────────┘    │
└─────────────────────────────────────────────┘
```

#### Ishlash Jarayoni

**1-Qadam: Savdo leaderboard**
```
GET /api/stats/leaderboard?username=john_doe&period=daily
        ↓
{
  top10: [
    { nickname: "user1", total: 500000 },
    { nickname: "user2", total: 350000 },
    ...
  ],
  me: { rank: 15, total: 45000 }
}
```

**2-Qadam: Referral leaderboard**
```
GET /api/referral/leaderboard?username=john_doe&period=daily
        ↓
{
  top10: [
    { username: "user1", total_referrals: 50, total_earned: 2500 },
    ...
  ],
  me: { rank: 8, total_referrals: 12, total_earned: 500 }
}
```

**Period filter:**
- `daily` — Bugun (00:00 dan hozirgi vaqtgacha)
- `weekly` — Oxirgi 7 kun
- `monthly` — Joriy oy

**API Endpointlar:**
| Endpoint | Method | Maqsad |
|----------|--------|--------|
| `/api/stats/leaderboard` | GET | Savdo TOP-10 |
| `/api/referral/leaderboard` | GET | Referral TOP-10 |

---

### 9. 💰 Discount (Chegirma paketlari)
**Fayl:** `frontend/src/pages/Discount/Discount.jsx`
**URL:** `/discount`

#### Interfeys Tuzilishi
```
┌─────────────────────────────────────────────┐
│  ← Back       💰 Chegirma paketlari         │
├─────────────────────────────────────────────┤
│  🎭 TGS Sticker                             │
├─────────────────────────────────────────────┤
│  👤 Username: [@username]  [📱 Men]         │
├─────────────────────────────────────────────┤
│  📦 Maxsus paketlar:                        │
│  ┌─────────────────────────────────────┐    │
│  │ ⭐ 1000 Stars                       │    │
│  │ Asl narx: 240,000 so'm              │    │
│  │ Chegirma: -15%                      │    │
│  │ 💰 204,000 so'm              [Olish]│    │
│  └─────────────────────────────────────┘    │
│  ┌─────────────────────────────────────┐    │
│  │ ⭐ 5000 Stars                       │    │
│  │ Asl narx: 1,200,000 so'm            │    │
│  │ Chegirma: -20%                      │    │
│  │ 💰 960,000 so'm              [Olish]│    │
│  └─────────────────────────────────────┘    │
└─────────────────────────────────────────────┘
```

#### Ishlash Jarayoni

**1-Qadam: Paketlar yuklash**
```
GET /api/discount-packages
        ↓
[
  {
    id: 1,
    stars: 1000,
    discount_percent: 15,
    current_price: 204000,  // Slot-based narx
    slot_available: true,
    available_slots: 18
  },
  {
    id: 2,
    stars: 5000,
    discount_percent: 20,
    current_price: 960000,
    slot_available: true,
    available_slots: 20
  }
]
```

**2-Qadam: Paket tanlash va order**
```
POST /api/discount/order
{
  username: "john_doe",
  recipient: "123456789",
  package_id: 1,
  price: 204000
}
        ↓
Backend:
1. Discount slot olish
2. Order yaratish (order_type: 'discount')
3. Stars soni = package.stars
```

**Discount Slot Tizimi:**
```
Paket ID: 1 (1000 Stars, 15% chegirma)
Base price: 204,000 so'm
┌────────────────────────────────────────┐
│ Slot │ Narx     │ Status              │
├────────────────────────────────────────┤
│  0   │ 204,000  │ ✅ Bo'sh            │
│  1   │ 203,950  │ ✅ Bo'sh            │
│ ...  │ ...      │ ...                 │
│  19  │ 203,050  │ ✅ Bo'sh            │
└────────────────────────────────────────┘
```

---

### 10. 🏆 Challenges (Vazifalar)
**Fayl:** `frontend/src/pages/Challenges/Challenges.jsx`
**URL:** `/challenges`

#### Interfeys Tuzilishi
```
┌─────────────────────────────────────────────┐
│  ← Back       🏆 Vazifalar                  │
├─────────────────────────────────────────────┤
│  🎭 TGS Sticker                             │
├─────────────────────────────────────────────┤
│  📊 Sizning progressingiz:                  │
│  Jami xarid: 450,000 so'm                   │
├─────────────────────────────────────────────┤
│  🎯 Vazifa #1                               │
│  ┌─────────────────────────────────────┐    │
│  │ [TGS] 999,000 so'm xarid qiling     │    │
│  │ Mukofot: NFT #001                   │    │
│  │ ████████░░░░░░░░░░░░ 45%           │    │
│  │ [Batafsil]                          │    │
│  └─────────────────────────────────────┘    │
│  🎯 Vazifa #2                               │
│  ┌─────────────────────────────────────┐    │
│  │ [TGS] 1,999,000 so'm xarid qiling   │    │
│  │ Mukofot: NFT #002                   │    │
│  │ ███░░░░░░░░░░░░░░░░░ 22%           │    │
│  │ [Batafsil]                          │    │
│  └─────────────────────────────────────┘    │
└─────────────────────────────────────────────┘
```

#### Ishlash Jarayoni

**1-Qadam: Progress hisoblash**
```
GET /api/user/history/{userId}
        ↓
Backend:
- Barcha muvaffaqiyatli orderlar (stars_sent, premium_sent)
- Jami summa = SUM(amount)
        ↓
totalSpent: 450000
```

**2-Qadam: Challenge progress**
```
Challenge #1: 999,000 so'm
- Progress: 450,000 / 999,000 = 45%
- Completed: false

Challenge #2: 1,999,000 so'm
- Progress: 450,000 / 1,999,000 = 22%
- Completed: false
```

**3-Qadam: Mukofot olish (Claim)**
```
Agar completed = true:
        ↓
POST /api/challenges/claim
{ username: "john_doe", challengeId: 1 }
        ↓
Backend:
1. NFT yuborish (yoki boshqa mukofot)
2. claimed_challenges ga qo'shish
        ↓
localStorage.setItem("claimed_challenges_john_doe", "[1]")
```

---

### 11. 🔔 Notifications (Bildirishnomalar)
**Fayl:** `frontend/src/pages/Notifications/Notifications.jsx`
**URL:** `/notifications`

#### Interfeys Tuzilishi
```
┌─────────────────────────────────────────────┐
│  ← Back       🔔 Bildirishnomalar           │
├─────────────────────────────────────────────┤
│  🎭 TGS Sticker                             │
├─────────────────────────────────────────────┤
│  ┌─────────────────────────────────────┐    │
│  │ 🎁 Yangi chegirma!           🔵    │    │
│  │ 10% chegirma kodingiz: SALE10       │    │
│  │ 2 soat oldin          [Umumiy]     │    │
│  └─────────────────────────────────────┘    │
│  ┌─────────────────────────────────────┐    │
│  │ ✅ To'lov muvaffaqiyatli            │    │
│  │ 50 Stars @username ga yuborildi     │    │
│  │ 1 kun oldin                         │    │
│  └─────────────────────────────────────┘    │
│  ┌─────────────────────────────────────┐    │
│  │ ⚠️ Texnik ish                       │    │
│  │ 01.04.2026 da texnik ish bo'ladi   │    │
│  │ 3 kun oldin          [Umumiy]      │    │
│  └─────────────────────────────────────┘    │
└─────────────────────────────────────────────┘
```

#### Ishlash Jarayoni

**1-Qadam: Bildirishnomalar yuklash**
```
GET /api/notifications/{userId}
        ↓
{
  success: true,
  notifications: [
    {
      id: 1,
      title: "Yangi chegirma!",
      message: "10% chegirma kodingiz: SALE10",
      type: "promo",
      is_global: true,
      is_read: false,
      created_at: "2026-04-06T10:00:00Z"
    },
    ...
  ]
}
```

**2-Qadam: O'qilgan qilish**
```
Sahifa yuklanganda:
POST /api/notifications/read-all/{userId}

Yoki bitta bosilganda:
POST /api/notifications/{id}/read
```

**Notification Turlari:**
| Type | Icon | Rang |
|------|------|------|
| info | ℹ️ | Ko'k |
| success | ✅ | Yashil |
| warning | ⚠️ | Sariq |
| promo | 🎁 | Binafsha |
| system | 🔔 | Kulrang |

**Relative Time:**
```javascript
formatRelativeTime("2026-04-06T10:00:00Z")
// diff < 60s → "Hozir"
// diff < 1h  → "15 daqiqa oldin"
// diff < 24h → "2 soat oldin"
// diff < 7d  → "3 kun oldin"
// else       → "01 Apr, 2026"
```

**API Endpointlar:**
| Endpoint | Method | Maqsad |
|----------|--------|--------|
| `/api/notifications/{userId}` | GET | Barcha bildirishnomalar |
| `/api/notifications/unread/{userId}` | GET | O'qilmagan soni |
| `/api/notifications/read-all/{userId}` | POST | Barchasini o'qish |
| `/api/notifications/{id}/read` | POST | Birini o'qish |

---

## 🔐 Admin Panel (Batafsil)

**Fayl:** `frontend/src/pages/Admin/AdminPanel.jsx`
**URL:** `/starsadmin`

### Kirish Tizimi

```
Foydalanuvchi → /starsadmin ochdi
                        ↓
┌─────────────────────────────────────────────┐
│ AdminPanel: Auth tekshirish                 │
├─────────────────────────────────────────────┤
│ 1. Telegram initData mavjudmi?              │
│    ├── Yo'q → "Ruxsat yo'q" sahifasi        │
│    └── Ha → Davom                           │
│ 2. POST /api/admin/users (test so'rov)      │
│    ├── 403 → Admin emas                     │
│    └── 200 → Admin panel ochiladi           │
└─────────────────────────────────────────────┘
```

**Backend Admin Auth:**
```javascript
// server.js
const ADMIN_IDS = process.env.ADMIN_IDS.split(',').map(Number);
// [123456789, 987654321]

function adminAuth(req, res, next) {
  const user = validateTelegramInitData(req.headers['x-telegram-init-data']);
  if (!ADMIN_IDS.includes(user.id)) {
    return res.status(403).json({ error: "Admin huquqi yo'q" });
  }
  next();
}
```

---

### Tab 1: 📊 Transactions (Stars Orderlar)

#### Interfeys
```
┌─────────────────────────────────────────────┐
│  📊 Transactions                            │
├─────────────────────────────────────────────┤
│  Filter: [All][Pending][Sent][Expired][Failed]
│  🔍 Search: [________________]              │
│  ☐ Auto-refresh (5s)                        │
├─────────────────────────────────────────────┤
│  📈 Statistika:                             │
│  Jami: 1,250,000⭐ | Pending: 5 | Sent: 150 │
├─────────────────────────────────────────────┤
│  # │ User      │ Stars │ Summa   │ Status  │
│───────────────────────────────────────────│
│ 1 │ @user1    │ 50    │ 12,000  │ ⏳ pend │ ▼
│───────────────────────────────────────────│
│   │ Order Details:                         │
│   │ ID: #1001                              │
│   │ Recipient: 123456789                   │
│   │ Created: 01.04.2026 14:32              │
│   │ Card: ***2022                          │
│   │ Promocode: STARS10                     │
│───────────────────────────────────────────│
│ 2 │ @user2    │ 100   │ 23,900  │ ✅ sent │
│ 3 │ @user3    │ 200   │ 47,850  │ ⏱ exp  │
└─────────────────────────────────────────────┘
```

#### Ishlash Jarayoni

**1. Orderlarni yuklash:**
```
GET /api/transactions/all           — Barchasi
GET /api/transactions/status/pending — Faqat pending
GET /api/transactions/status/stars_sent — Faqat yuborilgan
```

**2. Qidiruv:**
```
Frontend filtering:
- Username bo'yicha: order.username.includes(search)
- Order ID bo'yicha: order.id.toString().includes(search)
```

**3. Statistika hisoblash:**
```javascript
data.forEach(tx => {
  stats.totalStars += tx.stars;
  stats[tx.status]++;
});
```

**4. Auto-refresh:**
```javascript
if (autoRefresh) {
  setInterval(() => fetchTransactions(), 5000);
}
```

**5. Order expand:**
```
Qator bosilganda expandedId = order.id
Qo'shimcha ma'lumotlar ko'rsatiladi:
- recipient (Telegram ID)
- created_at (to'liq sana/vaqt)
- card_last4 (to'lov kartasi)
- applied_promocode
```

---

### Tab 2: 💎 Premium Orders

#### Interfeys
```
┌─────────────────────────────────────────────┐
│  💎 Premium Orders                          │
├─────────────────────────────────────────────┤
│  Filter: [All][Pending][Sent][Expired][Failed]
├─────────────────────────────────────────────┤
│  📈 Statistika:                             │
│  Jami: 45 | Pending: 2 | Sent: 40 | Exp: 3 │
├─────────────────────────────────────────────┤
│  # │ User      │ Oy │ Summa    │ Status   │
│───────────────────────────────────────────│
│ 1 │ @user1    │ 6  │ 449,950  │ ⏳ pend  │ ▼
│───────────────────────────────────────────│
│   │ Order Details:                         │
│   │ ID: #2001                              │
│   │ Recipient: @user1                      │
│   │ Months: 6                              │
│   │ Created: 01.04.2026 14:32              │
│───────────────────────────────────────────│
│ 2 │ @user2    │ 12 │ 799,900  │ ✅ sent  │
└─────────────────────────────────────────────┘
```

#### Ishlash Jarayoni

```
GET /api/admin/premium/list?status=all
GET /api/admin/premium/list?status=pending

Response:
{
  success: true,
  orders: [
    {
      id, username, recipient, months, amount,
      status, payment_status, created_at
    }
  ]
}
```

---

### Tab 3: 🎁 Gift Orders

#### Interfeys
```
┌─────────────────────────────────────────────┐
│  🎁 Gift Orders                             │
├─────────────────────────────────────────────┤
│  Filter: [All][Pending][Sent][Expired][Failed]
├─────────────────────────────────────────────┤
│  📈 Statistika:                             │
│  Jami: 120 | Pending: 3 | Sent: 110        │
├─────────────────────────────────────────────┤
│  # │ From     │ To      │ ⭐  │ Status    │
│───────────────────────────────────────────│
│ 1 │ @user1   │ @user2  │ 50  │ ⏳ pend   │ ▼
│───────────────────────────────────────────│
│   │ Gift ID: 5170144170496491616          │
│   │ Anonymous: ❌                          │
│   │ Comment: "Tug'ilgan kun muborak!"      │
│   │ Summa: 11,950 so'm                     │
│───────────────────────────────────────────│
└─────────────────────────────────────────────┘
```

#### Ishlash Jarayoni

```
GET /api/admin/gift/list?status=all

Response:
{
  success: true,
  orders: [
    {
      id, owner_username, recipient_username,
      gift_id, stars, amount, is_anonymous,
      comment, status, created_at
    }
  ]
}
```

---

### Tab 4: 👥 Users (Foydalanuvchilar)

#### Interfeys
```
┌─────────────────────────────────────────────┐
│  👥 Foydalanuvchilar                        │
├─────────────────────────────────────────────┤
│  📈 Statistika:                             │
│  Jami: 1,250 | Bugun: 15 | Referrallar: 450│
├─────────────────────────────────────────────┤
│  🔍 Search: [________________]              │
├─────────────────────────────────────────────┤
│  ┌─────────────────────────────────────┐    │
│  │ 👤 @user1                           │    │
│  │ Balans: 150⭐ | So'm: 0             │    │
│  │ Referrer: @inviter                  │    │
│  │ Referrallar: 12                     │    │
│  │ Sana: 01.01.2026                    │    │
│  │ [ℹ️ Info] [💰 Balans] [👥 Ref]      │    │
│  └─────────────────────────────────────┘    │
└─────────────────────────────────────────────┘
```

#### Ishlash Jarayoni

**1. Foydalanuvchilar yuklash:**
```
GET /api/admin/users

Response:
[
  {
    username, user_id, referral_code,
    referrer_username, referral_balance,
    som_balance, total_referrals, created_at
  }
]
```

**2. Balans o'zgartirish:**
```
┌─────────────────────────────────────────────┐
│  💰 Balans o'zgartirish: @user1             │
├─────────────────────────────────────────────┤
│  Joriy balans: 150⭐                        │
│  Miqdor: [_____] (+ yoki -)                 │
│  [Bekor qilish]  [Saqlash]                  │
└─────────────────────────────────────────────┘
        ↓
POST /api/admin/user/balance
{ username: "user1", amount: 50, type: "add" }
```

**3. So'm balans o'zgartirish:**
```
POST /api/admin/user/som-balance
{ username: "user1", amount: 10000, type: "add" }
```

**4. Foydalanuvchi ma'lumotlari:**
```
[ℹ️ Info] bosilganda:
┌─────────────────────────────────────────────┐
│  👤 @user1 Ma'lumotlari                     │
├─────────────────────────────────────────────┤
│  User ID: 123456789                         │
│  Referral Code: ABC123                      │
│  Referrer: @inviter                         │
│  Stars Balans: 150⭐                        │
│  So'm Balans: 10,000 so'm                   │
│  Jami referrallar: 12                       │
│  Ro'yxatdan o'tgan: 01.01.2026              │
└─────────────────────────────────────────────┘
```

**5. Referrallar ro'yxati:**
```
[👥 Ref] bosilganda:
GET /api/admin/user/referrals/{username}

┌─────────────────────────────────────────────┐
│  👥 @user1 ning referrallari (12)           │
├─────────────────────────────────────────────┤
│  @ref1 - 01.02.2026 - 3 ta xarid            │
│  @ref2 - 15.02.2026 - 1 ta xarid            │
│  @ref3 - 20.03.2026 - 0 ta xarid            │
│  ...                                         │
└─────────────────────────────────────────────┘
```

---

### Tab 5: 💸 Referral Withdrawals

#### Interfeys
```
┌─────────────────────────────────────────────┐
│  💸 Referral Yechish So'rovlari             │
├─────────────────────────────────────────────┤
│  Filter: [Pending (5)] [Approved] [Rejected]│
├─────────────────────────────────────────────┤
│  ┌─────────────────────────────────────┐    │
│  │ @user1 - 50⭐ yechmoqchi            │    │
│  │ Gift: 5170144170496491616           │    │
│  │ Sana: 01.04.2026 14:32              │    │
│  │ [✅ Tasdiqlash] [❌ Rad etish]       │    │
│  └─────────────────────────────────────┘    │
│  ┌─────────────────────────────────────┐    │
│  │ @user2 - 100⭐ yechmoqchi           │    │
│  │ Gift: 5168043875654172773           │    │
│  │ Sana: 01.04.2026 15:10              │    │
│  │ [✅ Tasdiqlash] [❌ Rad etish]       │    │
│  └─────────────────────────────────────┘    │
└─────────────────────────────────────────────┘
```

#### Ishlash Jarayoni

**1. So'rovlar yuklash:**
```
GET /api/admin/referral-withdrawals?status=pending

Response:
[
  {
    id, username, amount, gift_id,
    status, reject_reason, created_at
  }
]
```

**2. Tasdiqlash:**
```
POST /api/admin/referral-withdrawals/{id}/approve
        ↓
Backend:
1. Foydalanuvchi balansidan ayirish
2. Gift yuborish (Telegram API)
3. Status = 'approved'
```

**3. Rad etish:**
```
┌─────────────────────────────────────────────┐
│  ❌ Rad etish sababi                        │
├─────────────────────────────────────────────┤
│  [Balans yetarli emas____________]          │
│  [Bekor qilish]  [Rad etish]                │
└─────────────────────────────────────────────┘
        ↓
POST /api/admin/referral-withdrawals/{id}/reject
{ reason: "Balans yetarli emas" }
        ↓
Backend:
1. Status = 'rejected'
2. reject_reason saqlash
3. Foydalanuvchiga xabar yuborish (ixtiyoriy)
```

---

### Tab 6: 📈 Analytics (Tahlil)

#### Interfeys
```
┌─────────────────────────────────────────────┐
│  📈 Analytics                               │
├─────────────────────────────────────────────┤
│  Period: [Kun] [Hafta] [Oy] [Hammasi]       │
├─────────────────────────────────────────────┤
│  📊 Umumiy Statistika                       │
│  ┌──────────┬──────────┬──────────┐         │
│  │  Stars   │ Premium  │  Gift    │         │
│  │  150 ta  │  40 ta   │  120 ta  │         │
│  │ 18M so'm │ 18M so'm │ 1.4M so'm│         │
│  └──────────┴──────────┴──────────┘         │
│                                             │
│  💰 Jami Daromad: 37,400,000 so'm           │
├─────────────────────────────────────────────┤
│  📅 Kunlik Grafik (oxirgi 7 kun):           │
│  ┌─────────────────────────────────────┐    │
│  │  █                                  │    │
│  │  █  █     █                         │    │
│  │  █  █  █  █  █                      │    │
│  │  █  █  █  █  █  █  █                │    │
│  │  01 02 03 04 05 06 07               │    │
│  └─────────────────────────────────────┘    │
├─────────────────────────────────────────────┤
│  💳 Wallet Balans                           │
│  TON Mainnet: 125.5 TON                     │
│  TON Testnet: 0 TON                         │
├─────────────────────────────────────────────┤
│  🤖 Bot Stars Balansi: 5,000⭐              │
└─────────────────────────────────────────────┘
```

#### Ishlash Jarayoni

**1. Analytics data yuklash:**
```javascript
// Parallel fetch
const [starsRes, premiumRes, giftRes] = await Promise.all([
  apiFetch("/api/transactions/all"),
  apiFetch("/api/admin/premium/list"),
  apiFetch("/api/admin/gift/list")
]);

// Filter by period
const filterByDate = (items) => {
  if (period === "day") return items.filter(i => isToday(i.created_at));
  if (period === "week") return items.filter(i => isThisWeek(i.created_at));
  if (period === "month") return items.filter(i => isThisMonth(i.created_at));
  return items;
};

// Calculate stats
const filteredStars = filterByDate(starsData).filter(tx => 
  tx.status === "stars_sent" || tx.status === "completed"
);
```

**2. Wallet balans:**
```
GET /api/admin/wallet-info

Response:
{
  success: true,
  wallet: {
    mainnet_balance: 125.5,
    testnet_balance: 0
  },
  stars_price: {
    price_for_50: 1.5,
    price_per_star: 0.03,
    currency: "TON"
  }
}
```

**3. Bot stars balansi:**
```
GET /api/admin/bot-stars-balance

Response:
{
  success: true,
  bot_stars_balance: 5000
}
```

---

### Tab 7: 🏷️ Discount Packages

#### Interfeys
```
┌─────────────────────────────────────────────┐
│  🏷️ Discount Packages                       │
├─────────────────────────────────────────────┤
│  ➕ Yangi paket yaratish                    │
│  Stars: [____]  Chegirma: [__]%             │
│  [Yaratish]                                 │
├─────────────────────────────────────────────┤
│  📦 Mavjud paketlar:                        │
│  ┌─────────────────────────────────────┐    │
│  │ ID: 1 | 1000⭐ | 15%                │    │
│  │ Base: 240,000 | Current: 204,000    │    │
│  │ Slots: 18/20 bo'sh                  │    │
│  │ [✏️ Tahrirlash] [🗑️ O'chirish]      │    │
│  └─────────────────────────────────────┘    │
│  ┌─────────────────────────────────────┐    │
│  │ ID: 2 | 5000⭐ | 20%                │    │
│  │ Base: 1,200,000 | Current: 960,000  │    │
│  │ Slots: 20/20 bo'sh                  │    │
│  │ [✏️ Tahrirlash] [🗑️ O'chirish]      │    │
│  └─────────────────────────────────────┘    │
└─────────────────────────────────────────────┘
```

#### Ishlash Jarayoni

**1. Paketlar yuklash:**
```
GET /api/admin/discount-packages

Response:
[
  { id, stars, discount_percent, current_price, is_active }
]
```

**2. Yangi paket yaratish:**
```
POST /api/admin/discount-packages
{ stars: 1000, discount_percent: 15 }

Backend:
1. current_price = stars * 240 * (1 - discount_percent/100)
2. INSERT INTO discount_packages
```

**3. Tahrirlash:**
```
PATCH /api/admin/discount-packages/{id}
{ discount_percent: 20 }
```

**4. O'chirish:**
```
DELETE /api/admin/discount-packages/{id}
```

---

### Tab 8: 🎟️ Promocodes

#### Interfeys
```
┌─────────────────────────────────────────────┐
│  🎟️ Promocodes                              │
├─────────────────────────────────────────────┤
│  ➕ Yangi promocode yaratish                │
│  Code: [STARS10_____]                       │
│  Target: [Stars ▼]  Amount: [50___]         │
│  Chegirma: [10]%   Limit: [100]             │
│  [Yaratish]                                 │
├─────────────────────────────────────────────┤
│  📋 Mavjud promocodlar:                     │
│  ┌─────────────────────────────────────┐    │
│  │ STARS10                             │    │
│  │ Target: Stars 50⭐ | -10%           │    │
│  │ Ishlatilgan: 45/100                 │    │
│  │ [🗑️ O'chirish]                      │    │
│  └─────────────────────────────────────┘    │
│  ┌─────────────────────────────────────┐    │
│  │ PREMIUM20                           │    │
│  │ Target: Premium 6 oy | -20%         │    │
│  │ Ishlatilgan: 12/50                  │    │
│  │ [🗑️ O'chirish]                      │    │
│  └─────────────────────────────────────┘    │
└─────────────────────────────────────────────┘
```

#### Ishlash Jarayoni

**1. Promocodlar yuklash:**
```
GET /api/admin/promocodes

Response:
[
  {
    id, code, target_type, target_amount,
    discount_percent, usage_limit, used_count, is_active
  }
]
```

**2. Yangi promocode:**
```
POST /api/admin/promocodes
{
  code: "STARS10",
  target_type: "stars",      // stars, premium, gift
  target_amount: 50,         // 50 stars yoki 6 oy
  discount_percent: 10,
  usage_limit: 100
}
```

**3. O'chirish:**
```
DELETE /api/admin/promocodes/{id}
```

**Target turlari:**
| Type | Amount ma'nosi |
|------|----------------|
| stars | Stars miqdori (50, 100, 200...) |
| premium | Oylar soni (3, 6, 12) |
| gift | Gift stars miqdori (15, 25, 50, 100) |

---

### Tab 9: 🔔 Notifications (Admin yuborish)

#### Interfeys
```
┌─────────────────────────────────────────────┐
│  🔔 Bildirishnoma yuborish                  │
├─────────────────────────────────────────────┤
│  📝 Sarlavha: [Yangi aksiya!________]       │
│  💬 Xabar:                                  │
│  ┌─────────────────────────────────────┐    │
│  │ Bugun 20% chegirma! SALE20 kodini   │    │
│  │ ishlating.                          │    │
│  └─────────────────────────────────────┘    │
│  📌 Tip: [Info ▼] (info/success/warning/promo)
│  🌐 Umumiy: [✓]                             │
│  👤 User ID: [__________] (agar umumiy emas)│
│  [📤 Yuborish]                              │
├─────────────────────────────────────────────┤
│  📜 Yuborilgan xabarlar:                    │
│  ┌─────────────────────────────────────┐    │
│  │ "Yangi aksiya!" - promo - Global    │    │
│  │ 01.04.2026 14:32                    │    │
│  └─────────────────────────────────────┘    │
│  ┌─────────────────────────────────────┐    │
│  │ "To'lov qabul qilindi" - success    │    │
│  │ ID: 123456789                       │    │
│  │ 01.04.2026 10:15                    │    │
│  └─────────────────────────────────────┘    │
└─────────────────────────────────────────────┘
```

#### Ishlash Jarayoni

**1. Umumiy xabar yuborish:**
```
POST /api/admin/notifications
{
  title: "Yangi aksiya!",
  message: "Bugun 20% chegirma! SALE20 kodini ishlating.",
  type: "promo",
  is_global: true
}
        ↓
Backend:
INSERT INTO notifications (title, message, type, is_global, user_id)
VALUES (..., ..., ..., true, NULL)
```

**2. Individual xabar:**
```
POST /api/admin/notifications
{
  title: "To'lov qabul qilindi",
  message: "50 Stars muvaffaqiyatli yuborildi.",
  type: "success",
  is_global: false,
  user_id: "123456789"
}
```

**3. Xabarlar tarixi:**
```
GET /api/admin/notifications/history

Response:
[
  { id, title, type, is_global, user_id, created_at }
]
```

---

### Tab 10: ⚙️ Settings

#### Interfeys
```
┌─────────────────────────────────────────────┐
│  ⚙️ Sozlamalar                              │
├─────────────────────────────────────────────┤
│  🔧 Maintenance Mode                        │
│  ┌─────────────────────────────────────┐    │
│  │ Texnik ish rejimi:  [OFF 🔴]        │    │
│  │                                     │    │
│  │ Yoqilganda:                         │    │
│  │ - Foydalanuvchilar kira olmaydi     │    │
│  │ - Faqat adminlar ko'ra oladi        │    │
│  │ - MaintenancePage ko'rsatiladi      │    │
│  │                                     │    │
│  │ [🔄 Yoqish]                         │    │
│  └─────────────────────────────────────┘    │
├─────────────────────────────────────────────┤
│  ℹ️ Tizim ma'lumotlari                      │
│  Server versiyasi: v3.1.1                   │
│  Uptime: 5 kun 12 soat                      │
│  Active connections: 25                     │
└─────────────────────────────────────────────┘
```

#### Ishlash Jarayoni

**Maintenance Mode Toggle:**
```
POST /api/admin/maintenance
{ enabled: true }
        ↓
Backend:
1. global.maintenanceMode = true
2. Yoki database/file ga saqlash
        ↓
Response:
{ success: true, maintenance: true }
```

**Frontend Maintenance Check:**
```javascript
// App.jsx
useEffect(() => {
  apiFetch("/api/maintenance")
    .then(r => r.json())
    .then(d => setMaintenance(d.maintenance));
}, []);

// Agar maintenance && !isAdmin → MaintenancePage
if (maintenance && !isAdmin) {
  return <MaintenancePage />;
}
```

**MaintenancePage:**
```
┌─────────────────────────────────────────────┐
│                                             │
│         🔧 Texnik ishlar olib               │
│            borilmoqda                       │
│                                             │
│     Iltimos, keyinroq qaytib keling.        │
│                                             │
│         [TGS Animatsiya]                    │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 🔌 Backend API Endpointlar
- Promocode yaratish
- Target type (stars, premium, gift)
- Chegirma foizi
- Foydalanish limiti
- O'chirish

#### 9. 🔔 Notifications (Bildirishnomalar yuborish)
- Sarlavha va xabar
- Tip tanlash (info, success, warning, promo, system)
- Global yoki individual yuborish
- Yuborilgan xabarlar tarixi

#### 10. ⚙️ Settings
- **Maintenance Mode** — Texnik ish rejimi (foydalanuvchilar kira olmaydi)

---

## 🔌 Backend API Endpointlar

### Public APIs

| Method | Endpoint | Maqsad |
|--------|----------|--------|
| GET | `/api/status` | Backend holati |
| GET | `/api/maintenance` | Maintenance mode holati |
| POST | `/api/search` | Username qidirish |
| GET | `/api/discount-packages` | Chegirma paketlari |

### Stars APIs
| Method | Endpoint | Maqsad |
|--------|----------|--------|
| GET | `/api/stars/price/{amount}` | Slot-based narx |
| POST | `/api/stars/order` | Order yaratish |
| GET | `/api/stars/order/{id}` | Order statusi |

### Premium APIs
| Method | Endpoint | Maqsad |
|--------|----------|--------|
| POST | `/api/premium/search` | Premium qidirish |
| POST | `/api/premium/order` | Order yaratish |
| GET | `/api/premium/order/{id}` | Order statusi |

### Gift APIs
| Method | Endpoint | Maqsad |
|--------|----------|--------|
| POST | `/api/gift/order` | Order yaratish |
| GET | `/api/gift/status/{id}` | Order statusi |

### Discount APIs
| Method | Endpoint | Maqsad |
|--------|----------|--------|
| POST | `/api/discount/order` | Order yaratish |
| GET | `/api/discount/order/{id}` | Order statusi |

### Referral APIs
| Method | Endpoint | Maqsad |
|--------|----------|--------|
| POST | `/api/referral/register` | Ro'yxatdan o'tish |
| GET | `/api/referral/link/{username}` | Referral link |
| GET | `/api/referral/stats/{username}` | Statistika |
| GET | `/api/referral/earnings/{username}` | Daromadlar |
| GET | `/api/referral/my-friends/{username}` | Do'stlar |
| POST | `/api/referral/withdraw` | Yechib olish |
| GET | `/api/referral/leaderboard` | TOP-10 |

### User APIs
| Method | Endpoint | Maqsad |
|--------|----------|--------|
| GET | `/api/user/history/{userId}` | Buyurtmalar tarixi |
| GET | `/api/dashboard/init` | Dashboard init |

### Notifications APIs
| Method | Endpoint | Maqsad |
|--------|----------|--------|
| GET | `/api/notifications/{userId}` | Bildirishnomalar |
| GET | `/api/notifications/unread/{userId}` | O'qilmagan soni |
| POST | `/api/notifications/read-all/{userId}` | Barchasini o'qish |
| POST | `/api/notifications/{id}/read` | Birini o'qish |

### Promocode APIs
| Method | Endpoint | Maqsad |
|--------|----------|--------|
| POST | `/api/promocode/check` | Tekshirish |

### Statistics APIs
| Method | Endpoint | Maqsad |
|--------|----------|--------|
| GET | `/api/stats/leaderboard` | Savdo TOP-10 |

### Admin APIs (Admin auth kerak)
| Method | Endpoint | Maqsad |
|--------|----------|--------|
| GET | `/api/admin/users` | Barcha foydalanuvchilar |
| POST | `/api/admin/maintenance` | Maintenance toggle |
| GET | `/api/admin/premium/list` | Premium orderlar |
| GET | `/api/admin/gift/list` | Gift orderlar |
| GET | `/api/admin/referral-withdrawals` | Yechish so'rovlari |
| POST | `/api/admin/referral-withdrawals/{id}/approve` | Tasdiqlash |
| POST | `/api/admin/referral-withdrawals/{id}/reject` | Rad etish |
| GET | `/api/admin/wallet-info` | Wallet balans |
| GET | `/api/admin/bot-stars-balance` | Bot stars balansi |
| CRUD | `/api/admin/discount-packages` | Discount paketlar |
| CRUD | `/api/admin/promocodes` | Promocodlar |
| POST | `/api/admin/notifications` | Bildirishnoma yuborish |
| POST | `/api/admin/user/balance` | Balans o'zgartirish |

### Internal APIs (Internal secret kerak)
| Method | Endpoint | Maqsad |
|--------|----------|--------|
| POST | `/api/internal/stars/match` | SMS to'lov matching |
| POST | `/api/internal/premium/match` | Premium matching |
| POST | `/api/internal/gift/match` | Gift matching |

---

## 💳 To'lov Jarayoni

### 1. Order yaratish
```
Foydalanuvchi → Frontend → POST /api/*/order → Backend
                                    ↓
                        Order yaratiladi (pending)
                        Unique narx generatsiya (slot tizimi)
                                    ↓
                        Frontend ← Order details (id, amount, card)
```

### 2. To'lov kutish (5 daqiqa)
```
Frontend: Polling har 3 sekund
Backend: Order status = pending
BalanceChecker: SMS listener (UZCARD)
```

### 3. SMS kelganda
```
UZCARD SMS → BalanceChecker (GramJS)
                    ↓
            Parse: amount, card_last4
                    ↓
            POST /api/internal/*/match
                    ↓
            Backend: Amount matching
            (unique narx orqali order topiladi)
                    ↓
            Status = completed / *_sent
```

### 4. Stars/Premium/Gift yuborish
```
Backend → Telegram Bot API / Fragment API
                    ↓
        Stars/Premium/Gift yuborildi
                    ↓
        Order status yangilandi
                    ↓
        Frontend: Success modal
```

---

## 🔒 Xavfsizlik Mexanizmlari

### 1. Telegram initData Validatsiya
```javascript
// HMAC-SHA256 bilan hash tekshirish
const secretKey = crypto.createHmac('sha256', 'WebAppData').update(BOT_TOKEN).digest();
const checkHash = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex');
// hash === checkHash bo'lishi kerak

// auth_date tekshirish (24 soatdan eski bo'lmasligi)
```

### 2. Rate Limiting
- General: 200 req / 15 min
- Order: 20 req / 5 min
- Search: 15 req / 1 min
- Auth: 30 req / 15 min
- Admin: 100 req / 1 min

### 3. CORS
```javascript
const ALLOWED_ORIGINS = [
  'https://vitahealth.uz',
  'https://web.telegram.org',
  'https://t.me',
  process.env.WEBAPP_URL
];
```

### 4. Internal API Protection
- Faqat localhost (127.0.0.1)
- `X-Internal-Key` header kerak
- `INTERNAL_API_SECRET` bilan tekshirish

---

## 📊 Ma'lumotlar Bazasi (PostgreSQL)

### Asosiy Jadvallar

#### `users`
| Ustun | Turi | Tavsif |
|-------|------|--------|
| id | SERIAL | Primary key |
| username | VARCHAR | Telegram username |
| user_id | VARCHAR | Telegram user ID |
| referral_code | VARCHAR | Unique referral kod |
| referrer_username | VARCHAR | Kim taklif qilgan |
| referral_balance | INTEGER | Stars balansi |
| som_balance | INTEGER | So'm balansi |
| total_earnings | INTEGER | Jami daromad |
| total_referrals | INTEGER | Referrallar soni |
| created_at | TIMESTAMP | Yaratilgan vaqt |

#### `orders`
| Ustun | Turi | Tavsif |
|-------|------|--------|
| id | SERIAL | Primary key |
| order_type | VARCHAR | stars/premium/gift/discount |
| owner_user_id | VARCHAR | Buyurtmachi ID |
| username | VARCHAR | Qabul qiluvchi username |
| recipient | VARCHAR | Qabul qiluvchi ID |
| stars / type_amount | INTEGER | Miqdor |
| summ / amount | INTEGER | Narx (so'm) |
| status | VARCHAR | Order holati |
| payment_status | VARCHAR | To'lov holati |
| applied_promocode | VARCHAR | Ishlatilgan promocode |
| card_last4 | VARCHAR | To'lov kartasi |
| created_at | TIMESTAMP | Yaratilgan vaqt |

#### `discount_packages`
| Ustun | Turi | Tavsif |
|-------|------|--------|
| id | SERIAL | Primary key |
| stars | INTEGER | Stars miqdori |
| discount_percent | INTEGER | Chegirma foizi |
| current_price | INTEGER | Joriy narx |
| is_active | BOOLEAN | Faol/Faol emas |

#### `promocodes`
| Ustun | Turi | Tavsif |
|-------|------|--------|
| id | SERIAL | Primary key |
| code | VARCHAR | Promocode |
| target_type | VARCHAR | stars/premium/gift |
| target_amount | INTEGER | Maqsad miqdori |
| discount_percent | INTEGER | Chegirma |
| usage_limit | INTEGER | Foydalanish limiti |
| used_count | INTEGER | Ishlatilgan soni |
| is_active | BOOLEAN | Faol |

#### `notifications`
| Ustun | Turi | Tavsif |
|-------|------|--------|
| id | SERIAL | Primary key |
| user_id | VARCHAR | Foydalanuvchi ID |
| title | VARCHAR | Sarlavha |
| message | TEXT | Xabar matni |
| type | VARCHAR | info/success/warning/promo/system |
| is_global | BOOLEAN | Umumiy |
| is_read | BOOLEAN | O'qilgan |
| created_at | TIMESTAMP | Yaratilgan |

#### `referral_withdrawals`
| Ustun | Turi | Tavsif |
|-------|------|--------|
| id | SERIAL | Primary key |
| username | VARCHAR | Foydalanuvchi |
| amount | INTEGER | Miqdor (stars) |
| gift_id | VARCHAR | Gift ID |
| status | VARCHAR | pending/approved/rejected |
| reject_reason | VARCHAR | Rad sababi |
| created_at | TIMESTAMP | Yaratilgan |

---

## 🌐 Ko'p Tillilik

### Qo'llab-quvvatlanadigan Tillar
1. **O'zbekcha (uz)** — Asosiy
2. **Русский (ru)**
3. **English (en)**

### Fayllar
- `frontend/src/locales/uz.json`
- `frontend/src/locales/ru.json`
- `frontend/src/locales/en.json`

### Ishlatish
```jsx
import { useTranslation } from "../../context/LanguageContext";

const { t, language, setLanguage } = useTranslation();

// Ishlatish
<h1>{t("dashboard.title")}</h1>
```

---

## 🚀 Ishga Tushirish

### Backend
```bash
cd backend
npm install
npm start  # Production
npm run dev  # Development (nodemon)
```

### Frontend
```bash
cd frontend
npm install
npm run dev  # Development
npm run build  # Production build
```

### Environment Variables (.env)

#### Backend
```env
DATABASE_URL=postgresql://...
BOT_TOKEN=7000000000:AAH...
ADMIN_IDS=123456789,987654321
INTERNAL_API_SECRET=secret_key

TG_API_ID=12345678
TG_API_HASH=abcdef123456
TG_SESSION=1AbC...

UZCARD_CHAT_ID=1234567890
TARGET_CARD_SUFFIX=2022

STARS_PRICE_PER_UNIT=240
VITE_PREMIUM_3=250000
VITE_PREMIUM_6=450000
VITE_PREMIUM_12=800000

MATCH_API_STARS=http://localhost:5001/api/internal/stars/match
MATCH_API_PREMIUM=http://localhost:5001/api/internal/premium/match
MATCH_API_GIFT=http://localhost:5001/api/internal/gift/match
```

#### Frontend
```env
VITE_API_URL=https://api.starsjoy.uz
VITE_CARD_NUMBER=8600 1234 5678 2022
VITE_CARD_NAME=JOHN DOE
VITE_NARX=240
VITE_PREMIUM_3=250000
VITE_PREMIUM_6=450000
VITE_PREMIUM_12=800000
VITE_ADMIN_IDS=123456789,987654321
```

---

## 📝 Versiya Tarixi

| Versiya | Sana | O'zgarishlar |
|---------|------|--------------|
| v3.1.1 | 2026 | Joriy versiya |

---

## 👨‍💻 Aloqa

- **Bot:** @starsjoy_bot
- **Support:** @StarsjoySupport
- **Kanal:** @starsjoy

---

© 2026 Starsjoy. Barcha huquqlar himoyalangan.
