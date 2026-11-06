import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-profil-balans-tugmasi-qr-kod";

/**
 * Telegram profilidagi balans tugmasi: Stars balansini hamma ko‘radimi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-06): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Stars yoki Premium’ni so‘mda oladigan Telegram foydalanuvchisi «telegram profil balans tugmasi» deb qidiradi va beta’da aytilgan profildagi balans tugmasi, foydalanuvchi kartasi va QR-kod sozlamasi rasmiymi, Stars balansini boshqalarga ko‘rsatadimi va xaridga ta’sir qiladimi, shuni bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-06):
 *   https://telegram.org/blog/wear-gifts-blockchain-and-more
 *   https://core.telegram.org/api/gifts
 *   https://core.telegram.org/constructor/savedStarGift
 *   https://core.telegram.org/type/payments.StarGiftWithdrawalUrl
 *   https://telegram.org/blog/collectible-gifts-and-more
 *   https://translations.telegram.org/en/macos/unsorted/Gift.Withdraw.Text
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
  return <p>Yo‘q, profildagi balans tugmasi, foydalanuvchi kartasi va shaxsiy QR-kod sozlamasi hozircha rasmiy emas: ular faqat Telegram beta’sini kuzatadigan kanallar xabarida uchraydi, telegram.org va core.telegram.org’da e’lon qilinmagan. Tugma Stars balansingizni boshqalarga ko‘rsatishi ham tasdiqlanmagan. Stars va Premium’ni so‘mda olish esa avvalgidek @username bilan ishlaydi.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#balans-tugmasi-karta-va-qr", label: "Balans tugmasi, karta va QR-kod: rasmiy manbada nima bor?" },
          { href: "#stars-balansingiz-boshqalarga-korinib-qoladimi", label: "Stars balansingiz boshqalarga ko‘rinib qoladimi?" },
          { href: "#uch-xil-balans-tugma-qaysi", label: "Uch xil «balans»: tugma qaysi biriga tegishli bo‘lishi mumkin?" },
          { href: "#xaridga-tasiri-username-qr-kod", label: "Xaridga ta’siri: username, QR-kod va karta" },
          { href: "#stars-yoki-premiumni-hozir-somda", label: "Stars yoki Premium’ni hozir so‘mda olish tartibi" },
          { href: "#fragmentsiz-chiqarish-xabari-va-sovga", label: "«Fragment’siz chiqarish» xabari va sovg‘a egasi uchun amaldagi qoidalar" },
          { href: "#yangi-tugma-bahonasida-qilinadigan-aldovlar", label: "Yangi tugma bahonasida qilinadigan aldovlar: qaysi xabarga javob bermaslik kerak" },
          { href: "#mish-mishni-rasmiy-yangilikdan-ajratish", label: "Mish-mishni rasmiy yangilikdan ajratish: to‘rt joyga qarang" },
        ]}
      />
      <h2 id="balans-tugmasi-karta-va-qr">Balans tugmasi, karta va QR-kod: rasmiy manbada nima bor?</h2>
      <p>Hech narsa yo‘q. Bu funksiyalar haqidagi xabar Telegram’ning test versiyalarini kuzatadigan TBetaLeak loyihasidan chiqqan va @villageton kanalida tarqalgan. Telegram blogida ham, dasturchilar uchun hujjatlarda ham profildagi balans tugmasi, foydalanuvchi kartasi va uning bezagi yoki shaxsiy QR-kodni sozlash haqida yozuv topilmadi.</p>
      <p>Demak, ular haqida aytish mumkin bo‘lgan yagona gap — «beta kuzatuvchilari shunday deyapti». Tugma qanday ishlashi, kimga nimani ko‘rsatishi va qachon chiqishi bu maqolada tasdiqlanmagan.</p>
      <p>Beta — sinov bosqichi. U yerda ko‘ringan narsa barqaror ilovaga o‘zgarishsiz kelishi shart emas. Tugmaning nomi, joyi va vazifasi o‘zgarishi mumkin, funksiya umuman chiqmasligi ham mumkin.</p>
      <Notice label={"Muhim"}>Yangi tugmani tezroq ko‘rish uchun notanish saytdan «beta APK» yoki «mod» ilova yuklamang. Bunday fayllar orqali akkauntga kirish ma’lumotlari o‘g‘irlanishi mumkin. Rasmiy ilovani do‘kondan yangilab turish yetarli.</Notice>
      <h2 id="stars-balansingiz-boshqalarga-korinib-qoladimi">Stars balansingiz boshqalarga ko‘rinib qoladimi?</h2>
      <p>Bu savolga hozir aniq javob yo‘q. Rasmiy manbalarda tugma nimani va kimga ko‘rsatishi yozilmagan. Shuning uchun «endi hamma Stars’ingizni ko‘radi» degan gap ham, «hech kim ko‘rmaydi» degan gap ham taxmin bo‘lib qoladi.</p>
      <p>Ijtimoiy tarmoqda «balansingiz ochiq qoldi» degan ogohlantirishni ko‘rsangiz, vahimaga tushmang. Hozirgi rasmiy ilovada yangi tugma bo‘lmasa, unga bog‘liq hech narsa o‘zgarmagan.</p>
      <p>Funksiya chiqqan kuni nima qilish kerak:</p>
      <ul>
        <li>Telegram sozlamalarida Maxfiylik (Privacy) bo‘limini oching;</li>
        <li>yangi band — masalan, balans yoki karta ko‘rinishi bo‘yicha tanlov — qo‘shilgan-qo‘shilmaganini tekshiring;</li>
        <li>tanlov bo‘lsa, kim ko‘rishini o‘zingiz belgilang;</li>
        <li>profilingizni boshqa akkauntdan yoki do‘stingiz telefonidan ochib, nima ko‘rinayotganiga qarang.</li>
      </ul>
      <p>Stars balansingizni hozir qayerda ko‘rish va xarid tushganini qanday bilish haqida alohida qo‘llanma bor: <Link href="/blog/telegram-stars-balansini-tekshirish">Stars balansini tekshirish</Link>.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="uch-xil-balans-tugma-qaysi">Uch xil «balans»: tugma qaysi biriga tegishli bo‘lishi mumkin?</h2>
      <p>O‘zbekistonda Stars oladigan odam odatda uchta balans bilan ishlaydi. Ularni chalkashtirish xaridda xatoga olib keladi.</p>
      <CompareTable
        headers={["Balans", "Nima saqlanadi", "Qayerda ko‘rinadi", "Qanday to‘ldiriladi"]}
        rows={[
          ["Telegram Stars", "Yulduzlar", "Telegram ilovasidagi Stars bo‘limida", "Telegram ichida yoki @username orqali tashqi xizmatdan"],
          ["TON hamyon", "Kriptovalyuta va blokcheynga chiqarilgan kolleksion sovg‘alar", "Hamyon ilovasida", "Hamyonning o‘zi orqali"],
          ["StarsPaymee bot balansi", "So‘m", "Faqat @StarsPaymee_bot ichida", "So‘mda, botdagi to‘lov usullari bilan"],
        ]}
      />
      <p>Bot balansi — bot ichidagi so‘mdagi hisob. Undan Stars olsangiz, 1 Star narxi {som(STARS_PER_UNIT_UZS, "uz")} bo‘ladi — UzCard yoki HUMO kartaga o‘tkazmadagi narx bilan bir xil. Bu pul Telegram profilida ko‘rinmaydi.</p>
      <p>Stars olish uchun hamyon ochish shart emas: yulduzlar to‘g‘ridan-to‘g‘ri Telegram akkauntingizga tushadi. Hamyon va yulduzlar farqi batafsil bu yerda: <Link href="/blog/telegram-wallet-va-stars-farqi">Telegram Wallet va Stars farqi</Link>.</p>
      <p>Beta’dagi tugma shu uchtadan qaysi biriga tegishli ekani noma’lum. Mantiqan u Telegram ichidagi balans bo‘lishi mumkin, lekin buni ham tasdiqlab bo‘lmaydi. Bot balansi esa har qanday holatda faqat bot ichida qoladi.</p>
      <h2 id="xaridga-tasiri-username-qr-kod">Xaridga ta’siri: username, QR-kod va karta</h2>
      <p>StarsPaymee orqali buyurtma uchun faqat qabul qiluvchining @username’i kerak. QR-kod, foydalanuvchi kartasi yoki profil bezagi bu jarayonda ishtirok etmaydi. Shuning uchun beta’dagi yangiliklar chiqsa ham, chiqmasa ham xarid tartibi bir xil.</p>
      <p>Bir nechta odatiy vaziyat:</p>
      <CompareTable
        headers={["Vaziyat", "Nima qilasiz"]}
        rows={[
          ["Do‘stingiz username o‘rniga QR-kod rasmini yubordi", "Undan @nomini matn ko‘rinishida so‘rang"],
          ["Profilda username yo‘q", "Avval sozlamalarda username qo‘yiladi, keyin buyurtma beriladi"],
          ["Akkauntda faol Premium bor", "Bot yangi Premium buyurtmasini ochmaydi; obuna tugashini kuting"],
          ["50 tadan kam Stars kerak", "Eng kam buyurtma — 50 Stars"],
        ]}
      />
      <p>Misol: singlingizga tug‘ilgan kunida 100 Stars olib bermoqchisiz. Uning QR-kodi ham, kartasi qanday bezatilgani ham kerak emas. Username’ini to‘g‘ri yozasiz — yulduzlar o‘sha akkauntga tushadi.</p>
      <p>Username’ni xotiradan yozmang, profildagi @nomdan ko‘chirib oling. Bitta harf xatosi yulduzlarni begona odamga yuborishi mumkin. Username qayerda turishi va qanday tekshirilishi haqida: <Link href="/blog/telegram-stars-username-qanday-topiladi">username qanday topiladi</Link>.</p>
      <p>Yangi interfeys chiqsa ham o‘zgarmaydigan qoidalar:</p>
      <ul>
        <li>parol, SMS kod yoki akkauntga kirish so‘ralmaydi;</li>
        <li>Premium username orqali, Telegram’ning sovg‘a mexanizmi bilan ulanadi;</li>
        <li>faol Premium ustiga yangi muddat qo‘shilmaydi.</li>
      </ul>
      <h2 id="stars-yoki-premiumni-hozir-somda">Stars yoki Premium’ni hozir so‘mda olish tartibi</h2>
      <p>Xarid uchun beta kutish shart emas. Hozirgi tartib:</p>
      <Steps>
        <Step title={"Botni oching"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> yoki uning Mini App’i.</Step>
        <Step title={"Mahsulotni tanlang"}>Stars (kamida 50 ta) yoki Premium: 3 oy {som(premium(3), "uz")}, 6 oy {som(premium(6), "uz")}, 12 oy {som(premium(12), "uz")}. 1 oylik tarif ham bor, narxi botda ko‘rsatiladi.</Step>
        <Step title={"Qabul qiluvchini kiriting"}>o‘zingizning yoki yaqiningizning @username’i.</Step>
        <Step title={"To‘lov usulini tanlang"}>UzCard/HUMO kartaga o‘tkazma yoki bot balansidan 1 Star {som(STARS_PER_UNIT_UZS, "uz")}; Click, Payme, Uzum yoki Paynet orqali 1 Star {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Premium narxi hamma usulda bir xil.</Step>
        <Step title={"To‘lovni tasdiqlang"}>buyurtma odatda bir necha soniyada, taxminan 5 soniyada avtomatik yetkaziladi.</Step>
        <Step title={"Tushganini tekshiring"}>Telegram’dagi Stars balansi yoki Premium holatiga qarang. Muammo bo‘lsa, <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>ga yozing.</Step>
      </Steps>
      <p>Xalqaro karta, kripto hamyon yoki VPN kerak emas. Naqd pul bilan to‘lamoqchi bo‘lsangiz, Paynet ilovasi yoki terminali ham ishlaydi. Narx va tariflar bir joyda: <Link href="/stars">Telegram Stars</Link> va <Link href="/premium">Telegram Premium</Link>.</p>
      <h2 id="fragmentsiz-chiqarish-xabari-va-sovga">«Fragment’siz chiqarish» xabari va sovg‘a egasi uchun amaldagi qoidalar</h2>
      <p>O‘sha beta xabarlarida kolleksion sovg‘ani Fragment’ni chetlab, to‘g‘ridan-to‘g‘ri hamyonga o‘tkazish ham tilga olingan. Bu ham rasmiy tasdiqlanmagan. Amalda nima ishlashini rasmiy manbalardan bilish mumkin:</p>
      <ul>
        <li>Telegram blogiga ko‘ra, kolleksion sovg‘alarni kolleksion username va raqamlar kabi TON blokcheyni orqali boshqa egaga o‘tkazish yoki auksionga qo‘yish mumkin (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">telegram.org</a>).</li>
        <li>Dasturchilar hujjatida chiqarish joriy foydalanuvchining 2FA parolini talab qilishi va NFT’ni Fragment’da import qilish uchun havola qaytarishi yozilgan (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">core.telegram.org</a>).</li>
        <li>Ayrim sovg‘alarni hali blokcheynga chiqarib bo‘lmaydi: egasi ularni belgilangan vaqtdan keyin chiqara oladi (<a href={"https://core.telegram.org/constructor/savedStarGift"} target="_blank" rel="noopener noreferrer">core.telegram.org</a>).</li>
      </ul>
      <p>Blokcheynga o‘tgan sovg‘a ustidan nazorat egasida qoladi — hatto u Telegram akkauntiga kira olmay qolsa yoki uni o‘chirsa ham. TON hamyondagi sovg‘ani tashqi xizmatlarga, masalan auksion saytlariga ulash mumkin. Sovg‘a Telegram profilida ko‘rsatilganda ham egalik TON hamyonda qoladi.</p>
      <p>Oddiy sovg‘ani kolleksionga aylantirish oz miqdordagi Stars turadi va bu Stars blokcheyn to‘lovlarini qoplaydi (<a href={"https://telegram.org/blog/collectible-gifts-and-more"} target="_blank" rel="noopener noreferrer">telegram.org</a>). Chiqarishning aniq narxi va kutish muddati bu maqolada tasdiqlanmagan.</p>
      <p>Sovg‘ani profilda ko‘rsatish haqida: <Link href="/blog/telegram-sovgani-profilga-qoyish">sovg‘ani profilga qo‘yish</Link>. Tayyor kolleksion sovg‘a kerak bo‘lsa, ular botdagi NFT Market’da so‘mda sotiladi: <Link href="/gifts">Telegram sovg‘alari</Link>. StarsPaymee esa Stars va sovg‘alarni foydalanuvchidan sotib olmaydi.</p>
      <h2 id="yangi-tugma-bahonasida-qilinadigan-aldovlar">Yangi tugma bahonasida qilinadigan aldovlar: qaysi xabarga javob bermaslik kerak</h2>
      <p>Har bir beta mish-mishidan keyin firibgarlar shu mavzuni o‘lja qiladi. Quyidagi takliflarga javob bermang:</p>
      <ul>
        <li><b>«Balans tugmasini yoki chiroyli kartani hozir yoqib beramiz»</b> — Telegram’ning ichki funksiyasini begona odam akkauntingizda yoqib bera olmaydi.</li>
        <li><b>Login kodi, 2FA paroli yoki SMS so‘rash</b> — suhbatni shu yerda tugating. StarsPaymee bularni so‘ramaydi.</li>
        <li><b>«Yangi QR-kodingizni skanerlab tasdiqlang»</b> — soxta QR-kod orqali sizdan begona qurilmadagi kirish seansini tasdiqlatish mumkin.</li>
        <li><b>«Sovg‘ani Fragment’siz chiqarib beramiz»</b> — bunday funksiya rasmiy tasdiqlanmagan ekan, va’daning o‘zi shubhali.</li>
        <li><b>«Beta’ga kirish uchun Stars yuboring»</b> — ilova yangilanishlarini do‘kondan oling, «kirish chiptasi» sotayotganlarga ishonmang.</li>
      </ul>
      <p>Agar kodni allaqachon kiritib qo‘ygan bo‘lsangiz, sozlamalardagi faol seanslarni ko‘rib, notanishlarini yoping va 2FA parolini yangilang. Boshqa xavf belgilari: <Link href="/blog/telegram-stars-xavfsizmi">Telegram Stars xavfsizmi</Link>.</p>
      <h2 id="mish-mishni-rasmiy-yangilikdan-ajratish">Mish-mishni rasmiy yangilikdan ajratish: to‘rt joyga qarang</h2>
      <p>Kanalda ko‘rgan yangilikka ishonishdan oldin to‘rtta joyni tekshiring:</p>
      <ul>
        <li><b>Telegram blogi va hujjatlari</b> — <a href={"https://telegram.org/blog"} target="_blank" rel="noopener noreferrer">Telegram blogi</a> va <a href={"https://core.telegram.org"} target="_blank" rel="noopener noreferrer">core.telegram.org</a>. Leak kanallari faqat ishora beradi.</li>
        <li><b>Ilova do‘konidagi yangilanish izohi</b> — App Store yoki Google Play’dagi rasmiy Telegram sahifasida «Nima yangi» qismi.</li>
        <li><b>Ilovaning o‘zi</b> — funksiya sizning ilovangizda paydo bo‘lmaguncha unga bog‘liq qaror qilmang. Masalan, balansni «yashirish» uchun hech narsa sotib olmang.</li>
        <li><b>Xizmat kanali</b> — StarsPaymee’dagi xarid tartibi bo‘yicha xabarlarni <a href={"https://t.me/StarsPaymee"} target="_blank" rel="noopener noreferrer">@StarsPaymee</a> kanalida kuzatib boring.</li>
      </ul>
      <p>Yangilik shu joylarning birortasida ham bo‘lmasa, uni mish-mish deb hisoblang va xaridingizni odatdagidek username orqali davom ettiring.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://core.telegram.org/constructor/savedStarGift", label: "savedStarGift" },
          { href: "https://core.telegram.org/type/payments.StarGiftWithdrawalUrl", label: "payments.StarGiftWithdrawalUrl" },
          { href: "https://telegram.org/blog/collectible-gifts-and-more", label: "Collectible Gifts, Message Search Filters and More" },
          { href: "https://translations.telegram.org/en/macos/unsorted/Gift.Withdraw.Text", label: "Translations" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Tanishim profilida balans tugmasi borligini aytyapti, menda esa yo‘q. Nega?", answer: "U test versiyasidan foydalanayotgan yoki boshqa tugmani nazarda tutayotgan bo‘lishi mumkin. Bu funksiya rasmiy e’lon qilinmagan, shuning uchun oddiy ilovada uni kutish erta." },
  { question: "Tugma chiqsa, Stars’ni shu tugma orqali so‘mda olsa bo‘ladimi?", answer: "Tugmaning vazifasi hali noma’lum. So‘mda xarid hozir ham @StarsPaymee_bot’da username kiritib, to‘lov usulini tanlash bilan amalga oshadi." },
  { question: "Do‘stimga Stars yoki Premium’ni uning QR-kodi orqali olib bersam bo‘ladimi?", answer: "Yo‘q, botga QR-kod rasmi emas, @username matni kerak. Do‘stingizdan nomini yozib yuborishini so‘rang va harflarini tekshiring." },
  { question: "Foydalanuvchi kartasini bezash pullik bo‘ladimi?", answer: "Kartaning o‘zi ham rasmiy tasdiqlanmagan, narxi haqida esa umuman ma’lumot yo‘q. Hozirdan «bezak» sotayotganlardan uzoq turing." },
  { question: "Stars balansimni boshqalardan yashira olamanmi?", answer: "Hozirgi rasmiy ilovada balansni ko‘rsatadigan yangi tugma yo‘q, demak yashiradigan narsa ham yo‘q. Funksiya chiqsa, Maxfiylik bo‘limida yangi sozlama paydo bo‘lgan-bo‘lmaganini ko‘ring." },
  { question: "Beta versiyaga o‘tsam, olgan Stars yoki Premium’im yo‘qoladimi?", answer: "Yulduzlar va obuna ilova versiyasiga emas, akkauntga tegishli. Xavfli joyi — notanish saytdan olingan soxta beta fayl, u akkauntni o‘g‘irlashi mumkin." },
  { question: "Botdagi so‘m balansim Telegram profilimda chiqadimi?", answer: "Yo‘q, u faqat @StarsPaymee_bot ichida ko‘rinadi. Shu balansdan Stars olganingizdagina yulduzlar Telegram’dagi Stars bo‘limiga tushadi." },
  { question: "Kolleksion sovg‘amni hamyonga chiqarish uchun hozir nima tayyorlash kerak?", answer: "Akkauntda 2FA paroli yoqilgan bo‘lishi kerak, chunki chiqarish uni so‘raydi. Rasmiy hujjatga ko‘ra jarayon Fragment’dagi import havolasi orqali o‘tadi, ayrim sovg‘alar esa faqat belgilangan vaqtdan keyin chiqariladi." },
  { question: "Do‘stimda faol Premium bor, unga yana Premium sovg‘a qilsam bo‘ladimi?", answer: "Botda yo‘q: faol obunasi bor akkauntga yangi Premium buyurtmasi ochilmaydi. Obuna tugaganidan keyin qayta buyurtma bering." },
  { question: "Kimdir «beta funksiyani yoqib beraman» deb kod so‘rasa, nima qilay?", answer: "Kodni bermang va suhbatni to‘xtating. Agar kodni yuborib qo‘ygan bo‘lsangiz, faol seanslarni tekshirib, notanishlarini yoping va 2FA parolini almashtiring." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Нет, кнопка баланса в профиле, карточка пользователя и настройка личного QR-кода пока не официальны. О них пишут только каналы, которые следят за бета-версиями Telegram, а на telegram.org и core.telegram.org их не анонсировали. Что кнопка будет показывать ваш баланс Stars другим, тоже не подтверждено. Покупка Stars и Premium за сумы по-прежнему работает через @username.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#balans-tugmasi-karta-va-qr", label: "Кнопка баланса, карточка и QR-код: что есть в официальных источниках?" },
          { href: "#stars-balansingiz-boshqalarga-korinib-qoladimi", label: "Увидят ли другие ваш баланс Stars?" },
          { href: "#uch-xil-balans-tugma-qaysi", label: "Три разных «баланса»: к какому может относиться кнопка?" },
          { href: "#xaridga-tasiri-username-qr-kod", label: "Как это влияет на покупку: username, QR-код и карточка" },
          { href: "#stars-yoki-premiumni-hozir-somda", label: "Как купить Stars или Premium за сумы сейчас" },
          { href: "#fragmentsiz-chiqarish-xabari-va-sovga", label: "Новость о «выводе без Fragment» и действующие правила для владельца подарка" },
          { href: "#yangi-tugma-bahonasida-qilinadigan-aldovlar", label: "Обман под предлогом новой кнопки: на какие сообщения не отвечать" },
          { href: "#mish-mishni-rasmiy-yangilikdan-ajratish", label: "Как отличить слух от официальной новости: проверьте четыре места" },
        ]}
      />
      <h2 id="balans-tugmasi-karta-va-qr">Кнопка баланса, карточка и QR-код: что есть в официальных источниках?</h2>
      <p>Ничего. Сообщение об этих функциях появилось в проекте TBetaLeak, который отслеживает тестовые версии Telegram, и разошлось через канал @villageton. Ни в блоге Telegram, ни в документации для разработчиков не нашлось упоминаний о кнопке баланса в профиле, карточке пользователя и её оформлении или о настройке личного QR-кода.</p>
      <p>Поэтому единственное, что о них можно сказать, — «так утверждают наблюдатели за бетой». Как работает кнопка, что и кому она показывает и когда выйдет, в этой статье не подтверждено.</p>
      <p>Бета — это этап тестирования. То, что там появилось, не обязательно попадёт в стабильную версию без изменений. Название, место и назначение кнопки могут поменяться, а функция может и вовсе не выйти.</p>
      <Notice label={"Важно"}>Не скачивайте «бета-APK» или «мод» с незнакомых сайтов, чтобы увидеть новую кнопку раньше других. Через такие файлы крадут данные для входа в аккаунт. Достаточно вовремя обновлять официальное приложение из магазина.</Notice>
      <h2 id="stars-balansingiz-boshqalarga-korinib-qoladimi">Увидят ли другие ваш баланс Stars?</h2>
      <p>Точного ответа сейчас нет. В официальных источниках не написано, что и кому будет показывать кнопка. Поэтому и «теперь все увидят ваши Stars», и «никто ничего не увидит» — пока лишь предположения.</p>
      <p>Если в соцсетях попадётся предупреждение вроде «ваш баланс теперь открыт», не паникуйте. Пока новой кнопки нет в официальном приложении, ничего связанного с ней не изменилось.</p>
      <p>Что сделать в день, когда функция выйдет:</p>
      <ul>
        <li>откройте в настройках Telegram раздел «Конфиденциальность» (Privacy);</li>
        <li>проверьте, появился ли новый пункт — например, выбор видимости баланса или карточки;</li>
        <li>если выбор есть, сами решите, кто может это видеть;</li>
        <li>откройте свой профиль с другого аккаунта или с телефона друга и посмотрите, что отображается.</li>
      </ul>
      <p>Где сейчас смотреть баланс Stars и как понять, что покупка зачислена, — в отдельной инструкции: <Link href="/blog/telegram-stars-balansini-tekshirish">как проверить баланс Stars</Link>.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="uch-xil-balans-tugma-qaysi">Три разных «баланса»: к какому может относиться кнопка?</h2>
      <p>Тот, кто покупает Stars в Узбекистане, обычно имеет дело с тремя балансами. Если их путать, при покупке легко ошибиться.</p>
      <CompareTable
        headers={["Баланс", "Что хранится", "Где виден", "Как пополняется"]}
        rows={[
          ["Telegram Stars", "Звёзды", "В разделе Stars в приложении Telegram", "Внутри Telegram или через внешний сервис по @username"],
          ["TON-кошелёк", "Криптовалюта и выведенные в блокчейн коллекционные подарки", "В приложении кошелька", "Через сам кошелёк"],
          ["Баланс бота StarsPaymee", "Сумы", "Только внутри @StarsPaymee_bot", "В сумах, способами оплаты в боте"],
        ]}
      />
      <p>Баланс бота — это счёт в сумах внутри бота. Если покупать Stars с него, 1 звезда стоит {som(STARS_PER_UNIT_UZS, "ru")} — столько же, сколько при переводе на карту UzCard или HUMO. В профиле Telegram эти деньги не отображаются.</p>
      <p>Кошелёк для покупки Stars не нужен: звёзды зачисляются прямо на ваш аккаунт Telegram. Подробнее о разнице между кошельком и звёздами: <Link href="/blog/telegram-wallet-va-stars-farqi">Telegram Wallet и Stars — в чём разница</Link>.</p>
      <p>К какому из трёх балансов относится кнопка из беты, неизвестно. Логично предположить, что к балансу внутри Telegram, но и это подтвердить нельзя. Баланс бота в любом случае остаётся только в боте.</p>
      <h2 id="xaridga-tasiri-username-qr-kod">Как это влияет на покупку: username, QR-код и карточка</h2>
      <p>Для заказа через StarsPaymee нужен только @username получателя. QR-код, карточка пользователя и оформление профиля в этом не участвуют. Поэтому порядок покупки не изменится, выйдут новинки из беты или нет.</p>
      <p>Несколько обычных ситуаций:</p>
      <CompareTable
        headers={["Ситуация", "Что делать"]}
        rows={[
          ["Друг прислал картинку с QR-кодом вместо username", "Попросите прислать @имя текстом"],
          ["В профиле нет username", "Сначала задайте username в настройках, потом оформляйте заказ"],
          ["На аккаунте активен Premium", "Бот не откроет новый заказ Premium — дождитесь окончания подписки"],
          ["Нужно меньше 50 Stars", "Минимальный заказ — 50 Stars"],
        ]}
      />
      <p>Пример: вы хотите подарить сестре 100 Stars на день рождения. Ни её QR-код, ни оформление карточки не нужны. Правильно указываете username — звёзды приходят на этот аккаунт.</p>
      <p>Не вводите username по памяти, скопируйте @имя из профиля. Одна опечатка — и звёзды уйдут чужому человеку. Где найти username и как его проверить: <Link href="/blog/telegram-stars-username-qanday-topiladi">как узнать username</Link>.</p>
      <p>Правила, которые не изменятся даже с новым интерфейсом:</p>
      <ul>
        <li>пароль, SMS-код и доступ к аккаунту не запрашиваются;</li>
        <li>Premium подключается по username через механизм подарков Telegram;</li>
        <li>новый срок поверх активного Premium не добавляется.</li>
      </ul>
      <h2 id="stars-yoki-premiumni-hozir-somda">Как купить Stars или Premium за сумы сейчас</h2>
      <p>Ждать бету для покупки не нужно. Текущий порядок:</p>
      <Steps>
        <Step title={"Откройте бота"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> или его Mini App.</Step>
        <Step title={"Выберите товар"}>Stars (от 50 штук) или Premium: 3 месяца {som(premium(3), "ru")}, 6 месяцев {som(premium(6), "ru")}, 12 месяцев {som(premium(12), "ru")}. Есть и тариф на 1 месяц, цена указана в боте.</Step>
        <Step title={"Укажите получателя"}>свой @username или username близкого человека.</Step>
        <Step title={"Выберите способ оплаты"}>перевод на карту UzCard/HUMO или оплата с баланса бота: 1 звезда {som(STARS_PER_UNIT_UZS, "ru")}; через Click, Payme, Uzum или Paynet: 1 звезда {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Цена Premium одинакова при любом способе.</Step>
        <Step title={"Подтвердите оплату"}>заказ обычно доставляется автоматически за несколько секунд, примерно за 5.</Step>
        <Step title={"Проверьте зачисление"}>посмотрите баланс Stars или статус Premium в Telegram. Если что-то не так, напишите в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</Step>
      </Steps>
      <p>Международная карта, криптокошелёк или VPN не нужны. Хотите заплатить наличными — подойдёт приложение или терминал Paynet. Цены и тарифы в одном месте: <Link href="/stars">Telegram Stars</Link> и <Link href="/premium">Telegram Premium</Link>.</p>
      <h2 id="fragmentsiz-chiqarish-xabari-va-sovga">Новость о «выводе без Fragment» и действующие правила для владельца подарка</h2>
      <p>В тех же сообщениях из беты упоминался вывод коллекционного подарка прямо в кошелёк, в обход Fragment. Это тоже официально не подтверждено. Что работает на практике, можно узнать из официальных источников:</p>
      <ul>
        <li>По данным блога Telegram, коллекционные подарки, как и коллекционные username и номера, можно передать другому владельцу или выставить на аукцион через блокчейн TON (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">telegram.org</a>).</li>
        <li>В документации для разработчиков сказано, что вывод требует 2FA-пароля текущего пользователя и возвращает ссылку для импорта NFT на Fragment (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">core.telegram.org</a>).</li>
        <li>Некоторые подарки пока нельзя вывести в блокчейн: владелец сможет сделать это после указанного времени (<a href={"https://core.telegram.org/constructor/savedStarGift"} target="_blank" rel="noopener noreferrer">core.telegram.org</a>).</li>
      </ul>
      <p>Контроль над подарком в блокчейне остаётся у владельца — даже если он потеряет доступ к аккаунту Telegram или удалит его. Подарок в TON-кошельке можно подключать к внешним сервисам, например к аукционным площадкам. Даже когда такой подарок отображается в профиле Telegram, право собственности остаётся за TON-кошельком.</p>
      <p>Улучшение обычного подарка до коллекционного стоит небольшое количество Stars, которые идут на покрытие комиссий блокчейна (<a href={"https://telegram.org/blog/collectible-gifts-and-more"} target="_blank" rel="noopener noreferrer">telegram.org</a>). Точная стоимость вывода и сроки ожидания в этой статье не подтверждены.</p>
      <p>Как показать подарок в профиле: <Link href="/blog/telegram-sovgani-profilga-qoyish">как поставить подарок в профиль</Link>. Если нужен готовый коллекционный подарок, их продают за сумы в NFT Market внутри бота: <Link href="/gifts">подарки Telegram</Link>. При этом StarsPaymee не выкупает Stars и подарки у пользователей.</p>
      <h2 id="yangi-tugma-bahonasida-qilinadigan-aldovlar">Обман под предлогом новой кнопки: на какие сообщения не отвечать</h2>
      <p>После каждого слуха о бете мошенники используют его как приманку. Не отвечайте на такие предложения:</p>
      <ul>
        <li><b>«Включим кнопку баланса или красивую карточку прямо сейчас»</b> — посторонний человек не может включить внутреннюю функцию Telegram в вашем аккаунте.</li>
        <li><b>Просьба прислать код входа, 2FA-пароль или SMS</b> — сразу заканчивайте разговор. StarsPaymee ничего из этого не запрашивает.</li>
        <li><b>«Отсканируйте и подтвердите свой новый QR-код»</b> — через поддельный QR-код вас могут заставить подтвердить вход с чужого устройства.</li>
        <li><b>«Выведем подарок без Fragment»</b> — раз такая функция официально не подтверждена, само обещание подозрительно.</li>
        <li><b>«Отправьте Stars, чтобы попасть в бету»</b> — обновления берите в магазине приложений и не верьте тем, кто продаёт «входной билет».</li>
      </ul>
      <p>Если вы уже ввели код, откройте в настройках список активных сеансов, завершите незнакомые и смените 2FA-пароль. Другие признаки опасности: <Link href="/blog/telegram-stars-xavfsizmi">безопасны ли Telegram Stars</Link>.</p>
      <h2 id="mish-mishni-rasmiy-yangilikdan-ajratish">Как отличить слух от официальной новости: проверьте четыре места</h2>
      <p>Прежде чем верить новости из канала, проверьте четыре источника:</p>
      <ul>
        <li><b>Блог и документация Telegram</b> — <a href={"https://telegram.org/blog"} target="_blank" rel="noopener noreferrer">блог Telegram</a> и <a href={"https://core.telegram.org"} target="_blank" rel="noopener noreferrer">core.telegram.org</a>. Каналы с утечками дают лишь намёк.</li>
        <li><b>Описание обновления в магазине приложений</b> — раздел «Что нового» на официальной странице Telegram в App Store или Google Play.</li>
        <li><b>Само приложение</b> — пока функция не появилась у вас, не принимайте решений, связанных с ней. Например, ничего не покупайте, чтобы «скрыть» баланс.</li>
        <li><b>Канал сервиса</b> — новости о порядке покупки в StarsPaymee публикуются в канале <a href={"https://t.me/StarsPaymee"} target="_blank" rel="noopener noreferrer">@StarsPaymee</a>.</li>
      </ul>
      <p>Если новости нет ни в одном из этих мест, считайте её слухом и продолжайте покупать как обычно — по username.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://core.telegram.org/constructor/savedStarGift", label: "savedStarGift" },
          { href: "https://core.telegram.org/type/payments.StarGiftWithdrawalUrl", label: "payments.StarGiftWithdrawalUrl" },
          { href: "https://telegram.org/blog/collectible-gifts-and-more", label: "Collectible Gifts, Message Search Filters and More" },
          { href: "https://translations.telegram.org/en/macos/unsorted/Gift.Withdraw.Text", label: "Translations" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Знакомый говорит, что у него в профиле есть кнопка баланса, а у меня нет. Почему?", answer: "Возможно, он пользуется тестовой версией или имеет в виду другую кнопку. Официально функцию не анонсировали, так что ждать её в обычном приложении пока рано." },
  { question: "Когда кнопка появится, можно будет через неё купить Stars за сумы?", answer: "Назначение кнопки пока неизвестно. Купить за сумы можно уже сейчас: в @StarsPaymee_bot указываете username и выбираете способ оплаты." },
  { question: "Можно купить другу Stars или Premium по его QR-коду?", answer: "Нет, боту нужна не картинка с QR-кодом, а @username текстом. Попросите друга написать своё имя и сверьте буквы." },
  { question: "Оформление карточки пользователя будет платным?", answer: "Сама карточка официально не подтверждена, а о цене нет вообще никакой информации. Держитесь подальше от тех, кто уже продаёт «оформление»." },
  { question: "Могу ли я скрыть свой баланс Stars от других?", answer: "В текущем официальном приложении нет новой кнопки, показывающей баланс, а значит, и скрывать нечего. Когда функция выйдет, проверьте, появилась ли новая настройка в разделе «Конфиденциальность»." },
  { question: "Если перейти на бету, пропадут ли купленные Stars или Premium?", answer: "Звёзды и подписка привязаны к аккаунту, а не к версии приложения. Опасность в другом — поддельный бета-файл с незнакомого сайта может украсть аккаунт." },
  { question: "Будет ли баланс в сумах из бота виден в моём профиле Telegram?", answer: "Нет, он отображается только внутри @StarsPaymee_bot. В раздел Stars в Telegram звёзды попадут лишь тогда, когда вы купите их с этого баланса." },
  { question: "Что подготовить, чтобы вывести коллекционный подарок в кошелёк?", answer: "В аккаунте должен быть включён 2FA-пароль — вывод его запрашивает. По официальной документации процесс идёт через ссылку для импорта на Fragment, а некоторые подарки можно вывести только после указанного времени." },
  { question: "У друга активен Premium. Можно подарить ему ещё один?", answer: "Через бот — нет: на аккаунт с действующей подпиской новый заказ Premium не оформляется. Сделайте заказ после того, как подписка закончится." },
  { question: "Что делать, если кто-то просит код, обещая «включить функцию из беты»?", answer: "Не отправляйте код и прекратите переписку. Если код уже отправлен, проверьте активные сеансы, завершите незнакомые и смените 2FA-пароль." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>No. The profile balance button, user card and personal QR code settings are not official yet. They appear only in posts from channels that track Telegram betas and have not been announced on telegram.org or core.telegram.org. There is also no confirmation that the button would show your Stars balance to other people. Buying Stars and Premium in UZS still works the same way, with a @username.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#balans-tugmasi-karta-va-qr", label: "Balance button, card and QR code: what do official sources say?" },
          { href: "#stars-balansingiz-boshqalarga-korinib-qoladimi", label: "Will other people be able to see your Stars balance?" },
          { href: "#uch-xil-balans-tugma-qaysi", label: "Three kinds of “balance”: which one could the button refer to?" },
          { href: "#xaridga-tasiri-username-qr-kod", label: "How it affects buying: username, QR code and card" },
          { href: "#stars-yoki-premiumni-hozir-somda", label: "How to buy Stars or Premium in UZS right now" },
          { href: "#fragmentsiz-chiqarish-xabari-va-sovga", label: "The “withdraw without Fragment” report and the current rules for gift owners" },
          { href: "#yangi-tugma-bahonasida-qilinadigan-aldovlar", label: "Scams riding on the new button: which messages not to answer" },
          { href: "#mish-mishni-rasmiy-yangilikdan-ajratish", label: "Telling rumors from official news: check four places" },
        ]}
      />
      <h2 id="balans-tugmasi-karta-va-qr">Balance button, card and QR code: what do official sources say?</h2>
      <p>Nothing. The reports come from TBetaLeak, a project that follows Telegram’s test builds, and spread through the @villageton channel. Neither the Telegram blog nor the developer documentation mentions a profile balance button, a user card or its decoration, or personal QR code customization.</p>
      <p>So the only accurate statement is “beta watchers say so.” How the button would work, what it would show and to whom, and when it might ship are not confirmed in this article.</p>
      <p>A beta is a testing stage. Things seen there don’t have to reach the stable app unchanged. The button’s name, location and purpose may change, and the feature may never ship at all.</p>
      <Notice label={"Important"}>Don’t download a “beta APK” or a “modded” app from an unknown site just to see the new button sooner. Files like these can be used to steal your login details. Updating the official app from the store is enough.</Notice>
      <h2 id="stars-balansingiz-boshqalarga-korinib-qoladimi">Will other people be able to see your Stars balance?</h2>
      <p>There’s no clear answer right now. Official sources don’t say what the button shows or to whom. That means both “everyone will see your Stars now” and “nobody will see them” are guesses.</p>
      <p>If you see a social media warning that “your balance is now public,” don’t panic. If the button isn’t in your current official app, nothing tied to it has changed.</p>
      <p>What to do if and when the feature ships:</p>
      <ul>
        <li>open Privacy in Telegram’s settings;</li>
        <li>check whether a new option has appeared, for example one for balance or card visibility;</li>
        <li>if there is an option, choose who can see it yourself;</li>
        <li>open your profile from another account or a friend’s phone and look at what’s actually visible.</li>
      </ul>
      <p>There’s a separate guide on where to find your Stars balance today and how to confirm a purchase arrived: <Link href="/blog/telegram-stars-balansini-tekshirish">checking your Stars balance</Link>.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="uch-xil-balans-tugma-qaysi">Three kinds of “balance”: which one could the button refer to?</h2>
      <p>People in Uzbekistan who buy Stars usually deal with three different balances. Mixing them up leads to purchase mistakes.</p>
      <CompareTable
        headers={["Balance", "What it holds", "Where you see it", "How you top it up"]}
        rows={[
          ["Telegram Stars", "Stars", "In the Stars section of the Telegram app", "Inside Telegram or from an outside service via @username"],
          ["TON wallet", "Cryptocurrency and collectible gifts moved to the blockchain", "In the wallet app", "Through the wallet itself"],
          ["StarsPaymee bot balance", "UZS", "Only inside @StarsPaymee_bot", "In UZS, using the bot’s payment methods"],
        ]}
      />
      <p>The bot balance is an account in UZS inside the bot. If you buy Stars from it, 1 Star costs {som(STARS_PER_UNIT_UZS, "en")}, the same as with a UzCard or HUMO card transfer. This money never appears on your Telegram profile.</p>
      <p>You don’t need a wallet to get Stars: they go straight to your Telegram account. The difference between a wallet and Stars is covered in detail here: <Link href="/blog/telegram-wallet-va-stars-farqi">Telegram Wallet vs Stars</Link>.</p>
      <p>Which of these three the beta button refers to is unknown. Logically it might be the in-Telegram balance, but even that can’t be confirmed. The bot balance stays inside the bot no matter what.</p>
      <h2 id="xaridga-tasiri-username-qr-kod">How it affects buying: username, QR code and card</h2>
      <p>A StarsPaymee order needs only the recipient’s @username. A QR code, user card or profile decoration plays no part in the process. So whether or not the beta features ship, the buying process stays the same.</p>
      <p>A few common situations:</p>
      <CompareTable
        headers={["Situation", "What to do"]}
        rows={[
          ["Your friend sent a QR code image instead of a username", "Ask them to send their @name as text"],
          ["The profile has no username", "Set a username in settings first, then place the order"],
          ["The account already has active Premium", "The bot won’t open a new Premium order; wait for the subscription to end"],
          ["You need fewer than 50 Stars", "The minimum order is 50 Stars"],
        ]}
      />
      <p>Example: you want to give your sister 100 Stars for her birthday. You don’t need her QR code or to know how her card is decorated. You enter her username correctly, and the Stars land on that account.</p>
      <p>Don’t type a username from memory; copy it from the @name on the profile. A single wrong letter can send the Stars to a stranger. Where to find a username and how to check it: <Link href="/blog/telegram-stars-username-qanday-topiladi">how to find a username</Link>.</p>
      <p>Rules that stay the same even with a new interface:</p>
      <ul>
        <li>no password, SMS code or account login is ever requested;</li>
        <li>Premium is activated via username, through Telegram’s gifting mechanism;</li>
        <li>a new term is not added on top of active Premium.</li>
      </ul>
      <h2 id="stars-yoki-premiumni-hozir-somda">How to buy Stars or Premium in UZS right now</h2>
      <p>There’s no need to wait for a beta. Here’s the current process:</p>
      <Steps>
        <Step title={"Open the bot"}><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> or its Mini App.</Step>
        <Step title={"Choose the product"}>Stars (at least 50) or Premium: 3 months {som(premium(3), "en")}, 6 months {som(premium(6), "en")}, 12 months {som(premium(12), "en")}. A 1-month plan is also available; its price is shown in the bot.</Step>
        <Step title={"Enter the recipient"}>your own @username or that of someone close to you.</Step>
        <Step title={"Choose a payment method"}>UzCard/HUMO card transfer or bot balance at {som(STARS_PER_UNIT_UZS, "en")} per Star; Click, Payme, Uzum or Paynet at {som(STARS_PER_UNIT_GATEWAY_UZS, "en")} per Star. The Premium price is the same with every method.</Step>
        <Step title={"Confirm the payment"}>the order is usually delivered automatically within a few seconds, about 5 seconds.</Step>
        <Step title={"Check that it arrived"}>look at your Stars balance or Premium status in Telegram. If something’s wrong, message <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</Step>
      </Steps>
      <p>No international card, crypto wallet or VPN is needed. To pay in cash, the Paynet app or a Paynet terminal works too. Prices and plans in one place: <Link href="/stars">Telegram Stars</Link> and <Link href="/premium">Telegram Premium</Link>.</p>
      <h2 id="fragmentsiz-chiqarish-xabari-va-sovga">The “withdraw without Fragment” report and the current rules for gift owners</h2>
      <p>The same beta reports also mention moving a collectible gift straight to a wallet, bypassing Fragment. This isn’t officially confirmed either. What actually works today can be learned from official sources:</p>
      <ul>
        <li>According to the Telegram blog, collectible gifts, like collectible usernames and numbers, can be transferred to another owner or auctioned via the TON blockchain (<a href={"https://telegram.org/blog/wear-gifts-blockchain-and-more"} target="_blank" rel="noopener noreferrer">telegram.org</a>).</li>
        <li>The developer documentation says withdrawal requires the current user’s 2FA password and returns a link for importing the NFT on Fragment (<a href={"https://core.telegram.org/api/gifts"} target="_blank" rel="noopener noreferrer">core.telegram.org</a>).</li>
        <li>Some gifts can’t be exported to the blockchain yet: the owner can export them after a set time (<a href={"https://core.telegram.org/constructor/savedStarGift"} target="_blank" rel="noopener noreferrer">core.telegram.org</a>).</li>
      </ul>
      <p>Once a gift is on the blockchain, the owner keeps control of it, even if they lose access to their Telegram account or delete it. A gift in a TON wallet can be connected to outside services, such as auction sites. Even when the gift is displayed on a Telegram profile, ownership stays with the TON wallet.</p>
      <p>Upgrading a regular gift to a collectible costs a small amount of Stars, which covers blockchain fees (<a href={"https://telegram.org/blog/collectible-gifts-and-more"} target="_blank" rel="noopener noreferrer">telegram.org</a>). The exact cost of withdrawal and the waiting time are not confirmed in this article.</p>
      <p>On showing gifts on your profile: <Link href="/blog/telegram-sovgani-profilga-qoyish">putting a gift on your profile</Link>. If you want a ready-made collectible gift, they’re sold in UZS in the bot’s NFT Market: <Link href="/gifts">Telegram gifts</Link>. Note that StarsPaymee does not buy Stars or gifts from users.</p>
      <h2 id="yangi-tugma-bahonasida-qilinadigan-aldovlar">Scams riding on the new button: which messages not to answer</h2>
      <p>After every beta rumor, scammers turn the topic into bait. Don’t respond to offers like these:</p>
      <ul>
        <li><b>“We’ll turn on the balance button or a fancy card for you right now”</b> — no outsider can enable a built-in Telegram feature on your account.</li>
        <li><b>Requests for a login code, 2FA password or SMS</b> — end the conversation there. StarsPaymee never asks for these.</li>
        <li><b>“Scan your new QR code to confirm”</b> — a fake QR code can trick you into approving a login session on someone else’s device.</li>
        <li><b>“We’ll withdraw your gift without Fragment”</b> — since no such feature is officially confirmed, the promise itself is a red flag.</li>
        <li><b>“Send Stars to get beta access”</b> — get app updates from the store and don’t trust anyone selling an “entry ticket.”</li>
      </ul>
      <p>If you’ve already entered a code, review active sessions in settings, terminate any you don’t recognize and change your 2FA password. More warning signs: <Link href="/blog/telegram-stars-xavfsizmi">is Telegram Stars safe</Link>.</p>
      <h2 id="mish-mishni-rasmiy-yangilikdan-ajratish">Telling rumors from official news: check four places</h2>
      <p>Before believing news you saw in a channel, check four places:</p>
      <ul>
        <li><b>Telegram’s blog and documentation</b> — the <a href={"https://telegram.org/blog"} target="_blank" rel="noopener noreferrer">Telegram blog</a> and <a href={"https://core.telegram.org"} target="_blank" rel="noopener noreferrer">core.telegram.org</a>. Leak channels only give hints.</li>
        <li><b>The update notes in the app store</b> — the “What’s New” section on the official Telegram page in the App Store or Google Play.</li>
        <li><b>The app itself</b> — don’t make decisions based on a feature until it shows up in your own app. For example, don’t buy anything to “hide” your balance.</li>
        <li><b>The service’s channel</b> — follow updates on StarsPaymee’s buying process in the <a href={"https://t.me/StarsPaymee"} target="_blank" rel="noopener noreferrer">@StarsPaymee</a> channel.</li>
      </ul>
      <p>If the news isn’t in any of these places, treat it as a rumor and keep buying as usual, via username.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://telegram.org/blog/wear-gifts-blockchain-and-more", label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More" },
          { href: "https://core.telegram.org/api/gifts", label: "Telegram Gifts" },
          { href: "https://core.telegram.org/constructor/savedStarGift", label: "savedStarGift" },
          { href: "https://core.telegram.org/type/payments.StarGiftWithdrawalUrl", label: "payments.StarGiftWithdrawalUrl" },
          { href: "https://telegram.org/blog/collectible-gifts-and-more", label: "Collectible Gifts, Message Search Filters and More" },
          { href: "https://translations.telegram.org/en/macos/unsorted/Gift.Withdraw.Text", label: "Translations" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "A friend says they have a balance button on their profile, but I don’t. Why?", answer: "They may be using a test build or talking about a different button. The feature hasn’t been officially announced, so it’s too early to expect it in the regular app." },
  { question: "If the button ships, will I be able to buy Stars in UZS through it?", answer: "What the button does is still unknown. Buying in UZS today works through @StarsPaymee_bot: you enter a username and pick a payment method." },
  { question: "Can I buy Stars or Premium for a friend using their QR code?", answer: "No, the bot needs the @username as text, not a QR code image. Ask your friend to type out their name and double-check the letters." },
  { question: "Will decorating the user card cost money?", answer: "The card itself isn’t officially confirmed, and there’s no information about any price. Stay away from anyone already selling “decorations.”" },
  { question: "Can I hide my Stars balance from other people?", answer: "The current official app has no new button that shows your balance, so there’s nothing to hide. If the feature ships, check whether a new option appears under Privacy." },
  { question: "If I switch to a beta version, will I lose the Stars or Premium I bought?", answer: "Stars and subscriptions belong to your account, not to the app version. The real danger is a fake beta file from an unknown site, which can be used to hijack your account." },
  { question: "Will my UZS balance in the bot appear on my Telegram profile?", answer: "No, it’s visible only inside @StarsPaymee_bot. Stars reach the Stars section in Telegram only when you actually buy them with that balance." },
  { question: "What do I need to prepare now to move my collectible gift to a wallet?", answer: "Your account needs a 2FA password enabled, because the withdrawal asks for it. According to the official documentation, the process goes through an import link on Fragment, and some gifts can only be exported after a set time." },
  { question: "My friend has active Premium. Can I gift them Premium again?", answer: "Not through the bot: it won’t open a new Premium order for an account with an active subscription. Place the order again once the subscription has ended." },
  { question: "Someone offers to “enable the beta feature” and asks for a code. What should I do?", answer: "Don’t share the code and stop the conversation. If you’ve already sent it, check active sessions, end any you don’t recognize and change your 2FA password." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "howto",
  datePublished: "2026-11-06",
  dateModified: "2026-11-06",
  keywords: ["telegram profil balans tugmasi","telegram balans tugmasi","telegram foydalanuvchi kartasi","telegram qr kod sozlash","telegram beta yangiliklari","telegram stars balansi ko‘rinadimi","кнопка баланса в профиле telegram","карта пользователя telegram","персональный qr-код telegram","telegram beta новые функции","баланс звезд telegram видят ли другие","перевод подарков в кошелек без fragment"],
  howToSteps: [
    { name: "Botni oching", text: "@StarsPaymee_bot yoki uning Mini App’i." },
    { name: "Mahsulotni tanlang", text: `Stars (kamida 50 ta) yoki Premium: 3 oy ${som(premium(3), "uz")}, 6 oy ${som(premium(6), "uz")}, 12 oy ${som(premium(12), "uz")}. 1 oylik tarif ham bor, narxi botda ko‘rsatiladi.` },
    { name: "Qabul qiluvchini kiriting", text: "o‘zingizning yoki yaqiningizning @username’i." },
    { name: "To‘lov usulini tanlang", text: `UzCard/HUMO kartaga o‘tkazma yoki bot balansidan 1 Star ${som(STARS_PER_UNIT_UZS, "uz")}; Click, Payme, Uzum yoki Paynet orqali 1 Star ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Premium narxi hamma usulda bir xil.` },
    { name: "To‘lovni tasdiqlang", text: "buyurtma odatda bir necha soniyada, taxminan 5 soniyada avtomatik yetkaziladi." },
    { name: "Tushganini tekshiring", text: "Telegram’dagi Stars balansi yoki Premium holatiga qarang. Muammo bo‘lsa, @StarsPaymeeSupportga yozing." },
  ],
  locales: {
    uz: {
      title: "Telegram profilidagi balans tugmasi: Stars balansini hamma ko‘radimi?",
      excerpt: "Yo‘q, profildagi balans tugmasi, karta va QR-kod sozlamasi hozircha rasmiy emas. Maqolada ular Stars maxfiyligi va @username orqali so‘mdagi xaridga qanday ta’sir qilishi tushuntiriladi.",
      metaTitle: "Telegram profilidagi balans tugmasi",
      metaDescription: "Yo‘q, profildagi balans tugmasi, karta va QR-kod sozlamasi hozircha rasmiy emas. Maqolada ular Stars maxfiyligi va @username orqali so‘mdagi xaridga qanday…",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Кнопка баланса в профиле Telegram: увидят ли все ваш баланс Stars?",
      excerpt: "Нет, кнопка баланса в профиле, карточка пользователя и настройка QR-кода пока не официальны. Разбираем, как они связаны с приватностью Stars и покупкой за сумы по @username.",
      metaTitle: "Кнопка баланса в профиле Telegram",
      metaDescription: "Нет, кнопка баланса в профиле, карточка пользователя и настройка QR-кода пока не официальны. Разбираем, как они связаны с приватностью Stars и покупкой за…",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Telegram profile balance button: can everyone see your Stars balance?",
      excerpt: "No — the balance button, user card and personal QR code settings on Telegram profiles aren’t official yet. Here’s how they relate to Stars privacy and to buying Stars in UZS with just a @username.",
      metaTitle: "Telegram profile balance button",
      metaDescription: "No — the balance button, user card and personal QR code settings on Telegram profiles aren’t official yet.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
