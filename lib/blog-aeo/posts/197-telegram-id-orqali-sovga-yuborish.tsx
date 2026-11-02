import { Link } from "@/i18n/navigation";
import {
  CompareTable,
  InfoCard,
  InfoGrid,
  InlineCta,
  KeyFacts,
  Notice,
  Sources,
  Step,
  Steps,
  Toc,
} from "@/components/blog/aeo-blocks";
import { STARS_PER_UNIT_UZS } from "@/lib/products";
import { TELEGRAM_BOT_URL_PUBLIC, TELEGRAM_SUPPORT_URL_PUBLIC } from "@/lib/site";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-id-orqali-sovga-yuborish";

/**
 * Username'i yo'q odamga Telegram sovg'asini Telegram ID orqali yuborish.
 *
 * NEGA ALOHIDA SAHIFA (2026-11-01): «username'siz sovg'a», «telegram id orqali gift»,
 * «подарок по id» — yangi niyat, saytda yo'q edi. 05 (sovg'a yuborish qo'llanmasi) va
 * 14 (narxlar) faqat @username'ni aytardi; 185/186 Stars uchun username kerakligini
 * yozadi (u to'g'ri — Stars/Premium ID bilan ketmaydi). Ular endi shu sahifaga havola
 * beradi. Takrorlanmaydi: Stars'ga aylantirish — 48, yetmay qolgan sovg'a — 166.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-01):
 * - Bot ilovasi (frontend, jonli bundle index-Dj622lt2.js): Gift va NewGift'da «Username
 *   yoki Telegram ID» maydoni; faqat raqam 5–15 ta = ID (utils/giftRecipient.js
 *   GIFT_ID_RE); ID yozilganda qidiruv yo'q — «Telegram ID · ID …» kartasi; «O'zim»
 *   username bo'lmasa o'z ID'sini qo'yadi; GiftIdNote ogohlantirishlari (gift.idNote,
 *   gift.idSelfNote).
 * - Yetkazish (bot v52, 2026-11-01, egasi qarori): akkauntlarimizdan biri odamni tanisa —
 *   userbot (Stars'ga aylanadi), tanimasa — Bot API sendGift (aylanmaydi). Jonli: birinchi
 *   ID buyurtmalar bot orqali yetgan. Navbat holati — «Sovg'angiz navbatda».
 * - core.telegram.org/bots/api#sendgift: «The gift can't be converted to Telegram Stars by
 *   the receiver», user_id — «Unique identifier of the target user».
 * - core.telegram.org/bots/api#user: id — «Unique identifier for this user or bot»,
 *   username — Optional. telegram.org/faq: «You don't have to get one».
 * - core.telegram.org/api/gifts: hide_name — nom profil mehmonlaridan yashiriladi,
 *   «they will still see that you sent the gift»; disallowed_gifts — qabul cheklovi.
 * - Narx (bot constants/gifts.js): GIFT_PRICE_OVERRIDE 5992502615223568003 → 11 000,
 *   GIFT_PRICE_MAP[50] → 12 000; onlayn usullarda ustama, karta o'tkazma/balans — 0.
 * - Ayiqcha: 2026-10-31 Telegram 15⭐ ayiqcha 5170233102089322756 ni katalogdan oldi,
 *   o'rniga 50⭐ 5992502615223568003 (getAvailableGifts). Tugash sanasi e'lon qilinmagan.
 * - Telegram Desktop «Show Peer IDs in Profile» — rasmiy hujjat yo'q (@tginfo va boshqa
 *   qo'llanmalar), shuning uchun «versiyaga qarab farq qilishi mumkin» bilan berildi.
 * YOZILMAGAN (tasdiqlanmagan): «faqat bizda», aniq tugash sanasi, avtomatik anonimlik,
 * avtomatik pul qaytarish. Ayiqcha katalogdan chiqsa — #ayiqcha bo'limi va CTA almashtiriladi.
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/ /g, " ");
const som = (n: number, locale: Locale) =>
  `${fmt(n, locale)} ${locale === "uz" ? "so‘m" : locale === "ru" ? "сум" : "som"}`;

const BEAR_STARS = 50;
/** Bot: constants/gifts.js GIFT_PRICE_OVERRIDE (egasi, 2026-10-31). */
const BEAR_PRICE_UZS = 11000;
/** Bot: GIFT_PRICE_MAP[50] — katalogdagi boshqa 50 ⭐ sovg‘alar. */
const OTHER_50_PRICE_UZS = 12000;
/** Ayiqcha narxi 50 ta Stars narxiga tengmi — tenglik buzilsa, gap avtomatik tushib qoladi. */
const BEAR_EQUALS_STARS = BEAR_PRICE_UZS === BEAR_STARS * STARS_PER_UNIT_UZS;

const BEAR_CTA = { kind: "gift", slug: "ayiqcha" } as const;

function IdTable({ locale }: { locale: Locale }) {
  const c = {
    uz: {
      h: ["", "@username", "Telegram ID", "Telefon raqam"],
      r: [
        ["Ko‘rinishi", "@ va harf bilan boshlanadi", "Faqat raqamlar: 123456789", "+998 …"],
        ["Har akkauntda bormi", "Yo‘q — ixtiyoriy", "Ha — har birida bor", "—"],
        ["StarsPaymee’da sovg‘a uchun", "Ha", "Ha — username bo‘lmasa", "Yo‘q"],
        ["Ilova kimligini ko‘rsatadimi", "Ha — ism va rasm chiqadi", "Yo‘q — faqat raqam", "—"],
      ],
    },
    ru: {
      h: ["", "@username", "Telegram ID", "Номер телефона"],
      r: [
        ["Как выглядит", "Начинается с @ и буквы", "Только цифры: 123456789", "+998 …"],
        ["Есть у каждого аккаунта", "Нет — по желанию", "Да — у каждого", "—"],
        ["Для подарка в StarsPaymee", "Да", "Да — если нет username", "Нет"],
        ["Покажет ли приложение, кто это", "Да — имя и фото", "Нет — только цифры", "—"],
      ],
    },
    en: {
      h: ["", "@username", "Telegram ID", "Phone number"],
      r: [
        ["What it looks like", "Starts with @ and a letter", "Digits only: 123456789", "+998 …"],
        ["Every account has one", "No — optional", "Yes — every account", "—"],
        ["For a StarsPaymee gift", "Yes", "Yes — when there is no username", "No"],
        ["Does the app show who it is", "Yes — name and photo", "No — just the number", "—"],
      ],
    },
  }[locale];
  return <CompareTable headers={c.h} rows={c.r.map(([a, ...rest]) => [<strong key="a">{a}</strong>, ...rest])} />;
}

function DeliveryTable({ locale }: { locale: Locale }) {
  const c = {
    uz: {
      h: ["", "Akkauntimiz uni taniydi", "Hech bir akkauntimiz tanimaydi"],
      r: [
        ["Qachon", "Masalan, oluvchi avval @StarsPaymeeSupport’ga yozgan", "U StarsPaymee akkauntlari bilan yozishmagan"],
        ["Kimdan keladi", "StarsPaymee akkauntidan", "StarsPaymee botidan"],
        ["Sovg‘aning o‘zi", "Katalogdagi o‘sha Telegram sovg‘asi", "Katalogdagi o‘sha Telegram sovg‘asi"],
        ["Stars’ga aylantirish", "Mumkin — Telegram shartlari bilan", "Mumkin emas — Bot API qoidasi"],
      ],
    },
    ru: {
      h: ["", "Наш аккаунт его знает", "Ни один наш аккаунт не знает"],
      r: [
        ["Когда", "Например, получатель раньше писал в @StarsPaymeeSupport", "Он не переписывался с аккаунтами StarsPaymee"],
        ["От кого придёт", "С аккаунта StarsPaymee", "От бота StarsPaymee"],
        ["Сам подарок", "Тот же подарок Telegram из каталога", "Тот же подарок Telegram из каталога"],
        ["Обмен на Stars", "Можно — по правилам Telegram", "Нельзя — правило Bot API"],
      ],
    },
    en: {
      h: ["", "One of our accounts knows them", "None of our accounts knows them"],
      r: [
        ["When", "For example, they once messaged @StarsPaymeeSupport", "They have never chatted with a StarsPaymee account"],
        ["Who it comes from", "A StarsPaymee account", "The StarsPaymee bot"],
        ["The gift itself", "The same Telegram gift from the catalog", "The same Telegram gift from the catalog"],
        ["Converting to Stars", "Possible — under Telegram’s rules", "Not possible — a Bot API rule"],
      ],
    },
  }[locale];
  return <CompareTable headers={c.h} rows={c.r.map(([a, b, d]) => [<strong key="a">{a}</strong>, b, d])} />;
}

