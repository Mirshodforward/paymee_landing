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
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "kolleksion-gift-bot-orqali-olinmaydi";

/** Nima qoldi, nima yo'q — aniq chegara. */
function WhatChanged({ locale }: { locale: "uz" | "ru" | "en" }) {
  const copy = {
    uz: {
      headers: ["Nima", "Bot orqali", "Telegram ichida o‘zingiz"],
      rows: [
        ["Oddiy sovg‘alar", "Ha, ishlaydi", "Ha"],
        ["Yulduzlar (Stars)", "Ha, ishlaydi", "Ha"],
        ["Telegram Premium", "Ha, ishlaydi", "Ha"],
        ["Sotuvdan tugagan kolleksion sovg‘alar", "Hozir yo‘q", "Ha, bozorda mavjud bo‘lsa"],
        ["Oddiy sovg‘ani collectible’ga ko‘tarish", "Yo‘q", "Ha, yulduz evaziga"],
      ],
    },
    ru: {
      headers: ["Что именно", "Через бота", "Внутри Telegram самому"],
      rows: [
        ["Обычные подарки", "Да, работает", "Да"],
        ["Звёзды (Stars)", "Да, работает", "Да"],
        ["Telegram Premium", "Да, работает", "Да"],
        ["Распроданные коллекционные подарки", "Сейчас нет", "Да, если есть на рынке"],
        ["Апгрейд обычного подарка до collectible", "Нет", "Да, за звёзды"],
      ],
    },
    en: {
      headers: ["What exactly", "Through the bot", "Inside Telegram yourself"],
      rows: [
        ["Regular gifts", "Yes, works", "Yes"],
        ["Stars", "Yes, works", "Yes"],
        ["Telegram Premium", "Yes, works", "Yes"],
        ["Sold-out collectible gifts", "Not at the moment", "Yes, if listed on the market"],
        ["Upgrading a regular gift to collectible", "No", "Yes, for Stars"],
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
      Hozirda <b>@StarsPaymee_bot</b> orqali faqat <b>oddiy sovg‘alar</b>, yulduzlar va Premium sotib olish
      mumkin. Sotuvdan tugagan <b>kolleksion (NFT) sovg‘alar</b> bot orqali yetkazilmaydi. Lekin yo‘l butunlay
      yopilgani yo‘q: oddiy sovg‘ani Telegram ichida <b>o‘zingiz collectible darajasiga ko‘tarishingiz</b> mumkin.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Notice label="Xizmatdagi o‘zgarish">
        <p>
          Sotuvdan tugagan kolleksion sovg‘alarni bot orqali yetkazish <b>to‘xtatildi</b>. Botning qolgan barcha
          bo‘limlari — oddiy sovg‘alar, yulduzlar, Premium, o‘yin to‘ldirish va Steam — avvalgidek ishlaydi.
        </p>
      </Notice>

      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "Aniq nima o‘zgardi" },
          { href: "#nega", label: "Nega shunday bo‘ldi" },
          { href: "#qoldi", label: "Nima ishlashda qoldi" },
          { href: "#yol", label: "Kolleksion sovg‘a olishning yo‘li" },
          { href: "#ehtiyot", label: "Nimaga ehtiyot bo‘lish kerak" },
        ]}
      />

      <h2 id="nima">Aniq nima o‘zgardi</h2>
      <p>
        Ilgari xizmat orqali <b>sotuvdan tugagan</b> kolleksion sovg‘alarni ham buyurtma qilish mumkin edi — ya’ni
        Telegramning o‘zida allaqachon tarqab bo‘lgan, faqat qo‘ldan-qo‘lga o‘tadigan nusxalarni. Hozir bu
        imkoniyat mavjud emas.
      </p>
      <WhatChanged locale="uz" />
      <p>
        Ya’ni chegara <b>sovg‘a turida</b>: doimiy katalogdagi oddiy sovg‘alar ishlayveradi, kolleksion va
        tugagan nusxalar esa yo‘q.
      </p>

      <h2 id="nega">Nega shunday bo‘ldi</h2>
      <p>
        Bu yerda aniq bo‘lish kerak, chunki internetda turli gaplar yuribdi. Telegramning ochiq hujjatlarida
        botlarga kolleksion sovg‘a sotib olishni <b>alohida taqiqlovchi</b> e’lon biz tekshirgan paytda
        topilmadi. Aslida rasm biroz boshqacha:
      </p>
      <KeyFacts label="Hujjatlarda nima yozilgan">
        <li>
          <b>Bot API’dagi sovg‘a yuborish</b> rasmiy katalogdagi sovg‘alar bilan ishlaydi — ya’ni oddiy
          sovg‘alar bilan.
        </li>
        <li>
          <b>Kolleksion sovg‘alarni sotib olish</b> hech qachon botlar uchun hujjatlashtirilgan imkoniyat
          bo‘lmagan. Ular Telegram ichida, foydalanuvchi tomonidan olinadi.
        </li>
        <li>
          <b>Upgrade, transfer va konvertatsiya</b> kabi amallar hujjatda biznes-akkaunt oqimi sifatida
          tasvirlangan, oddiy «botdan sotib olish» sifatida emas.
        </li>
      </KeyFacts>
      <p>
        Shuning uchun to‘g‘ri ta’rif shunday: kolleksion sovg‘alarni yetkazish hujjatlashtirilgan bot
        imkoniyatlaridan tashqarida ishlagan va endi u ishlamay qo‘ydi. Biz «Telegram falon sanada taqiqladi»
        deb aytmaymiz — buni tasdiqlovchi rasmiy e’lonni topmadik.
      </p>

      <h2 id="qoldi">Nima ishlashda qoldi</h2>
      <InfoGrid>
        <InfoCard emoji="🎁" title="Oddiy sovg‘alar">
          Doimiy katalogdagi sovg‘alar — avvalgidek, so‘mda va bir necha daqiqada.
        </InfoCard>
        <InfoCard emoji="⭐" title="Yulduzlar">
          Stars xaridi to‘liq ishlaydi — kolleksion sovg‘a uchun ham aynan shular kerak bo‘ladi.
        </InfoCard>
        <InfoCard emoji="💎" title="Premium">
          3, 6, 12 oylik obuna va sovg‘a qilish o‘zgarmadi.
        </InfoCard>
        <InfoCard emoji="🎮" title="O‘yin va Steam">
          GamPay va Steam hamyoni bo‘limlari ham o‘z holicha.
        </InfoCard>
      </InfoGrid>

      <h2 id="yol">Kolleksion sovg‘a olishning ishlaydigan yo‘li</h2>
      <p>
        Eng muhim qismi shu: kolleksion sovg‘a olish imkoniyati yo‘qolgani yo‘q — u{" "}
        <b>bir qadam uzunroq</b> bo‘ldi. Telegram hujjatiga ko‘ra, oddiy sovg‘ani collectible darajasiga
        ko‘tarish mumkin va bu yulduzlar evaziga bajariladi.
      </p>
      <Steps>
        <Step title="1. Botdan yulduz oling">
          Kerakli miqdordagi Stars’ni so‘mda sotib oling — bu bo‘lim ishlashda davom etmoqda.
        </Step>
        <Step title="2. Ko‘tarilishi mumkin bo‘lgan oddiy sovg‘ani tanlang">
          Hamma sovg‘a ham collectible’ga ko‘tarilmaydi — sovg‘a kartochkasida shu imkoniyat borligiga qarang.
        </Step>
        <Step title="3. Sovg‘ani oling yoki yuboring">
          Oddiy sovg‘a xaridi bot orqali avvalgidek ishlaydi.
        </Step>
        <Step title="4. Telegram ichida upgrade qiling">
          Sovg‘a kartochkasidan ko‘tarish tugmasini bosing — yulduz yechiladi va sovg‘a kolleksion nusxaga
          aylanadi.
        </Step>
      </Steps>
      <p>
        To‘liq tartib —{" "}
        <Link href="/blog/telegram-sovgani-collectible-upgrade">collectible’ga upgrade qilish qo‘llanmasida</Link>.
        Yulduz kerak bo‘lsa —{" "}
        <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">so‘mda Stars sotib olish</Link>.
      </p>

      <InlineCta text="Yulduz oling va sovg‘ani o‘zingiz collectible’ga ko‘taring." product={{ kind: "stars", amount: 100 }} />

      <h2 id="ehtiyot">Nimaga ehtiyot bo‘lish kerak</h2>
      <p>
        Bunday o‘zgarishlardan keyin har doim «bizda hali ham ishlaydi» deydiganlar paydo bo‘ladi. Shuning uchun
        oddiy qoidalarni eslatib o‘tamiz:
      </p>
      <KeyFacts label="Ogohlantiruvchi belgilar">
        <li>
          <b>Parol yoki kirish kodi so‘ralsa</b> — to‘xtang. Sovg‘a uchun Telegram hech qachon buni so‘ramaydi.
        </li>
        <li>
          <b>«Avval pul o‘tkazing, keyin beramiz»</b> — kolleksion sovg‘a savdosidagi eng keng tarqalgan aldov.
        </li>
        <li>
          <b>Bozordan keskin past narx</b> — noyob nusxa arzonlashib qolmaydi.
        </li>
        <li>
          <b>Notanish «vositachi» bot</b> — sotuvchi tanlagan kafil, kafil emas.
        </li>
      </KeyFacts>
      <p>
        Batafsil:{" "}
        <Link href="/blog/telegram-gift-havolasini-tekshirish">Gift havolasini xariddan oldin tekshirish</Link>.
      </p>

      <p>
        Qarang: <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">sovg‘a yuborish qo‘llanmasi</Link>,{" "}
        <Link href="/blog/telegram-nft-gift-nima">NFT Gift nima</Link>,{" "}
        <Link href="/blog/telegram-gift-price">sovg‘a narxi nimaga bog‘liq</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          {
            href: "https://telegram.org/blog/collectible-gifts-and-more",
            label: "telegram.org/blog",
            note: "kolleksion sovg‘alar e’loni — upgrade yulduz evaziga",
          },
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "sovg‘alar hujjati" },
          { href: "https://core.telegram.org/bots/api-changelog", label: "Bot API changelog", note: "botlar uchun sovg‘a imkoniyatlari tarixi" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Сейчас через <b>@StarsPaymee_bot</b> можно купить только <b>обычные подарки</b>, звёзды и Premium.
      Распроданные <b>коллекционные (NFT) подарки</b> бот больше не выдаёт. Но путь не закрыт полностью: обычный
      подарок можно <b>самому апгрейднуть до collectible</b> прямо в Telegram.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Notice label="Изменение в сервисе">
        <p>
          Выдача распроданных коллекционных подарков через бота <b>остановлена</b>. Все остальные разделы —
          обычные подарки, звёзды, Premium, пополнение игр и Steam — работают как прежде.
        </p>
      </Notice>

      <Toc
        label="Содержание"
        items={[
          { href: "#nima", label: "Что именно изменилось" },
          { href: "#nega", label: "Почему так вышло" },
          { href: "#qoldi", label: "Что продолжает работать" },
          { href: "#yol", label: "Рабочий путь к коллекционному" },
          { href: "#ehtiyot", label: "На что обратить внимание" },
        ]}
      />

      <h2 id="nima">Что именно изменилось</h2>
      <p>
        Раньше через сервис можно было заказать и <b>распроданные</b> коллекционные подарки — то есть экземпляры,
        которых в самом Telegram уже нет в продаже и которые переходят только из рук в руки. Сейчас такой
        возможности нет.
      </p>
      <WhatChanged locale="ru" />
      <p>
        То есть граница проходит по <b>типу подарка</b>: обычные из постоянного каталога работают, коллекционные
        и распроданные — нет.
      </p>

      <h2 id="nega">Почему так вышло</h2>
      <p>
        Здесь стоит быть точными, потому что в интернете ходят разные версии. Официального объявления Telegram,{" "}
        <b>отдельно запрещающего</b> ботам покупать коллекционные подарки, на момент проверки мы не нашли.
        Картина немного другая:
      </p>
      <KeyFacts label="Что написано в документации">
        <li>
          <b>Отправка подарков в Bot API</b> работает с подарками из официального каталога — то есть с обычными.
        </li>
        <li>
          <b>Покупка коллекционных подарков</b> никогда не была задокументированной возможностью для ботов. Их
          получает пользователь внутри Telegram.
        </li>
        <li>
          <b>Апгрейд, передача и конвертация</b> описаны в документации как сценарий бизнес-аккаунта, а не как
          «покупка через бота».
        </li>
      </KeyFacts>
      <p>
        Поэтому корректная формулировка такая: выдача коллекционных подарков работала за пределами
        задокументированных возможностей ботов и теперь перестала работать. Утверждать «Telegram запретил такого-то
        числа» мы не будем — подтверждающего официального объявления не нашли.
      </p>

      <h2 id="qoldi">Что продолжает работать</h2>
      <InfoGrid>
        <InfoCard emoji="🎁" title="Обычные подарки">
          Из постоянного каталога — как и раньше, в сумах и за считаные минуты.
        </InfoCard>
        <InfoCard emoji="⭐" title="Звёзды">
          Покупка Stars работает полностью — именно они и нужны для коллекционного.
        </InfoCard>
        <InfoCard emoji="💎" title="Premium">
          Подписка на 3, 6, 12 месяцев и подарок — без изменений.
        </InfoCard>
        <InfoCard emoji="🎮" title="Игры и Steam">
          Разделы GamPay и кошелька Steam тоже на месте.
        </InfoCard>
      </InfoGrid>

      <h2 id="yol">Рабочий путь к коллекционному подарку</h2>
      <p>
        Самое важное: возможность получить коллекционный подарок не исчезла — она стала{" "}
        <b>на один шаг длиннее</b>. По документации Telegram обычный подарок можно поднять до уровня collectible,
        и делается это за звёзды.
      </p>
      <Steps>
        <Step title="1. Купите звёзды в боте">
          Нужное количество Stars в сумах — этот раздел работает.
        </Step>
        <Step title="2. Выберите обычный подарок, который можно апгрейднуть">
          Апгрейд доступен не для всех — смотрите карточку подарка.
        </Step>
        <Step title="3. Получите или отправьте подарок">
          Покупка обычных подарков через бота работает как прежде.
        </Step>
        <Step title="4. Сделайте апгрейд внутри Telegram">
          В карточке подарка нажмите апгрейд — спишутся звёзды, и подарок станет коллекционным.
        </Step>
      </Steps>
      <p>
        Полный порядок —{" "}
        <Link href="/blog/telegram-sovgani-collectible-upgrade">в руководстве по апгрейду до collectible</Link>.
        Нужны звёзды —{" "}
        <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">покупка Stars в сумах</Link>.
      </p>

      <InlineCta text="Купите звёзды и апгрейдните подарок сами." product={{ kind: "stars", amount: 100 }} />

      <h2 id="ehtiyot">На что обратить внимание</h2>
      <p>
        После таких изменений всегда появляются те, кто говорит «а у нас всё ещё работает». Поэтому напомним
        простые правила:
      </p>
      <KeyFacts label="Тревожные признаки">
        <li>
          <b>Просят пароль или код входа</b> — остановитесь. Ради подарка Telegram этого не запрашивает.
        </li>
        <li>
          <b>«Сначала переведите, потом выдадим»</b> — самая частая схема обмана в торговле коллекционными.
        </li>
        <li>
          <b>Цена заметно ниже рынка</b> — редкий экземпляр не дешевеет просто так.
        </li>
        <li>
          <b>Незнакомый бот-«посредник»</b> — гарант, выбранный продавцом, не гарант.
        </li>
      </KeyFacts>
      <p>
        Подробнее:{" "}
        <Link href="/blog/telegram-gift-havolasini-tekshirish">проверка ссылки на Gift до покупки</Link>.
      </p>

      <p>
        Смотрите: <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">руководство по отправке подарков</Link>,{" "}
        <Link href="/blog/telegram-nft-gift-nima">что такое NFT Gift</Link>,{" "}
        <Link href="/blog/telegram-gift-price">от чего зависит цена подарка</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          {
            href: "https://telegram.org/blog/collectible-gifts-and-more",
            label: "telegram.org/blog",
            note: "анонс коллекционных подарков — апгрейд за звёзды",
          },
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "документация подарков" },
          { href: "https://core.telegram.org/bots/api-changelog", label: "Bot API changelog", note: "история возможностей ботов" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      Right now <b>@StarsPaymee_bot</b> can supply only <b>regular gifts</b>, Stars and Premium. Sold-out{" "}
      <b>collectible (NFT) gifts</b> are no longer delivered through the bot. The route is not closed entirely
      though: a regular gift can be <b>upgraded to collectible by you</b>, inside Telegram.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Notice label="A change in the service">
        <p>
          Delivering sold-out collectible gifts through the bot has <b>stopped</b>. Everything else — regular
          gifts, Stars, Premium, game top-ups and Steam — works exactly as before.
        </p>
      </Notice>

      <Toc
        label="Contents"
        items={[
          { href: "#nima", label: "What exactly changed" },
          { href: "#nega", label: "Why it happened" },
          { href: "#qoldi", label: "What still works" },
          { href: "#yol", label: "The route that does work" },
          { href: "#ehtiyot", label: "What to watch for" },
        ]}
      />

      <h2 id="nima">What exactly changed</h2>
      <p>
        Previously the service could also order <b>sold-out</b> collectible gifts — copies no longer on sale
        inside Telegram itself, which only pass from owner to owner. That option is not available now.
      </p>
      <WhatChanged locale="en" />
      <p>
        So the line runs along the <b>type of gift</b>: regular gifts from the permanent catalogue still work,
        collectible and sold-out ones do not.
      </p>

      <h2 id="nega">Why it happened</h2>
      <p>
        It is worth being precise here, because different versions circulate online. At the time of checking we
        found no official Telegram announcement <b>specifically banning</b> bots from buying collectible gifts.
        The picture is slightly different:
      </p>
      <KeyFacts label="What the documentation says">
        <li>
          <b>Gift sending in the Bot API</b> works with gifts from the official catalogue — that is, regular
          ones.
        </li>
        <li>
          <b>Buying collectible gifts</b> was never a documented bot capability. They are acquired by a user
          inside Telegram.
        </li>
        <li>
          <b>Upgrading, transferring and converting</b> are described in the docs as a business-account flow, not
          as “buying through a bot”.
        </li>
      </KeyFacts>
      <p>
        So the accurate wording is this: delivering collectible gifts operated outside the documented bot
        capabilities, and it has now stopped working. We will not claim “Telegram banned it on such-and-such a
        date” — we found no official announcement confirming that.
      </p>

      <h2 id="qoldi">What still works</h2>
      <InfoGrid>
        <InfoCard emoji="🎁" title="Regular gifts">
          From the permanent catalogue — as before, in so‘m and within minutes.
        </InfoCard>
        <InfoCard emoji="⭐" title="Stars">
          Buying Stars works fully — and those are exactly what a collectible needs.
        </InfoCard>
        <InfoCard emoji="💎" title="Premium">
          The 3, 6 and 12-month subscription and gifting are unchanged.
        </InfoCard>
        <InfoCard emoji="🎮" title="Games and Steam">
          The GamPay and Steam wallet sections are also untouched.
        </InfoCard>
      </InfoGrid>

      <h2 id="yol">The route to a collectible that does work</h2>
      <p>
        Here is the important part: getting a collectible gift has not become impossible — it became{" "}
        <b>one step longer</b>. Per Telegram’s documentation a regular gift can be raised to collectible status,
        and that is paid for with Stars.
      </p>
      <Steps>
        <Step title="1. Buy Stars in the bot">The amount you need, in so‘m — this section works.</Step>
        <Step title="2. Pick a regular gift that can be upgraded">
          Not every gift can — check the gift’s card for that option.
        </Step>
        <Step title="3. Receive or send the gift">Buying regular gifts through the bot works as before.</Step>
        <Step title="4. Upgrade it inside Telegram">
          Press upgrade on the gift’s card — Stars are spent and the gift becomes a collectible.
        </Step>
      </Steps>
      <p>
        The full procedure is in{" "}
        <Link href="/blog/telegram-sovgani-collectible-upgrade">the collectible upgrade guide</Link>. If you need
        Stars, see <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">buying Stars in so‘m</Link>.
      </p>

      <InlineCta text="Buy Stars and upgrade the gift yourself." product={{ kind: "stars", amount: 100 }} />

      <h2 id="ehtiyot">What to watch for</h2>
      <p>
        After changes like this, people claiming “ours still works” always appear. So a reminder of the simple
        rules:
      </p>
      <KeyFacts label="Warning signs">
        <li>
          <b>A password or login code is requested</b> — stop. Telegram never asks for that over a gift.
        </li>
        <li>
          <b>“Send the money first, we deliver after”</b> — the most common scam in collectible trading.
        </li>
        <li>
          <b>A price far below the market</b> — a rare copy does not simply get cheap.
        </li>
        <li>
          <b>An unfamiliar “middleman” bot</b> — a guarantor chosen by the seller is no guarantor.
        </li>
      </KeyFacts>
      <p>
        More on this:{" "}
        <Link href="/blog/telegram-gift-havolasini-tekshirish">checking a Gift link before buying</Link>.
      </p>

      <p>
        See also: <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">the gift-sending guide</Link>,{" "}
        <Link href="/blog/telegram-nft-gift-nima">what an NFT Gift is</Link>,{" "}
        <Link href="/blog/telegram-gift-price">what a gift’s price depends on</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          {
            href: "https://telegram.org/blog/collectible-gifts-and-more",
            label: "telegram.org/blog",
            note: "the collectible gifts announcement — upgrading costs Stars",
          },
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "gifts documentation" },
          { href: "https://core.telegram.org/bots/api-changelog", label: "Bot API changelog", note: "history of bot gift capabilities" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Bot orqali kolleksion (NFT) sovg‘a sotib olsa bo‘ladimi?",
    answer: "Hozirda yo‘q. Bot orqali oddiy sovg‘alar, yulduzlar va Premium ishlaydi.",
  },
  {
    question: "Telegram buni rasman taqiqladimi?",
    answer:
      "Biz tekshirgan paytda botlarga kolleksion sovg‘a sotib olishni alohida taqiqlovchi rasmiy e’lon topilmadi. Aniq bo‘lgani — bu imkoniyat hujjatlashtirilgan bot funksiyalaridan tashqarida ishlagan va endi ishlamayapti.",
  },
  {
    question: "Unda kolleksion sovg‘ani qanday olaman?",
    answer:
      "Botdan yulduz oling, ko‘tarilishi mumkin bo‘lgan oddiy sovg‘ani oling va Telegram ichida uni o‘zingiz collectible darajasiga ko‘taring.",
  },
  {
    question: "Har qanday oddiy sovg‘ani ko‘tarish mumkinmi?",
    answer: "Yo‘q. Ko‘tarish imkoniyati sovg‘aga bog‘liq — buni sovg‘a kartochkasida ko‘rasiz.",
  },
  {
    question: "Upgrade qancha turadi?",
    answer:
      "Telegram e’loniga ko‘ra ko‘tarish yulduzlar evaziga bajariladi; aniq miqdor sovg‘aga qarab farq qiladi va Telegram ichida ko‘rsatiladi.",
  },
  {
    question: "Botning boshqa bo‘limlari ishlayaptimi?",
    answer: "Ha. Oddiy sovg‘alar, Stars, Premium, o‘yin to‘ldirish va Steam hamyoni o‘zgarishsiz.",
  },
  {
    question: "Kimdir «bizda hali ham ishlaydi» desa-chi?",
    answer:
      "Ehtiyot bo‘ling. Parol yoki kirish kodi so‘ralsa, oldindan to‘lov talab qilinsa yoki narx bozordan keskin past bo‘lsa — bu firibgarlik belgisi.",
  },
  {
    question: "Bu imkoniyat qaytadimi?",
    answer:
      "Buni oldindan aytib bo‘lmaydi. Hozircha ishlaydigan yo‘l — yulduz olib, sovg‘ani o‘zingiz ko‘tarish.",
  },
];

