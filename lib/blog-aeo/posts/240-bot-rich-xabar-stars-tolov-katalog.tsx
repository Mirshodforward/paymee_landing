import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "bot-rich-xabar-stars-tolov-katalog";

/**
 * Bot rich xabarida Stars to‘lov: katalog va invoice birga ishlaydimi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-18): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Telegram’da Stars evaziga raqamli mahsulot yoki obuna sotadigan bot yoki kanal egasi Bot API’dagi yangi rich xabarlarni (jadval, rasm, slaydshou) katalog va narx ko‘rsatishda ishlata oladimi, ular Stars invoice’i va to‘lov tugmasi bilan birga ishlaydimi — shuni «bot rich xabar stars to‘lov» kabi so‘zlar bilan qidiradi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-18):
 *   https://core.telegram.org/bots/api-changelog
 *   https://core.telegram.org/bots/api
 *
 * Narxlar konstantalardan: lib/products.ts (qo'lda raqam yozilmagan).
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/\u202f/g, "\u00a0");
const som = (n: number, locale: Locale) => `${fmt(n, locale)} ${{ uz: "so‘m", ru: "сум", en: "som" }[locale]}`;

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return <p>Ha, rich xabarni katalog va narx vitrinasi sifatida ishlatsa bo‘ladi. Lekin to‘lovni hozircha alohida Stars invoice’i bilan olishni rejalashtirgan ma’qul. Bot API 10.1 o‘zgarishlar ro‘yxatida rich xabarga invoice yoki to‘lov tugmasini biriktirish haqida gap yo‘q. Ishonchli sxema bunday: rich katalog, mahsulot tanlovi, oddiy invoice, to‘lov tasdig‘i va rich chek.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#rich-xabar-ichida-stars-bilan", label: "Rich xabar ichida Stars bilan to‘lov olsa bo‘ladimi?" },
          { href: "#qaysi-rich-blok-katalogning-qaysi", label: "Qaysi rich blok katalogning qaysi qismiga mos?" },
          { href: "#narx-va-chegirmani-matnda-qanday", label: "Narx va chegirmani matnda qanday bezash mumkin?" },
          { href: "#katalogdan-tolovgacha-zanjir-qanday-quriladi", label: "Katalogdan to‘lovgacha zanjir qanday quriladi?" },
          { href: "#obuna-sotsangiz-tariflarni-qanday-korsatgan", label: "Obuna sotsangiz, tariflarni qanday ko‘rsatgan ma’qul?" },
          { href: "#narx-ozgarsa-eski-katalog-xabarini", label: "Narx o‘zgarsa, eski katalog xabarini tahrirlash mumkinmi?" },
          { href: "#ai-maslahatchi-tarif-tavsiya-qilsa", label: "AI-maslahatchi tarif tavsiya qilsa, oqimli javob qanday yordam beradi?" },
          { href: "#ishga-tushirishdan-oldin-hujjatda-nimani", label: "Ishga tushirishdan oldin hujjatda nimani o‘zingiz tekshirasiz?" },
          { href: "#katalogingiz-mijozda-ishonch-uygotishi-uchun", label: "Katalogingiz mijozda ishonch uyg‘otishi uchun nima qilish kerak?" },
          { href: "#stars-invoiceingizni-sinash-uchun-yulduzni", label: "Stars invoice’ingizni sinash uchun yulduzni so‘mda qayerdan olasiz?" },
        ]}
      />
      <h2 id="rich-xabar-ichida-stars-bilan">Rich xabar ichida Stars bilan to‘lov olsa bo‘ladimi?</h2>
      <p>2026-yil 11-iyunda chiqqan Bot API 10.1 botlarga Rich Messages qo‘llab-quvvatlashini qo‘shdi. Rasmiy ta’rifga ko‘ra, botlar endi yuqori darajada tuzilgan matn yubora oladi, AI yaratgan javobni esa oqim tarzida, bo‘lakma-bo‘lak chiqara oladi. Bunday xabar yangi sendRichMessage metodi bilan yuboriladi.</p>
      <p>O‘zgarishlarning to‘liq ro‘yxati <a href={"https://core.telegram.org/bots/api-changelog"} target="_blank" rel="noopener noreferrer">Bot API changelog</a> sahifasida. U yerdagi bandlarda rich xabarga invoice, to‘lov tugmasi yoki Stars narxini biriktirish haqida hech narsa aytilmagan. sendRichMessage qaysi parametrlarni qabul qilishi bu maqolada tasdiqlanmagan. Metod tavsifini <a href={"https://core.telegram.org/bots/api"} target="_blank" rel="noopener noreferrer">Bot API hujjatida</a> o‘zingiz ochib ko‘ring.</p>
      <p>Shuning uchun ikki vazifani bir-biridan ajrating:</p>
      <ul>
        <li><b>rich xabar — vitrina</b>: mahsulot, narx, namunalar, shartlar;</li>
        <li><b>invoice — kassa</b>: Stars’da to‘lov va uning tasdig‘i.</li>
      </ul>
      <p>Telegram kanallarida tarqalgan xabarlarda yangilanish qisqagina «botlar endi chiroyli xabar yuboradi» deb ta’riflanadi. Bot egasi uchun esa asosiy savol bezak emas, sotuv zanjiri. Invoice’ni texnik jihatdan ulash <Link href="/blog/telegram-botga-stars-tolovini-ulash">botga Stars to‘lovini ulash</Link> maqolasida alohida yoritilgan.</p>
      <h2 id="qaysi-rich-blok-katalogning-qaysi">Qaysi rich blok katalogning qaysi qismiga mos?</h2>
      <p>Changelog’da rich xabarlar uchun bir nechta blok sanab o‘tilgan. Bundan tashqari, jadval katagi uchun RichBlockTableCell, izoh uchun RichBlockCaption klassi qo‘shilgan. Raqamli mahsulot sotadigan botda ularni taxminan quyidagicha taqsimlash mumkin:</p>
      <CompareTable
        headers={["Blok", "Katalogdagi vazifasi", "Amaliy misol"]}
        rows={[
          ["RichBlockTable, RichBlockTableCell", "Tariflar va paketlar jadvali", "«1 oy / 3 oy / 12 oy» obuna qatorlari va Stars’dagi narx ustuni"],
          ["RichBlockSlideshow", "Namunalar galereyasi", "Kurs darslaridan kadrlar, shablon yoki stiker to‘plami sahifalari"],
          ["RichBlockPhoto, RichBlockCaption", "Muqova va qisqa tavsif", "Elektron kitob muqovasi va uning ostida bir gaplik izoh"],
          ["RichBlockDetails", "Yashirib-ochiladigan bo‘lim", "«Nima kiradi?», «Qaytarish shartlari»"],
          ["RichBlockAnimation", "Qisqa demo", "Shablon yoki filtr qanday ishlashini ko‘rsatish"],
          ["RichBlockAudio", "Tinglab ko‘rish", "Audio-kurs yoki podkastdan parcha"],
          ["RichBlockMap", "Joy ko‘rsatish", "Oflayn master-klass chiptasi sotilsa, o‘tkaziladigan manzil"],
        ]}
      />
      <p>Raqamli mahsulotda RichBlockMap kam kerak bo‘ladi. Katalogni rejalashtirishda faqat hujjatda o‘z ko‘zingiz bilan ko‘rgan bloklarga tayaning. Ro‘yxatda yo‘q media turi bor deb hisoblab, butun vitrinani unga qurmang.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="narx-va-chegirmani-matnda-qanday">Narx va chegirmani matnda qanday bezash mumkin?</h2>
      <p>Matn uchun RichText klassi qo‘shilgan, uslublar esa alohida klasslar bo‘lib keladi: qalin, kursiv, tagiga chizilgan, o‘chirilgan (strikethrough) va spoyler. Katalogda ularni shunday ishlatish mumkin:</p>
      <ul>
        <li><b>Eski va yangi narx</b> — oldingi narx o‘chirilgan uslubda, uning yonida yangisi qalin.</li>
        <li><b>Bonus haqida ishora</b> — spoyler ostida, mijoz bosganda ochiladi. Bu himoya emas, shunchaki vizual effekt.</li>
        <li><b>Muhim shart</b> — tagiga chizilgan, masalan: «kirish havolasi faqat to‘lovdan keyin yuboriladi».</li>
        <li><b>Paket tarkibi</b> — 2026-yil 14-iyulda chiqqan Bot API 10.2 da yuboriladigan ro‘yxat elementi uchun InputRichBlockListItem klassi qo‘shildi. Paket ichidagi narsalarni band-band yozishga aynan shu mos keladi.</li>
      </ul>
      <p>Bir ogohlantirish: o‘chirilgan «eski narx» haqiqatan amalda bo‘lgan bo‘lishi kerak. Hech qachon bo‘lmagan narxni chizib qo‘ysangiz, bu soxta chegirma bo‘ladi. Mijoz ishonchini yo‘qotasiz, shikoyatlar ham kelishi mumkin.</p>
      <h2 id="katalogdan-tolovgacha-zanjir-qanday-quriladi">Katalogdan to‘lovgacha zanjir qanday quriladi?</h2>
      <p>Quyidagi tartib hujjatda tasdiqlangan metodlarga tayanadi. Tasdiqlanmagan joylar ochiq belgilab qo‘yilgan.</p>
      <Steps>
        <Step title={"Kutubxonani yangilang"}>botingiz ishlatadigan Bot API kutubxonasi 10.1 va undan keyingi versiya metodlarini qo‘llashini tekshiring. Kutubxona eski bo‘lsa, unda yangi metod va klasslar bo‘lmasligi mumkin.</Step>
        <Step title={"Katalog xabarini yuboring"}>sendRichMessage bilan jadval, slaydshou va tavsifni bitta vitrinaga jamlang.</Step>
        <Step title={"Tanlovni alohida qabul qiling"}>tanlash tugmalarini rich xabarga biriktirish mumkinligi tasdiqlanmagan. Muqobil yo‘l: katalog ostida oddiy xabardagi tugmalar yoki /buy_1, /buy_2 kabi buyruqlar.</Step>
        <Step title={"Invoice yuboring"}>tanlangan mahsulot uchun Stars invoice’ini odatdagi to‘lov metodi bilan alohida xabarda yuboring. Tafsilotlar <Link href="/blog/botga-tolov-api-ulash-qollanma">to‘lov API qo‘llanmasida</Link>.</Step>
        <Step title={"To‘lovni tekshiring"}>mahsulotni faqat Telegram’dan to‘lov muvaffaqiyatli o‘tgani haqida xabar botga kelgandan keyin bering. Mijozning skrinshoti yoki «to‘ladim» degan gapi dalil bo‘lmaydi.</Step>
        <Step title={"Chekni rich xabar qiling"}>to‘lovdan keyin kvitansiya, kirish havolasi va foydalanish ko‘rsatmasini rich formatda yuborsa bo‘ladi: buyurtma tarkibi jadvalda, qo‘llanma Details blokida.</Step>
      </Steps>
      <p>Shunda mijoz vitrina, kassa va chekni bitta chatda ko‘radi. Siz esa rich xabar to‘lov bilan qanday bog‘lanishi haqidagi noaniqlikka qaram bo‘lib qolmaysiz.</p>
      <h2 id="obuna-sotsangiz-tariflarni-qanday-korsatgan">Obuna sotsangiz, tariflarni qanday ko‘rsatgan ma’qul?</h2>
      <p>Obuna — bir martalik fayl emas, muddatli kirish. Shuning uchun katalogda mijoz uch narsani darhol ko‘rishi kerak: muddat, narx va kirish qanday beriladi.</p>
      <ul>
        <li><b>Jadvalda muddatlar</b> — har bir qator alohida tarif: muddat, Stars’dagi narx va qisqa izoh («yopiq kanalga kirish», «haftalik darslar»).</li>
        <li><b>Details blokida shartlar</b> — muddat tugagach nima bo‘lishi, kirish havolasi qachon yuborilishi, qaytarish tartibi.</li>
        <li><b>Har tarifga alohida invoice</b> — mijoz qatorni tanlaydi, bot faqat o‘sha tarif summasida invoice yuboradi. «Kerakli summani o‘zingiz yozing» degan umumiy yo‘l chalkashlik keltiradi.</li>
      </ul>
      <p>Yopiq kanalga Stars bilan pullik kirishni Telegram vositalari orqali tashkil qilish haqida <Link href="/blog/telegram-pullik-kanal-stars-obuna">pullik kanal va Stars obuna</Link> maqolasida yozilgan. Rich katalog bu yerda ham faqat vitrina vazifasini bajaradi.</p>
      <h2 id="narx-ozgarsa-eski-katalog-xabarini">Narx o‘zgarsa, eski katalog xabarini tahrirlash mumkinmi?</h2>
      <p>Mumkin. editMessageText metodiga rich_message parametri qo‘shilgan va u rich xabarlarni tahrirlashga imkon beradi. Demak, qadalgan katalogni har safar o‘chirib, qayta yuborish shart emas: jadvaldagi narx katagini yangilash yetarli.</p>
      <p>Message klassiga ham rich_message maydoni qo‘shilgan. Hujjatga ko‘ra, bu maydon xabar rich formatda ekanini bildiradi. Bot uchun bu qulay: xabar rich bo‘lsa, rich usulda tahrirlanadi, oddiy bo‘lsa — odatdagidek.</p>
      <p>Bitta nozik joy bor. Katalogdagi raqam faqat ko‘rinish uchun, mijoz to‘laydigan summa esa invoice’da belgilanadi. Narxni oshirsangiz yoki tushirsangiz:</p>
      <ul>
        <li>invoice yaratadigan koddagi narxni ham shu zahoti o‘zgartiring;</li>
        <li>avval yuborilgan, hali to‘lanmagan invoice’lar eski summada qolgan bo‘lishi mumkin — kerak bo‘lsa, mijozga yangisini yuboring;</li>
        <li>mijozda savol tug‘ilmasligi uchun jadvalga narx yangilangan sanani yozib qo‘ying.</li>
      </ul>
      <h2 id="ai-maslahatchi-tarif-tavsiya-qilsa">AI-maslahatchi tarif tavsiya qilsa, oqimli javob qanday yordam beradi?</h2>
      <p>sendRichMessageDraft metodi hali to‘liq tayyor bo‘lmagan rich xabarni oqim tarzida yuborishga imkon beradi. Ya’ni javob birdaniga emas, xuddi yozilayotgandek asta-sekin paydo bo‘ladi.</p>
      <p>Sotuvdan misol: mijoz «Menga qaysi tarif mos?» deb yozadi. AI-maslahatchi javobni bo‘laklab chiqaradi va oxirida mos keladigan ikki-uchta tarifni kichik jadvalda ko‘rsatadi. Mijoz savolining kerakli joylarini iqtibos qilib keltirish ham mumkin: ReplyParameters’dagi quote_rich_texts orqali jami 1 024 belgigacha bo‘lgan 32 tagacha iqtibos ko‘rsatiladi.</p>
      <p>Ehtiyot bo‘lish kerak bo‘lgan joylar:</p>
      <ul>
        <li>draft qaysi chat turlarida ishlashi bu maqolada tasdiqlanmagan, shuning uchun sinab ko‘rmaguningizcha unga tayanmang;</li>
        <li>to‘lov taklifini oqim ichida bermang: javob tugagach, alohida invoice yuboring;</li>
        <li>AI matnida karta raqami, tashqi to‘lov havolasi yoki mijozni chatdan chetga olib chiqadigan gaplar chiqmasligi uchun filtr qo‘ying.</li>
      </ul>
      <h2 id="ishga-tushirishdan-oldin-hujjatda-nimani">Ishga tushirishdan oldin hujjatda nimani o‘zingiz tekshirasiz?</h2>
      <Notice label={"Muhim"}>Rasmiy manba sifatida faqat core.telegram.org sahifalariga tayaning. Kanal postlaridagi havolalar eskirgan bo‘lishi mumkin, o‘zgarishlar tarixi esa changelog sahifasida saqlanadi.</Notice>
      <p>Quyidagilar bu maqolada tasdiqlanmagan, ularni katalogni ishga tushirishdan oldin o‘zingiz aniqlang:</p>
      <ul>
        <li><b>Cheklovlar</b> — bitta xabardagi bloklar soni, matn uzunligi va slaydshoudagi media soni haqida ma’lumot topilmadi. Katta katalogni bo‘limlarga ajrating va bir necha xabarda yuboring.</li>
        <li><b>Qayerda ko‘rinadi</b> — shaxsiy chat, guruh va kanalda qanday ishlashi, qaysi ilova versiyalarida to‘liq ko‘rinishi aniqlanmagan. Mahsulot nomi va narxi bezaksiz ham tushunarli bo‘lsin.</li>
        <li><b>To‘lov bilan bog‘lanishi</b> — rich xabarga to‘lov tugmasi yoki invoice biriktirish tasdiqlanmagan. Hujjatda o‘z ko‘zingiz bilan ko‘rmaguningizcha mijozlarga «bir bosishda to‘lov» deb va’da bermang.</li>
        <li><b>Metodlar tavsifi</b> — sendRichMessage, RichBlockTable, RichBlockSlideshow va boshqa klasslarning to‘liq tavsifi bu maqolada tekshirilmagan.</li>
      </ul>
      <h2 id="katalogingiz-mijozda-ishonch-uygotishi-uchun">Katalogingiz mijozda ishonch uyg‘otishi uchun nima qilish kerak?</h2>
      <p>Jadval va slaydshouni istalgan bot yasay oladi, shuning uchun bezakning o‘zi sotuvchiga ishonch qo‘shmaydi. Xaridor tekshira oladigan narsalar ishonch beradi. Bot egasi sifatida ularni katalogga oldindan qo‘shib qo‘ying:</p>
      <ul>
        <li><b>Narx bir xil bo‘lsin</b> — katalogdagi summa invoice’dagi summaga aynan mos kelsin.</li>
        <li><b>Ortiqcha ma’lumot so‘ramang</b> — parol, SMS kod yoki karta ma’lumotini hech qachon so‘ramang va buni katalogda ochiq yozib qo‘ying.</li>
        <li><b>Shartlar ochiq tursin</b> — qaytarish va yetkazish shartlarini Details blokiga joylang, mijoz bir bosishda o‘qiy olsin.</li>
        <li><b>Bot nomini aniq ko‘rsating</b> — kanal va saytda botingizning @username’ini doim to‘liq yozing, toki mijoz o‘xshash nomli nusxaga tushib qolmasin.</li>
      </ul>
      <p>Kanal orqali sotish haqida batafsil: <Link href="/blog/telegram-kanal-stars-monetizatsiya">kanalni Stars bilan monetizatsiya qilish</Link>.</p>
      <h2 id="stars-invoiceingizni-sinash-uchun-yulduzni">Stars invoice’ingizni sinash uchun yulduzni so‘mda qayerdan olasiz?</h2>
      <p>Invoice’ni haqiqiy to‘lov bilan sinab ko‘rgan foydali: mijoz ko‘radigan to‘lov oynasini o‘zingiz ko‘rasiz. Buning uchun akkauntingizda Stars bo‘lishi kerak.</p>
      <p>Yulduzni <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> orqali so‘mda olish mumkin:</p>
      <ul>
        <li>faqat @username kerak — parol, SMS kod yoki akkauntga kirish so‘ralmaydi;</li>
        <li>buyurtma odatda bir necha soniyada avtomatik yetkaziladi;</li>
        <li>eng kam buyurtma — 50 Stars;</li>
        <li>1 ta Stars narxi to‘lov usuliga bog‘liq: UzCard/HUMO kartaga o‘tkazma yoki bot balansidan {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")};</li>
        <li>xalqaro karta, kripto hamyon yoki VPN kerak emas.</li>
      </ul>
      <p>StarsPaymee — mustaqil xizmat: Telegram nomidan ish ko‘rmaydi va foydalanuvchilardan Stars sotib olmaydi. Narxlar va to‘lov usullari <Link href="/stars">Stars sahifasida</Link>, bot egalari uchun yechimlar <Link href="/business">biznes sahifasida</Link>. Stars bilan ishlaydigan API haqida umumiy tushuncha uchun: <Link href="/blog/telegram-stars-api-nima-ulanish">Telegram Stars API nima</Link>.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://core.telegram.org/bots/api-changelog", label: "Bot API changelog — June 11, 2026, Bot API 10.1" },
          { href: "https://core.telegram.org/bots/api", label: "Telegram Bot API (Message → rich_message)" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Rich xabar ichiga Stars to‘lov tugmasini qo‘ysa bo‘ladimi?", answer: "Bot API 10.1 o‘zgarishlar ro‘yxatida bunday imkoniyat ko‘rsatilmagan. Tugma yoki invoice biriktirmoqchi bo‘lsangiz, avval core.telegram.org’da sendRichMessage parametrlarini ko‘ring va sinov chatida bir marta yuborib tekshiring." },
  { question: "Katalog rich xabarda, invoice oddiy xabarda bo‘lsa, mijozga noqulay emasmi?", answer: "Mahsulot tanlangan zahoti invoice chiqsa, mijoz uchun bu atigi bitta qo‘shimcha qadam. Muhimi, invoice’dagi mahsulot nomi va summa katalogdagi qatordan farq qilmasin." },
  { question: "Mijozning eski Telegram ilovasida rich katalog qanday ko‘rinadi?", answer: "Qaysi ilova versiyalari rich xabarni to‘liq ko‘rsatishi rasman aniqlanmagan. Nom va narxni bezaksiz ham o‘qiladigan qilib yozing, katalogni eski qurilmada ham ochib ko‘ring." },
  { question: "Kanalga qadalgan narx jadvalini har oy qayta joylashim kerakmi?", answer: "Bot yuborgan rich xabarni editMessageText’ning rich_message parametri bilan tahrirlasa bo‘ladi. Ammo rich xabarlar kanalda ishlashi hali tasdiqlanmagan, shuning uchun avval bitta sinov postida tekshiring." },
  { question: "Prays-list juda uzun bo‘lsa, bitta xabarga sig‘adimi?", answer: "Rich xabarlar uchun qator, blok yoki uzunlik cheklovlari rasmiy manbalarda topilmadi. Uzun ro‘yxatni toifalar bo‘yicha bir necha jadvalga bo‘lgan ma’qul, telefon ekranida ham o‘qish oson bo‘ladi." },
  { question: "Botimni yangilashda kutubxona qaysi Bot API versiyasini qo‘llashi kerak?", answer: "Rich xabarlar 2026-yil 11-iyundagi Bot API 10.1 da qo‘shilgan, ro‘yxat elementi uchun InputRichBlockListItem esa 14-iyuldagi 10.2 da. Ro‘yxatlardan ham foydalanmoqchi bo‘lsangiz, kutubxona 10.2 ni qo‘llashi kerak." },
  { question: "Xaridorga beriladigan kirish kodini katalogda spoyler bilan yashirsam bo‘ladimi?", answer: "Yo‘q, spoyler faqat ko‘rinishni yopadi: xabarni ko‘rgan har kim uni bosib ocha oladi. Shaxsiy kod yoki havolani to‘lov tasdiqlangandan keyin faqat o‘sha mijozga alohida yuboring." },
  { question: "AI-maslahatchi botim javob oxirida to‘lov so‘rasa bo‘ladimi?", answer: "Bo‘ladi, lekin to‘lovni oqim tarzida chiqayotgan javob ichida emas, javob tugagach alohida Stars invoice’i bilan so‘rang. AI matnida karta raqami yoki tashqi to‘lov havolasi chiqmasligi uchun filtr qo‘ying." },
  { question: "O‘z botimdagi Stars to‘lovni sinash uchun eng kami nechta yulduz olish kerak?", answer: `@StarsPaymee_bot’da eng kam buyurtma — 50 Stars, bu kichik narxli sinov invoice’i uchun yetadi. 1 ta Stars kartaga o‘tkazmada ${som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")} turadi.` },
  { question: "Bot egasining shaxsiy akkauntida Premium bo‘lmasa, rich xabar yuborilmaydimi?", answer: "Changelog’da bunday shart aytilmagan: rich xabarni egasining akkaunti emas, bot Bot API orqali yuboradi. Ishlamasa, kutubxona versiyasi va metod parametrlarini tekshiring." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Да, rich-сообщение можно использовать как витрину для каталога и цен. Оплату же пока лучше принимать отдельным инвойсом в Stars. В списке изменений Bot API 10.1 ничего не сказано о том, что к rich-сообщению можно прикрепить инвойс или кнопку оплаты. Надёжная схема такая: rich-каталог, выбор товара, обычный инвойс, подтверждение оплаты и rich-чек.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#rich-xabar-ichida-stars-bilan", label: "Можно ли принять оплату в Stars прямо внутри rich-сообщения?" },
          { href: "#qaysi-rich-blok-katalogning-qaysi", label: "Какой rich-блок подходит для какой части каталога?" },
          { href: "#narx-va-chegirmani-matnda-qanday", label: "Как оформить цену и скидку в тексте?" },
          { href: "#katalogdan-tolovgacha-zanjir-qanday-quriladi", label: "Как выстроить цепочку от каталога до оплаты?" },
          { href: "#obuna-sotsangiz-tariflarni-qanday-korsatgan", label: "Если вы продаёте подписку, как лучше показать тарифы?" },
          { href: "#narx-ozgarsa-eski-katalog-xabarini", label: "Если цена изменилась, можно ли отредактировать старое сообщение с каталогом?" },
          { href: "#ai-maslahatchi-tarif-tavsiya-qilsa", label: "Что даёт продажам потоковый ответ ИИ?" },
          { href: "#ishga-tushirishdan-oldin-hujjatda-nimani", label: "Что проверить в документации самому перед запуском?" },
          { href: "#katalogingiz-mijozda-ishonch-uygotishi-uchun", label: "Как клиенту отличить ваш оформленный каталог от бота мошенников?" },
          { href: "#stars-invoiceingizni-sinash-uchun-yulduzni", label: "Где купить Stars за сумы, чтобы протестировать свой инвойс?" },
        ]}
      />
      <h2 id="rich-xabar-ichida-stars-bilan">Можно ли принять оплату в Stars прямо внутри rich-сообщения?</h2>
      <p>Bot API 10.1 вышел 11 июня 2026 года и добавил ботам поддержку Rich Messages. Согласно официальному описанию, теперь боты могут отправлять текст с богатой структурой, а ответы, созданные ИИ, — выводить потоком, по частям. Такие сообщения отправляются новым методом sendRichMessage.</p>
      <p>Полный список изменений есть на странице <a href={"https://core.telegram.org/bots/api-changelog"} target="_blank" rel="noopener noreferrer">Bot API changelog</a>. Ни в одном из её пунктов не говорится, что к rich-сообщению можно прикрепить инвойс, кнопку оплаты или цену в Stars. Какие параметры принимает sendRichMessage, в этой статье не подтверждено. Откройте описание метода в <a href={"https://core.telegram.org/bots/api"} target="_blank" rel="noopener noreferrer">документации Bot API</a> и проверьте сами.</p>
      <p>Поэтому разделите две задачи:</p>
      <ul>
        <li><b>rich-сообщение — витрина</b>: товар, цена, образцы, условия;</li>
        <li><b>инвойс — касса</b>: оплата в Stars и её подтверждение.</li>
      </ul>
      <p>В постах, которые разошлись по Telegram-каналам, обновление описывают в двух словах: боты теперь умеют отправлять красивые сообщения. Но владельцу бота важно не оформление, а цепочка продаж. Как технически подключить инвойс, подробно разобрано в статье <Link href="/blog/telegram-botga-stars-tolovini-ulash">о подключении оплаты Stars к боту</Link>.</p>
      <h2 id="qaysi-rich-blok-katalogning-qaysi">Какой rich-блок подходит для какой части каталога?</h2>
      <p>В changelog перечислено несколько блоков для rich-сообщений. Кроме того, появились класс RichBlockTableCell для ячейки таблицы и класс RichBlockCaption для подписи. В боте, который продаёт цифровые товары, их можно распределить примерно так:</p>
      <CompareTable
        headers={["Блок", "Задача в каталоге", "Пример из практики"]}
        rows={[
          ["RichBlockTable, RichBlockTableCell", "Таблица тарифов и пакетов", "Строки подписки «1 месяц / 3 месяца / 12 месяцев» и столбец с ценой в Stars"],
          ["RichBlockSlideshow", "Галерея образцов", "Кадры из уроков курса, страницы шаблона или стикерпака"],
          ["RichBlockPhoto, RichBlockCaption", "Обложка и краткое описание", "Обложка электронной книги и подпись в одно предложение под ней"],
          ["RichBlockDetails", "Скрытый раздел, который раскрывается по нажатию", "«Что входит?», «Условия возврата»"],
          ["RichBlockAnimation", "Короткое демо", "Показать, как работает шаблон или фильтр"],
          ["RichBlockAudio", "Прослушать перед покупкой", "Фрагмент аудиокурса или подкаста"],
          ["RichBlockMap", "Показать место", "Адрес проведения, если продаются билеты на офлайн-мастер-класс"],
        ]}
      />
      <p>Для цифровых товаров RichBlockMap нужен редко. Планируя каталог, опирайтесь только на те блоки, которые вы своими глазами видели в документации. Не стоит строить всю витрину вокруг медиаформата, которого нет в списке, в расчёте на то, что он поддерживается.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="narx-va-chegirmani-matnda-qanday">Как оформить цену и скидку в тексте?</h2>
      <p>Для текста добавлен класс RichText, а стили идут отдельными классами: жирный, курсив, подчёркнутый, зачёркнутый (strikethrough) и спойлер. В каталоге их можно использовать так:</p>
      <ul>
        <li><b>Старая и новая цена</b> — прежняя цена зачёркнута, рядом новая жирным.</li>
        <li><b>Намёк на бонус</b> — под спойлером, открывается, когда клиент нажмёт. Это не защита, а просто визуальный эффект.</li>
        <li><b>Важное условие</b> — подчёркнуто, например: «ссылка на доступ отправляется только после оплаты».</li>
        <li><b>Состав пакета</b> — в Bot API 10.2 от 14 июля 2026 года появился класс InputRichBlockListItem для элемента отправляемого списка. Он как раз подходит, чтобы расписать содержимое пакета по пунктам.</li>
      </ul>
      <p>Одно предупреждение: зачёркнутая «старая цена» должна была действовать на самом деле. Если зачеркнуть цену, которой никогда не было, получится фальшивая скидка. Вы потеряете доверие клиентов, а ещё можете получить жалобы.</p>
      <h2 id="katalogdan-tolovgacha-zanjir-qanday-quriladi">Как выстроить цепочку от каталога до оплаты?</h2>
      <p>Порядок ниже опирается на методы, подтверждённые документацией. Места, которые не подтверждены, отмечены прямо.</p>
      <Steps>
        <Step title={"Обновите библиотеку"}>проверьте, что библиотека Bot API, на которой работает бот, поддерживает методы версии 10.1 и новее. В старой версии библиотеки новых методов и классов может просто не быть.</Step>
        <Step title={"Отправьте сообщение с каталогом"}>соберите таблицу, слайдшоу и описание в одну витрину через sendRichMessage.</Step>
        <Step title={"Принимайте выбор отдельно"}>что к rich-сообщению можно прикрепить кнопки выбора, не подтверждено. Обходной путь: кнопки в обычном сообщении под каталогом или команды вроде /buy_1, /buy_2.</Step>
        <Step title={"Отправьте инвойс"}>для выбранного товара выставьте инвойс в Stars обычным платёжным методом, отдельным сообщением. Подробности — в <Link href="/blog/botga-tolov-api-ulash-qollanma">руководстве по платёжному API</Link>.</Step>
        <Step title={"Проверьте оплату"}>выдавайте товар только после того, как боту придёт апдейт об успешной оплате. Скриншот клиента или его слова «я оплатил» доказательством не считаются.</Step>
        <Step title={"Сделайте чек rich-сообщением"}>после оплаты квитанцию, ссылку на доступ и инструкцию можно отправить в rich-формате: состав заказа — таблицей, инструкцию — в блоке Details.</Step>
      </Steps>
      <p>Так клиент видит витрину, кассу и чек в одном чате. А вы не зависите от того, как rich-сообщения в итоге будут работать с оплатой, — это пока не ясно.</p>
      <h2 id="obuna-sotsangiz-tariflarni-qanday-korsatgan">Если вы продаёте подписку, как лучше показать тарифы?</h2>
      <p>Подписка — это не разовый файл, а доступ на срок. Поэтому в каталоге клиент должен сразу видеть три вещи: срок, цену и то, как выдаётся доступ.</p>
      <ul>
        <li><b>Сроки — в таблице</b> — каждая строка отдельный тариф: срок, цена в Stars и короткое пояснение («доступ в закрытый канал», «уроки раз в неделю»).</li>
        <li><b>Условия — в блоке Details</b> — что происходит после окончания срока, когда отправляется ссылка на доступ, как устроен возврат.</li>
        <li><b>Отдельный инвойс на каждый тариф</b> — клиент выбирает строку, бот выставляет инвойс ровно на сумму этого тарифа. Один общий инвойс с вариантом «впишите нужную сумму сами» только запутает.</li>
      </ul>
      <p>Как организовать платный вход в закрытый канал за Stars средствами Telegram, рассказано в статье <Link href="/blog/telegram-pullik-kanal-stars-obuna">о платном канале и подписке за Stars</Link>. Rich-каталог и здесь работает только витриной.</p>
      <h2 id="narx-ozgarsa-eski-katalog-xabarini">Если цена изменилась, можно ли отредактировать старое сообщение с каталогом?</h2>
      <p>Можно. В метод editMessageText добавлен параметр rich_message, который позволяет редактировать rich-сообщения. Значит, закреплённый каталог не нужно каждый раз удалять и отправлять заново: достаточно обновить ячейку с ценой в таблице.</p>
      <p>В класс Message тоже добавлено поле rich_message. Согласно документации, оно означает, что сообщение оформлено в rich-формате. Боту это удобно: rich-сообщение он редактирует rich-способом, обычное — как обычно.</p>
      <p>Есть один тонкий момент. Цифра в каталоге нужна только для показа, а сумму, которую заплатит клиент, задаёт инвойс. Если вы повышаете или снижаете цену:</p>
      <ul>
        <li>сразу же поменяйте цену и в коде, который создаёт инвойсы;</li>
        <li>ранее отправленные и ещё не оплаченные инвойсы могут остаться со старой суммой — при необходимости выставьте новый;</li>
        <li>укажите в таблице дату обновления цены, чтобы у клиента не возникло вопросов.</li>
      </ul>
      <h2 id="ai-maslahatchi-tarif-tavsiya-qilsa">Что даёт продажам потоковый ответ ИИ?</h2>
      <p>Метод sendRichMessageDraft позволяет отправлять потоком ещё не до конца готовое rich-сообщение. То есть ответ появляется не сразу целиком, а постепенно, будто его печатают.</p>
      <p>Пример из продаж: клиент пишет «Какой тариф мне подойдёт?». ИИ-консультант выводит ответ по частям, а в конце показывает два-три подходящих тарифа в небольшой таблице. Можно ещё процитировать нужные места из вопроса клиента: через quote_rich_texts в ReplyParameters указывается до 32 цитат общей длиной до 1 024 символов.</p>
      <p>Где нужна осторожность:</p>
      <ul>
        <li>в каких типах чатов работает черновик, в этой статье не подтверждено, поэтому не полагайтесь на него, пока не проверите сами;</li>
        <li>не предлагайте оплату внутри потока: дождитесь конца ответа и отправьте отдельный инвойс;</li>
        <li>поставьте фильтр, чтобы в тексте ИИ не появлялись номер карты, внешние платёжные ссылки или фразы, уводящие клиента из чата.</li>
      </ul>
      <h2 id="ishga-tushirishdan-oldin-hujjatda-nimani">Что проверить в документации самому перед запуском?</h2>
      <Notice label={"Важно"}>Официальным источником считайте только страницы core.telegram.org. Ссылки в постах каналов могут устареть, а история изменений хранится на странице changelog.</Notice>
      <p>Следующее в этой статье не подтверждено — выясните это сами до запуска каталога:</p>
      <ul>
        <li><b>Ограничения</b> — данных о количестве блоков в одном сообщении, длине текста и числе медиа в слайдшоу найти не удалось. Большой каталог разбейте на разделы и отправьте несколькими сообщениями.</li>
        <li><b>Где отображается</b> — как это работает в личном чате, группе и канале и в каких версиях приложений отображается полностью, не выяснено. Название товара и цена должны быть понятны и без оформления.</li>
        <li><b>Связь с оплатой</b> — возможность прикрепить к rich-сообщению кнопку оплаты или инвойс не подтверждена. Пока сами не увидите это в документации, не обещайте клиентам «оплату в одно нажатие».</li>
        <li><b>Описание методов</b> — полное описание sendRichMessage, RichBlockTable, RichBlockSlideshow и других классов в этой статье не проверялось.</li>
      </ul>
      <h2 id="katalogingiz-mijozda-ishonch-uygotishi-uchun">Как клиенту отличить ваш оформленный каталог от бота мошенников?</h2>
      <p>Rich-блоки доступны всем ботам, а значит, мошеннический бот может собрать точно такую же таблицу и слайдшоу. Честный магазин клиент отличает не по оформлению, а по прозрачности. Как владелец бота, обратите это себе на пользу:</p>
      <ul>
        <li><b>Одна и та же цена</b> — сумма в каталоге должна в точности совпадать с суммой в инвойсе.</li>
        <li><b>Не просите лишнего</b> — никогда не запрашивайте пароль, SMS-код или данные карты и прямо напишите об этом в каталоге.</li>
        <li><b>Открытые условия</b> — разместите условия возврата и доставки в блоке Details, чтобы клиент прочитал их в одно нажатие.</li>
        <li><b>Точное имя бота</b> — в канале и на сайте всегда пишите @username бота полностью, чтобы клиент не попал на копию с похожим именем.</li>
      </ul>
      <p>Подробнее о продажах через канал: <Link href="/blog/telegram-kanal-stars-monetizatsiya">монетизация канала через Stars</Link>.</p>
      <h2 id="stars-invoiceingizni-sinash-uchun-yulduzni">Где купить Stars за сумы, чтобы протестировать свой инвойс?</h2>
      <p>Инвойс полезно проверить настоящей оплатой: вы своими глазами увидите окно оплаты, которое видит клиент. Для этого на вашем аккаунте должны быть Stars.</p>
      <p>Звёзды можно купить за сумы через <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>:</p>
      <ul>
        <li>нужен только @username — пароль, SMS-код и вход в аккаунт не запрашиваются;</li>
        <li>заказ обычно доставляется автоматически за несколько секунд;</li>
        <li>минимальный заказ — 50 Stars;</li>
        <li>цена 1 Stars зависит от способа оплаты: переводом на карту UzCard/HUMO или с баланса бота — {som(STARS_PER_UNIT_UZS, "ru")}, через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")};</li>
        <li>международная карта, криптокошелёк и VPN не нужны.</li>
      </ul>
      <p>StarsPaymee — независимый сервис: он не заявляет об официальном сотрудничестве с Telegram и не покупает Stars у пользователей. Цены и способы оплаты — на <Link href="/stars">странице Stars</Link>, решения для владельцев ботов — на <Link href="/business">странице для бизнеса</Link>. Общее представление об API для работы со Stars даёт статья <Link href="/blog/telegram-stars-api-nima-ulanish">«Что такое Telegram Stars API»</Link>.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://core.telegram.org/bots/api-changelog", label: "Bot API changelog — June 11, 2026, Bot API 10.1" },
          { href: "https://core.telegram.org/bots/api", label: "Telegram Bot API (Message → rich_message)" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Можно ли поставить кнопку оплаты в Stars внутрь rich-сообщения?", answer: "В списке изменений Bot API 10.1 такой возможности нет. Если хотите прикрепить кнопку или инвойс, сначала посмотрите параметры sendRichMessage на core.telegram.org и один раз отправьте сообщение в тестовый чат." },
  { question: "Каталог в rich-сообщении, а инвойс в обычном — клиенту так не неудобно?", answer: "Если инвойс приходит сразу после выбора товара, для клиента это всего один лишний шаг. Главное, чтобы название товара и сумма в инвойсе не расходились со строкой в каталоге." },
  { question: "Как rich-каталог выглядит в старой версии Telegram у клиента?", answer: "Официально не выяснено, какие версии приложений полностью показывают rich-сообщения. Пишите название и цену так, чтобы они читались и без оформления, и откройте каталог на старом устройстве." },
  { question: "Нужно ли каждый месяц заново публиковать закреплённую таблицу цен в канале?", answer: "Не обязательно: rich-сообщение, отправленное ботом, можно отредактировать через параметр rich_message метода editMessageText. Но как rich-сообщения работают в каналах, пока не подтверждено, так что сначала проверьте." },
  { question: "Поместится ли очень длинный прайс-лист в одно сообщение?", answer: "Ограничений на число строк, блоков или длину rich-сообщений в официальных источниках найти не удалось. Длинный список лучше разбить на несколько таблиц по категориям — с экрана телефона так тоже читать проще." },
  { question: "Какую версию Bot API должна поддерживать библиотека, чтобы обновить бота?", answer: "Rich-сообщения появились в Bot API 10.1 от 11 июня 2026 года, а InputRichBlockListItem для элемента списка — в версии 10.2 от 14 июля. Если нужны списки, библиотека должна поддерживать 10.2." },
  { question: "Можно ли спрятать код доступа для покупателя под спойлер в каталоге?", answer: "Нет: спойлер только закрывает текст визуально, и любой, кто видит сообщение, откроет его нажатием. Личный код или ссылку отправляйте отдельно и только этому клиенту, когда оплата подтвердится." },
  { question: "Может ли мой бот-консультант с ИИ попросить оплату в конце ответа?", answer: "Может, но не внутри ответа, который выводится потоком, а отдельным инвойсом в Stars, когда ответ закончен. Поставьте фильтр, чтобы в тексте ИИ не появлялись номер карты и внешние платёжные ссылки." },
  { question: "Сколько звёзд минимум нужно купить, чтобы протестировать оплату Stars в своём боте?", answer: `В @StarsPaymee_bot минимальный заказ — 50 Stars, для тестового инвойса на небольшую сумму этого хватит. 1 Stars стоит ${som(STARS_PER_UNIT_UZS, "ru")} при переводе на карту и ${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")} через Click, Payme, Uzum или Paynet.` },
  { question: "Если у владельца бота нет Premium в личном аккаунте, rich-сообщение не отправится?", answer: "В changelog такого условия нет: rich-сообщение отправляет бот через Bot API, а не аккаунт владельца. Если не работает, проверьте версию библиотеки и параметры метода." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>Yes, you can use a rich message as a catalog and price display. For now, though, plan to take payment with a separate Stars invoice. The Bot API 10.1 changelog says nothing about attaching an invoice or a payment button to a rich message. Here’s a flow you can rely on: rich catalog, product choice, regular invoice, payment confirmation, rich receipt.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#rich-xabar-ichida-stars-bilan", label: "Can you take Stars payments inside a rich message?" },
          { href: "#qaysi-rich-blok-katalogning-qaysi", label: "Which rich block fits which part of a catalog?" },
          { href: "#narx-va-chegirmani-matnda-qanday", label: "How can you format prices and discounts in text?" },
          { href: "#katalogdan-tolovgacha-zanjir-qanday-quriladi", label: "How do you build the flow from catalog to payment?" },
          { href: "#obuna-sotsangiz-tariflarni-qanday-korsatgan", label: "Selling subscriptions: how should you present the plans?" },
          { href: "#narx-ozgarsa-eski-katalog-xabarini", label: "If the price changes, can you edit the old catalog message?" },
          { href: "#ai-maslahatchi-tarif-tavsiya-qilsa", label: "What does streaming AI replies add to sales?" },
          { href: "#ishga-tushirishdan-oldin-hujjatda-nimani", label: "What should you check in the docs yourself before launch?" },
          { href: "#katalogingiz-mijozda-ishonch-uygotishi-uchun", label: "How can customers tell your catalog from a scam bot?" },
          { href: "#stars-invoiceingizni-sinash-uchun-yulduzni", label: "Where to get Stars in UZS to test your invoice?" },
        ]}
      />
      <h2 id="rich-xabar-ichida-stars-bilan">Can you take Stars payments inside a rich message?</h2>
      <p>Bot API 10.1 came out on June 11, 2026, and added support for Rich Messages. The official description says bots can now send highly structured text and stream AI-generated replies, so a reply shows up piece by piece. These messages are sent with the new sendRichMessage method.</p>
      <p>The full list of changes is on the <a href={"https://core.telegram.org/bots/api-changelog"} target="_blank" rel="noopener noreferrer">Bot API changelog</a> page. None of its entries mention attaching an invoice, a payment button or a Stars price to a rich message. This article hasn’t confirmed which parameters sendRichMessage accepts. Open the method description in the <a href={"https://core.telegram.org/bots/api"} target="_blank" rel="noopener noreferrer">Bot API documentation</a> and check it yourself.</p>
      <p>So treat these as two separate jobs:</p>
      <ul>
        <li><b>The rich message is the display</b>: products, prices, samples and terms.</li>
        <li><b>The invoice is the checkout</b>: the Stars payment and its confirmation.</li>
      </ul>
      <p>Posts on Telegram channels sum up the update as “bots can now send pretty messages.” A bot owner cares less about looks and more about the sales flow. How to connect the invoice on the technical side is covered in <Link href="/blog/telegram-botga-stars-tolovini-ulash">connecting Stars payments to a bot</Link>.</p>
      <h2 id="qaysi-rich-blok-katalogning-qaysi">Which rich block fits which part of a catalog?</h2>
      <p>The changelog lists several blocks for rich messages. It also adds a RichBlockTableCell class for table cells and a RichBlockCaption class for captions. A bot that sells digital products might use them roughly like this:</p>
      <CompareTable
        headers={["Block", "Role in the catalog", "Practical example"]}
        rows={[
          ["RichBlockTable, RichBlockTableCell", "Table of plans and bundles", "“1 month / 3 months / 12 months” subscription rows with a column of Stars prices"],
          ["RichBlockSlideshow", "Sample gallery", "Frames from course lessons, pages from a template or sticker pack"],
          ["RichBlockPhoto, RichBlockCaption", "Cover and short description", "An e-book cover with a one-line caption below it"],
          ["RichBlockDetails", "Collapsible section", "“What’s included?”, “Refund terms”"],
          ["RichBlockAnimation", "Short demo", "Showing how a template or filter works"],
          ["RichBlockAudio", "Listen before buying", "A clip from an audio course or podcast"],
          ["RichBlockMap", "Showing a location", "The venue, if you sell tickets to an in-person workshop"],
        ]}
      />
      <p>Digital products rarely need RichBlockMap. When you plan your catalog, use only the blocks you’ve seen in the documentation yourself. Don’t design the whole display around a media type that isn’t on the list.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="narx-va-chegirmani-matnda-qanday">How can you format prices and discounts in text?</h2>
      <p>There’s a new RichText class for text, and each style comes as its own class: bold, italic, underline, strikethrough and spoiler. In a catalog you might use them like this:</p>
      <ul>
        <li><b>Old and new price</b>: the previous price in strikethrough, with the new one in bold next to it.</li>
        <li><b>A hint about a bonus</b>: hidden under a spoiler that opens when the customer taps it. This only changes how it looks. It doesn’t protect anything.</li>
        <li><b>An important condition</b>: underlined, for example “the access link is sent only after payment.”</li>
        <li><b>What’s in the bundle</b>: Bot API 10.2, released on July 14, 2026, added the InputRichBlockListItem class for items in a list you send. That’s the right tool for listing what a bundle contains.</li>
      </ul>
      <p>One warning: a crossed-out “old price” has to be a price you actually charged. If you strike through a price that never existed, the discount is fake. You’ll lose customers’ trust and may get complaints.</p>
      <h2 id="katalogdan-tolovgacha-zanjir-qanday-quriladi">How do you build the flow from catalog to payment?</h2>
      <p>The steps below rely on methods confirmed in the documentation. Anything unconfirmed is clearly marked.</p>
      <Steps>
        <Step title={"Update your library"}>make sure the Bot API library your bot uses supports methods from version 10.1 and later. An older library may not have the new methods and classes.</Step>
        <Step title={"Send the catalog message"}>use sendRichMessage to combine the table, slideshow and description into one display.</Step>
        <Step title={"Collect the choice separately"}>it isn’t confirmed that you can attach selection buttons to a rich message. Instead, put buttons in a regular message below the catalog, or use commands like /buy_1 and /buy_2.</Step>
        <Step title={"Send the invoice"}>send a Stars invoice for the chosen product in its own message, with the usual payment method. Details are in the <Link href="/blog/botga-tolov-api-ulash-qollanma">payment API guide</Link>.</Step>
        <Step title={"Verify the payment"}>deliver the product only after your bot gets the update saying the payment went through. A customer’s screenshot or “I paid” doesn’t count as proof.</Step>
        <Step title={"Send the receipt as a rich message"}>after payment, you can send the receipt, access link and instructions in rich format. Put the order details in a table and the instructions in a Details block.</Step>
      </Steps>
      <p>This way the customer sees the display, checkout and receipt in one chat. And your flow doesn’t depend on the open question of how rich messages work with payments.</p>
      <h2 id="obuna-sotsangiz-tariflarni-qanday-korsatgan">Selling subscriptions: how should you present the plans?</h2>
      <p>A subscription is time-limited access, not a one-off file. So the customer should see three things in the catalog right away: the period, the price and how access is given.</p>
      <ul>
        <li><b>Periods in a table</b>: each row is one plan with its period, Stars price and a short note (“access to private channel,” “weekly lessons”).</li>
        <li><b>Terms in a Details block</b>: what happens when the period ends, when the access link is sent and how refunds work.</li>
        <li><b>A separate invoice for each plan</b>: the customer picks a row, and the bot sends an invoice for that plan’s amount only. One shared invoice with “enter the amount yourself” just confuses people.</li>
      </ul>
      <p>How to set up paid access to a private channel with Stars using Telegram’s own tools is covered in <Link href="/blog/telegram-pullik-kanal-stars-obuna">paid channels and Stars subscriptions</Link>. Here too, the rich catalog is only the display.</p>
      <h2 id="narx-ozgarsa-eski-katalog-xabarini">If the price changes, can you edit the old catalog message?</h2>
      <p>Yes. The editMessageText method now has a rich_message parameter for editing rich messages. You don’t need to delete and repost a pinned catalog every time. Updating the price cell in the table is enough.</p>
      <p>The Message class also gained a rich_message field. According to the documentation, it shows that the message is rich formatted. That’s handy for your bot: if a message is rich, edit it the rich way, and if it isn’t, edit it as usual.</p>
      <p>One catch: the number in the catalog is only for display. The amount the customer pays is set in the invoice. When you raise or lower a price:</p>
      <ul>
        <li>change the price in the code that creates invoices at the same time;</li>
        <li>invoices you already sent but that haven’t been paid may keep the old amount, so send a new one if needed;</li>
        <li>add the date of the price update to the table so customers aren’t left wondering.</li>
      </ul>
      <h2 id="ai-maslahatchi-tarif-tavsiya-qilsa">What does streaming AI replies add to sales?</h2>
      <p>The sendRichMessageDraft method lets a bot stream a rich message that isn’t finished yet. The reply doesn’t land all at once. It builds up gradually, as if someone were typing it.</p>
      <p>Here’s a sales example. A customer writes, “Which plan is right for me?” An AI assistant streams its answer and ends with a small table of two or three matching plans. It can also quote the relevant parts of the customer’s question. With quote_rich_texts in ReplyParameters, you can show up to 32 quoted texts with a total length of up to 1 024 characters.</p>
      <p>Be careful with these points:</p>
      <ul>
        <li>this article hasn’t confirmed which chat types drafts work in, so test before you rely on them;</li>
        <li>don’t offer payment inside the stream: send a separate invoice once the reply is finished;</li>
        <li>add a filter so the AI never outputs card numbers, outside payment links or anything that sends the customer out of the chat.</li>
      </ul>
      <h2 id="ishga-tushirishdan-oldin-hujjatda-nimani">What should you check in the docs yourself before launch?</h2>
      <Notice label={"Important"}>Rely only on core.telegram.org pages as the official source. Links in channel posts can go out of date, while the change history stays on the changelog page.</Notice>
      <p>This article hasn’t confirmed the points below. Check them yourself before you launch the catalog:</p>
      <ul>
        <li><b>Limits</b>: we found no information on the number of blocks per message, text length or the number of media items in a slideshow. Split a large catalog into sections and send it across several messages.</li>
        <li><b>Where it displays</b>: it’s unclear how rich messages behave in private chats, groups and channels, and which app versions show them fully. Make sure product names and prices make sense even without formatting.</li>
        <li><b>Payment link-up</b>: attaching a payment button or invoice to a rich message isn’t confirmed. Don’t promise customers “one-tap payment” until you’ve seen it in the docs yourself.</li>
        <li><b>Method descriptions</b>: this article hasn’t checked the full descriptions of sendRichMessage, RichBlockTable, RichBlockSlideshow and the other classes.</li>
      </ul>
      <h2 id="katalogingiz-mijozda-ishonch-uygotishi-uchun">How can customers tell your catalog from a scam bot?</h2>
      <p>Any bot can use rich blocks, so a scam bot can build the same tables and slideshows. Customers spot an honest shop by how open it is, not by its design. As a bot owner, use that to your advantage:</p>
      <ul>
        <li><b>Keep prices consistent</b>: the amount in the catalog should match the invoice exactly.</li>
        <li><b>Don’t ask for extra data</b>: never ask for a password, SMS code or card details, and say so openly in the catalog.</li>
        <li><b>Keep terms visible</b>: put refund and delivery terms in a Details block so the customer can read them in one tap.</li>
        <li><b>Show your bot’s name clearly</b>: always write your bot’s full @username on your channel and website, so customers don’t land on a lookalike.</li>
      </ul>
      <p>More on selling through a channel: <Link href="/blog/telegram-kanal-stars-monetizatsiya">monetizing a channel with Stars</Link>.</p>
      <h2 id="stars-invoiceingizni-sinash-uchun-yulduzni">Where to get Stars in UZS to test your invoice?</h2>
      <p>It’s worth testing your invoice with a real payment, so you see the same payment screen your customers will. For that, you need Stars on your account.</p>
      <p>You can buy Stars in Uzbek som (UZS) through <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>:</p>
      <ul>
        <li>you only need your @username, with no password, SMS code or account access;</li>
        <li>orders are usually delivered automatically within a few seconds;</li>
        <li>the minimum order is 50 Stars;</li>
        <li>the price of 1 Star depends on how you pay: {som(STARS_PER_UNIT_UZS, "en")} by UzCard/HUMO card transfer or from your bot balance, {som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click, Payme, Uzum or Paynet;</li>
        <li>you don’t need an international card, a crypto wallet or a VPN.</li>
      </ul>
      <p>StarsPaymee is an independent service. It doesn’t claim any official partnership with Telegram and doesn’t buy Stars from users. Prices and payment methods are on the <Link href="/stars">Stars page</Link>, and options for bot owners are on the <Link href="/business">business page</Link>. For an overview of the Stars API, see <Link href="/blog/telegram-stars-api-nima-ulanish">what the Telegram Stars API is</Link>.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://core.telegram.org/bots/api-changelog", label: "Bot API changelog — June 11, 2026, Bot API 10.1" },
          { href: "https://core.telegram.org/bots/api", label: "Telegram Bot API (Message → rich_message)" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Can I put a Stars payment button inside a rich message?", answer: "The Bot API 10.1 changelog doesn’t list that option. If you want to attach a button or invoice, first look up the sendRichMessage parameters on core.telegram.org and try sending one in a test chat." },
  { question: "If the catalog is a rich message and the invoice is a regular one, is that awkward for customers?", answer: "If the invoice appears as soon as the product is picked, the customer has just one extra step. Make sure the product name and amount in the invoice match the catalog row exactly." },
  { question: "How does a rich catalog look in an older Telegram app?", answer: "It hasn’t been officially stated which app versions fully display rich messages. Write names and prices so they’re readable without formatting, and open the catalog on an older device to check." },
  { question: "Do I have to repost the pinned price table in my channel every month?", answer: "No. A rich message sent by your bot can be edited with the rich_message parameter of editMessageText. It isn’t confirmed yet how rich messages behave in channels, though, so test first." },
  { question: "Will a very long price list fit in one message?", answer: "We found no official row, block or length limits for rich messages. Splitting a long list into several tables by category is the safer choice, and it’s easier to read on a phone too." },
  { question: "Which Bot API version should my library support when I update the bot?", answer: "Rich messages arrived in Bot API 10.1 on June 11, 2026, and InputRichBlockListItem for list items came in 10.2 on July 14. If you want lists too, your library needs to support 10.2." },
  { question: "Can I hide a buyer’s access code in the catalog with a spoiler?", answer: "No. A spoiler only hides the text visually, and anyone who sees the message can tap to reveal it. Send personal codes or links separately, only to that customer, after payment is confirmed." },
  { question: "Can my AI assistant bot ask for payment at the end of its reply?", answer: "Yes, but request payment with a separate Stars invoice after the reply has finished, not inside the streamed text. Add a filter so the AI never outputs card numbers or outside payment links." },
  { question: "What’s the minimum number of Stars I need to test payments in my own bot?", answer: `The minimum order at @StarsPaymee_bot is 50 Stars, which is enough for a low-priced test invoice. 1 Star costs ${som(STARS_PER_UNIT_UZS, "en")} by card transfer and ${som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click, Payme, Uzum or Paynet.` },
  { question: "If the bot owner’s personal account doesn’t have Premium, can the bot still send rich messages?", answer: "The changelog mentions no such requirement, because the bot sends rich messages through the Bot API, not the owner’s account. If it doesn’t work, check your library version and the method parameters." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "howto",
  datePublished: "2026-11-18",
  dateModified: "2026-11-18",
  keywords: ["bot rich xabar stars to'lov","telegram bot rich message katalog","sendRichMessage stars invoice","bot api 10.1 rich messages","botda narx jadvali yuborish","telegram bot slaydshou katalog","stars bilan raqamli mahsulot sotish bot","rich сообщения telegram бот оплата stars","sendRichMessage инвойс звёзды","bot api 10.1 таблица каталог","каталог товаров в telegram боте stars","telegram bot rich message to'lov tugmasi"],
  howToSteps: [
    { name: "Kutubxonani yangilang", text: "botingiz ishlatadigan Bot API kutubxonasi 10.1 va undan keyingi versiya metodlarini qo‘llashini tekshiring. Kutubxona eski bo‘lsa, unda yangi metod va klasslar bo‘lmasligi mumkin." },
    { name: "Katalog xabarini yuboring", text: "sendRichMessage bilan jadval, slaydshou va tavsifni bitta vitrinaga jamlang." },
    { name: "Tanlovni alohida qabul qiling", text: "tanlash tugmalarini rich xabarga biriktirish mumkinligi tasdiqlanmagan. Muqobil yo‘l: katalog ostida oddiy xabardagi tugmalar yoki /buy_1, /buy_2 kabi buyruqlar." },
    { name: "Invoice yuboring", text: "tanlangan mahsulot uchun Stars invoice’ini odatdagi to‘lov metodi bilan alohida xabarda yuboring. Tafsilotlar to‘lov API qo‘llanmasida." },
    { name: "To‘lovni tekshiring", text: "mahsulotni faqat Telegram’dan to‘lov muvaffaqiyatli o‘tgani haqida xabar botga kelgandan keyin bering. Mijozning skrinshoti yoki «to‘ladim» degan gapi dalil bo‘lmaydi." },
    { name: "Chekni rich xabar qiling", text: "to‘lovdan keyin kvitansiya, kirish havolasi va foydalanish ko‘rsatmasini rich formatda yuborsa bo‘ladi: buyurtma tarkibi jadvalda, qo‘llanma Details blokida." },
  ],
  locales: {
    uz: {
      title: "Bot rich xabarida Stars to‘lov: katalog va invoice birga ishlaydimi?",
      excerpt: "Rich xabarni katalog va narx jadvali sifatida ishlatsa bo‘ladi, Stars to‘lovi esa alohida invoice bilan olinadi. Maqolada bloklar jadvali, 6 qadamli sotuv zanjiri va obuna tariflari bor.",
      metaTitle: "Bot rich xabarida Stars to‘lov",
      metaDescription: "Rich xabarni katalog va narx jadvali sifatida ishlatsa bo‘ladi, Stars to‘lovi esa alohida invoice bilan olinadi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Оплата Stars в rich-сообщении бота: работают ли каталог и инвойс вместе?",
      excerpt: "Да, rich-сообщение подходит для каталога и таблицы цен, но оплату в Stars принимайте отдельным инвойсом: прикрепление инвойса к rich-сообщению в документации не описано. Внутри — таблица блоков и цепочка из 6 шагов.",
      metaTitle: "Оплата Stars в rich-сообщении бота",
      metaDescription: "Да, rich-сообщение подходит для каталога и таблицы цен, но оплату в Stars принимайте отдельным инвойсом: прикрепление инвойса к rich-сообщению в документации…",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Rich messages and Stars payments: can a bot’s catalog include an invoice?",
      excerpt: "Yes, a rich message can be your catalog and price table, but take Stars payments with a separate invoice. The docs don’t show how to attach one. Inside: a table of blocks and a 6-step sales flow.",
      metaTitle: "Rich messages and Stars payments",
      metaDescription: "Yes, a rich message can be your catalog and price table, but take Stars payments with a separate invoice. The docs don’t show how to attach one.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
