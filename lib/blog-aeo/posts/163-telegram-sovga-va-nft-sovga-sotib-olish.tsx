import { Link } from "@/i18n/navigation";
import {
  CompareTable,
  InfoCard,
  InfoGrid,
  InlineCta,
  KeyFacts,
  Sources,
  Step,
  Steps,
  Toc,
} from "@/components/blog/aeo-blocks";
import { NftGiftMarketBoard } from "@/components/blog/nft-gift-market-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-sovga-va-nft-sovga-sotib-olish";

/** Oddiy va NFT sovg‘alar farqi — uchala tilda bir xil ustunlar. */
function GiftCompare({ locale }: { locale: "uz" | "ru" | "en" }) {
  const copy = {
    uz: {
      headers: ["Mezon", "Oddiy sovg‘a (Gift)", "NFT sovg‘a"],
      rows: [
        ["Tiraj", "Cheklanmagan", "Cheklangan, seriya bo‘yicha"],
        ["Noyoblik", "Bir xil nusxalar", "Har bir nusxa unikal"],
        ["Qayerda saqlanadi", "Telegram ilovasi ichida", "TON blokcheynida NFT sifatida"],
        ["Qayta sotish", "Yo‘q", "Ha, marketpleyslarda"],
        ["Profilga qo‘yish", "Ha", "Ha, kolleksion belgisi bilan"],
        ["Byudjet", "Arzon, kundalik e’tibor uchun", "Yuqoriroq — kolleksiya va aktiv"],
      ],
    },
    ru: {
      headers: ["Критерий", "Обычный подарок (Gift)", "NFT-подарок"],
      rows: [
        ["Тираж", "Не ограничен", "Ограничен, по сериям"],
        ["Уникальность", "Одинаковые экземпляры", "Каждый экземпляр уникален"],
        ["Где хранится", "Внутри приложения Telegram", "В блокчейне TON как NFT"],
        ["Перепродажа", "Нет", "Да, на маркетплейсах"],
        ["Закрепление в профиле", "Да", "Да, со статусом коллекционного"],
        ["Бюджет", "Доступно, для знака внимания", "Выше — коллекция и актив"],
      ],
    },
    en: {
      headers: ["Criterion", "Regular gift", "NFT gift"],
      rows: [
        ["Supply", "Unlimited", "Limited, released in series"],
        ["Uniqueness", "Identical copies", "Every copy is unique"],
        ["Where it lives", "Inside the Telegram app", "On the TON blockchain as an NFT"],
        ["Resale", "No", "Yes, on marketplaces"],
        ["Pin to profile", "Yes", "Yes, with a collectible badge"],
        ["Budget", "Affordable, a token of attention", "Higher — a collection and an asset"],
      ],
    },
  }[locale];

  return (
    <CompareTable
      headers={copy.headers}
      rows={copy.rows.map(([label, plain, nft]) => [<strong key="l">{label}</strong>, plain, nft])}
    />
  );
}

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Telegramning <b>oddiy</b> va <b>NFT sovg‘alarini</b> <b>@StarsPaymee_bot</b> orqali ikki valyutada sotib
      olish mumkin: O‘zbekistonda so‘mda — Click, UzCard, HUMO va Payme bilan, Rossiyada rublda — SBP orqali.
      Visa yoki Mastercard talab qilinmaydi, sovg‘a to‘lovdan keyin deyarli darhol qabul qiluvchiga yetib boradi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#oddiy", label: "Oddiy sovg‘alar nima" },
          { href: "#nft", label: "NFT sovg‘alar nima" },
          { href: "#farq", label: "Farqi nimada" },
          { href: "#tolov", label: "To‘lov: so‘m va rubl" },
          { href: "#qadamlar", label: "Qadam-baqadam" },
          { href: "#bepul", label: "Do‘st taklif qilib bepul sovg‘a" },
        ]}
      />

      <p>
        Telegramdagi sovg‘alar — so‘nggi oylarning eng sezilarli trendlaridan biri. Avval istalgan foydalanuvchiga
        yulduzlar evaziga yuboriladigan oddiy sovg‘alar paydo bo‘ldi, keyin esa Telegram <b>NFT sovg‘alarni</b>{" "}
        ishga tushirdi — cheklangan tirajdagi noyob kolleksion buyumlar, ularni nafaqat sovg‘a qilish, balki
        saqlash, profilda ko‘rsatish va hatto qayta sotish ham mumkin.
      </p>

      <h2 id="oddiy">Oddiy sovg‘alar (Gifts) nima</h2>
      <p>
        Oddiy sovg‘a — bu foydalanuvchi boshqasiga yulduzlar evaziga yuboradigan raqamli buyum (ikonka, stiker,
        animatsiya). Bunday sovg‘alarning soni cheklanmagan: ularni xohlagancha sotib olish va sovg‘a qilish
        mumkin, ular noyob yoki kolleksion hisoblanmaydi va funksiya Telegramda faol ekan, doim mavjud bo‘ladi.
      </p>
      <KeyFacts label="Oddiy sovg‘alar nimaga kerak">
        <li>
          <b>Tabrik va e’tibor</b> — tug‘ilgan kun, bayram yoki shunchaki sababsiz do‘st va hamkasbni xursand
          qilishning oson yo‘li.
        </li>
        <li>
          <b>Kanal va chatlarda muloqotni jonlantirish</b> — muallif kontent uchun minnatdorchilik sifatida
          obunachilardan sovg‘a oladi.
        </li>
        <li>
          <b>Blogerlar va bot yaratuvchilarini qo‘llab-quvvatlash</b> — sovg‘a «chaevoy» yoki donatning o‘yinli
          ko‘rinishi.
        </li>
        <li>
          <b>Profilni shaxsiylashtirish</b> — ba’zi sovg‘alarni profilga qadab qo‘yish mumkin, ular boshqalarga
          ko‘rinadi.
        </li>
        <li>
          <b>Viral va faollik</b> — sovg‘alar konkurs va o‘yin-tanlovlarda obunachilarni faollashtirish uchun
          ishlatiladi.
        </li>
      </KeyFacts>
      <p>
        Soniga cheklov yo‘qligi sababli oddiy sovg‘alar — katta pul sarflamasdan e’tibor bildirishning arzon
        usuli. Yuborish tartibi:{" "}
        <Link href="/blog/telegram-gifts-yuborish-qollanma">sovg‘a yuborish qo‘llanmasi</Link>.
      </p>

      <h2 id="nft">NFT sovg‘alar nima</h2>
      <p>
        NFT sovg‘alar — mutlaqo boshqa toifa. Ular <b>cheklangan tiraj</b> bilan chiqariladi, har bir nusxa unikal
        va TON blokcheynida haqiqiy NFT-token sifatida biriktiriladi. Bunday sovg‘ani shunchaki profilda
        qoldirish emas, balki raqamli aktiv sifatida to‘liq egalik qilish mumkin: ko‘rsatish, kolleksiya qilish,
        boshqa odamga to‘g‘ridan-to‘g‘ri sovg‘a qilish yoki NFT marketpleyslarda sotuvga qo‘yish.
      </p>
      <KeyFacts label="NFT sovg‘alar nimaga kerak">
        <li>
          <b>Kolleksiya</b> — foydalanuvchilarning bir qismi turli seriya va to‘plamlardan NFT sovg‘alar yig‘adi.
        </li>
        <li>
          <b>Status va noyoblik</b> — kam tirajli yoki erta seriyadagi nusxaga egalik profilni ajratib turadi.
        </li>
        <li>
          <b>Investitsion salohiyat</b> — tiraj cheklangani va noyob nusxalarga talab vaqt bilan o‘sishi mumkinligi
          uchun ba’zilar ularni qimmatroqqa qayta sotish mumkin bo‘lgan aktiv sifatida ko‘radi.
        </li>
        <li>
          <b>Haqiqiy egalik</b> — sovg‘a blokcheynda foydalanuvchiga biriktirilgan, ya’ni bu shunchaki «ilova
          ichidagi rasm» emas.
        </li>
        <li>
          <b>Qo‘shimcha qiymatli sovg‘a</b> — cheklangan seriyadagi NFT sovg‘a oddiy raqamli stikerdan ko‘ra
          ko‘proq esda qoladi.
        </li>
      </KeyFacts>
      <p>
        Batafsil: <Link href="/blog/telegram-nft-gift-nima">NFT Gift nima</Link>,{" "}
        <Link href="/blog/telegram-nft-investitsiya">NFT sovg‘a investitsiya sifatida</Link>,{" "}
        <Link href="/blog/limited-edition-telegram-gifts">limited edition sovg‘alar</Link>.
      </p>

      <h2 id="farq">Oddiy va NFT sovg‘a — farqi nimada</h2>
      <GiftCompare locale="uz" />

      <h2 id="market">Gift Market: namunaviy narxlar</h2>
      <NftGiftMarketBoard locale="uz" />

      <h2 id="tolov">To‘lov: so‘m va rubl</h2>
      <p>
        Botning asosiy afzalligi — oddiy va NFT sovg‘alarni siz uchun qulay valyutada to‘liq to‘lab olish
        imkoniyati. Xalqaro karta ham, ilova ichida yulduz sotib olish bilan bog‘liq murakkabliklar ham kerak emas.
      </p>
      <InfoGrid>
        <InfoCard emoji="🇺🇿" title="O‘zbek so‘mida">
          Click, UzCard, HUMO va Payme — mamlakatdagi eng keng tarqalgan usullar.
        </InfoCard>
        <InfoCard emoji="🇷🇺" title="Rossiya rublida">
          SBP (Tezkor to‘lovlar tizimi) — bank ilovasidan to‘g‘ridan-to‘g‘ri, karta rekvizitlarisiz.
        </InfoCard>
        <InfoCard emoji="🚫" title="Visa kerak emas">
          Xarid to‘liq mahalliy, xalqaro to‘lov tizimlarisiz.
        </InfoCard>
        <InfoCard emoji="⚡" title="Tez yetkazish">
          Sovg‘a to‘lovdan keyin deyarli bir zumda qabul qiluvchiga tushadi.
        </InfoCard>
      </InfoGrid>
      <p>
        Ya’ni qayerda bo‘lishingizdan qat’i nazar — O‘zbekistondami yoki Rossiyadami — sovg‘alarni odatiy valyuta
        va odatiy to‘lov usuli bilan sotib olish mumkin. To‘lov usullarini taqqoslash:{" "}
        <Link href="/blog/sbp-vs-click-vs-uzcard-tolov-solishtirish">SBP, Click va UzCard</Link>.
      </p>

      <InlineCta text="Sovg‘ani so‘mda yoki rublda tanlang — Gift Market botda ochiq." />

      <h2 id="qadamlar">Qadam-baqadam: xarid qanday kechadi</h2>
      <Steps>
        <Step title="1. Botni oching">
          Telegramda{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          ni ishga tushiring.
        </Step>
        <Step title="2. Sovg‘alar bo‘limini tanlang">Oddiy Gifts yoki NFT sovg‘alar — ehtiyojingizga qarab.</Step>
        <Step title="3. Sovg‘a yoki kolleksiyani tanlang">
          NFT sovg‘alarda odatda turli seriya va noyoblik darajalari mavjud.
        </Step>
        <Step title="4. Qabul qiluvchini ko‘rsating">O‘zingiz yoki boshqa Telegram foydalanuvchisi.</Step>
        <Step title="5. To‘lov usulini tanlang">So‘m uchun — Click, UzCard, HUMO yoki Payme; rubl uchun — SBP.</Step>
        <Step title="6. Buyurtmani to‘lang">Summa tanlangan valyutada ko‘rsatiladi.</Step>
        <Step title="7. Tasdiqni oling">Sovg‘a to‘lovdan keyin deyarli darhol qabul qiluvchiga yuboriladi.</Step>
      </Steps>

      <h2 id="bepul">Do‘st taklif qilib bepul sovg‘a olish</h2>
      <p>
        To‘g‘ridan-to‘g‘ri xariddan tashqari, @StarsPaymee_bot da sovg‘alarni <b>bepul</b> olish imkoniyati ham
        bor — botga do‘stlarni taklif qilish evaziga. Bu kolleksiyani to‘ldirish yoki birovni xursand qilishning
        sum ham, rubl ham sarflamaydigan yo‘li.
      </p>
      <KeyFacts label="Mexanika qanday ishlaydi">
        <li>
          <b>5 ta do‘st taklif qilsangiz</b> — kafolatlangan sovg‘a, masalan Minuscule (Telegram Gifts
          liniyasidagi miniatyura sovg‘a).
        </li>
        <li>
          <b>Ko‘proq do‘st taklif qilsangiz</b> — boshqa toifalardan qimmatroq va qiziqarliroq sovg‘alar ochiladi.
        </li>
        <li>
          <b>Sarf-xarajatsiz</b> — havolani do‘st va hamkasblarga ulashish kifoya.
        </li>
      </KeyFacts>

      <h2 id="nega">Nega aynan shu bot orqali</h2>
      <KeyFacts label="Asosiy sabablar">
        <li>
          <b>Oddiy ham, NFT sovg‘alar ham</b> — turli xizmatlarni qidirish shart emas, hammasi bir joyda.
        </li>
        <li>
          <b>Ikki valyutada to‘lov</b> — so‘m (Click, UzCard, HUMO, Payme) va rubl (SBP).
        </li>
        <li>
          <b>Visa yoki Mastercard kerak emas</b> — xarid to‘liq mahalliy.
        </li>
        <li>
          <b>Tez yetkazish</b> — sovg‘a to‘lovdan keyin deyarli bir zumda tushadi.
        </li>
        <li>
          <b>Do‘st uchun bonus dasturi</b> — taklif evaziga bepul sovg‘alar.
        </li>
        <li>
          <b>O‘zbekistonda rasmiy ro‘yxatdan o‘tgan market</b> — xizmat qonuniy va ochiq ishlaydi.
        </li>
      </KeyFacts>

      <p>
        Shuningdek o‘qing:{" "}
        <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">so‘mda Stars sotib olish</Link>,{" "}
        <Link href="/blog/telegram-premium-3-6-12-oy-sotib-olish">Premium 3, 6 va 12 oy</Link>,{" "}
        <Link href="/blog/telegram-gifts-narxlari-royxati">sovg‘alar narxlari ro‘yxati</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/blog/gifts", label: "telegram.org", note: "Telegram Gifts e’loni" },
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org", note: "Gifts texnik hujjati" },
          { href: "https://ton.org", label: "ton.org", note: "TON blokcheyni" },
          { href: "https://sbp.nspk.ru/", label: "sbp.nspk.ru", note: "SBP — tezkor to‘lovlar tizimi" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      И <b>обычные</b>, и <b>NFT-подарки</b> Telegram можно купить через <b>@StarsPaymee_bot</b> в двух валютах:
      в Узбекистане — в сумах через Click, Uzcard, Humo и Payme, в России — в рублях через СБП. Карта Visa или
      Mastercard не нужна, подарок доходит до получателя практически сразу после оплаты.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#oddiy", label: "Что такое обычные подарки" },
          { href: "#nft", label: "Что такое NFT-подарки" },
          { href: "#farq", label: "В чём разница" },
          { href: "#tolov", label: "Оплата: сумы и рубли" },
          { href: "#qadamlar", label: "Пошаговая инструкция" },
          { href: "#bepul", label: "Бесплатные подарки за друзей" },
        ]}
      />

      <p>
        Подарки в Telegram — один из самых заметных трендов последних месяцев. Сначала появились обычные подарки,
        которые можно отправить любому пользователю за звёзды прямо внутри мессенджера, а затем Telegram запустил
        и <b>NFT-подарки</b> — уникальные коллекционные предметы с ограниченным тиражом, которые можно не просто
        подарить, а хранить, показывать в профиле и даже перепродавать.
      </p>

      <h2 id="oddiy">Что такое обычные подарки (Gifts)</h2>
      <p>
        Обычные подарки — это цифровые предметы (иконки, стикеры, анимации), которые пользователь Telegram может
        отправить другому человеку за звёзды. У таких подарков нет ограничения по количеству: их можно покупать и
        дарить сколько угодно, они не являются редкими или коллекционными и доступны всегда, пока функция активна
        в самом Telegram.
      </p>
      <KeyFacts label="Зачем нужны обычные подарки">
        <li>
          <b>Поздравление и внимание</b> — простой способ порадовать друга, коллегу или собеседника в честь дня
          рождения, праздника или просто без повода.
        </li>
        <li>
          <b>Оживление общения в каналах и чатах</b> — авторы часто получают такие подарки от подписчиков в знак
          благодарности за контент.
        </li>
        <li>
          <b>Поддержка блогеров и создателей ботов</b> — подарок работает как аналог чаевых или доната, только в
          игровой форме.
        </li>
        <li>
          <b>Персонализация профиля</b> — некоторые подарки можно закрепить в профиле, и они видны другим
          пользователям.
        </li>
        <li>
          <b>Виральность и вовлечённость</b> — подарки используют в конкурсах и розыгрышах, чтобы стимулировать
          активность подписчиков.
        </li>
      </KeyFacts>
      <p>
        Поскольку ограничений на количество нет, обычные подарки — это доступный и бюджетный способ выразить
        внимание. Как отправить:{" "}
        <Link href="/blog/telegram-gifts-yuborish-qollanma">руководство по отправке подарков</Link>.
      </p>

      <h2 id="nft">Что такое NFT-подарки</h2>
      <p>
        NFT-подарки — принципиально другая категория. В отличие от обычных, они выпускаются{" "}
        <b>ограниченным тиражом</b>, каждый экземпляр уникален и закреплён в блокчейне TON как настоящий
        NFT-токен. Такой подарок можно не просто оставить в профиле, а полноценно владеть им как цифровым активом:
        показывать, коллекционировать, дарить другому человеку напрямую или выставлять на продажу на
        маркетплейсах.
      </p>
      <KeyFacts label="Зачем нужны NFT-подарки">
        <li>
          <b>Коллекционирование</b> — часть пользователей собирает NFT-подарки из разных серий и коллекций.
        </li>
        <li>
          <b>Статус и редкость</b> — обладание редким экземпляром подчёркивает индивидуальность профиля, особенно
          если подарок из ранней или малотиражной серии.
        </li>
        <li>
          <b>Инвестиционный потенциал</b> — тираж ограничен, а спрос на редкие экземпляры со временем может расти,
          поэтому их рассматривают как цифровой актив.
        </li>
        <li>
          <b>Настоящее владение активом</b> — подарок закреплён за пользователем в блокчейне, а не просто
          «виртуальная картинка внутри приложения».
        </li>
        <li>
          <b>Подарок с добавленной ценностью</b> — экземпляр из ограниченной серии запоминается сильнее обычного
          цифрового стикера.
        </li>
      </KeyFacts>
      <p>
        Подробнее: <Link href="/blog/telegram-nft-gift-nima">что такое NFT Gift</Link>,{" "}
        <Link href="/blog/telegram-nft-investitsiya">NFT-подарок как инвестиция</Link>,{" "}
        <Link href="/blog/limited-edition-telegram-gifts">лимитированные подарки</Link>.
      </p>

      <h2 id="farq">В чём разница между обычным и NFT-подарком</h2>
      <GiftCompare locale="ru" />

      <h2 id="market">Gift Market: примеры цен</h2>
      <NftGiftMarketBoard locale="ru" />

      <h2 id="tolov">Оплата: сумы и рубли</h2>
      <p>
        Главное преимущество бота в том, что он позволяет купить и обычные, и NFT-подарки, полностью оплатив
        покупку в удобной для вас валюте — без карты Visa или Mastercard и без сложностей с покупкой звёзд
        напрямую в приложении.
      </p>
      <InfoGrid>
        <InfoCard emoji="🇺🇿" title="В узбекских сумах">
          Click, Uzcard, Humo и Payme — самые распространённые способы в стране.
        </InfoCard>
        <InfoCard emoji="🇷🇺" title="В российских рублях">
          СБП — быстрый перевод прямо из банковского приложения, без ввода реквизитов карты.
        </InfoCard>
        <InfoCard emoji="🚫" title="Виза не нужна">
          Покупка полностью локальная, без международных платёжных систем.
        </InfoCard>
        <InfoCard emoji="⚡" title="Быстрая доставка">
          Подарок поступает получателю практически моментально после оплаты.
        </InfoCard>
      </InfoGrid>
      <p>
        Таким образом, независимо от того, где вы находитесь — в Узбекистане или в России — купить подарки можно
        быстро, в привычной валюте и привычным способом оплаты. Сравнение методов:{" "}
        <Link href="/blog/sbp-vs-click-vs-uzcard-tolov-solishtirish">СБП, Click и Uzcard</Link>.
      </p>

      <InlineCta text="Выберите подарок и оплатите в сумах или рублях — Gift Market открыт в боте." />

      <h2 id="qadamlar">Пошаговая инструкция по покупке</h2>
      <Steps>
        <Step title="1. Откройте бота">
          Запустите{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          в Telegram.
        </Step>
        <Step title="2. Выберите раздел с подарками">Обычные Gifts или NFT-подарки — в зависимости от задачи.</Step>
        <Step title="3. Выберите подарок или коллекцию">
          Для NFT-подарков часто доступны разные серии и уровни редкости.
        </Step>
        <Step title="4. Укажите получателя">Себя или другого пользователя Telegram.</Step>
        <Step title="5. Выберите способ оплаты">Для сумов — Click, Uzcard, Humo или Payme; для рублей — СБП.</Step>
        <Step title="6. Оплатите заказ">Сумма показывается в выбранной валюте.</Step>
        <Step title="7. Получите подтверждение">Подарок отправляется получателю практически сразу после оплаты.</Step>
      </Steps>

      <h2 id="bepul">Бесплатные подарки за приглашение друзей</h2>
      <p>
        Кроме прямой покупки, в @StarsPaymee_bot есть возможность получать подарки <b>бесплатно</b> — за
        приглашение друзей в бота. Это способ пополнить коллекцию или порадовать кого-то, не тратя ни сума, ни
        рубля.
      </p>
      <KeyFacts label="Как работает механика">
        <li>
          <b>За приглашение 5 друзей</b> — гарантированный подарок, например Minuscule, миниатюрный подарок из
          линейки Telegram Gifts.
        </li>
        <li>
          <b>За приглашение большего числа друзей</b> — доступны более ценные и интересные подарки из других
          категорий.
        </li>
        <li>
          <b>Без затрат</b> — достаточно поделиться ссылкой с друзьями и коллегами.
        </li>
      </KeyFacts>

      <h2 id="nega">Почему стоит покупать подарки именно через этого бота</h2>
      <KeyFacts label="Основные причины">
        <li>
          <b>Работает и с обычными, и с NFT-подарками</b> — не нужно искать разные сервисы, всё в одном месте.
        </li>
        <li>
          <b>Оплата в двух валютах</b> — сум (Click, Uzcard, Humo, Payme) и рубль (СБП).
        </li>
        <li>
          <b>Не нужна карта Visa или Mastercard</b> — покупка полностью локальная.
        </li>
        <li>
          <b>Быстрая доставка</b> — подарок поступает получателю практически моментально.
        </li>
        <li>
          <b>Бонусная программа за друзей</b> — подарки бесплатно за приглашения.
        </li>
        <li>
          <b>Официально зарегистрированный маркет в Узбекистане</b> — сервис работает легально и прозрачно.
        </li>
      </KeyFacts>

      <p>
        Читайте также:{" "}
        <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">покупка Stars за сумы</Link>,{" "}
        <Link href="/blog/telegram-premium-3-6-12-oy-sotib-olish">Premium на 3, 6 и 12 месяцев</Link>,{" "}
        <Link href="/blog/telegram-gifts-narxlari-royxati">список цен на подарки</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/blog/gifts", label: "telegram.org", note: "анонс Telegram Gifts" },
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org", note: "техническая документация Gifts" },
          { href: "https://ton.org", label: "ton.org", note: "блокчейн TON" },
          { href: "https://sbp.nspk.ru/", label: "sbp.nspk.ru", note: "СБП — система быстрых платежей" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      Both <b>regular</b> and <b>NFT gifts</b> on Telegram can be bought through <b>@StarsPaymee_bot</b> in two
      currencies: in Uzbek so‘m via Click, UzCard, HUMO and Payme, or in Russian roubles via SBP. No Visa or
      Mastercard is required, and the gift reaches the recipient almost immediately after payment.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#oddiy", label: "What regular gifts are" },
          { href: "#nft", label: "What NFT gifts are" },
          { href: "#farq", label: "The difference" },
          { href: "#tolov", label: "Payment: so‘m and roubles" },
          { href: "#qadamlar", label: "Step by step" },
          { href: "#bepul", label: "Free gifts for invites" },
        ]}
      />

      <p>
        Gifts are one of the most visible trends on Telegram in recent months. First came regular gifts, which any
        user can send for Stars inside the messenger; then Telegram launched <b>NFT gifts</b> — unique
        collectibles with a limited supply that can be kept, displayed on a profile and even resold.
      </p>

      <h2 id="oddiy">What regular gifts are</h2>
      <p>
        A regular gift is a digital item — an icon, sticker or animation — that one Telegram user sends to another
        for Stars. There is no cap on how many exist: they can be bought and given freely, they are not rare or
        collectible, and they stay available as long as the feature is live in Telegram.
      </p>
      <KeyFacts label="What regular gifts are for">
        <li>
          <b>Congratulations and attention</b> — an easy way to delight a friend or colleague on a birthday, a
          holiday or for no reason at all.
        </li>
        <li>
          <b>Livening up channels and chats</b> — channel authors often receive them from subscribers as thanks
          for the content.
        </li>
        <li>
          <b>Supporting bloggers and bot builders</b> — a gift works like a tip or a donation in a playful form.
        </li>
        <li>
          <b>Personalising a profile</b> — some gifts can be pinned to the profile where others can see them.
        </li>
        <li>
          <b>Virality and engagement</b> — gifts are used in contests and giveaways to spark subscriber activity.
        </li>
      </KeyFacts>
      <p>
        With no supply limit, regular gifts are an affordable way to show attention. How to send one:{" "}
        <Link href="/blog/telegram-gifts-yuborish-qollanma">the gift-sending guide</Link>.
      </p>

      <h2 id="nft">What NFT gifts are</h2>
      <p>
        NFT gifts are a fundamentally different category. They are released in a <b>limited run</b>, each copy is
        unique, and each is anchored on the TON blockchain as a real NFT token. Such a gift is not merely left on
        a profile — it is owned as a digital asset: it can be displayed, collected, given directly to another
        person or listed for sale on NFT marketplaces.
      </p>
      <KeyFacts label="What NFT gifts are for">
        <li>
          <b>Collecting</b> — some users assemble NFT gifts from different series and collections.
        </li>
        <li>
          <b>Status and rarity</b> — owning a rare or limited copy sets a profile apart, especially from an early
          or small-run series.
        </li>
        <li>
          <b>Investment potential</b> — supply is capped and demand for rare copies can grow over time, so some
          people treat them as a digital asset.
        </li>
        <li>
          <b>Real ownership</b> — the gift is tied to the user on-chain, not just a picture inside an app.
        </li>
        <li>
          <b>A gift with added meaning</b> — a limited-series NFT gift is remembered far longer than a plain
          digital sticker.
        </li>
      </KeyFacts>
      <p>
        More on this: <Link href="/blog/telegram-nft-gift-nima">what an NFT Gift is</Link>,{" "}
        <Link href="/blog/telegram-nft-investitsiya">the NFT gift as an investment</Link>,{" "}
        <Link href="/blog/limited-edition-telegram-gifts">limited-edition gifts</Link>.
      </p>

      <h2 id="farq">Regular versus NFT gifts</h2>
      <GiftCompare locale="en" />

      <h2 id="market">Gift Market: sample prices</h2>
      <NftGiftMarketBoard locale="en" />

      <h2 id="tolov">Payment: so‘m and roubles</h2>
      <p>
        The bot’s main advantage is that both regular and NFT gifts can be paid for entirely in the currency that
        suits you — with no Visa or Mastercard, and none of the friction of buying Stars inside the app.
      </p>
      <InfoGrid>
        <InfoCard emoji="🇺🇿" title="In Uzbek so‘m">
          Click, UzCard, HUMO and Payme — the most widespread methods in the country.
        </InfoCard>
        <InfoCard emoji="🇷🇺" title="In Russian roubles">
          SBP — a fast transfer straight from a banking app, with no card details to type.
        </InfoCard>
        <InfoCard emoji="🚫" title="No Visa needed">
          The purchase is entirely local, without international payment systems.
        </InfoCard>
        <InfoCard emoji="⚡" title="Fast delivery">
          The gift reaches the recipient almost instantly after payment.
        </InfoCard>
      </InfoGrid>
      <p>
        So wherever you are — in Uzbekistan or in Russia — gifts can be bought quickly, in a familiar currency and
        with a familiar payment method. Comparing the methods:{" "}
        <Link href="/blog/sbp-vs-click-vs-uzcard-tolov-solishtirish">SBP, Click and UzCard</Link>.
      </p>

      <InlineCta text="Pick a gift and pay in so‘m or roubles — the Gift Market is open in the bot." />

      <h2 id="qadamlar">Step by step: how the purchase goes</h2>
      <Steps>
        <Step title="1. Open the bot">
          Start{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          in Telegram.
        </Step>
        <Step title="2. Pick the gifts section">Regular Gifts or NFT gifts, depending on what you need.</Step>
        <Step title="3. Choose a gift or a collection">
          NFT gifts usually come in several series and rarity tiers.
        </Step>
        <Step title="4. Name the recipient">Yourself or another Telegram user.</Step>
        <Step title="5. Choose a payment method">For so‘m — Click, UzCard, HUMO or Payme; for roubles — SBP.</Step>
        <Step title="6. Pay for the order">The total is shown in the currency you picked.</Step>
        <Step title="7. Get the confirmation">The gift is sent to the recipient almost immediately after payment.</Step>
      </Steps>

      <h2 id="bepul">Free gifts for inviting friends</h2>
      <p>
        Beyond a direct purchase, @StarsPaymee_bot also hands out gifts <b>for free</b> — for inviting friends to
        the bot. It is a way to grow a collection or delight someone without spending a single so‘m or rouble.
      </p>
      <KeyFacts label="How the mechanic works">
        <li>
          <b>Invite 5 friends</b> — a guaranteed gift, for example Minuscule, a miniature item from the Telegram
          Gifts line-up.
        </li>
        <li>
          <b>Invite more friends</b> — pricier and more interesting gifts from other categories unlock.
        </li>
        <li>
          <b>At no cost</b> — sharing your link with friends and colleagues is enough.
        </li>
      </KeyFacts>

      <h2 id="nega">Why buy gifts through this bot</h2>
      <KeyFacts label="The main reasons">
        <li>
          <b>Both regular and NFT gifts</b> — no need to hunt for separate services, it is all in one place.
        </li>
        <li>
          <b>Two payment currencies</b> — so‘m (Click, UzCard, HUMO, Payme) and roubles (SBP).
        </li>
        <li>
          <b>No Visa or Mastercard required</b> — the purchase is fully local.
        </li>
        <li>
          <b>Fast delivery</b> — the gift lands with the recipient almost instantly.
        </li>
        <li>
          <b>A referral bonus programme</b> — free gifts for invites.
        </li>
        <li>
          <b>An officially registered market in Uzbekistan</b> — the service runs legally and transparently.
        </li>
      </KeyFacts>

      <p>
        Read next:{" "}
        <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">buying Stars in so‘m</Link>,{" "}
        <Link href="/blog/telegram-premium-3-6-12-oy-sotib-olish">Premium for 3, 6 and 12 months</Link>,{" "}
        <Link href="/blog/telegram-gifts-narxlari-royxati">the gift price list</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://telegram.org/blog/gifts", label: "telegram.org", note: "Telegram Gifts announcement" },
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org", note: "Gifts technical documentation" },
          { href: "https://ton.org", label: "ton.org", note: "the TON blockchain" },
          { href: "https://sbp.nspk.ru/", label: "sbp.nspk.ru", note: "SBP — the fast payments system" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Oddiy va NFT sovg‘alar orasidagi farq nima?",
    answer:
      "Oddiy sovg‘alar soni cheklanmagan va funksiya faol ekan doim mavjud. NFT sovg‘alar cheklangan tiraj bilan chiqariladi, TON blokcheynida unikal aktiv sifatida biriktiriladi va sotilishi yoki uzatilishi mumkin.",
  },
  {
    question: "NFT sovg‘ani o‘zbek so‘mida sotib olsa bo‘ladimi?",
    answer: "Ha, @StarsPaymee_bot da NFT sovg‘alarni ham, oddiylarini ham Click, UzCard, HUMO yoki Payme bilan so‘mda to‘lash mumkin.",
  },
  {
    question: "Rublda qanday to‘lanadi?",
    answer: "Rubl uchun botda SBP — tezkor to‘lovlar tizimi mavjud, karta rekvizitlarini kiritish shart emas.",
  },
  {
    question: "Sovg‘ani bepul qanday olaman?",
    answer:
      "Referal havolangiz orqali botga do‘stlarni taklif qiling: ma’lum sondagi taklif uchun sovg‘a kafolatlangan, do‘st ko‘p bo‘lsa mukofot qimmatroq bo‘lishi mumkin.",
  },
  {
    question: "Sovg‘a qabul qiluvchiga qancha tez yetib boradi?",
    answer: "Odatda to‘lov tasdiqlangach deyarli darhol.",
  },
  { question: "NFT sovg‘a uchun Telegram Premium kerakmi?", answer: "Yo‘q, NFT sovg‘a olish uchun Premium shart emas." },
  {
    question: "Sovg‘ani anonim yuborsam bo‘ladimi?",
    answer: "Ha, sovg‘ani anonim yoki tabrik izohi bilan yuborish mumkin.",
  },
  {
    question: "NFT sovg‘ani keyin sotish mumkinmi?",
    answer: "Ha, u blokcheynda alohida token sifatida biriktirilgani uchun marketpleyslarda sotuvga qo‘yiladi.",
  },
];

