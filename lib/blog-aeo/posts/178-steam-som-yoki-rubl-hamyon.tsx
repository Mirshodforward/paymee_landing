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
import { STEAM_MAX_USD, STEAM_MIN_USD, STEAM_RATE_UZS_PER_USD, formatUzs, steamPriceUzs } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "steam-som-yoki-rubl-hamyon";

const SAMPLE_USD = [1, 5, 10, 50, 100, 400];
const rate = (loc: string) => STEAM_RATE_UZS_PER_USD.toLocaleString(loc === "ru" ? "ru-RU" : "en-US").replace(/[, ]/g, " ");

function RateTable({ locale }: { locale: "uz" | "ru" | "en" }) {
  const t = {
    uz: { headers: ["Dollarda", "So‘mda"], max: "maksimum" },
    ru: { headers: ["В долларах", "В сумах"], max: "максимум" },
    en: { headers: ["In dollars", "In so‘m"], max: "maximum" },
  }[locale];
  return (
    <CompareTable
      headers={t.headers}
      rows={SAMPLE_USD.map((usd) => [
        <strong key="a">
          ${usd}
          {usd === STEAM_MAX_USD ? ` (${t.max})` : ""}
        </strong>,
        formatUzs(steamPriceUzs(usd), locale),
      ])}
    />
  );
}

