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
        [
          "Sotuvdan olib tashlangan limited sovg‘ani yangi holda olish",
          "Yo‘q — 14-sentabrdan botlarga berilmaydi",
          "Yo‘q — Telegram do‘konida ham sotilmaydi",
        ],
        ["Sotuvdagi kolleksion (NFT) nusxani sotib olish", "Ha — NFT Market, 300 000 so‘mgacha", "Ha, bozorda mavjud bo‘lsa"],
        ["NFT sovg‘ani muddatga olish (ijara)", "Ha — NFT ijarasi", "Yo‘q"],
        ["Sovg‘ani collectible’ga ko‘tarish (upgrade)", "Yo‘q", "Ha, yulduz evaziga — sovg‘ada shu imkoniyat bo‘lsa"],
      ],
    },
    ru: {
      headers: ["Что именно", "Через бота", "Внутри Telegram самому"],
      rows: [
        ["Обычные подарки", "Да, работает", "Да"],
        ["Звёзды (Stars)", "Да, работает", "Да"],
        ["Telegram Premium", "Да, работает", "Да"],
        [
          "Снятый с продажи limited-подарок как новый",
          "Нет — с 14 сентября ботам недоступен",
          "Нет — в магазине Telegram его тоже нет",
        ],
        ["Покупка выставленного коллекционного (NFT) экземпляра", "Да — NFT Market, до 300 000 сумов", "Да, если есть на рынке"],
        ["NFT-подарок на срок (аренда)", "Да — аренда NFT", "Нет"],
        ["Апгрейд подарка до collectible", "Нет", "Да, за звёзды — если у подарка есть такая опция"],
      ],
    },
    en: {
      headers: ["What exactly", "Through the bot", "Inside Telegram yourself"],
      rows: [
        ["Regular gifts", "Yes, works", "Yes"],
        ["Stars", "Yes, works", "Yes"],
        ["Telegram Premium", "Yes, works", "Yes"],
        [
          "A limited gift Telegram took off sale, bought new",
          "No — not offered to bots since 14 September",
          "No — not on sale in Telegram either",
        ],
        ["Buying a listed collectible (NFT) copy", "Yes — NFT Market, up to 300,000 so‘m", "Yes, if listed on the market"],
        ["An NFT gift for a set term (rental)", "Yes — NFT rental", "No"],
        ["Upgrading a gift to collectible", "No", "Yes, for Stars — if the gift offers it"],
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
      Bu yerda ikki xil sovg‘ani farqlash kerak. Telegram sotuvdan olib tashlagan <b>limited sovg‘alarni</b>{" "}
      2026-yil 14-sentabrdan botlar yangi holda yubora olmaydi — shuning uchun ular @StarsPaymee_bot’ning oddiy
      sovg‘alar katalogida yo‘q. <b>Kolleksion (NFT) sovg‘alar</b> esa botda bor: <b>NFT Market</b> bo‘limida
      sotuvdagi nusxani 300 000 so‘mgacha sotib olasiz (egalik sizga o‘tadi) yoki <b>NFT ijarasida</b> muddatga
      olasiz.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Notice label="Yangilandi — 2026-yil oktabr">
        <p>
          2026-yil 14-sentabrdan Telegram sotuvdan olib tashlagan limited sovg‘alar botlar orqali yuborilmaydi —
          ular oddiy sovg‘alar katalogidan olib tashlandi. 21-sentabrdan botda <b>NFT Market</b> ishlaydi:
          sotuvdagi kolleksion (NFT) sovg‘ani 300 000 so‘mgacha sotib olish mumkin. <b>NFT ijarasi</b>, oddiy
          sovg‘alar, Stars, Premium, o‘yin to‘ldirish va Steam ham ishlaydi.
        </p>
      </Notice>

      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "Aniq nima o‘zgardi" },
          { href: "#nega", label: "Nega shunday bo‘ldi" },
          { href: "#qoldi", label: "Botda hozir nima bor" },
          { href: "#yol", label: "Kolleksion sovg‘ani olishning uch yo‘li" },
          { href: "#ehtiyot", label: "Boshqa joydan olayotganda" },
        ]}
      />

      <h2 id="nima">Aniq nima o‘zgardi</h2>
      <p>
        Ilgari botning oddiy sovg‘alar katalogida 11 ta <b>limited sovg‘a</b> ham bor edi — Telegram sotuvdan
        olib tashlagan nusxalar. 2026-yil 14-sentabrdan Telegram ularni botlarga bermay qo‘ydi: botlar uchun
        sovg‘alar ro‘yxatida endi faqat oddiy sovg‘alar qoldi. Shuning uchun bu sovg‘alar katalogdan olib
        tashlandi.
      </p>
      <WhatChanged locale="uz" />
      <p>
        Ya’ni cheklov faqat <b>yangi limited nusxaga</b> tegishli. Tayyor kolleksion (NFT) nusxa — NFT Market’da,
        muddatga — NFT ijarasida.
      </p>

      <h2 id="nega">Nega shunday bo‘ldi</h2>
      <p>
        Bu yerda aniq bo‘lish kerak, chunki internetda turli gaplar yuribdi. Biz tekshirgan narsalar:
      </p>
      <KeyFacts label="Nimani aniq bilamiz">
        <li>
          <b>Bot API’dagi sovg‘a yuborish</b> faqat Telegram botlarga bergan ro‘yxatdagi sovg‘alar bilan
          ishlaydi; 2026-yil 14-sentabrdan bu ro‘yxatda limited sovg‘alar yo‘q — faqat oddiy sovg‘alar.
        </li>
        <li>
          <b>Rasmiy e’lon</b> — botlarga limited sovg‘alarni alohida taqiqlovchi e’lon biz tekshirgan paytda
          topilmadi; biz o‘zgarishning o‘zini ko‘rdik.
        </li>
        <li>
          <b>Kolleksion (NFT) sovg‘alar</b> bu yo‘ldan yurmaydi: NFT Market’dagi nusxa TON’dagi ochiq gift
          bozoridan sotib olinadi va Telegram akkauntingizga o‘tkaziladi; ijara ham shu bozor orqali ishlaydi.
          Shuning uchun bu cheklov ularga ta’sir qilmaydi.
        </li>
      </KeyFacts>
      <p>
        Demak to‘g‘ri ta’rif: bot yangi limited sovg‘ani yubora olmaydi, lekin tayyor kolleksion nusxani sotib
        olib bera oladi. Rasmiy e’lon topilmagani uchun «Telegram falon sanada taqiqladi» deb aytmaymiz.
      </p>

      <h2 id="qoldi">Botda hozir nima bor</h2>
      <InfoGrid>
        <InfoCard emoji="🖼️" title="NFT Market">
          Sotuvdagi kolleksion (NFT) nusxa — 300 000 so‘mgacha; egalik sizga o‘tadi.
        </InfoCard>
        <InfoCard emoji="⏳" title="NFT ijarasi">
          Kolleksion sovg‘ani tanlangan muddatga olib turish; muddat tugagach u qaytariladi.
        </InfoCard>
        <InfoCard emoji="🎁" title="Oddiy sovg‘alar">
          Doimiy katalogdagi sovg‘alar (15–100 ⭐) — avvalgidek, so‘mda va bir necha daqiqada.
        </InfoCard>
        <InfoCard emoji="⭐" title="Yulduzlar">
          Stars xaridi to‘liq ishlaydi — sovg‘ani upgrade qilish uchun ham aynan shular kerak bo‘ladi.
        </InfoCard>
        <InfoCard emoji="💎" title="Premium">
          3, 6, 12 oylik obuna va sovg‘a qilish o‘zgarmadi.
        </InfoCard>
        <InfoCard emoji="🎮" title="O‘yin va Steam">
          GamPay va Steam hamyoni bo‘limlari ham o‘z holicha.
        </InfoCard>
      </InfoGrid>

      <h2 id="yol">Kolleksion sovg‘ani olishning uch yo‘li</h2>
      <p>
        Kolleksion sovg‘a olish imkoniyati yo‘qolgani yo‘q. Qaysi yo‘l mos kelishi sovg‘a sizga qancha muddatga
        kerakligiga va qo‘lingizda qanday sovg‘a borligiga bog‘liq.
      </p>

      <h3>1. NFT Market — tayyor nusxani sotib olish</h3>
      <p>
        Botning <b>NFT Market</b> bo‘limida sotuvdagi kolleksion nusxani <b>300 000 so‘mgacha</b> sotib olasiz —
        egalik sizga o‘tadi. To‘lov faqat UzCard/HUMO kartaga o‘tkazma yoki balans orqali. Xarid zanjirda
        tasdiqlangach NFT StarsPaymee saqlovida turadi: bot @StarsPaymeeSupport’ga yozishni so‘raydi va admin
        sovg‘ani Telegram’dagi @username’ingizga o‘tkazadi — shuning uchun bu darhol emas. Xarid tartibi —{" "}
        <Link href="/blog/starspaymee-nft-market">StarsPaymee NFT Market</Link> maqolasida.
      </p>

      <InlineCta text="NFT Market’ni botda oching — kolleksion sovg‘a so‘mda." />

      <h3>2. NFT ijarasi — muddatga olish</h3>
      <p>
        Sovg‘a qisqa muddatga kerak bo‘lsa (bayram, sinov), uni to‘liq sotib olmasdan <b>NFT ijarasida</b>{" "}
        tanlangan kunlarga olasiz; muddat tugagach u qaytariladi. Batafsil —{" "}
        <Link href="/blog/telegram-nft-sovga-ijarasi">NFT sovg‘a ijarasi</Link>.
      </p>

      <h3>3. Upgrade — Telegram ichida, yulduz evaziga</h3>
      <p>
        Telegram’da ba’zi sovg‘alarni yulduz evaziga kolleksion nusxaga ko‘tarish mumkin — lekin faqat
        kartochkasida upgrade imkoniyati bor sovg‘ani. Tartibi:
      </p>
      <Steps>
        <Step title="1. Botdan yulduz oling">
          Kerakli miqdordagi Stars’ni so‘mda sotib oling — bu bo‘lim ishlashda davom etmoqda.
        </Step>
        <Step title="2. Ko‘tarilishi mumkin bo‘lgan sovg‘ani tanlang">
          Hamma sovg‘a ham collectible’ga ko‘tarilmaydi — sovg‘a kartochkasida shu imkoniyat borligiga qarang.
        </Step>
        <Step title="3. Sovg‘ani oling yoki yuboring">
          Botdagi oddiy sovg‘alar hozir — doimiy sovg‘alar (15–100 ⭐). Upgrade uchun olayotgan bo‘lsangiz, avval
          Telegram’da shu sovg‘ada bu imkoniyat borligini tekshiring.
        </Step>
        <Step title="4. Telegram ichida upgrade qiling">
          Sovg‘a kartochkasidan ko‘tarish tugmasini bosing — yulduz yechiladi va sovg‘a kolleksion nusxaga
          aylanadi.
        </Step>
      </Steps>
      <p>
        Yulduz kerak bo‘lsa —{" "}
        <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">so‘mda Stars sotib olish</Link>.
      </p>

      <h2 id="ehtiyot">Kolleksion sovg‘ani boshqa joydan olayotganda</h2>
      <p>NFT sovg‘a savdosida firibgarlar ko‘p. Oddiy qoidalar:</p>
      <KeyFacts label="Ogohlantiruvchi belgilar">
        <li>
          <b>Parol yoki kirish kodi so‘ralsa</b> — to‘xtang. Sovg‘a uchun Telegram hech qachon buni so‘ramaydi.
        </li>
        <li>
          <b>Shaxsiy yozishmada notanish odamga oldindan pul o‘tkazish</b> — eng keng tarqalgan aldov.
          StarsPaymee NFT Market’da to‘lov faqat botdagi buyurtma oynasi orqali: u yerda ko‘rsatilgan kartaga
          aniq summani o‘tkazasiz yoki balansdan to‘laysiz. Parol yoki kod so‘ralmaydi.
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
          {
            href: "https://core.telegram.org/bots/api#getavailablegifts",
            label: "Bot API — getAvailableGifts",
            note: "botlar yubora oladigan sovg‘alar ro‘yxati",
          },
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
      Здесь важно различать два вида подарков. <b>Limited-подарки</b>, снятые Telegram с продажи, с 14 сентября
      2026 года боты не могут отправлять как новые — поэтому их нет в каталоге обычных подарков @StarsPaymee_bot.
      А <b>коллекционные (NFT) подарки</b> в боте есть: в разделе <b>NFT Market</b> можно купить выставленный
      экземпляр до 300 000 сумов (он переходит в вашу собственность) или взять NFT <b>в аренду</b> на срок.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Notice label="Обновлено — октябрь 2026">
        <p>
          С 14 сентября 2026 года limited-подарки, снятые Telegram с продажи, через ботов не отправляются — они
          убраны из каталога обычных подарков. С 21 сентября в боте работает <b>NFT Market</b>: выставленный на
          продажу коллекционный (NFT) подарок можно купить за сумму до 300 000 сумов. <b>Аренда NFT</b>, обычные
          подарки, Stars, Premium, пополнение игр и Steam тоже работают.
        </p>
      </Notice>

      <Toc
        label="Содержание"
        items={[
          { href: "#nima", label: "Что именно изменилось" },
          { href: "#nega", label: "Почему так вышло" },
          { href: "#qoldi", label: "Что есть в боте сейчас" },
          { href: "#yol", label: "Три способа получить коллекционный" },
          { href: "#ehtiyot", label: "Если покупаете в другом месте" },
        ]}
      />

      <h2 id="nima">Что именно изменилось</h2>
      <p>
        Раньше в каталоге обычных подарков бота было и 11 <b>limited-подарков</b>, которые Telegram уже снял с
        продажи. С 14 сентября 2026 года Telegram перестал отдавать их ботам: в списке подарков для ботов остались
        только обычные. Поэтому эти подарки убраны из каталога.
      </p>
      <WhatChanged locale="ru" />
      <p>
        То есть ограничение касается только <b>нового limited-экземпляра</b>. Готовый коллекционный (NFT)
        экземпляр — в NFT Market, на срок — в аренде NFT.
      </p>

      <h2 id="nega">Почему так вышло</h2>
      <p>
        Здесь стоит быть точными, потому что в интернете ходят разные версии. Вот что мы проверили:
      </p>
      <KeyFacts label="Что известно точно">
        <li>
          <b>Отправка подарков в Bot API</b> работает только с подарками из списка, который Telegram отдаёт ботам;
          с 14 сентября 2026 года limited-подарков в нём нет — только обычные.
        </li>
        <li>
          <b>Официального объявления</b>, отдельно запрещающего ботам limited-подарки, на момент проверки мы не
          нашли — мы увидели само изменение.
        </li>
        <li>
          <b>Коллекционные (NFT) подарки</b> идут другим путём: экземпляр из NFT Market покупается на открытом
          рынке подарков в TON и переводится на ваш аккаунт Telegram; аренда работает через тот же рынок. Поэтому
          это ограничение их не касается.
        </li>
      </KeyFacts>
      <p>
        Корректная формулировка: бот не может отправить новый limited-подарок, но может купить для вас готовый
        коллекционный экземпляр. Раз официального объявления нет, утверждать «Telegram запретил такого-то числа»
        мы не будем.
      </p>

      <h2 id="qoldi">Что есть в боте сейчас</h2>
      <InfoGrid>
        <InfoCard emoji="🖼️" title="NFT Market">
          Выставленный коллекционный (NFT) экземпляр до 300 000 сумов; он становится вашим.
        </InfoCard>
        <InfoCard emoji="⏳" title="Аренда NFT">
          Коллекционный подарок на выбранный срок; по окончании он возвращается.
        </InfoCard>
        <InfoCard emoji="🎁" title="Обычные подарки">
          Из постоянного каталога (15–100 ⭐) — как и раньше, в сумах и за считаные минуты.
        </InfoCard>
        <InfoCard emoji="⭐" title="Звёзды">
          Покупка Stars работает полностью — именно они нужны и для апгрейда подарка.
        </InfoCard>
        <InfoCard emoji="💎" title="Premium">
          Подписка на 3, 6, 12 месяцев и подарок — без изменений.
        </InfoCard>
        <InfoCard emoji="🎮" title="Игры и Steam">
          Разделы GamPay и кошелька Steam тоже на месте.
        </InfoCard>
      </InfoGrid>

      <h2 id="yol">Три способа получить коллекционный подарок</h2>
      <p>
        Возможность получить коллекционный подарок никуда не делась. Какой путь подойдёт, зависит от того, на
        какой срок нужен подарок и какой подарок у вас уже есть.
      </p>

      <h3>1. NFT Market — купить готовый экземпляр</h3>
      <p>
        В разделе <b>NFT Market</b> бота вы покупаете выставленный коллекционный экземпляр{" "}
        <b>до 300 000 сумов</b> — он переходит в вашу собственность. Оплата только переводом на карту UzCard/HUMO
        или с баланса. После подтверждения покупки в блокчейне NFT хранится у StarsPaymee: бот попросит написать в
        @StarsPaymeeSupport, и администратор переведёт подарок на ваш @username в Telegram — поэтому это не
        мгновенно. Порядок покупки — в статье{" "}
        <Link href="/blog/starspaymee-nft-market">StarsPaymee NFT Market</Link>.
      </p>

      <InlineCta text="Откройте NFT Market в боте — коллекционный подарок в сумах." />

      <h3>2. Аренда NFT — на срок</h3>
      <p>
        Если подарок нужен ненадолго (праздник, проба), его можно не покупать целиком, а взять <b>в аренду</b> на
        выбранное число дней; по окончании срока он возвращается. Подробнее —{" "}
        <Link href="/blog/telegram-nft-sovga-ijarasi">аренда NFT-подарков</Link>.
      </p>

      <h3>3. Апгрейд — внутри Telegram, за звёзды</h3>
      <p>
        Некоторые подарки в Telegram можно за звёзды превратить в коллекционный экземпляр — но только те, у
        которых в карточке есть опция апгрейда. Порядок:
      </p>
      <Steps>
        <Step title="1. Купите звёзды в боте">
          Нужное количество Stars в сумах — этот раздел работает.
        </Step>
        <Step title="2. Выберите подарок, который можно апгрейднуть">
          Апгрейд доступен не для всех — смотрите карточку подарка.
        </Step>
        <Step title="3. Получите или отправьте подарок">
          Обычные подарки в боте сейчас — постоянные подарки (15–100 ⭐). Если берёте подарок ради апгрейда,
          сначала проверьте в Telegram, есть ли у него такая опция.
        </Step>
        <Step title="4. Сделайте апгрейд внутри Telegram">
          В карточке подарка нажмите апгрейд — спишутся звёзды, и подарок станет коллекционным.
        </Step>
      </Steps>
      <p>
        Нужны звёзды —{" "}
        <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">покупка Stars в сумах</Link>.
      </p>

      <h2 id="ehtiyot">Если покупаете коллекционный подарок в другом месте</h2>
      <p>В торговле NFT-подарками много мошенников. Простые правила:</p>
      <KeyFacts label="Тревожные признаки">
        <li>
          <b>Просят пароль или код входа</b> — остановитесь. Ради подарка Telegram этого не запрашивает.
        </li>
        <li>
          <b>Предоплата незнакомцу в личных сообщениях</b> — самая частая схема обмана. В NFT Market StarsPaymee
          оплата — только через окно заказа в боте: точную сумму переводите на указанную там карту или
          платите с баланса. Пароль или код не запрашиваются.
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
          {
            href: "https://core.telegram.org/bots/api#getavailablegifts",
            label: "Bot API — getAvailableGifts",
            note: "список подарков, которые может отправить бот",
          },
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
      Two kinds of gift need telling apart. Since 14 September 2026 bots cannot send the <b>limited gifts</b>{" "}
      Telegram took off sale, so they are gone from @StarsPaymee_bot’s regular gift catalogue.{" "}
      <b>Collectible (NFT) gifts</b> are still in the bot: in the <b>NFT Market</b> you buy a listed copy for up
      to 300,000 so‘m and it becomes yours, or you <b>rent</b> one for a set term.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Notice label="Updated — October 2026">
        <p>
          Since 14 September 2026 the limited gifts Telegram took off sale cannot be sent by bots — they were
          removed from the regular gift catalogue. Since 21 September the bot runs an <b>NFT Market</b>: a listed
          collectible (NFT) gift can be bought for up to 300,000 so‘m. <b>NFT rental</b>, regular gifts, Stars,
          Premium, game top-ups and Steam all work too.
        </p>
      </Notice>

      <Toc
        label="Contents"
        items={[
          { href: "#nima", label: "What exactly changed" },
          { href: "#nega", label: "Why it happened" },
          { href: "#qoldi", label: "What the bot offers now" },
          { href: "#yol", label: "Three ways to get a collectible" },
          { href: "#ehtiyot", label: "If you buy elsewhere" },
        ]}
      />

      <h2 id="nima">What exactly changed</h2>
      <p>
        The bot’s regular catalogue used to include 11 <b>limited gifts</b> that Telegram had taken off sale.
        Since 14 September 2026 Telegram no longer offers them to bots — the gift list bots receive now holds
        regular gifts only — so they were removed from the catalogue.
      </p>
      <WhatChanged locale="en" />
      <p>
        So the limit applies only to a <b>new limited copy</b>. A ready collectible (NFT) copy is in the NFT
        Market; one for a set term is in NFT rental.
      </p>

      <h2 id="nega">Why it happened</h2>
      <p>
        It is worth being precise here, because different versions circulate online. Here is what we checked:
      </p>
      <KeyFacts label="What we know for certain">
        <li>
          <b>Gift sending in the Bot API</b> works only with gifts from the list Telegram gives bots; since 14
          September 2026 that list holds no limited gifts — regular ones only.
        </li>
        <li>
          <b>No official announcement</b> specifically banning limited gifts for bots was found when we checked —
          we saw the change itself.
        </li>
        <li>
          <b>Collectible (NFT) gifts</b> take a different path: an NFT Market copy is bought on an open TON gift
          marketplace and transferred to your Telegram account; rental runs through the same marketplace. So this
          limit does not touch them.
        </li>
      </KeyFacts>
      <p>
        The accurate wording: the bot cannot send a new limited gift, but it can buy you a ready collectible
        copy. With no official announcement, we will not claim “Telegram banned it on such-and-such a date”.
      </p>

      <h2 id="qoldi">What the bot offers now</h2>
      <InfoGrid>
        <InfoCard emoji="🖼️" title="NFT Market">
          A listed collectible (NFT) copy for up to 300,000 so‘m; it becomes yours.
        </InfoCard>
        <InfoCard emoji="⏳" title="NFT rental">
          A collectible gift for the term you choose; it goes back when the term ends.
        </InfoCard>
        <InfoCard emoji="🎁" title="Regular gifts">
          From the permanent catalogue (15–100 ⭐) — as before, in so‘m and within minutes.
        </InfoCard>
        <InfoCard emoji="⭐" title="Stars">
          Buying Stars works fully — and those are exactly what an upgrade needs.
        </InfoCard>
        <InfoCard emoji="💎" title="Premium">
          The 3, 6 and 12-month subscription and gifting are unchanged.
        </InfoCard>
        <InfoCard emoji="🎮" title="Games and Steam">
          The GamPay and Steam wallet sections are also untouched.
        </InfoCard>
      </InfoGrid>

      <h2 id="yol">Three ways to get a collectible gift</h2>
      <p>
        Getting a collectible gift has not become impossible. Which route fits depends on how long you need the
        gift and which gift you already have.
      </p>

      <h3>1. The NFT Market — buy a ready copy</h3>
      <p>
        In the bot’s <b>NFT Market</b> you buy a listed collectible copy for <b>up to 300,000 so‘m</b>, and
        ownership passes to you. Payment is by UzCard/HUMO card transfer or from the balance only. Once the
        purchase is confirmed on-chain, the NFT is held by StarsPaymee: the bot asks you to message
        @StarsPaymeeSupport, and an admin transfers the gift to your Telegram @username — so it is not instant.
      </p>

      <InlineCta text="Open the NFT Market in the bot — collectible gifts in so‘m." />

      <h3>2. NFT rental — for a set term</h3>
      <p>
        If you need the gift only for a while (a holiday, a trial), you can <b>rent</b> it for the number of days
        you choose instead of buying it outright; it goes back when the term ends. More in{" "}
        <Link href="/blog/telegram-nft-sovga-ijarasi">renting NFT gifts</Link>.
      </p>

      <h3>3. Upgrade — inside Telegram, for Stars</h3>
      <p>
        Some gifts in Telegram can be turned into a collectible copy for Stars — but only those whose card offers
        the upgrade option. The order:
      </p>
      <Steps>
        <Step title="1. Buy Stars in the bot">The amount you need, in so‘m — this section works.</Step>
        <Step title="2. Pick a gift that can be upgraded">
          Not every gift can — check the gift’s card for that option.
        </Step>
        <Step title="3. Receive or send the gift">
          The bot’s regular gifts are currently the permanent ones (15–100 ⭐). If you are getting one to
          upgrade, first check in Telegram that it offers the option.
        </Step>
        <Step title="4. Upgrade it inside Telegram">
          Press upgrade on the gift’s card — Stars are spent and the gift becomes a collectible.
        </Step>
      </Steps>
      <p>
        If you need Stars, see{" "}
        <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">buying Stars in so‘m</Link>.
      </p>

      <h2 id="ehtiyot">If you buy a collectible elsewhere</h2>
      <p>There are plenty of scammers in NFT gift trading. The simple rules:</p>
      <KeyFacts label="Warning signs">
        <li>
          <b>A password or login code is requested</b> — stop. Telegram never asks for that over a gift.
        </li>
        <li>
          <b>Prepaying a stranger in direct messages</b> — the most common scam. In the StarsPaymee NFT Market
          you pay only through the order screen in the bot: transfer the exact amount to the card shown there,
          or pay from your balance. No password or code is asked.
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
          {
            href: "https://core.telegram.org/bots/api#getavailablegifts",
            label: "Bot API — getAvailableGifts",
            note: "the list of gifts a bot can send",
          },
          { href: "https://core.telegram.org/bots/api-changelog", label: "Bot API changelog", note: "history of bot gift capabilities" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Bot orqali kolleksion (NFT) sovg‘a sotib olsa bo‘ladimi?",
    answer:
      "Ha. NFT Market bo‘limida sotuvdagi kolleksion nusxani 300 000 so‘mgacha sotib olasiz — u sizniki bo‘ladi. To‘lov UzCard/HUMO kartaga o‘tkazma yoki balans orqali. Faqat Telegram sotuvdan olib tashlagan limited sovg‘ani yangi holda olib bo‘lmaydi.",
  },
  {
    question: "Limited sovg‘alarni Telegram rasman taqiqladimi?",
    answer:
      "Biz tekshirgan paytda bu haqda rasmiy e’lon topilmadi. Aniq kuzatilgani: 2026-yil 14-sentabrdan Telegram botlarga beradigan sovg‘alar ro‘yxatida limited sovg‘alar yo‘q — faqat oddiy sovg‘alar. NFT Market va ijaraga bu ta’sir qilmaydi.",
  },
  {
    question: "Unda kolleksion sovg‘ani qanday olaman?",
    answer:
      "Uch yo‘l bor: NFT Market’dan tayyor nusxa (300 000 so‘mgacha), NFT ijarasida muddatga yoki upgrade imkoniyati bor sovg‘ani Telegram ichida yulduz evaziga o‘zingiz ko‘tarasiz.",
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
    answer: "Ha. NFT Market, NFT ijarasi, oddiy sovg‘alar, Stars, Premium, o‘yin to‘ldirish va Steam hamyoni ishlaydi.",
  },
  {
    question: "NFT Market’dan olingan sovg‘a qachon keladi?",
    answer:
      "Darhol emas. To‘lovdan keyin xarid TON zanjirida tasdiqlanadi va NFT StarsPaymee saqlovida turadi; so‘ng admin uni Telegram’dagi @username’ingizga o‘tkazadi — bot @StarsPaymeeSupport’ga yozishni so‘raydi.",
  },
  {
    question: "Kimdir kolleksion sovg‘ani arzonga taklif qilsa-chi?",
    answer:
      "Ehtiyot bo‘ling: parol yoki kirish kodi so‘ralsa, shaxsiy yozishmada notanish odam oldindan pul so‘rasa yoki narx bozordan keskin past bo‘lsa — bu firibgarlik belgisi.",
  },
  {
    question: "Limited sovg‘alar botga qaytadimi?",
    answer:
      "Bu Telegram’ga bog‘liq — oldindan aytib bo‘lmaydi. Sotuvdagi kolleksion nusxalarni esa hozir ham NFT Market’da sotib olish mumkin.",
  },
];

