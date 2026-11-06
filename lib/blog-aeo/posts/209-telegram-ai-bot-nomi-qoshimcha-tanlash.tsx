import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-ai-bot-nomi-qoshimcha-tanlash";

/**
 * Telegram bot nomi «ai» bilan tugashi mumkinmi? AI bot uchun nom tanlash
 *
 * Avtoblogyoz yasagan maqola (2026-11-06): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Telegram’da AI yordamchi yoki agent bot ochib, unga Stars to‘lovini ulamoqchi bo‘lgan kanal yoki kichik biznes egasi bot nomini «bot» o‘rniga «ai», «agent» yoki «app» bilan tugatish mumkinmi, BotFather nima talab qiladi va bu Premium yoki Fragment bilan bog‘liqmi, degan savolga «telegram bot nomi ai bilan tugashi» so‘zlari bilan javob qidiradi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-06):
 *   https://telegram.org/blog/bot-revolution
 *   https://core.telegram.org/method/bots.checkUsername
 *   https://core.telegram.org/api/bots/managed-bots
 *   https://core.telegram.org/api/links
 *   https://telegram.org/blog/ai-bot-revolution-11-new-features
 *   https://core.telegram.org/bots/features
 *   https://core.telegram.org/bots
 *   https://core.telegram.org/bots/api-changelog
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
  return <p>Yo‘q, hozir bunday nom o‘tmaydi. Telegram’ning rasmiy hujjatlariga ko‘ra har qanday bot username’i «bot» bilan tugashi shart. @dokon_ai yoki @kassa_agent rad etiladi, @dokon_ai_bot esa qabul qilinadi. «AI» so‘zini username o‘rtasiga yoki botning ko‘rinadigan ismiga qo‘yish mumkin. Bu qoidaga zid emas va mijozga ham tushunarli.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#ai-agent-yoki-app-bilan", label: "«ai», «agent» yoki «app» bilan tugaydigan bot username’i BotFather’dan o‘tadimi?" },
          { href: "#botfather-usernameni-qaysi-qoidalar-boyicha", label: "BotFather username’ni qaysi qoidalar bo‘yicha tekshiradi?" },
          { href: "#ai-ni-brendga-qoshishning-qoidaga", label: "«AI»ni brendga qo‘shishning qoidaga mos yo‘llari" },
          { href: "#ai-botni-ochishdan-stars-tolovini", label: "AI botni ochishdan Stars to‘lovini sinashgacha: qadamlar" },
          { href: "#reklamani-yangi-qoshimchalarga-moslab-kutish", label: "Reklamani yangi qo‘shimchalarga moslab kutish kerakmi?" },
          { href: "#rasmiy-hujjatlarda-agent-qayerda-uchraydi", label: "Rasmiy hujjatlarda «agent» qayerda uchraydi?" },
          { href: "#premium-obunasi-bot-egasiga-nom", label: "Premium obunasi bot egasiga nom bo‘yicha imtiyoz beradimi?" },
          { href: "#fragmentdan-bot-uchun-nom-olish", label: "Fragment’dan bot uchun nom olish kerakmi?" },
          { href: "#nom-tanlashda-biznes-egalari-kop", label: "Nom tanlashda biznes egalari ko‘p qiladigan xatolar" },
        ]}
      />
      <h2 id="ai-agent-yoki-app-bilan">«ai», «agent» yoki «app» bilan tugaydigan bot username’i BotFather’dan o‘tadimi?</h2>
      <p>O‘tmaydi. Telegram blogida qoida ochiq yozilgan: barcha bot username’lari «bot» bilan tugashi kerak, shu sababli bot havolasini bir qarashda tanib olish mumkin (<a href={"https://telegram.org/blog/bot-revolution"} target="_blank" rel="noopener noreferrer">Telegram Bot Platform</a>). Texnik hujjatda ham xuddi shu talab bor (<a href={"https://core.telegram.org/method/bots.checkUsername"} target="_blank" rel="noopener noreferrer">bots.checkUsername</a>).</p>
      <p>Biznes egasi uchun buning amaliy oqibati bor. Toshkentdagi gul do‘koni egasini misol qilaylik: u AI yordamchi ochmoqchi va oldindan vizitka hamda Instagram postiga «@gul_ai» deb yozib qo‘ydi. BotFather bu nomni qabul qilmaydi, shuning uchun bosmaxonadan qayta buyurtma berish va postlarni tahrirlashga to‘g‘ri keladi.</p>
      <p>To‘g‘ri tartib boshqacha: avval nomni BotFather’da band qiling, keyin reklamaga chiqaring. Kanallarda tarqalgan «yangi qo‘shimchalar» xabari haqida pastda alohida bo‘lim bor.</p>
      <h2 id="botfather-usernameni-qaysi-qoidalar-boyicha">BotFather username’ni qaysi qoidalar bo‘yicha tekshiradi?</h2>
      <p>Rasmiy tavsifga ko‘ra bot username’ida faqat harf, raqam va pastki chiziq bo‘ladi, u «bot» bilan tugaydi va to‘liq uzunligi 5–32 belgi (<a href={"https://core.telegram.org/method/bots.checkUsername"} target="_blank" rel="noopener noreferrer">core.telegram.org</a>).</p>
      <CompareTable
        headers={["Talab", "Nima ruxsat etiladi", "To‘g‘ri", "Noto‘g‘ri"]}
        rows={[
          ["Oxiri", "Faqat «bot»", "@kassa_ai_bot", "@kassa_ai"],
          ["Belgilar", "Harf, raqam, pastki chiziq", "@nonvoy_24_bot", "@nonvoy-24-bot"],
          ["Tutuq belgisi", "Ruxsat etilgan belgilar ro‘yxatida yo‘q", "@dokon_ai_bot", "@do‘kon_ai_bot"],
          ["Uzunlik", "5 dan 32 belgigacha", "@ai_kassa_bot", "32 belgidan uzun nom"],
        ]}
      />
      <p>O‘zbekcha nomlarda eng ko‘p uchraydigan to‘siq — tutuq belgisi. «Do‘kon», «o‘quv», «g‘alla» kabi so‘zlarni username’da belgisiz yozing: dokon, oquv, galla.</p>
      <p>Nom oxirida «bot» bo‘lmasa, API <b>USERNAME_SUFFIX_MISSING</b> xatosini qaytaradi. BotFather’dagi rad javobining texnik sababi aynan shu (<a href={"https://core.telegram.org/method/bots.checkUsername"} target="_blank" rel="noopener noreferrer">bots.checkUsername</a>).</p>
      <p>Boshqa bot orqali boshqariladigan (managed) botlar uchun ham qoida o‘zgarmaydi: hujjatda «barcha botlardagi kabi» username «bot» bilan tugashi kerakligi yozilgan (<a href={"https://core.telegram.org/api/bots/managed-bots"} target="_blank" rel="noopener noreferrer">Managed bots</a>). Bot yaratishni taklif qiladigan havolada nom «bot» bilan tugamasa, ilova uni foydalanuvchiga ko‘rsatishdan oldin oxiriga «bot» qo‘shib qo‘yishi kerak (<a href={"https://core.telegram.org/api/links"} target="_blank" rel="noopener noreferrer">Deep links</a>). Ya’ni tizim o‘zi ham «bot»siz nomni to‘g‘rilab beradi.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="ai-ni-brendga-qoshishning-qoidaga">«AI»ni brendga qo‘shishning qoidaga mos yo‘llari</h2>
      <p>Botning ikki xil nomi bor. <b>Username</b> — @ bilan boshlanadigan manzil, u yuqoridagi qoidaga bo‘ysunadi. <b>Ko‘rinadigan ism</b> — chat tepasida chiqadigan nom. «bot» bilan tugash talabi username uchun yozilgan, shuning uchun «AI yordamchi» yoki «Buyurtma agenti» kabi so‘zlarni ismga yozish mumkin.</p>
      <CompareTable
        headers={["Bot vazifasi", "Username namunasi", "Ism namunasi"]}
        rows={[
          ["Mijoz savollariga javob beruvchi AI", "@choyxona_ai_bot", "Choyxona AI yordamchi"],
          ["Buyurtma qabul qiluvchi agent", "@gul_agent_bot", "Gul do‘koni — buyurtma agenti"],
          ["Kanal uchun mini o‘yin", "@viktorina_game_bot", "Viktorina o‘yini"],
          ["Katalog yoki mini ilova", "@kitob_app_bot", "Kitob do‘koni ilovasi"],
        ]}
      />
      <p>Uzunlikni hisoblash oddiy: majburiy «bot» oxiri 3 belgini oladi, oldidagi pastki chiziq ixtiyoriy. Demak brend qismi uchun 28–29 belgigacha joy qoladi. Lekin uzun nomni mijoz eslab qolmaydi va xato teradi, shuning uchun qisqaroq variantni tanlash qulayroq.</p>
      <p>Username’ni Instagram sahifangiz, kanalingiz va vizitkangizdagi yozilish bilan bir xil qiling. Mijoz «@samarkand_agent_bot»ni ko‘rib, uni sizning brendingiz bilan darhol bog‘lashi kerak. Yozilish har joyda har xil bo‘lsa, o‘xshash nomli soxta botni ajratish qiyinlashadi.</p>
      <p>Brend nomingiz bilan username qabul qilinmasa, «ai» yoki «agent»ni o‘rtaga qo‘shib, shahar nomini yoki qisqartmani sinab ko‘ring: @gul_ai_bot o‘tmasa, @gul_toshkent_ai_bot yoki @gulshop_ai_bot.</p>
      <h2 id="ai-botni-ochishdan-stars-tolovini">AI botni ochishdan Stars to‘lovini sinashgacha: qadamlar</h2>
      <Steps>
        <Step title={"Nomni oldindan tekshiring"}>2–3 variantni yozib, har birini qoidaga solishtiring: harf, raqam, pastki chiziq, 5–32 belgi va «bot» oxiri.</Step>
        <Step title={"BotFather’da bot yarating"}>/newbot buyrug‘idan keyin avval ism, so‘ng username so‘raladi. Rad javobi kelsa, birinchi navbatda oxiriga «bot» qo‘shib ko‘ring.</Step>
        <Step title={"Ism va tavsifni to‘ldiring"}>«AI yordamchi», «agent» kabi so‘zlarni shu yerga yozing. Tavsifda bot nima qilishini bir gap bilan tushuntiring.</Step>
        <Step title={"Havolani bitta joydan tarqating"}>kanal, sayt va Instagram’da faqat bitta rasmiy havola tursin. Mijoz botni qidiruvdan emas, shu havoladan topsin.</Step>
        <Step title={"To‘lovni ulang"}>Stars qabul qilishning texnik tomoni <Link href="/blog/telegram-botga-stars-tolovini-ulash">botga Stars to‘lovini ulash</Link> va <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API nima va qanday ulanadi</Link> maqolalarida yoritilgan.</Step>
        <Step title={"To‘lovni o‘zingizda sinab ko‘ring"}>kichik Stars balansi bilan to‘lov oynasi, chek va botning javob xabarlarini tekshiring.</Step>
      </Steps>
      <p>Sinov uchun Stars’ni so‘mda @StarsPaymee_bot orqali olish mumkin. Eng kam buyurtma — 50 Stars, faqat @username kerak, parol yoki SMS kod so‘ralmaydi. Buyurtma odatda bir necha soniyada avtomatik yetkaziladi. Bir dona narxi to‘lov usuliga bog‘liq: karta o‘tkazmasi (UzCard/HUMO) yoki bot balansidan {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Batafsil — <Link href="/stars">Stars sahifasi</Link>.</p>
      <p>Kanal orqali Stars ishlashni rejalashtirsangiz, daromad yo‘llari <Link href="/blog/telegram-kanal-stars-monetizatsiya">kanalda Stars monetizatsiyasi</Link> maqolasida bor.</p>
      <h2 id="reklamani-yangi-qoshimchalarga-moslab-kutish">Reklamani yangi qo‘shimchalarga moslab kutish kerakmi?</h2>
      <p>Ba’zi Telegram kanallarida botlar username’iga agent, ai, game, app kabi yangi qo‘shimchalar qo‘shilishi va bunday botlar interfeysda «Agent» yorlig‘i bilan chiqishi haqida post tarqaldi. Ayrimlarida bu Premium obunachilar uchun bepul bo‘lishi mumkinligi ham aytilgan.</p>
      <Notice label={"Muhim"}>Bu da’volar telegram.org va core.telegram.org’dagi rasmiy sahifalarda topilmadi. Funksiya beta versiyalarda yoki ilova kodida bor-yo‘qligi ham ushbu maqolada tekshirilmagan.</Notice>
      <p>Rasmiy texnik sahifalar hozir ham username «bot» bilan tugashini talab qiladi. Yorliq haqida ham aniq yozuv bor: botlarda «last seen» yoki onlayn holati bo‘lmaydi, ularning o‘rniga chatda «bot» yorlig‘i ko‘rinadi (<a href={"https://core.telegram.org/bots"} target="_blank" rel="noopener noreferrer">Bots: An introduction</a>). «Agent» yorlig‘i haqida rasmiy tasdiq yo‘q.</p>
      <p>Bot egasi uchun amaliy yo‘l: botni hozirgi qoida bo‘yicha ishga tushiring va mijozlarni kuttirmang. Qoida o‘zgarsa, bu telegram.org blogida yoki core.telegram.org hujjatlarida e’lon qilinadi. O‘shanda yangi nomni qo‘shimcha ravishda ko‘rib chiqish mumkin.</p>
      <h2 id="rasmiy-hujjatlarda-agent-qayerda-uchraydi">Rasmiy hujjatlarda «agent» qayerda uchraydi?</h2>
      <p>«Agent» so‘zi Telegram’ning rasmiy materiallarida bor, lekin username turi sifatida emas, botlarning ishlash usuli sifatida.</p>
      <ul>
        <li>Telegram blogida Bot-to-Bot funksiyasi AI ixlosmandlariga ish jarayonlarini to‘liq avtonom agentlar bilan avtomatlashtirish imkonini berishi aytilgan (<a href={"https://telegram.org/blog/ai-bot-revolution-11-new-features"} target="_blank" rel="noopener noreferrer">Telegram blog</a>).</li>
        <li>Bot Features hujjatida ko‘p agentli jarayon misoli bor: koordinator bot natijani yig‘ishdan oldin mutaxassis botlardan tekshirish, tarjima, jadval tuzish yoki buyurtmani qayta ishlashni so‘raydi (<a href={"https://core.telegram.org/bots/features"} target="_blank" rel="noopener noreferrer">Bot Features</a>).</li>
        <li>Bunday tizimdagi har bir bot baribir oddiy bot, shuning uchun uning username’i ham «…bot» bilan tugaydi.</li>
        <li>Kichik biznes misoli: @gul_agent_bot buyurtmani qabul qiladi, @gul_tarjima_bot esa rus tilidagi xabarni o‘zbekchaga o‘giradi. Ikkalasi ham qoidaga mos.</li>
        <li>Yangiliklarni <a href={"https://core.telegram.org/bots/api-changelog"} target="_blank" rel="noopener noreferrer">Bot API changelog</a> sahifasidan kuzating. U yerda 2026-yil 24-avgust sanali Bot API 10.3 yozuvi bor.</li>
      </ul>
      <p>Demak «agent» bot ichidagi mantiq bilan bog‘liq: bot qanday ishlaydi, boshqa botlar bilan qanday ishlaydi. Manzil esa avvalgidek «bot» bilan tugaydi.</p>
      <h2 id="premium-obunasi-bot-egasiga-nom">Premium obunasi bot egasiga nom bo‘yicha imtiyoz beradimi?</h2>
      <p>Rasmiy hujjatlarda bunday imtiyoz yozilmagan. Bot username qoidasi egasining obunasiga qarab o‘zgarishi tasdiqlanmagan. Premium olsangiz ham, BotFather sizdan xuddi shu «bot» oxirini kutadi.</p>
      <p>Biznes botlar bo‘yicha esa aniq ma’lumot bor: Bot API changelog’iga ko‘ra Business Bots endi foydalanuvchi akkauntlarini Telegram Premium obunasisiz ham boshqara oladi (<a href={"https://core.telegram.org/bots/api-changelog"} target="_blank" rel="noopener noreferrer">changelog</a>). Business profilni sozlash tartibi — <Link href="/blog/telegram-biznes-akkaunt-ochish">Telegram biznes akkaunti ochish</Link> maqolasida.</p>
      <p>Agar Premium boshqa imkoniyatlari uchun kerak bo‘lsa, StarsPaymee’da u faqat @username orqali, Telegram’ning sovg‘a mexanizmi bilan ulanadi: 3 oy {som(premium(3), "uz")}, 6 oy {som(premium(6), "uz")}, 12 oy {som(premium(12), "uz")}. Narx hamma to‘lov usulida bir xil. Akkauntda faol Premium bo‘lsa, bot yangi buyurtma ochmaydi — obuna tugashini kutish kerak. Batafsil — <Link href="/premium">Premium sahifasi</Link>.</p>
      <h2 id="fragmentdan-bot-uchun-nom-olish">Fragment’dan bot uchun nom olish kerakmi?</h2>
      <p>Oddiy kichik biznes uchun BotFather’da beriladigan username yetarli. Fragment’da kolleksiya @nomlar sotiladi. Ularni xarid qilish, auksion va botga biriktirish tartibi <Link href="/blog/telegram-username-sotib-olish">Fragment’da username sotib olish</Link> maqolasida bosqichma-bosqich yozilgan.</p>
      <Notice label={"Muhim"}>«ai» yoki «agent» bilan tugaydigan bot username’lari Fragment’da sotilishi ushbu maqolada tasdiqlanmagan. Xariddan oldin <a href={"https://fragment.com"} target="_blank" rel="noopener noreferrer">fragment.com</a> saytida o‘zingiz tekshiring.</Notice>
      <p>Kimdir sizga «bot» bilan tugamaydigan bot nomini «Fragment orqali» sotishni taklif qilsa, ehtiyot bo‘ling. Pul o‘tkazishdan oldin nomni rasmiy saytda qidiring va sotuvchi sahifasini solishtiring. Shaxsiy chatda «chegirma bilan» taklif qilingan nomga rasmiy saytda tekshirmasdan pul yubormang.</p>
      <p>Fragment brendni kuchaytirish uchun ixtiyoriy qadam, bot ishlashi uchun shart emas.</p>
      <h2 id="nom-tanlashda-biznes-egalari-kop">Nom tanlashda biznes egalari ko‘p qiladigan xatolar</h2>
      <ul>
        <li><b>Ruxsat etilmagan belgilar.</b> Tire, nuqta, bo‘shliq va tutuq belgisi qoidadagi ro‘yxatda yo‘q. Lotin harflaridan foydalanish qulayroq — mijoz uni istalgan klaviaturada oson teradi.</li>
        <li><b>Uzunlikni hisobga olmaslik.</b> 5 belgidan qisqa yoki 32 belgidan uzun nom o‘tmaydi.</li>
        <li><b>Mish-mishga qarab reklama qilish.</b> «@brend_ai» deb banner chiqarib, keyin nomni o‘zgartirish pul va vaqt yo‘qotishiga olib keladi.</li>
        <li><b>Har joyda har xil yozilish.</b> Kanalda bitta, saytda boshqa havola tursa, o‘xshash nomli bot ochib mijozni chalg‘itish osonlashadi. Faqat bitta rasmiy havolani tarqating.</li>
        <li><b>Ism va username’ni aralashtirish.</b> Ismda «AI yordamchi» deb yozib, username’da ham shuni kutish xato. Ism erkin, username esa qoidaga bo‘ysunadi.</li>
        <li><b>Mijozdan ortiqcha ma’lumot so‘rash.</b> Parol yoki SMS kod so‘raydigan bot ishonchni yo‘qotadi. StarsPaymee misolida xarid uchun faqat @username so‘raladi — AI botingizda ham shu tamoyilni saqlang.</li>
      </ul>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://telegram.org/blog/bot-revolution", label: "Telegram Bot Platform" },
          { href: "https://core.telegram.org/method/bots.checkUsername", label: "bots.checkUsername" },
          { href: "https://core.telegram.org/api/bots/managed-bots", label: "Managed bots" },
          { href: "https://core.telegram.org/api/links", label: "Deep links" },
          { href: "https://telegram.org/blog/ai-bot-revolution-11-new-features", label: "Guest AI Bots, Bot-to-Bot Chats, Chat Automation, Custom AI Styles, 100M+ Emoji & Sticker Search and Much More" },
          { href: "https://core.telegram.org/bots/features", label: "Telegram Bot Features" },
          { href: "https://core.telegram.org/bots", label: "Bots: An introduction for developers" },
          { href: "https://core.telegram.org/bots/api-changelog", label: "Bot API changelog" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "BotFather menga «username must end in bot» deyapti. Nima qilay?", answer: "Tanlagan nomingiz oxiriga «bot» qo‘shing: masalan, @kassa_ai o‘rniga @kassa_ai_bot. Bu xabar faqat majburiy qo‘shimcha yetishmaganini bildiradi." },
  { question: "@shop_ai_bot kabi username qoidaga to‘g‘ri keladimi?", answer: "Ha. Unda faqat harf va pastki chiziq bor, oxiri «bot» va uzunligi 5–32 belgi oralig‘ida." },
  { question: "Botning chatda ko‘rinadigan ismiga «AI yordamchi» deb yozsam bo‘ladimi?", answer: "Bo‘ladi. «bot» bilan tugash talabi @ bilan boshlanadigan manzilga tegishli, ismga emas." },
  { question: "Username’da katta harf ishlatsa bo‘ladimi yoki faqat kichik harfmi?", answer: "Rasmiy tavsifda faqat «harf, raqam va pastki chiziq» deyilgan, harf registri bo‘yicha alohida qoida bu maqolada tekshirilmagan. Kichik harf bilan yozish mijoz uchun qulayroq." },
  { question: "Botni yaratgandan keyin username’ni almashtirish mumkinmi?", answer: "Bu imkoniyat va uning tartibi ushbu maqolada tekshirilmagan — BotFather’dagi bot sozlamalarida ko‘ring. Yangi nom ham «bot» bilan tugashi kerak, eski reklamadagi havolalarni esa o‘zingiz yangilaysiz." },
  { question: "Kanalda o‘qidimki, tez orada botlar «Agent» belgisi bilan chiqadi. Botni ishga tushirishni kechiktirsammi?", answer: "Kechiktirish shart emas: bunday yorliq ham, yangi qo‘shimchalar ham rasmiy manbalarda tasdiqlanmagan. O‘zgarish bo‘lsa, telegram.org yoki core.telegram.org’da e’lon qilinadi." },
  { question: "Bot egasi sifatida Premium’ga obuna bo‘lsam, nom qoidasi yumshaydimi?", answer: "Yo‘q, rasmiy hujjatlarda obunaga bog‘liq imtiyoz yozilmagan. BotFather Premium bor-yo‘qligidan qat’i nazar «bot» oxirini so‘raydi." },
  { question: "Do‘konim uchun Business bot ulamoqchiman. Avval Premium sotib olishim kerakmi?", answer: "Bot API changelog’idagi yozuvga ko‘ra Business Bots foydalanuvchi akkauntini Premium obunasisiz ham boshqara oladi. Premium’ni boshqa imkoniyatlari kerak bo‘lsagina oling." },
  { question: "AI botimga Stars to‘lovini sinash uchun Stars’ni so‘mda qayerdan olaman?", answer: `@StarsPaymee_bot orqali: eng kam buyurtma 50 Stars, faqat @username kerak. Dona narxi karta o‘tkazmasi yoki bot balansida ${som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali ${som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}.` },
  { question: "Bot nomini Fragment’dan sotib olish shartmi?", answer: "Yo‘q, oddiy bot uchun BotFather’da olingan username yetarli. «ai» bilan tugaydigan bot nomlari Fragment’da sotilishi esa tasdiqlanmagan." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Нет, сейчас такое имя не пройдёт. По официальной документации Telegram любой username бота обязан заканчиваться на «bot». @dokon_ai или @kassa_agent будут отклонены, а @dokon_ai_bot — принят. Слово «AI» можно поставить в середину username или в отображаемое имя бота. Правилу это не противоречит, а клиенту так даже понятнее.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#ai-agent-yoki-app-bilan", label: "Пройдёт ли через BotFather username бота, который заканчивается на «ai», «agent» или «app»?" },
          { href: "#botfather-usernameni-qaysi-qoidalar-boyicha", label: "По каким правилам BotFather проверяет username?" },
          { href: "#ai-ni-brendga-qoshishning-qoidaga", label: "Как добавить «AI» в бренд, не нарушая правил" },
          { href: "#ai-botni-ochishdan-stars-tolovini", label: "От создания AI-бота до проверки оплаты в Stars: шаги" },
          { href: "#reklamani-yangi-qoshimchalarga-moslab-kutish", label: "Стоит ли ждать «новых суффиксов» и переделывать рекламу?" },
          { href: "#rasmiy-hujjatlarda-agent-qayerda-uchraydi", label: "Где слово «agent» встречается в официальной документации?" },
          { href: "#premium-obunasi-bot-egasiga-nom", label: "Даёт ли подписка Premium владельцу бота привилегии при выборе имени?" },
          { href: "#fragmentdan-bot-uchun-nom-olish", label: "Нужно ли покупать имя для бота на Fragment?" },
          { href: "#nom-tanlashda-biznes-egalari-kop", label: "Частые ошибки владельцев бизнеса при выборе имени" },
        ]}
      />
      <h2 id="ai-agent-yoki-app-bilan">Пройдёт ли через BotFather username бота, который заканчивается на «ai», «agent» или «app»?</h2>
      <p>Не пройдёт. В блоге Telegram правило сформулировано прямо: все username ботов должны заканчиваться на «bot», поэтому ссылку на бота можно узнать с первого взгляда (<a href={"https://telegram.org/blog/bot-revolution"} target="_blank" rel="noopener noreferrer">Telegram Bot Platform</a>). Такое же требование есть и в технической документации (<a href={"https://core.telegram.org/method/bots.checkUsername"} target="_blank" rel="noopener noreferrer">bots.checkUsername</a>).</p>
      <p>Для владельца бизнеса у этого правила есть практические последствия. Возьмём владелицу цветочного магазина в Ташкенте. Она собирается запустить AI-помощника и заранее напечатала на визитках и написала в посте в Instagram «@gul_ai». BotFather такое имя не примет. Придётся заново заказывать печать и редактировать посты.</p>
      <p>Правильный порядок другой: сначала занимаете имя в BotFather, потом запускаете рекламу. О сообщениях про «новые суффиксы», которые разошлись по каналам, — отдельный раздел ниже.</p>
      <h2 id="botfather-usernameni-qaysi-qoidalar-boyicha">По каким правилам BotFather проверяет username?</h2>
      <p>По официальному описанию в username бота допускаются только буквы, цифры и нижнее подчёркивание. Он должен заканчиваться на «bot», а полная длина — от 5 до 32 символов (<a href={"https://core.telegram.org/method/bots.checkUsername"} target="_blank" rel="noopener noreferrer">core.telegram.org</a>).</p>
      <CompareTable
        headers={["Требование", "Что разрешено", "Правильно", "Неправильно"]}
        rows={[
          ["Окончание", "Только «bot»", "@kassa_ai_bot", "@kassa_ai"],
          ["Символы", "Буквы, цифры, нижнее подчёркивание", "@nonvoy_24_bot", "@nonvoy-24-bot"],
          ["Апостроф", "Нет в списке разрешённых символов", "@dokon_ai_bot", "@do‘kon_ai_bot"],
          ["Длина", "От 5 до 32 символов", "@ai_kassa_bot", "Имя длиннее 32 символов"],
        ]}
      />
      <p>В узбекских названиях чаще всего мешает апостроф. Слова вроде «do‘kon», «o‘quv», «g‘alla» пишите в username без него: dokon, oquv, galla.</p>
      <p>Если в конце нет «bot», API возвращает ошибку <b>USERNAME_SUFFIX_MISSING</b>. Именно она — техническая причина отказа в BotFather (<a href={"https://core.telegram.org/method/bots.checkUsername"} target="_blank" rel="noopener noreferrer">bots.checkUsername</a>).</p>
      <p>Для управляемых (managed) ботов, которыми управляет другой бот, правило то же: в документации прямо написано, что «как и у всех ботов» username должен заканчиваться на «bot» (<a href={"https://core.telegram.org/api/bots/managed-bots"} target="_blank" rel="noopener noreferrer">Managed bots</a>). А если в ссылке с предложением создать бота имя не заканчивается на «bot», приложение должно само дописать «bot», прежде чем показать вариант пользователю (<a href={"https://core.telegram.org/api/links"} target="_blank" rel="noopener noreferrer">Deep links</a>). То есть система сама исправляет имя без «bot».</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="ai-ni-brendga-qoshishning-qoidaga">Как добавить «AI» в бренд, не нарушая правил</h2>
      <p>У бота два разных названия. <b>Username</b> — адрес, который начинается с @, на него распространяется правило выше. <b>Отображаемое имя</b> — то, что видно в шапке чата. Требование об окончании на «bot» касается только username, поэтому слова вроде «AI-помощник» или «Агент заказов» спокойно пишутся в имени.</p>
      <CompareTable
        headers={["Задача бота", "Пример username", "Пример имени"]}
        rows={[
          ["AI, который отвечает на вопросы клиентов", "@choyxona_ai_bot", "Чайхана — AI-помощник"],
          ["Агент, который принимает заказы", "@gul_agent_bot", "Цветочный магазин — агент заказов"],
          ["Мини-игра для канала", "@viktorina_game_bot", "Викторина"],
          ["Каталог или мини-приложение", "@kitob_app_bot", "Книжный магазин — приложение"],
        ]}
      />
      <p>Длину посчитать просто: обязательное окончание «bot» занимает 3 символа, нижнее подчёркивание перед ним — по желанию. Значит, на брендовую часть остаётся до 28–29 символов. Но длинное имя клиент не запомнит и наберёт с ошибкой, так что короткий вариант удобнее.</p>
      <p>Пишите username так же, как он указан в вашем Instagram, канале и на визитке. Увидев «@samarkand_agent_bot», клиент должен сразу связать его с вашим брендом. Если написание везде разное, отличить поддельного бота с похожим именем становится сложнее.</p>
      <p>Если username с названием бренда занят, вставьте «ai» или «agent» в середину и попробуйте добавить город или сокращение: не прошёл @gul_ai_bot — попробуйте @gul_toshkent_ai_bot или @gulshop_ai_bot.</p>
      <h2 id="ai-botni-ochishdan-stars-tolovini">От создания AI-бота до проверки оплаты в Stars: шаги</h2>
      <Steps>
        <Step title={"Проверьте имя заранее"}>выпишите 2–3 варианта и сверьте каждый с правилом: буквы, цифры, нижнее подчёркивание, 5–32 символа и окончание «bot».</Step>
        <Step title={"Создайте бота в BotFather"}>после команды /newbot сначала спросят имя, затем username. Если пришёл отказ, в первую очередь попробуйте дописать в конце «bot».</Step>
        <Step title={"Заполните имя и описание"}>слова «AI-помощник», «агент» и подобные пишите именно сюда. В описании одной фразой объясните, что умеет бот.</Step>
        <Step title={"Распространяйте ссылку из одного источника"}>в канале, на сайте и в Instagram должна стоять одна официальная ссылка. Пусть клиент находит бота по ней, а не через поиск.</Step>
        <Step title={"Подключите оплату"}>техническая сторона приёма Stars разобрана в статьях <Link href="/blog/telegram-botga-stars-tolovini-ulash">как подключить оплату Stars к боту</Link> и <Link href="/blog/telegram-stars-api-nima-ulanish">что такое Stars API и как его подключить</Link>.</Step>
        <Step title={"Проверьте оплату на себе"}>с небольшим балансом Stars пройдите окно оплаты, посмотрите чек и ответные сообщения бота.</Step>
      </Steps>
      <p>Stars для теста можно купить за сумы через @StarsPaymee_bot. Минимальный заказ — 50 Stars, нужен только @username, пароль или SMS-код не запрашиваются. Обычно заказ доставляется автоматически за несколько секунд. Цена за одну звезду зависит от способа оплаты: переводом с карты (UzCard/HUMO) или с баланса бота — {som(STARS_PER_UNIT_UZS, "ru")}, через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Подробнее — на <Link href="/stars">странице Stars</Link>.</p>
      <p>Если планируете зарабатывать Stars через канал, способы описаны в статье <Link href="/blog/telegram-kanal-stars-monetizatsiya">о монетизации канала через Stars</Link>.</p>
      <h2 id="reklamani-yangi-qoshimchalarga-moslab-kutish">Стоит ли ждать «новых суффиксов» и переделывать рекламу?</h2>
      <p>В некоторых Telegram-каналах разошёлся пост о том, что к username ботов добавят новые окончания — agent, ai, game, app и другие, а такие боты будут отображаться с меткой «Agent». В отдельных публикациях ещё утверждалось, что для подписчиков Premium это может быть бесплатно.</p>
      <Notice label={"Важно"}>Эти утверждения не нашлись на официальных страницах telegram.org и core.telegram.org. Есть ли такая функция в бета-версиях или в коде приложения, в этой статье тоже не проверялось.</Notice>
      <p>Официальные технические страницы по-прежнему требуют, чтобы username заканчивался на «bot». О метке тоже написано чётко: у ботов нет статуса «last seen» или «в сети», вместо него в чате показывается метка «bot» (<a href={"https://core.telegram.org/bots"} target="_blank" rel="noopener noreferrer">Bots: An introduction</a>). Официального подтверждения метки «Agent» нет.</p>
      <p>Практический путь для владельца бота: запускайте бота по нынешнему правилу и не заставляйте клиентов ждать. Если правило изменится, об этом объявят в блоге telegram.org или в документации core.telegram.org. Тогда и можно будет дополнительно подумать о новом имени.</p>
      <h2 id="rasmiy-hujjatlarda-agent-qayerda-uchraydi">Где слово «agent» встречается в официальной документации?</h2>
      <p>Слово «agent» в официальных материалах Telegram есть, но не как тип username, а как способ работы ботов.</p>
      <ul>
        <li>В блоге Telegram сказано, что функция Bot-to-Bot позволяет энтузиастам AI автоматизировать рабочие процессы с помощью полностью автономных агентов (<a href={"https://telegram.org/blog/ai-bot-revolution-11-new-features"} target="_blank" rel="noopener noreferrer">Telegram blog</a>).</li>
        <li>В документе Bot Features приведён пример многоагентного процесса: бот-координатор просит ботов-специалистов проверить, перевести, составить расписание или обработать заказ, а затем объединяет результаты (<a href={"https://core.telegram.org/bots/features"} target="_blank" rel="noopener noreferrer">Bot Features</a>).</li>
        <li>Каждый бот в такой системе — всё равно обычный бот, поэтому и его username заканчивается на «…bot».</li>
        <li>Пример для малого бизнеса: @gul_agent_bot принимает заказ, а @gul_tarjima_bot переводит сообщение с русского на узбекский. Оба имени соответствуют правилу.</li>
        <li>Следите за новостями на странице <a href={"https://core.telegram.org/bots/api-changelog"} target="_blank" rel="noopener noreferrer">Bot API changelog</a>. Там есть запись Bot API 10.3 от 24 августа 2026 года.</li>
      </ul>
      <p>Итак, «agent» относится к логике внутри бота: как он работает и как взаимодействует с другими ботами. А адрес, как и раньше, заканчивается на «bot».</p>
      <h2 id="premium-obunasi-bot-egasiga-nom">Даёт ли подписка Premium владельцу бота привилегии при выборе имени?</h2>
      <p>В официальной документации таких привилегий нет. То, что правило для username бота меняется в зависимости от подписки владельца, не подтверждено. Даже с Premium BotFather будет ждать от вас то же окончание «bot».</p>
      <p>По бизнес-ботам есть конкретная информация: согласно Bot API changelog, Business Bots теперь могут управлять аккаунтами пользователей и без подписки Telegram Premium (<a href={"https://core.telegram.org/bots/api-changelog"} target="_blank" rel="noopener noreferrer">changelog</a>). Как настроить бизнес-профиль — в статье <Link href="/blog/telegram-biznes-akkaunt-ochish">как открыть бизнес-аккаунт в Telegram</Link>.</p>
      <p>Если Premium нужен ради других возможностей, в StarsPaymee он подключается только по @username, через механизм подарков Telegram: 3 месяца — {som(premium(3), "ru")}, 6 месяцев — {som(premium(6), "ru")}, 12 месяцев — {som(premium(12), "ru")}. Цена одинакова при любом способе оплаты. Если на аккаунте уже действует Premium, бот не откроет новый заказ — нужно дождаться окончания подписки. Подробнее — на <Link href="/premium">странице Premium</Link>.</p>
      <h2 id="fragmentdan-bot-uchun-nom-olish">Нужно ли покупать имя для бота на Fragment?</h2>
      <p>Обычному малому бизнесу хватит username, который выдаёт BotFather. На Fragment продаются коллекционные @имена. Как их купить, как проходит аукцион и как привязать имя к боту, пошагово описано в статье <Link href="/blog/telegram-username-sotib-olish">о покупке username на Fragment</Link>.</p>
      <Notice label={"Важно"}>То, что на Fragment продаются username ботов с окончанием «ai» или «agent», в этой статье не подтверждено. Перед покупкой проверьте сами на сайте <a href={"https://fragment.com"} target="_blank" rel="noopener noreferrer">fragment.com</a>.</Notice>
      <p>Если вам предлагают купить «через Fragment» имя бота, которое не заканчивается на «bot», будьте осторожны. Прежде чем переводить деньги, найдите имя на официальном сайте и сверьте страницу продавца. Не отправляйте деньги за имя, предложенное в личке «со скидкой», без проверки на официальном сайте.</p>
      <p>Fragment — необязательный шаг для усиления бренда, для работы бота он не нужен.</p>
      <h2 id="nom-tanlashda-biznes-egalari-kop">Частые ошибки владельцев бизнеса при выборе имени</h2>
      <ul>
        <li><b>Запрещённые символы.</b> Дефиса, точки, пробела и апострофа нет в списке разрешённых. Удобнее пользоваться латиницей — клиент легко наберёт её на любой клавиатуре.</li>
        <li><b>Не учли длину.</b> Имя короче 5 или длиннее 32 символов не пройдёт.</li>
        <li><b>Реклама по слухам.</b> Выпустить баннер с «@brend_ai», а потом менять имя — значит потерять деньги и время.</li>
        <li><b>Разное написание в разных местах.</b> Если в канале одна ссылка, а на сайте другая, мошеннику проще создать бота с похожим именем и запутать клиента. Распространяйте одну официальную ссылку.</li>
        <li><b>Путаница между именем и username.</b> Написать в имени «AI-помощник» и ожидать того же в username — ошибка. Имя свободное, а username подчиняется правилу.</li>
        <li><b>Лишние данные от клиента.</b> Бот, который просит пароль или SMS-код, теряет доверие. В StarsPaymee для покупки запрашивается только @username — придерживайтесь того же принципа и в своём AI-боте.</li>
      </ul>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://telegram.org/blog/bot-revolution", label: "Telegram Bot Platform" },
          { href: "https://core.telegram.org/method/bots.checkUsername", label: "bots.checkUsername" },
          { href: "https://core.telegram.org/api/bots/managed-bots", label: "Managed bots" },
          { href: "https://core.telegram.org/api/links", label: "Deep links" },
          { href: "https://telegram.org/blog/ai-bot-revolution-11-new-features", label: "Guest AI Bots, Bot-to-Bot Chats, Chat Automation, Custom AI Styles, 100M+ Emoji & Sticker Search and Much More" },
          { href: "https://core.telegram.org/bots/features", label: "Telegram Bot Features" },
          { href: "https://core.telegram.org/bots", label: "Bots: An introduction for developers" },
          { href: "https://core.telegram.org/bots/api-changelog", label: "Bot API changelog" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "BotFather пишет «username must end in bot». Что делать?", answer: "Допишите «bot» в конец выбранного имени: например, @kassa_ai_bot вместо @kassa_ai. Это сообщение означает лишь то, что не хватает обязательного окончания." },
  { question: "Подходит ли под правила username вроде @shop_ai_bot?", answer: "Да. В нём только буквы и нижнее подчёркивание, окончание — «bot», а длина укладывается в диапазон 5–32 символа." },
  { question: "Можно ли написать «AI-помощник» в имени бота, которое видно в чате?", answer: "Можно. Требование заканчиваться на «bot» касается адреса, начинающегося с @, а не отображаемого имени." },
  { question: "Можно ли использовать в username заглавные буквы или только строчные?", answer: "В официальном описании сказано только «буквы, цифры и нижнее подчёркивание», отдельное правило о регистре в этой статье не проверялось. Строчными буквами клиенту набирать удобнее." },
  { question: "Можно ли сменить username после создания бота?", answer: "Эта возможность и её порядок в статье не проверялись — посмотрите в настройках бота в BotFather. Новое имя тоже должно заканчиваться на «bot», а ссылки в старой рекламе придётся обновить самостоятельно." },
  { question: "Прочитал в канале, что скоро у ботов появится значок «Agent». Отложить запуск?", answer: "Откладывать не нужно: ни такая метка, ни новые окончания официально не подтверждены. Если что-то изменится, об этом объявят на telegram.org или core.telegram.org." },
  { question: "Если владелец бота оформит Premium, правило об имени станет мягче?", answer: "Нет, в официальной документации привилегий, связанных с подпиской, нет. BotFather требует окончание «bot» независимо от наличия Premium." },
  { question: "Хочу подключить Business-бота к магазину. Сначала нужно купить Premium?", answer: "Согласно записи в Bot API changelog, Business Bots могут управлять аккаунтом пользователя и без подписки Premium. Берите Premium, только если вам нужны его другие возможности." },
  { question: "Где купить Stars за сумы, чтобы протестировать оплату в AI-боте?", answer: `Через @StarsPaymee_bot: минимальный заказ — 50 Stars, нужен только @username. Одна звезда стоит ${som(STARS_PER_UNIT_UZS, "ru")} при переводе с карты или с баланса бота и ${som(STARS_PER_UNIT_GATEWAY_UZS, "ru")} через Click, Payme, Uzum или Paynet.` },
  { question: "Обязательно ли покупать имя бота на Fragment?", answer: "Нет, для обычного бота достаточно username, полученного в BotFather. А продажа на Fragment имён ботов с окончанием «ai» не подтверждена." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>No, a name like that won’t go through right now. Telegram’s official documentation says every bot username must end in “bot”. @dokon_ai or @kassa_agent will be rejected, while @dokon_ai_bot will be accepted. You can still use “AI” in the middle of the username or in the bot’s display name. That doesn’t break the rule, and customers understand it.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#ai-agent-yoki-app-bilan", label: "Will BotFather accept a bot username ending in “ai”, “agent” or “app”?" },
          { href: "#botfather-usernameni-qaysi-qoidalar-boyicha", label: "What rules does BotFather use to check a username?" },
          { href: "#ai-ni-brendga-qoshishning-qoidaga", label: "Rule-compliant ways to add “AI” to your brand" },
          { href: "#ai-botni-ochishdan-stars-tolovini", label: "From launching an AI bot to testing Stars payments: step by step" },
          { href: "#reklamani-yangi-qoshimchalarga-moslab-kutish", label: "Should you wait and adapt your ads to the new suffixes?" },
          { href: "#rasmiy-hujjatlarda-agent-qayerda-uchraydi", label: "Where does “agent” appear in the official documentation?" },
          { href: "#premium-obunasi-bot-egasiga-nom", label: "Does a Premium subscription give bot owners any naming privileges?" },
          { href: "#fragmentdan-bot-uchun-nom-olish", label: "Do you need to buy a bot name on Fragment?" },
          { href: "#nom-tanlashda-biznes-egalari-kop", label: "Common naming mistakes business owners make" },
        ]}
      />
      <h2 id="ai-agent-yoki-app-bilan">Will BotFather accept a bot username ending in “ai”, “agent” or “app”?</h2>
      <p>No. The Telegram blog states the rule plainly: all bot usernames must end in “bot”, so a bot link can be recognised at a glance (<a href={"https://telegram.org/blog/bot-revolution"} target="_blank" rel="noopener noreferrer">Telegram Bot Platform</a>). The technical documentation has the same requirement (<a href={"https://core.telegram.org/method/bots.checkUsername"} target="_blank" rel="noopener noreferrer">bots.checkUsername</a>).</p>
      <p>This has real consequences for business owners. Take a flower shop owner in Tashkent who wants to launch an AI assistant and has already printed “@gul_ai” on business cards and an Instagram post. BotFather won’t accept that name, so the cards have to be reprinted and the posts edited.</p>
      <p>The right order is the reverse: reserve the name in BotFather first, then start advertising it. The “new suffixes” rumour circulating in channels is covered in its own section below.</p>
      <h2 id="botfather-usernameni-qaysi-qoidalar-boyicha">What rules does BotFather use to check a username?</h2>
      <p>According to the official description, a bot username may contain only letters, digits and underscores, must end in “bot”, and must be 5–32 characters long in total (<a href={"https://core.telegram.org/method/bots.checkUsername"} target="_blank" rel="noopener noreferrer">core.telegram.org</a>).</p>
      <CompareTable
        headers={["Requirement", "What is allowed", "Correct", "Incorrect"]}
        rows={[
          ["Ending", "Only “bot”", "@kassa_ai_bot", "@kassa_ai"],
          ["Characters", "Letters, digits, underscore", "@nonvoy_24_bot", "@nonvoy-24-bot"],
          ["Apostrophe", "Not in the list of allowed characters", "@dokon_ai_bot", "@do‘kon_ai_bot"],
          ["Length", "From 5 to 32 characters", "@ai_kassa_bot", "A name longer than 32 characters"],
        ]}
      />
      <p>With Uzbek names, the most common obstacle is the apostrophe-like mark in letters such as o‘ and g‘. Write words like “do‘kon”, “o‘quv” or “g‘alla” without it in the username: dokon, oquv, galla.</p>
      <p>If the name doesn’t end in “bot”, the API returns the <b>USERNAME_SUFFIX_MISSING</b> error. That is the technical reason behind BotFather’s rejection message (<a href={"https://core.telegram.org/method/bots.checkUsername"} target="_blank" rel="noopener noreferrer">bots.checkUsername</a>).</p>
      <p>The rule is the same for managed bots, which are controlled through another bot: the documentation says that, “as with all bots”, the username must end in “bot” (<a href={"https://core.telegram.org/api/bots/managed-bots"} target="_blank" rel="noopener noreferrer">Managed bots</a>). If a link that suggests creating a bot contains a name without “bot” at the end, the app should append “bot” before recommending it to the user (<a href={"https://core.telegram.org/api/links"} target="_blank" rel="noopener noreferrer">Deep links</a>). In other words, the system itself corrects names that lack the suffix.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="ai-ni-brendga-qoshishning-qoidaga">Rule-compliant ways to add “AI” to your brand</h2>
      <p>A bot has two different names. The <b>username</b> is the address that starts with @, and it follows the rules above. The <b>display name</b> is what appears at the top of the chat. The “must end in bot” requirement applies to the username, so words like “AI assistant” or “Order agent” can go in the display name.</p>
      <CompareTable
        headers={["Bot’s job", "Username example", "Display name example"]}
        rows={[
          ["AI that answers customer questions", "@choyxona_ai_bot", "Choyxona AI assistant"],
          ["Agent that takes orders", "@gul_agent_bot", "Flower shop — order agent"],
          ["Mini game for a channel", "@viktorina_game_bot", "Quiz game"],
          ["Catalogue or mini app", "@kitob_app_bot", "Bookshop app"],
        ]}
      />
      <p>The length maths is simple: the mandatory “bot” ending takes 3 characters, and the underscore before it is optional. That leaves up to 28–29 characters for the brand part. Long names are hard to remember and easy to mistype, though, so a shorter option is usually more practical.</p>
      <p>Keep the username spelled exactly as it appears on your Instagram page, channel and business cards. A customer who sees “@samarkand_agent_bot” should connect it with your brand immediately. If the spelling varies from place to place, it becomes harder to spot a fake bot with a similar name.</p>
      <p>If your brand name is already taken, add “ai” or “agent” in the middle and try a city name or an abbreviation: if @gul_ai_bot is unavailable, try @gul_toshkent_ai_bot or @gulshop_ai_bot.</p>
      <h2 id="ai-botni-ochishdan-stars-tolovini">From launching an AI bot to testing Stars payments: step by step</h2>
      <Steps>
        <Step title={"Check the name in advance"}>write down 2–3 options and test each against the rules: letters, digits, underscores, 5–32 characters and a “bot” ending.</Step>
        <Step title={"Create the bot in BotFather"}>after the /newbot command, you’ll be asked for the display name first, then the username. If you get a rejection, start by adding “bot” to the end.</Step>
        <Step title={"Fill in the name and description"}>this is where words like “AI assistant” or “agent” belong. Explain what the bot does in one sentence in the description.</Step>
        <Step title={"Share the link from one place"}>keep a single official link on your channel, website and Instagram. Customers should find the bot through that link, not through search.</Step>
        <Step title={"Connect payments"}>the technical side of accepting Stars is covered in <Link href="/blog/telegram-botga-stars-tolovini-ulash">connecting Stars payments to a bot</Link> and <Link href="/blog/telegram-stars-api-nima-ulanish">what the Stars API is and how to connect it</Link>.</Step>
        <Step title={"Test the payment yourself"}>use a small Stars balance to check the payment window, the receipt and the bot’s reply messages.</Step>
      </Steps>
      <p>For testing, you can buy Stars in soums through @StarsPaymee_bot. The minimum order is 50 Stars, and only your @username is needed — no password or SMS code. Orders are usually delivered automatically within a few seconds. The price per Star depends on the payment method: {som(STARS_PER_UNIT_UZS, "en")} by card transfer (UzCard/HUMO) or from the bot balance, and {som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click, Payme, Uzum or Paynet. More details are on the <Link href="/stars">Stars page</Link>.</p>
      <p>If you plan to earn Stars through a channel, the options are described in <Link href="/blog/telegram-kanal-stars-monetizatsiya">Stars monetisation for channels</Link>.</p>
      <h2 id="reklamani-yangi-qoshimchalarga-moslab-kutish">Should you wait and adapt your ads to the new suffixes?</h2>
      <p>Some Telegram channels have been sharing a post claiming that new username suffixes such as agent, ai, game and app are coming for bots, and that such bots will show an “Agent” label in the interface. Some posts also say this might come at no extra cost for Premium subscribers.</p>
      <Notice label={"Important"}>These claims were not found on the official pages at telegram.org and core.telegram.org. This article also did not check whether the feature exists in beta versions or in the app’s code.</Notice>
      <p>The official technical pages still require usernames to end in “bot”. There is also a clear statement about the label: bots don’t have a “last seen” or online status — instead, a “bot” label appears in the chat (<a href={"https://core.telegram.org/bots"} target="_blank" rel="noopener noreferrer">Bots: An introduction</a>). There is no official confirmation of an “Agent” label.</p>
      <p>The practical path for a bot owner: launch under the current rules and don’t keep customers waiting. If the rules change, it will be announced on the telegram.org blog or in the core.telegram.org documentation. At that point you can consider an additional name.</p>
      <h2 id="rasmiy-hujjatlarda-agent-qayerda-uchraydi">Where does “agent” appear in the official documentation?</h2>
      <p>The word “agent” does appear in Telegram’s official materials — but as a way bots work, not as a username type.</p>
      <ul>
        <li>The Telegram blog says the Bot-to-Bot feature lets AI enthusiasts automate workflows with fully autonomous agents (<a href={"https://telegram.org/blog/ai-bot-revolution-11-new-features"} target="_blank" rel="noopener noreferrer">Telegram blog</a>).</li>
        <li>The Bot Features documentation gives an example of a multi-agent workflow: a coordinator bot asks specialist bots to review, translate, schedule or process an order before combining the results (<a href={"https://core.telegram.org/bots/features"} target="_blank" rel="noopener noreferrer">Bot Features</a>).</li>
        <li>Every bot in such a setup is still a regular bot, so its username still ends in “…bot”.</li>
        <li>A small business example: @gul_agent_bot takes orders, and @gul_tarjima_bot translates messages from Russian into Uzbek. Both follow the rules.</li>
        <li>Follow updates on the <a href={"https://core.telegram.org/bots/api-changelog"} target="_blank" rel="noopener noreferrer">Bot API changelog</a> page. It contains a Bot API 10.3 entry dated 24 August 2026.</li>
      </ul>
      <p>So “agent” is about the logic inside the bot: how it works and how it interacts with other bots. The address still ends in “bot”.</p>
      <h2 id="premium-obunasi-bot-egasiga-nom">Does a Premium subscription give bot owners any naming privileges?</h2>
      <p>The official documentation describes no such privilege. There is no confirmation that the bot username rule changes depending on the owner’s subscription. Even with Premium, BotFather expects the same “bot” ending.</p>
      <p>For business bots, though, there is concrete information: according to the Bot API changelog, Business Bots can now manage user accounts without a Telegram Premium subscription (<a href={"https://core.telegram.org/bots/api-changelog"} target="_blank" rel="noopener noreferrer">changelog</a>). How to set up a Business profile is explained in <Link href="/blog/telegram-biznes-akkaunt-ochish">opening a Telegram business account</Link>.</p>
      <p>If you need Premium for its other features, StarsPaymee activates it using only your @username, through Telegram’s gift mechanism: 3 months {som(premium(3), "en")}, 6 months {som(premium(6), "en")}, 12 months {som(premium(12), "en")}. The price is the same for every payment method. If the account already has an active Premium subscription, the bot won’t open a new order — you need to wait until it expires. More details are on the <Link href="/premium">Premium page</Link>.</p>
      <h2 id="fragmentdan-bot-uchun-nom-olish">Do you need to buy a bot name on Fragment?</h2>
      <p>For an ordinary small business, the username you get in BotFather is enough. Fragment sells collectible @usernames. Buying them, the auction process and assigning one to a bot are explained step by step in <Link href="/blog/telegram-username-sotib-olish">buying a username on Fragment</Link>.</p>
      <Notice label={"Important"}>This article has not confirmed that bot usernames ending in “ai” or “agent” are sold on Fragment. Check for yourself on <a href={"https://fragment.com"} target="_blank" rel="noopener noreferrer">fragment.com</a> before buying.</Notice>
      <p>If someone offers to sell you a bot name that doesn’t end in “bot” “via Fragment”, be careful. Before sending money, search for the name on the official site and compare it with the seller’s page. Never pay for a name offered “at a discount” in a private chat without checking it on the official site.</p>
      <p>Fragment is an optional step for strengthening your brand, not a requirement for the bot to work.</p>
      <h2 id="nom-tanlashda-biznes-egalari-kop">Common naming mistakes business owners make</h2>
      <ul>
        <li><b>Disallowed characters.</b> Hyphens, dots, spaces and apostrophes are not on the list. Latin letters are the safest choice — customers can type them easily on any keyboard.</li>
        <li><b>Ignoring the length limit.</b> Names shorter than 5 or longer than 32 characters won’t be accepted.</li>
        <li><b>Advertising based on rumours.</b> Printing a banner with “@brand_ai” and renaming later costs both money and time.</li>
        <li><b>Inconsistent spelling.</b> If your channel shows one link and your website another, it’s easier for someone to set up a lookalike bot and mislead customers. Share only one official link.</li>
        <li><b>Mixing up the display name and the username.</b> Writing “AI assistant” in the display name and expecting the same in the username is a mistake. The display name is free-form; the username follows the rules.</li>
        <li><b>Asking customers for too much information.</b> A bot that asks for passwords or SMS codes loses trust. With StarsPaymee, only an @username is needed for a purchase — keep the same principle in your AI bot.</li>
      </ul>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://telegram.org/blog/bot-revolution", label: "Telegram Bot Platform" },
          { href: "https://core.telegram.org/method/bots.checkUsername", label: "bots.checkUsername" },
          { href: "https://core.telegram.org/api/bots/managed-bots", label: "Managed bots" },
          { href: "https://core.telegram.org/api/links", label: "Deep links" },
          { href: "https://telegram.org/blog/ai-bot-revolution-11-new-features", label: "Guest AI Bots, Bot-to-Bot Chats, Chat Automation, Custom AI Styles, 100M+ Emoji & Sticker Search and Much More" },
          { href: "https://core.telegram.org/bots/features", label: "Telegram Bot Features" },
          { href: "https://core.telegram.org/bots", label: "Bots: An introduction for developers" },
          { href: "https://core.telegram.org/bots/api-changelog", label: "Bot API changelog" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "BotFather tells me “username must end in bot”. What should I do?", answer: "Add “bot” to the end of the name you chose: for example, @kassa_ai_bot instead of @kassa_ai. The message simply means the mandatory suffix is missing." },
  { question: "Is a username like @shop_ai_bot allowed?", answer: "Yes. It contains only letters and underscores, ends in “bot”, and its length falls within the 5–32 character range." },
  { question: "Can I write “AI assistant” in the bot’s display name in the chat?", answer: "Yes. The “must end in bot” requirement applies to the @ address, not to the display name." },
  { question: "Can I use capital letters in the username, or only lowercase?", answer: "The official description only says “letters, digits and underscores”; any separate rule on letter case was not checked for this article. Lowercase is usually easier for customers to type." },
  { question: "Can I change the username after creating the bot?", answer: "Whether this is possible and how it works was not checked for this article — look in the bot’s settings in BotFather. Any new name must also end in “bot”, and you’ll need to update links in your old ads yourself." },
  { question: "I read in a channel that bots will soon get an “Agent” badge. Should I delay my launch?", answer: "There’s no need to wait: neither the label nor the new suffixes have been confirmed by official sources. Any change would be announced on telegram.org or core.telegram.org." },
  { question: "If I subscribe to Premium as a bot owner, will the naming rule be relaxed?", answer: "No, the official documentation lists no subscription-based privileges. BotFather asks for the “bot” ending whether or not you have Premium." },
  { question: "I want to connect a Business bot for my shop. Do I need to buy Premium first?", answer: "According to the Bot API changelog, Business Bots can manage a user account without a Premium subscription. Only get Premium if you need its other features." },
  { question: "Where can I buy Stars in soums to test payments in my AI bot?", answer: `Through @StarsPaymee_bot: the minimum order is 50 Stars and only your @username is needed. Each Star costs ${som(STARS_PER_UNIT_UZS, "en")} by card transfer or bot balance, and ${som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click, Payme, Uzum or Paynet.` },
  { question: "Do I have to buy my bot’s name on Fragment?", answer: "No, a username obtained in BotFather is enough for a regular bot. It has not been confirmed that bot names ending in “ai” are sold on Fragment." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "howto",
  datePublished: "2026-11-06",
  dateModified: "2026-11-06",
  keywords: ["telegram bot nomi ai bilan tugashi","telegram bot username ai","botfather username bot bilan tugashi","telegram ai bot ochish","telegram agent bot nomi","bot username qoidalari","имя бота telegram ai","username бота должен заканчиваться на bot","telegram бот ai agent username","botfather username ошибка","USERNAME_SUFFIX_MISSING"],
  howToSteps: [
    { name: "Nomni oldindan tekshiring", text: "2–3 variantni yozib, har birini qoidaga solishtiring: harf, raqam, pastki chiziq, 5–32 belgi va «bot» oxiri." },
    { name: "BotFather’da bot yarating", text: "/newbot buyrug‘idan keyin avval ism, so‘ng username so‘raladi. Rad javobi kelsa, birinchi navbatda oxiriga «bot» qo‘shib ko‘ring." },
    { name: "Ism va tavsifni to‘ldiring", text: "«AI yordamchi», «agent» kabi so‘zlarni shu yerga yozing. Tavsifda bot nima qilishini bir gap bilan tushuntiring." },
    { name: "Havolani bitta joydan tarqating", text: "kanal, sayt va Instagram’da faqat bitta rasmiy havola tursin. Mijoz botni qidiruvdan emas, shu havoladan topsin." },
    { name: "To‘lovni ulang", text: "Stars qabul qilishning texnik tomoni botga Stars to‘lovini ulash va Stars API nima va qanday ulanadi maqolalarida yoritilgan." },
    { name: "To‘lovni o‘zingizda sinab ko‘ring", text: "kichik Stars balansi bilan to‘lov oynasi, chek va botning javob xabarlarini tekshiring." },
  ],
  locales: {
    uz: {
      title: "Telegram bot nomi «ai» bilan tugashi mumkinmi? AI bot uchun nom tanlash",
      excerpt: "Yo‘q, BotFather bot username’ini faqat «bot» bilan tugasa qabul qiladi, «ai» va «agent»ni esa nom o‘rtasiga yoki ismga yozish mumkin. Maqolada qoidalar, namunalar, Premium va Fragment bilan bog‘liqlik bor.",
      metaTitle: "Telegram bot nomi «ai» bilan tugashi mumkinmi? AI bot uchun",
      metaDescription: "Yo‘q, BotFather bot username’ini faqat «bot» bilan tugasa qabul qiladi, «ai» va «agent»ni esa nom o‘rtasiga yoki ismga yozish mumkin.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Может ли username бота в Telegram заканчиваться на ai? Имя для AI-бота",
      excerpt: "Нет: BotFather принимает username бота, только если он заканчивается на «bot», а «ai» и «agent» можно поставить в середину или в отображаемое имя. В статье — правила, примеры, связь с Premium и Fragment.",
      metaTitle: "Может ли username бота в Telegram заканчиваться на ai? Имя",
      metaDescription: "Нет: BotFather принимает username бота, только если он заканчивается на «bot», а «ai» и «agent» можно поставить в середину или в отображаемое имя.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Can a Telegram bot username end in “ai”? Naming rules for AI bots",
      excerpt: "No. BotFather only accepts bot usernames that end in “bot”, but you can put “ai” or “agent” in the middle or in the display name. This guide covers the rules, examples, and how Premium and Fragment fit in.",
      metaTitle: "Can a Telegram bot username end in “ai”? Naming rules for",
      metaDescription: "No. BotFather only accepts bot usernames that end in “bot”, but you can put “ai” or “agent” in the middle or in the display name.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