const ruFaq = [
  {
    question: "В чём разница между обычными и NFT-подарками Telegram?",
    answer:
      "Обычные подарки не ограничены по количеству и доступны, пока функция активна в Telegram. NFT-подарки выпускаются ограниченным тиражом, закреплены в блокчейне TON как уникальный цифровой актив и могут быть проданы или переданы как отдельный NFT-токен.",
  },
  {
    question: "Можно ли купить NFT-подарок за узбекский сум?",
    answer: "Да, в @StarsPaymee_bot NFT-подарки, как и обычные, можно оплатить в сумах через Click, Uzcard, Humo или Payme.",
  },
  {
    question: "Как оплатить покупку в рублях?",
    answer: "Для оплаты в рублях в боте доступна система быстрых платежей — СБП, без необходимости вводить данные банковской карты.",
  },
  {
    question: "Как получить подарок бесплатно?",
    answer:
      "Достаточно пригласить друзей в бота по своей реферальной ссылке — за определённое количество приглашённых подарок начисляется гарантированно, а чем больше друзей, тем ценнее может быть вознаграждение.",
  },
  {
    question: "Насколько быстро подарок доходит до получателя?",
    answer: "Обычно подарок зачисляется получателю практически сразу после подтверждения оплаты.",
  },
  { question: "Нужен ли Telegram Premium для NFT-подарка?", answer: "Нет, Premium для покупки NFT-подарка не требуется." },
  { question: "Можно ли отправить подарок анонимно?", answer: "Да, подарок можно отправить анонимно или с поздравительным комментарием." },
  {
    question: "Можно ли потом продать NFT-подарок?",
    answer: "Да, он закреплён в блокчейне как отдельный токен, поэтому его можно выставить на продажу на маркетплейсах.",
  },
];

