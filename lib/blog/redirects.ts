/**
 * Blog konsolidatsiyasi: birlashtirilgan maqolalarning eski URL’lari.
 *
 * NIMA UCHUN: mavzusi ustma-ust tushgan ikki maqola bir-birining qidiruv
 * signalini yeydi (keyword cannibalization). Yechim — foydali matnni
 * qoladigan maqolaga ko‘chirish va eski URL’dan unga doimiy yo‘naltirish
 * qo‘yish. Oddiy o‘chirib 404 chiqarish emas: 404 to‘plangan havola va
 * pozitsiyani yo‘qotadi, redirect esa ularni qoladigan sahifaga o‘tkazadi.
 *
 * TARTIB (muhim): avval `to` maqolasi yaxshilanadi, keyin `from` ro‘yxatga
 * qo‘shiladi. Bo‘sh yoki yomon sahifaga yo‘naltirish redirectning ma’nosini
 * yo‘qotadi.
 *
 * Bu ro‘yxat ikki joyda ishlatiladi:
 *   1. `next.config.ts` — HTTP darajasida 308 (doimiy) yo‘naltirish;
 *   2. `lib/blog/all.ts` — himoya filtri, ya’ni yo‘naltirilgan slug
 *      sitemap, RSS, llms.txt va blog kartochkalarida qayta paydo
 *      bo‘lmasligi uchun (maqola fayli indeksdan olib tashlanmay qolsa ham).
 *
 * ESLATMA: Next.js `permanent: true` uchun 301 emas, 308 qaytaradi — bu
 * so‘rov metodini saqlaydigan zamonaviy ekvivalenti va qidiruv tizimlari
 * uni ham doimiy yo‘naltirish deb qabul qiladi.
 */
export type BlogRedirect = {
  /** Eski slug — /{locale}/blog/{from} */
  from: string;
  /** Qoladigan slug — /{locale}/blog/{to} */
  to: string;
  /** Qachon birlashtirilgani (ISO yyyy-mm-dd) — audit uchun. */
  merged: string;
  /** Nega birlashtirildi — keyingi tekshiruvlarda kontekst bo‘lsin. */
  reason: string;
};

