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
import { TELEGRAM_API_BOT_URL } from "@/lib/site";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-reseller-dasturi-qanday-boshlash";

/**
 * StarsPaymee API va reseller dasturi: qanday boshlash, tarif va hamkorlik tartibi.
 *
 * QAYTA YOZILDI (2026-10-29): «StarsPaymee API va reseller» drafti shu sahifa bilan bir
 * niyatda (draft eslatmasi ham shuni taklif qilgan) — yangi slug raqobatlashardi.
 * Slug va anchorlar (#nima, #qadamlar, #omillar, #daromad) saqlandi.
 * Eski versiyadagi «to‘lov (Click/SBP) avtomatik» da'vosi olib tashlandi — Partner API
 * yetkazish uchun, mijozdan to'lov olish unga kirmaydi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-10-29), ochiq manbalar:
 * - api.starstg.uz: «Bitta API kalit — bu sizning USDT hamyoningiz… Fragment orqali
 *   yetkaziladi. Yetarli mablag' bo'lmasa 402, xato bo'lsa pul avtomatik qaytariladi»;
 *   Telegram botda /start — kalit (sj_…) va 0 USDT balans; admin USDT kredit qo'shadi;
 *   Stars 50–10 000 dona.
 * - api.starstg.uz/api/purchase/v1/openapi.json: /v1/health, balance, pricing, rates,
 *   search, stars, premium, gifts, steam, games, giftcards, orders; /test/v1/* sandbox;
 *   idempotency_key; 402 «pul yechilmaydi», 429, 503. Webhook — YO'Q (holat orders orqali).
 * Narx va foizlar ataylab yozilmagan (o'zgaradi; ochiq tarif — /v1/pricing). «Individual
 * tarif», «hajm oshsa narx pasayadi», White Label va Click/SBP integratsiyasi
 * tasdiqlanmagan — faqat «support bilan aniqlang» deb yozilgan.
 */

