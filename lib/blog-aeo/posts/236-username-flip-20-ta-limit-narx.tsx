import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "username-flip-20-ta-limit-narx";

/**
 * Username flip qilish: «endi 20 ta» limiti rostmi va nom narxini oshiradimi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-16): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Fragment’dan kolleksion username’larni qayta sotish uchun yig‘ayotgan foydalanuvchi Telegram kanallaridagi «endi 20 ta» postini ko‘rgach, «username flip qilish 20 ta limit» deb qidiradi. U limit rasman oshganini, bitta akkauntda nechta nomni faol saqlay olishini va bu o‘zgarish username narxini ko‘tarish-ko‘tarmasligini bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-16):
 *   https://core.telegram.org/api/fragment
 *   https://fragment.com/about
 *   https://core.telegram.org/method/account.toggleUsername
 *   https://core.telegram.org/method/channels.toggleUsername
 *   https://core.telegram.org/api/config
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
  return <p>Yo‘q, limit 20 taga oshgani rasman tasdiqlanmagan. Telegram hujjatidagi 10 va 20 raqamlari username’ga emas, siz yarata oladigan ochiq kanal va superguruhlar soniga tegishli. Faol nomlar uchun chegara bor, lekin uning aniq raqami rasman e’lon qilinmagan. Shuning uchun bu post nom narxini o‘zicha ko‘tarmaydi.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#endi-20-ta-posti-nimani", label: "«Endi 20 ta» posti nimani da’vo qiladi?" },
          { href: "#onlab-nom-bitta-akkauntda-qanday", label: "O‘nlab nom bitta akkauntda qanday holatda turadi?" },
          { href: "#faol-nomlar-chegarasi-nima-malum", label: "Faol nomlar chegarasi: nima ma’lum, nima noma’lum?" },
          { href: "#portfelni-sotuvga-tayyorlash-7-qadam", label: "Portfelni sotuvga tayyorlash: 7 qadam" },
          { href: "#limit-haqidagi-xabar-username-narxini", label: "Limit haqidagi xabar username narxini ko‘taradimi?" },
          { href: "#har-bir-nomga-alohida-vitrina", label: "Har bir nomga alohida vitrina kanali: 10 va 20 shu yerda to‘sadi" },
          { href: "#xaridor-nomni-botga-ulamoqchi-bolsa", label: "Xaridor nomni botga ulamoqchi bo‘lsa" },
          { href: "#nom-savdosida-qayerda-aldanib-qolish", label: "Nom savdosida qayerda aldanib qolish mumkin?" },
        ]}
      />
      <h2 id="endi-20-ta-posti-nimani">«Endi 20 ta» posti nimani da’vo qiladi?</h2>
      <p>Telegram kanallarida tarqalgan postda endi profil yoki kanalga 20 tagacha username ulash mumkinligi, oldin esa limit 10 ta bo‘lgani aytilgan. Fragment’dan nom yig‘ib, keyin qayta sotadigan odam buni «bozor kengaydi, nomlarga talab oshadi» degan ishora deb tushunishi mumkin.</p>
      <p>Biroq bu oddiy kanal posti. Limit 10 dan 20 ga oshirilgani haqida rasmiy manbalarda e’lon topilmadi.</p>
      <p>10 va 20 raqamlari Telegram hujjatlarida haqiqatan bor, faqat boshqa ma’noda. <a href={"https://core.telegram.org/api/config"} target="_blank" rel="noopener noreferrer">Client configuration</a> sahifasida bu bir foydalanuvchi yarata oladigan ochiq kanal va superguruhlarning eng ko‘p soni: Premium’siz akkauntda 10 ta, Premium’da 20 ta. Post shu ikki raqamni olib, ularni username limiti deb ko‘rsatgan.</p>
      <p>Flipper uchun amaliy xulosa: shu postga ishonib portfelga yangi nomlar qo‘shsangiz yoki e’lonlardagi narxni ko‘tarsangiz, tasdiqlanmagan xabarga pul tikkan bo‘lasiz.</p>
      <h2 id="onlab-nom-bitta-akkauntda-qanday">O‘nlab nom bitta akkauntda qanday holatda turadi?</h2>
      <p>Flip qilganda nechta nom borligidan ko‘ra ularning holati muhimroq. <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">Fragment sahifasida</a> aytilishicha, profil, guruh yoki kanalda ko‘pi bilan bitta oddiy username va istalgancha kolleksion username bo‘lishi mumkin. Kolleksion nomni shaxsiy profilingizga yoki o‘zingizga tegishli ochiq guruh va kanalga biriktirasiz.</p>
      <p>Telegram’ning <a href={"https://core.telegram.org/api/fragment"} target="_blank" rel="noopener noreferrer">Fragment collectibles</a> hujjatida yana bir muhim tafsilot bor: nom biriktirilgan zahoti nofaol bo‘ladi, uni alohida yoqish kerak. Ya’ni «biriktirilgan» va «ishlayotgan» bir narsa emas.</p>
      <CompareTable
        headers={["Holat", "Hujjatda nima deyilgan", "Portfel uchun amaliy ma’nosi"]}
        rows={[
          ["Biriktirilgan", "Nom sizga tegishli akkaunt, kanal yoki superguruhga bog‘langan", "Nomlar qaysi chatda turganini ro‘yxatda yuritib boring"],
          ["Faol", "Biriktirilgan nom o‘zi yoqilmaydi, uni alohida faollashtirish kerak", "Faqat haqiqatan ishlatayotgan nomni yoqing"],
          ["Asosiy", "Ro‘yxatdagi birinchi nom interfeysda asosiy bo‘lib ko‘rinadi, tartibni o‘zgartirsa bo‘ladi", "Brend sifatida ko‘rsatmoqchi bo‘lgan nomni birinchi qo‘ying"],
          ["Oddiy username", "Ko‘pi bilan bitta bo‘ladi, uni nofaol qilib bo‘lmaydi", "Agar bor bo‘lsa, u doim faol turadi"],
        ]}
      />
      <p>Misol: profilingizda shaxsiy oddiy @nomingiz bor, Fragment’dan esa bir nechta kolleksion nom olgansiz. Ulardan bittasini brend sifatida ishlatasiz, qolganlari sotuvga mo‘ljallangan. Bunday holda brend nomini faol qilib, ro‘yxatda birinchi qo‘yish yetarli, qolganlarini yoqmasa ham bo‘ladi.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="faol-nomlar-chegarasi-nima-malum">Faol nomlar chegarasi: nima ma’lum, nima noma’lum?</h2>
      <p>Shaxsiy akkaunt uchun <a href={"https://core.telegram.org/method/account.toggleUsername"} target="_blank" rel="noopener noreferrer">account.toggleUsername</a>, kanal va superguruh uchun esa <a href={"https://core.telegram.org/method/channels.toggleUsername"} target="_blank" rel="noopener noreferrer">channels.toggleUsername</a> sahifalarida USERNAMES_ACTIVE_TOO_MUCH xatosi ko‘rsatilgan. Uning ma’nosi: faol username’lar soni maksimumga yetgan. Yangi nomni yoqayotganingizda shu xato chiqsa, chegaraga yetgan bo‘lasiz.</p>
      <p>Ma’lum bo‘lgan narsalar:</p>
      <ul>
        <li>faol nomlar soniga chegara ham profilda, ham kanal va superguruhlarda bor;</li>
        <li>chegaraga yetganda yangi nom yoqilmaydi va xato qaytadi;</li>
        <li>oddiy username’ni nofaol qilib, uning o‘rniga kolleksion nom yoqib bo‘lmaydi.</li>
      </ul>
      <p>Tasdiqlanmagan narsalar:</p>
      <ul>
        <li>chegaraning aniq raqami — u client config’da ham, xato tavsiflarida ham yozilmagan;</li>
        <li>Premium va oddiy akkauntda, profil va kanalda bu chegara har xil ekani;</li>
        <li>chegara yaqinda o‘zgargani.</li>
      </ul>
      <p>Shuning uchun kimdir «endi 20 ta nomni faol qilsa bo‘ladi» desa, bu ham tekshirilmagan da’vo.</p>
      <Notice label={"Muhim"}>Sotuvdagi nomni faol qilib turish shart emas. Hujjatga ko‘ra, yangi biriktirilgan nom aynan nofaol holatda turadi, demak bu nom uchun oddiy holat. Faol joylarni haqiqatan ishlatayotgan nomlarga qoldiring.</Notice>
      <p>Yana bir nozik joy: kanal yoki superguruh yopiq (private) qilinsa, unga ulangan kolleksion nomlarning hammasi birdaniga nofaol qilinishi mumkin. Nomlarni ko‘zdan yashirish uchun kanalni yopsangiz, keyin ularni qaytadan yoqishingizga to‘g‘ri keladi.</p>
      <h2 id="portfelni-sotuvga-tayyorlash-7-qadam">Portfelni sotuvga tayyorlash: 7 qadam</h2>
      <Steps>
        <Step title={"Ro‘yxat tuzing"}>Fragment’da qaysi nomlar hamyoningizda turganini va har biri qaysi chatga biriktirilganini yozib chiqing.</Step>
        <Step title={"Faol nomlarni saralang"}>ishlatayotganlaringizni faol qoldiring, sotuvdagilarini o‘chirib qo‘ying. Oddiy username bundan mustasno.</Step>
        <Step title={"Asosiy nomni belgilang"}>ro‘yxatda birinchi turgan nom asosiy bo‘lib ko‘rinadi, tartibni o‘zingiz almashtirasiz.</Step>
        <Step title={"Kerak bo‘lsa chatni almashtiring"}>Fragment’ga ko‘ra, nom biriktirilgan chat doimiy emas, uni istalgan payt boshqasiga o‘zgartirsa bo‘ladi. Xaridorga ko‘rsatish uchun nomni vaqtincha alohida kanalga ulash mumkin.</Step>
        <Step title={"Bot haqida oldindan ayting"}>nomni botga ulash uchun qaytarib bo‘lmaydigan upgrade kerak (pastda batafsil).</Step>
        <Step title={"E’lon narxini bitimlar bilan solishtiring"}><Link href="/blog/888-raqam-narxi-fragment-floor-tushadimi">floor va sotuvlarni o‘qish</Link> maqolasidagi usulni username’ga ham qo‘llang.</Step>
        <Step title={"Akkaunt himoyasini tekshiring"}>2FA paroli yoqilgan bo‘lsin, hamyonning zaxira so‘zlari hech kimga berilmagan bo‘lsin. Sozlash tartibi <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">2FA bilan akkauntni himoyalash</Link> maqolasida.</Step>
      </Steps>
      <h2 id="limit-haqidagi-xabar-username-narxini">Limit haqidagi xabar username narxini ko‘taradimi?</h2>
      <p>O‘zicha ko‘tarmaydi. Narxni kanallardagi gap-so‘z emas, Fragment’dagi haqiqiy bitimlar ko‘rsatadi.</p>
      <p>Postdagi mantiqning o‘zi ham zaif. Limit haqiqatan oshgan deb faraz qilaylik. Fragment sahifasi kolleksion nomlar soniga shundoq ham cheklov qo‘ymaydi, cheklov faqat bir vaqtda yoqilgan nomlarda bor. Demak, «akkauntga ko‘proq nom sig‘adi» degan gap talab o‘sishiga jiddiy asos bo‘lmaydi.</p>
      <p>Bunday post tarqalgan kunlarda e’lonlardagi narxlar ko‘tarilishi mumkin, lekin bu nomlar sotilganini bildirmaydi. Uch xil raqamni farqlang:</p>
      <ul>
        <li><b>So‘ralgan narx</b> — e’londagi raqam. Uni har bir sotuvchi xohlagancha qo‘yadi.</li>
        <li><b>Floor</b> — kolleksiyadagi eng arzon e’lon. Bu ham hali sotuv emas.</li>
        <li><b>Bitim narxi</b> — nom haqiqatan necha pulga sotilgani. Talabni aynan shu ko‘rsatadi.</li>
      </ul>
      <p>Agar postdan keyin e’lonlar qimmatlashgan-u, bitimlar o‘sha darajada qolgan bo‘lsa, bu talab emas, kutish belgisi. Bu maqolada narx prognozi berilmaydi. Nomlarni sarmoya sifatida ko‘rayotgan bo‘lsangiz, <Link href="/blog/tg-domen-investitsiya-arziydimi">.tg domenga pul tikish</Link> tahlilini o‘qing. <Link href="/blog/telegram-username-sotib-olish">Fragment’da username sotib olish</Link> qo‘llanmasidagi komissiya va xarajatlarni ham foydangizdan oldindan ayirib chiqing.</p>
      <h2 id="har-bir-nomga-alohida-vitrina">Har bir nomga alohida vitrina kanali: 10 va 20 shu yerda to‘sadi</h2>
      <p>Ba’zi flipperlar har bir nomni alohida ochiq kanalga ulab, vitrina sifatida ko‘rsatadi. Haqiqiy 10 va 20 chegarasi aynan shu usulda ishga tushadi.</p>
      <CompareTable
        headers={["Akkaunt turi", "Yaratish mumkin bo‘lgan ochiq kanal va superguruhlar", "Vitrina usulida nimani bildiradi"]}
        rows={[
          ["Premium’siz", "10 ta", "11-ochiq kanalni yaratishda chegaraga yetasiz"],
          ["Premium bilan", "20 ta", "Ikki baravar ko‘p vitrina kanali ochish mumkin"],
        ]}
      />
      <p>Bu chegara nomlar soniga emas, siz yaratadigan ochiq chatlarga tegishli. Misol: portfelingizda o‘ndan ortiq nom bor va har biriga alohida kanal ochmoqchisiz. Premium’siz akkauntda bu reja o‘ninchi kanalda to‘xtaydi. Ko‘pincha bunga hojat yo‘q: nomlarni nofaol holda saqlab, xaridor chiqqanda bittasini umumiy vitrina kanaliga vaqtincha ulash yetarli. Bitim tugagach, nom xaridorga o‘tadi, kanal esa keyingi nom uchun bo‘shaydi.</p>
      <p>Baribir ko‘proq ochiq kanal kerak bo‘lsa, Premium yordam beradi. Uni @StarsPaymee_bot orqali so‘mda olish mumkin: 3 oy — {som(premium(3), "uz")}, 6 oy — {som(premium(6), "uz")}, 12 oy — {som(premium(12), "uz")}. Narx barcha to‘lov usullarida bir xil, 1 oylik tarif narxini esa botda ko‘rasiz. To‘lash mumkin: Click, Payme, Uzum, Paynet yoki UzCard/HUMO kartaga o‘tkazma. Botga faqat @username kerak, parol yoki SMS kod so‘ralmaydi. Premium Telegram’ning sovg‘a mexanizmi orqali ulanadi.</p>
      <p>Akkauntda faol Premium bo‘lsa, bot yangi buyurtma ochmaydi: muddat faol obuna ustiga qo‘shilmaydi. Tariflar haqida batafsil — <Link href="/premium">Premium sahifasida</Link>.</p>
      <h2 id="xaridor-nomni-botga-ulamoqchi-bolsa">Xaridor nomni botga ulamoqchi bo‘lsa</h2>
      <p><a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">Fragment ma’lumotiga</a> ko‘ra, kolleksion nomni botga biriktirish uchun uni bir martalik to‘lov bilan upgrade qilish kerak. Bu upgrade doimiy, orqaga qaytarib bo‘lmaydi.</p>
      <p>To‘lov miqdori rasmiy manbada tasdiqlanmagan. E’loningizda bu summani yozmang, xaridor uni Fragment’ning o‘zida ko‘rsin.</p>
      <Notice label={"Muhim"}>Upgrade qilingan nomni keyingi xaridorlar har xil baholashi mumkin: kimgadir bu qulaylik, kimgadir ortiqcha shart. E’londa nom upgrade qilingan yoki qilinmaganini ochiq yozing va uni faqat namoyish uchun o‘zingiz upgrade qilmang.</Notice>
      <h2 id="nom-savdosida-qayerda-aldanib-qolish">Nom savdosida qayerda aldanib qolish mumkin?</h2>
      <p>Nomlar tez-tez qo‘ldan-qo‘lga o‘tadigan joyda firibgarlar ham ko‘p. Quyidagi belgilardan biri ko‘rinsa, savdoni to‘xtating:</p>
      <ul>
        <li>«Limit oshdi, hoziroq oling» kabi shoshiltiradigan xabarlar va shunday postga tayanib qo‘yilgan narx.</li>
        <li>Fragment’dan tashqarida oldindan to‘lov so‘rash yoki «nomni keyin o‘tkazib beraman» degan va’da.</li>
        <li>Akkauntga kirish, SMS kod, 2FA paroli yoki hamyon zaxira so‘zlarini so‘rash. Halol xaridor ham, sotuvchi ham bularni so‘ramaydi.</li>
        <li>«Nomni o‘tkazish uchun akkauntingizni ulang» degan iltimos. Fragment’ga akkaunt ulash qanday ishlashini <Link href="/blog/fragment-verifikatsiya-shartmi-akkaunt-ulash">verifikatsiya va akkaunt ulash</Link> maqolasidan bilib oling.</li>
      </ul>
      <p>StarsPaymee kolleksion username sotmaydi va foydalanuvchilardan Stars yoki sovg‘a sotib olmaydi. <Link href="/stars">Stars</Link> va Premium buyurtmasi uchun faqat @username so‘raladi. Kimdir StarsPaymee nomidan username taklif qilsa yoki parolingizni so‘rasa, buni <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> orqali tekshiring.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://core.telegram.org/api/fragment", label: "Fragment collectibles" },
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://core.telegram.org/method/account.toggleUsername", label: "account.toggleUsername" },
          { href: "https://core.telegram.org/method/channels.toggleUsername", label: "channels.toggleUsername" },
          { href: "https://core.telegram.org/api/config", label: "Client configuration" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Postdagi «endi 20 ta» gapiga ishonib, yana nom yig‘sam bo‘ladimi?", answer: "Bu raqam rasman username limiti sifatida tasdiqlanmagan. Hujjatda 10 va 20 ochiq kanal yaratish chegarasi, shuning uchun xaridni post asosida emas, bitimlar asosida rejalashtiring." },
  { question: "Portfeldagi o‘nlab nomni bitta akkauntda ushlab tursam bo‘ladimi?", answer: "Fragment sahifasida kolleksion nomlar soniga cheklov ko‘rsatilmagan, ular yonida bitta oddiy username ham turishi mumkin. Cheklov bir vaqtda yoqilgan nomlarga tegishli." },
  { question: "Bir vaqtda nechta nomni faol qila olaman?", answer: "Aniq raqam rasmiy sahifalarda yo‘q. Yangi nomni yoqishda USERNAMES_ACTIVE_TOO_MUCH chiqsa, chegaraga yetgansiz — keraksizini o‘chirib, keyin yangisini yoqing." },
  { question: "Flip uchun Premium olishning foydasi bormi?", answer: "Faol nomlar chegarasi Premium bilan oshishi tasdiqlanmagan. Premium aniq beradigan narsa — yaratish mumkin bo‘lgan ochiq kanal va superguruhlar 10 tadan 20 taga ko‘payadi, bu vitrina kanallari uchun kerak bo‘lishi mumkin." },
  { question: "Xaridorga ko‘rsatgandan keyin nomni vitrina kanalidan qaytarib olsam bo‘ladimi?", answer: "Ha, Fragment nom biriktirilgan chatni istalgan payt almashtirishga ruxsat beradi. Istisno — botga ulash uchun qilingan upgrade, u qaytarilmaydi." },
  { question: "Eski oddiy @nomim kolleksion nomlarni yoqishga xalaqit beradimi?", answer: "Oddiy username bor ekan, u faol turadi va uni o‘chirib qo‘yib bo‘lmaydi. U faol nomlar chegarasiga qanday hisoblanishi rasman yozilmagan." },
  { question: "Nomlarni ko‘zdan yashirish uchun vitrina kanalini yopsam nima bo‘ladi?", answer: "Kanal yopiq qilinganda unga ulangan kolleksion nomlarning hammasi nofaol qilinishi mumkin. Keyin ularni ko‘rsatmoqchi bo‘lsangiz, qaytadan yoqishingiz kerak." },
  { question: "Botga ulangan nomni sotsam, xaridor upgrade’ni bekor qila oladimi?", answer: "Yo‘q, Fragment bu upgrade’ni doimiy deb yozadi. Shuning uchun e’londa nom upgrade qilingan yoki qilinmaganini aniq ko‘rsating." },
  { question: "Postdan keyin nomlar qimmatlashganini qanday tekshiraman?", answer: "Fragment’da nomning sotuvlar tarixini oching va oxirgi bitimlarni oldingilari bilan solishtiring. Faqat e’lonlarda narx ko‘tarilgan bo‘lsa, bu hali talab o‘sgani emas." },
  { question: "Vitrina kanallari uchun Premium’ni so‘mda qayerdan olaman?", answer: `@StarsPaymee_bot’ga @username’ingizni yozib, tarifni tanlang: 3 oy ${som(premium(3), "uz")}, 6 oy ${som(premium(6), "uz")}, 12 oy ${som(premium(12), "uz")}. To‘lov Click, Payme, Uzum, Paynet yoki UzCard/HUMO kartaga o‘tkazma orqali qilinadi, parol so‘ralmaydi.` },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Нет, официально лимит в 20 юзернеймов не подтверждён. Числа 10 и 20 в документации Telegram относятся не к юзернеймам, а к тому, сколько публичных каналов и супергрупп вы можете создать. Ограничение на активные имена есть, но точное число официально не названо. Поэтому сам по себе этот пост цену имени не поднимает.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#endi-20-ta-posti-nimani", label: "Что утверждает пост «теперь 20»?" },
          { href: "#onlab-nom-bitta-akkauntda-qanday", label: "В каком состоянии находятся десятки имён на одном аккаунте?" },
          { href: "#faol-nomlar-chegarasi-nima-malum", label: "Лимит активных имён: что известно, а что нет?" },
          { href: "#portfelni-sotuvga-tayyorlash-7-qadam", label: "Подготовка портфеля к продаже: 7 шагов" },
          { href: "#limit-haqidagi-xabar-username-narxini", label: "Поднимет ли новость о лимите цену юзернейма?" },
          { href: "#har-bir-nomga-alohida-vitrina", label: "Отдельный канал-витрина под каждое имя: вот где мешают 10 и 20" },
          { href: "#xaridor-nomni-botga-ulamoqchi-bolsa", label: "Если покупатель хочет привязать имя к боту" },
          { href: "#nom-savdosida-qayerda-aldanib-qolish", label: "Где можно попасться на обман при торговле именами?" },
        ]}
      />
      <h2 id="endi-20-ta-posti-nimani">Что утверждает пост «теперь 20»?</h2>
      <p>В посте, который разошёлся по Telegram-каналам, говорится, что к профилю или каналу теперь можно привязать до 20 юзернеймов, а раньше лимит был 10. Тот, кто собирает имена на Fragment и потом перепродаёт их, может принять это за сигнал: рынок расширился, спрос на имена вырастет.</p>
      <p>Но это обычный пост в канале. Официального объявления о том, что лимит подняли с 10 до 20, найти не удалось.</p>
      <p>Числа 10 и 20 в документации Telegram действительно есть, только смысл у них другой. На странице <a href={"https://core.telegram.org/api/config"} target="_blank" rel="noopener noreferrer">Client configuration</a> это максимальное число публичных каналов и супергрупп, которое может создать один пользователь: 10 без Premium и 20 с Premium. Пост взял эти два числа и выдал их за лимит юзернеймов.</p>
      <p>Практический вывод для флиппера: если вы из-за этого поста докупаете имена в портфель или поднимаете цену в объявлениях, вы ставите деньги на непроверенную новость.</p>
      <h2 id="onlab-nom-bitta-akkauntda-qanday">В каком состоянии находятся десятки имён на одном аккаунте?</h2>
      <p>При флипе важнее не количество имён, а их состояние. По данным <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">страницы Fragment</a>, у профиля, группы или канала может быть не больше одного обычного юзернейма и сколько угодно коллекционных. Коллекционное имя привязывается к вашему личному профилю или к публичной группе и каналу, которыми вы владеете.</p>
      <p>В документации Telegram <a href={"https://core.telegram.org/api/fragment"} target="_blank" rel="noopener noreferrer">Fragment collectibles</a> есть ещё одна важная деталь: сразу после привязки имя неактивно, его нужно включить отдельно. То есть «привязано» и «работает» — не одно и то же.</p>
      <CompareTable
        headers={["Состояние", "Что сказано в документации", "Что это значит для портфеля"]}
        rows={[
          ["Привязано", "Имя связано с вашим аккаунтом, каналом или супергруппой", "Ведите список, в каком чате лежит каждое имя"],
          ["Активно", "Привязанное имя само не включается, его нужно активировать отдельно", "Включайте только те имена, которыми реально пользуетесь"],
          ["Основное", "Первое имя в списке показывается в интерфейсе как основное, порядок можно менять", "Ставьте первым имя, которое хотите показывать как бренд"],
          ["Обычный юзернейм", "Может быть только один, деактивировать его нельзя", "Если он есть, он всегда активен"],
        ]}
      />
      <p>Пример: в профиле у вас есть личный обычный @юзернейм, а на Fragment вы купили несколько коллекционных имён. Одно используете как бренд, остальные держите на продажу. В таком случае достаточно включить брендовое имя и поставить его первым в списке, остальные можно не активировать.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="faol-nomlar-chegarasi-nima-malum">Лимит активных имён: что известно, а что нет?</h2>
      <p>На страницах <a href={"https://core.telegram.org/method/account.toggleUsername"} target="_blank" rel="noopener noreferrer">account.toggleUsername</a> для личного аккаунта и <a href={"https://core.telegram.org/method/channels.toggleUsername"} target="_blank" rel="noopener noreferrer">channels.toggleUsername</a> для каналов и супергрупп указана ошибка USERNAMES_ACTIVE_TOO_MUCH. Она означает, что достигнуто максимальное число активных юзернеймов. Если при включении нового имени вы видите эту ошибку, вы упёрлись в лимит.</p>
      <p>Что известно:</p>
      <ul>
        <li>ограничение на число активных имён есть и в профиле, и в каналах и супергруппах;</li>
        <li>при достижении лимита новое имя не включается, возвращается ошибка;</li>
        <li>деактивировать обычный юзернейм, чтобы вместо него включить коллекционный, нельзя.</li>
      </ul>
      <p>Что не подтверждено:</p>
      <ul>
        <li>точное значение лимита — его нет ни в client config, ни в описаниях ошибок;</li>
        <li>что лимит разный для Premium и обычного аккаунта, для профиля и канала;</li>
        <li>что лимит недавно менялся.</li>
      </ul>
      <p>Так что если кто-то говорит «теперь можно включить 20 имён», это тоже непроверенное утверждение.</p>
      <Notice label={"Важно"}>Держать имя на продаже активным не обязательно. По документации новое привязанное имя как раз находится в неактивном состоянии — для него это нормально. Оставьте активные места для имён, которыми реально пользуетесь.</Notice>
      <p>Ещё один тонкий момент: если канал или супергруппу сделать закрытым (private), все привязанные к нему коллекционные имена могут разом стать неактивными. Если вы закрываете канал, чтобы спрятать имена от глаз, потом их придётся включать заново.</p>
      <h2 id="portfelni-sotuvga-tayyorlash-7-qadam">Подготовка портфеля к продаже: 7 шагов</h2>
      <Steps>
        <Step title={"Составьте список"}>выпишите, какие имена лежат на вашем кошельке на Fragment и к какому чату привязано каждое.</Step>
        <Step title={"Разберите активные имена"}>те, что используете, оставьте включёнными, имена на продажу выключите. Обычный юзернейм — исключение.</Step>
        <Step title={"Выберите основное имя"}>основным показывается первое имя в списке, порядок вы меняете сами.</Step>
        <Step title={"При необходимости смените чат"}>по данным Fragment, выбор чата для имени не окончательный, его можно поменять в любой момент. Чтобы показать имя покупателю, его можно временно привязать к отдельному каналу.</Step>
        <Step title={"Заранее предупредите про ботов"}>чтобы привязать имя к боту, нужен необратимый апгрейд (подробнее ниже).</Step>
        <Step title={"Сверьте цену объявления со сделками"}>метод из статьи о том, <Link href="/blog/888-raqam-narxi-fragment-floor-tushadimi">как читать floor и продажи</Link>, подходит и для юзернеймов.</Step>
        <Step title={"Проверьте защиту аккаунта"}>пароль 2FA должен быть включён, сид-фраза кошелька не должна быть передана никому. Как это настроить — в статье о <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">защите аккаунта с 2FA</Link>.</Step>
      </Steps>
      <h2 id="limit-haqidagi-xabar-username-narxini">Поднимет ли новость о лимите цену юзернейма?</h2>
      <p>Сама по себе — нет. Цену показывают реальные сделки на Fragment, а не разговоры в каналах.</p>
      <p>Да и логика поста слабая. Допустим, лимит действительно вырос. Страница Fragment и так не ограничивает число коллекционных имён — ограничение есть только для одновременно включённых. Значит, довод «на аккаунт помещается больше имён» — не серьёзное основание для роста спроса.</p>
      <p>В дни, когда такой пост расходится, цены в объявлениях могут подрасти, но это не значит, что имена продаются. Различайте три числа:</p>
      <ul>
        <li><b>Запрашиваемая цена</b> — число в объявлении. Каждый продавец ставит её как хочет.</li>
        <li><b>Floor</b> — самое дешёвое объявление в коллекции. Это тоже ещё не продажа.</li>
        <li><b>Цена сделки</b> — за сколько имя реально купили. Именно она показывает спрос.</li>
      </ul>
      <p>Если после поста объявления подорожали, а сделки остались на прежнем уровне, это признак ожидания, а не спроса. Прогноза цены в этой статье нет. Если вы смотрите на имена как на вложение, прочитайте разбор о том, <Link href="/blog/tg-domen-investitsiya-arziydimi">стоит ли вкладываться в домен .tg</Link>. Комиссии и расходы из гайда о <Link href="/blog/telegram-username-sotib-olish">покупке юзернейма на Fragment</Link> тоже заранее вычтите из ожидаемой прибыли.</p>
      <h2 id="har-bir-nomga-alohida-vitrina">Отдельный канал-витрина под каждое имя: вот где мешают 10 и 20</h2>
      <p>Некоторые флипперы привязывают каждое имя к отдельному публичному каналу и показывают его как витрину. Реальный лимит 10 и 20 срабатывает именно здесь.</p>
      <CompareTable
        headers={["Тип аккаунта", "Сколько публичных каналов и супергрупп можно создать", "Что это значит для витрин"]}
        rows={[
          ["Без Premium", "10", "На создании 11-го публичного канала упрётесь в лимит"],
          ["С Premium", "20", "Можно открыть вдвое больше каналов-витрин"],
        ]}
      />
      <p>Этот лимит касается не количества имён, а публичных чатов, которые вы создаёте. Пример: в портфеле больше десяти имён, и под каждое вы хотите отдельный канал. На аккаунте без Premium план остановится на десятом канале. Чаще всего это и не нужно: храните имена неактивными, а когда появится покупатель, временно привяжите нужное к общему каналу-витрине. После сделки имя уходит покупателю, а канал освобождается под следующее.</p>
      <p>Если публичных каналов всё же нужно больше, поможет Premium. Его можно оплатить в сумах через @StarsPaymee_bot: 3 месяца — {som(premium(3), "ru")}, 6 месяцев — {som(premium(6), "ru")}, 12 месяцев — {som(premium(12), "ru")}. Цена одинакова при любом способе оплаты, стоимость тарифа на 1 месяц смотрите в боте. Оплатить можно через Click, Payme, Uzum, Paynet или переводом на карту UzCard/HUMO. Боту нужен только @username — пароль и SMS-код не запрашиваются. Premium подключается через механизм подарков Telegram.</p>
      <p>Если на аккаунте уже есть активный Premium, бот новый заказ не откроет: срок не добавляется поверх действующей подписки. Подробнее о тарифах — на <Link href="/premium">странице Premium</Link>.</p>
      <h2 id="xaridor-nomni-botga-ulamoqchi-bolsa">Если покупатель хочет привязать имя к боту</h2>
      <p>По <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">данным Fragment</a>, чтобы привязать коллекционное имя к боту, его нужно проапгрейдить за разовую плату. Этот апгрейд постоянный, отменить его нельзя.</p>
      <p>Размер платы в официальном источнике не подтверждён. Не указывайте эту сумму в объявлении — пусть покупатель увидит её на самом Fragment.</p>
      <Notice label={"Важно"}>Разные покупатели могут по-разному оценить проапгрейженное имя: кому-то это удобство, кому-то лишнее условие. Прямо пишите в объявлении, был апгрейд или нет, и не делайте его сами только ради демонстрации.</Notice>
      <h2 id="nom-savdosida-qayerda-aldanib-qolish">Где можно попасться на обман при торговле именами?</h2>
      <p>Там, где имена часто переходят из рук в руки, много и мошенников. Если видите хотя бы один из этих признаков, остановите сделку:</p>
      <ul>
        <li>Сообщения, которые торопят, вроде «лимит подняли, берите сейчас», и цена, выставленная со ссылкой на такой пост.</li>
        <li>Просьба о предоплате вне Fragment или обещание «передам имя потом».</li>
        <li>Просьба дать доступ к аккаунту, SMS-код, пароль 2FA или сид-фразу кошелька. Честный покупатель и честный продавец такого не просят.</li>
        <li>Просьба «подключите свой аккаунт, чтобы передать имя». Как на самом деле работает подключение аккаунта к Fragment, читайте в статье про <Link href="/blog/fragment-verifikatsiya-shartmi-akkaunt-ulash">верификацию и подключение аккаунтов</Link>.</li>
      </ul>
      <p>StarsPaymee не продаёт коллекционные юзернеймы и не покупает у пользователей Stars или подарки. Для заказа <Link href="/stars">Stars</Link> и Premium нужен только @username. Если кто-то предлагает имя от лица StarsPaymee или просит ваш пароль, проверьте это через <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://core.telegram.org/api/fragment", label: "Fragment collectibles" },
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://core.telegram.org/method/account.toggleUsername", label: "account.toggleUsername" },
          { href: "https://core.telegram.org/method/channels.toggleUsername", label: "channels.toggleUsername" },
          { href: "https://core.telegram.org/api/config", label: "Client configuration" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Можно ли, поверив посту про «теперь 20», докупить ещё имён?", answer: "Как лимит юзернеймов это число официально не подтверждено. В документации 10 и 20 — это лимит на создание публичных каналов, поэтому планируйте покупки по сделкам, а не по постам." },
  { question: "Можно ли держать десятки имён из портфеля на одном аккаунте?", answer: "На странице Fragment ограничение на количество коллекционных имён не указано, рядом с ними может быть и один обычный юзернейм. Лимит касается только имён, включённых одновременно." },
  { question: "Сколько имён можно держать активными одновременно?", answer: "Точного числа на официальных страницах нет. Если при включении нового имени появляется USERNAMES_ACTIVE_TOO_MUCH, лимит достигнут: выключите ненужное имя и потом включите новое." },
  { question: "Есть ли смысл брать Premium для флипа?", answer: "То, что Premium увеличивает лимит активных имён, не подтверждено. Точно известно другое: с ним можно создать 20 публичных каналов и супергрупп вместо 10, а это может пригодиться для каналов-витрин." },
  { question: "Можно ли забрать имя из канала-витрины после показа покупателю?", answer: "Да, Fragment позволяет в любой момент сменить чат, к которому привязано имя. Исключение — апгрейд для привязки к боту: он необратим." },
  { question: "Мешает ли мой старый обычный @юзернейм включать коллекционные имена?", answer: "Пока обычный юзернейм есть, он всегда активен, и выключить его нельзя. Как он учитывается в лимите активных имён, официально не описано." },
  { question: "Что будет, если закрыть канал-витрину, чтобы спрятать имена?", answer: "Когда канал становится закрытым, все привязанные к нему коллекционные имена могут разом стать неактивными. Чтобы снова их показать, придётся включать их заново." },
  { question: "Если продать имя, привязанное к боту, сможет ли покупатель отменить апгрейд?", answer: "Нет, Fragment называет этот апгрейд постоянным. Поэтому прямо укажите в объявлении, был апгрейд или нет." },
  { question: "Как проверить, подорожали ли имена после поста?", answer: "Откройте на Fragment историю продаж имени и сравните последние сделки с более ранними. Если выросли только цены в объявлениях, о росте спроса это ещё не говорит." },
  { question: "Где оплатить Premium в сумах для каналов-витрин?", answer: `Напишите свой @username в @StarsPaymee_bot и выберите тариф: 3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}. Оплата через Click, Payme, Uzum, Paynet или переводом на карту UzCard/HUMO, пароль не нужен.` },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>No, nothing official confirms that the limit went up to 20. The numbers 10 and 20 do appear in Telegram’s documentation, but they don’t refer to usernames. They cap how many public channels and supergroups you can create. Active usernames do have a cap, but its exact number hasn’t been published. The post doesn’t push name prices up by itself.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#endi-20-ta-posti-nimani", label: "What does the “now 20” post claim?" },
          { href: "#onlab-nom-bitta-akkauntda-qanday", label: "How do dozens of names sit on a single account?" },
          { href: "#faol-nomlar-chegarasi-nima-malum", label: "The cap on active names: what’s known and what isn’t" },
          { href: "#portfelni-sotuvga-tayyorlash-7-qadam", label: "Preparing a portfolio for sale: 7 steps" },
          { href: "#limit-haqidagi-xabar-username-narxini", label: "Does the limit news raise username prices?" },
          { href: "#har-bir-nomga-alohida-vitrina", label: "A showcase channel for every name: where 10 and 20 actually bite" },
          { href: "#xaridor-nomni-botga-ulamoqchi-bolsa", label: "If the buyer wants to attach the name to a bot" },
          { href: "#nom-savdosida-qayerda-aldanib-qolish", label: "Where can you get scammed in name trading?" },
        ]}
      />
      <h2 id="endi-20-ta-posti-nimani">What does the “now 20” post claim?</h2>
      <p>A post circulating in Telegram channels says you can now attach up to 20 usernames to a profile or channel, up from 10. If you collect names on Fragment and resell them, it’s easy to read that as “the market just got bigger, demand for names will rise.”</p>
      <p>But it’s an ordinary channel post. We couldn’t find any announcement in official sources about the limit going from 10 to 20.</p>
      <p>The numbers 10 and 20 are real. They just mean something else. On the <a href={"https://core.telegram.org/api/config"} target="_blank" rel="noopener noreferrer">Client configuration</a> page, they set the maximum number of public channels and supergroups one user can create. That’s 10 without Premium and 20 with Premium. The post took those two numbers and called them a username limit.</p>
      <p>What this means for a flipper: if you add names to your portfolio or raise your listing prices because of this post, you’re betting money on an unconfirmed claim.</p>
      <h2 id="onlab-nom-bitta-akkauntda-qanday">How do dozens of names sit on a single account?</h2>
      <p>When you flip, the state each name is in matters more than how many you own. The <a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">Fragment page</a> says a profile, group or channel can have at most one basic username and any number of collectible usernames. You can assign a collectible name to your personal profile or to a public group or channel you own.</p>
      <p>Telegram’s <a href={"https://core.telegram.org/api/fragment"} target="_blank" rel="noopener noreferrer">Fragment collectibles</a> documentation adds one more important detail. A name is inactive right after you assign it, and you have to turn it on separately. So “assigned” and “working” are not the same thing.</p>
      <CompareTable
        headers={["State", "What the docs say", "What it means for your portfolio"]}
        rows={[
          ["Assigned", "The name is linked to an account, channel or supergroup you own", "Keep a list of which chat each name is attached to"],
          ["Active", "An assigned name doesn’t turn on by itself and has to be activated separately", "Only activate the names you actually use"],
          ["Main", "The first name in the list shows in the app as the main one, and you can change the order", "Put the name you want to show as your brand first"],
          ["Basic username", "There can be at most one, and it can’t be made inactive", "If you have one, it’s always active"],
        ]}
      />
      <p>Here’s an example. Your profile has an ordinary personal @handle, and you’ve bought several collectible names on Fragment. You use one of them as your brand and keep the rest for sale. All you need to do is activate the brand name and move it to the top of the list. The others can stay switched off.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="faol-nomlar-chegarasi-nima-malum">The cap on active names: what’s known and what isn’t</h2>
      <p>The error USERNAMES_ACTIVE_TOO_MUCH is listed in two places: the <a href={"https://core.telegram.org/method/account.toggleUsername"} target="_blank" rel="noopener noreferrer">account.toggleUsername</a> page for personal accounts and the <a href={"https://core.telegram.org/method/channels.toggleUsername"} target="_blank" rel="noopener noreferrer">channels.toggleUsername</a> page for channels and supergroups. It means the number of active usernames has reached its maximum. If you see it while turning on a new name, you’ve hit the cap.</p>
      <p>What’s known:</p>
      <ul>
        <li>there’s a cap on active names for profiles and also for channels and supergroups;</li>
        <li>once you hit the cap, a new name won’t turn on and you get an error;</li>
        <li>you can’t switch off your basic username to make room for a collectible one.</li>
      </ul>
      <p>What isn’t confirmed:</p>
      <ul>
        <li>the exact number. It isn’t in the client config or in the error descriptions;</li>
        <li>whether the cap differs between Premium and regular accounts, or between profiles and channels;</li>
        <li>whether the cap changed recently.</li>
      </ul>
      <p>So if someone says “you can now have 20 active names,” that claim hasn’t been verified either.</p>
      <Notice label={"Important"}>A name you’re selling doesn’t need to be active. According to the docs, a newly assigned name starts out inactive, so that’s a normal state for it. Keep your active slots for names you actually use.</Notice>
      <p>Watch out for one more thing. If a channel or supergroup is made private, all the collectible names attached to it can be deactivated at once. If you close a channel to hide your names, you’ll have to turn them back on later.</p>
      <h2 id="portfelni-sotuvga-tayyorlash-7-qadam">Preparing a portfolio for sale: 7 steps</h2>
      <Steps>
        <Step title={"Make a list"}>write down which names are in your Fragment wallet and which chat each one is assigned to.</Step>
        <Step title={"Sort out active names"}>keep the ones you use active and switch off the ones for sale. You can’t switch off your basic username.</Step>
        <Step title={"Pick your main name"}>the first name in the list is shown as the main one, and you can change the order yourself.</Step>
        <Step title={"Move names between chats if needed"}>Fragment says the chat a name is attached to isn’t permanent, and you can change it at any time. To show a name to a buyer, you can temporarily attach it to a separate channel.</Step>
        <Step title={"Mention bots up front"}>attaching a name to a bot requires an upgrade that can’t be undone. There’s more on this below.</Step>
        <Step title={"Compare listing prices with actual sales"}>use the method from the article on <Link href="/blog/888-raqam-narxi-fragment-floor-tushadimi">reading the floor and sales</Link> for usernames too.</Step>
        <Step title={"Check your account security"}>your 2FA password should be on, and your wallet’s recovery phrase should never have been shared with anyone. The setup steps are in the article on <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">protecting your account with 2FA</Link>.</Step>
      </Steps>
      <h2 id="limit-haqidagi-xabar-username-narxini">Does the limit news raise username prices?</h2>
      <p>Not by itself. Prices come from real deals on Fragment, not from what channels are saying.</p>
      <p>The post’s logic is weak anyway. Suppose the limit really did go up. The Fragment page already puts no cap on how many collectible names you can hold. The only cap is on how many are switched on at once. So “more names fit on one account” isn’t a strong reason for demand to grow.</p>
      <p>Listing prices may rise on the days a post like this spreads, but that doesn’t mean names are selling. Keep three numbers apart:</p>
      <ul>
        <li><b>Asking price</b> is the number on the listing. Each seller sets it however they like.</li>
        <li><b>Floor</b> is the cheapest listing in a collection. It isn’t a sale either.</li>
        <li><b>Sale price</b> is what a name actually sold for. This is the number that shows demand.</li>
      </ul>
      <p>If listings got more expensive after the post but sale prices stayed where they were, that shows sellers waiting, not buyers paying more. This article doesn’t forecast prices. If you see names as an investment, read the analysis on <Link href="/blog/tg-domen-investitsiya-arziydimi">putting money into .tg domains</Link>. Also take the commissions and costs from the guide to <Link href="/blog/telegram-username-sotib-olish">buying a username on Fragment</Link> out of your expected profit in advance.</p>
      <h2 id="har-bir-nomga-alohida-vitrina">A showcase channel for every name: where 10 and 20 actually bite</h2>
      <p>Some flippers attach each name to its own public channel and use it as a showcase. That’s where the real 10 and 20 limit comes into play.</p>
      <CompareTable
        headers={["Account type", "Public channels and supergroups you can create", "What it means for the showcase approach"]}
        rows={[
          ["Without Premium", "10", "You hit the limit when creating your 11th public channel"],
          ["With Premium", "20", "You can open twice as many showcase channels"],
        ]}
      />
      <p>The limit counts the public chats you create, not the names you own. Here’s an example. Your portfolio has more than ten names and you want a separate channel for each. On an account without Premium, that plan stops at the tenth channel. Often you don’t need it anyway. Keep the names inactive, and when a buyer turns up, temporarily attach one to a shared showcase channel. After the deal, the name goes to the buyer and the channel is free for the next one.</p>
      <p>If you still need more public channels, Premium helps. You can get it in soums through @StarsPaymee_bot: 3 months for {som(premium(3), "en")}, 6 months for {som(premium(6), "en")}, 12 months for {som(premium(12), "en")}. The price is the same with every payment method. The bot also shows the price of a 1-month plan. You can pay with Click, Payme, Uzum, Paynet or a UzCard/HUMO card transfer. The bot only needs your @username and never asks for a password or SMS code. Premium is activated through Telegram’s gift mechanism.</p>
      <p>If the account already has an active Premium subscription, the bot won’t open a new order, because the new period isn’t added on top of an active one. See the <Link href="/premium">Premium page</Link> for plan details.</p>
      <h2 id="xaridor-nomni-botga-ulamoqchi-bolsa">If the buyer wants to attach the name to a bot</h2>
      <p><a href={"https://fragment.com/about"} target="_blank" rel="noopener noreferrer">According to Fragment</a>, attaching a collectible name to a bot requires a one-time fee to upgrade it. The upgrade is permanent and can’t be undone.</p>
      <p>The fee amount isn’t confirmed in an official source. Don’t put a number in your listing. Let the buyer see it on Fragment itself.</p>
      <Notice label={"Important"}>Future buyers may value an upgraded name differently. Some see it as a convenience, others as an extra condition. State clearly in the listing whether the name has been upgraded. Don’t upgrade it yourself just to show it off.</Notice>
      <h2 id="nom-savdosida-qayerda-aldanib-qolish">Where can you get scammed in name trading?</h2>
      <p>Names change hands often, so scammers show up too. If you see any of these signs, stop the deal:</p>
      <ul>
        <li>Messages that rush you, like “The limit just went up, buy now,” and prices based on posts like that.</li>
        <li>Requests for payment up front outside Fragment, or promises like “I’ll transfer the name later.”</li>
        <li>Requests to log in to your account, or for your SMS code, 2FA password or wallet recovery phrase. An honest buyer or seller never asks for these.</li>
        <li>A request to “connect your account so I can transfer the name.” To learn how linking an account to Fragment works, see the article on <Link href="/blog/fragment-verifikatsiya-shartmi-akkaunt-ulash">verification and linking accounts</Link>.</li>
      </ul>
      <p>StarsPaymee doesn’t sell collectible usernames and doesn’t buy Stars or gifts from users. For <Link href="/stars">Stars</Link> and Premium orders, it only asks for your @username. If someone offers you a username in StarsPaymee’s name or asks for your password, check with <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://core.telegram.org/api/fragment", label: "Fragment collectibles" },
          { href: "https://fragment.com/about", label: "How does Fragment work?" },
          { href: "https://core.telegram.org/method/account.toggleUsername", label: "account.toggleUsername" },
          { href: "https://core.telegram.org/method/channels.toggleUsername", label: "channels.toggleUsername" },
          { href: "https://core.telegram.org/api/config", label: "Client configuration" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Can I trust the “now 20” post and keep buying names?", answer: "Nothing official confirms 20 as a username limit. In the docs, 10 and 20 limit how many public channels you can create. Plan purchases around real sales, not the post." },
  { question: "Can I hold dozens of portfolio names on one account?", answer: "The Fragment page doesn’t list a cap on collectible names, and you can also have one basic username. The cap only applies to names that are switched on at the same time." },
  { question: "How many names can be active at once?", answer: "Official pages don’t give an exact number. If you get USERNAMES_ACTIVE_TOO_MUCH when turning on a new name, you’ve hit the cap. Switch off one you don’t need, then turn on the new one." },
  { question: "Is Premium worth getting for flipping?", answer: "Nothing confirms that Premium raises the cap on active names. What it does give you is a higher public channel and supergroup creation limit, from 10 to 20, which may matter if you use showcase channels." },
  { question: "Can I take a name back from a showcase channel after showing it to a buyer?", answer: "Yes. Fragment lets you change a name’s chat at any time. The exception is the bot upgrade, which is permanent." },
  { question: "Does my old basic @handle get in the way of activating collectible names?", answer: "Your basic username stays active as long as you have it, and you can’t switch it off. Official sources don’t say how it counts toward the active-name cap." },
  { question: "What happens if I make my showcase channel private to hide the names?", answer: "Making a channel private can deactivate all the collectible names attached to it. If you want to show them again later, you’ll need to turn them back on." },
  { question: "If I sell a name that’s attached to a bot, can the buyer reverse the upgrade?", answer: "No. Fragment says the upgrade is permanent. State clearly in your listing whether the name has been upgraded." },
  { question: "How do I check whether names actually got more expensive after the post?", answer: "Open the name’s sales history on Fragment and compare recent sale prices with earlier ones. If only listing prices went up, that doesn’t mean demand grew." },
  { question: "Where can I get Premium in soums for showcase channels?", answer: `Send your @username to @StarsPaymee_bot and pick a plan: 3 months for ${som(premium(3), "en")}, 6 months for ${som(premium(6), "en")}, 12 months for ${som(premium(12), "en")}. You can pay with Click, Payme, Uzum, Paynet or a UzCard/HUMO card transfer, and you won’t be asked for a password.` },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "howto",
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  keywords: ["username flip qilish","telegram username limiti 20 ta","kolleksion username nechta biriktirish mumkin","fragment username qayta sotish","USERNAMES_ACTIVE_TOO_MUCH","username narxi oshadimi","флип юзернеймов телеграм","лимит юзернеймов 20","сколько юзернеймов можно привязать к каналу","перепродажа юзернеймов fragment","коллекционные юзернеймы лимит"],
  howToSteps: [
    { name: "Ro‘yxat tuzing", text: "Fragment’da qaysi nomlar hamyoningizda turganini va har biri qaysi chatga biriktirilganini yozib chiqing." },
    { name: "Faol nomlarni saralang", text: "ishlatayotganlaringizni faol qoldiring, sotuvdagilarini o‘chirib qo‘ying. Oddiy username bundan mustasno." },
    { name: "Asosiy nomni belgilang", text: "ro‘yxatda birinchi turgan nom asosiy bo‘lib ko‘rinadi, tartibni o‘zingiz almashtirasiz." },
    { name: "Kerak bo‘lsa chatni almashtiring", text: "Fragment’ga ko‘ra, nom biriktirilgan chat doimiy emas, uni istalgan payt boshqasiga o‘zgartirsa bo‘ladi. Xaridorga ko‘rsatish uchun nomni vaqtincha alohida kanalga ulash mumkin." },
    { name: "Bot haqida oldindan ayting", text: "nomni botga ulash uchun qaytarib bo‘lmaydigan upgrade kerak (pastda batafsil)." },
    { name: "E’lon narxini bitimlar bilan solishtiring", text: "floor va sotuvlarni o‘qish maqolasidagi usulni username’ga ham qo‘llang." },
    { name: "Akkaunt himoyasini tekshiring", text: "2FA paroli yoqilgan bo‘lsin, hamyonning zaxira so‘zlari hech kimga berilmagan bo‘lsin. Sozlash tartibi 2FA bilan akkauntni himoyalash maqolasida." },
  ],
  locales: {
    uz: {
      title: "Username flip qilish: «endi 20 ta» limiti rostmi va nom narxini oshiradimi?",
      excerpt: "Username limiti 20 taga oshgani rasman tasdiqlanmagan: hujjatdagi 10 va 20 ochiq kanal yaratish limitiga tegishli. Maqolada faol nomlar, portfelni sotuvga tayyorlash va narxga ta’sir tahlil qilingan.",
      metaTitle: "Username flip qilish: «endi 20 ta» limiti rostmi",
      metaDescription: "Username limiti 20 taga oshgani rasman tasdiqlanmagan: hujjatdagi 10 va 20 ochiq kanal yaratish limitiga tegishli.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Флип юзернеймов: правда ли «теперь 20» и вырастет ли цена имени?",
      excerpt: "Рост лимита юзернеймов до 20 официально не подтверждён: 10 и 20 в документации — это лимит на публичные каналы. В статье: активные имена, подготовка портфеля к продаже и влияние новости на цену.",
      metaTitle: "Флип юзернеймов: правда ли «теперь 20»",
      metaDescription: "Рост лимита юзернеймов до 20 официально не подтверждён: 10 и 20 в документации — это лимит на публичные каналы.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Flipping usernames: is the “now 20” limit real, and does it raise prices?",
      excerpt: "There’s no official confirmation that the username limit rose to 20. In Telegram’s docs, 10 and 20 cap public channel creation. Covers active names, preparing a portfolio for sale and what moves prices.",
      metaTitle: "Flipping usernames: is the “now 20” limit real",
      metaDescription: "There’s no official confirmation that the username limit rose to 20. In Telegram’s docs, 10 and 20 cap public channel creation.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
