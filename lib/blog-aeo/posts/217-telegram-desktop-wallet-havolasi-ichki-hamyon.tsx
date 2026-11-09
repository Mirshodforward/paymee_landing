import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-desktop-wallet-havolasi-ichki-hamyon";

/**
 * Telegram Desktop’da @wallet havolasi hamyon ochsa: Stars va Premium olinadimi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-09): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Kompyuterda Telegram Desktop ishlatadigan foydalanuvchi @wallet bosilganda bot o‘rniga ichki hamyon ochilganini ko‘rib, bu kompyuterdan Stars yoki Premium’ni so‘mda olishga ta’sir qiladimi, deb «telegram desktop @wallet havolasi» so‘zi bilan qidiradi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-09):
 *   https://docs.ton.org/onboarding/wallet-apps/telegram
 *   https://docs.ton.org/onboarding/wallet-apps/deep-links
 *   https://telegram.org/blog
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
  return <p>Yo‘q, Telegram Desktop’da @wallet havolasi qaysi oynani ochishidan qat’i nazar, Stars va Premium’ni so‘mda olish tartibi o‘zgarmaydi. @StarsPaymee_bot hamyonga ham, Wallet botiga ham bog‘liq emas. U faqat @username so‘raydi. To‘lov Click, Payme, Uzum, Paynet, UzCard/HUMO kartaga o‘tkazma yoki bot balansidan qilinadi. Kompyuterdan buyurtma telefondagidek beriladi.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#hamyon-oynasi-stars-yoki-premium", label: "Hamyon oynasi Stars yoki Premium buyurtmasiga daxl qiladimi?" },
          { href: "#hamyon-bandi-har-kimda-bir", label: "Hamyon bandi har kimda bir xil chiqmaydi: bu nimani anglatadi?" },
          { href: "#ekranda-turgan-oyna-buyurtmaga-yaroqlimi", label: "Ekranda turgan oyna buyurtmaga yaroqlimi: solishtirish jadvali" },
          { href: "#kompyuterdan-stars-buyurtmasi-7-qadam", label: "Kompyuterdan Stars buyurtmasi: 7 qadam" },
          { href: "#premiumni-desktop-orqali-olish-tort", label: "Premium’ni Desktop orqali olish: to‘rt shart" },
          { href: "#xarid-uchun-hamyonda-biror-amal", label: "Xarid uchun hamyonda biror amal bajarish shartmi?" },
          { href: "#kompyuterdan-tolov-qildim-yulduz-korinmayapti", label: "Kompyuterdan to‘lov qildim, yulduz ko‘rinmayapti: qayerdan boshlash kerak?" },
          { href: "#firibgarlar-yangi-desktop-mavzusidan-qanday", label: "Firibgarlar «yangi Desktop» mavzusidan qanday foydalanadi?" },
          { href: "#rasmiy-tasdiq-chiqguncha-qanday-yol", label: "Rasmiy tasdiq chiqguncha qanday yo‘l tutish kerak?" },
        ]}
      />
      <h2 id="hamyon-oynasi-stars-yoki-premium">Hamyon oynasi Stars yoki Premium buyurtmasiga daxl qiladimi?</h2>
      <p>Telegram kanallaridan birida post chiqdi. Unda Desktop’da @wallet bosilganda endi bot emas, Telegram’ning o‘rnatilgan hamyoni ochilayotgani yozilgan. Bu post rasmiy manba emas. Telegram’ning rasmiy sahifalarida bunday yo‘naltirish hozircha tasdiqlanmagan.</p>
      <p>Hamyon kutilmaganda ochilishining esa izohi bor. TON hujjatlariga ko‘ra, o‘rnatilgan hamyon havolalari qurilmaga o‘rnatilgan Telegram ilovasidagi hamyonni ochadi. Havola boshqa ilova yoki brauzerdan bosilgan bo‘lsa ham shunday bo‘ladi (<a href={"https://docs.ton.org/onboarding/wallet-apps/deep-links"} target="_blank" rel="noopener noreferrer">TON hujjatlari: deep links</a>). Demak, saytdagi oddiy tugma ham sizni Telegram ichidagi hamyonga olib kirishi mumkin.</p>
      <p>Xarid uchun esa boshqa narsa muhim. Stars — Telegram ichidagi alohida balans. U hamyondagi tanga bilan bitta hisob emas. Stars yoki Premium’ni so‘mda olayotganingizda hamyon jarayonda qatnashmaydi. Ikki balansning farqi <Link href="/blog/telegram-wallet-va-stars-farqi">Telegram Wallet va Stars farqi</Link> maqolasida yoritilgan.</p>
      <p>Qisqasi, nima o‘zgarmaydi va nima noaniq:</p>
      <ul>
        <li><b>O‘zgarmaydi</b> — bot manzili, @username bilan buyurtma, so‘mdagi narx va avtomatik yetkazish.</li>
        <li><b>Tasdiqlanmagan</b> — bunday yo‘naltirish boshqa qurilmalarda ham bormi va u sovg‘a yoki Stars yuborishga ta’sir qiladimi.</li>
      </ul>
      <h2 id="hamyon-bandi-har-kimda-bir">Hamyon bandi har kimda bir xil chiqmaydi: bu nimani anglatadi?</h2>
      <p>TON hujjatida aniq yozilgan: Telegram Desktop’dagi o‘rnatilgan hamyon bandi faqat Telegram aynan shu akkaunt uchun hamyonga kirishni yoqqanda paydo bo‘ladi (<a href={"https://docs.ton.org/onboarding/wallet-apps/telegram"} target="_blank" rel="noopener noreferrer">Telegram Money hujjati</a>). Demak, gap dastur versiyasida emas, akkauntning o‘zida.</p>
      <p>Misol: bitta noutbukda ikki akkaunt ochilgan — shaxsiy va ish akkaunti. Shaxsiy akkauntda hamyon bandi chiqadi, ishdagisida chiqmaydi. Dastur bitta bo‘lsa ham, bu tabiiy holat. Hamyon bandi yo‘q akkaunt ham:</p>
      <ul>
        <li>Stars’ni @username orqali bemalol oladi;</li>
        <li>Premium sovg‘asini qabul qiladi;</li>
        <li>botda o‘zi uchun ham, boshqa odam uchun ham buyurtma bera oladi.</li>
      </ul>
      <p>Hamyonni «yoqib beramiz» deb xizmat taklif qiladiganlarga ishonmang. Hujjatga ko‘ra uni Telegram yoqadi, uchinchi shaxs emas. So‘mdagi xarid uchun hamyon menyusini qidirish ham, dasturning boshqa versiyasini o‘rnatish ham shart emas.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="ekranda-turgan-oyna-buyurtmaga-yaroqlimi">Ekranda turgan oyna buyurtmaga yaroqlimi: solishtirish jadvali</h2>
      <p>Desktop’da havola bosilganda turli oynalar ochilishi mumkin. Pul to‘lashdan oldin qaysi oynada ekaningizni aniqlab oling.</p>
      <CompareTable
        headers={["Ochilgan oyna", "Nima so‘raydi", "So‘mda xaridga kerakmi", "Nima qilish kerak"]}
        rows={[
          ["@StarsPaymee_bot chati yoki Mini App", "@username, miqdor yoki muddat, to‘lov usuli", "Ha", "Bot ko‘rsatgan akkaunt ismini tekshirib, to‘lang"],
          ["Telegram’ning o‘rnatilgan hamyoni", "Hamyon ichidagi amallar", "Yo‘q", "Oynani yoping va botga qayting"],
          ["Avvalgi @wallet boti chati", "Bot ichidagi amallar", "Yo‘q", "StarsPaymee buyurtmasiga aloqasi yo‘q"],
          ["Telegram ilovasining o‘z Stars xarid oynasi", "Telegram to‘lov oynasi", "Yo‘q, bu boshqa yo‘l", "So‘mda olmoqchi bo‘lsangiz, botga o‘ting"],
          ["Click, Payme yoki boshqa to‘lov tizimi sahifasi", "Ilova yoki karta orqali tasdiq", "Ha, agar unga bot yo‘naltirgan bo‘lsa", "Manzil tanlagan to‘lov tizimingizniki ekanini tekshiring"],
          ["Brauzerdagi notanish sayt", "Parol, SMS kod yoki kalit ibora", "Yo‘q", "Hech narsa kiritmang, sahifani yoping"],
        ]}
      />
      <p>Yana bir nozik jihat bor. Hamyon havolalari brauzerdan ham Telegram’ni ochib yuborishi mumkin. Shuning uchun notanish saytdagi tugmadan keyin Telegram oynasi ochilsa, bu o‘sha saytning ishonchli ekanini bildirmaydi. Oynani ochgan havola kimdan kelganini baholang.</p>
      <h2 id="kompyuterdan-stars-buyurtmasi-7-qadam">Kompyuterdan Stars buyurtmasi: 7 qadam</h2>
      <p>Telegram Desktop’dan buyurtma telefondagidan farq qilmaydi. Hamyon, xalqaro karta, kripto yoki VPN kerak emas.</p>
      <Steps>
        <Step title={"Botni qidiruvdan toping"}>qidiruv maydoniga @StarsPaymee_bot deb o‘zingiz yozing. Begona chatdagi nusxalangan havolaga tayanmang.</Step>
        <Step title={"Chat yoki Mini App’ni oching"}>ikkalasidan ham buyurtma berish mumkin.</Step>
        <Step title={"Stars bo‘limini tanlang"}>xizmatlar ro‘yxatidan Telegram Stars’ni belgilang.</Step>
        <Step title={"@username’ni kiriting"}>o‘zingizniki yoki yulduz oluvchiniki. Bot ko‘rsatgan ism kutilgan akkauntga tegishli ekanini solishtiring.</Step>
        <Step title={"Miqdorni yozing"}>eng kam buyurtma 50 Stars.</Step>
        <Step title={"To‘lov usulini tanlang"}>Click, Payme, Uzum, Paynet, UzCard/HUMO kartaga o‘tkazma yoki bot balansi.</Step>
        <Step title={"To‘lang va balansni tekshiring"}>yulduzlar oluvchining Stars balansida ko‘rinadi.</Step>
      </Steps>
      <p>Username qayerda turishini bilmasangiz, <Link href="/blog/telegram-stars-username-qanday-topiladi">username qanday topiladi va tekshiriladi</Link> maqolasiga qarang.</p>
      <p>1 ta Stars narxi to‘lov usuliga bog‘liq:</p>
      <ul>
        <li>UzCard/HUMO kartaga o‘tkazma yoki bot balansidan — {som(STARS_PER_UNIT_UZS, "uz")};</li>
        <li>Click, Payme, Uzum yoki Paynet orqali — {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}.</li>
      </ul>
      <p>Yakuniy summani bot to‘lovdan oldin ko‘rsatadi. Buyurtma odatda bir necha soniyada, taxminan 5 soniyada avtomatik yetkaziladi. Naqd to‘lamoqchi bo‘lsangiz, Paynet ilovasi yoki terminalidan foydalanish mumkin.</p>
      <p>To‘lov sahifasi brauzerda ochilsa, manzil satrida tanlagan to‘lov tizimingiz turganini ko‘ring. Barcha narx va usullar <Link href="/stars">Stars sahifasida</Link> jamlangan.</p>
      <h2 id="premiumni-desktop-orqali-olish-tort">Premium’ni Desktop orqali olish: to‘rt shart</h2>
      <p>Premium ham hamyonsiz ulanadi. Bot uni @username orqali, Telegram’ning sovg‘a mexanizmi bilan faollashtiradi. Parol, SMS kod yoki akkauntga kirish so‘ralmaydi.</p>
      <ul>
        <li><b>Narx</b> — hamma to‘lov usulida bir xil, ustamasiz: 3 oy {som(premium(3), "uz")}, 6 oy {som(premium(6), "uz")}, 12 oy {som(premium(12), "uz")}. 1 oylik tarif ham bor, narxi botda ko‘rsatiladi.</li>
        <li><b>Faol obuna yo‘qligi</b> — akkauntda Premium hali tugamagan bo‘lsa, bot yangi buyurtma ochmaydi, muddat ustiga qo‘shilmaydi. Avval <Link href="/blog/telegram-premium-tugash-sanasini-tekshirish">Premium tugash sanasini tekshiring</Link>.</li>
        <li><b>To‘g‘ri username</b> — boshqa odamga olayotgan bo‘lsangiz, username’ni undan yozma ravishda so‘rang. Ovozli xabardagi yoki rasmdagi nomdan ko‘chirmang.</li>
        <li><b>Hamyon menyusi ahamiyatsiz</b> — Desktop’da u borligi yoki yo‘qligi Premium ishlashiga ta’sir qilmaydi.</li>
      </ul>
      <p>Kompyuterdan xaridning boshqa tafsilotlari <Link href="/blog/telegram-premium-kompyuterdan-sotib-olish">Premium’ni kompyuterdan sotib olish</Link> maqolasida, tariflar esa <Link href="/premium">Premium sahifasida</Link>.</p>
      <h2 id="xarid-uchun-hamyonda-biror-amal">Xarid uchun hamyonda biror amal bajarish shartmi?</h2>
      <p>Maqsadingiz Stars yoki Premium bo‘lsa, shart emas. Hamyonni sozlash, unga mablag‘ solish yoki undagi biror amalni tasdiqlash xaridni tezlashtirmaydi va arzonlashtirmaydi. Oynani yopib, botga qaytish kifoya.</p>
      <Notice label={"Muhim"}>Hamyon ichidagi funksiyalar bu maqolada tekshirilmagan. Ma’nosini tushunmagan tugmani bosmang, ayniqsa u mablag‘ yuborish yoki biror narsani tasdiqlash bilan bog‘liq bo‘lsa.</Notice>
      <p>Hamyondagi tanga o‘z-o‘zidan Stars’ga aylanmaydi. StarsPaymee uni to‘lov sifatida ham qabul qilmaydi — bot faqat so‘mda ishlaydi. Hamyon atrofidagi boshqa gaplar va ularning Stars bilan aloqasi <Link href="/blog/telegram-money-bolimi-gram-wallet">«Money» bo‘limi va GRAM Wallet</Link> maqolasida tahlil qilingan.</p>
      <p>Hamyondan ataylab foydalanmoqchi bo‘lsangiz, yo‘riqnomani faqat rasmiy hujjatdan oling. Masalan, <a href={"https://docs.ton.org/onboarding/wallet-apps/telegram"} target="_blank" rel="noopener noreferrer">TON hujjatlaridagi Telegram hamyoni sahifasi</a>. Chatlarda tarqalgan skrinshot va «qo‘llanma»larga tayanmang.</p>
      <h2 id="kompyuterdan-tolov-qildim-yulduz-korinmayapti">Kompyuterdan to‘lov qildim, yulduz ko‘rinmayapti: qayerdan boshlash kerak?</h2>
      <p>Bunday paytda ko‘pchilik ochilib qolgan hamyon oynasidan yulduz qidiradi. Bu foydasiz: Stars hamyonga emas, Telegram’dagi alohida Stars balansiga tushadi. Quyidagi tartibda tekshiring:</p>
      <ul>
        <li>buyurtmadagi @username’ni qayta qarang — bitta harf xatosi yulduzni boshqa akkauntga yuboradi;</li>
        <li>to‘lov ilovangizda to‘lov yakunlanganini, bekor bo‘lmaganini tekshiring;</li>
        <li>yulduzni boshqa odamga olgan bo‘lsangiz, ular uning balansida ko‘rinadi, sizning balansingizda emas;</li>
        <li>qisqa kutib, Telegram Desktop’ni qayta ishga tushiring;</li>
        <li>natija bo‘lmasa, @StarsPaymeeSupport’ga yozing va to‘lov chekini ilova qiling.</li>
      </ul>
      <p>Batafsil tekshiruv ro‘yxati <Link href="/blog/telegram-stars-kelmadi-nima-qilish">Telegram Stars kelmadi: nima qilish kerak</Link> maqolasida bor.</p>
      <h2 id="firibgarlar-yangi-desktop-mavzusidan-qanday">Firibgarlar «yangi Desktop» mavzusidan qanday foydalanadi?</h2>
      <p>Har qanday yangilik haqidagi mish-mish firibgarga tayyor bahona bo‘ladi. Mana shunday xabarlar kelishi mumkin:</p>
      <ul>
        <li>«Endi kompyuterda xarid faqat hamyon orqali. Tiklash iborangizni yuboring, ulab beramiz.»</li>
        <li>«Premium Desktop’da faollashishi uchun SMS’da kelgan kodni ayting.»</li>
        <li>«Hamyonni faollashtirish uchun avval kichik summa o‘tkazing, keyin xarid ochiladi.»</li>
        <li>«StarsPaymee yulduzlaringizni sotib oladi, mana havola.»</li>
      </ul>
      <p>Bularning hammasi aldov. Asosiy qoidalar:</p>
      <ul>
        <li>kalit iborani, 2FA parolini va SMS kodni hech kimga bermang;</li>
        <li>StarsPaymee faqat @username so‘raydi, parol, kod yoki hamyon kalitini so‘ramaydi;</li>
        <li>StarsPaymee foydalanuvchidan Stars va sovg‘alarni sotib olmaydi, shuning uchun uning nomidan kelgan «sotib olamiz» taklifi soxta;</li>
        <li>shubha bo‘lsa, @StarsPaymeeSupport’ni qidiruv orqali o‘zingiz toping — xabardagi havolani bosmang.</li>
      </ul>
      <p>StarsPaymee mustaqil xizmat va Telegram nomidan gapirmaydi. Kimdir «Telegram bilan birga ishlaymiz» deb kafolat va’da qilsa, bu ham ogohlantiruvchi belgi.</p>
      <h2 id="rasmiy-tasdiq-chiqguncha-qanday-yol">Rasmiy tasdiq chiqguncha qanday yo‘l tutish kerak?</h2>
      <p>Desktop’dagi yo‘naltirish ham, uning boshqa qurilmalarga kelishi ham hozircha rasman tasdiqlanmagan. Shoshilinch qaror qabul qilishga asos yo‘q.</p>
      <p>Telegram blogida «Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More» sarlavhali e’lon bor (<a href={"https://telegram.org/blog"} target="_blank" rel="noopener noreferrer">telegram.org/blog</a>). Sarlavhasiga ko‘ra, u kolleksion sovg‘alar va blokcheyn haqida. Ammo uning Stars yoki Premium xaridiga ta’siri haqida tasdiqlangan ma’lumot yo‘q.</p>
      <p>Hozircha quyidagilarni qilmang:</p>
      <ul>
        <li>Telegram Desktop’ni notanish saytdan qayta yuklamang;</li>
        <li>«hamyonning yangi versiyasi» deb tarqatilgan fayllarni o‘rnatmang;</li>
        <li>xaridni «vaziyat oydinlashguncha» deb kechiktirmang — buyurtma hamyonga bog‘liq emas;</li>
        <li>hamyonga «ehtiyot uchun» mablag‘ o‘tkazmang.</li>
      </ul>
      <p>Rasmiy o‘zgarishlarni telegram.org blogidan va ilova ichidagi Telegram xizmat xabarlaridan kuzating. Xarid tartibi esa o‘zgarmagan: @StarsPaymee_bot, @username va so‘mdagi to‘lov.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://docs.ton.org/onboarding/wallet-apps/telegram", label: "Telegram Money — the native Gram wallet" },
          { href: "https://docs.ton.org/onboarding/wallet-apps/deep-links", label: "Deep links" },
          { href: "https://telegram.org/blog", label: "Telegram Blog" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Ishxonadagi kompyuterda Telegram Desktop’dan Stars olsam, bot hamyon so‘ramaydimi?", answer: "So‘ramaydi. Buyurtma uchun faqat @username, miqdor va so‘mdagi to‘lov usuli kerak — hamyon, kalit yoki parol talab qilinmaydi." },
  { question: "Bitta kompyuterda ikki akkauntim bor, faqat birida hamyon bandi chiqadi. Premium’ni qaysisidan olgan ma’qul?", answer: "Farqi yo‘q. Premium buyurtmadagi username’ga Telegram sovg‘asi sifatida boradi, buyurtma qaysi akkauntdan berilgani va unda hamyon borligi muhim emas." },
  { question: "Telegram hamyonimdagi tangalar bilan StarsPaymee’da to‘lay olamanmi?", answer: "Yo‘q. Bot faqat so‘m qabul qiladi: Click, Payme, Uzum, Paynet, UzCard/HUMO kartaga o‘tkazma yoki bot balansi." },
  { question: "Avval hamyonga pul solsam, Stars arzonroq tushadimi?", answer: `Yo‘q, narxga hamyon emas, to‘lov usuli ta’sir qiladi. Karta o‘tkazmasi yoki bot balansidan 1 ta Stars ${som(STARS_PER_UNIT_UZS, "uz")}, onlayn to‘lov tizimlari orqali ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}.` },
  { question: "Kompyuterda bot ichidagi Mini App ochilmayapti. Buyurtma bera olmaymanmi?", answer: "Buyurtmani bot chatining o‘zidan ham berish mumkin. Muammo qolsa, Telegram Desktop’ni rasmiy manbadan yangilang yoki @StarsPaymeeSupport’ga yozing." },
  { question: "Kompyuterda bosgan to‘lov tugmam brauzerni ochdi. Davom etaveraymi?", answer: "Avval manzil satriga qarang: u siz tanlagan to‘lov tizimiga tegishli bo‘lishi kerak. Bunday sahifada Telegram paroli yoki kodi hech qachon so‘ralmaydi." },
  { question: "Desktop’dan do‘stimga Premium olib bersam, u nimani ko‘radi?", answer: "Unga Premium Telegram’ning sovg‘a mexanizmi orqali keladi. Buyurtmadan oldin unda faol obuna yo‘qligiga ishonch hosil qiling, aks holda bot buyurtma ochmaydi." },
  { question: "Kompyuterdan eng kamida nechta Stars buyurtma qilsa bo‘ladi?", answer: "Eng kam miqdor — 50 Stars. Bu qoida telefon va kompyuter uchun bir xil." },
  { question: "Kimdir StarsPaymee nomidan yozib, hamyonning tiklash iborasini so‘rayapti. Nima qilay?", answer: "Hech narsa yubormang va suhbatni to‘xtating. StarsPaymee faqat @username so‘raydi; bu holat haqida qidiruv orqali o‘zingiz topgan @StarsPaymeeSupport’ga xabar bering." },
  { question: "To‘lovdan keyin yulduzni hamyon oynasidan qidirsam bo‘ladimi?", answer: "Yo‘q, Stars hamyonga tushmaydi, u alohida Stars balansida ko‘rinadi. U yerda bo‘lmasa, username va to‘lov holatini tekshirib, supportga chek bilan yozing." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Да, можно. Какое бы окно ни открывала ссылка @wallet в Telegram Desktop, порядок покупки Stars и Premium за сумы не меняется. @StarsPaymee_bot не зависит ни от кошелька, ни от бота Wallet — ему нужен только @username. Оплата проходит через Click, Payme, Uzum, Paynet, переводом на карту UzCard/HUMO или с баланса бота. С компьютера заказ оформляется так же, как с телефона.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#hamyon-oynasi-stars-yoki-premium", label: "Влияет ли окно кошелька на заказ Stars или Premium?" },
          { href: "#hamyon-bandi-har-kimda-bir", label: "Пункт кошелька есть не у всех: что это значит?" },
          { href: "#ekranda-turgan-oyna-buyurtmaga-yaroqlimi", label: "Подходит ли открытое окно для заказа: сравнительная таблица" },
          { href: "#kompyuterdan-stars-buyurtmasi-7-qadam", label: "Заказ Stars с компьютера: 7 шагов" },
          { href: "#premiumni-desktop-orqali-olish-tort", label: "Premium через Desktop: четыре условия" },
          { href: "#xarid-uchun-hamyonda-biror-amal", label: "Нужно ли что-то делать в кошельке для покупки?" },
          { href: "#kompyuterdan-tolov-qildim-yulduz-korinmayapti", label: "Оплатил с компьютера, а звёзд нет: с чего начать?" },
          { href: "#firibgarlar-yangi-desktop-mavzusidan-qanday", label: "Как мошенники используют тему «нового Desktop»?" },
          { href: "#rasmiy-tasdiq-chiqguncha-qanday-yol", label: "Как действовать до официального подтверждения?" },
        ]}
      />
      <h2 id="hamyon-oynasi-stars-yoki-premium">Влияет ли окно кошелька на заказ Stars или Premium?</h2>
      <p>В одном из Telegram-каналов вышел пост: якобы в Desktop по нажатию на @wallet теперь открывается не бот, а встроенный кошелёк Telegram. Этот пост — не официальный источник. На официальных страницах Telegram такое перенаправление пока не подтверждено.</p>
      <p>При этом у неожиданного появления кошелька есть объяснение. Согласно документации TON, ссылки встроенного кошелька открывают кошелёк в установленном на устройстве приложении Telegram. Так происходит, даже если ссылку нажали в другом приложении или в браузере (<a href={"https://docs.ton.org/onboarding/wallet-apps/deep-links"} target="_blank" rel="noopener noreferrer">документация TON: deep links</a>). Значит, обычная кнопка на сайте тоже может привести вас в кошелёк внутри Telegram.</p>
      <p>Для покупки важно другое. Stars — отдельный баланс внутри Telegram. Это не тот же счёт, что монеты в кошельке. Когда вы покупаете Stars или Premium за сумы, кошелёк в процессе не участвует. Разница между двумя балансами разобрана в статье <Link href="/blog/telegram-wallet-va-stars-farqi">чем Telegram Wallet отличается от Stars</Link>.</p>
      <p>Коротко — что не меняется и что пока неясно:</p>
      <ul>
        <li><b>Не меняется</b> — адрес бота, заказ по @username, цена в сумах и автоматическая доставка.</li>
        <li><b>Не подтверждено</b> — есть ли такое перенаправление на других устройствах и влияет ли оно на отправку подарков или Stars.</li>
      </ul>
      <h2 id="hamyon-bandi-har-kimda-bir">Пункт кошелька есть не у всех: что это значит?</h2>
      <p>В документации TON сказано прямо: пункт встроенного кошелька в Telegram Desktop появляется, только когда Telegram включил доступ к кошельку именно для этого аккаунта (<a href={"https://docs.ton.org/onboarding/wallet-apps/telegram"} target="_blank" rel="noopener noreferrer">документация Telegram Money</a>). То есть дело не в версии программы, а в самом аккаунте.</p>
      <p>Пример: на одном ноутбуке открыты два аккаунта — личный и рабочий. В личном пункт кошелька есть, в рабочем — нет. Программа одна и та же, и это нормальная ситуация. Аккаунт без пункта кошелька всё равно:</p>
      <ul>
        <li>спокойно получает Stars по @username;</li>
        <li>принимает Premium в подарок;</li>
        <li>может оформить заказ в боте как для себя, так и для другого человека.</li>
      </ul>
      <p>Не верьте тем, кто предлагает «включить кошелёк» за услугу. По документации его включает Telegram, а не третьи лица. Для покупки за сумы не нужно ни искать меню кошелька, ни ставить другую версию программы.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="ekranda-turgan-oyna-buyurtmaga-yaroqlimi">Подходит ли открытое окно для заказа: сравнительная таблица</h2>
      <p>В Desktop по ссылке могут открываться разные окна. Прежде чем платить, разберитесь, где вы находитесь.</p>
      <CompareTable
        headers={["Открывшееся окно", "Что запрашивает", "Нужно ли для покупки за сумы", "Что делать"]}
        rows={[
          ["Чат @StarsPaymee_bot или Mini App", "@username, количество или срок, способ оплаты", "Да", "Сверьте имя аккаунта, которое показал бот, и оплатите"],
          ["Встроенный кошелёк Telegram", "Действия внутри кошелька", "Нет", "Закройте окно и вернитесь в бота"],
          ["Чат прежнего бота @wallet", "Действия внутри бота", "Нет", "К заказу в StarsPaymee отношения не имеет"],
          ["Собственное окно покупки Stars в Telegram", "Платёжное окно Telegram", "Нет, это другой путь", "Если хотите платить в сумах, перейдите в бота"],
          ["Страница Click, Payme или другой платёжной системы", "Подтверждение через приложение или карту", "Да, если туда перенаправил бот", "Убедитесь, что адрес принадлежит выбранной платёжной системе"],
          ["Незнакомый сайт в браузере", "Пароль, SMS-код или сид-фраза", "Нет", "Ничего не вводите, закройте страницу"],
        ]}
      />
      <p>Есть ещё одна тонкость. Ссылки кошелька могут открыть Telegram даже из браузера. Поэтому если после кнопки на незнакомом сайте открылось окно Telegram, это ещё не значит, что сайт надёжный. Оценивайте, от кого пришла ссылка, открывшая окно.</p>
      <h2 id="kompyuterdan-stars-buyurtmasi-7-qadam">Заказ Stars с компьютера: 7 шагов</h2>
      <p>Заказ из Telegram Desktop ничем не отличается от заказа с телефона. Кошелёк, иностранная карта, криптовалюта или VPN не нужны.</p>
      <Steps>
        <Step title={"Найдите бота через поиск"}>сами введите @StarsPaymee_bot в строку поиска. Не полагайтесь на скопированную ссылку из чужого чата.</Step>
        <Step title={"Откройте чат или Mini App"}>заказ можно оформить в обоих.</Step>
        <Step title={"Выберите раздел Stars"}>отметьте Telegram Stars в списке услуг.</Step>
        <Step title={"Введите @username"}>свой или того, кто получит звёзды. Сверьте, что имя, которое показал бот, принадлежит нужному аккаунту.</Step>
        <Step title={"Укажите количество"}>минимальный заказ 50 Stars.</Step>
        <Step title={"Выберите способ оплаты"}>Click, Payme, Uzum, Paynet, перевод на карту UzCard/HUMO или баланс бота.</Step>
        <Step title={"Оплатите и проверьте баланс"}>звёзды появятся на балансе Stars получателя.</Step>
      </Steps>
      <p>Если не знаете, где посмотреть username, загляните в статью <Link href="/blog/telegram-stars-username-qanday-topiladi">как найти и проверить username</Link>.</p>
      <p>Цена 1 Stars зависит от способа оплаты:</p>
      <ul>
        <li>переводом на карту UzCard/HUMO или с баланса бота — {som(STARS_PER_UNIT_UZS, "ru")};</li>
        <li>через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}.</li>
      </ul>
      <p>Итоговую сумму бот показывает до оплаты. Заказ обычно доставляется автоматически за несколько секунд — примерно за 5. Если хотите заплатить наличными, используйте приложение или терминал Paynet.</p>
      <p>Если страница оплаты открылась в браузере, проверьте, что в адресной строке указана выбранная вами платёжная система. Все цены и способы собраны на <Link href="/stars">странице Stars</Link>.</p>
      <h2 id="premiumni-desktop-orqali-olish-tort">Premium через Desktop: четыре условия</h2>
      <p>Premium тоже подключается без кошелька. Бот активирует его по @username через механизм подарков Telegram. Пароль, SMS-код или вход в аккаунт не запрашиваются.</p>
      <ul>
        <li><b>Цена</b> — одинаковая при любом способе оплаты, без наценки: 3 месяца {som(premium(3), "ru")}, 6 месяцев {som(premium(6), "ru")}, 12 месяцев {som(premium(12), "ru")}. Есть и тариф на 1 месяц — цена указана в боте.</li>
        <li><b>Нет активной подписки</b> — если Premium на аккаунте ещё не закончился, бот не откроет новый заказ, срок поверх не добавится. Сначала <Link href="/blog/telegram-premium-tugash-sanasini-tekshirish">проверьте дату окончания Premium</Link>.</li>
        <li><b>Правильный username</b> — если покупаете для другого человека, попросите прислать username текстом. Не переписывайте его из голосового сообщения или со скриншота.</li>
        <li><b>Меню кошелька не важно</b> — есть оно в Desktop или нет, на работу Premium это не влияет.</li>
      </ul>
      <p>Другие подробности покупки с компьютера — в статье <Link href="/blog/telegram-premium-kompyuterdan-sotib-olish">как купить Premium с компьютера</Link>, тарифы — на <Link href="/premium">странице Premium</Link>.</p>
      <h2 id="xarid-uchun-hamyonda-biror-amal">Нужно ли что-то делать в кошельке для покупки?</h2>
      <p>Если вам нужны Stars или Premium — нет. Настройка кошелька, пополнение или подтверждение какой-либо операции в нём не ускорят и не удешевят покупку. Достаточно закрыть окно и вернуться в бота.</p>
      <Notice label={"Важно"}>Функции внутри кошелька в этой статье не проверялись. Не нажимайте кнопки, смысл которых вам непонятен, особенно если они связаны с отправкой средств или подтверждением чего-либо.</Notice>
      <p>Монеты в кошельке сами по себе не превращаются в Stars. StarsPaymee тоже не принимает их в оплату — бот работает только в сумах. Другие разговоры вокруг кошелька и их связь со Stars разобраны в статье <Link href="/blog/telegram-money-bolimi-gram-wallet">раздел «Money» и GRAM Wallet</Link>.</p>
      <p>Если вы сознательно хотите пользоваться кошельком, берите инструкции только из официальной документации — например, со <a href={"https://docs.ton.org/onboarding/wallet-apps/telegram"} target="_blank" rel="noopener noreferrer">страницы о кошельке Telegram в документации TON</a>. Не полагайтесь на скриншоты и «гайды», которые гуляют по чатам.</p>
      <h2 id="kompyuterdan-tolov-qildim-yulduz-korinmayapti">Оплатил с компьютера, а звёзд нет: с чего начать?</h2>
      <p>В такой момент многие ищут звёзды в открывшемся окне кошелька. Это бесполезно: Stars зачисляются не в кошелёк, а на отдельный баланс Stars в Telegram. Проверяйте по порядку:</p>
      <ul>
        <li>ещё раз посмотрите @username в заказе — одна опечатка отправит звёзды на другой аккаунт;</li>
        <li>в платёжном приложении убедитесь, что оплата завершена, а не отменена;</li>
        <li>если покупали звёзды другому человеку, они появятся на его балансе, а не на вашем;</li>
        <li>подождите немного и перезапустите Telegram Desktop;</li>
        <li>если результата нет, напишите в @StarsPaymeeSupport и приложите чек об оплате.</li>
      </ul>
      <p>Подробный список проверок — в статье <Link href="/blog/telegram-stars-kelmadi-nima-qilish">Telegram Stars не пришли: что делать</Link>.</p>
      <h2 id="firibgarlar-yangi-desktop-mavzusidan-qanday">Как мошенники используют тему «нового Desktop»?</h2>
      <p>Любой слух о нововведениях — готовый повод для мошенника. Могут прийти такие сообщения:</p>
      <ul>
        <li>«Теперь на компьютере покупки только через кошелёк. Пришлите сид-фразу, мы всё подключим».</li>
        <li>«Чтобы Premium активировался в Desktop, назовите код из SMS».</li>
        <li>«Для активации кошелька сначала переведите небольшую сумму, потом покупка откроется».</li>
        <li>«StarsPaymee выкупит ваши звёзды, вот ссылка».</li>
      </ul>
      <p>Всё это обман. Главные правила:</p>
      <ul>
        <li>никому не сообщайте сид-фразу, пароль 2FA и SMS-код;</li>
        <li>StarsPaymee просит только @username — пароль, код или ключ от кошелька он не запрашивает;</li>
        <li>StarsPaymee не покупает Stars и подарки у пользователей, поэтому любое предложение «выкупить» от его имени — фальшивка;</li>
        <li>если сомневаетесь, найдите @StarsPaymeeSupport через поиск сами — не переходите по ссылке из сообщения.</li>
      </ul>
      <p>StarsPaymee — независимый сервис и не говорит от имени Telegram. Если кто-то обещает гарантии со словами «мы работаем вместе с Telegram», это тоже тревожный знак.</p>
      <h2 id="rasmiy-tasdiq-chiqguncha-qanday-yol">Как действовать до официального подтверждения?</h2>
      <p>Ни перенаправление в Desktop, ни его появление на других устройствах пока официально не подтверждены. Поводов для поспешных решений нет.</p>
      <p>В блоге Telegram есть анонс под заголовком «Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More» (<a href={"https://telegram.org/blog"} target="_blank" rel="noopener noreferrer">telegram.org/blog</a>). Судя по заголовку, он посвящён коллекционным подаркам и блокчейну. Но подтверждённых данных о его влиянии на покупку Stars или Premium нет.</p>
      <p>Пока не делайте следующего:</p>
      <ul>
        <li>не скачивайте Telegram Desktop заново с незнакомых сайтов;</li>
        <li>не устанавливайте файлы, которые распространяют как «новую версию кошелька»;</li>
        <li>не откладывайте покупку «до прояснения ситуации» — заказ от кошелька не зависит;</li>
        <li>не переводите деньги в кошелёк «на всякий случай».</li>
      </ul>
      <p>Официальные изменения отслеживайте в блоге telegram.org и в служебных сообщениях Telegram внутри приложения. А порядок покупки остался прежним: @StarsPaymee_bot, @username и оплата в сумах.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://docs.ton.org/onboarding/wallet-apps/telegram", label: "Telegram Money — the native Gram wallet" },
          { href: "https://docs.ton.org/onboarding/wallet-apps/deep-links", label: "Deep links" },
          { href: "https://telegram.org/blog", label: "Telegram Blog" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Если покупать Stars из Telegram Desktop на рабочем компьютере, бот не попросит кошелёк?", answer: "Не попросит. Для заказа нужны только @username, количество и способ оплаты в сумах — ни кошелёк, ни ключи, ни пароль не требуются." },
  { question: "У меня два аккаунта на одном компьютере, пункт кошелька есть только в одном. С какого лучше покупать Premium?", answer: "Без разницы. Premium приходит подарком Telegram на username из заказа, и неважно, с какого аккаунта оформлен заказ и есть ли в нём кошелёк." },
  { question: "Можно ли оплатить StarsPaymee монетами из кошелька Telegram?", answer: "Нет. Бот принимает только сумы: Click, Payme, Uzum, Paynet, перевод на карту UzCard/HUMO или баланс бота." },
  { question: "Если сначала пополнить кошелёк, Stars выйдут дешевле?", answer: `Нет, на цену влияет не кошелёк, а способ оплаты. Переводом на карту или с баланса бота 1 Stars стоит ${som(STARS_PER_UNIT_UZS, "ru")}, через онлайн-платёжные системы — ${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}.` },
  { question: "На компьютере не открывается Mini App в боте. Значит, заказать не получится?", answer: "Заказ можно оформить и прямо в чате бота. Если проблема останется, обновите Telegram Desktop из официального источника или напишите в @StarsPaymeeSupport." },
  { question: "Кнопка оплаты на компьютере открыла браузер. Продолжать?", answer: "Сначала посмотрите на адресную строку: она должна принадлежать выбранной вами платёжной системе. На такой странице никогда не спрашивают пароль или код от Telegram." },
  { question: "Что увидит друг, если я куплю ему Premium с Desktop?", answer: "Premium придёт ему через механизм подарков Telegram. Перед заказом убедитесь, что у него нет активной подписки, иначе бот не откроет заказ." },
  { question: "Какое минимальное количество Stars можно заказать с компьютера?", answer: "Минимум — 50 Stars. Это правило одинаково для телефона и компьютера." },
  { question: "Кто-то пишет от имени StarsPaymee и просит сид-фразу от кошелька. Что делать?", answer: "Ничего не отправляйте и прекратите переписку. StarsPaymee просит только @username; сообщите об этом в @StarsPaymeeSupport, найденный вами через поиск." },
  { question: "Можно ли искать звёзды после оплаты в окне кошелька?", answer: "Нет, Stars не зачисляются в кошелёк — они видны на отдельном балансе Stars. Если их там нет, проверьте username и статус оплаты и напишите в поддержку, приложив чек." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>Yes. Whichever window the @wallet link opens in Telegram Desktop, buying Stars and Premium in Uzbek som works the same way. @StarsPaymee_bot doesn’t rely on the wallet or the Wallet bot. It only needs an @username. You pay with Click, Payme, Uzum, Paynet, a UzCard/HUMO card transfer or your bot balance. Ordering from a computer works exactly like ordering from a phone.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#hamyon-oynasi-stars-yoki-premium", label: "Does the wallet window affect your Stars or Premium order?" },
          { href: "#hamyon-bandi-har-kimda-bir", label: "Why doesn’t the wallet entry show up for everyone?" },
          { href: "#ekranda-turgan-oyna-buyurtmaga-yaroqlimi", label: "Is the window on your screen the right one for ordering? Comparison table" },
          { href: "#kompyuterdan-stars-buyurtmasi-7-qadam", label: "Ordering Stars from a computer: 7 steps" },
          { href: "#premiumni-desktop-orqali-olish-tort", label: "Buying Premium via Desktop: four conditions" },
          { href: "#xarid-uchun-hamyonda-biror-amal", label: "Do you need to do anything in the wallet to buy?" },
          { href: "#kompyuterdan-tolov-qildim-yulduz-korinmayapti", label: "Paid from a computer but no Stars showing: where to start?" },
          { href: "#firibgarlar-yangi-desktop-mavzusidan-qanday", label: "How do scammers exploit the “new Desktop” story?" },
          { href: "#rasmiy-tasdiq-chiqguncha-qanday-yol", label: "What should you do until there’s official confirmation?" },
        ]}
      />
      <h2 id="hamyon-oynasi-stars-yoki-premium">Does the wallet window affect your Stars or Premium order?</h2>
      <p>A post on one Telegram channel claimed that clicking @wallet in Desktop now opens Telegram’s built-in wallet instead of the bot. That post is not an official source. Telegram’s official pages have not confirmed this redirect so far.</p>
      <p>There is, however, an explanation for a wallet popping up unexpectedly. According to TON documentation, built-in wallet links open the wallet inside the Telegram app installed on your device. This happens even when the link is clicked in another app or a browser (<a href={"https://docs.ton.org/onboarding/wallet-apps/deep-links"} target="_blank" rel="noopener noreferrer">TON docs: deep links</a>). So an ordinary button on a website can land you inside Telegram’s wallet.</p>
      <p>For buying, something else matters. Stars are a separate balance inside Telegram. They are not the same account as the coins in a wallet. When you buy Stars or Premium in som, the wallet plays no part in the process. The difference between the two balances is covered in <Link href="/blog/telegram-wallet-va-stars-farqi">Telegram Wallet vs Stars</Link>.</p>
      <p>In short, here is what stays the same and what is unclear:</p>
      <ul>
        <li><b>Unchanged</b> — the bot’s address, ordering with an @username, the price in som and automatic delivery.</li>
        <li><b>Unconfirmed</b> — whether this redirect exists on other devices and whether it affects sending gifts or Stars.</li>
      </ul>
      <h2 id="hamyon-bandi-har-kimda-bir">Why doesn’t the wallet entry show up for everyone?</h2>
      <p>The TON documentation is clear: the built-in wallet entry in Telegram Desktop appears only when Telegram enables wallet access for that specific account (<a href={"https://docs.ton.org/onboarding/wallet-apps/telegram"} target="_blank" rel="noopener noreferrer">TON docs: Telegram Money</a>). So it depends on the account, not on the app version.</p>
      <p>Example: one laptop has two accounts logged in, a personal one and a work one. The personal account shows the wallet entry, the work account doesn’t. Even with the same app, that’s normal. An account without the wallet entry can still:</p>
      <ul>
        <li>receive Stars via its @username without any trouble;</li>
        <li>accept a Premium gift;</li>
        <li>place orders in the bot, both for itself and for someone else.</li>
      </ul>
      <p>Don’t trust anyone offering to “turn on” the wallet for you. According to the documentation, Telegram enables it, not a third party. To buy in som you don’t need to hunt for the wallet menu or install a different version of the app.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="ekranda-turgan-oyna-buyurtmaga-yaroqlimi">Is the window on your screen the right one for ordering? Comparison table</h2>
      <p>Clicking a link in Desktop can open different windows. Before paying, make sure you know which one you’re in.</p>
      <CompareTable
        headers={["Window that opened", "What it asks for", "Needed to buy in som?", "What to do"]}
        rows={[
          ["@StarsPaymee_bot chat or Mini App", "@username, amount or duration, payment method", "Yes", "Check the account name the bot shows, then pay"],
          ["Telegram’s built-in wallet", "Actions inside the wallet", "No", "Close the window and go back to the bot"],
          ["The old @wallet bot chat", "Actions inside the bot", "No", "Unrelated to a StarsPaymee order"],
          ["Telegram’s own in-app Stars purchase window", "Telegram’s payment screen", "No, that’s a different route", "To pay in som, switch to the bot"],
          ["Click, Payme or another payment system page", "Confirmation via app or card", "Yes, if the bot sent you there", "Check that the address belongs to the payment system you chose"],
          ["An unfamiliar website in your browser", "Password, SMS code or recovery phrase", "No", "Enter nothing and close the page"],
        ]}
      />
      <p>One more subtle point. Wallet links can open Telegram straight from a browser. So if a Telegram window opens after you click a button on an unfamiliar site, that doesn’t make the site trustworthy. Judge who the link that opened the window actually came from.</p>
      <h2 id="kompyuterdan-stars-buyurtmasi-7-qadam">Ordering Stars from a computer: 7 steps</h2>
      <p>Ordering from Telegram Desktop is no different from a phone. You don’t need a wallet, an international card, crypto or a VPN.</p>
      <Steps>
        <Step title={"Find the bot through search"}>type @StarsPaymee_bot into the search field yourself. Don’t rely on a link copied from someone else’s chat.</Step>
        <Step title={"Open the chat or the Mini App"}>you can order from either one.</Step>
        <Step title={"Choose the Stars section"}>pick Telegram Stars from the list of services.</Step>
        <Step title={"Enter the @username"}>yours or the recipient’s. Compare the name the bot shows with the account you expect.</Step>
        <Step title={"Enter the amount"}>the minimum order is 50 Stars.</Step>
        <Step title={"Pick a payment method"}>Click, Payme, Uzum, Paynet, a UzCard/HUMO card transfer or bot balance.</Step>
        <Step title={"Pay and check the balance"}>the Stars appear in the recipient’s Stars balance.</Step>
      </Steps>
      <p>If you’re not sure where your username is, see <Link href="/blog/telegram-stars-username-qanday-topiladi">how to find and check a username</Link>.</p>
      <p>The price of 1 Star depends on how you pay:</p>
      <ul>
        <li>UzCard/HUMO card transfer or bot balance — {som(STARS_PER_UNIT_UZS, "en")};</li>
        <li>Click, Payme, Uzum or Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "en")}.</li>
      </ul>
      <p>The bot shows the final total before you pay. Orders are usually delivered automatically within a few seconds, around 5 seconds. If you want to pay in cash, you can use the Paynet app or a Paynet terminal.</p>
      <p>If the payment page opens in your browser, check that the address bar shows the payment system you picked. All prices and methods are collected on the <Link href="/stars">Stars page</Link>.</p>
      <h2 id="premiumni-desktop-orqali-olish-tort">Buying Premium via Desktop: four conditions</h2>
      <p>Premium also activates without a wallet. The bot connects it through the @username, using Telegram’s gifting mechanism. No password, SMS code or account login is ever requested.</p>
      <ul>
        <li><b>Price</b> — the same for every payment method, with no markup: 3 months {som(premium(3), "en")}, 6 months {som(premium(6), "en")}, 12 months {som(premium(12), "en")}. There’s also a 1-month plan; its price is shown in the bot.</li>
        <li><b>No active subscription</b> — if the account still has Premium running, the bot won’t open a new order, and the time isn’t added on top. First, <Link href="/blog/telegram-premium-tugash-sanasini-tekshirish">check when Premium expires</Link>.</li>
        <li><b>Correct username</b> — if you’re buying for someone else, ask them to send their username in writing. Don’t copy it from a voice message or a screenshot.</li>
        <li><b>The wallet menu doesn’t matter</b> — whether it appears in Desktop or not has no effect on how Premium works.</li>
      </ul>
      <p>More on buying from a computer is in <Link href="/blog/telegram-premium-kompyuterdan-sotib-olish">buying Telegram Premium from a computer</Link>, and plans are listed on the <Link href="/premium">Premium page</Link>.</p>
      <h2 id="xarid-uchun-hamyonda-biror-amal">Do you need to do anything in the wallet to buy?</h2>
      <p>If your goal is Stars or Premium, no. Setting up the wallet, topping it up or confirming anything inside it won’t make your purchase faster or cheaper. Just close the window and return to the bot.</p>
      <Notice label={"Important"}>Wallet features were not tested for this article. Don’t tap buttons you don’t understand, especially ones that send funds or confirm something.</Notice>
      <p>Coins in the wallet don’t turn into Stars on their own. StarsPaymee doesn’t accept them as payment either — the bot works in som only. Other claims around the wallet and how they relate to Stars are examined in <Link href="/blog/telegram-money-bolimi-gram-wallet">the “Money” tab and GRAM Wallet</Link>.</p>
      <p>If you do want to use the wallet on purpose, take instructions only from official documentation, such as the <a href={"https://docs.ton.org/onboarding/wallet-apps/telegram"} target="_blank" rel="noopener noreferrer">Telegram wallet page in the TON docs</a>. Don’t rely on screenshots and “guides” circulating in chats.</p>
      <h2 id="kompyuterdan-tolov-qildim-yulduz-korinmayapti">Paid from a computer but no Stars showing: where to start?</h2>
      <p>In this situation many people look for their Stars in the wallet window that happened to open. That’s pointless: Stars land in Telegram’s separate Stars balance, not in the wallet. Check in this order:</p>
      <ul>
        <li>re-read the @username in your order — a single typo sends the Stars to another account;</li>
        <li>confirm in your payment app that the payment went through and wasn’t cancelled;</li>
        <li>if you bought Stars for someone else, they show up in their balance, not yours;</li>
        <li>wait a moment, then restart Telegram Desktop;</li>
        <li>if nothing changes, message @StarsPaymeeSupport and attach your payment receipt.</li>
      </ul>
      <p>A detailed checklist is in <Link href="/blog/telegram-stars-kelmadi-nima-qilish">Telegram Stars didn’t arrive: what to do</Link>.</p>
      <h2 id="firibgarlar-yangi-desktop-mavzusidan-qanday">How do scammers exploit the “new Desktop” story?</h2>
      <p>Any rumor about a new feature gives scammers a ready-made excuse. You might get messages like these:</p>
      <ul>
        <li>“Purchases on desktop now go through the wallet only. Send us your recovery phrase and we’ll connect it.”</li>
        <li>“Tell us the SMS code so Premium can activate on Desktop.”</li>
        <li>“Transfer a small amount first to activate the wallet, then purchases will unlock.”</li>
        <li>“StarsPaymee will buy your Stars, here’s the link.”</li>
      </ul>
      <p>All of these are scams. The key rules:</p>
      <ul>
        <li>never share your recovery phrase, 2FA password or SMS code with anyone;</li>
        <li>StarsPaymee asks only for an @username, never a password, code or wallet key;</li>
        <li>StarsPaymee doesn’t buy Stars or gifts from users, so any “we’ll buy them” offer in its name is fake;</li>
        <li>if in doubt, find @StarsPaymeeSupport through search yourself — don’t click the link in the message.</li>
      </ul>
      <p>StarsPaymee is an independent service and doesn’t speak on Telegram’s behalf. If someone promises guarantees by claiming “we work together with Telegram,” treat that as a warning sign too.</p>
      <h2 id="rasmiy-tasdiq-chiqguncha-qanday-yol">What should you do until there’s official confirmation?</h2>
      <p>Neither the Desktop redirect nor its arrival on other devices has been officially confirmed yet. There’s no reason to make rushed decisions.</p>
      <p>The Telegram blog has a post titled “Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More” (<a href={"https://telegram.org/blog"} target="_blank" rel="noopener noreferrer">telegram.org/blog</a>). Judging by the title, it’s about collectible gifts and the blockchain. But there’s no confirmed information on how it affects buying Stars or Premium.</p>
      <p>For now, avoid the following:</p>
      <ul>
        <li>re-downloading Telegram Desktop from an unfamiliar site;</li>
        <li>installing files passed around as a “new wallet version”;</li>
        <li>putting off your purchase “until things clear up” — orders don’t depend on the wallet;</li>
        <li>moving funds into the wallet “just in case.”</li>
      </ul>
      <p>Follow official changes on the telegram.org blog and in Telegram’s service messages inside the app. The buying process hasn’t changed: @StarsPaymee_bot, an @username and payment in som.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://docs.ton.org/onboarding/wallet-apps/telegram", label: "Telegram Money — the native Gram wallet" },
          { href: "https://docs.ton.org/onboarding/wallet-apps/deep-links", label: "Deep links" },
          { href: "https://telegram.org/blog", label: "Telegram Blog" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "If I buy Stars from Telegram Desktop on my work computer, will the bot ask for a wallet?", answer: "No. All it needs is an @username, the amount and a payment method in som — no wallet, key or password." },
  { question: "I have two accounts on one computer and only one shows the wallet entry. Which should I buy Premium from?", answer: "It makes no difference. Premium goes to the username in the order as a Telegram gift, regardless of which account placed the order or whether it has a wallet." },
  { question: "Can I pay StarsPaymee with coins from my Telegram wallet?", answer: "No. The bot accepts som only: Click, Payme, Uzum, Paynet, a UzCard/HUMO card transfer or bot balance." },
  { question: "Will Stars be cheaper if I top up the wallet first?", answer: `No — the price depends on the payment method, not the wallet. One Star costs ${som(STARS_PER_UNIT_UZS, "en")} via card transfer or bot balance and ${som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via online payment systems.` },
  { question: "The Mini App won’t open in the bot on my computer. Can I still order?", answer: "Yes, you can place the order right in the bot chat. If the problem persists, update Telegram Desktop from an official source or contact @StarsPaymeeSupport." },
  { question: "The payment button I clicked on my computer opened a browser. Should I continue?", answer: "Check the address bar first: it should belong to the payment system you selected. A page like that will never ask for your Telegram password or code." },
  { question: "If I buy Premium for a friend from Desktop, what will they see?", answer: "Premium reaches them through Telegram’s gifting mechanism. Make sure they don’t have an active subscription before ordering, otherwise the bot won’t open the order." },
  { question: "What’s the minimum number of Stars I can order from a computer?", answer: "The minimum is 50 Stars. The rule is the same on a phone and a computer." },
  { question: "Someone claiming to be StarsPaymee is asking for my wallet recovery phrase. What should I do?", answer: "Send nothing and end the conversation. StarsPaymee only ever asks for an @username; report the message to @StarsPaymeeSupport, which you should find through search yourself." },
  { question: "Should I look for my Stars in the wallet window after paying?", answer: "No, Stars never go to the wallet; they show up in the separate Stars balance. If they’re not there, check the username and payment status, then write to support with your receipt." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "howto",
  datePublished: "2026-11-09",
  dateModified: "2026-11-09",
  keywords: ["telegram desktop @wallet havolasi","telegram desktop wallet ochilmayapti","kompyuterda telegram stars sotib olish","telegram desktop ichki hamyon","telegram money desktop","kompyuterdan telegram premium olish so‘mda","telegram wallet bot o‘rniga hamyon","telegram desktop @wallet кошелёк","встроенный кошелёк telegram desktop","купить telegram stars с компьютера","telegram desktop wallet ссылка не открывает бота"],
  howToSteps: [
    { name: "Botni qidiruvdan toping", text: "qidiruv maydoniga @StarsPaymee_bot deb o‘zingiz yozing. Begona chatdagi nusxalangan havolaga tayanmang." },
    { name: "Chat yoki Mini App’ni oching", text: "ikkalasidan ham buyurtma berish mumkin." },
    { name: "Stars bo‘limini tanlang", text: "xizmatlar ro‘yxatidan Telegram Stars’ni belgilang." },
    { name: "@username’ni kiriting", text: "o‘zingizniki yoki yulduz oluvchiniki. Bot ko‘rsatgan ism kutilgan akkauntga tegishli ekanini solishtiring." },
    { name: "Miqdorni yozing", text: "eng kam buyurtma 50 Stars." },
    { name: "To‘lov usulini tanlang", text: "Click, Payme, Uzum, Paynet, UzCard/HUMO kartaga o‘tkazma yoki bot balansi." },
    { name: "To‘lang va balansni tekshiring", text: "yulduzlar oluvchining Stars balansida ko‘rinadi." },
  ],
  locales: {
    uz: {
      title: "Telegram Desktop’da @wallet havolasi hamyon ochsa: Stars va Premium olinadimi?",
      excerpt: "Ha, olinadi: hamyon ochilishi so‘mdagi xaridga ta’sir qilmaydi. Maqolada ekrandagi oynani ajratish jadvali, kompyuterdan buyurtma qadamlari, yulduz kelmasa nima qilish va firibgar xabarlar bor.",
      metaTitle: "Telegram Desktop’da @wallet havolasi hamyon ochsa",
      metaDescription: "Ha, olinadi: hamyon ochilishi so‘mdagi xaridga ta’sir qilmaydi. Maqolada ekrandagi oynani ajratish jadvali, kompyuterdan buyurtma qadamlari, yulduz kelmasa…",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "@wallet в Telegram Desktop открывает кошелёк: можно ли купить Stars и Premium?",
      excerpt: "Да, можно: открывшийся кошелёк не мешает покупке за сумы. В статье — как распознать окно на экране, шаги заказа с компьютера, что делать, если звёзды не пришли, и примеры мошеннических сообщений.",
      metaTitle: "@wallet в Telegram Desktop открывает кошелёк",
      metaDescription: "Да, можно: открывшийся кошелёк не мешает покупке за сумы. В статье — как распознать окно на экране, шаги заказа с компьютера, что делать, если звёзды не…",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Telegram Desktop @wallet Opens a Wallet: Can You Still Buy Stars and Premium?",
      excerpt: "A guide to buying Stars and Premium from Telegram Desktop when @wallet opens a wallet: which window to trust, step-by-step ordering in som, missing Stars and common scams.",
      metaTitle: "Telegram Desktop @wallet Opens a Wallet",
      metaDescription: "A guide to buying Stars and Premium from Telegram Desktop when @wallet opens a wallet: which window to trust, step-by-step ordering in som, missing Stars and…",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