const API_HOME = "https://api.starstg.uz/";
const API_DOCS = "https://api.starstg.uz/api/purchase/v1/docs";
const SUPPORT = "https://t.me/StarsPaymeeSupport";
const API_BOT = TELEGRAM_API_BOT_URL;
const apiBotHandle = "@" + API_BOT.replace(/^https?:\/\/t\.me\//, "");

const CURL = `curl -X POST "https://api.starstg.uz/api/purchase/v1/stars" \\
  -H "X-API-Key: sj_SIZNING_KALITINGIZ" \\
  -H "Content-Type: application/json" \\
  -d '{"username":"misol_user","stars":50,"idempotency_key":"order-001"}'`;

type Locale = "uz" | "ru" | "en";

function ModelTable({ locale }: { locale: Locale }) {
  const c = {
    uz: {
      h: ["Yo‘nalish", "Mazmuni"],
      r: [
        ["Resellerlik", "Savdo modeli: mahsulotni hamkor narxida olib, o‘z narxingizda mijozga sotasiz"],
        ["API integratsiyasi", "Vosita: buyurtma botingiz yoki saytingizdan StarsPaymee’ga avtomatik uzatiladi"],
        ["Sizning vazifangiz", "Mijoz topish, to‘lovni qabul qilish, mijozga javob berish"],
        ["StarsPaymee vazifasi", "Balansdan yechish va mahsulotni Fragment orqali yetkazish"],
      ],
    },
    ru: {
      h: ["Направление", "Суть"],
      r: [
        ["Реселлинг", "Модель продаж: берёте продукт по партнёрской цене и продаёте клиенту по своей"],
        ["Интеграция по API", "Инструмент: заказ автоматически уходит из вашего бота или сайта в StarsPaymee"],
        ["Ваша задача", "Найти клиента, принять оплату, отвечать клиенту"],
        ["Задача StarsPaymee", "Списать с баланса и доставить продукт через Fragment"],
      ],
    },
    en: {
      h: ["Area", "What it means"],
      r: [
        ["Reselling", "A sales model: you buy at the partner price and sell to your customer at your own"],
        ["API integration", "A tool: the order goes from your bot or site to StarsPaymee automatically"],
        ["Your job", "Finding customers, taking payment, answering them"],
        ["StarsPaymee’s job", "Debiting the balance and delivering the product through Fragment"],
      ],
    },
  }[locale];
  return <CompareTable headers={c.h} rows={c.r.map(([a, b]) => [<strong key="a">{a}</strong>, b])} />;
}

function MoneyTable({ locale }: { locale: Locale }) {
  const c = {
    uz: {
      h: ["Tushuncha", "Nima anglatadi", "Qayerdan bilinadi"],
      r: [
        ["API narxi", "Mahsulot sizga tushadigan narx, USDT’da", "/v1/pricing va API sahifasi"],
        ["To‘lov xarajati", "Mijozdan to‘lov qabul qilish komissiyasi", "O‘z to‘lov provayderingiz shartlari"],
        ["Ustama", "API narxi ustiga qo‘shadigan summangiz", "Siz belgilaydigan sotuv narxi"],
        ["Sof natija", "Barcha xarajatlardan keyin qolgan summa", "Haqiqiy savdo hisobi"],
      ],
    },
    ru: {
      h: ["Понятие", "Что значит", "Где узнать"],
      r: [
        ["Цена API", "Сколько продукт стоит вам, в USDT", "/v1/pricing и страница API"],
        ["Расход на оплату", "Комиссия за приём оплаты от клиента", "Условия вашего платёжного провайдера"],
        ["Наценка", "Сумма, которую вы добавляете к цене API", "Ваша цена продажи"],
        ["Чистый результат", "Что остаётся после всех расходов", "Реальный учёт продаж"],
      ],
    },
    en: {
      h: ["Term", "What it means", "Where to find it"],
      r: [
        ["API price", "What the product costs you, in USDT", "/v1/pricing and the API page"],
        ["Payment cost", "The fee for taking the customer’s payment", "Your payment provider’s terms"],
        ["Markup", "What you add on top of the API price", "The selling price you set"],
        ["Net result", "What is left after every cost", "Your real sales records"],
      ],
    },
  }[locale];
  return <CompareTable headers={c.h} rows={c.r.map(([a, b, d]) => [<strong key="a">{a}</strong>, b, d])} />;
}

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Ha. StarsPaymee’da <b>Partner Purchase API</b> bor: API botida /start bosasiz — kalit (sj_…) va USDT balans
      avtomatik ochiladi. Balans to‘ldirilgach botingiz yoki saytingiz POST /v1/stars yoki /v1/premium so‘rovi bilan
      buyurtma beradi: summa balansdan yechiladi, mahsulot Fragment orqali yetkaziladi. Mablag‘ yetmasa 402 qaytadi va
      pul yechilmaydi, xato bo‘lsa pul balansga qaytadi. Reseller sifatida o‘z narxingizda sotasiz: ochiq tariflar
      USDT’da, individual shartlar — @StarsPaymeeSupport orqali.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "Reseller modeli qanday ishlaydi" },
          { href: "#api", label: "Partner API’da nima bor" },
          { href: "#qadamlar", label: "Qanday boshlash: 6 qadam" },
          { href: "#daromad", label: "Daromad qanday shakllanadi" },
          { href: "#omillar", label: "Daromadga nima ta’sir qiladi" },
          { href: "#sinov", label: "Ishga tushirishdan oldin sinab ko‘ring" },
          { href: "#murojaat", label: "Supportga nima yozish kerak" },
          { href: "#botsiz", label: "Tayyor botim bo‘lmasa" },
        ]}
      />

      <h2 id="nima">Reseller modeli qanday ishlaydi</h2>
      <p>
        Reseller — mahsulotni hamkor narxida olib, o‘z mijoziga o‘z narxida sotadigan qayta sotuvchi. Bu Telegram’ning
        rasmiy dasturi emas: StarsPaymee’ning o‘zi ham Telegram’ning rasmiy hamkori emas, mustaqil xizmat; bu —
        StarsPaymee bilan hamkorlik. Ikki narsani ajratib tushuning: resellerlik — savdo modeli, API esa shu savdoni
        avtomatlashtiradigan vosita.
      </p>
      <ModelTable locale="uz" />
      <KeyFacts label="Bitta buyurtmaning yo‘li">
        <li>Mijoz botingizda mahsulot, miqdor va qabul qiluvchi @username’ini tanlaydi.</li>
        <li>Siz to‘lovni o‘z tizimingizda qabul qilasiz — Partner API mijozdan pul olmaydi.</li>
        <li>To‘lov tasdiqlangach tizimingiz API’ga so‘rov yuboradi — summa sizning USDT balansingizdan yechiladi.</li>
        <li>StarsPaymee mahsulotni Fragment orqali yetkazadi; holatni buyurtma so‘rovi bilan tekshirib, mijozga ko‘rsatasiz.</li>
      </KeyFacts>

      <h2 id="api">Partner API’da nima bor</h2>
      <KeyFacts label="Asosiy qoidalar (ochiq API sahifasi va hujjat)">
        <li>
          <b>Kalit:</b> API botida /start — sj_… kaliti va 0 USDT balans avtomatik beriladi; har so‘rovda X-API-Key
          sarlavhasi.
        </li>
        <li>
          <b>Balans USDT’da:</b> uni admin to‘ldiradi — summa va to‘lash usuli support bilan kelishiladi; qoldiq{" "}
          <code>/v1/balance</code> va dashboard’da.
        </li>
        <li>
          <b>Buyurtma:</b> <code>POST /v1/stars</code> (50 dan 10 000 donagacha) yoki <code>POST /v1/premium</code>;{" "}
          <code>idempotency_key</code> bitta buyurtmani ikki marta yuborishdan saqlaydi.
        </li>
        <li>
          <b>Pul xavfsizligi:</b> mablag‘ yetmasa 402 — pul yechilmaydi; yetkazishda xato bo‘lsa summa avtomatik qaytadi.
        </li>
        <li>
          <b>Holat:</b> <code>{"GET /v1/orders/{order_id}"}</code> — hujjatda webhook yo‘q, holatni o‘zingiz so‘raysiz.
        </li>
        <li>
          <b>Tekshiruv va sinov:</b> <code>POST /v1/search</code> qabul qiluvchini to‘lovdan oldin tekshiradi;{" "}
          <code>/test/v1/stars</code> va <code>/test/v1/premium</code> — haqiqiy pulsiz sinov.
        </li>
      </KeyFacts>
      <InfoGrid>
        <InfoCard emoji="⭐" title="Stars va Premium">
          Asosiy mahsulotlar: Stars dona bo‘yicha, Premium 3, 6 va 12 oyga — Fragment orqali.
        </InfoCard>
        <InfoCard emoji="🎁" title="Sovg‘alar">
          Sovg‘alar katalogi va yuborish — <code>/v1/gifts</code>.
        </InfoCard>
        <InfoCard emoji="🎮" title="O‘yinlar va Steam">
          O‘yin valyutalari va Steam hamyonini to‘ldirish — o‘yinchi ID tekshiruvi bilan.
        </InfoCard>
        <InfoCard emoji="💳" title="Gift card’lar">
          Brendlar, nominallar va zaxira — buyurtma holatida kodlar qaytadi.
        </InfoCard>
      </InfoGrid>
      <pre>
        <code>{CURL}</code>
      </pre>
      <p>
        To‘liq endpointlar, javoblar va xato kodlari — Swagger hujjatida (manbalarda havola). Narxlar USDT’da{" "}
        <code>/v1/pricing</code>’da, jonli TON kursi va so‘mdagi ekvivalenti — <code>/v1/rates</code>’da.
      </p>

      <h2 id="qadamlar">Qanday boshlash: 6 qadam</h2>
      <Steps>
        <Step title="1. API botini oching">
          <a href={API_BOT} target="_blank" rel="noopener noreferrer">
            {apiBotHandle}
          </a>{" "}
          → /start: kalit va balans avtomatik ochiladi.
        </Step>
        <Step title="2. Hujjat va tariflarni o‘rganing">
          Swagger hujjati, <code>/v1/pricing</code> (USDT narxlar) va <code>/v1/rates</code> (TON va so‘m ekvivalenti).
        </Step>
        <Step title="3. Sandbox’da sinang">
          <code>/test/v1/stars</code> va <code>/test/v1/premium</code> — haqiqiy pul sarflamasdan butun oqimni tekshiring.
        </Step>
        <Step title="4. Balansni to‘ldiring">
          Admin USDT kredit qo‘shadi — summa va usulni @StarsPaymeeSupport bilan kelishing.
        </Step>
        <Step title="5. Xarid oqimini ulang">
          Mijozdan to‘lovni o‘z tizimingizda oling, tasdiqlangach <code>/v1/stars</code> yoki <code>/v1/premium</code>{" "}
          so‘rovini yuboring, holatni buyurtma so‘rovi bilan ko‘rsating.
        </Step>
        <Step title="6. Kichikdan boshlang">
          Birinchi buyurtmalarda holat, xato va xarajatlarni kuzating, keyin reklama va hajmni oshiring.
        </Step>
      </Steps>

      <h2 id="daromad">Daromad qanday shakllanadi</h2>
      <p>
        «Necha foiz qoladi?» degan savolga bitta javob yo‘q: hammaga bir xil kafolatlangan foiz yo‘q. Uch narsani
        aralashtirmang — API narxi, to‘lov xarajati va sizning ustamangiz:
      </p>
      <MoneyTable locale="uz" />
      <p>
        Hisob formulasi: <b>sof natija = sotuv narxi − API narxi (so‘mga o‘girilgan) − to‘lov komissiyasi − boshqa
        xarajatlar</b>. Ochiq tariflar — <code>/v1/pricing</code>’da; katta hajm uchun alohida shart bo‘lishi yoki
        bo‘lmasligini support bilan aniqlang.
      </p>
      <Notice label="Ustama ≠ foyda">
        Xarid va sotuv narxi orasidagi farq hali sof foyda emas: bitta mijozni jalb qilish xarajati ham bor. «Necha foiz
        ustama qo‘yaman?» emas, «bitta bajarilgan buyurtmadan qancha qoladi?» deb hisoblang.
      </Notice>

      <h2 id="omillar">Daromadga nima ta’sir qiladi</h2>
      <KeyFacts label="Hisobga oling">
        <li>
          <b>Kurs:</b> API narxi USDT’da, mijoz esa so‘mda to‘laydi — kurs o‘zgarsa marja ham o‘zgaradi.
        </li>
        <li>
          <b>To‘lov qabul qilish:</b> Click, Payme va boshqa provayderlar komissiyasi sizning hisobingizda.
        </li>
        <li>
          <b>Mijoz jalb qilish:</b> reklama va kanal xarajatlari — kichik savdodan o‘lchab boshlang.
        </li>
        <li>
          <b>Xatolar:</b> noto‘g‘ri username’ga yetkazilgan Stars qaytarilmaydi — <code>/v1/search</code> bilan oldindan
          tekshiring.
        </li>
        <li>
          <b>Mijozga yordam:</b> savollarga javob berish sizning vazifangiz — vaqt va odamni rejalashtiring.
        </li>
      </KeyFacts>

      <h2 id="sinov">Ishga tushirishdan oldin sinab ko‘ring</h2>
      <InfoGrid>
        <InfoCard emoji="🔎" title="Noto‘g‘ri username">
          Qidiruv 404 qaytarsa, mijozga «foydalanuvchi topilmadi» deb ko‘rsating — to‘lovni olmang.
        </InfoCard>
        <InfoCard emoji="💸" title="Balans yetmaydi">
          402 — pul yechilmaydi; mijozga kechikishni tushuntiring va balansni to‘ldiring.
        </InfoCard>
        <InfoCard emoji="⏱️" title="Ko‘p so‘rov yoki kechikish">
          429 yoki javob kelmasa — xuddi o‘sha idempotency_key bilan qayta urinish ikkinchi xarid yaratmaydi.
        </InfoCard>
        <InfoCard emoji="🛠️" title="Fragment ishlamaydi">
          503 — keyinroq urining; <code>/v1/health</code> bilan holatni tekshiring.
        </InfoCard>
      </InfoGrid>

      <h2 id="murojaat">Supportga nima yozish kerak</h2>
      <KeyFacts label="Aniqlashtiring">
        <li>Ochiq tarifdan tashqari alohida shart yoki hajm uchun chegirma bormi.</li>
        <li>Balansni qanday to‘ldirish mumkin va minimal summa bormi.</li>
        <li>Yetkazilmagan yoki xato buyurtmada qanday tartib qo‘llanadi.</li>
        <li>Sizga kerakli mahsulotlar katalogda bormi.</li>
      </KeyFacts>
      <Notice label="Namuna xabar">
        Assalomu alaykum! StarsPaymee bilan API/reseller hamkorligi bo‘yicha murojaat. Loyiha: … · Bot yoki sayt: … ·
        Mahsulotlar: Stars / Premium / boshqa · Taxminiy hajm: kuniga … ta · Holat: yangi loyiha yoki ishlab turgan xizmat ·
        Dasturchi: bor yoki yo‘q. Iltimos, tariflar, balans to‘ldirish va sinov tartibi haqida ma’lumot bering.
      </Notice>
      <InlineCta text="Savol bormi? @StarsPaymeeSupport — API va reseller hamkorligi bo‘yicha." />

      <h2 id="botsiz">Tayyor botim bo‘lmasa</h2>
      <p>
        Tayyor bot yo‘qligi sabab murojaatni kechiktirish shart emas: auditoriya va savdo g‘oyasi bilan ham boshlash
        mumkin. API ishlatish uchun esa botingiz yoki saytingizni dasturchi ulashi kerak. Tayyor yechim yoki ulash
        xizmati mavjudligi, muddati va narxini support bilan aniqlang — reseller tarifi va bot ishlab chiqish narxini bitta
        xarajat deb qabul qilmang. Integratsiyalar haqida umumiy ma’lumot —{" "}
        <Link href="/business">Biznes va API sahifasi</Link>; API tushunchasi —{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Telegram Stars API nima</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: API_HOME, label: "api.starstg.uz", note: "Partner Purchase API: USDT balans, Fragment, 402, avtomatik qaytarish, ro‘yxatdan o‘tish" },
          { href: API_DOCS, label: "Partner API — Swagger hujjati", note: "endpointlar, idempotency_key, xato kodlari, sandbox" },
          { href: API_BOT, label: apiBotHandle, note: "API kaliti va balans" },
          { href: SUPPORT, label: "@StarsPaymeeSupport", note: "tariflar va hamkorlik shartlari" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Да. У StarsPaymee есть <b>Partner Purchase API</b>: в API-боте нажимаете /start — автоматически создаются ключ
      (sj_…) и баланс в USDT. После пополнения баланса ваш бот или сайт оформляет заказ запросом POST /v1/stars или
      /v1/premium: сумма списывается с баланса, продукт доставляется через Fragment. Если средств не хватает, возвращается
      402 и деньги не списываются, при ошибке деньги возвращаются на баланс. Как реселлер вы продаёте по своей цене:
      открытые тарифы — в USDT, индивидуальные условия — через @StarsPaymeeSupport.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nima", label: "Как работает модель реселлера" },
          { href: "#api", label: "Что есть в Partner API" },
          { href: "#qadamlar", label: "Как начать: 6 шагов" },
          { href: "#daromad", label: "Как складывается доход" },
          { href: "#omillar", label: "Что влияет на доход" },
          { href: "#sinov", label: "Проверьте до запуска" },
          { href: "#murojaat", label: "Что написать в поддержку" },
          { href: "#botsiz", label: "Если готового бота нет" },
        ]}
      />

      <h2 id="nima">Как работает модель реселлера</h2>
      <p>
        Реселлер — перепродавец, который берёт продукт по партнёрской цене и продаёт своему клиенту по своей. Это не
        официальная программа Telegram: сам StarsPaymee тоже не официальный партнёр Telegram, а независимый сервис; это —
        сотрудничество со StarsPaymee. Разделяйте две вещи: реселлинг — модель продаж, а API — инструмент, который её
        автоматизирует.
      </p>
      <ModelTable locale="ru" />
      <KeyFacts label="Путь одного заказа">
        <li>Клиент в вашем боте выбирает продукт, количество и @username получателя.</li>
        <li>Оплату вы принимаете в своей системе — Partner API деньги с клиента не берёт.</li>
        <li>После подтверждения оплаты ваша система отправляет запрос в API — сумма списывается с вашего баланса в USDT.</li>
        <li>StarsPaymee доставляет продукт через Fragment; статус вы проверяете запросом заказа и показываете клиенту.</li>
      </KeyFacts>

      <h2 id="api">Что есть в Partner API</h2>
      <KeyFacts label="Основные правила (открытая страница API и документация)">
        <li>
          <b>Ключ:</b> в API-боте по /start автоматически выдаются ключ sj_… и баланс 0 USDT; в каждом запросе — заголовок
          X-API-Key.
        </li>
        <li>
          <b>Баланс в USDT:</b> его пополняет администратор — сумма и способ оплаты согласуются с поддержкой; остаток — в{" "}
          <code>/v1/balance</code> и в дашборде.
        </li>
        <li>
          <b>Заказ:</b> <code>POST /v1/stars</code> (от 50 до 10 000 штук) или <code>POST /v1/premium</code>;{" "}
          <code>idempotency_key</code> защищает от повторной отправки одного заказа.
        </li>
        <li>
          <b>Защита денег:</b> если средств не хватает — 402, деньги не списываются; при ошибке доставки сумма
          возвращается автоматически.
        </li>
        <li>
          <b>Статус:</b> <code>{"GET /v1/orders/{order_id}"}</code> — webhook в документации нет, статус вы запрашиваете
          сами.
        </li>
        <li>
          <b>Проверка и тест:</b> <code>POST /v1/search</code> проверяет получателя до оплаты; <code>/test/v1/stars</code> и{" "}
          <code>/test/v1/premium</code> — тест без реальных денег.
        </li>
      </KeyFacts>
      <InfoGrid>
        <InfoCard emoji="⭐" title="Stars и Premium">
          Основные продукты: Stars поштучно, Premium на 3, 6 и 12 месяцев — через Fragment.
        </InfoCard>
        <InfoCard emoji="🎁" title="Подарки">
          Каталог подарков и отправка — <code>/v1/gifts</code>.
        </InfoCard>
        <InfoCard emoji="🎮" title="Игры и Steam">
          Игровая валюта и пополнение Steam — с проверкой ID игрока.
        </InfoCard>
        <InfoCard emoji="💳" title="Подарочные карты">
          Бренды, номиналы и наличие — в статусе заказа возвращаются коды.
        </InfoCard>
      </InfoGrid>
      <pre>
        <code>{CURL}</code>
      </pre>
      <p>
        Все эндпоинты, ответы и коды ошибок — в документации Swagger (ссылка в источниках). Цены в USDT — в{" "}
        <code>/v1/pricing</code>, живой курс TON и эквивалент в сумах — в <code>/v1/rates</code>.
      </p>

      <h2 id="qadamlar">Как начать: 6 шагов</h2>
      <Steps>
        <Step title="1. Откройте API-бота">
          <a href={API_BOT} target="_blank" rel="noopener noreferrer">
            {apiBotHandle}
          </a>{" "}
          → /start: ключ и баланс создаются автоматически.
        </Step>
        <Step title="2. Изучите документацию и тарифы">
          Документация Swagger, <code>/v1/pricing</code> (цены в USDT) и <code>/v1/rates</code> (эквивалент в TON и сумах).
        </Step>
        <Step title="3. Протестируйте в sandbox">
          <code>/test/v1/stars</code> и <code>/test/v1/premium</code> — проверьте весь поток без реальных денег.
        </Step>
        <Step title="4. Пополните баланс">
          Администратор добавляет кредит в USDT — сумму и способ согласуйте с @StarsPaymeeSupport.
        </Step>
        <Step title="5. Подключите поток покупки">
          Принимайте оплату в своей системе, после подтверждения отправляйте <code>/v1/stars</code> или{" "}
          <code>/v1/premium</code>, показывайте статус по запросу заказа.
        </Step>
        <Step title="6. Начните с малого">
          На первых заказах следите за статусами, ошибками и расходами, затем увеличивайте рекламу и объём.
        </Step>
      </Steps>

      <h2 id="daromad">Как складывается доход</h2>
      <p>
        На вопрос «сколько процентов останется?» нет одного ответа: гарантированного процента для всех нет. Не смешивайте
        три вещи — цену API, расход на оплату и вашу наценку:
      </p>
      <MoneyTable locale="ru" />
      <p>
        Формула: <b>чистый результат = цена продажи − цена API (в сумах) − комиссия за оплату − прочие расходы</b>.
        Открытые тарифы — в <code>/v1/pricing</code>; есть ли особые условия для большого объёма, уточните в поддержке.
      </p>
      <Notice label="Наценка ≠ прибыль">
        Разница между ценой покупки и продажи — ещё не чистая прибыль: есть и стоимость привлечения клиента. Считайте не
        «какую наценку поставить», а «сколько остаётся с одного выполненного заказа».
      </Notice>

      <h2 id="omillar">Что влияет на доход</h2>
      <KeyFacts label="Учитывайте">
        <li>
          <b>Курс:</b> цена API в USDT, а клиент платит в сумах — при изменении курса меняется и маржа.
        </li>
        <li>
          <b>Приём оплаты:</b> комиссия Click, Payme и других провайдеров — на вас.
        </li>
        <li>
          <b>Привлечение клиентов:</b> реклама и расходы на каналы — начинайте с малых продаж и замеряйте.
        </li>
        <li>
          <b>Ошибки:</b> Stars, доставленные на неверный username, не возвращаются — проверяйте через{" "}
          <code>/v1/search</code> заранее.
        </li>
        <li>
          <b>Поддержка клиентов:</b> отвечать клиентам — ваша задача, заложите время и людей.
        </li>
      </KeyFacts>

      <h2 id="sinov">Проверьте до запуска</h2>
      <InfoGrid>
        <InfoCard emoji="🔎" title="Неверный username">
          Если поиск вернул 404, покажите клиенту «пользователь не найден» — и не принимайте оплату.
        </InfoCard>
        <InfoCard emoji="💸" title="Не хватает баланса">
          402 — деньги не списываются; объясните клиенту задержку и пополните баланс.
        </InfoCard>
        <InfoCard emoji="⏱️" title="Много запросов или задержка">
          429 или нет ответа — повтор с тем же idempotency_key не создаст вторую покупку.
        </InfoCard>
        <InfoCard emoji="🛠️" title="Fragment недоступен">
          503 — повторите позже; состояние проверяйте через <code>/v1/health</code>.
        </InfoCard>
      </InfoGrid>

      <h2 id="murojaat">Что написать в поддержку</h2>
      <KeyFacts label="Уточните">
        <li>Есть ли условия помимо открытого тарифа или скидка за объём.</li>
        <li>Как пополнять баланс и есть ли минимальная сумма.</li>
        <li>Какой порядок действует при недоставленном или ошибочном заказе.</li>
        <li>Есть ли нужные вам продукты в каталоге.</li>
      </KeyFacts>
      <Notice label="Пример сообщения">
        Здравствуйте! Обращение по API/реселлинг-сотрудничеству со StarsPaymee. Проект: … · Бот или сайт: … · Продукты:
        Stars / Premium / другое · Примерный объём: … заказов в день · Статус: новый проект или работающий сервис ·
        Разработчик: есть или нет. Пожалуйста, расскажите о тарифах, пополнении баланса и порядке тестирования.
      </Notice>
      <InlineCta text="Есть вопросы? @StarsPaymeeSupport — по API и реселлинг-сотрудничеству." />

      <h2 id="botsiz">Если готового бота нет</h2>
      <p>
        Откладывать обращение из-за отсутствия бота не нужно: начать можно и с аудитории и идеи продаж. А чтобы работать по
        API, бот или сайт должен подключить разработчик. Есть ли готовое решение или услуга подключения, сроки и цену
        уточните в поддержке — не считайте тариф реселлера и стоимость разработки бота одним расходом. Общая информация об
        интеграциях — <Link href="/business">страница «Бизнес и API»</Link>; что такое API —{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Telegram Stars API</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: API_HOME, label: "api.starstg.uz", note: "Partner Purchase API: баланс USDT, Fragment, 402, автовозврат, регистрация" },
          { href: API_DOCS, label: "Partner API — документация Swagger", note: "эндпоинты, idempotency_key, коды ошибок, sandbox" },
          { href: API_BOT, label: apiBotHandle, note: "ключ API и баланс" },
          { href: SUPPORT, label: "@StarsPaymeeSupport", note: "тарифы и условия сотрудничества" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      Yes. StarsPaymee has a <b>Partner Purchase API</b>: press /start in the API bot and a key (sj_…) and a USDT balance
      are created automatically. Once the balance is topped up, your bot or site places orders with a POST /v1/stars or
      /v1/premium request: the amount is debited from the balance and the product is delivered through Fragment. If funds
      are short you get a 402 and nothing is debited; on an error the money returns to the balance. As a reseller you
      sell at your own price: the open prices are in USDT, individual terms go through @StarsPaymeeSupport.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#nima", label: "How the reseller model works" },
          { href: "#api", label: "What the Partner API offers" },
          { href: "#qadamlar", label: "How to start: 6 steps" },
          { href: "#daromad", label: "How the income is made" },
          { href: "#omillar", label: "What affects your income" },
          { href: "#sinov", label: "Test before you launch" },
          { href: "#murojaat", label: "What to tell support" },
          { href: "#botsiz", label: "If you have no bot yet" },
        ]}
      />

      <h2 id="nima">How the reseller model works</h2>
      <p>
        A reseller buys a product at the partner price and sells it to their own customer at their own price. This is not
        an official Telegram programme: StarsPaymee itself is not an official Telegram partner but an independent service;
        this is a partnership with StarsPaymee. Keep two things apart: reselling is the sales model, the API is the tool
        that automates it.
      </p>
      <ModelTable locale="en" />
      <KeyFacts label="The path of one order">
        <li>The customer picks the product, the amount and the recipient’s @username in your bot.</li>
        <li>You take the payment in your own system — the Partner API does not collect money from customers.</li>
        <li>Once the payment is confirmed, your system calls the API — the amount is debited from your USDT balance.</li>
        <li>StarsPaymee delivers through Fragment; you check the status with an order request and show it to the customer.</li>
      </KeyFacts>

      <h2 id="api">What the Partner API offers</h2>
      <KeyFacts label="Core rules (the public API page and docs)">
        <li>
          <b>Key:</b> /start in the API bot issues an sj_… key and a 0 USDT balance automatically; send it in the X-API-Key
          header on every request.
        </li>
        <li>
          <b>Balance in USDT:</b> an admin tops it up — the amount and payment method are agreed with support; the
          remainder shows in <code>/v1/balance</code> and the dashboard.
        </li>
        <li>
          <b>Orders:</b> <code>POST /v1/stars</code> (50 to 10,000) or <code>POST /v1/premium</code>;{" "}
          <code>idempotency_key</code> stops one order from being sent twice.
        </li>
        <li>
          <b>Money safety:</b> short on funds — a 402 and nothing is debited; a delivery error refunds the amount
          automatically.
        </li>
        <li>
          <b>Status:</b> <code>{"GET /v1/orders/{order_id}"}</code> — the docs have no webhook, so you poll the status.
        </li>
        <li>
          <b>Checks and tests:</b> <code>POST /v1/search</code> checks the recipient before payment;{" "}
          <code>/test/v1/stars</code> and <code>/test/v1/premium</code> are a sandbox with no real money.
        </li>
      </KeyFacts>
      <InfoGrid>
        <InfoCard emoji="⭐" title="Stars and Premium">
          The core products: Stars by the unit, Premium for 3, 6 and 12 months — through Fragment.
        </InfoCard>
        <InfoCard emoji="🎁" title="Gifts">
          The gift catalogue and sending — <code>/v1/gifts</code>.
        </InfoCard>
        <InfoCard emoji="🎮" title="Games and Steam">
          In-game currency and Steam wallet top-ups — with a player ID check.
        </InfoCard>
        <InfoCard emoji="💳" title="Gift cards">
          Brands, denominations and stock — codes come back in the order status.
        </InfoCard>
      </InfoGrid>
      <pre>
        <code>{CURL}</code>
      </pre>
      <p>
        Every endpoint, response and error code is in the Swagger docs (linked in the sources). Prices in USDT are in{" "}
        <code>/v1/pricing</code>; the live TON rate and the som equivalent are in <code>/v1/rates</code>.
      </p>

      <h2 id="qadamlar">How to start: 6 steps</h2>
      <Steps>
        <Step title="1. Open the API bot">
          <a href={API_BOT} target="_blank" rel="noopener noreferrer">
            {apiBotHandle}
          </a>{" "}
          → /start: the key and balance are created automatically.
        </Step>
        <Step title="2. Study the docs and pricing">
          The Swagger docs, <code>/v1/pricing</code> (prices in USDT) and <code>/v1/rates</code> (TON and som equivalents).
        </Step>
        <Step title="3. Test in the sandbox">
          <code>/test/v1/stars</code> and <code>/test/v1/premium</code> — check the whole flow without real money.
        </Step>
        <Step title="4. Top up the balance">
          An admin adds USDT credit — agree the amount and method with @StarsPaymeeSupport.
        </Step>
        <Step title="5. Connect the purchase flow">
          Take the payment in your own system, then send <code>/v1/stars</code> or <code>/v1/premium</code>, and show the
          status from the order request.
        </Step>
        <Step title="6. Start small">
          Watch statuses, errors and costs on the first orders, then scale up advertising and volume.
        </Step>
      </Steps>

      <h2 id="daromad">How the income is made</h2>
      <p>
        There is no single answer to “what percentage do I keep?” — there is no guaranteed rate for everyone. Do not mix
        up three things: the API price, the payment cost and your markup:
      </p>
      <MoneyTable locale="en" />
      <p>
        The formula: <b>net result = selling price − API price (converted to som) − payment fee − other costs</b>. The open
        prices are in <code>/v1/pricing</code>; ask support whether special terms exist for large volumes.
      </p>
      <Notice label="Markup ≠ profit">
        The gap between the buying and selling price is not yet net profit: acquiring each customer costs money too. Do not
        ask “what markup should I set?” but “how much is left from one completed order?”.
      </Notice>

      <h2 id="omillar">What affects your income</h2>
      <KeyFacts label="Keep in mind">
        <li>
          <b>Exchange rate:</b> the API price is in USDT while customers pay in som — when the rate moves, so does your
          margin.
        </li>
        <li>
          <b>Taking payments:</b> Click, Payme and other providers’ fees are on you.
        </li>
        <li>
          <b>Acquiring customers:</b> ads and channel costs — start with small sales and measure.
        </li>
        <li>
          <b>Mistakes:</b> Stars delivered to a wrong username are not refunded — check with <code>/v1/search</code> first.
        </li>
        <li>
          <b>Customer support:</b> answering customers is your job — plan time and people for it.
        </li>
      </KeyFacts>

      <h2 id="sinov">Test before you launch</h2>
      <InfoGrid>
        <InfoCard emoji="🔎" title="A wrong username">
          If search returns 404, show the customer “user not found” — and do not take the payment.
        </InfoCard>
        <InfoCard emoji="💸" title="Not enough balance">
          402 — nothing is debited; explain the delay to the customer and top up.
        </InfoCard>
        <InfoCard emoji="⏱️" title="Too many requests or a delay">
          429 or no answer — retrying with the same idempotency_key will not create a second purchase.
        </InfoCard>
        <InfoCard emoji="🛠️" title="Fragment unavailable">
          503 — try again later; check the state with <code>/v1/health</code>.
        </InfoCard>
      </InfoGrid>

      <h2 id="murojaat">What to tell support</h2>
      <KeyFacts label="Clarify">
        <li>Whether there are terms beyond the open price list, or a volume discount.</li>
        <li>How to top up the balance and whether there is a minimum amount.</li>
        <li>What happens with an undelivered or failed order.</li>
        <li>Whether the products you need are in the catalogue.</li>
      </KeyFacts>
      <Notice label="Sample message">
        Hello! A request about an API/reseller partnership with StarsPaymee. Project: … · Bot or site: … · Products: Stars /
        Premium / other · Expected volume: … orders a day · Status: new project or a running service · Developer: yes or no.
        Please tell me about pricing, balance top-ups and the testing procedure.
      </Notice>
      <InlineCta text="Questions? @StarsPaymeeSupport — for the API and reseller partnership." />

      <h2 id="botsiz">If you have no bot yet</h2>
      <p>
        You do not need to put off getting in touch because you have no bot: you can start with an audience and a sales
        idea. To use the API, though, a developer has to connect your bot or site. Ask support whether a ready solution or
        a set-up service exists, and its timing and price — do not treat the reseller price and the cost of building a bot
        as one expense. An overview of the integrations — <Link href="/business">the Business &amp; API page</Link>; what an
        API is — <Link href="/blog/telegram-stars-api-nima-ulanish">the Telegram Stars API</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: API_HOME, label: "api.starstg.uz", note: "Partner Purchase API: USDT balance, Fragment, 402, automatic refunds, sign-up" },
          { href: API_DOCS, label: "Partner API — Swagger docs", note: "endpoints, idempotency_key, error codes, sandbox" },
          { href: API_BOT, label: apiBotHandle, note: "API key and balance" },
          { href: SUPPORT, label: "@StarsPaymeeSupport", note: "pricing and partnership terms" },
        ]}
      />
    </>
  );
}