const SRC = {
  sendGift: "https://core.telegram.org/bots/api#sendgift",
  user: "https://core.telegram.org/bots/api#user",
  faq: "https://telegram.org/faq#usernames-and-t-me",
  gifts: "https://core.telegram.org/api/gifts",
};

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Ha. StarsPaymee ilovasida «Sovg‘a markazi» → «Gift olish» bo‘limidagi <b>«Username yoki Telegram ID»</b>{" "}
      maydoniga oluvchining raqamli Telegram ID’sini yozasiz, sovg‘ani tanlab so‘mda to‘laysiz — undan username
      so‘rash shart emas. Ikki narsani oldindan biling: ID bo‘yicha ilova ism yoki rasm ko‘rsatmaydi, raqamni
      o‘zingiz tekshirasiz; StarsPaymee akkauntlari bu odamni tanimasa, sovg‘a <b>bot nomidan</b> keladi va uni
      Stars’ga aylantirib bo‘lmaydi. Hozirgi katalogdagi yangi {BEAR_STARS} ⭐ ayiqcha —{" "}
      {som(BEAR_PRICE_UZS, "uz")}.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#id-nima", label: "Telegram ID nima va username’dan farqi" },
          { href: "#qadamlar", label: "ID orqali sovg‘a yuborish: 6 qadam" },
          { href: "#yetkazish", label: "Sovg‘a kimdan keladi va Stars’ga aylanadimi" },
          { href: "#id-topish", label: "Telegram ID’ni qayerdan bilish mumkin" },
          { href: "#ayiqcha", label: "Yangi 50 ⭐ ayiqcha: narxi va mavjudligi" },
          { href: "#syurpriz", label: "Syurpriz va anonimlik" },
          { href: "#muammo", label: "Sovg‘a yetib bormasa" },
          { href: "#stars-premium", label: "Stars va Premium ID bilan yuboriladimi" },
        ]}
      />

      <p>
        Do‘stingizga Telegram sovg‘asi yubormoqchisiz, profilini ochsangiz — @username yo‘q. Bu kam uchraydigan holat
        emas: Telegram’da username majburiy emas, rasmiy FAQ’da «You don’t have to get one» deb yozilgan. Undan
        «username qo‘yib yubor» deb so‘rasangiz, tayyorlayotgan syurprizingiz bilinib qoladi. StarsPaymee’da bunday
        holat uchun ikkinchi yo‘l bor — <b>Telegram ID</b>. Quyida uni qanday ishlatish, sovg‘a kimdan kelishi va qaysi
        holatda Stars’ga aylanmasligi bor.
      </p>

      <h2 id="id-nima">Telegram ID nima va username’dan qanday farq qiladi</h2>
      <p>
        Telegram ID — har bir akkauntga beriladigan noyob raqam. Bot API hujjatida u «Unique identifier for this user»
        deb ta’riflanadi, username esa «Optional», ya’ni ixtiyoriy maydon. Demak, username’siz akkaunt bo‘ladi, ID’siz
        akkaunt bo‘lmaydi. Username har doim harf bilan boshlanadi, shuning uchun StarsPaymee ilovasi maydonga
        yozilgan <b>faqat raqamlardan</b> iborat qiymatni (5–15 ta raqam) Telegram ID deb tushunadi.
      </p>
      <IdTable locale="uz" />
      <p>
        Telefon raqam ham, profildagi ism ham ID o‘rnini bosmaydi: bir xil ismli odamlar ko‘p, telefon raqamni esa
        maydon qabul qilmaydi. Sovg‘a aynan siz yozgan raqam egasiga ketadi.
      </p>

      <h2 id="qadamlar">Telegram ID orqali sovg‘a yuborish: 6 qadam</h2>
      <Steps>
        <Step title="1. «Gift olish» bo‘limini oching">
          <a href={TELEGRAM_BOT_URL_PUBLIC} {...ext}>
            @StarsPaymee_bot
          </a>{" "}
          → ilova → «Sovg‘a markazi» → «Gift olish». Yangi ayiqchaning alohida sahifasi ham bor — pastdagi tugma uni
          to‘g‘ridan-to‘g‘ri ochadi.
        </Step>
        <Step title="2. ID’ni maydonga yozing">
          «Username yoki Telegram ID» maydoniga faqat raqamlarni kiriting — @ belgisi, bo‘sh joy va boshqa
          belgilarsiz.
        </Step>
        <Step title="3. Raqamni solishtiring">
          ID yozilganda ilova profil qidirmaydi: kartochkada «Telegram ID» va raqamning o‘zi chiqadi. Uni sizga
          berilgan raqam bilan bittalab solishtiring — ism yoki rasm bu yerda yordam bermaydi.
        </Step>
        <Step title="4. Ogohlantirishni o‘qing">
          Maydon ostida sovg‘a qanday yetib borishi yoziladi: akkauntlarimiz bu odamni tanimasa, sovg‘a bot nomidan
          keladi va Stars’ga aylanmaydi.
        </Step>
        <Step title="5. Sovg‘a, xabar va anonimlik">
          Sovg‘ani tanlang, xohlasangiz «Xabar qo‘shish»ga tabrik yozing. «Anonim yuborish» kerak bo‘lsa, uni
          to‘lovdan oldin belgilang.
        </Step>
        <Step title="6. To‘lang va holatni kuzating">
          To‘lov usulini tanlang — yakuniy summa oynada ko‘rinadi. Keyin holatni «Mening buyurtmalarim»da kuzating
          va buyurtma raqamini saqlab qo‘ying.
        </Step>
      </Steps>

      <InlineCta text="Username’siz do‘stga sovg‘a — maydonga Telegram ID yozing va so‘mda to‘lang." />

      <h2 id="yetkazish">Sovg‘a kimdan keladi va Stars’ga aylanadimi</h2>
      <p>
        Oddiy Telegram akkaunti begona odamga faqat raqami bo‘yicha sovg‘a yubora olmaydi — u bu odamni avval «ko‘rgan»
        bo‘lishi kerak, masalan, o‘sha odam shu akkauntga yozgan bo‘lsa. Bot esa raqam bo‘yicha yubora oladi. Shuning
        uchun ID orqali buyurtma ikki xil yetkaziladi va qaysi biri bo‘lishi to‘lovdan oldin aniq bo‘lmaydi:
      </p>
      <DeliveryTable locale="uz" />
      <p>
        Botdan kelgan sovg‘adagi cheklov StarsPaymee’niki emas — bu Telegram qoidasi: Bot API’dagi{" "}
        <code>sendGift</code> hujjatida «The gift can’t be converted to Telegram Stars by the receiver» deb yozilgan.
        Sovg‘aning o‘zi esa ikkala holatda ham bir xil. Agar do‘stingiz sovg‘ani keyin Stars’ga aylantirishi muhim
        bo‘lsa, eng ishonchli yo‘l — username orqali yuborish. Aylantirish qoidalari umuman —{" "}
        <Link href="/blog/telegram-gift-stars-ga-aylantirish">sovg‘ani Stars’ga aylantirish</Link> maqolasida.
      </p>
      <Notice label="O‘zingizga username’siz olsangiz">
        «O‘zim» tugmasi username’ingiz bo‘lmasa maydonga o‘z ID’ingizni qo‘yadi. Sovg‘ani keyin Stars’ga aylantirmoqchi
        bo‘lsangiz, to‘lovdan oldin{" "}
        <a href={TELEGRAM_SUPPORT_URL_PUBLIC} {...ext}>
          @StarsPaymeeSupport
        </a>
        ’ga bitta xabar yozing — shunda akkauntimiz sizni taniydi va sovg‘a odatdagidek akkauntdan keladi.
      </Notice>

      <h2 id="id-topish">Telegram ID’ni qayerdan bilish mumkin</h2>
      <p>
        Telegram’ning telefon ilovalari profilda ID’ni odatda ko‘rsatmaydi, shuning uchun raqamni ishonchli joydan
        oling. Ikki amaliy yo‘l bor:
      </p>
      <InfoGrid>
        <InfoCard emoji="🖥️" title="Telegram Desktop’da">
          Kompyuterdagi Telegram Desktop’ning eksperimental sozlamalarida «Show Peer IDs in Profile» bandi bor:
          Settings → Advanced → Experimental settings. Yoqilgach, har bir profilda ID qatori chiqadi — do‘stingizga
          hech narsa demasdan ko‘rasiz. Menyu nomlari versiyaga qarab farq qilishi mumkin.
        </InfoCard>
        <InfoCard emoji="🙋" title="Do‘stingizning o‘zidan">
          U StarsPaymee ilovasida «Gift olish» → «O‘zim» ni bossa, username’i bo‘lmagani uchun maydonda o‘z ID’si
          chiqadi — nusxalab sizga yuboradi. Syurpriz biroz ochiladi, lekin raqam aniq bo‘ladi.
        </InfoCard>
      </InfoGrid>
      <Notice label="Taxmin qilmang">
        Tasodifiy raqam, telefon raqam yoki ismni ID o‘rniga yozmang. Bu imkoniyat birovning yashirin ma’lumotini
        topish usuli emas: u sizda bor to‘g‘ri raqam bilan ishlaydi. Boshqa odamning ID’siga ketgan sovg‘a qaytmaydi.
      </Notice>

      <h2 id="ayiqcha">Yangi 50 ⭐ ayiqcha: narxi va mavjudligi</h2>
      <p>
        2026-yil 31-oktabrdan Telegram oddiy katalogdagi 15 ⭐ lik ayiqchani olib tashladi, o‘rniga {BEAR_STARS} ⭐ lik
        yangi ayiqcha chiqdi — qo‘lida qovoq ushlagan, Halloween uslubidagi yashil ayiqcha. Ilovada u «Yangi» belgisi
        bilan turadi va uni ham username, ham Telegram ID orqali yuborish mumkin.
      </p>
      <KeyFacts label="Narx va shartlar">
        <li>
          <b>{som(BEAR_PRICE_UZS, "uz")}</b> — karta o‘tkazmasi yoki balans orqali to‘laganda.
        </li>
        {BEAR_EQUALS_STARS ? (
          <li>
            Bu {BEAR_STARS} ta Stars’ning StarsPaymee’dagi narxi bilan bir xil: {BEAR_STARS} × {STARS_PER_UNIT_UZS} ={" "}
            {som(BEAR_PRICE_UZS, "uz")}. Katalogdagi boshqa {BEAR_STARS} ⭐ sovg‘alar — {som(OTHER_50_PRICE_UZS, "uz")}.
          </li>
        ) : (
          <li>
            Katalogdagi boshqa {BEAR_STARS} ⭐ sovg‘alar — {som(OTHER_50_PRICE_UZS, "uz")}.
          </li>
        )}
        <li>
          <b>Onlayn to‘lovda</b> (Click, Payme, Uzum, Paynet) ustama qo‘shiladi — yakuniy summa to‘lov oynasida.
        </li>
        <li>
          <b>Oluvchiga sovg‘aning o‘zi boradi</b> — oynadagi {BEAR_STARS} ⭐ uning qiymati, alohida Stars yuborilmaydi.
        </li>
        <li>
          <b>Sotuv muddati e’lon qilinmagan</b> — Telegram katalogni o‘zi o‘zgartiradi: bugun bor sovg‘a ertaga ham
          bo‘ladi, degan kafolat yo‘q.
        </li>
      </KeyFacts>
      <InlineCta
        text="Ayiqcha hali katalogdami — tekshiring: sahifasi ochiladi, maydonga @username yoki Telegram ID yozasiz."
        product={BEAR_CTA}
      />
      <p>
        Ayiqcha katalogdan chiqib ketsa ham, ID orqali yuborish boshqa sovg‘alarda ishlayveradi. Barcha sovg‘alar va
        ularning yulduz qiymati —{" "}
        <Link href="/blog/telegram-gifts-narxlari-royxati">Telegram sovg‘alari narxlari ro‘yxatida</Link>.
      </p>

      <h2 id="syurpriz">Syurpriz va anonimlik: nima yashirin, nima emas</h2>
      <p>
        ID orqali yuborish — do‘stingizga oldindan bildirmasdan sovg‘a qilish imkoni, lekin anonimlik degani emas.
        Farqni bilib qo‘ying:
      </p>
      <KeyFacts label="Kim nimani ko‘radi">
        <li>
          <b>Sizning profilingiz sovg‘ada yo‘q</b> — sovg‘ani StarsPaymee akkaunti yoki boti yuboradi. Kimdan ekanini
          oluvchi siz yozgan xabardan biladi.
        </li>
        <li>
          <b>Xabar oluvchiga ko‘rinadi</b> — tabrikka ismingizni yozsangiz, syurpriz shu yerda ochiladi.
        </li>
        <li>
          <b>«Anonim yuborish»</b> — Telegram’ning ismni yashirish funksiyasi: sovg‘a profilga qo‘yilsa, yuboruvchi nomi
          begonalarga ko‘rinmaydi. Telegram hujjatiga ko‘ra oluvchining o‘zi sovg‘ani kim yuborganini baribir ko‘radi.
        </li>
        <li>
          <b>Maqsad — kelguncha sir saqlash</b>, keyin emas: sovg‘a kelgach, oluvchi uni albatta ko‘radi.
        </li>
      </KeyFacts>
      <p>
        Kimga mos: username qo‘ymagan yaqin do‘st, uzoqdagi qarindosh, Telegram’ni faqat yozishish uchun ishlatadigan
        ota-ona yoki hamkasb. Katta sana kutmasdan ham «seni esladim» deyishning kichik, lekin sezilarli usuli.
      </p>

      <h2 id="muammo">Sovg‘a yetib bormasa nima qilish kerak</h2>
      <KeyFacts label="Holat bo‘yicha">
        <li>
          <b>«Navbatda»</b> — band paytda sovg‘a navbatga tushadi. Buyurtma bekor bo‘lmaydi, tizim o‘zi yuboradi —
          qayta to‘lamang.
        </li>
        <li>
          <b>Yuborilmadi</b> — raqam hech kimga tegishli bo‘lmasa yoki oluvchi Telegram maxfiylik sozlamalarida sovg‘a
          qabul qilishni cheklagan bo‘lsa, sovg‘ani yetkazib bo‘lmaydi. Buyurtma raqami bilan{" "}
          <a href={TELEGRAM_SUPPORT_URL_PUBLIC} {...ext}>
            @StarsPaymeeSupport
          </a>
          ’ga yozing.
        </li>
        <li>
          <b>Boshqa odamga ketdi</b> — ID’da bitta raqam xato bo‘lgan. Yuborilgan sovg‘a qaytmaydi, shuning uchun
          3-qadamdagi solishtirish shart.
        </li>
      </KeyFacts>
      <p>
        Qabul qiluvchi tomonidagi cheklovlar va boshqa sabablar —{" "}
        <Link href="/blog/telegram-gift-yuborilmayapti">«sovg‘a yuborilmayapti»</Link> maqolasida. Username bilan
        yuborishning to‘liq tartibi —{" "}
        <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">sovg‘a yuborish qo‘llanmasida</Link>.
      </p>

      <h2 id="stars-premium">Stars yoki Premium’ni ham ID bilan yuborsa bo‘ladimi</h2>
      <p>
        Yo‘q. Telegram ID faqat sovg‘alar (gift) uchun. Stars va Premium Fragment orqali yetkaziladi va u yerda qabul
        qiluvchining @username’i kerak. Username’i yo‘q odamga Stars yoki Premium olib bermoqchi bo‘lsangiz, avval u
        nom qo‘yishi kerak — qanday qilinishi{" "}
        <Link href="/blog/telegram-stars-username-qanday-topiladi">username topish va qo‘yish</Link> maqolasida.
        Boshqa odamga yulduz olish —{" "}
        <Link href="/blog/boshqa-odamga-telegram-stars-sotib-olish">bu yerda</Link>, Premium sovg‘a —{" "}
        <Link href="/blog/telegram-premium-sovga-username-orqali">bu yerda</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: SRC.sendGift, label: "Telegram Bot API — sendGift", note: "botdan kelgan sovg‘ani oluvchi Stars’ga aylantira olmaydi; user_id bo‘yicha" },
          { href: SRC.user, label: "Telegram Bot API — User", note: "id — noyob raqam, username — ixtiyoriy" },
          { href: SRC.faq, label: "Telegram FAQ — Usernames and t.me", note: "username olish majburiy emas" },
          { href: SRC.gifts, label: "core.telegram.org/api/gifts", note: "ismni yashirish, Stars’ga aylantirish, sovg‘a qabul qilish cheklovi" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Да. В приложении StarsPaymee в разделе «Центр подарков» → «Купить подарок» есть поле{" "}
      <b>«Username или Telegram ID»</b>: введите числовой Telegram ID получателя, выберите подарок и оплатите в сумах —
      просить его завести username не нужно. Две вещи стоит знать заранее: по ID приложение не показывает имя и фото,
      цифры вы сверяете сами; если аккаунты StarsPaymee не знают этого человека, подарок придёт <b>от бота</b>, и
      обменять его на Stars будет нельзя. Новый мишка за {BEAR_STARS} ⭐ из текущего каталога —{" "}
      {som(BEAR_PRICE_UZS, "ru")}.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#id-nima", label: "Что такое Telegram ID и чем он отличается от username" },
          { href: "#qadamlar", label: "Подарок по ID: 6 шагов" },
          { href: "#yetkazish", label: "От кого придёт подарок и можно ли обменять на Stars" },
          { href: "#id-topish", label: "Где узнать Telegram ID" },
          { href: "#ayiqcha", label: "Новый мишка за 50 ⭐: цена и наличие" },
          { href: "#syurpriz", label: "Сюрприз и анонимность" },
          { href: "#muammo", label: "Если подарок не дошёл" },
          { href: "#stars-premium", label: "Можно ли так отправить Stars и Premium" },
        ]}
      />

      <p>
        Вы хотите отправить другу подарок в Telegram, открываете профиль — а @username нет. Это частая ситуация:
        username в Telegram не обязателен, в официальном FAQ так и написано: «You don’t have to get one». Попросите его
        «завести username» — и сюрприз раскроется. В StarsPaymee для такого случая есть второй путь — <b>Telegram ID</b>.
        Ниже — как им пользоваться, от кого придёт подарок и когда его нельзя будет обменять на Stars.
      </p>

      <h2 id="id-nima">Что такое Telegram ID и чем он отличается от username</h2>
      <p>
        Telegram ID — уникальный номер, который есть у каждого аккаунта. В документации Bot API он описан как «Unique
        identifier for this user», а username помечен как «Optional», то есть необязательное поле. Аккаунт без username
        бывает, аккаунт без ID — нет. Username всегда начинается с буквы, поэтому приложение StarsPaymee считает
        значение <b>только из цифр</b> (от 5 до 15) в поле получателя именно Telegram ID.
      </p>
      <IdTable locale="ru" />
      <p>
        Ни номер телефона, ни имя в профиле не заменяют ID: людей с одинаковыми именами много, а номер телефона поле не
        принимает. Подарок уходит владельцу именно тех цифр, которые вы ввели.
      </p>

      <h2 id="qadamlar">Как отправить подарок по Telegram ID: 6 шагов</h2>
      <Steps>
        <Step title="1. Откройте «Купить подарок»">
          <a href={TELEGRAM_BOT_URL_PUBLIC} {...ext}>
            @StarsPaymee_bot
          </a>{" "}
          → приложение → «Центр подарков» → «Купить подарок». У нового мишки есть и отдельная страница — кнопка ниже
          откроет её сразу.
        </Step>
        <Step title="2. Введите ID в поле">
          В поле «Username или Telegram ID» — только цифры, без @, пробелов и других символов.
        </Step>
        <Step title="3. Сверьте цифры">
          По ID приложение не ищет профиль: на карточке будет «Telegram ID» и сам номер. Сверьте его цифра в цифру с
          тем, что вам дали, — имя или фото здесь не помогут.
        </Step>
        <Step title="4. Прочитайте предупреждение">
          Под полем написано, как дойдёт подарок: если наши аккаунты не знают этого человека, он придёт от бота и не
          обменяется на Stars.
        </Step>
        <Step title="5. Подарок, сообщение и анонимность">
          Выберите подарок, при желании напишите поздравление в «Добавить сообщение». «Отправить анонимно» отмечайте до
          оплаты.
        </Step>
        <Step title="6. Оплатите и следите за статусом">
          Выберите способ оплаты — итоговая сумма видна в окне. Статус смотрите в «Мои заказы», номер заказа
          сохраните.
        </Step>
      </Steps>

      <InlineCta text="Подарок другу без username — введите Telegram ID и оплатите в сумах." />

      <h2 id="yetkazish">От кого придёт подарок и можно ли обменять его на Stars</h2>
      <p>
        Обычный аккаунт Telegram не может отправить подарок незнакомому человеку только по номеру — он должен был
        «видеть» этого человека раньше, например если тот ему писал. Бот же может отправить по номеру. Поэтому заказ по
        ID доставляется одним из двух способов, и какой именно — до оплаты заранее неизвестно:
      </p>
      <DeliveryTable locale="ru" />
      <p>
        Ограничение на подарки от бота — не правило StarsPaymee, а правило Telegram: в документации метода{" "}
        <code>sendGift</code> в Bot API сказано «The gift can’t be converted to Telegram Stars by the receiver». Сам
        подарок в обоих случаях одинаковый. Если другу важно потом обменять подарок на Stars, надёжнее отправлять по
        username. Правила обмена в целом —{" "}
        <Link href="/blog/telegram-gift-stars-ga-aylantirish">в статье об обмене подарка на Stars</Link>.
      </p>
      <Notice label="Если покупаете себе без username">
        Кнопка «Себе» подставит ваш собственный ID, если у вас нет username. Чтобы потом обменять подарок на Stars, до
        оплаты напишите одно сообщение в{" "}
        <a href={TELEGRAM_SUPPORT_URL_PUBLIC} {...ext}>
          @StarsPaymeeSupport
        </a>{" "}
        — тогда наш аккаунт будет вас знать, и подарок придёт с аккаунта, как обычно.
      </Notice>

      <h2 id="id-topish">Где узнать Telegram ID</h2>
      <p>
        Мобильные приложения Telegram обычно не показывают ID в профиле, поэтому берите номер из надёжного источника.
        Практических способов два:
      </p>
      <InfoGrid>
        <InfoCard emoji="🖥️" title="В Telegram Desktop">
          В экспериментальных настройках Telegram Desktop на компьютере есть пункт «Show Peer IDs in Profile»: Settings
          → Advanced → Experimental settings. После включения в каждом профиле появится строка с ID — вы увидите его,
          ничего не спрашивая у друга. Названия пунктов могут отличаться в зависимости от версии.
        </InfoCard>
        <InfoCard emoji="🙋" title="У самого друга">
          Если он откроет в приложении StarsPaymee «Купить подарок» и нажмёт «Себе», то без username в поле появится его
          ID — пусть скопирует и пришлёт. Сюрприз немного раскроется, зато номер будет точным.
        </InfoCard>
      </InfoGrid>
      <Notice label="Не угадывайте">
        Не вводите вместо ID случайные цифры, номер телефона или имя. Эта возможность не ищет чужие скрытые данные: она
        работает с верным номером, который у вас уже есть. Подарок, ушедший на чужой ID, не вернётся.
      </Notice>

      <h2 id="ayiqcha">Новый мишка за 50 ⭐: цена и наличие</h2>
      <p>
        С 31 октября 2026 года Telegram убрал из обычного каталога мишку за 15 ⭐, а вместо него вышел новый мишка за{" "}
        {BEAR_STARS} ⭐ — зелёный, в стиле Хеллоуина, с тыквой в лапах. В приложении он отмечен «Новый», и его можно
        отправить и по username, и по Telegram ID.
      </p>
      <KeyFacts label="Цена и условия">
        <li>
          <b>{som(BEAR_PRICE_UZS, "ru")}</b> — при оплате переводом на карту или с баланса.
        </li>
        {BEAR_EQUALS_STARS ? (
          <li>
            Это столько же, сколько {BEAR_STARS} Stars в StarsPaymee: {BEAR_STARS} × {STARS_PER_UNIT_UZS} ={" "}
            {som(BEAR_PRICE_UZS, "ru")}. Другие подарки за {BEAR_STARS} ⭐ в каталоге — {som(OTHER_50_PRICE_UZS, "ru")}.
          </li>
        ) : (
          <li>
            Другие подарки за {BEAR_STARS} ⭐ в каталоге — {som(OTHER_50_PRICE_UZS, "ru")}.
          </li>
        )}
        <li>
          <b>При онлайн-оплате</b> (Click, Payme, Uzum, Paynet) добавляется наценка — итоговая сумма в окне оплаты.
        </li>
        <li>
          <b>Получатель получает сам подарок</b> — {BEAR_STARS} ⭐ в окне означают его стоимость, отдельные Stars не
          отправляются.
        </li>
        <li>
          <b>Срок продажи не объявлен</b> — каталог меняет сам Telegram: нет гарантии, что подарок, доступный сегодня,
          будет и завтра.
        </li>
      </KeyFacts>
      <InlineCta
        text="Проверьте, есть ли мишка в каталоге: откроется его страница, в поле — @username или Telegram ID."
        product={BEAR_CTA}
      />
      <p>
        Даже если мишка уйдёт из каталога, отправка по ID продолжит работать для других подарков. Все подарки и их
        стоимость в звёздах —{" "}
        <Link href="/blog/telegram-gifts-narxlari-royxati">в списке цен подарков Telegram</Link>.
      </p>

      <h2 id="syurpriz">Сюрприз и анонимность: что скрыто, а что нет</h2>
      <p>
        Отправка по ID — способ подарить, не предупреждая заранее, но это не анонимность. Разница такая:
      </p>
      <KeyFacts label="Кто что видит">
        <li>
          <b>Вашего профиля в подарке нет</b> — подарок отправляет аккаунт или бот StarsPaymee. От кого он, получатель
          узнает из вашего сообщения.
        </li>
        <li>
          <b>Сообщение получатель видит</b> — если подпишете поздравление своим именем, сюрприз раскроется именно здесь.
        </li>
        <li>
          <b>«Отправить анонимно»</b> — функция Telegram «скрыть имя»: если подарок выставят в профиле, имя отправителя
          не увидят посторонние. По документации Telegram сам получатель всё равно видит, кто прислал подарок.
        </li>
        <li>
          <b>Цель — сохранить тайну до получения</b>, а не после: когда подарок придёт, получатель его увидит.
        </li>
      </KeyFacts>
      <p>
        Кому подходит: близкому другу без username, родственнику в другом городе, родителям или коллеге, которые
        пользуются Telegram только для переписки. Небольшой, но заметный способ сказать «я о тебе помню» без особого
        повода.
      </p>

      <h2 id="muammo">Что делать, если подарок не дошёл</h2>
      <KeyFacts label="По ситуации">
        <li>
          <b>«В очереди»</b> — в загруженное время подарок встаёт в очередь. Заказ не отменяется, система отправит
          сама — не платите повторно.
        </li>
        <li>
          <b>Не отправлен</b> — если номер никому не принадлежит или получатель ограничил приём подарков в настройках
          конфиденциальности Telegram, доставить подарок нельзя. Напишите в{" "}
          <a href={TELEGRAM_SUPPORT_URL_PUBLIC} {...ext}>
            @StarsPaymeeSupport
          </a>{" "}
          с номером заказа.
        </li>
        <li>
          <b>Ушёл другому человеку</b> — в ID ошиблись на одну цифру. Отправленный подарок не возвращается, поэтому
          сверка на 3-м шаге обязательна.
        </li>
      </KeyFacts>
      <p>
        Ограничения на стороне получателя и другие причины —{" "}
        <Link href="/blog/telegram-gift-yuborilmayapti">в статье «подарок не отправляется»</Link>. Полный порядок
        отправки по username —{" "}
        <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">в инструкции по отправке подарков</Link>.
      </p>

      <h2 id="stars-premium">Можно ли так же отправить Stars или Premium по ID</h2>
      <p>
        Нет. Telegram ID работает только для подарков (gift). Stars и Premium доставляются через Fragment, и там нужен
        @username получателя. Если хотите купить Stars или Premium человеку без username, сначала он должен его
        завести — как это сделать, в статье{" "}
        <Link href="/blog/telegram-stars-username-qanday-topiladi">о поиске и создании username</Link>. Звёзды другому
        человеку — <Link href="/blog/boshqa-odamga-telegram-stars-sotib-olish">здесь</Link>, Premium в подарок —{" "}
        <Link href="/blog/telegram-premium-sovga-username-orqali">здесь</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: SRC.sendGift, label: "Telegram Bot API — sendGift", note: "подарок от бота получатель не может обменять на Stars; по user_id" },
          { href: SRC.user, label: "Telegram Bot API — User", note: "id — уникальный номер, username — необязателен" },
          { href: SRC.faq, label: "Telegram FAQ — Usernames and t.me", note: "заводить username не обязательно" },
          { href: SRC.gifts, label: "core.telegram.org/api/gifts", note: "скрытие имени, обмен на Stars, ограничение приёма подарков" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      Yes. In the StarsPaymee app, under “Gift Center” → “Buy a gift”, there is a <b>“Username or Telegram ID”</b>{" "}
      field: type the recipient’s numeric Telegram ID, pick the gift and pay in som — no need to ask them to create a
      username. Two things to know first: with an ID the app shows no name or photo, so you check the digits yourself;
      and if no StarsPaymee account knows that person, the gift arrives <b>from our bot</b> and cannot be converted to
      Stars. The new {BEAR_STARS} ⭐ bear in the current catalog costs {som(BEAR_PRICE_UZS, "en")}.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#id-nima", label: "What a Telegram ID is and how it differs from a username" },
          { href: "#qadamlar", label: "Sending a gift by ID: 6 steps" },
          { href: "#yetkazish", label: "Who the gift comes from and whether it converts to Stars" },
          { href: "#id-topish", label: "Where to find a Telegram ID" },
          { href: "#ayiqcha", label: "The new 50 ⭐ bear: price and availability" },
          { href: "#syurpriz", label: "Surprise and anonymity" },
          { href: "#muammo", label: "If the gift does not arrive" },
          { href: "#stars-premium", label: "Can Stars and Premium go by ID" },
        ]}
      />

      <p>
        You want to send a friend a Telegram gift, you open their profile — and there is no @username. That is common:
        a username is optional on Telegram, and the official FAQ says so plainly: “You don’t have to get one.” Ask them
        to “set a username” and the surprise is gone. StarsPaymee has a second route for exactly this case — the{" "}
        <b>Telegram ID</b>. Below: how to use it, who the gift comes from, and when it cannot be converted to Stars.
      </p>

      <h2 id="id-nima">What a Telegram ID is and how it differs from a username</h2>
      <p>
        A Telegram ID is a unique number that every account has. The Bot API documentation describes it as a “Unique
        identifier for this user”, while the username is marked “Optional”. So an account without a username exists;
        an account without an ID does not. A username always starts with a letter, which is why the StarsPaymee app
        treats a recipient value made of <b>digits only</b> (5 to 15 of them) as a Telegram ID.
      </p>
      <IdTable locale="en" />
      <p>
        Neither a phone number nor the name on the profile can stand in for the ID: many people share a name, and the
        field does not accept phone numbers. The gift goes to whoever owns exactly the digits you typed.
      </p>

      <h2 id="qadamlar">How to send a gift by Telegram ID: 6 steps</h2>
      <Steps>
        <Step title="1. Open “Buy a gift”">
          <a href={TELEGRAM_BOT_URL_PUBLIC} {...ext}>
            @StarsPaymee_bot
          </a>{" "}
          → the app → “Gift Center” → “Buy a gift”. The new bear also has its own page — the button below opens it
          directly.
        </Step>
        <Step title="2. Type the ID into the field">
          In the “Username or Telegram ID” field, enter digits only — no @, spaces or other characters.
        </Step>
        <Step title="3. Compare the digits">
          With an ID the app does not look up a profile: the card shows “Telegram ID” and the number itself. Check it
          digit by digit against the one you were given — a name or photo cannot help here.
        </Step>
        <Step title="4. Read the warning">
          Under the field the app explains how the gift will arrive: if our accounts do not know this person, it comes
          from the bot and cannot be converted to Stars.
        </Step>
        <Step title="5. Gift, message and anonymity">
          Pick the gift and, if you like, write a greeting under “Add a message”. Tick “Send anonymously” before you
          pay.
        </Step>
        <Step title="6. Pay and track the status">
          Choose a payment method — the final amount is shown in the window. Then follow the status in “My Orders” and
          keep the order number.
        </Step>
      </Steps>

      <InlineCta text="A gift for a friend with no username — enter the Telegram ID and pay in som." />

      <h2 id="yetkazish">Who the gift comes from and whether it converts to Stars</h2>
      <p>
        An ordinary Telegram account cannot send a gift to a stranger by number alone — it must have “seen” that person
        before, for example because they messaged it. A bot, on the other hand, can send by number. So an order by ID is
        delivered in one of two ways, and which one is not known before you pay:
      </p>
      <DeliveryTable locale="en" />
      <p>
        The limit on gifts from a bot is not a StarsPaymee rule but Telegram’s: the Bot API documentation for{" "}
        <code>sendGift</code> says “The gift can’t be converted to Telegram Stars by the receiver.” The gift itself is
        the same either way. If it matters that your friend can convert it to Stars later, sending by username is the
        safer route. The conversion rules in general are in{" "}
        <Link href="/blog/telegram-gift-stars-ga-aylantirish">the article on converting gifts to Stars</Link>.
      </p>
      <Notice label="Buying for yourself without a username">
        The “Me” button fills in your own ID if you have no username. To be able to convert the gift to Stars later,
        send one message to{" "}
        <a href={TELEGRAM_SUPPORT_URL_PUBLIC} {...ext}>
          @StarsPaymeeSupport
        </a>{" "}
        before paying — then our account knows you and the gift comes from the account as usual.
      </Notice>

      <h2 id="id-topish">Where to find a Telegram ID</h2>
      <p>
        Telegram’s phone apps usually do not show the ID on a profile, so take the number from a reliable source. There
        are two practical ways:
      </p>
      <InfoGrid>
        <InfoCard emoji="🖥️" title="In Telegram Desktop">
          Telegram Desktop on a computer has a “Show Peer IDs in Profile” item in its experimental settings: Settings →
          Advanced → Experimental settings. Once it is on, every profile shows an ID line — you see it without asking
          your friend anything. Menu names may differ between versions.
        </InfoCard>
        <InfoCard emoji="🙋" title="From your friend">
          If they open “Buy a gift” in the StarsPaymee app and tap “Me”, the field shows their own ID because they have
          no username — they copy it and send it to you. The surprise slips a little, but the number is exact.
        </InfoCard>
      </InfoGrid>
      <Notice label="Do not guess">
        Never type random digits, a phone number or a name in place of the ID. This is not a way to dig up someone’s
        hidden data: it works with a correct number you already have. A gift sent to someone else’s ID does not come
        back.
      </Notice>

      <h2 id="ayiqcha">The new 50 ⭐ bear: price and availability</h2>
      <p>
        From 31 October 2026 Telegram removed the 15 ⭐ bear from the regular catalog, and a new {BEAR_STARS} ⭐ bear
        took its place — a green, Halloween-style bear holding a pumpkin. In the app it carries a “New” badge, and it
        can be sent by username or by Telegram ID.
      </p>
      <KeyFacts label="Price and terms">
        <li>
          <b>{som(BEAR_PRICE_UZS, "en")}</b> — when you pay by card transfer or from your balance.
        </li>
        {BEAR_EQUALS_STARS ? (
          <li>
            That equals the StarsPaymee price of {BEAR_STARS} Stars: {BEAR_STARS} × {STARS_PER_UNIT_UZS} ={" "}
            {som(BEAR_PRICE_UZS, "en")}. Other {BEAR_STARS} ⭐ gifts in the catalog cost {som(OTHER_50_PRICE_UZS, "en")}.
          </li>
        ) : (
          <li>
            Other {BEAR_STARS} ⭐ gifts in the catalog cost {som(OTHER_50_PRICE_UZS, "en")}.
          </li>
        )}
        <li>
          <b>Online payment</b> (Click, Payme, Uzum, Paynet) adds a markup — the final amount is in the payment window.
        </li>
        <li>
          <b>The recipient gets the gift itself</b> — the {BEAR_STARS} ⭐ in the window is its value; no separate Stars
          are sent.
        </li>
        <li>
          <b>No end date has been announced</b> — Telegram changes the catalog itself: there is no guarantee that a
          gift on sale today will still be there tomorrow.
        </li>
      </KeyFacts>
      <InlineCta
        text="Check whether the bear is still in the catalog: its page opens, and you type an @username or a Telegram ID."
        product={BEAR_CTA}
      />
      <p>
        Even if the bear leaves the catalog, sending by ID keeps working for the other gifts. Every gift and its star
        value is in <Link href="/blog/telegram-gifts-narxlari-royxati">the Telegram gift price list</Link>.
      </p>

      <h2 id="syurpriz">Surprise and anonymity: what stays hidden and what does not</h2>
      <p>
        Sending by ID lets you give a gift without warning anyone first, but it is not anonymity. Here is the
        difference:
      </p>
      <KeyFacts label="Who sees what">
        <li>
          <b>Your profile is not on the gift</b> — a StarsPaymee account or bot sends it. The recipient learns who it is
          from only through the message you write.
        </li>
        <li>
          <b>The recipient sees the message</b> — sign the greeting with your name and that is where the surprise is
          revealed.
        </li>
        <li>
          <b>“Send anonymously”</b> is Telegram’s hide-name feature: if the gift is shown on the profile, strangers do
          not see the sender’s name. According to Telegram’s documentation, the recipient still sees who sent it.
        </li>
        <li>
          <b>The goal is secrecy until it arrives</b>, not after: once the gift lands, the recipient sees it.
        </li>
      </KeyFacts>
      <p>
        Who it suits: a close friend without a username, a relative in another city, parents or a colleague who use
        Telegram only for chatting. A small but noticeable way to say “I thought of you” without waiting for a big
        date.
      </p>

      <h2 id="muammo">What to do if the gift does not arrive</h2>
      <KeyFacts label="By situation">
        <li>
          <b>“In the queue”</b> — at busy times a gift waits in a queue. The order is not cancelled and the system sends
          it on its own — do not pay again.
        </li>
        <li>
          <b>Not sent</b> — if the number belongs to nobody, or the recipient has restricted gifts in Telegram’s privacy
          settings, the gift cannot be delivered. Message{" "}
          <a href={TELEGRAM_SUPPORT_URL_PUBLIC} {...ext}>
            @StarsPaymeeSupport
          </a>{" "}
          with the order number.
        </li>
        <li>
          <b>It went to someone else</b> — one digit of the ID was wrong. A sent gift does not come back, which is why
          the check in step 3 matters.
        </li>
      </KeyFacts>
      <p>
        Limits on the recipient’s side and other causes are covered in{" "}
        <Link href="/blog/telegram-gift-yuborilmayapti">“gift will not send”</Link>. The full routine for sending by
        username is in <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">the gift-sending guide</Link>.
      </p>

      <h2 id="stars-premium">Can Stars or Premium be sent by ID too</h2>
      <p>
        No. A Telegram ID works only for gifts. Stars and Premium are delivered through Fragment, which needs the
        recipient’s @username. To buy Stars or Premium for someone without a username, they first have to set one —
        how, in <Link href="/blog/telegram-stars-username-qanday-topiladi">finding and setting a username</Link>.
        Stars for another person are <Link href="/blog/boshqa-odamga-telegram-stars-sotib-olish">here</Link>, Premium
        as a gift <Link href="/blog/telegram-premium-sovga-username-orqali">here</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: SRC.sendGift, label: "Telegram Bot API — sendGift", note: "a gift from a bot cannot be converted to Stars by the receiver; sent by user_id" },
          { href: SRC.user, label: "Telegram Bot API — User", note: "id is a unique number, username is optional" },
          { href: SRC.faq, label: "Telegram FAQ — Usernames and t.me", note: "a username is not required" },
          { href: SRC.gifts, label: "core.telegram.org/api/gifts", note: "hiding the name, converting to Stars, restricting gifts" },
        ]}
      />
    </>
  );
}