const ruFaq = [
  {
    question: "Можно ли купить коллекционный (NFT) подарок через бота?",
    answer: "Сейчас нет. Через бота работают обычные подарки, звёзды и Premium.",
  },
  {
    question: "Telegram официально это запретил?",
    answer:
      "На момент проверки официального объявления, отдельно запрещающего ботам покупать коллекционные подарки, мы не нашли. Достоверно известно другое: эта возможность работала за пределами задокументированных функций ботов и теперь не работает.",
  },
  {
    question: "Как тогда получить коллекционный подарок?",
    answer:
      "Купите звёзды в боте, возьмите обычный подарок с возможностью апгрейда и сами поднимите его до collectible внутри Telegram.",
  },
  {
    question: "Любой обычный подарок можно апгрейднуть?",
    answer: "Нет. Возможность зависит от подарка — это видно в его карточке.",
  },
  {
    question: "Сколько стоит апгрейд?",
    answer:
      "По анонсу Telegram апгрейд выполняется за звёзды; точное количество зависит от подарка и показывается внутри Telegram.",
  },
  {
    question: "Остальные разделы бота работают?",
    answer: "Да. Обычные подарки, Stars, Premium, пополнение игр и кошелёк Steam — без изменений.",
  },
  {
    question: "А если кто-то говорит «у нас всё ещё работает»?",
    answer:
      "Будьте осторожны. Просят пароль или код входа, требуют предоплату, цена заметно ниже рынка — это признаки мошенничества.",
  },
  {
    question: "Вернётся ли эта возможность?",
    answer:
      "Заранее сказать нельзя. Рабочий путь сейчас — купить звёзды и апгрейднуть подарок самому.",
  },
];