const faqUz = [
  {
    question: "StarsPaymee’dan API olsa bo‘ladimi?",
    answer: `Ha — Partner Purchase API bor. ${apiBotHandle} botida /start bosasiz: kalit (sj_…) va USDT balans avtomatik ochiladi.`,
  },
  {
    question: "Reseller bo‘lib Stars yoki Premium sota olamanmi?",
    answer:
      "Ha. API orqali Stars va Premium’ni o‘z narxingizda sotasiz; katalogda sovg‘alar, Steam, o‘yinlar va gift card’lar ham bor.",
  },
  {
    question: "Reseller uchun foiz qancha?",
    answer:
      "Hammaga bir xil kafolatlangan foiz yo‘q. API narxi /v1/pricing’da (USDT), sizga qoladigan summa sotuv narxi va xarajatlaringizga bog‘liq; alohida shartlar — @StarsPaymeeSupport orqali.",
  },
  {
    question: "API olish bepulmi?",
    answer:
      "Kalit botda avtomatik beriladi, xarid uchun esa balansni to‘ldirasiz. Alohida ulanish to‘lovi yoki minimal balans bor-yo‘qligini support’dan aniqlang.",
  },
  {
    question: "Balans qaysi valyutada?",
    answer: "USDT’da. Uni admin to‘ldiradi — summa va to‘lash usuli support bilan kelishiladi; qoldiq /v1/balance va dashboard’da.",
  },
  {
    question: "Balans yetmasa nima bo‘ladi?",
    answer: "API 402 qaytaradi va pul yechilmaydi. Balansni to‘ldirgach, xuddi o‘sha idempotency_key bilan qayta urinish mumkin.",
  },
  {
    question: "Yetkazishda xato bo‘lsa pul nima bo‘ladi?",
    answer: "API sahifasiga ko‘ra xato bo‘lsa summa balansga avtomatik qaytariladi.",
  },
  {
    question: "Sinov muhiti (sandbox) bormi?",
    answer: "Ha: /test/v1/stars, /test/v1/premium va /test/v1/steam — haqiqiy pul sarflamasdan oqimni tekshirasiz.",
  },
  {
    question: "Mijozdan to‘lovni API qabul qiladimi?",
    answer:
      "Yo‘q. Partner API yetkazish uchun — to‘lovni o‘z tizimingizda qabul qilasiz. Boshqa integratsiya xizmatlari bo‘lsa, shartlarini support bilan aniqlang.",
  },
  {
    question: "Qayerga yozaman?",
    answer: `Hamkorlik bo‘yicha — @StarsPaymeeSupport; kalit va balans — ${apiBotHandle}. Xabarni «API/reseller hamkorligi bo‘yicha murojaat» deb boshlang.`,
  },
];