const ruFaq = [
  {
    question: "Можно ли купить коллекционный (NFT) подарок через бота?",
    answer:
      "Да. В разделе NFT Market можно купить выставленный коллекционный экземпляр до 300 000 сумов — он станет вашим. Оплата переводом на карту UzCard/HUMO или с баланса. Нельзя только получить как новый limited-подарок, который Telegram снял с продажи.",
  },
  {
    question: "Telegram официально запретил limited-подарки для ботов?",
    answer:
      "На момент проверки официального объявления мы не нашли. Достоверно известно: с 14 сентября 2026 года в списке подарков, который Telegram отдаёт ботам, limited-подарков нет — только обычные. На NFT Market и аренду это не влияет.",
  },
  {
    question: "Как тогда получить коллекционный подарок?",
    answer:
      "Три пути: готовый экземпляр в NFT Market (до 300 000 сумов), аренда NFT на срок или апгрейд подарка с такой опцией внутри Telegram за звёзды.",
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
    answer: "Да. NFT Market, аренда NFT, обычные подарки, Stars, Premium, пополнение игр и кошелёк Steam работают.",
  },
  {
    question: "Когда приходит подарок, купленный в NFT Market?",
    answer:
      "Не мгновенно. После оплаты покупка подтверждается в блокчейне TON, и NFT хранится у StarsPaymee; затем администратор переводит его на ваш @username в Telegram — бот попросит написать в @StarsPaymeeSupport.",
  },
  {
    question: "Что если кто-то предлагает коллекционный подарок дёшево?",
    answer:
      "Будьте осторожны: просят пароль или код входа, незнакомец в личке требует предоплату или цена заметно ниже рынка — это признаки мошенничества.",
  },
  {
    question: "Вернутся ли limited-подарки в бот?",
    answer:
      "Это зависит от Telegram — заранее сказать нельзя. Выставленные коллекционные экземпляры уже сейчас можно купить в NFT Market.",
  },
];