/* ---------------- FAQ ---------------- */
const faqUz = [
  {
    question: "Username’i yo‘q odamga Telegram sovg‘asi yuborsa bo‘ladimi?",
    answer:
      "Ha. StarsPaymee ilovasida «Username yoki Telegram ID» maydoniga uning raqamli Telegram ID’sini yozing — faqat raqamlar, 5–15 ta, @ belgisiz. Keyin sovg‘ani tanlab so‘mda to‘laysiz.",
  },
  {
    question: "ID yozsam, ilova oluvchining ismini ko‘rsatadimi?",
    answer:
      "Yo‘q. ID bo‘yicha profil qidirilmaydi — kartochkada faqat «Telegram ID» va raqam chiqadi. Raqamni sizga berilgan ID bilan o‘zingiz solishtirasiz.",
  },
  {
    question: "ID orqali kelgan sovg‘ani Stars’ga aylantirsa bo‘ladimi?",
    answer:
      "Sovg‘a StarsPaymee akkauntidan kelsa — ha, Telegram shartlari bilan. Akkauntlarimiz bu odamni tanimasa, sovg‘a bot nomidan keladi va Telegram qoidasiga ko‘ra uni Stars’ga aylantirib bo‘lmaydi. Ilova buni to‘lovdan oldin yozadi.",
  },
  {
    question: "Username’im yo‘q — o‘zimga qanday olaman?",
    answer:
      "«O‘zim» tugmasini bosing — maydonga o‘z ID’ingiz qo‘yiladi. Sovg‘ani keyin Stars’ga aylantirmoqchi bo‘lsangiz, to‘lovdan oldin @StarsPaymeeSupport’ga bitta xabar yozing.",
  },
  {
    question: "Do‘stimning Telegram ID’sini qanday bilaman?",
    answer:
      "Telegram Desktop’da «Show Peer IDs in Profile» sozlamasini yoqing (Settings → Advanced → Experimental settings) — ID profilda chiqadi. Yoki do‘stingizdan so‘rang: StarsPaymee ilovasida «O‘zim» ni bossa, ID’si maydonda ko‘rinadi.",
  },
  {
    question: "Telegram ID telefon raqamimi?",
    answer:
      "Yo‘q. ID — akkauntning noyob raqami, telefon raqam bilan bog‘liq emas. Maydon telefon raqamni qabul qilmaydi.",
  },
  {
    question: "Noto‘g‘ri ID yozsam nima bo‘ladi?",
    answer:
      "Raqam boshqa odamniki bo‘lsa, sovg‘a unga ketadi va qaytmaydi. Raqam hech kimga tegishli bo‘lmasa, sovg‘a yetkazilmaydi — buyurtma raqami bilan @StarsPaymeeSupport’ga yozing.",
  },
  {
    question: "Yangi ayiqcha qancha turadi?",
    answer:
      `${som(BEAR_PRICE_UZS, "uz")} — karta o‘tkazmasi yoki balans orqali; onlayn to‘lovda ustama qo‘shiladi. Avval Stars sotib olish shart emas: sovg‘aning o‘zi so‘mda olinadi, ${BEAR_STARS} ⭐ — uning qiymati. Telegram sotuv muddatini e’lon qilmagan.`,
  },
  {
    question: "Stars yoki Premium’ni ham Telegram ID bilan yuborsa bo‘ladimi?",
    answer:
      "Yo‘q. ID faqat sovg‘alar uchun. Stars va Premium Fragment orqali username bo‘yicha yetkaziladi — oluvchi avval username qo‘yishi kerak.",
  },
  {
    question: "Sovg‘a anonim boradimi?",
    answer:
      "ID orqali yuborish anonimlik degani emas. Sovg‘ani StarsPaymee akkaunti yoki boti yuboradi, sizning profilingiz ko‘rinmaydi; «Anonim yuborish» yuboruvchi nomini profil mehmonlaridan yashiradi, lekin oluvchining o‘zi kim yuborganini ko‘radi.",
  },
];