const faqRu = [
  {
    question: "Можно ли получить API у StarsPaymee?",
    answer: `Да — есть Partner Purchase API. В боте ${apiBotHandle} нажимаете /start: ключ (sj_…) и баланс в USDT создаются автоматически.`,
  },
  {
    question: "Можно ли стать реселлером Stars или Premium?",
    answer: "Да. Через API вы продаёте Stars и Premium по своей цене; в каталоге есть также подарки, Steam, игры и подарочные карты.",
  },
  {
    question: "Какой процент у реселлера?",
    answer:
      "Гарантированного процента для всех нет. Цена API — в /v1/pricing (USDT), сколько останется вам — зависит от цены продажи и расходов; особые условия — через @StarsPaymeeSupport.",
  },
  {
    question: "API бесплатный?",
    answer: "Ключ выдаётся в боте автоматически, а для покупок вы пополняете баланс. Есть ли плата за подключение или минимальный баланс, уточните в поддержке.",
  },
  {
    question: "В какой валюте баланс?",
    answer: "В USDT. Его пополняет администратор — сумма и способ согласуются с поддержкой; остаток — в /v1/balance и в дашборде.",
  },
  {
    question: "Что будет, если не хватит баланса?",
    answer: "API вернёт 402, деньги не спишутся. После пополнения можно повторить запрос с тем же idempotency_key.",
  },
  {
    question: "Что с деньгами при ошибке доставки?",
    answer: "По странице API при ошибке сумма автоматически возвращается на баланс.",
  },
  {
    question: "Есть ли тестовая среда (sandbox)?",
    answer: "Да: /test/v1/stars, /test/v1/premium и /test/v1/steam — проверяете поток без реальных денег.",
  },
  {
    question: "Принимает ли API оплату от клиента?",
    answer: "Нет. Partner API — для доставки, оплату вы принимаете в своей системе. Если нужны другие интеграции, уточните условия в поддержке.",
  },
  {
    question: "Куда писать?",
    answer: `По сотрудничеству — @StarsPaymeeSupport; ключ и баланс — ${apiBotHandle}. Начните сообщение с «Обращение по API/реселлингу».`,
  },
];