const enFaq = [
  {
    question: "Can I buy a collectible (NFT) gift through the bot?",
    answer: "Not at the moment. Regular gifts, Stars and Premium work through the bot.",
  },
  {
    question: "Did Telegram officially ban this?",
    answer:
      "At the time of checking we found no official announcement specifically banning bots from buying collectible gifts. What is certain is that the capability operated outside documented bot functionality and has now stopped working.",
  },
  {
    question: "So how do I get a collectible gift?",
    answer:
      "Buy Stars in the bot, get a regular gift that supports upgrading, and raise it to collectible yourself inside Telegram.",
  },
  {
    question: "Can any regular gift be upgraded?",
    answer: "No. It depends on the gift — the gift's card shows whether the option exists.",
  },
  {
    question: "How much does the upgrade cost?",
    answer:
      "Per Telegram's announcement the upgrade is paid for in Stars; the exact amount depends on the gift and is shown inside Telegram.",
  },
  {
    question: "Do the bot's other sections still work?",
    answer: "Yes. Regular gifts, Stars, Premium, game top-ups and the Steam wallet are unchanged.",
  },
  {
    question: "What if someone says “ours still works”?",
    answer:
      "Be careful. A password or login code request, an upfront payment demand, or a price far below the market are all scam signals.",
  },
  {
    question: "Will the option come back?",
    answer: "That cannot be promised in advance. The working route today is to buy Stars and upgrade the gift yourself.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "info",
  datePublished: "2026-09-14",
  dateModified: "2026-09-14",
  keywords: [
    "kolleksion gift bot orqali olinmaydi",
    "nft gift bot orqali sotib olish",
    "telegram sotuvdan tugagan sovga",
    "oddiy sovgani collectible qilish",
    "коллекционные подарки telegram бот",
    "распроданные подарки telegram",
  ],
  locales: {
    uz: {
      title: "Kolleksion Telegram sovg‘alari endi bot orqali olinmaydi — nima qilish kerak?",
      excerpt:
        "Sotuvdan tugagan kolleksion sovg‘alar bot orqali yetkazilmaydi. Nima ishlashda qolgani, hujjatlarda nima yozilgani va kolleksion sovg‘a olishning ishlaydigan yo‘li.",
      metaTitle: "Kolleksion gift bot orqali olinmaydi — yechim bor",
      metaDescription:
        "Sotuvdan tugagan kolleksion sovg‘alar bot orqali yetkazilmaydi. Nima ishlaydi, nega shunday bo‘ldi va sovg‘ani o‘zingiz collectible’ga ko‘tarish yo‘li.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Botning ishlaydigan bo‘limlari",
      ctaBody: "@StarsPaymee_bot — oddiy sovg‘alar, Stars, Premium, o‘yin va Steam. Hammasi so‘mda.",
      faq: uzFaq,
    },
    ru: {
      title: "Коллекционные подарки Telegram больше не выдаются через бота — что делать?",
      excerpt:
        "Распроданные коллекционные подарки бот не выдаёт. Что продолжает работать, что написано в документации и рабочий путь к коллекционному подарку.",
      metaTitle: "Коллекционные подарки и бот — что изменилось",
      metaDescription:
        "Распроданные коллекционные подарки через бота недоступны. Что работает, почему так вышло и как самому поднять подарок до collectible.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Рабочие разделы бота",
      ctaBody: "@StarsPaymee_bot — обычные подарки, Stars, Premium, игры и Steam. Всё в сумах.",
      faq: ruFaq,
    },
    en: {
      title: "Collectible Telegram gifts are no longer delivered by the bot — what now?",
      excerpt:
        "Sold-out collectible gifts are no longer supplied through the bot. What still works, what the documentation actually says, and the route that does work.",
      metaTitle: "Collectible gifts and the bot — what changed",
      metaDescription:
        "Sold-out collectible gifts are unavailable through the bot. What still works, why it happened, and how to upgrade a gift to collectible yourself.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "The bot's working sections",
      ctaBody: "@StarsPaymee_bot — regular gifts, Stars, Premium, games and Steam. All in so‘m.",
      faq: enFaq,
    },
  },
};