function CurrencyTable({ locale }: { locale: "uz" | "ru" | "en" }) {
  const copy = {
    uz: {
      headers: ["Jihat", "Hamyon so‘mda (UZS)", "Hamyon rublda (RUB)"],
      rows: [
        ["Kimga tegishli", "Yaqinda ochilgan hisob", "Ilgari ochilgan, rus mintaqasi merosi"],
        ["Nima bilan to‘laysiz", "O‘zbek kartasi, so‘mda", "O‘sha karta, baribir so‘mda"],
        ["Rossiya kartasi kerakmi", "Yo‘q", "Yo‘q"],
        ["Konvertatsiya", "So‘m → dollar", "So‘m → dollar → rubl"],
        ["Nima qilish kerak", "Shu holicha to‘ldiravering", "Mintaqani o‘zgartirmang, shu holicha to‘ldiring"],
      ],
    },
    ru: {
      headers: ["Аспект", "Кошелёк в сумах (UZS)", "Кошелёк в рублях (RUB)"],
      rows: [
        ["У кого так", "Аккаунт создан недавно", "Создан раньше, наследие российского региона"],
        ["Чем платите", "Узбекская карта, в сумах", "Та же карта, всё равно в сумах"],
        ["Нужна ли карта РФ", "Нет", "Нет"],
        ["Конвертация", "Сум → доллар", "Сум → доллар → рубль"],
        ["Что делать", "Просто пополняйте", "Не меняйте регион, пополняйте как есть"],
      ],
    },
    en: {
      headers: ["Aspect", "Wallet in so‘m (UZS)", "Wallet in roubles (RUB)"],
      rows: [
        ["Who has this", "A recently created account", "An older account, a Russian-region legacy"],
        ["What you pay with", "An Uzbek card, in so‘m", "The same card, still in so‘m"],
        ["Need a Russian card", "No", "No"],
        ["Conversion", "So‘m → dollar", "So‘m → dollar → rouble"],
        ["What to do", "Just top up", "Do not change region; top up as is"],
      ],
    },
  }[locale];
  return (
    <CompareTable
      headers={copy.headers}
      rows={copy.rows.map(([a, b, c]) => [<strong key="a">{a}</strong>, b, c])}
    />
  );
}

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Avval bitta narsani aniqlang: Steam hamyoningiz <b>qaysi valyutada</b> — so‘mda (UZS) yoki hali ham
      rublda (RUB). To‘lovni esa ikkala holatda ham <b>o‘zbek kartasi bilan so‘mda</b> qilasiz; rus kartasi
      kerak emas. Kurs: <b>1 dollar = {rate("uz")} so‘m</b>, bitta buyurtmada{" "}
      <b>${STEAM_MIN_USD} dan ${STEAM_MAX_USD} gacha</b>.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nega", label: "Nega valyuta har xil bo‘ladi" },
          { href: "#farq", label: "So‘m va rubl — farqi" },
          { href: "#kurs", label: "Kurs va chegaralar" },
          { href: "#qadamlar", label: "Qanday to‘ldiriladi" },
          { href: "#mintaqa", label: "Mintaqani o‘zgartirmang" },
          { href: "#tekshirish", label: "Valyutani qanday bilish" },
        ]}
      />

      <h2 id="nega">Nega Steam hamyonida valyuta har xil bo‘ladi</h2>
      <p>
        Steam hamyon valyutasini yashash mamlakatingizga emas, <b>hisob ochilgan yoki birinchi marta
        to‘ldirilgan paytdagi holatga</b> qarab biriktiradi. Shundan uchta keng tarqalgan vaziyat kelib chiqadi:
      </p>
      <KeyFacts label="Uchta holat">
        <li>
          <b>Hisob ancha oldin ochilgan</b> — O‘zbekiston alohida mintaqa bo‘lmagan paytda, valyuta rublda
          qolgan.
        </li>
        <li>
          <b>Birinchi to‘ldirish rus yo‘li bilan o‘tgan</b> — valyuta o‘shanda rublga mahkamlangan.
        </li>
        <li>
          <b>Hisob O‘zbekiston uchun ochilgan</b> — valyuta so‘m yoki dollar.
        </li>
      </KeyFacts>
      <p>
        Muhimi: Steam hamyon valyutasini <b>qo‘lda erkin o‘zgartirishga ruxsat bermaydi</b>. Shuning uchun
        amaliy savol «qaysi valyutani xohlayman» emas, balki «menda qaysi valyuta bor va uni qanday
        to‘ldiraman».
      </p>

      <h2 id="farq">So‘m yoki rubl — xaridor uchun farqi</h2>
      <CurrencyTable locale="uz" />
      <p>
        Ko‘rib turganingizdek, <b>to‘lov tomoni ikkala holatda ham bir xil</b>: siz o‘zbek kartangizdan so‘mda
        to‘laysiz. Farq faqat hisobga qaysi valyutada tushishida va konvertatsiya nechta bosqichdan o‘tishida.
      </p>

      <h2 id="kurs">Kurs va to‘ldirish chegaralari</h2>
      <p>
        Kurs qat’iy: <b>1 dollar = {rate("uz")} so‘m</b>. Bitta buyurtmada ${STEAM_MIN_USD} dan $
        {STEAM_MAX_USD} gacha to‘ldirish mumkin, ya’ni eng kichik summa —{" "}
        {formatUzs(steamPriceUzs(STEAM_MIN_USD), "uz")}.
      </p>
      <RateTable locale="uz" />
      <p>
        Jadval sayt sozlamalaridagi kursdan avtomatik hisoblanadi. Yakuniy summa to‘lovni tasdiqlashdan oldin
        botda ko‘rsatiladi — yashirin komissiya yo‘q.
      </p>

      <InlineCta text="Steam hamyonini so‘mda to‘ldiring." />

      <h2 id="qadamlar">Qanday to‘ldiriladi</h2>
      <Steps>
        <Step title="1. Botni oching">
          Telegramda{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          → GamPay ro‘yxatidan «Steam Balance».
        </Step>
        <Step title="2. Steam login’ini kiriting">
          Bu ochiq login nomi. <b>Parol hech qachon so‘ralmaydi</b> — so‘rasa, bu firibgarlik.
        </Step>
        <Step title="3. Summani ko‘rsating">
          ${STEAM_MIN_USD} dan ${STEAM_MAX_USD} gacha; so‘mdagi qiymati darhol ko‘rinadi.
        </Step>
        <Step title="4. Hamyon valyutasini ayting">
          Rublda bo‘lsa, buni botda yoki qo‘llab-quvvatlashda aniqlashtiring — hisob avtomatik moslashadi.
        </Step>
        <Step title="5. So‘mda to‘lang">UzCard, HUMO, Click, Payme yoki Uzum.</Step>
        <Step title="6. Balansni tekshiring">Odatda bir necha daqiqada hisobga tushadi.</Step>
      </Steps>

      <Notice label="Ogohlantirish">
        <p>
          Hamyon valyutasi yoki mintaqani <b>VPN va sozlamalar orqali o‘zgartirishga urinmang</b>. Bu Steam
          qoidalariga zid va hisobni cheklash yoki bloklashga olib kelishi mumkin. To‘g‘ri yo‘l — mavjud
          valyutani shu holicha to‘ldirish.
        </p>
      </Notice>

      <h2 id="mintaqa">Nega valyutani o‘zingiz o‘zgartirmaganingiz ma’qul</h2>
      <KeyFacts label="Sabablar">
        <li>Steam valyutani almashtirish uchun balansni to‘liq nolga tushirishni talab qiladi.</li>
        <li>Oxirgi tranzaksiyadan keyin bir necha oy kutish talab qilinishi mumkin.</li>
        <li>VPN orqali mintaqa almashtirish qoidalar buzilishi hisoblanadi.</li>
        <li>Mavjud valyutani to‘ldirish esa hech qanday qoidani buzmaydi.</li>
      </KeyFacts>

      <h2 id="tekshirish">Hamyon valyutangizni qanday bilish mumkin</h2>
      <InfoGrid>
        <InfoCard emoji="🖥️" title="Steam mijozida">
          Akkaunt → Akkauntni boshqarish → Steam hamyoni.
        </InfoCard>
        <InfoCard emoji="🌐" title="Saytda">
          store.steampowered.com dagi akkaunt bo‘limida ham o‘sha joyda ko‘rinadi.
        </InfoCard>
        <InfoCard emoji="🧾" title="Xarid tarixida">
          Oldingi to‘lovlar qaysi valyutada o‘tgani ko‘rsatilgan.
        </InfoCard>
        <InfoCard emoji="💬" title="Bilmasangiz">
          Buyurtmadan oldin qo‘llab-quvvatlashdan so‘rang — bu bir daqiqalik ish.
        </InfoCard>
      </InfoGrid>

      <p>
        Qarang: <Link href="/blog/steam-1-dollardan-toldirish">1 dollardan to‘ldirish</Link>,{" "}
        <Link href="/blog/steam-balansi-tushmadi">balans tushmasa nima qilish</Link>,{" "}
        <Link href="/blog/steam-login-nima">Steam login nima</Link>. Boshqa o‘yinlar —{" "}
        <Link href="/gampay">GamPay sahifasida</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://store.steampowered.com/", label: "store.steampowered.com", note: "Steam do‘koni va hamyon bo‘limi" },
          { href: "https://help.steampowered.com/", label: "help.steampowered.com", note: "Steam rasmiy yordami" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Сначала выясните одно: в <b>какой валюте</b> ваш кошелёк Steam — в сумах (UZS) или всё ещё в рублях (RUB).
      Платить в обоих случаях вы будете <b>узбекской картой в сумах</b>; российская карта не нужна. Курс:{" "}
      <b>1 доллар = {rate("ru")} сум</b>, за один заказ — <b>от ${STEAM_MIN_USD} до ${STEAM_MAX_USD}</b>.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nega", label: "Почему валюта разная" },
          { href: "#farq", label: "Сумы или рубли — разница" },
          { href: "#kurs", label: "Курс и лимиты" },
          { href: "#qadamlar", label: "Как пополнить" },
          { href: "#mintaqa", label: "Не меняйте регион" },
          { href: "#tekshirish", label: "Как узнать валюту" },
        ]}
      />

      <h2 id="nega">Почему у кошелька Steam бывает разная валюта</h2>
      <p>
        Steam привязывает валюту кошелька не к стране проживания, а к тому,{" "}
        <b>что было при создании аккаунта или при первом пополнении</b>. Отсюда три частые ситуации:
      </p>
      <KeyFacts label="Три случая">
        <li>
          <b>Аккаунт создан давно</b> — когда у Узбекистана ещё не было отдельного региона, и валюта осталась
          рублёвой.
        </li>
        <li>
          <b>Первое пополнение прошло «российским» путём</b> — валюта закрепилась в рублях.
        </li>
        <li>
          <b>Аккаунт создавался под Узбекистан</b> — валюта сум или доллар.
        </li>
      </KeyFacts>
      <p>
        Важно: Steam <b>не даёт свободно менять валюту кошелька вручную</b>. Поэтому практический вопрос не «в
        какой валюте я хочу», а «какая у меня уже есть и как её пополнить».
      </p>

      <h2 id="farq">Сумы или рубли — разница для покупателя</h2>
      <CurrencyTable locale="ru" />
      <p>
        Как видно, <b>сторона оплаты в обоих случаях одна и та же</b>: вы платите узбекской картой в сумах.
        Отличается только валюта зачисления и число шагов конвертации.
      </p>

      <h2 id="kurs">Курс и лимиты пополнения</h2>
      <p>
        Курс фиксированный: <b>1 доллар = {rate("ru")} сум</b>. За один заказ можно пополнить от $
        {STEAM_MIN_USD} до ${STEAM_MAX_USD}, то есть минимальная сумма —{" "}
        {formatUzs(steamPriceUzs(STEAM_MIN_USD), "ru")}.
      </p>
      <RateTable locale="ru" />
      <p>
        Таблица считается автоматически из курса в настройках сайта. Итоговая сумма показывается в боте до
        подтверждения оплаты — без скрытых комиссий.
      </p>

      <InlineCta text="Пополните кошелёк Steam в сумах." />

      <h2 id="qadamlar">Как пополнить</h2>
      <Steps>
        <Step title="1. Откройте бота">
          В Telegram{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          → «Steam Balance» в списке GamPay.
        </Step>
        <Step title="2. Введите логин Steam">
          Это открытое имя аккаунта. <b>Пароль не запрашивается никогда</b> — если просят, это мошенничество.
        </Step>
        <Step title="3. Укажите сумму">
          От ${STEAM_MIN_USD} до ${STEAM_MAX_USD}; эквивалент в сумах виден сразу.
        </Step>
        <Step title="4. Скажите, какая валюта кошелька">
          Если рубли — уточните это в боте или поддержке, пересчёт произойдёт автоматически.
        </Step>
        <Step title="5. Оплатите в сумах">UzCard, Humo, Click, Payme или Uzum.</Step>
        <Step title="6. Проверьте баланс">Обычно зачисление занимает несколько минут.</Step>
      </Steps>

      <Notice label="Предупреждение">
        <p>
          Не пытайтесь менять валюту кошелька или регион <b>через VPN и настройки страны</b>. Это прямое
          нарушение правил Steam и может привести к ограничению или блокировке аккаунта. Правильный путь —
          пополнять ту валюту, которая уже есть.
        </p>
      </Notice>

      <h2 id="mintaqa">Почему лучше не менять валюту самостоятельно</h2>
      <KeyFacts label="Причины">
        <li>Steam требует полного обнуления баланса для смены валюты.</li>
        <li>Часто нужна пауза в несколько месяцев после последней транзакции.</li>
        <li>Смена региона через VPN считается нарушением правил.</li>
        <li>А пополнение имеющейся валюты никаких правил не нарушает.</li>
      </KeyFacts>

      <h2 id="tekshirish">Как узнать валюту своего кошелька</h2>
      <InfoGrid>
        <InfoCard emoji="🖥️" title="В клиенте Steam">
          Аккаунт → Управление аккаунтом → Кошелёк Steam.
        </InfoCard>
        <InfoCard emoji="🌐" title="На сайте">
          В том же разделе на store.steampowered.com.
        </InfoCard>
        <InfoCard emoji="🧾" title="В истории покупок">
          Видно, в какой валюте проходили прошлые платежи.
        </InfoCard>
        <InfoCard emoji="💬" title="Если не уверены">
          Спросите в поддержке до заказа — это минутное дело.
        </InfoCard>
      </InfoGrid>

      <p>
        Смотрите: <Link href="/blog/steam-1-dollardan-toldirish">пополнение от 1 доллара</Link>,{" "}
        <Link href="/blog/steam-balansi-tushmadi">что делать, если баланс не пришёл</Link>,{" "}
        <Link href="/blog/steam-login-nima">что такое логин Steam</Link>. Другие игры — на{" "}
        <Link href="/gampay">странице GamPay</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://store.steampowered.com/", label: "store.steampowered.com", note: "магазин Steam и раздел кошелька" },
          { href: "https://help.steampowered.com/", label: "help.steampowered.com", note: "официальная справка Steam" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      Settle one thing first: <b>which currency</b> your Steam wallet is in — so‘m (UZS) or still roubles (RUB).
      Either way you pay <b>with an Uzbek card, in so‘m</b>; no Russian card is needed. The rate is{" "}
      <b>$1 = {rate("en")} UZS</b>, and one order covers <b>${STEAM_MIN_USD} to ${STEAM_MAX_USD}</b>.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#nega", label: "Why the currency differs" },
          { href: "#farq", label: "So‘m or roubles — the difference" },
          { href: "#kurs", label: "Rate and limits" },
          { href: "#qadamlar", label: "How to top up" },
          { href: "#mintaqa", label: "Do not change region" },
          { href: "#tekshirish", label: "Finding your currency" },
        ]}
      />

      <h2 id="nega">Why a Steam wallet can be in a different currency</h2>
      <p>
        Steam ties the wallet currency not to where you live but to{" "}
        <b>what applied when the account was created or first topped up</b>. That produces three common
        situations:
      </p>
      <KeyFacts label="Three cases">
        <li>
          <b>The account is old</b> — created before Uzbekistan had its own region, so the currency stayed in
          roubles.
        </li>
        <li>
          <b>The first top-up went through a Russian route</b> — the currency locked to roubles then.
        </li>
        <li>
          <b>The account was created for Uzbekistan</b> — the currency is so‘m or dollars.
        </li>
      </KeyFacts>
      <p>
        Note this: Steam <b>does not let you freely change the wallet currency by hand</b>. So the practical
        question is not “which currency do I want” but “which one do I already have, and how do I top it up”.
      </p>

      <h2 id="farq">So‘m or roubles — what it means for you</h2>
      <CurrencyTable locale="en" />
      <p>
        As you can see, <b>the payment side is identical either way</b>: you pay with an Uzbek card in so‘m.
        Only the credited currency and the number of conversion steps differ.
      </p>

      <h2 id="kurs">The rate and top-up limits</h2>
      <p>
        The rate is fixed: <b>$1 = {rate("en")} UZS</b>. A single order covers ${STEAM_MIN_USD} to $
        {STEAM_MAX_USD}, so the smallest amount is {formatUzs(steamPriceUzs(STEAM_MIN_USD), "en")}.
      </p>
      <RateTable locale="en" />
      <p>
        The table is calculated automatically from the rate in the site’s settings. The final amount is shown in
        the bot before you confirm — no hidden fees.
      </p>

      <InlineCta text="Top up your Steam wallet in so‘m." />

      <h2 id="qadamlar">How to top up</h2>
      <Steps>
        <Step title="1. Open the bot">
          In Telegram,{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          → “Steam Balance” on the GamPay list.
        </Step>
        <Step title="2. Enter your Steam login">
          That is the public account name. <b>A password is never requested</b> — if someone asks, it is a scam.
        </Step>
        <Step title="3. Set the amount">
          From ${STEAM_MIN_USD} to ${STEAM_MAX_USD}; the so‘m equivalent appears immediately.
        </Step>
        <Step title="4. Say which wallet currency you have">
          If it is roubles, confirm that in the bot or with support — the conversion is handled for you.
        </Step>
        <Step title="5. Pay in so‘m">UzCard, HUMO, Click, Payme or Uzum.</Step>
        <Step title="6. Check the balance">It usually lands within a few minutes.</Step>
      </Steps>

      <Notice label="A warning">
        <p>
          Do not try to change the wallet currency or region <b>through a VPN or country settings</b>. That
          breaks Steam’s rules directly and can get the account limited or banned. The right route is to top up
          the currency you already have.
        </p>
      </Notice>

      <h2 id="mintaqa">Why changing the currency yourself is a bad idea</h2>
      <KeyFacts label="The reasons">
        <li>Steam requires the balance to be fully spent down before a currency change.</li>
        <li>A wait of several months after the last transaction is often required too.</li>
        <li>Switching region through a VPN counts as breaking the rules.</li>
        <li>Topping up the existing currency breaks no rules at all.</li>
      </KeyFacts>

      <h2 id="tekshirish">How to find your wallet currency</h2>
      <InfoGrid>
        <InfoCard emoji="🖥️" title="In the Steam client">
          Account → Account details → Steam Wallet.
        </InfoCard>
        <InfoCard emoji="🌐" title="On the website">
          The same section on store.steampowered.com.
        </InfoCard>
        <InfoCard emoji="🧾" title="In purchase history">
          Past payments show which currency they went through.
        </InfoCard>
        <InfoCard emoji="💬" title="If you are unsure">
          Ask support before ordering — it takes a minute.
        </InfoCard>
      </InfoGrid>

      <p>
        See also: <Link href="/blog/steam-1-dollardan-toldirish">topping up from one dollar</Link>,{" "}
        <Link href="/blog/steam-balansi-tushmadi">what to do if the balance does not arrive</Link>,{" "}
        <Link href="/blog/steam-login-nima">what a Steam login is</Link>. Other games live on the{" "}
        <Link href="/gampay">GamPay page</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://store.steampowered.com/", label: "store.steampowered.com", note: "the Steam store and wallet section" },
          { href: "https://help.steampowered.com/", label: "help.steampowered.com", note: "official Steam support" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Hamyonim rublda bo‘lsa, so‘mda to‘ldirsa bo‘ladimi?",
    answer:
      "Ha. Siz o‘zbek kartangizdan so‘mda to‘laysiz, hisobga esa hamyoningizdagi valyutada tushadi — pereschot avtomatik.",
  },
  {
    question: "Rublda to‘ldirish uchun rus kartasi kerakmi?",
    answer: "Yo‘q. Hamyon valyutasi rubl bo‘lsa ham, to‘lov oddiy o‘zbek kartasidan o‘tadi.",
  },
  {
    question: "Hamyonim qaysi valyutada ekanini qanday bilaman?",
    answer:
      "Steam mijozida yoki store.steampowered.com da «Akkauntni boshqarish → Steam hamyoni» bo‘limida valyuta ko‘rsatilgan.",
  },
  {
    question: "Valyutani rubldan so‘mga o‘zgartirsa bo‘ladimi?",
    answer:
      "Texnik jihatdan Steam qo‘llab-quvvatlashi orqali, balansni nolga tushirib — lekin kafolat yo‘q. Mavjud valyutani to‘ldirish osonroq.",
  },
  {
    question: "Hamyon rublda bo‘lsa, hisobim bloklanmaydimi?",
    answer:
      "Balansni to‘ldirishning o‘zi mintaqani o‘zgartirmaydi va qoidani buzmaydi. Xavf faqat VPN orqali mamlakatni sun’iy almashtirishda paydo bo‘ladi.",
  },
  { question: "Eng kam va eng ko‘p summa qancha?", answer: `Bitta buyurtmada $${STEAM_MIN_USD} dan $${STEAM_MAX_USD} gacha.` },
  { question: "Kurs qanday?", answer: `Qat’iy kurs: 1 dollar = ${rate("uz")} so‘m.` },
  { question: "Zachislenie qancha vaqt oladi?", answer: "Odatda muvaffaqiyatli to‘lovdan keyin bir necha daqiqa." },
  { question: "Parol so‘raladimi?", answer: "Yo‘q, hech qachon. Faqat Steam login nomi. So‘rashsa — firibgarlik." },
  {
    question: "Boshqa odamning hisobini to‘ldirsa bo‘ladimi?",
    answer: "Ha, uning login nomini to‘g‘ri ko‘rsatsangiz kifoya.",
  },
  {
    question: "Balans tushmasa nima qilaman?",
    answer: "Bir necha daqiqa kuting, login to‘g‘riligini tekshiring, keyin buyurtma ID bilan @StarsPaymeeSupport ga yozing.",
  },
  { question: "Balans yonib ketadimi?", answer: "Yo‘q, Steam hamyonidagi mablag‘ning amal qilish muddati yo‘q." },
];

