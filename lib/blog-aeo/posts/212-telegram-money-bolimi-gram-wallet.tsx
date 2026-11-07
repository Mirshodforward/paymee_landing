import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-money-bolimi-gram-wallet";

/**
 * Telegram «Money» bo‘limi va GRAM Wallet: Stars balansiga aloqasi bormi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-07): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Telegram’da «Money» yorlig‘i yoki GRAM Wallet paydo bo‘lganini eshitgan va Stars yoki Premium’ni so‘mda oladigan foydalanuvchi «telegram money bo‘limi gram wallet» deb qidiradi; u bu bo‘lim nima ekanini, Stars balansi bilan bog‘liqligini, 0.1 Gram yuborib faollashtirish da’vosi rostligini va xarid uchun hamyon kerakmi, shuni bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-07):
 *   https://core.telegram.org/api/stars
 *   https://core.telegram.org/api/gifts
 *   https://telegram.org/tos/wallet
 *
 * Narxlar konstantalardan: lib/products.ts (qo'lda raqam yozilmagan).
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/\u202f/g, "\u00a0");
const som = (n: number, locale: Locale) => `${fmt(n, locale)} ${{ uz: "so‘m", ru: "сум", en: "som" }[locale]}`;
const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.priceUzs ?? 0;

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return <p>Telegram’ning rasmiy sahifalarida «Money» yorlig‘i yoki GRAM Wallet ishga tushgani haqida hozircha e’lon topilmadi. Gap bitta kanal postidan tarqalgan. Stars, Premium va oddiy sovg‘a hamyonsiz ishlaydi: ular uchun Stars balansi va @username yetarli. «0.1 yuborib faollashtirish» usuli ham tasdiqlanmagan. Shu maqsadda hech kimga mablag‘ o‘tkazmang.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#telegram-money-bolimini-rasman-elon", label: "Telegram «Money» bo‘limini rasman e’lon qildimi?" },
          { href: "#kanal-postida-nima-deyilgan-va", label: "Kanal postida nima deyilgan va rasmiy hujjatlar nimani tasdiqlaydi?" },
          { href: "#gram-sozi-telegram-hujjatlarida-qayerda", label: "«Gram» so‘zi Telegram hujjatlarida qayerda uchraydi?" },
          { href: "#money-yorligi-stars-balansini-oz", label: "«Money» yorlig‘i Stars balansini o‘z ichiga oladimi?" },
          { href: "#somda-stars-yoki-premium-olish", label: "So‘mda Stars yoki Premium olish uchun hamyon ochish shartmi?" },
          { href: "#0-1-yuborsang-hamyon-ochiladi", label: "«0.1 yuborsang, hamyon ochiladi» degan iltimosga qanday javob berish kerak?" },
          { href: "#telegram-yangiligini-ozingiz-qanday-tekshirasiz", label: "Telegram yangiligini o‘zingiz qanday tekshirasiz?" },
          { href: "#ilovada-money-yorligi-korinmasa-nima", label: "Ilovada «Money» yorlig‘i ko‘rinmasa, nima qilish kerak?" },
          { href: "#rasmiy-elon-chiqsa-starspaymee-mijozi", label: "Rasmiy e’lon chiqsa, StarsPaymee mijozi nimaga e’tibor beradi?" },
        ]}
      />
      <h2 id="telegram-money-bolimini-rasman-elon">Telegram «Money» bo‘limini rasman e’lon qildimi?</h2>
      <p>2026-yil 7-noyabrgacha tekshirilgan rasmiy hujjatlarda «GRAM Wallet» yoki «Money» yorlig‘i ishga tushgani haqida e’lon yo‘q.</p>
      <p>Mish-mish manbasi — Telegram kanalidagi post. Unda uchta gap bor:</p>
      <ul>
        <li>hamyon ayrim foydalanuvchilarda chiqa boshlagan;</li>
        <li>uni boshqa odamga kamida 0.1 💎 yuborib faollashtirish mumkin;</li>
        <li>shundan keyin hamyon «Money» yorlig‘ida ko‘rinadi.</li>
      </ul>
      <p>Kanal posti rasmiy manba hisoblanmaydi. Undan faqat savol olinadi, javob esa Telegram hujjatlaridan qidiriladi. Telegram funksiyalari bo‘yicha rasmiy manbalar — <a href={"https://telegram.org"} target="_blank" rel="noopener noreferrer">telegram.org</a> va texnik hujjatlar joylashgan <a href={"https://core.telegram.org"} target="_blank" rel="noopener noreferrer">core.telegram.org</a>. Fragment va TON bo‘yicha esa o‘z saytlariga qarash kerak.</p>
      <p>Maqola tayyorlanayotganda Telegram blogi, fragment.com va ton.org sahifalari tekshirilmagan. Shuning uchun biz «bunday hamyon yo‘q» demaymiz. Faqat bitta narsani aytamiz: tekshirilgan rasmiy manbalarda buning tasdig‘i yo‘q.</p>
      <h2 id="kanal-postida-nima-deyilgan-va">Kanal postida nima deyilgan va rasmiy hujjatlar nimani tasdiqlaydi?</h2>
      <p>Postdagi har bir gapni Telegram’ning ochiq hujjatlari bilan solishtirib chiqdik:</p>
      <CompareTable
        headers={["Postdagi gap", "Rasmiy hujjatlardagi holat", "Amalda nima qilasiz"]}
        rows={[
          ["GRAM Wallet foydalanuvchilarga chiqmoqda", "Tasdiq yo‘q", "Rasmiy e’longacha mish-mish deb hisoblang"],
          ["Hamyon «Money» yorlig‘ida turadi", "Tasdiq yo‘q", "Yorliqni topolmasangiz, xavotir olmang"],
          ["Kamida 0.1 💎 yuborsangiz, hamyon ochiladi", "Tasdiq yo‘q", "Hech kimga «faollashtirish uchun» pul o‘tkazmang"],
          ["Hozircha faqat yuborish va to‘ldirish ishlaydi", "Tasdiq yo‘q", "Funksiyalar ro‘yxatini faqat rasmiy e’londan oling"],
          ["Telegram «Gram» so‘zini ishlatadi", "Ha, texnik hujjatda", "Faqat kanal va bot reklama daromadi birligi sifatida"],
        ]}
      />
      <p>Jadvaldagi beshta gapdan faqat oxirgisi hujjatda bor. U ham hamyon haqida emas, admin ko‘radigan daromad hisobi haqida. Nomlanishdagi o‘zgarishlar haqida alohida <Link href="/blog/toncoin-endi-gram">Toncoin va Gram nomi bo‘yicha maqola</Link> bor.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="gram-sozi-telegram-hujjatlarida-qayerda">«Gram» so‘zi Telegram hujjatlarida qayerda uchraydi?</h2>
      <p>Bugungi texnik hujjatda «Gram» bitta holatda tilga olinadi. Kanal yoki bot admini reklama daromadi tarixi va balansini nanogramlarda olishi mumkin. Bir nanogram — bir Gramning milliarddan bir qismi, ya’ni 1 / 1 000 000 000. Bu <a href={"https://core.telegram.org/api/stars"} target="_blank" rel="noopener noreferrer">Telegram Stars texnik sahifasida</a> yozilgan.</p>
      <p>Demak, bu oddiy foydalanuvchining hamyoni emas, admin ko‘radigan daromad hisobi. Sahifada undan pul yuborish yoki hamyonni to‘ldirish haqida gap yo‘q.</p>
      <p>O‘tmishda boshqa hujjat ham bo‘lgan. 2019-yilda «Grams Wallet» uchun <a href={"https://telegram.org/tos/wallet"} target="_blank" rel="noopener noreferrer">foydalanish shartlari</a> yangilangan. Ularga ko‘ra hamyon alohida ilova sifatida yoki Telegram ichida ishlatilishi mumkin edi. O‘sha shartlarda yana ikki qoida yozilgan:</p>
      <ul>
        <li>har bir Gram tranzaksiyasi TON blokcheyni reyestrida tasdiqlanib, qayd etilishi kerak edi;</li>
        <li>foydalanuvchi kirish ma’lumotlarini yo‘qotsa, Telegram ularni tiklay olmasligi aytilgan edi.</li>
      </ul>
      <Notice label={"Muhim"}>2019-yilgi shartlar o‘sha davrdagi hamyonga tegishli. Ular bugungi «GRAM Wallet» haqidagi postni tasdiqlamaydi va ikkisi o‘rtasidagi bog‘liqlik noma’lum.</Notice>
      <h2 id="money-yorligi-stars-balansini-oz">«Money» yorlig‘i Stars balansini o‘z ichiga oladimi?</h2>
      <p>Bunday birlashuv haqida rasmiy gap topilmadi. Hujjatlarda Stars va Gram alohida tushunchalar sifatida yozilgan.</p>
      <p>Telegram Stars — botlar va mini ilovalarda raqamli tovar hamda xizmat sotib olish, kontent mualliflariga sovg‘a yuborish uchun virtual birlik. Ta’rif <a href={"https://core.telegram.org/api/stars"} target="_blank" rel="noopener noreferrer">core.telegram.org/api/stars</a> sahifasida berilgan. O‘sha sahifaga ko‘ra, do‘st uchun Stars sotib olish ham ilova ichidagi alohida sovg‘a varianti orqali boshlanadi. Bu jarayonda tashqi hamyon tilga olinmaydi.</p>
      <p>Oddiy sovg‘a ham balansdagi Stars hisobidan sotib olinadi. Oluvchi uni profilida ko‘rsatishi yoki Stars’ga aylantirishi mumkin. Bu <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">sovg‘alar bo‘yicha hujjatda</a> yozilgan.</p>
      <p>Ikki misol:</p>
      <ul>
        <li>Botda o‘yin bonusini Stars bilan oldingiz. Yulduzlar Stars balansingizdan yechiladi, Gram hamyon ishtirok etmaydi.</li>
        <li>Do‘stingiz sizga sovg‘a yubordi, siz uni Stars’ga aylantirdingiz. Yulduzlar yana Stars balansiga tushadi, hamyonga emas.</li>
      </ul>
      <p>Gram esa hujjatda faqat kanal va bot reklama daromadi bilan bog‘liq holda uchraydi. Batafsil farqlar <Link href="/blog/telegram-wallet-va-stars-farqi">Telegram Wallet va Stars farqi</Link> maqolasida. Yulduzlaringiz qayerda ko‘rinishini <Link href="/blog/telegram-stars-balansini-tekshirish">Stars balansini tekshirish</Link> qo‘llanmasidan bilib olasiz.</p>
      <h2 id="somda-stars-yoki-premium-olish">So‘mda Stars yoki Premium olish uchun hamyon ochish shartmi?</h2>
      <p>Shart emas. @StarsPaymee_bot faqat qabul qiluvchining @username’ini so‘raydi. Parol, SMS kod, kripto hamyon, xalqaro karta yoki VPN kerak emas.</p>
      <Steps>
        <Step title={"Botni oching"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> yoki uning Mini App’ini ishga tushiring.</Step>
        <Step title={"Mahsulotni tanlang"}>Stars miqdori yoki Premium muddati: 3, 6 yoki 12 oy. 1 oylik tarif ham bor, narxi botda ko‘rsatiladi.</Step>
        <Step title={"@username kiriting"}>o‘zingizniki yoki sovg‘a qilmoqchi bo‘lgan odamniki. Bitta harf xato bo‘lsa, buyurtma boshqa akkauntga ketadi, shuning uchun diqqat bilan tekshiring.</Step>
        <Step title={"To‘lov usulini tanlang"}>Click, Payme, Uzum, Paynet (ilovada yoki terminalda naqd), UzCard/HUMO kartaga o‘tkazma yoki bot balansi.</Step>
        <Step title={"To‘lovni tasdiqlang"}>buyurtma odatda bir necha soniyada avtomatik yetkaziladi.</Step>
        <Step title={"Natijani tekshiring"}>Telegram’da Stars balansi yoki Premium holatiga qarang.</Step>
      </Steps>
      <p>Stars narxi to‘lov usuliga bog‘liq. Karta o‘tkazmasi yoki bot balansidan 1 ta Stars {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Eng kam buyurtma — 50 Stars. Premium narxi hamma usulda bir xil: 3 oy — {som(premium(3), "uz")}, 6 oy — {som(premium(6), "uz")}, 12 oy — {som(premium(12), "uz")}.</p>
      <p>Premium Telegram’ning sovg‘a mexanizmi orqali @username bo‘yicha ulanadi. Akkauntda faol Premium bo‘lsa, bot yangi buyurtma ochmaydi, chunki muddat faol obuna ustiga qo‘shilmaydi. Masalan, onangizga Premium sovg‘a qilmoqchisiz, lekin uning obunasi hali tugamagan. Bunday holda obuna tugashini kutib, keyin buyurtma berasiz.</p>
      <p>Texnik hujjatda Stars uchun yana bir yo‘l tilga olingan: Fragment orqali to‘lov. Bu usulda kattaroq xarid ham qilsa bo‘ladi. Fragment qaysi to‘lovni qabul qilishini fragment.com’da tekshiring. So‘mda to‘laydigan foydalanuvchiga bu yo‘l kerak emas. Tariflar <Link href="/stars">/stars</Link> va <Link href="/premium">/premium</Link> sahifalarida.</p>
      <h2 id="0-1-yuborsang-hamyon-ochiladi">«0.1 yuborsang, hamyon ochiladi» degan iltimosga qanday javob berish kerak?</h2>
      <p>Rad eting. 0.1 💎 o‘tkazish bilan hamyon ochilishi rasmiy tasdiqlanmagan. Rasmiy funksiya uchun boshqa odamning shaxsiy manziliga pul o‘tkazish talab qilinishiga asos yo‘q.</p>
      <p>Quyidagi belgilar bo‘lsa, ayniqsa ehtiyot bo‘ling:</p>
      <ul>
        <li>notanish odam yoki kanal admini «faollashtirish uchun» o‘z manzilini beradi;</li>
        <li>«faollashtirish» havolasi Telegram kirish kodini yoki ikki bosqichli tasdiq parolini so‘raydi;</li>
        <li>«hamyon ochilmasa, pulingizni qaytaramiz» deb va’da berishadi;</li>
        <li>«bugun ulgurmasangiz, navbatdan chiqasiz» deb shoshiltirishadi;</li>
        <li>skrinshotda kimdir yorliqni allaqachon ochgani ko‘rsatiladi, lekin rasmiy havola berilmaydi.</li>
      </ul>
      <p>Yuborilgan mablag‘ni qaytarib olish yo‘li bu maqolada tasdiqlanmagan. 2019-yilgi shartlarga ko‘ra Gram tranzaksiyalari blokcheyn reyestrida qayd etilishi kerak edi. Bugungi o‘tkazmalarda ham shunday ekanini bu maqola tasdiqlay olmaydi. Shuning uchun pulni oldindan yubormaslik eng xavfsiz yo‘l.</p>
      <p>Kod yoki parolni allaqachon kiritib qo‘ygan bo‘lsangiz, faol seanslarni oching, notanishlarini yoping va parolni almashtiring. Qadamlar <Link href="/blog/telegram-nomimdan-xabar-yuborilyapti">Telegram nomimdan xabar yuborilyapti</Link> maqolasida.</p>
      <h2 id="telegram-yangiligini-ozingiz-qanday-tekshirasiz">Telegram yangiligini o‘zingiz qanday tekshirasiz?</h2>
      <p>«Money» kabi mish-mishlar tez-tez chiqadi. Quyidagi besh qadam ularni bir necha daqiqada saralashga yordam beradi:</p>
      <Steps>
        <Step title={"Manbani aniqlang"}>xabar kanal postidanmi, rasmiy sahifadanmi? Forward qilingan skrinshot dalil emas.</Step>
        <Step title={"Rasmiy saytni oching"}>telegram.org, core.telegram.org, fragment.com yoki ton.org. Havolani postdan emas, brauzerga o‘zingiz yozib oching.</Step>
        <Step title={"Ilova yangilanishini ko‘ring"}>App Store yoki Google Play’dagi yangilanish tavsifini o‘qing. Funksiya u yerda tilga olinmagan bo‘lsa, shoshilmang.</Step>
        <Step title={"Pul so‘ralsa, to‘xtang"}>rasmiy funksiyani «ochish» uchun begona manzilga o‘tkazma qilish odatiy holat emas.</Step>
        <Step title={"Kod so‘ralsa, chiqib keting"}>Telegram kirish kodi yoki 2FA parolini hech qanday sayt va botga yozmang.</Step>
      </Steps>
      <p>Bu tekshiruv faqat hamyon uchun emas. «Bepul yulduz», «yashirin sovg‘a» kabi xabarlarga ham shu tartibda yondashing.</p>
      <h2 id="ilovada-money-yorligi-korinmasa-nima">Ilovada «Money» yorlig‘i ko‘rinmasa, nima qilish kerak?</h2>
      <p>Hech narsa tuzatish shart emas. Yorliq hamma uchun chiqarilgani tasdiqlanmagan, uning yo‘qligi nosozlik belgisi emas.</p>
      <p>Foydali odatlar:</p>
      <ul>
        <li>ilovani faqat App Store, Google Play yoki <a href={"https://telegram.org"} target="_blank" rel="noopener noreferrer">telegram.org</a> orqali yangilang;</li>
        <li>norasmiy APK fayllar va «yorliqni ochib beruvchi» botlarni o‘rnatmang;</li>
        <li>Stars balansini avval qayerda ko‘rgan bo‘lsangiz, o‘sha joydan qidiring.</li>
      </ul>
      <Notice label={"Muhim"}>«Money» yorlig‘ini ochish uchun bot, fayl yoki to‘lov kerakligi haqida rasmiy gap yo‘q. Shunday narsani taklif qilgan har qanday manbaga ishonmang.</Notice>
      <p>Hamyon kartasi va uning bezagi haqidagi gaplar bo‘yicha <Link href="/blog/gram-hamyon-kartasi-nft-sovga-dizayn">Gram hamyon kartasini bezash</Link> maqolasini ko‘ring.</p>
      <h2 id="rasmiy-elon-chiqsa-starspaymee-mijozi">Rasmiy e’lon chiqsa, StarsPaymee mijozi nimaga e’tibor beradi?</h2>
      <p>Hozir tasdiqlangan qism shu: Stars, Premium va oddiy sovg‘a hamyonsiz ishlaydi. Rasmiy e’lon chiqmaguncha StarsPaymee’dagi xarid tartibi o‘zgarmaydi: @username va so‘mda to‘lov.</p>
      <p>StarsPaymee — 1,5 yildan beri ishlab kelayotgan mustaqil xizmat. U Telegram bilan rasmiy aloqasi borligini da’vo qilmaydi. Xizmat foydalanuvchidan Stars yoki sovg‘a sotib olmaydi. Shuning uchun «balansingizdagi Gram yoki Stars’ni StarsPaymee nomidan sotib olamiz» degan xabar kelsa, u bizdan emas.</p>
      <p>Sovg‘alar bo‘yicha qoida o‘zgarmagan. Tayyor kolleksion (NFT) sovg‘alar botdagi NFT Market’da so‘mda sotiladi. Batafsil ma’lumot <Link href="/gifts">/gifts</Link> sahifasida va <Link href="/blog/starspaymee-nft-market">NFT Market</Link> maqolasida. Telegram sotuvdan olib tashlagan limited sovg‘alarni botlar yubora olmaydi.</p>
      <p>Hamyon haqida rasmiy e’lon chiqsa, uni telegram.org yoki core.telegram.org’da o‘qing va qanday shartlar qo‘yilganini ko‘ring. Buyurtma bo‘yicha savol bo‘lsa, <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>ga yozing.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://core.telegram.org/api/stars", label: "Telegram Stars" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://telegram.org/tos/wallet", label: "Grams Wallet" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "«Money» yorlig‘i ochilsa, Stars balansim o‘sha yerga ko‘chadimi?", answer: "Bunga rasmiy tasdiq yo‘q. Yorliq faqat kanal postida tilga olingan, hujjatlarda esa Stars alohida virtual birlik sifatida yozilgan." },
  { question: "Menda GRAM Wallet yo‘q. Botdan Stars buyurtma qilsam bo‘ladimi?", answer: "Bo‘ladi. @StarsPaymee_bot uchun faqat @username kerak, to‘lovni so‘mda Click, Payme, Uzum, Paynet yoki UzCard/HUMO orqali qilasiz." },
  { question: "Guruhdagi tanishim hamyon ochish uchun unga 0.1 o‘tkazishimni so‘rayapti. Rozi bo‘laymi?", answer: "Rozi bo‘lmang. Bunday faollashtirish usulini Telegram tasdiqlamagan, tanishingiz ham buni tekshirilmagan postdan olgan bo‘lishi mumkin." },
  { question: "Postga ishonib pul o‘tkazdim, yorliq paydo bo‘lmadi. Endi nima qilay?", answer: "Mablag‘ni qaytarishning tasdiqlangan yo‘li yo‘q, faqat oluvchidan so‘rashingiz mumkin. Jarayonda kod yoki parol yozgan bo‘lsangiz, notanish seanslarni yopib, parolni yangilang." },
  { question: "Do‘stimga Premium sovg‘a qilsam, unda kripto hamyon bo‘lishi kerakmi?", answer: "Kerak emas. Premium uning @username’iga Telegram sovg‘a mexanizmi bilan ulanadi. Asosiy shart — unda faol Premium obunasi bo‘lmasligi." },
  { question: "Stars uchun Gram yoki TON bilan to‘lov qilsa bo‘ladimi?", answer: "Texnik hujjatda Stars uchun Fragment orqali to‘lov yo‘li bor. Qaysi to‘lov qabul qilinishini fragment.com’dan bilib oling. StarsPaymee’da hisob-kitob faqat so‘mda." },
  { question: "Kanalimdagi reklama daromadi qaysi birlikda ko‘rsatiladi?", answer: "Telegram API hujjatiga ko‘ra, admin reklama daromadi tarixini va balansini nanogramlarda olishi mumkin. Bu daromad «Money» yorlig‘iga tushishi haqida rasmiy gap yo‘q." },
  { question: "2019-yildagi Grams Wallet qaytib keldimi?", answer: "Bunga dalil yo‘q. O‘sha yilgi shartlar o‘sha davr hamyoniga tegishli va bugungi postdagi gaplarni tasdiqlamaydi." },
  { question: "Yig‘ilib qolgan Stars’imni StarsPaymee’ga sotsam bo‘ladimi?", answer: "Yo‘q, StarsPaymee foydalanuvchilardan Stars ham, sovg‘a ham sotib olmaydi. Xizmat Stars, Premium va sovg‘alarni faqat so‘mda sotadi." },
  { question: "Yorliqni «ochib beradigan» APK yoki botni o‘rnatsam xavfli emasmi?", answer: "Xavfli. Bunday fayl yoki bot rasmiy emas va akkaunt ma’lumotlarini so‘rashi mumkin. Telegram’ni faqat rasmiy do‘kon yoki telegram.org orqali yangilang." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>На официальных страницах Telegram пока нет объявления о запуске вкладки «Money» или GRAM Wallet. Слух разошёлся из одного поста в канале. Stars, Premium и обычные подарки работают без кошелька: достаточно баланса Stars и @username. Способ «отправь 0,1 и кошелёк активируется» тоже не подтверждён. Не переводите ради этого деньги никому.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#telegram-money-bolimini-rasman-elon", label: "Объявил ли Telegram официально о вкладке «Money»?" },
          { href: "#kanal-postida-nima-deyilgan-va", label: "Что сказано в посте канала и что подтверждают официальные документы?" },
          { href: "#gram-sozi-telegram-hujjatlarida-qayerda", label: "Где слово «Gram» встречается в документации Telegram?" },
          { href: "#money-yorligi-stars-balansini-oz", label: "Входит ли баланс Stars во вкладку «Money»?" },
          { href: "#somda-stars-yoki-premium-olish", label: "Нужно ли открывать кошелёк, чтобы купить Stars или Premium за сумы?" },
          { href: "#0-1-yuborsang-hamyon-ochiladi", label: "Как ответить на просьбу «переведи 0,1 — и кошелёк откроется»?" },
          { href: "#telegram-yangiligini-ozingiz-qanday-tekshirasiz", label: "Как самому проверить новость о Telegram?" },
          { href: "#ilovada-money-yorligi-korinmasa-nima", label: "Что делать, если вкладки «Money» в приложении нет?" },
          { href: "#rasmiy-elon-chiqsa-starspaymee-mijozi", label: "На что обратить внимание клиенту StarsPaymee, если выйдет официальное объявление?" },
        ]}
      />
      <h2 id="telegram-money-bolimini-rasman-elon">Объявил ли Telegram официально о вкладке «Money»?</h2>
      <p>В официальных документах, проверенных по состоянию на 7 ноября 2026 года, нет объявления о запуске «GRAM Wallet» или вкладки «Money».</p>
      <p>Источник слуха — пост в Telegram-канале. В нём три утверждения:</p>
      <ul>
        <li>кошелёк уже начал появляться у части пользователей;</li>
        <li>его можно активировать, отправив другому человеку минимум 0,1 💎;</li>
        <li>после этого кошелёк отображается во вкладке «Money».</li>
      </ul>
      <p>Пост в канале не считается официальным источником. Из него берут только вопрос, а ответ ищут в документах Telegram. Официальные источники по функциям Telegram — <a href={"https://telegram.org"} target="_blank" rel="noopener noreferrer">telegram.org</a> и <a href={"https://core.telegram.org"} target="_blank" rel="noopener noreferrer">core.telegram.org</a>, где лежит техническая документация. По Fragment и TON нужно смотреть их собственные сайты.</p>
      <p>При подготовке статьи блог Telegram, fragment.com и ton.org не проверялись. Поэтому мы не утверждаем, что «такого кошелька нет». Скажем только одно: в проверенных официальных источниках подтверждения этому нет.</p>
      <h2 id="kanal-postida-nima-deyilgan-va">Что сказано в посте канала и что подтверждают официальные документы?</h2>
      <p>Мы сверили каждое утверждение из поста с открытой документацией Telegram:</p>
      <CompareTable
        headers={["Утверждение в посте", "Что в официальных документах", "Что делать на практике"]}
        rows={[
          ["GRAM Wallet раздают пользователям", "Подтверждения нет", "До официального объявления считайте это слухом"],
          ["Кошелёк находится во вкладке «Money»", "Подтверждения нет", "Если не нашли вкладку, не волнуйтесь"],
          ["Отправьте минимум 0,1 💎 — и кошелёк откроется", "Подтверждения нет", "Никому не переводите деньги «для активации»"],
          ["Пока работают только отправка и пополнение", "Подтверждения нет", "Список функций берите только из официального объявления"],
          ["Telegram использует слово «Gram»", "Да, в технической документации", "Только как единица дохода от рекламы в каналах и ботах"],
        ]}
      />
      <p>Из пяти утверждений в документации есть только последнее. И оно касается не кошелька, а учёта дохода, который видит администратор. О смене названий есть отдельная <Link href="/blog/toncoin-endi-gram">статья про Toncoin и название Gram</Link>.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="gram-sozi-telegram-hujjatlarida-qayerda">Где слово «Gram» встречается в документации Telegram?</h2>
      <p>В сегодняшней технической документации «Gram» упоминается в одном случае. Администратор канала или бота может получить историю и баланс рекламного дохода в нанограммах. Один нанограмм — миллиардная доля Gram, то есть 1 / 1 000 000 000. Это написано на <a href={"https://core.telegram.org/api/stars"} target="_blank" rel="noopener noreferrer">технической странице Telegram Stars</a>.</p>
      <p>То есть речь не о кошельке обычного пользователя, а об учёте дохода для администратора. На странице ничего не сказано об отправке денег с этого баланса или о пополнении кошелька.</p>
      <p>Раньше существовал и другой документ. В 2019 году обновили <a href={"https://telegram.org/tos/wallet"} target="_blank" rel="noopener noreferrer">условия использования</a> «Grams Wallet». По ним кошелёк можно было использовать как отдельное приложение или внутри Telegram. В тех же условиях было ещё два правила:</p>
      <ul>
        <li>каждая транзакция в Gram должна была подтверждаться и записываться в реестр блокчейна TON;</li>
        <li>если пользователь терял данные для входа, Telegram не мог их восстановить.</li>
      </ul>
      <Notice label={"Важно"}>Условия 2019 года относятся к кошельку того времени. Они не подтверждают сегодняшний пост о «GRAM Wallet», а связь между ними неизвестна.</Notice>
      <h2 id="money-yorligi-stars-balansini-oz">Входит ли баланс Stars во вкладку «Money»?</h2>
      <p>Официальных сведений о таком объединении нет. В документации Stars и Gram описаны как разные понятия.</p>
      <p>Telegram Stars — виртуальная единица для покупки цифровых товаров и услуг в ботах и мини-приложениях, а также для подарков авторам контента. Определение дано на странице <a href={"https://core.telegram.org/api/stars"} target="_blank" rel="noopener noreferrer">core.telegram.org/api/stars</a>. По той же странице покупка Stars для друга начинается с отдельного подарочного варианта внутри приложения. Внешний кошелёк в этом процессе не упоминается.</p>
      <p>Обычный подарок тоже покупается за Stars с баланса. Получатель может показать его в профиле или обменять на Stars. Это описано в <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">документации по подаркам</a>.</p>
      <p>Два примера:</p>
      <ul>
        <li>Вы купили бонус в игре внутри бота за Stars. Звёзды списываются с баланса Stars, кошелёк Gram не участвует.</li>
        <li>Друг прислал вам подарок, и вы обменяли его на Stars. Звёзды снова поступают на баланс Stars, а не в кошелёк.</li>
      </ul>
      <p>Gram же в документации встречается только в связи с рекламным доходом каналов и ботов. Подробно о различиях — в статье <Link href="/blog/telegram-wallet-va-stars-farqi">чем Telegram Wallet отличается от Stars</Link>. Где видны ваши звёзды, расскажет инструкция <Link href="/blog/telegram-stars-balansini-tekshirish">как проверить баланс Stars</Link>.</p>
      <h2 id="somda-stars-yoki-premium-olish">Нужно ли открывать кошелёк, чтобы купить Stars или Premium за сумы?</h2>
      <p>Не нужно. @StarsPaymee_bot спрашивает только @username получателя. Пароль, SMS-код, криптокошелёк, иностранная карта или VPN не нужны.</p>
      <Steps>
        <Step title={"Откройте бота"}>запустите <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> или его Mini App.</Step>
        <Step title={"Выберите товар"}>количество Stars или срок Premium: 3, 6 или 12 месяцев. Есть и тариф на 1 месяц, его цена указана в боте.</Step>
        <Step title={"Введите @username"}>свой или того, кому хотите сделать подарок. Ошибка в одной букве отправит заказ на другой аккаунт, поэтому проверьте внимательно.</Step>
        <Step title={"Выберите способ оплаты"}>Click, Payme, Uzum, Paynet (в приложении или наличными через терминал), перевод на карту UzCard/HUMO или баланс бота.</Step>
        <Step title={"Подтвердите оплату"}>заказ обычно доставляется автоматически за несколько секунд.</Step>
        <Step title={"Проверьте результат"}>посмотрите баланс Stars или статус Premium в Telegram.</Step>
      </Steps>
      <p>Цена Stars зависит от способа оплаты. Переводом на карту или с баланса бота 1 Stars стоит {som(STARS_PER_UNIT_UZS, "ru")}, через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Минимальный заказ — 50 Stars. Premium стоит одинаково при любом способе: 3 месяца — {som(premium(3), "ru")}, 6 месяцев — {som(premium(6), "ru")}, 12 месяцев — {som(premium(12), "ru")}.</p>
      <p>Premium подключается по @username через подарочный механизм Telegram. Если на аккаунте уже есть активный Premium, бот не откроет новый заказ: срок не добавляется поверх действующей подписки. Например, вы хотите подарить Premium маме, а её подписка ещё не закончилась. В этом случае дождитесь окончания подписки и только потом оформляйте заказ.</p>
      <p>В технической документации упомянут ещё один способ оплаты Stars — через Fragment. Так можно делать и более крупные покупки. Какую оплату принимает Fragment, уточняйте на fragment.com. Тому, кто платит в сумах, этот путь не нужен. Тарифы — на страницах <Link href="/stars">/stars</Link> и <Link href="/premium">/premium</Link>.</p>
      <h2 id="0-1-yuborsang-hamyon-ochiladi">Как ответить на просьбу «переведи 0,1 — и кошелёк откроется»?</h2>
      <p>Отказаться. То, что перевод 0,1 💎 открывает кошелёк, официально не подтверждено. Нет оснований считать, что для официальной функции нужно переводить деньги на личный адрес другого человека.</p>
      <p>Будьте особенно осторожны, если:</p>
      <ul>
        <li>незнакомец или админ канала даёт свой адрес «для активации»;</li>
        <li>ссылка «на активацию» просит код входа в Telegram или пароль двухэтапной проверки;</li>
        <li>обещают «вернём деньги, если кошелёк не откроется»;</li>
        <li>торопят: «не успеете сегодня — вылетите из очереди»;</li>
        <li>показывают скриншот, где кто-то уже открыл вкладку, но официальной ссылки не дают.</li>
      </ul>
      <p>Способ вернуть отправленные средства в этой статье не подтверждён. По условиям 2019 года транзакции в Gram должны были записываться в реестр блокчейна. Так ли это для сегодняшних переводов, статья подтвердить не может. Поэтому самый безопасный вариант — не отправлять деньги заранее.</p>
      <p>Если вы уже ввели код или пароль, откройте список активных сеансов, завершите незнакомые и смените пароль. Шаги описаны в статье <Link href="/blog/telegram-nomimdan-xabar-yuborilyapti">от моего имени в Telegram отправляются сообщения</Link>.</p>
      <h2 id="telegram-yangiligini-ozingiz-qanday-tekshirasiz">Как самому проверить новость о Telegram?</h2>
      <p>Слухи вроде «Money» появляются регулярно. Пять шагов помогут отсеять их за пару минут:</p>
      <Steps>
        <Step title={"Определите источник"}>сообщение из поста в канале или с официальной страницы? Пересланный скриншот не доказательство.</Step>
        <Step title={"Откройте официальный сайт"}>telegram.org, core.telegram.org, fragment.com или ton.org. Адрес наберите в браузере сами, а не переходите по ссылке из поста.</Step>
        <Step title={"Посмотрите описание обновления"}>прочитайте, что сказано об обновлении в App Store или Google Play. Если функция там не упомянута, не спешите.</Step>
        <Step title={"Просят деньги — остановитесь"}>перевод на чужой адрес ради «открытия» официальной функции не является обычной практикой.</Step>
        <Step title={"Просят код — уходите"}>не вводите код входа в Telegram или пароль 2FA ни на каких сайтах и в ботах.</Step>
      </Steps>
      <p>Эта проверка подходит не только для кошелька. Так же относитесь к сообщениям про «бесплатные звёзды» или «секретные подарки».</p>
      <h2 id="ilovada-money-yorligi-korinmasa-nima">Что делать, если вкладки «Money» в приложении нет?</h2>
      <p>Ничего чинить не нужно. Не подтверждено, что вкладку выпустили для всех, и её отсутствие — не признак сбоя.</p>
      <p>Полезные привычки:</p>
      <ul>
        <li>обновляйте приложение только через App Store, Google Play или <a href={"https://telegram.org"} target="_blank" rel="noopener noreferrer">telegram.org</a>;</li>
        <li>не устанавливайте неофициальные APK-файлы и боты, которые «открывают вкладку»;</li>
        <li>баланс Stars ищите там же, где видели его раньше.</li>
      </ul>
      <Notice label={"Важно"}>Официальных сведений о том, что для открытия вкладки «Money» нужен бот, файл или платёж, нет. Не доверяйте никому, кто такое предлагает.</Notice>
      <p>О карточке кошелька и её оформлении читайте в статье <Link href="/blog/gram-hamyon-kartasi-nft-sovga-dizayn">как оформить карточку кошелька Gram</Link>.</p>
      <h2 id="rasmiy-elon-chiqsa-starspaymee-mijozi">На что обратить внимание клиенту StarsPaymee, если выйдет официальное объявление?</h2>
      <p>Сейчас подтверждено следующее: Stars, Premium и обычные подарки работают без кошелька. Пока нет официального объявления, порядок покупки в StarsPaymee не меняется: @username и оплата в сумах.</p>
      <p>StarsPaymee — независимый сервис, который работает уже 1,5 года. Он не заявляет об официальной связи с Telegram. Сервис не покупает у пользователей Stars или подарки. Поэтому если вам пишут «выкупим Gram или Stars с вашего баланса от имени StarsPaymee», это не мы.</p>
      <p>Правило по подаркам не изменилось. Готовые коллекционные (NFT) подарки продаются за сумы в NFT Market внутри бота. Подробнее — на странице <Link href="/gifts">/gifts</Link> и в статье про <Link href="/blog/starspaymee-nft-market">NFT Market</Link>. Лимитированные подарки, снятые Telegram с продажи, боты отправлять не могут.</p>
      <p>Если появится официальное объявление о кошельке, прочитайте его на telegram.org или core.telegram.org и посмотрите, какие там условия. С вопросами по заказу пишите в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://core.telegram.org/api/stars", label: "Telegram Stars" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://telegram.org/tos/wallet", label: "Grams Wallet" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Если откроется вкладка «Money», мой баланс Stars переедет туда?", answer: "Официального подтверждения этому нет. Вкладка упоминается только в посте канала, а в документации Stars описаны как отдельная виртуальная единица." },
  { question: "У меня нет GRAM Wallet. Можно заказать Stars через бота?", answer: "Можно. Для @StarsPaymee_bot нужен только @username, а оплатить можно в сумах через Click, Payme, Uzum, Paynet или UzCard/HUMO." },
  { question: "Знакомый из чата просит перевести ему 0,1, чтобы открыть кошелёк. Соглашаться?", answer: "Не соглашайтесь. Telegram такой способ активации не подтверждал, а знакомый мог взять его из непроверенного поста." },
  { question: "Я поверил посту и перевёл деньги, но вкладка не появилась. Что теперь?", answer: "Подтверждённого способа вернуть средства нет — можно только попросить получателя. Если по ходу вы вводили код или пароль, завершите незнакомые сеансы и смените пароль." },
  { question: "Если я дарю другу Premium, нужен ли ему криптокошелёк?", answer: "Не нужен. Premium подключается на его @username через подарочный механизм Telegram. Главное условие — у него не должно быть активной подписки Premium." },
  { question: "Можно ли оплатить Stars в Gram или TON?", answer: "В технической документации для Stars есть способ оплаты через Fragment. Какие платежи он принимает, узнайте на fragment.com. В StarsPaymee расчёт только в сумах." },
  { question: "В каких единицах показывается рекламный доход моего канала?", answer: "По документации Telegram API администратор может получать историю и баланс рекламного дохода в нанограммах. Официальных сведений о том, что этот доход попадёт во вкладку «Money», нет." },
  { question: "Grams Wallet из 2019 года вернулся?", answer: "Доказательств этому нет. Условия того года относятся к кошельку того времени и не подтверждают слова из нынешнего поста." },
  { question: "Можно продать накопленные Stars в StarsPaymee?", answer: "Нет, StarsPaymee не выкупает у пользователей ни Stars, ни подарки. Сервис только продаёт Stars, Premium и подарки за сумы." },
  { question: "Опасно ли ставить APK или бота, который «открывает» вкладку?", answer: "Опасно. Такой файл или бот неофициальный и может запросить данные аккаунта. Обновляйте Telegram только через официальный магазин приложений или telegram.org." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>Telegram’s official pages have no announcement so far of a “Money” tab or a GRAM Wallet launch. The claim spread from a single channel post. Stars, Premium and regular gifts work without any wallet: a Stars balance and an @username are enough. The “send 0.1 to activate” method isn’t confirmed either, so don’t transfer money to anyone for it.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#telegram-money-bolimini-rasman-elon", label: "Has Telegram officially announced a “Money” tab?" },
          { href: "#kanal-postida-nima-deyilgan-va", label: "What does the channel post say, and what do official docs confirm?" },
          { href: "#gram-sozi-telegram-hujjatlarida-qayerda", label: "Where does the word “Gram” appear in Telegram’s documentation?" },
          { href: "#money-yorligi-stars-balansini-oz", label: "Does the “Money” tab include your Stars balance?" },
          { href: "#somda-stars-yoki-premium-olish", label: "Do you need a wallet to buy Stars or Premium in UZS?" },
          { href: "#0-1-yuborsang-hamyon-ochiladi", label: "How should you respond to “send 0.1 and your wallet opens”?" },
          { href: "#telegram-yangiligini-ozingiz-qanday-tekshirasiz", label: "How can you verify Telegram news yourself?" },
          { href: "#ilovada-money-yorligi-korinmasa-nima", label: "What if you don’t see a “Money” tab in the app?" },
          { href: "#rasmiy-elon-chiqsa-starspaymee-mijozi", label: "If an official announcement comes, what should StarsPaymee customers watch for?" },
        ]}
      />
      <h2 id="telegram-money-bolimini-rasman-elon">Has Telegram officially announced a “Money” tab?</h2>
      <p>The official documentation we checked up to 7 November 2026 contains no announcement that a “GRAM Wallet” or a “Money” tab has launched.</p>
      <p>The rumour comes from a post in a Telegram channel. It makes three claims:</p>
      <ul>
        <li>the wallet has started appearing for some users;</li>
        <li>you can activate it by sending at least 0.1 💎 to another person;</li>
        <li>after that, the wallet shows up in a “Money” tab.</li>
      </ul>
      <p>A channel post is not an official source. Treat it as a question, and look for the answer in Telegram’s own documentation. The official sources for Telegram features are <a href={"https://telegram.org"} target="_blank" rel="noopener noreferrer">telegram.org</a> and <a href={"https://core.telegram.org"} target="_blank" rel="noopener noreferrer">core.telegram.org</a>, where the technical docs live. For Fragment and TON, check their own websites.</p>
      <p>While preparing this article, we did not check the Telegram blog, fragment.com or ton.org. So we are not saying “this wallet doesn’t exist”. We are saying one thing only: the official sources we checked don’t confirm it.</p>
      <h2 id="kanal-postida-nima-deyilgan-va">What does the channel post say, and what do official docs confirm?</h2>
      <p>We compared each claim in the post with Telegram’s public documentation:</p>
      <CompareTable
        headers={["Claim in the post", "Status in official docs", "What to do in practice"]}
        rows={[
          ["GRAM Wallet is rolling out to users", "Not confirmed", "Treat it as a rumour until an official announcement"],
          ["The wallet sits in a “Money” tab", "Not confirmed", "If you can’t find the tab, don’t worry"],
          ["Send at least 0.1 💎 and the wallet opens", "Not confirmed", "Don’t transfer money to anyone “for activation”"],
          ["Only sending and topping up work for now", "Not confirmed", "Take the feature list only from an official announcement"],
          ["Telegram uses the word “Gram”", "Yes, in the technical docs", "Only as the unit for channel and bot ad revenue"],
        ]}
      />
      <p>Of the five claims in the table, only the last one appears in the documentation. And even that isn’t about a wallet: it concerns the revenue figures an admin sees. For the naming change itself, see our separate <Link href="/blog/toncoin-endi-gram">article on Toncoin and the Gram name</Link>.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="gram-sozi-telegram-hujjatlarida-qayerda">Where does the word “Gram” appear in Telegram’s documentation?</h2>
      <p>In today’s technical documentation, “Gram” comes up in one context. A channel or bot admin can fetch the ad revenue transaction history and balance in nanograms. One nanogram is one billionth of a Gram, that is 1 / 1 000 000 000. This is stated on the <a href={"https://core.telegram.org/api/stars"} target="_blank" rel="noopener noreferrer">Telegram Stars technical page</a>.</p>
      <p>So this is not an ordinary user’s wallet. It’s a revenue figure that admins see. The page says nothing about sending money from it or topping it up.</p>
      <p>There was a different document in the past. In 2019, the <a href={"https://telegram.org/tos/wallet"} target="_blank" rel="noopener noreferrer">terms of service</a> for the “Grams Wallet” were updated. Under them, the wallet could be used as a standalone app or inside Telegram. Those terms also contained two more rules:</p>
      <ul>
        <li>every Gram transaction had to be validated and recorded in the TON Blockchain ledger;</li>
        <li>if a user lost their credentials, Telegram stated it could not recover them.</li>
      </ul>
      <Notice label={"Important"}>The 2019 terms apply to the wallet of that time. They don’t confirm today’s post about a “GRAM Wallet”, and the link between the two is unknown.</Notice>
      <h2 id="money-yorligi-stars-balansini-oz">Does the “Money” tab include your Stars balance?</h2>
      <p>We found no official statement about such a merger. The documentation describes Stars and Gram as separate concepts.</p>
      <p>Telegram Stars are a virtual unit for buying digital goods and services in bots and mini apps, and for sending gifts to content creators. The definition is on <a href={"https://core.telegram.org/api/stars"} target="_blank" rel="noopener noreferrer">core.telegram.org/api/stars</a>. According to the same page, buying Stars for a friend also starts with a separate in-app gift option. No external wallet is mentioned in that process.</p>
      <p>A regular gift is also paid for with Stars from your balance. The recipient can display it on their profile or convert it into Stars. This is described in the <a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">gifts documentation</a>.</p>
      <p>Two examples:</p>
      <ul>
        <li>You bought a game bonus in a bot with Stars. The Stars come out of your Stars balance; no Gram wallet is involved.</li>
        <li>A friend sent you a gift and you converted it into Stars. The Stars land back in your Stars balance, not in a wallet.</li>
      </ul>
      <p>Gram, on the other hand, appears in the docs only in connection with channel and bot ad revenue. For a detailed breakdown, read <Link href="/blog/telegram-wallet-va-stars-farqi">Telegram Wallet vs Stars</Link>. To find out where your Stars are shown, see the guide on <Link href="/blog/telegram-stars-balansini-tekshirish">checking your Stars balance</Link>.</p>
      <h2 id="somda-stars-yoki-premium-olish">Do you need a wallet to buy Stars or Premium in UZS?</h2>
      <p>No. @StarsPaymee_bot only asks for the recipient’s @username. No password, SMS code, crypto wallet, international card or VPN is needed.</p>
      <Steps>
        <Step title={"Open the bot"}>launch <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> or its Mini App.</Step>
        <Step title={"Choose the product"}>an amount of Stars or a Premium period: 3, 6 or 12 months. There’s also a 1-month plan; its price is shown in the bot.</Step>
        <Step title={"Enter the @username"}>your own or that of the person you’re gifting. One wrong letter sends the order to another account, so check it carefully.</Step>
        <Step title={"Pick a payment method"}>Click, Payme, Uzum, Paynet (in the app or in cash at a terminal), a UzCard/HUMO card transfer, or your bot balance.</Step>
        <Step title={"Confirm the payment"}>the order is usually delivered automatically within a few seconds.</Step>
        <Step title={"Check the result"}>look at your Stars balance or Premium status in Telegram.</Step>
      </Steps>
      <p>The price of Stars depends on the payment method. Via card transfer or bot balance, 1 Star costs {som(STARS_PER_UNIT_UZS, "en")}; via Click, Payme, Uzum or Paynet, it costs {som(STARS_PER_UNIT_GATEWAY_UZS, "en")}. The minimum order is 50 Stars. Premium costs the same with every method: 3 months — {som(premium(3), "en")}, 6 months — {som(premium(6), "en")}, 12 months — {som(premium(12), "en")}.</p>
      <p>Premium is activated by @username through Telegram’s gift mechanism. If the account already has active Premium, the bot won’t open a new order, because the new period isn’t added on top of an active subscription. Say you want to gift Premium to your mum, but her subscription hasn’t ended yet. In that case, wait until it expires and then place the order.</p>
      <p>The technical documentation mentions one more way to pay for Stars: via Fragment, which also allows larger purchases. Check on fragment.com which payment it accepts. If you pay in UZS, you don’t need this route. Prices are on the <Link href="/stars">/stars</Link> and <Link href="/premium">/premium</Link> pages.</p>
      <h2 id="0-1-yuborsang-hamyon-ochiladi">How should you respond to “send 0.1 and your wallet opens”?</h2>
      <p>Say no. It is not officially confirmed that transferring 0.1 💎 opens a wallet. There’s no reason an official feature would require you to send money to another person’s private address.</p>
      <p>Be especially careful if you see these signs:</p>
      <ul>
        <li>a stranger or a channel admin gives you their own address “for activation”;</li>
        <li>an “activation” link asks for your Telegram login code or two-step verification password;</li>
        <li>they promise “if the wallet doesn’t open, we’ll refund you”;</li>
        <li>they rush you: “if you don’t make it today, you’ll lose your place in the queue”;</li>
        <li>a screenshot shows someone who already has the tab, but no official link is given.</li>
      </ul>
      <p>This article cannot confirm any way to get sent funds back. Under the 2019 terms, Gram transactions had to be recorded in the blockchain ledger. This article can’t confirm that today’s transfers work the same way. That’s why not sending money upfront is the safest option.</p>
      <p>If you’ve already entered a code or password, open your active sessions, end any you don’t recognise and change your password. The steps are in <Link href="/blog/telegram-nomimdan-xabar-yuborilyapti">Someone is sending messages from my Telegram</Link>.</p>
      <h2 id="telegram-yangiligini-ozingiz-qanday-tekshirasiz">How can you verify Telegram news yourself?</h2>
      <p>Rumours like the “Money” tab come up often. These five steps help you sort them out in a few minutes:</p>
      <Steps>
        <Step title={"Identify the source"}>is it from a channel post or an official page? A forwarded screenshot is not proof.</Step>
        <Step title={"Open the official site"}>telegram.org, core.telegram.org, fragment.com or ton.org. Type the address into your browser yourself instead of tapping a link in the post.</Step>
        <Step title={"Check the app update"}>read the update notes in the App Store or Google Play. If the feature isn’t mentioned there, don’t rush.</Step>
        <Step title={"Stop if money is requested"}>transferring funds to a stranger’s address to “unlock” an official feature is not normal.</Step>
        <Step title={"Leave if a code is requested"}>never type your Telegram login code or 2FA password into any website or bot.</Step>
      </Steps>
      <p>This check isn’t just for wallets. Use the same approach for messages like “free stars” or “secret gift”.</p>
      <h2 id="ilovada-money-yorligi-korinmasa-nima">What if you don’t see a “Money” tab in the app?</h2>
      <p>There’s nothing to fix. It hasn’t been confirmed that the tab is rolling out to everyone, and its absence isn’t a sign of a fault.</p>
      <p>Useful habits:</p>
      <ul>
        <li>update the app only via the App Store, Google Play or <a href={"https://telegram.org"} target="_blank" rel="noopener noreferrer">telegram.org</a>;</li>
        <li>don’t install unofficial APK files or bots that “unlock the tab”;</li>
        <li>look for your Stars balance in the same place where you saw it before.</li>
      </ul>
      <Notice label={"Important"}>There’s no official statement that a bot, file or payment is needed to unlock a “Money” tab. Don’t trust any source that offers one.</Notice>
      <p>For talk about the wallet card and how to decorate it, see <Link href="/blog/gram-hamyon-kartasi-nft-sovga-dizayn">Decorating a Gram wallet card</Link>.</p>
      <h2 id="rasmiy-elon-chiqsa-starspaymee-mijozi">If an official announcement comes, what should StarsPaymee customers watch for?</h2>
      <p>Here’s what is confirmed today: Stars, Premium and regular gifts work without a wallet. Until there’s an official announcement, the way you buy on StarsPaymee stays the same: an @username and payment in UZS.</p>
      <p>StarsPaymee is an independent service that has been running for 1.5 years. It does not claim any official affiliation with Telegram. The service doesn’t buy Stars or gifts from users. So if you get a message saying “we’ll buy the Gram or Stars in your balance on behalf of StarsPaymee”, it isn’t from us.</p>
      <p>The rules for gifts haven’t changed. Ready-made collectible (NFT) gifts are sold for UZS in the NFT Market inside the bot. Details are on the <Link href="/gifts">/gifts</Link> page and in the <Link href="/blog/starspaymee-nft-market">NFT Market</Link> article. Bots can’t send limited gifts that Telegram has removed from sale.</p>
      <p>If an official wallet announcement comes out, read it on telegram.org or core.telegram.org and see what conditions apply. For questions about an order, message <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://core.telegram.org/api/stars", label: "Telegram Stars" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://telegram.org/tos/wallet", label: "Grams Wallet" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "If the “Money” tab appears, will my Stars balance move there?", answer: "There’s no official confirmation of that. The tab is mentioned only in a channel post, while the documentation describes Stars as a separate virtual unit." },
  { question: "I don’t have a GRAM Wallet. Can I still order Stars from the bot?", answer: "Yes. @StarsPaymee_bot only needs an @username, and you pay in UZS via Click, Payme, Uzum, Paynet or UzCard/HUMO." },
  { question: "Someone I know in a group chat is asking me to send them 0.1 to open my wallet. Should I?", answer: "No. Telegram hasn’t confirmed any activation method like this, and your acquaintance may have picked it up from an unverified post." },
  { question: "I trusted the post and sent money, but the tab never appeared. What now?", answer: "There’s no confirmed way to get the funds back; all you can do is ask the recipient. If you typed a code or password along the way, end unfamiliar sessions and change your password." },
  { question: "If I gift Premium to a friend, do they need a crypto wallet?", answer: "No. Premium is linked to their @username through Telegram’s gift mechanism. The main condition is that they don’t already have an active Premium subscription." },
  { question: "Can I pay for Stars with Gram or TON?", answer: "The technical documentation lists payment via Fragment as one way to pay for Stars. Check fragment.com to see which payment it accepts. On StarsPaymee, everything is settled in UZS only." },
  { question: "In what unit is my channel’s ad revenue shown?", answer: "According to the Telegram API docs, an admin can fetch ad revenue history and balance in nanograms. There’s no official word that this revenue goes into a “Money” tab." },
  { question: "Is the 2019 Grams Wallet back?", answer: "There’s no evidence of that. The terms from that year apply to the wallet of that period and don’t confirm what today’s post claims." },
  { question: "Can I sell the Stars I’ve built up to StarsPaymee?", answer: "No, StarsPaymee doesn’t buy Stars or gifts from users. The service only sells Stars, Premium and gifts for UZS." },
  { question: "Is it risky to install an APK or bot that “unlocks” the tab?", answer: "Yes. Such a file or bot is unofficial and may ask for your account details. Update Telegram only through an official app store or telegram.org." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "howto",
  datePublished: "2026-11-07",
  dateModified: "2026-11-07",
  keywords: ["telegram money bo'limi gram wallet","gram wallet telegram","telegram money yorlig'i","gram wallet faollashtirish 0.1","telegram gram hamyon","stars uchun hamyon kerakmi","telegram stars so'mda sotib olish","вкладка деньги телеграм","gram wallet телеграм","кошелек грам в телеграм","как активировать gram wallet","телеграм старс без кошелька"],
  howToSteps: [
    { name: "Botni oching", text: "@StarsPaymee_bot yoki uning Mini App’ini ishga tushiring." },
    { name: "Mahsulotni tanlang", text: "Stars miqdori yoki Premium muddati: 3, 6 yoki 12 oy. 1 oylik tarif ham bor, narxi botda ko‘rsatiladi." },
    { name: "@username kiriting", text: "o‘zingizniki yoki sovg‘a qilmoqchi bo‘lgan odamniki. Bitta harf xato bo‘lsa, buyurtma boshqa akkauntga ketadi, shuning uchun diqqat bilan tekshiring." },
    { name: "To‘lov usulini tanlang", text: "Click, Payme, Uzum, Paynet (ilovada yoki terminalda naqd), UzCard/HUMO kartaga o‘tkazma yoki bot balansi." },
    { name: "To‘lovni tasdiqlang", text: "buyurtma odatda bir necha soniyada avtomatik yetkaziladi." },
    { name: "Natijani tekshiring", text: "Telegram’da Stars balansi yoki Premium holatiga qarang." },
  ],
  locales: {
    uz: {
      title: "Telegram «Money» bo‘limi va GRAM Wallet: Stars balansiga aloqasi bormi?",
      excerpt: "Yo‘q, Stars yoki Premium’ni so‘mda olish uchun GRAM Wallet kerak emas, «Money» yorlig‘i esa rasman tasdiqlanmagan. Maqolada post da’volari, «0.1 yuborish» xavfi va hamyonsiz xarid qadamlari bor.",
      metaTitle: "Telegram «Money» bo‘limi va GRAM Wallet",
      metaDescription: "Yo‘q, Stars yoki Premium’ni so‘mda olish uchun GRAM Wallet kerak emas, «Money» yorlig‘i esa rasman tasdiqlanmagan.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Вкладка «Money» и GRAM Wallet в Telegram: связаны ли они с балансом Stars?",
      excerpt: "Для покупки Stars или Premium за сумы GRAM Wallet не нужен, а вкладка «Money» официально не подтверждена. Разбираем заявления из поста, риск «перевода 0,1» и покупку без кошелька по шагам.",
      metaTitle: "Вкладка «Money» и GRAM Wallet в Telegram",
      metaDescription: "Для покупки Stars или Premium за сумы GRAM Wallet не нужен, а вкладка «Money» официально не подтверждена.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Telegram “Money” tab and GRAM Wallet: is it linked to your Stars balance?",
      excerpt: "No, you don’t need a GRAM Wallet to buy Stars or Premium in UZS, and the “Money” tab isn’t officially confirmed. This covers the post’s claims, the “send 0.1” risk and wallet-free buying.",
      metaTitle: "Telegram “Money” tab and GRAM Wallet",
      metaDescription: "No, you don’t need a GRAM Wallet to buy Stars or Premium in UZS, and the “Money” tab isn’t officially confirmed.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