const enFaq = [
  {
    question: "Can I buy a collectible (NFT) gift through the bot?",
    answer:
      "Yes. In the NFT Market you can buy a listed collectible for up to 300,000 so‘m — it becomes yours. Payment is by UzCard/HUMO card transfer or from the balance. Only a limited gift Telegram took off sale cannot be had new.",
  },
  {
    question: "Did Telegram officially ban limited gifts for bots?",
    answer:
      "We found no official announcement when we checked. What is certain: since 14 September 2026 the gift list Telegram gives bots holds no limited gifts — regular ones only. The NFT Market and rental are not affected.",
  },
  {
    question: "So how do I get a collectible gift?",
    answer:
      "Three routes: a ready copy from the NFT Market (up to 300,000 so‘m), NFT rental for a set term, or upgrading a gift that offers it inside Telegram for Stars.",
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
    answer: "Yes. The NFT Market, NFT rental, regular gifts, Stars, Premium, game top-ups and the Steam wallet all work.",
  },
  {
    question: "How soon does a gift bought in the NFT Market arrive?",
    answer:
      "Not instantly. After payment the purchase is confirmed on the TON blockchain and the NFT is held by StarsPaymee; then an admin transfers it to your Telegram @username — the bot asks you to message @StarsPaymeeSupport.",
  },
  {
    question: "What if someone offers a collectible cheaply?",
    answer:
      "Be careful: a password or login-code request, a stranger in DMs demanding prepayment, or a price far below the market are all scam signals.",
  },
  {
    question: "Will limited gifts come back to the bot?",
    answer:
      "That depends on Telegram and cannot be promised. Listed collectible copies can already be bought in the NFT Market.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "info",
  datePublished: "2026-09-14",
  dateModified: "2026-10-06",
  keywords: [
    "kolleksion gift bot orqali olinmaydi",
    "nft gift bot orqali sotib olish",
    "telegram sotuvdan tugagan sovga",
    "oddiy sovgani collectible qilish",
    "коллекционные подарки telegram бот",
    "распроданные подарки telegram",
    "limited sovga bot orqali yuborilmaydi",
    "коллекционный подарок через бота",
  ],
  locales: {
    uz: {
      title: "Kolleksion gift bot orqali olinmaydimi? Limited sovg‘alar, NFT Market va ijara",
      excerpt:
        "2026-yil 14-sentabrdan botlar Telegram sotuvdan olib tashlagan limited sovg‘alarni yubora olmaydi. Tayyor kolleksion (NFT) sovg‘ani esa @StarsPaymee_bot’dagi NFT Market’da 300 000 so‘mgacha sotib olish yoki NFT ijarasida muddatga olish mumkin.",
      metaTitle: "Kolleksion gift bot orqali olinmaydimi? NFT Market bor",
      metaDescription:
        "Limited sovg‘alar bot katalogidan nega yo‘qoldi va kolleksion (NFT) sovg‘ani qanday olish mumkin: NFT Market (300 000 so‘mgacha), NFT ijarasi yoki upgrade.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "NFT Market va boshqa bo‘limlar",
      ctaBody:
        "@StarsPaymee_bot — NFT Market (300 000 so‘mgacha), NFT ijarasi, oddiy sovg‘alar, Stars va Premium. Hammasi so‘mda.",
      faq: uzFaq,
    },
    ru: {
      title: "Коллекционный подарок через бота: limited-подарки, NFT Market и аренда",
      excerpt:
        "С 14 сентября 2026 года боты не могут отправлять limited-подарки, снятые Telegram с продажи. Готовый коллекционный (NFT) подарок можно купить в NFT Market @StarsPaymee_bot — до 300 000 сумов — или взять в аренду.",
      metaTitle: "Коллекционные подарки в боте: NFT Market и аренда",
      metaDescription:
        "Почему limited-подарки пропали из каталога бота и как получить коллекционный (NFT) подарок: NFT Market (до 300 000 сумов), аренда NFT или апгрейд.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "NFT Market и другие разделы",
      ctaBody:
        "@StarsPaymee_bot — NFT Market (до 300 000 сумов), аренда NFT, обычные подарки, Stars и Premium. Всё в сумах.",
      faq: ruFaq,
    },
    en: {
      title: "Can you get a collectible gift through the bot? Limited gifts, the NFT Market and rental",
      excerpt:
        "Since 14 September 2026 bots cannot send the limited gifts Telegram took off sale. A ready collectible (NFT) gift can still be bought in @StarsPaymee_bot’s NFT Market — up to 300,000 so‘m — or rented.",
      metaTitle: "Collectible gifts in the bot: NFT Market and rental",
      metaDescription:
        "Why limited gifts left the bot’s catalogue and how to get a collectible (NFT) gift: the NFT Market (up to 300,000 so‘m), NFT rental or an upgrade.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "The NFT Market and the rest",
      ctaBody:
        "@StarsPaymee_bot — the NFT Market (up to 300,000 so‘m), NFT rental, regular gifts, Stars and Premium. All in so‘m.",
      faq: enFaq,
    },
  },
};