const enFaq = [
  {
    question: "What is the difference between regular and NFT gifts?",
    answer:
      "Regular gifts have no supply cap and stay available while the feature is live in Telegram. NFT gifts are released in a limited run, anchored on the TON blockchain as a unique digital asset, and can be sold or transferred as a separate NFT token.",
  },
  {
    question: "Can an NFT gift be bought with Uzbek so‘m?",
    answer: "Yes. In @StarsPaymee_bot both NFT and regular gifts can be paid for in so‘m via Click, UzCard, HUMO or Payme.",
  },
  {
    question: "How do I pay in roubles?",
    answer: "For roubles the bot supports SBP, the fast payments system, with no card details to enter.",
  },
  {
    question: "How do I get a gift for free?",
    answer:
      "Invite friends to the bot with your referral link — a certain number of invites earns a guaranteed gift, and more friends can unlock a more valuable reward.",
  },
  {
    question: "How fast does the gift reach the recipient?",
    answer: "Normally almost immediately after the payment is confirmed.",
  },
  { question: "Is Telegram Premium needed for an NFT gift?", answer: "No, Premium is not required to buy an NFT gift." },
  { question: "Can a gift be sent anonymously?", answer: "Yes, a gift can be sent anonymously or with a greeting note." },
  {
    question: "Can an NFT gift be resold later?",
    answer: "Yes. It is anchored on-chain as a separate token, so it can be listed for sale on marketplaces.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-08-28",
  dateModified: "2026-08-28",
  keywords: [
    "telegram sovga sotib olish",
    "telegram nft sovga somda",
    "telegram gifts rublda sbp",
    "nft sovga sotib olish ozbekiston",
    "bepul telegram sovga dost taklif",
    "купить подарки telegram за сум",
    "купить nft подарок telegram за рубли",
  ],
  howToSteps: [
    { name: "Botni oching", text: "Telegramda @StarsPaymee_bot ni ishga tushiring." },
    { name: "Sovg‘alar bo‘limini tanlang", text: "Oddiy Gifts yoki NFT sovg‘alar." },
    { name: "Sovg‘a yoki kolleksiyani tanlang", text: "NFT sovg‘alarda turli seriya va noyoblik darajalari mavjud." },
    { name: "Qabul qiluvchini ko‘rsating", text: "O‘zingiz yoki boshqa Telegram foydalanuvchisi." },
    { name: "To‘lov usulini tanlang", text: "So‘m uchun Click, UzCard, HUMO yoki Payme; rubl uchun SBP." },
    { name: "Buyurtmani to‘lang", text: "Summa tanlangan valyutada ko‘rsatiladi." },
    { name: "Tasdiqni oling", text: "Sovg‘a to‘lovdan keyin deyarli darhol qabul qiluvchiga yuboriladi." },
  ],
  locales: {
    uz: {
      title: "Telegram sovg‘alari va NFT sovg‘alar: so‘m va rublda sotib olish",
      excerpt:
        "Oddiy va NFT sovg‘alar o‘rtasidagi farq, ular nimaga kerak, so‘m (Click, UzCard, HUMO, Payme) va rubl (SBP) orqali xarid hamda do‘st taklif qilib bepul sovg‘a olish.",
      metaTitle: "Telegram sovg‘a va NFT sovg‘a sotib olish",
      metaDescription:
        "Telegram oddiy va NFT sovg‘alarini so‘m yoki rublda sotib olish: Click, UzCard, HUMO, Payme va SBP, Visa kerak emas, bepul sovg‘a dasturi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Sovg‘ani hozir tanlang",
      ctaBody: "@StarsPaymee_bot — oddiy va NFT sovg‘alar, so‘m va rublda to‘lov, tezkor yetkazish.",
      faq: uzFaq,
    },
    ru: {
      title: "Купить подарки Telegram и NFT-подарки за сум и рубль: полный гид",
      excerpt:
        "Чем обычные подарки отличаются от NFT, зачем они нужны, как оплатить в сумах (Click, Uzcard, Humo, Payme) и в рублях (СБП) и как получить подарок бесплатно за друзей.",
      metaTitle: "Купить подарки Telegram и NFT за сум и рубль",
      metaDescription:
        "Как купить обычные и NFT-подарки Telegram за узбекский сум или российский рубль: Click, Uzcard, Humo, Payme и СБП, без Visa, плюс бесплатные подарки за друзей.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Выберите подарок прямо сейчас",
      ctaBody: "@StarsPaymee_bot — обычные и NFT-подарки, оплата в сумах и рублях, быстрая доставка.",
      faq: ruFaq,
    },
    en: {
      title: "Buying Telegram gifts and NFT gifts with so‘m and roubles",
      excerpt:
        "How regular gifts differ from NFT ones, what each is for, how to pay in so‘m (Click, UzCard, HUMO, Payme) or roubles (SBP), and how invites earn free gifts.",
      metaTitle: "Buy Telegram gifts and NFT gifts for so‘m",
      metaDescription:
        "Buy regular and NFT Telegram gifts with Uzbek so‘m or Russian roubles: Click, UzCard, HUMO, Payme and SBP, no Visa needed, plus free gifts for invites.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Pick a gift now",
      ctaBody: "@StarsPaymee_bot — regular and NFT gifts, payment in so‘m and roubles, fast delivery.",
      faq: enFaq,
    },
  },
};