const ruFaq = [
  {
    question: "Можно ли пополнить в сумах, если кошелёк в рублях?",
    answer:
      "Да. Вы платите в сумах с узбекской карты, а зачисление идёт в валюте вашего кошелька — пересчёт автоматический.",
  },
  {
    question: "Нужна ли российская карта для пополнения в рублях?",
    answer: "Нет. Даже при рублёвом кошельке оплата проходит с обычной узбекской карты.",
  },
  {
    question: "Как узнать, в какой валюте мой кошелёк?",
    answer:
      "В клиенте Steam или на store.steampowered.com в разделе «Управление аккаунтом → Кошелёк Steam» валюта указана прямо там.",
  },
  {
    question: "Можно ли сменить валюту с рублей на сумы?",
    answer:
      "Технически — через поддержку Steam, с обнулением баланса, и без гарантии одобрения. Проще пополнять текущую валюту.",
  },
  {
    question: "Не забанят ли аккаунт, если кошелёк в рублях?",
    answer:
      "Само пополнение не меняет регион и не нарушает правил. Риск появляется только при искусственной смене страны через VPN.",
  },
  { question: "Какие минимальная и максимальная суммы?", answer: `За один заказ от $${STEAM_MIN_USD} до $${STEAM_MAX_USD}.` },
  { question: "Какой курс?", answer: `Фиксированный: 1 доллар = ${rate("ru")} сум.` },
  { question: "Сколько занимает зачисление?", answer: "Обычно несколько минут после успешной оплаты." },
  { question: "Просят ли пароль?", answer: "Нет, никогда. Только логин Steam. Если просят пароль — это мошенничество." },
  { question: "Можно ли пополнить чужой аккаунт?", answer: "Да, если корректно указать его логин." },
  {
    question: "Что делать, если баланс не зачислился?",
    answer: "Подождите несколько минут, проверьте логин, затем напишите в @StarsPaymeeSupport с ID заказа.",
  },
  { question: "Сгорает ли баланс?", answer: "Нет, средства на кошельке Steam не имеют срока действия." },
];