const faqRu = [
  {
    question: "Можно ли отправить подарок в Telegram человеку без username?",
    answer:
      "Да. В приложении StarsPaymee введите в поле «Username или Telegram ID» его числовой Telegram ID — только цифры, от 5 до 15, без @. Затем выберите подарок и оплатите в сумах.",
  },
  {
    question: "Покажет ли приложение имя получателя, если ввести ID?",
    answer:
      "Нет. По ID профиль не ищется — на карточке будет только «Telegram ID» и номер. Сверяете цифры с полученным ID вы сами.",
  },
  {
    question: "Можно ли обменять на Stars подарок, отправленный по ID?",
    answer:
      "Если подарок пришёл с аккаунта StarsPaymee — да, по правилам Telegram. Если наши аккаунты не знают этого человека, подарок придёт от бота, и по правилу Telegram обменять его на Stars нельзя. Приложение предупреждает об этом до оплаты.",
  },
  {
    question: "У меня нет username — как купить подарок себе?",
    answer:
      "Нажмите «Себе» — в поле подставится ваш ID. Чтобы потом обменять подарок на Stars, до оплаты напишите одно сообщение в @StarsPaymeeSupport.",
  },
  {
    question: "Как узнать Telegram ID друга?",
    answer:
      "Включите в Telegram Desktop пункт «Show Peer IDs in Profile» (Settings → Advanced → Experimental settings) — ID появится в профиле. Или спросите самого друга: если он нажмёт «Себе» в приложении StarsPaymee, его ID появится в поле.",
  },
  {
    question: "Telegram ID — это номер телефона?",
    answer:
      "Нет. ID — уникальный номер аккаунта, с номером телефона он не связан. Номер телефона поле не принимает.",
  },
  {
    question: "Что будет, если ошибиться в ID?",
    answer:
      "Если номер принадлежит другому человеку, подарок уйдёт ему и не вернётся. Если номер никому не принадлежит, подарок не доставят — напишите в @StarsPaymeeSupport с номером заказа.",
  },
  {
    question: "Сколько стоит новый мишка?",
    answer:
      `${som(BEAR_PRICE_UZS, "ru")} — при переводе на карту или с баланса; при онлайн-оплате добавляется наценка. Покупать Stars заранее не нужно: подарок покупается за сумы, ${BEAR_STARS} ⭐ — его стоимость. Срок продажи Telegram не объявлял.`,
  },
  {
    question: "Можно ли так же отправить Stars или Premium по Telegram ID?",
    answer:
      "Нет. ID работает только для подарков. Stars и Premium доставляются через Fragment по username — получателю сначала нужно его завести.",
  },
  {
    question: "Подарок придёт анонимно?",
    answer:
      "Отправка по ID — это не анонимность. Подарок отправляет аккаунт или бот StarsPaymee, вашего профиля не видно; «Отправить анонимно» скрывает имя отправителя от посетителей профиля, но сам получатель видит, кто прислал подарок.",
  },
];

