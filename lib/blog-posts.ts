export type BlogCategory = "Stars" | "Premium" | "Gifts" | "Biznes" | "Telegram" | "Xavfsizlik";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  /** ISO yyyy-mm-dd */
  datePublished: string;
  paragraphs: string[];
  /** Meta keywords (qo'shimcha SEO) */
  seoKeywords?: string[];
}

/** Maqolalar mavzusi [StarsJoy blog](https://www.starsjoy.uz/blog) dagi strukturaga oʻxshash; matnlar StarsPaymee uchun asl yozuv. */
export const blogPosts: BlogPost[] = ([
  {
    slug: "telegram-premium-narxlari-arzon-qulay-2026",
    category: "Premium",
    datePublished: "2026-06-02",
    title:
      "Telegram Premium narxlari 2026: eng arzon va qulay paketlar — 3, 6, 12 oy hamda 1 oylik va 1 yillik",
    excerpt:
      "StarsPaymee'da Telegram Premium endi yanada qulay narxda: 3 oy 172 000, 6 oy 232 000, 12 oy 422 000 so‘m. Akkauntga kirish shart emas — username bilan 10 soniyada faollashadi. Hamda alohida 1 oylik (50 000) va 1 yillik (300 000) variantlar ham olib beriladi. Arzon, qulay, ishonchli.",
    paragraphs: [
      "Telegram Premium 2026-yilda O‘zbekistonda har qachongidan arzon va qulay bo‘ldi. StarsPaymee orqali asosiy paketlar quyidagicha: 3 oylik Premium — 172 000 so‘m, 6 oylik — 232 000 so‘m, 12 oylik (1 yil) — atigi 422 000 so‘m. Bu bozordagi eng arzon narxlardan biri bo‘lib, oyiga hisoblaganda 12 oylik paket eng tejamkor variant hisoblanadi.",
      "Eng muhimi — bu paketlarda akkauntingizga kirish (login, parol yoki SMS-kod) umuman talab qilinmaydi. Faqat @username yetarli, va Premium o‘rtacha 10 soniyada avtomatik faollashadi. Bu usul tez, xavfsiz va sizdan hech qanday maxfiy maʼlumot so‘ramaydi.",
      "Bundan tashqari, agar sizga qisqaroq yoki rasmiy «akkauntga kirib berish» orqali faollashtirish kerak bo‘lsa, alohida variantlar ham olib beriladi: 1 oylik Premium — 50 000 so‘m, 1 yillik — 300 000 so‘m. Bu oqim login orqali rasmiy tarzda amalga oshiriladi va qo‘shimcha ehtiyojlar uchun mo‘ljallangan.",
      "To‘lovni o‘zingizga qulay usulda qilishingiz mumkin: Click, Payme, Paynet, UzCard, HUMO yoki istalgan O‘zbekiston bank kartasi orqali so‘mda. Chet el kartasi yoki kripto kerak emas — barchasi mahalliy va oddiy.",
      "StarsPaymee 1 yildan ortiq xizmat ko‘rsatib kelmoqda: 4000 dan ortiq faol foydalanuvchi va 100 000 dan ortiq muvaffaqiyatli buyurtma. Shuning uchun arzon narx bilan birga ishonchni ham olasiz — buyurtma texnik sabab bilan yetkazilmasa, to‘lov to‘liq qaytariladi.",
      "Buyurtma berish uchun @StarsPaymee_bot Telegram botini yoki Telegram Mini App ni oching, Premium muddatini tanlang va kimga ekanini username bilan kiriting. Savol yoki yordam kerak bo‘lsa, @StarsPaymeeSupport orqali bog‘laning — qo‘llab-quvvatlash xizmati tezda javob beradi.",
    ],
    seoKeywords: [
      "telegram premium narxlari",
      "telegram premium arzon",
      "telegram premium sotib olish",
      "telegram premium 3 oy narxi",
      "telegram premium 6 oy narxi",
      "telegram premium 12 oy narxi",
      "telegram premium 1 oylik",
      "telegram premium 1 yillik",
      "telegram premium username bilan",
      "telegram premium 10 soniyada",
      "telegram premium click payme",
      "telegram premium uzcard humo",
      "telegram premium o‘zbekistonda",
      "StarsPaymee premium",
      "@StarsPaymeeSupport",
    ],
  },
  {
    slug: "telegram-stars-uzcard-humo-mini-app-2026",
    category: "Stars",
    datePublished: "2026-05-20",
    title: "2026-yilda Telegram Stars sotib olish: UzCard, HUMO va Mini App — O‘zbekiston foydalanuvchilari uchun qisqa qo‘llanma",
    excerpt:
      "Telegram Stars xaridi: so‘mda narx, UzCard/HUMO bilan toʻlov, buyurtma ID va firibgarlikdan saqlanish. StarsPaymee Mini App orqali qanday tekshirish va nimalarga e’tibor berish kerak.",
    paragraphs: [
      "Telegram Stars kanal egalari, botlar va kontent yaratuvchilari uchun ichki hisob birligi boʻlib qolmoqda. O‘zbekistonda xarid odatda mahalliy bank kartalari orqali so‘m (UZS)da amalga oshiriladi — shuning uchun karta limitingiz, 3-D Secure va SMS/ilova bildirishnomalari tayyor boʻlishi muhim.",
      "Mini App orqali xarid qilganda narx va slot maʼlumotlari interface’da bir joyda chiqadi; toʻlovdan keyin buyurtma identifikatori va status ketma-ketligi keyingi murojaatlar uchun saqlanadi. Agar kutilgan yulduzlar qisqa vaqt ichida aks etmasa, avvalo statusni yangilab, keyin supportga aynan shu ID bilan murojaat qiling.",
      "Firibgarlikdan saqlanish uchun juda past narx, shubhali toʻgʻridan-toʻgʻri oʻtkazmalar va rasmiy boʻlmagan kanallarga ehtiyot boʻling. Ishonchli xizmat odatda aniq oferta, bot/Mini App manzili va yozma qoidalar bilan ochiq boʻladi.",
      "Telegram Premium yoki Gifts bilan birga byudjet rejalashtirgan holda bir xil platformada operatsiyalarni yuritish operatsion xatolarni kamaytiradi; har bir mahsulot uchun Telegramning ruxsat etilgan API va siyosat doirasida qolish shart.",
    ],
    seoKeywords: [
      "Telegram Stars sotib olish",
      "Telegram Stars O‘zbekiston",
      "UzCard",
      "HUMO",
      "UZS",
      "Mini App",
      "Telegram Stars narxi",
      "Stars to‘ldirish",
    ],
  },
  {
    slug: "durov-figurkasi-skinlar-telegram-konkurs-2026",
    category: "Gifts",
    datePublished: "2026-05-16",
    title: "Durov figurkasi uchun mumkin bo‘lgan skinlar",
    excerpt:
      "Telegramda Durov figurkalari tanlovi: 52 430 $ mukofot jamg‘armasi, g‘oliblar Emoji Packlari va kelajakdagi Gift/skin yangilanishlariga oid qisqa sharh.",
    paragraphs: [
      "Kecha eng yaxshi modellarga yo‘naltirilgan maxsus tanlov bo‘lib o‘tdi — https://t.me/contest/453 . Undada 🎁 Durov figurkalari mavzusi bo‘yicha umumiy mukofot jamg‘armasi 52 430 AQSH dollari eʼlon qilingan.",
      "G‘oliblar uchun ikki Emoji Pack mashhur qilindi; ularni Telegramda qoʻshishingiz mumkin: birinchi to‘plam https://t.me/addstickers/PDContest_winners , ikkinchi to‘plam https://t.me/addstickers/PDContest_winners2 .",
      "Bu ishlar jamiyatda kelajakda Telegram Gifts figurkalari uchun yangi skinlar (tashqi koʻrinish variantlari) sifatida qabul qilinishi mumkinligi haqida taxminlar uyg‘otmoqda. Aniq jadval va qoidalar har doim Telegramning rasmiy eʼlonlari va Gifts qoidalariga tayangan holda tekshirilishi kerak.",
      "Telegram Stars va tezkor yangiliklar oqimini kuzatishda ⭐️ @tezstar_bot ham qoʻshimcha manba boʻlishi mumkin.",
    ],
  },
  {
    slug: "starspaymee-mini-app-may-2026-yangilik",
    category: "Telegram",
    datePublished: "2026-05-13",
    title:
      "StarsPaymee Mini App: 2026-yil maydagi yangiliklar — Telegram Gifts, TGS va Oʻzbekistonga mos toʻlov",
    excerpt:
      "Katalog va slotlar yangilanishi, TGS koʻrinishi va UzCard/HUMO bilan soʻmda yakunlash: may relizida nimalar paydo boʻldi va nimalarni kuzatish kerak.",
    paragraphs: [
      "StarsPaymee Mini App Telegram Gifts katalogi, Stars xaridlari va Premium yoʻnalishlarini bitta interfeysda jamlaydi. Maydagi yangilanish foydalanuvchilarga yangilangan buyurtma statuslari va joriy narx/slot maʼlumotlarini ochiqroq koʻrish imkonini beradi — bu esa xariddan oldin qarorni tezlashtiradi.",
      "Telegram Gifts boʻyicha TGS animatsiyalaridan foydalanib, sovgʻani tanlashdan oldin vizual dasturiy koʻrinishni koʻrish mumkin; izoh va anonim yuborish opsiyalari esa ijtimoiy kontekstga moslashuvchan qolmoqda.",
      "Toʻlovlar mahalliy UzCard va HUMO kartalari orqali soʻmda amalga oshiriladi — OTP va bank bildirishnomalari odatiy tartibda ishlaydi. Yakunlangan har bir buyurtma uchun identifikator saqlansa, keyinchalik billing yoki qoʻllab-quvvatlash bilan aloqa osonlashadi.",
      "Keyingi bosqichlarda katalog qidiruvi va avtomatik eslatmalar kabi qulayliklar kengayishi mumkin; barcha oʻzgarishlar Telegram va mahalliy toʻlov qoidalariga muvofiqlikda eʼlon qilinadi.",
    ],
  },
  {
    slug: "telegram-premium-muddati-yangilash-2026",
    category: "Premium",
    datePublished: "2026-05-05",
    title: "Telegram Premium muddati tugadi: yangilash yo‘llari va nima qilish kerak",
    excerpt:
      "Premium tugagach akkaunt rejimi o‘zgarmaydi, lekin ayrim imtiyozlar chiqadi. Muddatni qanday tekshirish va UzCard/HUMO orqali eng tez yangilash.",
    paragraphs: [
      "Telegram Premium muddati tugaganda ijtimoiy tarmoq sizni darhol bloklamaydi: chatlar va kanallar qoladi, biroq kattaroq fayl yuborish, tezkor yuklash va vizual sozlamalar cheklanishi mumkin.",
      "Muddatingizni iOS, Android yoki desktop sozlamalaridagi «Telegram Premium» bo‘limidan ko‘rishingiz mumkin. Agar avtomatik uzaytirish yoqilmagan bo‘lsa, har biri alohida xarid talab qilinadi.",
      "O‘zbekistonda bank kartasi bilan xarid qilganda bot yoki Mini App ichida foydalanuvchini tekshirish va paketni (3, 6 yoki 12 oy) tanlash muhim. StarsPaymee buyurtma statusini real vaqtda ko‘rsatadi.",
      "Uzaytirishdan oldin aksiya kodini tekshirish va boshqa obuna bo‘lsa, yangi muddat ustma-usta qolishiga qarab qaror qiling.",
    ],
  },
  {
    slug: "telegram-premium-1-3-6-oy-taqqoslash",
    category: "Premium",
    datePublished: "2026-05-05",
    title: "Telegram Premium: 1, 3, 6 va 12 oylik paketlar taqqoslash va tejamkor variant",
    excerpt:
      "Qisqa muddat uchun sinov kerakmi yoki-yil bo‘yi barqaror imtiyoz? Paketlar orasidagi farq oyiga narxlash va boshqa xizmatlarga tegishli maslahatlar.",
    paragraphs: [
      "Qisqa muddatli obuna cheklangan byudjetda «Premium nima beradi»ni tekshirish uchun qulay. Uzoq muddat odatda oyiga ekvivalent narxi pastroq chiqadi, lekin bir martalik katta summa berishni talab qiladi.",
      "StarsPaymee da har bir paket uchun narxlar so‘mda ko‘rinadi va siz foydalanuvchini bot orqali qidirish orqali xariddan oldin tekshirasiz.",
      "Agar Telegram Stars ko‘proq kerak bo‘lsa, Premium va Stars xaridlari bo‘yicha alohida byudjet rejalashtirish foydali.",
    ],
  },
  {
    slug: "telegram-stars-premium-gifts-reseller-2026",
    category: "Biznes",
    datePublished: "2026-05-04",
    title: "Telegram’da Stars, Premium va Gifts savdo biznesi: reseller modelining mantig‘i",
    excerpt:
      "Qayta sotish (reseller) ekotizimida mahsulot — bu virtual yulduz va obunalar. O‘zbekistonda boshlashda nimalarga e’tibor berish kerak.",
    paragraphs: [
      "Reseller odatda to‘g‘ri integratsiyalangan bot yoki Mini App orqali narxlash, to‘lov va yetkazib berishni avtomatlashtiradi. Foydalanuvchi tajribasi ishonch va tezlikka bog‘liq.",
      "Huquqiy va marketing jihatdan shaffof oferta, qaytarish siyosati va qo‘llab-quvvatlash kanali — mustahkam brend uchun shart.",
      "StarsPaymee uslubidagi platformalar slot va buyurtma kuzatuvi orqali operatsion yukni kamaytiradi; o‘z biznesingiz uchun white-label yondashuvni alohida rejalashtirasiz.",
    ],
  },
  {
    slug: "telegram-stars-paketlar-50-100-500-1000",
    category: "Stars",
    datePublished: "2026-05-04",
    title: "Telegram Stars paketlari: 50, 100, 500, 1000 — qaysi paket qachon mos?",
    excerpt:
      "Kichik summa sinov uchun, yirik paketlar esa kontent egasi yoki chatlar uchun. Birlik narxi va maqsad bo‘yicha tanlash.",
    paragraphs: [
      "Kichik paketlar sovg‘a yoki bir martalik reaksiya uchun yetarli. Yirik miqdorlar esa kanal monitizatsiyasi yoki sovg‘alar seriyasida tejamkor bo‘lishi mumkin.",
      "StarsPaymee da slot narxlari bozor va konfiguratsiyaga qarab o‘zgaradi; xariddan oldin joriy narxni Mini App ko‘rsatadi.",
      "Bir necha kichik buyurtma o‘rniga bitta yirik paket tanlashda tranzaksiya sonini kamaytirish ma’no beradi.",
    ],
  },
  {
    slug: "stars-paketlari-white-label-basic-pro",
    category: "Biznes",
    datePublished: "2026-05-03",
    title: "Savdo boti uchun Basic va Pro paketlar: qachon qaysi darajani tanlash mantiqiy?",
    excerpt:
      "Support muddati, deadline va funksiya chiziqlari — reseller loyihangiz uchun qaror uchun oddiy asoslar.",
    paragraphs: [
      "Kichik ish boshlang‘ich uchun minimal integratsiya va qisqa muddatli support yetarli bo‘lishi mumkin. Ommaviy auditoriya uchun esa monitoring, SLA va rivojlantirish grafiki muhim.",
      "Ikki pog‘ona arxitekturasida asosiy farq odamlar va texnik jarayondagi tayanch hajmidadir.",
      "StarsPaymee foydalanuvchilari uchun ochiq dokumentatsiya va buyurtma API holatlari operatsion shaffoflik beradi.",
    ],
  },
  {
    slug: "telegram-gifts-narxlari-2026",
    category: "Gifts",
    datePublished: "2026-05-03",
    title: "Telegram Gifts: katalog, yulduz qiymati va so‘mda taxminiy narx tuzilishi",
    excerpt:
      "Giftlar turli Stars narxlari bilan chiqadi; O‘zbekiston kartasi bilan toʻlov narxi esa kurs va xizmat siyosatiga bog‘langan.",
    paragraphs: [
      "Har bir sovg‘a TGS ko‘rinishida va aniqlangan yulduz qiymati bilan chiqadi; katalogni Mini App ichida ko‘rib tanlash qulay.",
      "Narxlashda bank komissiyasi va platforma ustamasi ustma-usta qo‘shilishi mumkin — shuning uchun bir xil yulduz turli kunlarda biroz farq qilishi tabiiy.",
      "Anonim yuborish va izoh sozlamalari sovg‘aning ijtimoiy kontekstini o‘zgartiradi; oldindan qabul qiluvchini tasdiqlang.",
    ],
  },
  {
    slug: "reseller-bot-narxi-bozor-2026",
    category: "Biznes",
    datePublished: "2026-05-02",
    title: "Stars/Premium uchun savdo boti narxi bozor bo‘yicha: nimaga farq bor?",
    excerpt:
      "Narx Oraliqlari tayyor moduldan tortib maxsus development gacha uzun. Qaysi xarajat nimani beradi.",
    paragraphs: [
      "Arzon segmentda tayyor shablon va cheklangan unikal UI bo‘lishi mumkin. Yuqori segmentda dizayn tizimi, admin panel va xavfsizlik audit kiradi.",
      "Davriy xarajatlar: server, toʻlov operatorlari, Telegram API limitlari va qo‘llab-quvvatlash.",
      "StarsPaymee kabi yechimlar uchun fokus toʻlov yoʻli va mijoz uchun ishonchli statuslar boʻlishi kerak.",
    ],
  },
  {
    slug: "telegram-stars-balans-qanday-korish-2026",
    category: "Stars",
    datePublished: "2026-05-02",
    title: "Telegram Stars balansini qanday ko‘rish va tekshirish (2026)",
    excerpt:
      "Mobil ilova, desktop va @PremiumBot kabi vositalar orqali qoldiq va tarixni aniqlash.",
    paragraphs: [
      "Stars balansi odatda sozlamalar yoki akkaunt bo‘limida ko‘rinadi; platforma yangilanganda uning joylashuvi o‘zgarishi mumkin.",
      "Tranzaksiya tarixini koʻrish noqulay toʻlovlar uchun foydali.",
      "Agar boshqa xizmat orqali yulduz olgan boʻlsangiz, buyurtma ID bilan supportga murojaat qilish tezlashadi.",
    ],
  },
  {
    slug: "telegram-stars-5-daqiqada-toldirish",
    category: "Stars",
    datePublished: "2026-05-01",
    title: "Telegram Stars’ni bir necha daqiqada toʻldirish — tezkor amaliyot",
    excerpt:
      "Oldindan kartani tekshirish, OTP va toʻlov aggregatorlari bilan kechikishni kamaytirish.",
    paragraphs: [
      "Karta limitingiz va 3-D Secure tayyorgarligi bor-yoʻqligiga qarab toʻlov bir daqiqa yoki bir necha daqiqa oladi.",
      "Mini App ichida narx va buyurtma ID bir joyda bo‘lgani xato ehtimolini kamaytiradi.",
      "Muvaffaqiyatsiz toʻlovdan keyin statusni yangilab, qayta urinib koʻring; bank baʼzan toʻlovni vaqtinchalik bloklashi mumkin.",
    ],
  },
  {
    slug: "click-payme-telegram-stars-2026",
    category: "Stars",
    datePublished: "2026-04-30",
    title: "Click va Payme orqali Telegram Stars: yoʻl va taʼsir",
    excerpt:
      "Aggregator orqali toʻlov qulay bo‘lsa ham, yakuniy oqim siz tanlagan platforma bilan bog‘langan.",
    paragraphs: [
      "Click va Payme O‘zbekiston foydalanuvchilari uchun odatiy; ular kartadan mablag‘ yechish va bildirishnomalarni boshqarishni soddalashtiradi.",
      "Stars yetkazib berish uchun bot tomonidagi tasdiqlash bosqichi muhim — toʻlov aggregatorda muvaffaqiyat bo‘lishi Telegram tomonda avtomatik yulduz degani emas.",
      "StarsPaymee oʻz slot va internal tekshirish oqimi bilan yakunlangan buyurtmani kuzatish imkonini beradi.",
    ],
  },
  {
    slug: "ton-vs-telegram-stars-farq",
    category: "Telegram",
    datePublished: "2026-04-20",
    title: "TON va Telegram Stars: nimasi farq qiladi va nimani qoʻllash?",
    excerpt:
      "TON blokcheyn aktivlari bilan ichki Telegram yulduzlari turli tasodif uchun mo‘ljallangan.",
    paragraphs: [
      "TON vositalari odatda tashqi hamyon va blokcheyn transaksiyalari bilan bog‘langan bo‘lsa, Stars telegram ichidagi xarajat birligiga yaqin.",
      "Ikki vosita ham Telegram ekotizimida uchraydi, lekin har biri uchun qonun va soliq taʼsiri boshqa bo‘lishi mumkin.",
      "Oddiy akkaunt uchun xizmat toʻlovi va sovg‘alar uchun Stars intuitivroq bo‘lishi mumkin.",
    ],
  },
  {
    slug: "telegram-premium-12-oy-ozbekiston",
    category: "Premium",
    datePublished: "2026-04-17",
    title: "12 oylik Telegram Premium: Oʻzbekistonda sotib olish tartibi va narx tuzilishi",
    excerpt:
      "Uzoq muddatli obuna tanlashdan oldin narx grafigini paket bilan solishtirish foyda beradi.",
    paragraphs: [
      "12 oy odatda oyiga toʻlash narxidan ustun chiqadi — byudjingiz aniqlansa, bir martalik toʻlov toʻgʻri tanlov boʻlishi mumkin.",
      "StarsPaymee da foydalanuvchini qidirish bilan Premium aktiv bo‘lmagan akkauntni aniqlash xato xaridlardan saqlaydi.",
      "Konvertatsiya va bank kursi joriy toʻlov summasiga taʼsir qiladi.",
    ],
  },
  {
    slug: "telegram-sms-kod-kelmayotganda",
    category: "Telegram",
    datePublished: "2026-04-11",
    title: "Telegram SMS kodi koʻrinmayapti: yoʻnalish va tuzatish yoʻllari",
    excerpt:
      "SIM, tarmoq yoki taʼqiq — birinchi qoʻngʻiroqlar roʻyxati va operator bilan aloqa.",
    paragraphs: [
      "SMS kechiktirilishi tarmoq yukidagi vaqtinchalik hodisalar bilan bog‘liq boʻlishi mumkin.",
      "Ilova yoʻnalgan raqami oʻzgagan boʻlsa, akkauntni qayta ulash zarur boʻladi.",
      "Premium yoki boshqa rasmiy yoʻllar aksariyat yoʻnalishlarida qoʻshimcha imkoniyat beradi — Telegram dokumentatsiyasini kuzating.",
    ],
  },
  {
    slug: "telegram-stars-sotib-xavfsiz-tanlash",
    category: "Xavfsizlik",
    datePublished: "2026-04-10",
    title: "Telegram Stars sotib olishda firibgarlikdan qoʻllanma: toʻgʻri platformani tanlash",
    excerpt:
      "Rasmiy taʼkidlar, akkaunt taʼkidlari va juda past narx bilan shubha.",
    paragraphs: [
      "Haqiqiy xizmat odatda aniq taʼrif, yozma oferta va support kanaliga ega.",
      "Kattagina chegirmalar uchun oldindan toʻlov soʻragan manbalarga ehtiyot boʻling.",
      "StarsPaymee kabi tuzilmalar buyurtmani ID bilan kuzatish va tekshirish imkoniyatini berishi kerak.",
    ],
  },
  {
    slug: "ozbekistonda-oylik-premium-uza-humo",
    category: "Premium",
    datePublished: "2026-04-07",
    title: "1 oylik Telegram Premiumni UzCard va Humo orqali olish mumkinmi?",
    excerpt:
      "Qisqa muddat uchun bank kartalari orqali xarid odatda mumkin — platforma esa paket toʻgʻriligini tekshirishi kerak.",
    paragraphs: [
      "Bir oylik paket boshqa muddat bilan bir xil oqimdagi boshqa miqdorda koʻrinadi.",
      "UzCard va Humo toʻlovlarda mahalliy OTP va sms bilan ishlaydi.",
      "StarsPaymee da toʻlovdan keyin statusni sahifadan kuzating.",
    ],
  },
  {
    slug: "telegram-premium-tez-otkazilish-2026",
    category: "Premium",
    datePublished: "2026-03-31",
    title: "2026-da Telegram Premium: eng tezkor toʻlov yoʻllari (UzCard, aggregatorlar)",
    excerpt:
      "Xarid uchun eng kam qadamlarni tanlash — vaqtni yangilashda tejaladi.",
    paragraphs: [
      "Bank ilovasi va Telegram bir vaqtning oʻzida ochiq boʻlsa OTP tez boʻladi.",
      "Promocode boʻlsa toʻlovdan oldin qoʻllang.",
      "Buyurtmani qayta qilish toʻlov yoʻnalishi band boʻlganda zarur boʻladi.",
    ],
  },
  {
    slug: "telegram-premium-uzcard-2026",
    category: "Premium",
    datePublished: "2026-03-26",
    title: "Telegram Premiumni UzCard orqali oʻzbekistonlik foydalanuvchi uchun",
    excerpt:
      "Karta qaysi yoʻnalishlangan boʻlsa ham toʻlov uchun ochiq boʻlganini tekshiring.",
    paragraphs: [
      "UzCard xalqaro operatsiyalar uchun sozlangan boʻlishi kerak — bankdan aniqlashtiring.",
      "Mini App ichida narxlash soʻmda boʻlsa, valyuta konvertatsiyasi bank tomonida amalga oshadi.",
      "StarsPaymee buyurtma tarixini billing uchun saqlashingiz mumkin.",
    ],
  },
  {
    slug: "firibgarlikdan-himoya-stars-premium-sovga",
    category: "Xavfsizlik",
    datePublished: "2026-03-26",
    title: "Telegram Stars, Premium va Gifts: firibgarlikdan himoya choralari",
    excerpt:
      "Soxta akkauntlar, havolalar va juda yoʻq taʼriflar qoʻllaniladi — himoya bir xil asosda.",
    paragraphs: [
      "Havolani brauzerda ochishdan oldin domen Telegram’ning rasmiy havolalari bilan ustma-usta turishiga qarang.",
      "Keraksiz moderator huquqlarini bermang.",
      "Toʻlovni amalga oshirishdan oldin qabul qiluvchi maʼlumotlarini aniqlab oling — bu xatolarni kamaytiradi.",
    ],
  },
  {
    slug: "telegram-gifts-uzcard-bot",
    category: "Gifts",
    datePublished: "2026-03-24",
    title: "Telegram Gifts va bot orqali sotib olish: tuzilma va talablar",
    excerpt:
      "Sovgʻa toʻlovi Stars bilan bog‘langanligi sabab toʻlov yakunlanganidan keyin logika serverda yakunlanadi.",
    paragraphs: [
      "Foydalanuvchi akkaunti aniqligi sovg‘a yetkazib berish uchun muhim.",
      "Izoh anonimligi qabul qilinguncha taʼsir qiladi.",
      "StarsPaymee aniqlangan gift_id va yoʻnalgan user_id uchun buyurtmani qayta ishlashi kerak.",
    ],
  },
  {
    slug: "telegram-premium-3-6-oy-pack",
    category: "Premium",
    datePublished: "2026-03-24",
    title: "3 va 6 oylik Telegram Premium: oʻrtacha muddat tanlovi uchun maslahat",
    excerpt:
      "Oʻrtacha foydalanish oraligʻi va byudjetga qarab ustun paket qoʻshilishini solishtirish.",
    paragraphs: [
      "6 oylik paket oyiga hisoblaganda yaxshi narx beradi va eng uzun muddatga shoshilmaganlar uchun qulay oraliq hisoblanadi.",
      "Agar atigi bir necha oyga ehtiyoj boʻlsa, 3 oylik paket koʻproq mos keladi.",
      "Paket oʻzgarishida tarixni saqlab qoling.",
    ],
  },
  {
    slug: "telegram-stars-cash-out-2026",
    category: "Stars",
    datePublished: "2026-03-24",
    title: "Telegram Stars chiqarish (cash-out) haqida amaliyot va cheklovlar bo‘yicha qisqa taʼrif",
    excerpt:
      "Oddiy akkaunt uchun cheklovlar kuchli boʻladi — qaror uchun Telegram taʼriflariga tayaning.",
    paragraphs: [
      "Telegram oʻz qoidalarida qaysi amallarning ruxsat etilganligi va taʼriflarini yozadi.",
      "Stars odatda akkaunt aktivlariga yaqin vosita boʻladi.",
      "Har qanday “starsni naqd qilish” taʼkidlari uchun rasmiy manbalarni tasdiqlang.",
    ],
  },
  {
    slug: "telegram-premium-vizasiz-2026",
    category: "Premium",
    datePublished: "2026-03-23",
    title: "Visa yoʻq boʻlsa Telegram Premium uchun mahalliy yoʻllar (UzCard, aggregatorlar)",
    excerpt:
      "Mahalliy toʻlov yoʻnalishlari uchun qaysi kartalar toʻgʻri kelishi mumkinligi bankdan aniqlangan.",
    paragraphs: [
      "Visa yoki Mastercard talab qiladigan ssenariylardan farqli oʻlaroq, mahalliy mahsulotlar boshqacha ishlashi mumkin.",
      "Aggregatorlar uchun karta yoʻnalishi ilovadan tekshiring.",
      "StarsPaymee uchun ham xuddi oʻsha kartalar taʼsiri taʼsir qiladi.",
    ],
  },
  {
    slug: "telegram-stars-visasiz-2026",
    category: "Stars",
    datePublished: "2026-03-23",
    title: "Visa taʼqifi boʻlmagan holda Telegram Stars xaridi",
    excerpt:
      "Mahalliy hisob-kitob uchun soʻmda koʻrinish va xalqaro yoʻnalish uchun bank solishtirish.",
    paragraphs: [
      "Bank karta yoʻnalishi uchun ilovadan limit va toʻlov bloklarini tekshiring.",
      "Xarid uchun yagona taʼriflangan summa boʻlgan yaxshi.",
      "Ikki bosqichli tasdiqlashni (2FA) oldindan tayyorlab qoʻying.",
    ],
  },
  {
    slug: "fragment-muqobillari-stars-ozbekiston",
    category: "Stars",
    datePublished: "2026-03-19",
    title: "Fragment muqobilari va Oʻzbekistonda kartadan Stars olish",
    excerpt:
      "Blokcheyn portallari bilan solishtirganda Mini App va botlar qanday farq qiladi.",
    paragraphs: [
      "Fragment va shunga oʻxshash vositalar texnik jihatdan boshqa auditoryaga moʻljallangan.",
      "Oddiy foydalanuvchi uchun bank kartasi va bot interfeysi sodda boʻlishi mumkin.",
      "StarsPaymee da xarid statusi va qayta aloqa bir joyda joylashgan.",
    ],
  },
  {
    slug: "telegram-stars-dostga-otkazish",
    category: "Stars",
    datePublished: "2026-03-18",
    title: "Telegram Starsni boshqaga oʻtkazish: sovgʻa, bot va xavfsizlik",
    excerpt:
      "Resurslar turlicha — har biri Telegram qoidalariga boʻysunadi.",
    paragraphs: [
      "Yulduzni oʻtkazish oʻrniga sovgʻa yuborish tez-tez oʻrinli.",
      "Qabul qiluvchini username yoki ID bilan tasdiqlang.",
      "Qoʻshimcha Telegram funksiyalari yangilanishiga qarab oʻzgashi mumkin.",
    ],
  },
  {
    slug: "telegram-nft-gifts-kelajak",
    category: "Gifts",
    datePublished: "2026-03-17",
    title: "Telegram NFT Gifts: oddiy sovgʻalardan farqi va bozor tendentsiyalari",
    excerpt:
      "Kolleksiyalar va noyob elementlar qoidalar va likvidlik bilan bogʻlangan.",
    paragraphs: [
      "Oddiy sovgʻalar va NFT formatidagi sovgʻalar foydalanish va saqlash jihatidan farq qiladi.",
      "Narx shaffofligi va likvidlikka ehtiyot boʻling.",
      "StarsPaymee katalogi klassik sovgʻalar boʻyicha yo‘naltirilgan.",
    ],
  },
  {
    slug: "telegram-stars-narxi-ozbekiston-2026",
    category: "Stars",
    datePublished: "2026-03-15",
    title: "2026-yilda Telegram Stars narxi: Oʻzbekistonda taqqoslash va tejamkorlik",
    excerpt:
      "Bir yulduz oʻrtacha soʻm qiymati platforma va kursga bogʻlangan.",
    paragraphs: [
      "Narxlar dinamik — slot va marketing oʻzgaradi.",
      "Yirik paketlar birlik narxi pastroq boʻlishi mumkin.",
      "Aniqlik uchun xarid oldidan joriy narxni oching.",
    ],
  },
  {
    slug: "telegram-stars-qanday-sotib-olinadi-2026",
    category: "Stars",
    datePublished: "2026-03-11",
    title: "Telegram Stars qanday sotib olinadi: qadamlar va tez-tez savollar",
    excerpt:
      "Mini App tanlash, miqdor, toʻlov va status — ketma-ketlik.",
    paragraphs: [
      "Foydalanuvchini tekshirish xarid oldini olish va toʻgʻri akkauntga yuborish uchun kerak.",
      "Toʻlov muvaffaqiyatli boʻlgach server yulduz yuborish jarayonini boshlaydi.",
      "StarsPaymee tarix va ID boʻyicha kuzatuv beradi.",
    ],
  },
  {
    slug: "telegram-stars-nima-toliq",
    category: "Stars",
    datePublished: "2026-03-08",
    title: "Telegram Stars nima va qayerda ishlatiladi",
    excerpt:
      "Reaksiyalar, boost va sovgʻalar ekotizimida ichki birlik sifatida.",
    paragraphs: [
      "Stars kontent egalariga daromad va foydalanuvchilarga interaktivlik beradi.",
      "Ular Telegram ilovasining oʻzi ichida muayyan operatsiyalar uchun talab qilinadi.",
      "Oʻzbekistonda soʻmda toʻlov qilish Mini App yoʻli bilan mavjud boʻlgan yechim boʻlishi mumkin.",
    ],
  },
] as BlogPost[]).sort((a, b) =>
  a.datePublished < b.datePublished ? 1 : a.datePublished > b.datePublished ? -1 : 0,
);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogCategory | "hammasi"): BlogPost[] {
  if (category === "hammasi") return blogPosts;
  return blogPosts.filter((p) => p.category === category);
}

export const blogCategories: BlogCategory[] = ["Stars", "Premium", "Gifts", "Biznes", "Telegram", "Xavfsizlik"];