const enFaq = [
  {
    question: "Can I top up in so‘m if my wallet is in roubles?",
    answer:
      "Yes. You pay in so‘m with an Uzbek card, and the credit lands in whatever currency your wallet uses — the conversion is automatic.",
  },
  {
    question: "Do I need a Russian card to top up in roubles?",
    answer: "No. Even with a rouble wallet the payment goes through an ordinary Uzbek card.",
  },
  {
    question: "How do I find out my wallet currency?",
    answer:
      "In the Steam client or on store.steampowered.com, under Account details → Steam Wallet, the currency is shown there.",
  },
  {
    question: "Can I switch the currency from roubles to so‘m?",
    answer:
      "Technically through Steam support, with the balance spent down, and with no guarantee of approval. Topping up the current currency is easier.",
  },
  {
    question: "Could my account be banned if the wallet is in roubles?",
    answer:
      "Topping up does not change the region and breaks no rules. Risk only appears if you switch country artificially through a VPN.",
  },
  { question: "What are the minimum and maximum amounts?", answer: `From $${STEAM_MIN_USD} to $${STEAM_MAX_USD} per order.` },
  { question: "What is the rate?", answer: `A fixed rate: $1 = ${rate("en")} UZS.` },
  { question: "How long does crediting take?", answer: "Usually a few minutes after a successful payment." },
  { question: "Is a password requested?", answer: "No, never. Only the Steam login. If someone asks for a password, it is a scam." },
  { question: "Can I top up someone else's account?", answer: "Yes, as long as their login is entered correctly." },
  {
    question: "What if the balance does not arrive?",
    answer: "Wait a few minutes, check the login, then message @StarsPaymeeSupport with the order ID.",
  },
  { question: "Does the balance expire?", answer: "No, funds in a Steam wallet have no expiry date." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Steam",
  type: "info",
  datePublished: "2026-09-16",
  dateModified: "2026-09-16",
  keywords: [
    "steam hamyon valyutasi",
    "steam rublda toldirish",
    "steam somda toldirish",
    "steam wallet uzs rub",
    "пополнение steam сумы или рубли",
    "steam кошелёк валюта узбекистан",
  ],
  howToSteps: [
    { name: "Botni oching", text: "@StarsPaymee_bot → GamPay → Steam Balance." },
    { name: "Steam login’ini kiriting", text: "Ochiq login nomi; parol so‘ralmaydi." },
    { name: "Summani ko‘rsating", text: `$${STEAM_MIN_USD} dan $${STEAM_MAX_USD} gacha.` },
    { name: "Hamyon valyutasini ayting", text: "Rublda bo‘lsa, botda yoki supportda aniqlashtiring." },
    { name: "So‘mda to‘lang", text: "UzCard, HUMO, Click, Payme yoki Uzum." },
    { name: "Balansni tekshiring", text: "Odatda bir necha daqiqada tushadi." },
  ],
  locales: {
    uz: {
      title: "Steam hamyoni so‘mdami yoki rublda? Valyutani aniqlab, to‘g‘ri to‘ldirish",
      excerpt:
        "Nega Steam hamyonida valyuta har xil bo‘ladi, so‘m va rubl orasidagi farq, qat’iy kurs va chegaralar hamda mintaqani o‘zgartirmaslik kerakligi.",
      metaTitle: "Steam hamyoni so‘mda yoki rublda — qanday to‘ldirish",
      metaDescription:
        "Steam hamyoni so‘mda yoki rublda bo‘lishi mumkin. Valyutani qanday bilish, ikkalasini ham o‘zbek kartasi bilan to‘ldirish va mintaqa xavfi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Steam balansini to‘ldiring",
      ctaBody: "@StarsPaymee_bot — so‘mda to‘lov, hamyon valyutasidan qat’i nazar.",
      faq: uzFaq,
    },
    ru: {
      title: "Пополнение Steam в Узбекистане: сумы или рубли — что выбрать и как оплатить",
      excerpt:
        "Почему у кошелька Steam разная валюта, чем отличаются сумы и рубли, фиксированный курс и лимиты, и почему нельзя менять регион.",
      metaTitle: "Пополнение Steam — сумы или рубли, как выбрать",
      metaDescription:
        "Кошелёк Steam может быть в сумах или рублях. Как узнать валюту, пополнить любую из них узбекской картой и не рисковать регионом аккаунта.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Пополните баланс Steam",
      ctaBody: "@StarsPaymee_bot — оплата в сумах, независимо от валюты кошелька.",
      faq: ruFaq,
    },
    en: {
      title: "Is your Steam wallet in so‘m or roubles? Find out and top up correctly",
      excerpt:
        "Why Steam wallets end up in different currencies, how so‘m and roubles differ, the fixed rate and limits, and why you should not change region.",
      metaTitle: "Steam wallet in so‘m or roubles — how to top up",
      metaDescription:
        "A Steam wallet can be in so‘m or roubles. How to check the currency, top up either one with an Uzbek card, and avoid risking the account's region.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Top up your Steam balance",
      ctaBody: "@StarsPaymee_bot — paid in so‘m, whatever your wallet currency.",
      faq: enFaq,
    },
  },
};