const faqEn = [
  {
    question: "Can I send a Telegram gift to someone without a username?",
    answer:
      "Yes. In the StarsPaymee app, type their numeric Telegram ID into the “Username or Telegram ID” field — digits only, 5 to 15 of them, no @. Then pick the gift and pay in som.",
  },
  {
    question: "Does the app show the recipient’s name when I enter an ID?",
    answer:
      "No. There is no profile lookup by ID — the card shows only “Telegram ID” and the number. You compare the digits with the ID you were given yourself.",
  },
  {
    question: "Can a gift sent by ID be converted to Stars?",
    answer:
      "If it arrives from a StarsPaymee account, yes, under Telegram’s rules. If none of our accounts knows the person, the gift comes from our bot, and under Telegram’s rule it cannot be converted to Stars. The app says so before you pay.",
  },
  {
    question: "I have no username — how do I buy a gift for myself?",
    answer:
      "Tap “Me” and your own ID is filled in. To be able to convert the gift to Stars later, send one message to @StarsPaymeeSupport before paying.",
  },
  {
    question: "How do I find my friend’s Telegram ID?",
    answer:
      "Turn on “Show Peer IDs in Profile” in Telegram Desktop (Settings → Advanced → Experimental settings) and the ID appears on the profile. Or ask your friend: if they tap “Me” in the StarsPaymee app, their ID shows in the field.",
  },
  {
    question: "Is a Telegram ID the same as a phone number?",
    answer:
      "No. The ID is the account’s unique number and has nothing to do with the phone number. The field does not accept phone numbers.",
  },
  {
    question: "What happens if I type the wrong ID?",
    answer:
      "If the number belongs to someone else, the gift goes to them and does not come back. If it belongs to nobody, the gift is not delivered — message @StarsPaymeeSupport with the order number.",
  },
  {
    question: "How much is the new bear?",
    answer:
      `${som(BEAR_PRICE_UZS, "en")} by card transfer or from your balance; online payment adds a markup. You do not need to buy Stars first: the gift itself is bought in som, and ${BEAR_STARS} ⭐ is its value. Telegram has not announced an end date.`,
  },
  {
    question: "Can Stars or Premium be sent by Telegram ID as well?",
    answer:
      "No. The ID works only for gifts. Stars and Premium are delivered through Fragment by username — the recipient has to set one first.",
  },
  {
    question: "Will the gift arrive anonymously?",
    answer:
      "Sending by ID is not anonymity. A StarsPaymee account or bot sends the gift, so your profile does not appear; “Send anonymously” hides the sender’s name from profile visitors, but the recipient still sees who sent it.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-11-01",
  dateModified: "2026-11-01",
  keywords: [
    "telegram id orqali sovg‘a yuborish",
    "username’siz telegram sovg‘a",
    "username yo‘q odamga gift",
    "telegram id qanday topiladi",
    "telegram ayiqcha narxi",
    "halloween ayiqcha telegram",
    "подарок в telegram по id",
    "отправить подарок без username",
    "telegram gift by user id",
    "send telegram gift without username",
  ],
  howToSteps: [
    { name: "«Gift olish» bo‘limini oching", text: "@StarsPaymee_bot → ilova → «Sovg‘a markazi» → «Gift olish»." },
    { name: "ID’ni maydonga yozing", text: "«Username yoki Telegram ID» maydoniga faqat raqamlar — @ va bo‘sh joysiz." },
    { name: "Raqamni solishtiring", text: "Kartochkada ism emas, «Telegram ID» va raqam chiqadi — sizga berilgan ID bilan solishtiring." },
    { name: "Ogohlantirishni o‘qing", text: "Akkauntlarimiz odamni tanimasa, sovg‘a botdan keladi va Stars’ga aylanmaydi." },
    { name: "Sovg‘a, xabar va anonimlikni tanlang", text: "Tabrik ixtiyoriy; «Anonim yuborish» to‘lovdan oldin belgilanadi." },
    { name: "To‘lang va holatni kuzating", text: "Yakuniy summa oynada; holat «Mening buyurtmalarim»da, buyurtma raqamini saqlang." },
  ],
  locales: {
    uz: {
      title: "Telegram ID orqali sovg‘a yuborish: username’i yo‘q do‘stga gift (2026)",
      excerpt:
        "Username’i yo‘q odamga Telegram sovg‘asini ID bilan yuborish: 6 qadam, sovg‘a kimdan keladi va qachon Stars’ga aylanmaydi, ID’ni qayerdan bilish va yangi 50 ⭐ ayiqcha narxi.",
      metaTitle: "Telegram ID orqali sovg‘a yuborish — username’siz",
      metaDescription:
        `Do‘stingizda username yo‘qmi? StarsPaymee’da Telegram ID orqali sovg‘a yuboring: 6 qadam, ID’ni qayerdan bilish, Stars’ga aylanishi va ${som(BEAR_PRICE_UZS, "uz")}lik ayiqcha.`,
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Username’siz ham sovg‘a — Telegram ID bilan",
      ctaBody:
        "@StarsPaymee_bot → «Gift olish»: maydonga @username yoki Telegram ID yozing, sovg‘ani tanlang va so‘mda to‘lang.",
      faq: faqUz,
    },
    ru: {
      title: "Подарок в Telegram по ID: как отправить gift без username (2026)",
      excerpt:
        "Как отправить подарок Telegram человеку без username по Telegram ID: 6 шагов, от кого придёт подарок и когда его нельзя обменять на Stars, где узнать ID и цена нового мишки за 50 ⭐.",
      metaTitle: "Подарок в Telegram по ID — без username",
      metaDescription:
        `Нет username у друга? В StarsPaymee подарок Telegram можно отправить по ID: 6 шагов, где узнать ID, когда подарок не обменять на Stars и мишка за ${som(BEAR_PRICE_UZS, "ru")}.`,
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Подарок без username — по Telegram ID",
      ctaBody:
        "@StarsPaymee_bot → «Купить подарок»: введите @username или Telegram ID, выберите подарок и оплатите в сумах.",
      faq: faqRu,
    },
    en: {
      title: "Sending a Telegram gift by user ID when there is no username (2026)",
      excerpt:
        "How to send a Telegram gift to someone without a username by Telegram ID: 6 steps, who the gift comes from and when it cannot become Stars, where to find the ID, and the new 50 ⭐ bear’s price.",
      metaTitle: "Send a Telegram gift by user ID — no username needed",
      metaDescription:
        `No username? At StarsPaymee you can send a Telegram gift by user ID: 6 steps, where to find the ID, when the gift can’t become Stars, and the ${som(BEAR_PRICE_UZS, "en")} bear.`,
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "No username? Send the gift by Telegram ID",
      ctaBody:
        "@StarsPaymee_bot → “Buy a gift”: enter an @username or a Telegram ID, pick the gift and pay in som.",
      faq: faqEn,
    },
  },
};