const faqEn = [
  {
    question: "Can I get an API from StarsPaymee?",
    answer: `Yes — there is a Partner Purchase API. Press /start in ${apiBotHandle}: a key (sj_…) and a USDT balance are created automatically.`,
  },
  {
    question: "Can I resell Stars or Premium?",
    answer: "Yes. Through the API you sell Stars and Premium at your own price; the catalogue also has gifts, Steam, games and gift cards.",
  },
  {
    question: "What percentage does a reseller get?",
    answer:
      "There is no guaranteed rate for everyone. The API price is in /v1/pricing (USDT); what you keep depends on your selling price and costs; special terms go through @StarsPaymeeSupport.",
  },
  {
    question: "Is the API free?",
    answer: "The key is issued in the bot automatically, and you top up the balance to buy. Ask support whether there is a connection fee or a minimum balance.",
  },
  {
    question: "What currency is the balance in?",
    answer: "USDT. An admin tops it up — the amount and method are agreed with support; the remainder shows in /v1/balance and the dashboard.",
  },
  {
    question: "What happens if the balance runs short?",
    answer: "The API returns 402 and nothing is debited. After topping up, you can retry with the same idempotency_key.",
  },
  {
    question: "What happens to the money if delivery fails?",
    answer: "According to the API page, on an error the amount returns to the balance automatically.",
  },
  {
    question: "Is there a sandbox?",
    answer: "Yes: /test/v1/stars, /test/v1/premium and /test/v1/steam — test the flow without real money.",
  },
  {
    question: "Does the API take payments from customers?",
    answer: "No. The Partner API is for delivery — you take payments in your own system. If you need other integrations, ask support about the terms.",
  },
  {
    question: "Where do I write?",
    answer: `For the partnership — @StarsPaymeeSupport; for the key and balance — ${apiBotHandle}. Start your message with “API/reseller partnership request”.`,
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "howto",
  datePublished: "2026-07-11",
  dateModified: "2026-10-29",
  keywords: [
    "telegram reseller",
    "telegram stars reseller",
    "reseller dasturi",
    "telegram reseller api",
    "stars premium reseller",
    "reseller bo‘lish",
    "telegram stars biznesi daromad",
    "reseller marja hisobi",
    "starspaymee api",
    "starspaymee reseller",
    "api olish stars premium",
    "партнёрский api telegram stars",
    "telegram stars reseller api",
  ],
  howToSteps: [
    { name: "API botini oching", text: "API botida /start — kalit (sj_…) va USDT balans avtomatik ochiladi." },
    { name: "Hujjat va tariflarni o‘rganing", text: "Swagger hujjati, /v1/pricing va /v1/rates." },
    { name: "Sandbox’da sinang", text: "/test/v1/stars va /test/v1/premium bilan haqiqiy pulsiz." },
    { name: "Balansni to‘ldiring", text: "Admin USDT kredit qo‘shadi — summa va usulni support bilan kelishing." },
    { name: "Xarid oqimini ulang", text: "To‘lovni o‘zingiz qabul qiling, keyin /v1/stars yoki /v1/premium so‘rovini yuboring." },
    { name: "Kichikdan boshlang", text: "Holat, xato va xarajatlarni kuzatib, keyin hajmni oshiring." },
  ],
  locales: {
    uz: {
      title: "StarsPaymee API va reseller dasturi: qanday boshlash, tarif va hamkorlik tartibi (2026)",
      excerpt:
        "StarsPaymee’dan API olish va reseller bo‘lish: Partner API qanday ishlaydi (USDT balans, Fragment, 402, avtomatik qaytarish, sandbox), 6 qadam, daromad hisobi, sinov holatlari va supportga murojaat namunasi.",
      metaTitle: "StarsPaymee API va reseller dasturi: qanday boshlash",
      metaDescription: "StarsPaymee Partner API: kalit API botida, balans USDT’da, Stars va Premium Fragment orqali, xatoda pul qaytadi. Reseller tarifi, foiz va hamkorlik tartibi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Hamkorlik shartlarini bilib oling",
      ctaBody: "Loyihangizni qisqacha yozing — tariflar, balans to‘ldirish va sinov tartibi bo‘yicha @StarsPaymeeSupport javob beradi.",
      faq: faqUz,
    },
    ru: {
      title: "API и реселлинг StarsPaymee: как начать, тарифы и порядок сотрудничества (2026)",
      excerpt:
        "Как получить API и стать реселлером StarsPaymee: как работает Partner API (баланс USDT, Fragment, 402, автовозврат, sandbox), 6 шагов, расчёт дохода, проверки перед запуском и пример обращения в поддержку.",
      metaTitle: "API и реселлинг StarsPaymee: как начать и тарифы",
      metaDescription: "Партнёрский API StarsPaymee: ключ в API-боте, баланс в USDT, доставка Stars и Premium через Fragment, возврат при ошибке. Тарифы, наценка и как начать.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Узнайте условия сотрудничества",
      ctaBody: "Коротко опишите проект — @StarsPaymeeSupport ответит про тарифы, пополнение баланса и порядок тестирования.",
      faq: faqRu,
    },
    en: {
      title: "StarsPaymee API and reseller program: how to start, pricing and partnership (2026)",
      excerpt:
        "Getting an API and becoming a StarsPaymee reseller: how the Partner API works (USDT balance, Fragment, 402, automatic refunds, sandbox), 6 steps, the income maths, pre-launch tests and a sample message to support.",
      metaTitle: "StarsPaymee API and reseller program: how to start",
      metaDescription: "StarsPaymee Partner API: a key from the API bot, a USDT balance, Stars and Premium via Fragment, refunds on errors. Reseller pricing, margins and how to start.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Find out the partnership terms",
      ctaBody: "Describe your project briefly — @StarsPaymeeSupport will answer about pricing, balance top-ups and testing.",
      faq: faqEn,
    },
  },
};