export const blogRedirects: BlogRedirect[] = [
  {
    from: "telegram-premium-sotib-olish",
    to: "telegram-premium-eng-oson-usul",
    merged: "2026-09-08",
    reason:
      "Ikkalasida ham tarif jadvali, username/login oqimi va xarid qadamlari takrorlanardi; qoladigan sahifada tashrif signali kuchliroq.",
  },
  {
    from: "bir-oylik-premium-olish",
    to: "ozbekistonda-oylik-premium-uza-humo",
    merged: "2026-09-08",
    reason:
      "Bitta ehtiyoj — bir oylik Premium. Odam kirayotgan URL saqlandi, matn esa to‘liq qayta yozildi (login oqimi, 1 oy = 50 000 so‘m).",
  },
  {
    from: "telegram-premium-sovga-qilish",
    to: "telegram-premium-sovga-username-orqali",
    merged: "2026-09-08",
    reason:
      "Sovg‘a xaridining umumiy qadamlari takrorlanardi; muqobil usullar qoladigan maqolada alohida bo‘lim qilindi.",
  },
  {
    from: "click-payme-telegram-stars-2026",
    to: "click-payme-orqali-telegram-stars-sotib-olish",
    merged: "2026-09-08",
    reason:
      "Bir mavzu — Click/Payme orqali Stars. Qoladigan maqola batafsilroq, uch tilda va vazifasi aniqroq.",
  },
  {
    from: "telegram-stars-qanday-sotib-olinadi-2026",
    to: "ozbekistonda-telegram-stars-sotib-olish",
    merged: "2026-09-18",
    reason:
      "Uch jumlalik eski maqola edi: xarid qadamlari va buyurtma ID bo‘yicha kuzatuv qoladigan maqolada allaqachon bor. Foydali qismi — to‘lovdan oldin qabul qiluvchini tekshirish va ID’ni saqlash — «Xariddan oldin va keyin» bo‘limiga ko‘chirildi.",
  },
  {
    from: "telegram-stars-visasiz-2026",
    to: "ozbekistonda-telegram-stars-sotib-olish",
    merged: "2026-09-18",
    reason:
      "«Visasiz xarid» alohida ehtiyoj emas — mahalliy to‘lov maqolasining bir qismi. Karta limiti/onlayn to‘lov ruxsati va OTP tayyorgarligi qoladigan maqolaga bo‘lim va FAQ sifatida qo‘shildi.",
  },
  {
    from: "telegram-stars-narxi-ozbekiston-2026",
    to: "telegram-stars-narxi",
    merged: "2026-09-18",
    reason:
      "Ikkalasi ham bitta so‘rovga javob berardi: Stars narxi. Narx qachon qayta ko‘rib chiqilishi va solishtirishni bir yulduz narxi bo‘yicha qilish kerakligi qoladigan maqolaga «Narx qachon o‘zgaradi?» bo‘limi bo‘lib ko‘chdi.",
  },
  {
    from: "telegram-stars-nima-toliq",
    to: "telegram-stars-qanday-ishlaydi",
    merged: "2026-09-18",
    reason:
      "«Stars nima» va «Stars qanday ishlaydi» bir xil niyat. Eski maqolaning yagona qo‘shimchasi — yulduz qayerda ishlatilishi — qoladigan maqolada «Stars qayerda ishlatiladi?» bo‘limiga aylantirildi.",
  },
  {
    from: "telegram-premium-tez-otkazilish-2026",
    to: "telegram-premium-eng-oson-usul",
    merged: "2026-09-18",
    reason:
      "«Eng tez yo‘l» — «eng oson usul» maqolasining ichki savoli. Promokodni to‘lovdan oldin qo‘llash va eng kam qadamli oqim qoladigan maqolaning to‘lov bo‘limiga qo‘shildi.",
  },
  {
    from: "telegram-premium-vizasiz-2026",
    to: "telegram-premium-eng-oson-usul",
    merged: "2026-09-18",
    reason:
      "Visa yo‘qligi alohida mavzu emas — mahalliy to‘lov oqimining sharti. Qoladigan maqolada «Visa’siz to‘lov» qismi va FAQ sifatida yozildi.",
  },
  {
    from: "telegram-gifts-narxlari-2026",
    to: "telegram-gifts-narxlari-royxati",
    merged: "2026-09-18",
    reason:
      "Ikkala maqola ham sovg‘a narxi haqida edi. Narx tarkibi (yulduz qiymati + kurs + komissiya) va TGS format qoladigan maqolaga alohida bo‘lim bo‘lib qo‘shildi.",
  },
  {
    from: "ton-vs-telegram-stars-farq",
    to: "telegram-stars-vs-ton-qaysi-biri",
    merged: "2026-09-18",
    reason:
      "Bir xil taqqoslash ikki URL’da turardi. Qoladigan maqola to‘liqroq; eski matndan TON bilan ishlash uchun hamyon/seed-fraza/tarmoq komissiyasi kerakligi qo‘shildi.",
  },
  {
    from: "telegram-stars-qanday-olinadi",
    to: "ozbekistonda-telegram-stars-sotib-olish",
    merged: "2026-09-18",
    reason:
      "Bir xil xarid oqimi: bot → miqdor → username → so‘mda to‘lov. Qoladigan qo‘llanma to‘liqroq va uch tilda.",
  },
  {
    from: "telegram-stars-kerak",
    to: "ozbekistonda-telegram-stars-sotib-olish",
    merged: "2026-09-18",
    reason:
      "«Stars kerak bo‘lsa nima qilish» — xarid qo‘llanmasining kirish qismi, alohida sahifa sifatida qo‘shimcha javob bermasdi.",
  },
  {
    from: "stars-olish-tez-usul",
    to: "ozbekistonda-telegram-stars-sotib-olish",
    merged: "2026-09-18",
    reason:
      "Tezlik alohida mavzu emas: yetkazish vaqti va kechikish sabablari qoladigan maqolaning «Username va yetkazish tartibi» bo‘limiga ko‘chirildi.",
  },
  {
    from: "stars-olish",
    to: "ozbekistonda-telegram-stars-sotib-olish",
    merged: "2026-09-18",
    reason:
      "Bir xil so‘rov va bir xil matn skeleti. Foydali qismi — nega rasmiy oqim noqulay — qoladigan maqolada bor.",
  },
  {
    from: "som-evaziga-stars-olish",
    to: "ozbekistonda-telegram-stars-sotib-olish",
    merged: "2026-09-18",
    reason:
      "«So‘m evaziga» — xaridning sharti, alohida vazifa emas. So‘mda to‘lashning afzalliklari qoladigan maqolaga KeyFacts bo‘lib qo‘shildi.",
  },
  {
    from: "telegram-yulduz-sotib-olish",
    to: "ozbekistonda-telegram-stars-sotib-olish",
    merged: "2026-09-18",
    reason:
      "«Yulduz» va «Stars» bitta valyuta. Atama farqi qoladigan maqolada FAQ sifatida izohlandi.",
  },
  {
    from: "visa-kartasiz-stars-olish",
    to: "ozbekistonda-telegram-stars-sotib-olish",
    merged: "2026-09-18",
    reason:
      "Visa yo‘qligi — mahalliy to‘lov oqimining sharti. To‘lov usullari jadvali va taqqoslash qoladigan maqolaga ko‘chdi.",
  },
  {
    from: "telegram-stars-sotib-olish-to-liq-qollanma",
    to: "ozbekistonda-telegram-stars-sotib-olish",
    merged: "2026-09-18",
    reason:
      "Bu sahifa 71 so‘zlik hub edi va o‘zi boshqa maqolalarga yo‘naltirardi — endi o‘sha rolni to‘liq qo‘llanmaning o‘zi bajaradi.",
  },
  {
    from: "telegram-stars-qayerdan-sotib-olish-2026",
    to: "ozbekistonda-telegram-stars-sotib-olish",
    merged: "2026-09-18",
    reason:
      "Ikkalasi ham «qayerdan sotib olish» so‘roviga javob berardi. Yo‘llar taqqoslash jadvali va xavfsizlik belgilari qoladigan URLga ko‘chirildi.",
  },
  {
    from: "telegram-stars-uzcard-humo-mini-app-2026",
    to: "ozbekistonda-telegram-stars-sotib-olish",
    merged: "2026-09-18",
    reason:
      "Uch abzatslik eski maqola: UzCard/HUMO, 3-D Secure va buyurtma ID bo‘yicha maslahatlar qoladigan maqolaning tekshiruv bo‘limiga kirdi.",
  },
  {
    from: "telegram-stars-5-daqiqada-toldirish",
    to: "ozbekistonda-telegram-stars-sotib-olish",
    merged: "2026-09-18",
    reason:
      "Tezkor to‘ldirish bo‘yicha uch jumla — yetkazish vaqti va bank bloki sabablari qoladigan maqolada batafsil yozildi.",
  },
  {
    from: "fragment-muqobillari-stars-ozbekiston",
    to: "ozbekistonda-telegram-stars-sotib-olish",
    merged: "2026-09-18",
    reason:
      "Fragment muqobili — yo‘llar jadvalining bir qatori. Qoladigan maqolada Fragment nega ishlamasligi alohida izohlandi.",
  },
  {
    from: "telegram-botlar-uchun-stars",
    to: "telegram-oyin-mini-app-stars-tolov",
    merged: "2026-09-18",
    reason:
      "Botlarda Stars bilan to‘lov — Mini App to‘lov oqimining bir qismi. Botlar nimani sotishi va botni tanlash mezonlari qoladigan maqolaga bo‘lim bo‘lib qo‘shildi.",
  },
  {
    from: "stars-va-premium-farqi",
    to: "telegram-premium-vs-stars-farqi",
    merged: "2026-09-18",
    reason:
      "Bir xil taqqoslash ikki URL’da turardi. Qoladigan maqola batafsilroq: jadval, «qaysi biri kerak» tanlovi va O‘zbekistonda xarid bo‘limi bor.",
  },
  {
    from: "kanal-egalari-uchun-stars",
    to: "telegram-kanal-stars-monetizatsiya",
    merged: "2026-09-18",
    reason:
      "Kanal egasi uchun Stars mavzusi monetizatsiya maqolasining ichida. Yangi qism — egasining o‘zi Stars’ni nimaga sarflashi — qoladigan maqolaga qo‘shildi.",
  },
  {
    from: "telegram-stars-bilan-nima-sotib-olish-mumkin",
    to: "telegram-stars-nima-uchun-ishlatiladi-usullar",
    merged: "2026-09-18",
    reason:
      "«Nima sotib olish mumkin» va «ishlatish usullari» bitta savol. Qoladigan maqolada 20 usul bor; unga «qancha Stars kerak» va «nimalarni qilib bo‘lmaydi» qo‘shildi.",
  },
  {
    from: "telegram-stars-haqida-hamma-narsa",
    to: "telegram-stars-qanday-ishlaydi",
    merged: "2026-09-18",
    reason:
      "Bu sahifa boshqa maqolalarga yo‘naltiruvchi to‘plam edi va o‘z javobini bermasdi. Stars mexanikasi bo‘yicha asosiy sahifa — «qanday ishlaydi».",
  },
  {
    from: "telegram-stars-paketlar-50-100-500-1000",
    to: "telegram-stars-narxi",
    merged: "2026-09-18",
    reason:
      "Paket tanlash — narx sahifasining savoli. «Qaysi paketni tanlash kerak?» bo‘limi qoladigan maqolaga ko‘chirildi.",
  },
  {
    from: "stars-sotib-olish",
    to: "telegram-stars-eng-yaxshi-botlar-2026",
    merged: "2026-09-18",
    reason:
      "Ishonchli xizmatni tanlash mezonlari takror edi: narx, parol so‘ralmasligi, to‘lov, oferta va support. Firibgarlik belgilari jadvali qoladigan maqolaga ko‘chirildi.",
  },
  {
    from: "telegram-stars-xavfsiz-sotib-olish-qollanma",
    to: "telegram-stars-eng-yaxshi-botlar-2026",
    merged: "2026-09-18",
    reason:
      "Xavfsiz xarid mezonlari bot tanlash sahifasining o‘zagi. Ishonchli/shubhali jadvali va amaliy qadamlar qoladigan maqolaga qo‘shildi.",
  },
  {
    from: "telegram-stars-sotib-xavfsiz-tanlash",
    to: "telegram-stars-eng-yaxshi-botlar-2026",
    merged: "2026-09-18",
    reason:
      "Uch jumlalik maqola: oferta, support va buyurtma ID bo‘yicha maslahat qoladigan maqolada allaqachon bor; oldindan to‘lov ogohlantirishi qo‘shildi.",
  },
  {
    from: "firibgarlikdan-himoya-stars-premium-sovga",
    to: "telegram-stars-eng-yaxshi-botlar-2026",
    merged: "2026-09-18",
    reason:
      "Xariddan oldingi tekshiruv ro‘yxati — domen, huquqlar, qabul qiluvchi — qoladigan maqolaning «amaliy qadamlar» bo‘limiga kirdi.",
  },
  {
    from: "telegram-premium-narxi-va-tolov-usullari",
    to: "telegram-premium-narxi-ozbekistonda-2026",
    merged: "2026-09-18",
    reason:
      "Narx sahifasi bilan bir xil vazifa. To‘lov usullari bo‘limi (Visa shart emas, naqd pul oqimi, rubl SBP) qoladigan maqolaga ko‘chirildi; matndagi «12 oylik uch baravar arzon» xatosi ham tuzatilib yozildi.",
  },
  {
    from: "arzon-telegram-premium",
    to: "telegram-premium-narxi-ozbekistonda-2026",
    merged: "2026-09-18",
    reason:
      "«Eng arzon» — narx sahifasining savoli. Muddat bo‘yicha oyiga hisob va aksiya eslatmasi qoladigan maqolada.",
  },
  {
    from: "telegram-premium-12-oy-ozbekiston",
    to: "telegram-premium-narxi-ozbekistonda-2026",
    merged: "2026-09-18",
    reason:
      "12 oylik tarif — narx jadvalining bir qatori; oyiga hisob qoladigan maqolada aniq raqam bilan berilgan.",
  },
  {
    from: "telegram-premium-3-6-oy-pack",
    to: "telegram-premium-narxi-ozbekistonda-2026",
    merged: "2026-09-18",
    reason:
      "3 va 6 oy tanlovi oyiga hisob bo‘limida yechildi: 3 oylik oyiga qimmatroq, 6 oylik ~20% arzon.",
  },
  {
    from: "premium-olish",
    to: "telegram-premium-eng-oson-usul",
    merged: "2026-09-18",
    reason:
      "Premium xaridining bir xil oqimi: muddat → username → so‘mda to‘lov. Qoladigan maqola batafsilroq va uch tilda.",
  },
  {
    from: "visa-kartasiz-premium-olish",
    to: "telegram-premium-eng-oson-usul",
    merged: "2026-09-18",
    reason:
      "Visa yo‘qligi — mahalliy to‘lov oqimining sharti, alohida vazifa emas; qoladigan maqolada «Visa’siz to‘lov» bo‘limi bor.",
  },
  {
    from: "telegram-premium-sotib-olish-2026",
    to: "telegram-premium-eng-oson-usul",
    merged: "2026-09-18",
    reason:
      "121 so‘zlik seriya hub’i edi va o‘zi asosiy qo‘llanmaga yo‘naltirardi.",
  },
  {
    from: "telegram-premium-avtomatik-aktivatsiya-qanday",
    to: "telegram-premium-eng-oson-usul",
    merged: "2026-09-18",
    reason:
      "Avtomatik aktivatsiya — xarid oqimining bir qadami. Mexanizm va «nega parol kerak emas» izohi qoladigan maqolaga bo‘lim bo‘lib ko‘chdi.",
  },
  {
    from: "telegram-premium-imkoniyatlari",
    to: "telegram-premium-kerak",
    merged: "2026-09-18",
    reason:
      "«Imkoniyatlar» va «kerakmi» bir qaror uchun o‘qiladi. To‘liq imkoniyatlar ro‘yxati qoladigan maqolaga bo‘lim bo‘lib qo‘shildi.",
  },
  {
    from: "premium-va-oddiy-hisob-farqi",
    to: "telegram-premium-va-oddiy-farqi",
    merged: "2026-09-18",
    reason:
      "Bir xil taqqoslash ikki URL’da turardi; qoladigan maqolada jadval va «kimga kerak» bo‘limi bor.",
  },
  {
    from: "telegram-premium-fayl-yuklash",
    to: "telegramda-4gb-fayl-yuborish",
    merged: "2026-09-18",
    reason:
      "Fayl limiti — 4 GB maqolasining o‘z mavzusi. Yuklab olish tezligi va HD video qismi qoladigan maqolaga ko‘chirildi.",
  },
  {
    from: "stars-orqali-sovga-yuborish",
    to: "telegram-gifts-qanday-yuboriladi-qollanma",
    merged: "2026-09-18",
    reason:
      "Sovg‘a yuborish bosqichlari takror edi. Sovg‘a tanlash mezonlari qoladigan qo‘llanmaga bo‘lim bo‘lib qo‘shildi.",
  },
  {
    from: "telegram-gifts-yuborish-qollanma",
    to: "telegram-gifts-qanday-yuboriladi-qollanma",
    merged: "2026-09-18",
    reason:
      "75 so‘zlik seriya hub’i edi; asosiy yuborish qo‘llanmasi bilan bir vazifa.",
  },
  {
    from: "telegram-nft-gift-sotib-olish",
    to: "telegram-sovga-va-nft-sovga-sotib-olish",
    merged: "2026-09-18",
    reason:
      "Gift xaridi bo‘yicha bir xil vazifa. Qoladigan maqolada oddiy va kolleksion sovg‘a ajratilgan hamda xizmat holati eslatmasi bor.",
  },
  {
    from: "limited-edition-telegram-gifts",
    to: "telegram-nft-gift-nima",
    merged: "2026-09-18",
    reason:
      "Limited Edition — NFT gift tushunchasining bir qismi; qoladigan maqolada alohida bo‘lim sifatida bor.",
  },
  {
    from: "telegram-nft-market",
    to: "telegram-nft-gift-nima",
    merged: "2026-09-18",
    reason:
      "Gift Market qanday ishlashi tushuncha maqolasining ichida; hozirgi xizmat holati ham o‘sha yerda aniqlashtirildi.",
  },
  {
    from: "top-telegram-rare-gifts",
    to: "telegram-gifts-kolleksiya-rare-sovgalar",
    merged: "2026-09-18",
    reason:
      "43 so‘zlik «reyting» maqolasida haqiqiy dalil yo‘q edi; noyoblik mezonlari kolleksiya maqolasida.",
  },
  {
    from: "telegram-gift-kolleksiya",
    to: "telegram-gifts-kolleksiya-rare-sovgalar",
    merged: "2026-09-18",
    reason:
      "32 so‘zlik maqola faqat havolalardan iborat edi — kolleksiya mavzusining asosiy sahifasi bitta.",
  },
  {
    from: "telegram-sovgani-sotish-mumkinmi",
    to: "telegram-gift-sotish",
    merged: "2026-09-18",
    reason:
      "Sotish bo‘yicha batafsil matn trafik olgan qisqa URLga ko‘chirildi: qaysi sovg‘a sotiladi, qayerda, narx mezonlari va risklar.",
  },
  {
    from: "telegram-nft-gifts-kelajak",
    to: "telegram-nft-gift-nima",
    merged: "2026-09-18",
    reason:
      "Uch jumlalik bozor tendensiyasi izohi — NFT gift tushunchasi maqolasining kirish qismi bilan bir xil.",
  },
  {
    from: "click-api-rasmiy-integratsiya",
    to: "click-api-avtomatik-tolov-qabul",
    merged: "2026-09-18",
    reason:
      "Bitta integratsiya oqimi ikki maqolaga bo‘lingan edi. Merchant sozlamalari, invoice va imzo tekshiruvi qoladigan maqolaga qadamlar bo‘lib ko‘chdi.",
  },
  {
    from: "telegram-stars-biznes-reseller-daromad",
    to: "telegram-reseller-dasturi-qanday-boshlash",
    merged: "2026-09-18",
    reason:
      "Reseller boshlash va marja bir mavzu. Daromadga ta’sir qiluvchi omillar va amaliy maslahatlar qoladigan maqolaga qo‘shildi.",
  },
  {
    from: "telegram-creator-economy-stars",
    to: "telegram-stars-daromad-qilish-mumkinmi",
    merged: "2026-09-18",
    reason:
      "Creator Economy — Stars daromadi mavzusining ta’rifi. Pul aylanishi zanjiri va ishtirokchilar ro‘yxati qoladigan maqolaga ko‘chirildi.",
  },
  {
    from: "telegram-stars-premium-gifts-reseller-2026",
    to: "telegram-reseller-dasturi-qanday-boshlash",
    merged: "2026-09-18",
    reason:
      "Reseller modelining umumiy izohi — qoladigan maqolaning kirish qismi bilan bir xil.",
  },
  {
    from: "stars-paketlari-white-label-basic-pro",
    to: "white-label-telegram-stars-platforma",
    merged: "2026-09-18",
    reason:
      "Basic/Pro paketlari White Label tanlashning bo‘limi; paket va xarajat tarkibi qoladigan maqolaga yozildi.",
  },
  {
    from: "reseller-bot-narxi-bozor-2026",
    to: "white-label-telegram-stars-platforma",
    merged: "2026-09-18",
    reason:
      "Savdo boti narxi — White Label xarajatlari bo‘limining savoli; bir martalik va doimiy xarajat ajratib ko‘rsatildi.",
  },
  {
    from: "ozbek-somida-steam-balansini-toldirish",
    to: "steam-1-dollardan-toldirish",
    merged: "2026-09-18",
    reason:
      "So‘mda to‘ldirish — qoladigan qo‘llanmaning asosiy oqimi; kurs, to‘lov usullari va limitlar o‘sha yerda.",
  },
  {
    from: "steam-hisobini-qanday-toldirish-mumkin",
    to: "steam-1-dollardan-toldirish",
    merged: "2026-09-18",
    reason:
      "«Qanday to‘ldirish» bir xil savol; qadamlar, login izohi va xatolar qoladigan maqolada.",
  },
  {
    from: "steam-wallet-uzcard-orqali-toldirish",
    to: "steam-1-dollardan-toldirish",
    merged: "2026-09-18",
    reason:
      "UzCard — to‘lov usullari ro‘yxatining bir qatori, alohida vazifa emas.",
  },
  {
    from: "steam-wallet-humo-orqali-toldirish",
    to: "steam-1-dollardan-toldirish",
    merged: "2026-09-18",
    reason:
      "HUMO ham to‘lov usullari ro‘yxatida; oqim UzCard bilan bir xil.",
  },
  {
    from: "steam-wallet-narxlari",
    to: "steam-1-dollardan-toldirish",
    merged: "2026-09-18",
    reason:
      "Narx — qat’iy kurs jadvali orqali beriladi; limit va komissiya bo‘limi qo‘shildi.",
  },
  {
    from: "starspaymee-boost-market",
    to: "telegram-kanalga-boost-sotib-olish",
    merged: "2026-09-18",
    reason:
      "Brendli «Boost Market» sahifasi xarid qo‘llanmasi bilan bir xil vazifani bajarardi; buyurtma parametrlari va narx jadvali qoladigan maqolada.",
  },
  {
    from: "telegram-boost-avtomatik",
    to: "telegram-kanalga-boost-sotib-olish",
    merged: "2026-09-18",
    reason:
      "Avtomatik yetkazish — xaridning bir qadami. Yetkazish tartibi va «boost tushmasa» tekshiruvi qoladigan maqolaga bo‘lim bo‘lib qo‘shildi.",
  },
  {
    from: "telegram-kanalni-boost-qilish",
    to: "telegram-premium-boost",
    merged: "2026-09-18",
    reason:
      "Obunachilar orqali boost berish rasmiy tizim maqolasining mavzusi; strategiya bo‘limi o‘sha yerga ko‘chirildi.",
  },
  {
    from: "telegram-kanal-boost-olish-qollanma",
    to: "telegram-premium-boost",
    merged: "2026-09-18",
    reason:
      "81 so‘zlik maqola boshqa sahifalarga yo‘naltirardi; rasmiy boost olish tartibi qoladigan maqolada to‘liq.",
  },
  {
    from: "virtual-telegram-raqam-nima",
    to: "telegram-raqam-sotib-olish",
    merged: "2026-09-18",
    reason:
      "Virtual raqam ta’rifi xarid qo‘llanmasining ichida alohida bo‘lim sifatida bor.",
  },
  {
    from: "arzon-telegram-boost",
    to: "telegram-boost-narxlari",
    merged: "2026-09-18",
    reason:
      "«Arzon boost» narx sahifasining savoli; tanlash mezonlari qoladigan maqolaga qo‘shildi.",
  },
];

/** Yo‘naltirilgan (endi ko‘rsatilmaydigan) slug’lar — tez tekshirish uchun. */
export const redirectedBlogSlugs: ReadonlySet<string> = new Set(
  blogRedirects.map((r) => r.from),
);

/** Slug birlashtirilganmi? Ro‘yxat va sitemap filtrlarida ishlatiladi. */
export function isRedirectedBlogSlug(slug: string): boolean {
  return redirectedBlogSlugs.has(slug);
}
