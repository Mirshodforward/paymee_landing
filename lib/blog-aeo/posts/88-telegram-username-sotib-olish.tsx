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
import { GrowthSeriesAside } from "./_growth-shared";

const SLUG = "telegram-username-sotib-olish";

/**
 * Telegram username sotib olish — Fragment'da kolleksiya @nom: auksion, narx,
 * xarid bosqichlari, biriktirish; StarsPaymee'da username ijarasi.
 *
 * QAYTA YOZILDI (2026-10-23): avvalgi versiya yupqa edi (uz ~120 so'z, ru tanasi
 * bo'sh, en yo'q). Slug growth seriyasida va himoyalangan — o'zgarmaydi; yangi slug
 * ochilmadi (bu niyat bilan raqobatlashardi). Endi to'liq qo'llanma + HowTo.
 *
 * FAKTLAR TEKSHIRILGAN (2026-10-23):
 * - fragment.com/about: birinchi bid 7 kunlik auksionni boshlaydi; eng yuqori
 *   bid; blokcheynga birinchi yetib kelgan bid; outbid → darhol qaytariladi;
 *   yakungacha blokcheynga tushmagan bid — pul qaytadi; sotuvchi maksimal narx
 *   qo'yishi mumkin (to'lansa auksion tugaydi); «Make an offer» — to'lov
 *   qaytarilmaydi, summa majburiy emas, hamyon ko'rinadi; egalik to'lagan
 *   hamyonga o'tadi; My Assets → Assign to Telegram; 1 oddiy + istalgancha
 *   kolleksiya nom; Settings > Username / Links order; botga biriktirish —
 *   bir martalik upgrade, doimiy (summa yozilmagan); komissiyalar: sotuvda 5%,
 *   oddiy nomni birinchi auksionga qo'yishda 5 Gram (bir marta), tarmoq ~1 Gram.
 * - telegram.org/faq: kolleksiya nom oddiy nom kabi ishlaydi, egalik TON
 *   blokcheynida, bir profilga bir nechta nom; Telegram kolleksiya nomni bera
 *   olmaydi — faqat egasi.
 * - Bot: giftRent moduli `category=username` (provayder /v1/rent/usernames/),
 *   frontend «Username ijarasi»; mexanizm NFT ijarasi bilan bir xil (173-post).
 *   Katalog ichidagi nomlar/narxlar auth talab qiladi — aniq va'da yozilmagan.
 * Tonkeeper/MyTonWallet — TON Connect hamyonlari sifatida misol, tavsiya emas.
 */

const RESALE_FEE = "5%";
const CONVERSION_FEE_GRAM = 5;
const NETWORK_FEE_GRAM = 1;
const AUCTION_DAYS = 7;

const SRC = {
  fragment: "https://fragment.com/about",
  faq: "https://telegram.org/faq",
};

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Oddiy @username bepul; qisqa va chiroyli nomlar esa <b>kolleksiya username</b> sifatida Fragment’da Gram
      (sobiq Toncoin) evaziga sotiladi. Yo‘l: TON hamyon tayyorlaysiz → fragment.com’da hamyon va Telegram’ni
      ulaysiz → nomni {AUCTION_DAYS} kunlik auksionda taklif bilan yoki belgilangan narxda olasiz → nom hamyoningizga
      tushadi va «Assign to Telegram» orqali profil, guruh yoki kanalga biriktiriladi. Sotishda {RESALE_FEE} komissiya,
      tranzaksiyada ~{NETWORK_FEE_GRAM} Gram tarmoq to‘lovi. Butunlay sotib olmasdan, muddatga kerak bo‘lsa —
      StarsPaymee’da username ijarasi, so‘mda.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "Kolleksiya username nima" },
          { href: "#narx", label: "Narx va komissiyalar" },
          { href: "#qadamlar", label: "Xarid: 4 qadam" },
          { href: "#auksion", label: "Auksion qoidalari" },
          { href: "#biriktirish", label: "Telegram’ga biriktirish" },
          { href: "#bot", label: "Botga biriktirish" },
          { href: "#xavf", label: "Xavfsizlik" },
          { href: "#ijara", label: "StarsPaymee’da username ijarasi — so‘mda" },
        ]}
      />

      <h2 id="nima">Kolleksiya username nima</h2>
      <p>
        Qisqa username — Telegram’dagi «chiroyli raqam» kabi: eslab qolish oson, brendga ishonch qo‘shadi. Telegram
        FAQ’iga ko‘ra kolleksiya username oddiy nom kabi ishlaydi — qidiruvda chiqadi, o‘z t.me havolasi bor — lekin
        egalik <b>TON blokcheynida</b> tasdiqlanadi va nom Fragment’da sotib olinadi, sotiladi yoki saqlab qo‘yiladi.
      </p>
      <KeyFacts label="Asosiy faktlar">
        <li>
          <b>Bitta oddiy + istalgancha kolleksiya nom:</b> profil, ochiq guruh yoki kanalga bir nechta kolleksiya
          username biriktirish mumkin, har birining o‘z havolasi bo‘ladi.
        </li>
        <li>
          <b>Telegram nomni bera olmaydi:</b> kolleksiya nomni faqat egasi boshqaradi — «Telegram’dan @nom olib
          beraman» degan har qanday taklif firibgarlik.
        </li>
        <li>
          <b>To‘lov — Gram’da:</b> Fragment TON blokcheynida ishlaydi; tanga 2026-yil iyundan Gram deb ataladi —{" "}
          <Link href="/blog/toncoin-endi-gram">Toncoin endi Gram</Link>.
        </li>
        <li>
          <b>Nom hamyonga tushadi:</b> xariddan keyin egalik to‘lov qilgan TON hamyoningizga o‘tadi, Telegram
          akkauntga emas — biriktirish alohida qadam.
        </li>
      </KeyFacts>

      <h2 id="narx">Narx va komissiyalar</h2>
      <p>
        Nomning o‘zi auksion yoki belgilangan narxda — bozorga bog‘liq. Unga Fragment’ning ochiq e’lon qilingan
        to‘lovlari qo‘shiladi; hammasi Gram’da, so‘mdagi qiymat Gram kursiga qarab o‘zgaradi.
      </p>
      <CompareTable
        headers={["Xarajat", "Qancha", "Kim to‘laydi"]}
        rows={[
          [<strong key="a">Nom narxi</strong>, "Auksonda eng yuqori taklif yoki belgilangan narx", "Xaridor"],
          [<strong key="b">Tarmoq (blokcheyn) to‘lovi</strong>, `~${NETWORK_FEE_GRAM} Gram, Fragment nazoratidan tashqarida`, "Xaridor"],
          [<strong key="c">«Make an offer» to‘lovi</strong>, "Qaytarilmaydi; kiritilgan summa majburiy emas", "Taklif beruvchi"],
          [<strong key="d">Sotuv komissiyasi</strong>, `${RESALE_FEE} — har bir bitimdan`, "Sotuvchi"],
          [<strong key="e">Konversiya to‘lovi</strong>, `${CONVERSION_FEE_GRAM} Gram — oddiy nom birinchi marta auksionga qo‘yilganda, bir marta`, "Sotuvchi"],
          [<strong key="f">Botga biriktirish (upgrade)</strong>, "Bir martalik, doimiy; summa Fragment’da ko‘rsatiladi", "Egasi"],
        ]}
      />
      <Notice label="Hisoblashda">
        Narxni so‘mga aylantirganda Gram kursini va ~{NETWORK_FEE_GRAM} Gram to‘lovni qo‘shing. Keyin sotmoqchi
        bo‘lsangiz, qaytib keladigan summadan {RESALE_FEE} komissiya ayriladi.
      </Notice>

      <h2 id="qadamlar">Xarid: 4 qadam</h2>
      <Steps>
        <Step title="1. Hamyon va Gram tayyorlang">
          TON Connect’ni qo‘llaydigan hamyon (masalan, Tonkeeper yoki MyTonWallet) o‘rnating, tiklash so‘zlarini
          (seed phrase) qog‘ozga yozib saqlang. Hamyonga nom narxi va to‘lovlar uchun yetarli Gram o‘tkazing.
        </Step>
        <Step title="2. Fragment’ga ulaning">
          fragment.com’da yuqori o‘ng burchakdagi «Connect TON» orqali hamyonni, «Connect Telegram» orqali Telegram
          akkauntingizni ulang (mobilda — burger menyuda). Biriktirish uchun ikkalasi ham kerak.
        </Step>
        <Step title="3. Nomni toping va oling">
          Qidiruvga nomni yozing. Holatlar: <b>On auction</b> — taklif (bid) berasiz; <b>For sale</b> — sotuvchi
          belgilagan narxda olasiz; <b>Taken</b> — nom band, «Make an offer» orqali egasiga taklif yuborish mumkin.
        </Step>
        <Step title="4. Telegram’ga biriktiring">
          Fragment’da My Assets → «Assign to Telegram» → profil, guruh yoki kanalni tanlang. So‘ng Telegram’da yoqing:
          profil uchun Sozlamalar → Username, guruh va kanal uchun «Links order» bo‘limi.
        </Step>
      </Steps>

      <h2 id="auksion">Auksion qoidalari</h2>
      <KeyFacts label="Fragment qoidalari">
        <li>
          <b>Birinchi taklif auksionni boshlaydi:</b> nom birinchi bid qo‘yilguncha cheksiz turadi, keyin{" "}
          {AUCTION_DAYS} kunlik auksion ketadi.
        </li>
        <li>
          <b>Eng yuqori taklif yutadi;</b> bir xil summada — blokcheynga birinchi yetib kelgan bid hisobga olinadi.
        </li>
        <li>
          <b>Sizdan oshirishsa</b> — avvalgi taklifingiz darhol qaytariladi (o‘zingiz oshirsangiz ham).
        </li>
        <li>
          <b>Bid auksion tugaguncha blokcheynga tushmasa</b> — pul qaytadi, lekin taklif hisobga olinmaydi.
        </li>
        <li>
          <b>Maksimal narx:</b> sotuvchi uni qo‘ygan bo‘lsa, shu summani to‘lagan odam auksionni darhol tugatadi.
        </li>
        <li>
          <b>Bekor qilish:</b> sotuvchi auksionni faqat birinchi biddan oldin bekor qila oladi.
        </li>
      </KeyFacts>

      <h2 id="biriktirish">Telegram’ga biriktirish</h2>
      <InfoGrid>
        <InfoCard emoji="👤" title="Profil">
          Fragment’da «Assign to Telegram» → profil. Keyin Telegram’da Sozlamalar → Username bo‘limida kolleksiya
          nomni yoqing — oddiy nomingiz ham qoladi.
        </InfoCard>
        <InfoCard emoji="📣" title="Guruh va kanal">
          Faqat o‘zingiz egalik qiladigan ochiq guruh yoki kanal. Yoqish — guruh/kanal turi sozlamalaridagi
          «Links order» ro‘yxatida.
        </InfoCard>
        <InfoCard emoji="🔁" title="O‘zgartirish mumkin">
          Biriktirish doimiy emas: nomni boshqa chatga qayta biriktirish yoki olib qo‘yish mumkin. Buning uchun
          ulangan hamyon nomni saqlayotgan hamyon bo‘lishi kerak.
        </InfoCard>
        <InfoCard emoji="🔗" title="Havolalar">
          Har bir kolleksiya nomning o‘z t.me/nom havolasi va nom.t.me manzili bo‘ladi — bir profilga bir nechta nom
          bir vaqtda ishlaydi.
        </InfoCard>
      </InfoGrid>

      <h2 id="bot">Botga biriktirish</h2>
      <p>
        Kolleksiya nomni botga ham qo‘yish mumkin, lekin buning uchun Fragment’da nomni «upgrade» qilib bir martalik
        to‘lov to‘lanadi; upgrade <b>qaytarib bo‘lmaydi</b> — nom doimiy ravishda bot nomi sifatida ishlatiladigan
        bo‘ladi. Summa Fragment sahifasida ko‘rsatiladi.
      </p>

      <h2 id="xavf">Xavfsizlik</h2>
      <Notice label="Ogohlantirish">
        Kolleksiya nomlar faqat fragment.com’da va faqat egasi tomonidan sotiladi. «Arzon tayyor @nom», «Telegram
        xodimi» yoki shaxsiy xabarda «hamyonni ulang» — firibgarlik; tiklash so‘zlarini hech kimga bermang.
      </Notice>
      <KeyFacts label="Xaridda tekshiring">
        <li>Manzil aynan fragment.com ekanini va ulangan hamyon o‘zingizniki ekanini.</li>
        <li>Nomdagi o‘xshash belgilarni (l va I, 0 va O) — soxta nomlar shunday yasaladi.</li>
        <li>«Make an offer» to‘lovi qaytarilmasligini va taklifingiz hamyoni ochiq ko‘rinishini.</li>
        <li>
          Akkauntingizda ikki bosqichli tasdiqlash yoqilganini —{" "}
          <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">2FA qo‘llanmasi</Link>.
        </li>
      </KeyFacts>

      <h2 id="ijara">StarsPaymee’da username ijarasi — so‘mda</h2>
      <p>
        Chiroyli @nom faqat aksiya, loyiha yoki brend tadbiri davriga kerak bo‘lsa, uni butunlay sotib olish shart
        emas. @StarsPaymee_bot’da <b>«Username ijarasi»</b> bo‘limi bor: katalogdagi kolleksiya nomni e’londagi
        muddatga olasiz, to‘lov so‘mda — Gram sotib olish kerak emas.
      </p>
      <KeyFacts label="Qanday ishlaydi">
        <li>
          <b>Katalog jonli:</b> ijaraga tayyor nomlar va narxlar botda ko‘rinadi; har e’londa eng kam va eng ko‘p kun
          bor.
        </li>
        <li>
          <b>To‘lov so‘mda</b> — UzCard/HUMO o‘tkazma, Click, Payme, Uzum yoki Paynet.
        </li>
        <li>
          <b>Fragment havolasi:</b> ijara faollashgach bot fragment.com → Connect Wallet → TON Connect havolasini
          so‘raydi; nom Fragment hisobingizda paydo bo‘ladi va «Assign to Telegram» orqali biriktiriladi. Qadamlar
          NFT ijarasi bilan bir xil — <Link href="/blog/telegram-nft-sovga-ijarasi">NFT sovg‘a ijarasi qo‘llanmasi</Link>.
        </li>
        <li>
          <b>Nom sizniki bo‘lmaydi:</b> sotish yoki o‘tkazish mumkin emas; muddat tugagach u avtomatik qaytariladi.
        </li>
        <li>
          <b>StarsPaymee username sotmaydi:</b> butunlay sotib olish — faqat Fragment’da, yuqoridagi qadamlar bilan.
        </li>
      </KeyFacts>
      <InlineCta text="Username ijarasi — katalog, muddat va narx botda, to‘lov so‘mda." />
      <p>
        Maqsadingiz nom emas, Stars yoki Premium bo‘lsa, hamyon umuman kerak emas: so‘mda, @username bo‘yicha —{" "}
        <Link href="/stars">Telegram Stars</Link> va <Link href="/premium">Telegram Premium</Link>. Premium’ni
        username orqali sovg‘a qilish — <Link href="/blog/telegram-premium-sovga-username-orqali">alohida qo‘llanma</Link>.
      </p>
      <InlineCta text="Stars yoki Premium kerakmi? So‘mda, username bilan, hamyonsiz — 5 soniyada." product={{ kind: "premium", months: 3 }} />
      <GrowthSeriesAside locale="uz" />

      <Sources
        label="Manbalar"
        items={[
          { href: SRC.fragment, label: "Fragment — About", note: "auksion qoidalari, Assign to Telegram, bot upgrade, komissiyalar (5%, 5 Gram, ~1 Gram)" },
          { href: SRC.faq, label: "Telegram FAQ — kolleksiya usernamelar", note: "oddiy nom kabi ishlaydi, egalik TON blokcheynida, bir profilga bir nechta nom" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Обычный @username бесплатен, а короткие красивые имена продаются как <b>коллекционные username</b> на Fragment
      за Gram (бывший Toncoin). Путь: готовите TON-кошелёк → на fragment.com подключаете кошелёк и Telegram → берёте
      имя ставкой на {AUCTION_DAYS}-дневном аукционе или по фиксированной цене → имя приходит в ваш кошелёк и через
      «Assign to Telegram» привязывается к профилю, группе или каналу. При продаже комиссия {RESALE_FEE}, за транзакцию
      ~{NETWORK_FEE_GRAM} Gram сетевого сбора. Если имя нужно на срок, а не навсегда — аренда username в StarsPaymee, за
      сумы.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nima", label: "Что такое коллекционный username" },
          { href: "#narx", label: "Цена и комиссии" },
          { href: "#qadamlar", label: "Покупка: 4 шага" },
          { href: "#auksion", label: "Правила аукциона" },
          { href: "#biriktirish", label: "Привязка к Telegram" },
          { href: "#bot", label: "Привязка к боту" },
          { href: "#xavf", label: "Безопасность" },
          { href: "#ijara", label: "Аренда username в StarsPaymee — за сумы" },
        ]}
      />

      <h2 id="nima">Что такое коллекционный username</h2>
      <p>
        Короткий username — как «красивый номер» в Telegram: легко запомнить, добавляет доверия бренду. По Telegram
        FAQ коллекционный username работает как обычный — виден в поиске, имеет свою ссылку t.me — но владение
        подтверждается в <b>блокчейне TON</b>, а само имя покупают, продают или хранят на Fragment.
      </p>
      <KeyFacts label="Главные факты">
        <li>
          <b>Один обычный + сколько угодно коллекционных:</b> к профилю, открытой группе или каналу можно привязать
          несколько коллекционных username, у каждого своя ссылка.
        </li>
        <li>
          <b>Telegram имя не выдаёт:</b> коллекционным именем управляет только владелец — любое предложение «достать
          @имя через Telegram» — мошенничество.
        </li>
        <li>
          <b>Оплата — в Gram:</b> Fragment работает в блокчейне TON; монета с июня 2026 называется Gram —{" "}
          <Link href="/blog/toncoin-endi-gram">Toncoin теперь Gram</Link>.
        </li>
        <li>
          <b>Имя приходит в кошелёк:</b> после покупки владение переходит TON-кошельку, которым вы платили, а не
          аккаунту Telegram — привязка отдельный шаг.
        </li>
      </KeyFacts>

      <h2 id="narx">Цена и комиссии</h2>
      <p>
        Само имя стоит столько, сколько решит аукцион или продавец. К этому добавляются открыто объявленные сборы
        Fragment; всё в Gram, сумма в сумах меняется вместе с курсом Gram.
      </p>
      <CompareTable
        headers={["Расход", "Сколько", "Кто платит"]}
        rows={[
          [<strong key="a">Цена имени</strong>, "Высшая ставка на аукционе или фиксированная цена", "Покупатель"],
          [<strong key="b">Сетевой (блокчейн) сбор</strong>, `~${NETWORK_FEE_GRAM} Gram, вне контроля Fragment`, "Покупатель"],
          [<strong key="c">Сбор за «Make an offer»</strong>, "Не возвращается; указанная сумма ни к чему не обязывает", "Автор предложения"],
          [<strong key="d">Комиссия с продажи</strong>, `${RESALE_FEE} — с каждой сделки`, "Продавец"],
          [<strong key="e">Сбор за конвертацию</strong>, `${CONVERSION_FEE_GRAM} Gram — когда обычное имя впервые выставляют на аукцион, один раз`, "Продавец"],
          [<strong key="f">Привязка к боту (upgrade)</strong>, "Разовый, навсегда; сумма показывается на Fragment", "Владелец"],
        ]}
      />
      <Notice label="При расчёте">
        Переводя цену в сумы, добавьте курс Gram и ~{NETWORK_FEE_GRAM} Gram сбора. Если потом будете продавать, из
        выручки вычтут {RESALE_FEE} комиссии.
      </Notice>

      <h2 id="qadamlar">Покупка: 4 шага</h2>
      <Steps>
        <Step title="1. Подготовьте кошелёк и Gram">
          Установите кошелёк с поддержкой TON Connect (например, Tonkeeper или MyTonWallet), запишите фразу
          восстановления (seed phrase) на бумагу. Переведите в кошелёк Gram на цену имени и сборы.
        </Step>
        <Step title="2. Подключитесь к Fragment">
          На fragment.com кнопкой «Connect TON» в правом верхнем углу подключите кошелёк, через «Connect Telegram» —
          аккаунт Telegram (на телефоне — в бургер-меню). Для привязки нужны оба подключения.
        </Step>
        <Step title="3. Найдите имя и купите">
          Введите имя в поиск. Статусы: <b>On auction</b> — делаете ставку; <b>For sale</b> — покупаете по цене
          продавца; <b>Taken</b> — имя занято, через «Make an offer» можно отправить предложение владельцу.
        </Step>
        <Step title="4. Привяжите к Telegram">
          На Fragment: My Assets → «Assign to Telegram» → выберите профиль, группу или канал. Затем включите в Telegram:
          для профиля Настройки → Имя пользователя, для группы и канала — раздел «Links order».
        </Step>
      </Steps>

      <h2 id="auksion">Правила аукциона</h2>
      <KeyFacts label="Правила Fragment">
        <li>
          <b>Первая ставка запускает аукцион:</b> имя ждёт первой ставки неограниченно, затем идёт {AUCTION_DAYS}-дневный
          аукцион.
        </li>
        <li>
          <b>Побеждает высшая ставка;</b> при равной сумме засчитывается ставка, первой попавшая в блокчейн.
        </li>
        <li>
          <b>Если вас перебили</b> — предыдущая ставка возвращается сразу (даже если перебили вы сами).
        </li>
        <li>
          <b>Ставка не попала в блокчейн до конца аукциона</b> — деньги вернутся, но ставка не засчитается.
        </li>
        <li>
          <b>Максимальная цена:</b> если продавец её задал, оплативший эту сумму сразу завершает аукцион.
        </li>
        <li>
          <b>Отмена:</b> продавец может отменить аукцион только до первой ставки.
        </li>
      </KeyFacts>

      <h2 id="biriktirish">Привязка к Telegram</h2>
      <InfoGrid>
        <InfoCard emoji="👤" title="Профиль">
          На Fragment «Assign to Telegram» → профиль. Затем в Telegram в Настройки → Имя пользователя включите
          коллекционное имя — обычное имя тоже остаётся.
        </InfoCard>
        <InfoCard emoji="📣" title="Группа и канал">
          Только открытая группа или канал, которыми вы владеете. Включение — в списке «Links order» в настройках типа
          группы/канала.
        </InfoCard>
        <InfoCard emoji="🔁" title="Можно менять">
          Привязка не навсегда: имя можно перепривязать к другому чату или снять. Для этого подключённый кошелёк должен
          быть тем, где хранится имя.
        </InfoCard>
        <InfoCard emoji="🔗" title="Ссылки">
          У каждого коллекционного имени своя ссылка t.me/имя и адрес имя.t.me — несколько имён на один профиль
          работают одновременно.
        </InfoCard>
      </InfoGrid>

      <h2 id="bot">Привязка к боту</h2>
      <p>
        Коллекционное имя можно назначить и боту, но для этого на Fragment имя «апгрейдят» с разовой оплатой; апгрейд{" "}
        <b>необратим</b> — имя навсегда становится именем для бота. Сумма показывается на странице Fragment.
      </p>

      <h2 id="xavf">Безопасность</h2>
      <Notice label="Предупреждение">
        Коллекционные имена продаются только на fragment.com и только владельцем. «Дешёвое готовое @имя», «сотрудник
        Telegram» или «подключите кошелёк» в личных сообщениях — мошенничество; фразу восстановления никому не
        передавайте.
      </Notice>
      <KeyFacts label="Проверьте при покупке">
        <li>Что адрес именно fragment.com и подключён ваш собственный кошелёк.</li>
        <li>Похожие символы в имени (l и I, 0 и O) — так делают поддельные имена.</li>
        <li>Что сбор за «Make an offer» не возвращается, а кошелёк вашего предложения виден публично.</li>
        <li>
          Что в аккаунте включена двухэтапная аутентификация —{" "}
          <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">руководство по 2FA</Link>.
        </li>
      </KeyFacts>

      <h2 id="ijara">Аренда username в StarsPaymee — за сумы</h2>
      <p>
        Если красивое @имя нужно только на время акции, проекта или события бренда, покупать его навсегда не
        обязательно. В @StarsPaymee_bot есть раздел <b>«Аренда username»</b>: коллекционное имя из каталога берётся
        на срок из объявления, оплата в сумах — покупать Gram не нужно.
      </p>
      <KeyFacts label="Как это работает">
        <li>
          <b>Живой каталог:</b> готовые к аренде имена и цены видны в боте; в каждом объявлении указаны минимальный и
          максимальный срок в днях.
        </li>
        <li>
          <b>Оплата в сумах</b> — перевод UzCard/HUMO, Click, Payme, Uzum или Paynet.
        </li>
        <li>
          <b>Ссылка Fragment:</b> после активации аренды бот запросит ссылку fragment.com → Connect Wallet → TON
          Connect; имя появится в вашем аккаунте Fragment и привязывается через «Assign to Telegram». Шаги те же, что
          при аренде NFT — <Link href="/blog/telegram-nft-sovga-ijarasi">руководство по аренде NFT-подарка</Link>.
        </li>
        <li>
          <b>Имя не становится вашим:</b> продать или передать его нельзя; по окончании срока оно возвращается
          автоматически.
        </li>
        <li>
          <b>StarsPaymee username не продаёт:</b> покупка насовсем — только на Fragment по шагам выше.
        </li>
      </KeyFacts>
      <InlineCta text="Аренда username — каталог, срок и цена в боте, оплата в сумах." />
      <p>
        Если вам нужны не имя, а Stars или Premium, кошелёк не нужен вовсе: в сумах, по @username —{" "}
        <Link href="/stars">Telegram Stars</Link> и <Link href="/premium">Telegram Premium</Link>. Подарить Premium по
        username — <Link href="/blog/telegram-premium-sovga-username-orqali">отдельное руководство</Link>.
      </p>
      <InlineCta text="Нужны Stars или Premium? В сумах, по username, без кошелька — за 5 секунд." product={{ kind: "premium", months: 3 }} />
      <GrowthSeriesAside locale="ru" />

      <Sources
        label="Источники"
        items={[
          { href: SRC.fragment, label: "Fragment — About", note: "правила аукциона, Assign to Telegram, апгрейд для бота, комиссии (5%, 5 Gram, ~1 Gram)" },
          { href: SRC.faq, label: "Telegram FAQ — коллекционные username", note: "работают как обычные, владение в блокчейне TON, несколько имён на профиль" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      A regular @username is free; short, memorable names are sold as <b>collectible usernames</b> on Fragment for Gram
      (formerly Toncoin). The route: prepare a TON wallet → connect the wallet and Telegram on fragment.com → take the
      name with a bid in a {AUCTION_DAYS}-day auction or at a fixed price → the name lands in your wallet and is attached
      to a profile, group or channel via “Assign to Telegram”. Selling carries a {RESALE_FEE} fee, each transaction
      ~{NETWORK_FEE_GRAM} Gram in network fees. If you need a name for a period rather than forever — username rental at
      StarsPaymee, in som.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#nima", label: "What a collectible username is" },
          { href: "#narx", label: "Price and fees" },
          { href: "#qadamlar", label: "Buying: 4 steps" },
          { href: "#auksion", label: "Auction rules" },
          { href: "#biriktirish", label: "Attaching to Telegram" },
          { href: "#bot", label: "Attaching to a bot" },
          { href: "#xavf", label: "Safety" },
          { href: "#ijara", label: "Username rental at StarsPaymee — in som" },
        ]}
      />

      <h2 id="nima">What a collectible username is</h2>
      <p>
        A short username is Telegram’s version of a “vanity number”: easy to remember and good for a brand. According to
        the Telegram FAQ a collectible username works like a regular one — it appears in search and has its own t.me
        link — but ownership is verified on the <b>TON blockchain</b>, and the name is bought, sold or kept on Fragment.
      </p>
      <KeyFacts label="Key facts">
        <li>
          <b>One basic + any number of collectible names:</b> a profile, public group or channel can carry several
          collectible usernames, each with its own link.
        </li>
        <li>
          <b>Telegram cannot hand out names:</b> a collectible name is managed only by its owner — any offer to “get you
          a @name through Telegram” is a scam.
        </li>
        <li>
          <b>Payment in Gram:</b> Fragment runs on the TON blockchain; the coin has been called Gram since June 2026 —{" "}
          <Link href="/blog/toncoin-endi-gram">Toncoin is now Gram</Link>.
        </li>
        <li>
          <b>The name goes to a wallet:</b> after purchase, ownership passes to the TON wallet you paid with, not to your
          Telegram account — attaching is a separate step.
        </li>
      </KeyFacts>

      <h2 id="narx">Price and fees</h2>
      <p>
        The name itself costs whatever the auction or the seller decides. On top come Fragment’s published fees; all in
        Gram, so the som equivalent moves with the Gram rate.
      </p>
      <CompareTable
        headers={["Cost", "How much", "Who pays"]}
        rows={[
          [<strong key="a">Name price</strong>, "The highest auction bid or the fixed price", "Buyer"],
          [<strong key="b">Network (blockchain) fee</strong>, `~${NETWORK_FEE_GRAM} Gram, outside Fragment’s control`, "Buyer"],
          [<strong key="c">“Make an offer” fee</strong>, "Non-refundable; the amount entered is not binding", "Offer maker"],
          [<strong key="d">Sale commission</strong>, `${RESALE_FEE} — on each transaction`, "Seller"],
          [<strong key="e">Conversion fee</strong>, `${CONVERSION_FEE_GRAM} Gram — when a basic name is first auctioned, once`, "Seller"],
          [<strong key="f">Attaching to a bot (upgrade)</strong>, "One-time, permanent; the amount is shown on Fragment", "Owner"],
        ]}
      />
      <Notice label="When budgeting">
        Converting the price to som, add the Gram rate and the ~{NETWORK_FEE_GRAM} Gram fee. If you sell later, the{" "}
        {RESALE_FEE} commission comes out of the proceeds.
      </Notice>

      <h2 id="qadamlar">Buying: 4 steps</h2>
      <Steps>
        <Step title="1. Prepare a wallet and Gram">
          Install a wallet that supports TON Connect (for example Tonkeeper or MyTonWallet) and write the recovery
          (seed) phrase on paper. Send enough Gram to the wallet for the name price and the fees.
        </Step>
        <Step title="2. Connect to Fragment">
          On fragment.com use “Connect TON” in the top-right corner for the wallet and “Connect Telegram” for your
          Telegram account (on mobile it is in the burger menu). Attaching needs both connections.
        </Step>
        <Step title="3. Find the name and buy">
          Type the name into the search. Statuses: <b>On auction</b> — you place a bid; <b>For sale</b> — you buy at the
          seller’s price; <b>Taken</b> — the name is in use, but you can send the owner a proposal via “Make an offer”.
        </Step>
        <Step title="4. Attach to Telegram">
          On Fragment: My Assets → “Assign to Telegram” → pick a profile, group or channel. Then enable it in Telegram:
          Settings → Username for a profile, the “Links order” section for groups and channels.
        </Step>
      </Steps>

      <h2 id="auksion">Auction rules</h2>
      <KeyFacts label="Fragment’s rules">
        <li>
          <b>The first bid starts the auction:</b> a name waits for a first bid indefinitely, then a {AUCTION_DAYS}-day
          auction runs.
        </li>
        <li>
          <b>The highest bid wins;</b> at the same amount, the bid that reaches the blockchain first counts.
        </li>
        <li>
          <b>If you are outbid</b> — your previous bid is refunded immediately (even if you outbid yourself).
        </li>
        <li>
          <b>A bid not recorded on the blockchain before the end</b> — the money comes back, but the bid does not count.
        </li>
        <li>
          <b>Maximum price:</b> if the seller set one, whoever pays that amount ends the auction immediately.
        </li>
        <li>
          <b>Cancelling:</b> the seller can cancel an auction only before the first bid.
        </li>
      </KeyFacts>

      <h2 id="biriktirish">Attaching to Telegram</h2>
      <InfoGrid>
        <InfoCard emoji="👤" title="Profile">
          On Fragment, “Assign to Telegram” → profile. Then in Telegram enable the collectible name under Settings →
          Username — your basic name stays too.
        </InfoCard>
        <InfoCard emoji="📣" title="Group and channel">
          Only a public group or channel you own. Enable it in the “Links order” list in the group or channel type
          settings.
        </InfoCard>
        <InfoCard emoji="🔁" title="Changeable">
          Attaching is not permanent: a name can be reassigned to another chat or removed. The connected wallet must be
          the one holding the name.
        </InfoCard>
        <InfoCard emoji="🔗" title="Links">
          Every collectible name has its own t.me/name link and name.t.me address — several names work on one profile
          at the same time.
        </InfoCard>
      </InfoGrid>

      <h2 id="bot">Attaching to a bot</h2>
      <p>
        A collectible name can be assigned to a bot too, but for that the name is “upgraded” on Fragment with a one-time
        payment; the upgrade is <b>permanent</b> — the name becomes a bot name for good. The amount is shown on the
        Fragment page.
      </p>

      <h2 id="xavf">Safety</h2>
      <Notice label="Warning">
        Collectible names are sold only on fragment.com and only by their owner. A “cheap ready @name”, a “Telegram
        employee” or a “connect your wallet” message in a DM is a scam; never share your recovery phrase.
      </Notice>
      <KeyFacts label="Check before buying">
        <li>That the address is exactly fragment.com and the connected wallet is your own.</li>
        <li>Look-alike characters in the name (l and I, 0 and O) — fake names are built that way.</li>
        <li>That the “Make an offer” fee is non-refundable and the wallet behind your offer is publicly visible.</li>
        <li>
          That two-step verification is on in your account —{" "}
          <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">the 2FA guide</Link>.
        </li>
      </KeyFacts>

      <h2 id="ijara">Username rental at StarsPaymee — in som</h2>
      <p>
        If a nice @name is needed only for a promotion, a project or a brand event, buying it outright is unnecessary.
        @StarsPaymee_bot has a <b>“Username rental”</b> section: you take a collectible name from the catalogue for the
        term in its listing, paying in som — no need to buy Gram.
      </p>
      <KeyFacts label="How it works">
        <li>
          <b>A live catalogue:</b> names ready for rent and their prices are shown in the bot; every listing has a
          minimum and a maximum number of days.
        </li>
        <li>
          <b>Payment in som</b> — UzCard/HUMO transfer, Click, Payme, Uzum or Paynet.
        </li>
        <li>
          <b>The Fragment link:</b> once the rental is active, the bot asks for a fragment.com → Connect Wallet → TON
          Connect link; the name appears in your Fragment account and is attached via “Assign to Telegram”. The steps
          match NFT rental — <Link href="/blog/telegram-nft-sovga-ijarasi">the NFT gift rental guide</Link>.
        </li>
        <li>
          <b>The name is not yours:</b> it cannot be sold or transferred; when the term ends it is returned
          automatically.
        </li>
        <li>
          <b>StarsPaymee does not sell usernames:</b> buying outright happens only on Fragment, by the steps above.
        </li>
      </KeyFacts>
      <InlineCta text="Username rental — catalogue, term and price in the bot, payment in som." />
      <p>
        If what you need is Stars or Premium rather than a name, no wallet is needed at all: in som, by @username —{" "}
        <Link href="/stars">Telegram Stars</Link> and <Link href="/premium">Telegram Premium</Link>. Gifting Premium by
        username — <Link href="/blog/telegram-premium-sovga-username-orqali">a separate guide</Link>.
      </p>
      <InlineCta text="Need Stars or Premium? In som, by username, no wallet — within 5 seconds." product={{ kind: "premium", months: 3 }} />
      <GrowthSeriesAside locale="en" />

      <Sources
        label="Sources"
        items={[
          { href: SRC.fragment, label: "Fragment — About", note: "auction rules, Assign to Telegram, bot upgrade, fees (5%, 5 Gram, ~1 Gram)" },
          { href: SRC.faq, label: "Telegram FAQ — collectible usernames", note: "work like regular names, ownership on the TON blockchain, several names per profile" },
        ]}
      />
    </>
  );
}

const faqUz = [
  {
    question: "Band (Taken) username’ni sotib olsa bo‘ladimi?",
    answer:
      "Faqat egasi rozi bo‘lsa. Fragment’da «Make an offer» orqali taklif yuborasiz: taklif to‘lovi qaytarilmaydi, kiritilgan summa majburiy emas, taklif anonim yetkaziladi, lekin hamyoningiz ochiq ko‘rinadi. Nom bo‘shasa, xabar olish uchun obuna bo‘lish mumkin.",
  },
  {
    question: "Auksionda yutqazsam pulim nima bo‘ladi?",
    answer:
      "Kimdir sizdan oshirsa, avvalgi taklifingiz darhol qaytariladi. Bid auksion tugaguncha blokcheynga tushmagan bo‘lsa ham pul qaytadi — faqat taklif hisobga olinmaydi.",
  },
  {
    question: "Auksion qancha davom etadi?",
    answer: `Birinchi taklif qo‘yilgach ${AUCTION_DAYS} kun. Sotuvchi maksimal narx belgilagan bo‘lsa, shu summani to‘lagan odam auksionni darhol tugatadi.`,
  },
  {
    question: "Bir profilga nechta username qo‘ysa bo‘ladi?",
    answer:
      "Bitta oddiy va istalgancha kolleksiya username. Bir nechta kolleksiya nom bir vaqtda ishlaydi, har birining o‘z t.me havolasi bo‘ladi.",
  },
  {
    question: "Username’ni botga ham qo‘ysa bo‘ladimi?",
    answer:
      "Ha, lekin Fragment’da nomni bir martalik to‘lov bilan «upgrade» qilish kerak va bu qaytarib bo‘lmaydigan qadam — nom doimiy bot nomi bo‘ladi. Summa Fragment sahifasida ko‘rsatiladi.",
  },
  {
    question: "Fragment’da qanday to‘lanadi?",
    answer: `Gram (sobiq Toncoin) bilan, TON Connect hamyoni orqali; har tranzaksiyaga ~${NETWORK_FEE_GRAM} Gram tarmoq to‘lovi qo‘shiladi. O‘zbekiston kartasi yoki so‘m Fragment’da ishlamaydi.`,
  },
  {
    question: "Komissiyalar qancha?",
    answer: `Sotuvda ${RESALE_FEE}; oddiy nom birinchi marta auksionga qo‘yilganda bir martalik ${CONVERSION_FEE_GRAM} Gram konversiya to‘lovi; tarmoq to‘lovi ~${NETWORK_FEE_GRAM} Gram; «Make an offer» to‘lovi qaytarilmaydi.`,
  },
  {
    question: "Sotib olgach Telegram’da qanday yoqiladi?",
    answer:
      "Fragment’da My Assets → «Assign to Telegram» → profil, guruh yoki kanal. Keyin Telegram’da: profil uchun Sozlamalar → Username, guruh va kanal uchun turi sozlamalaridagi «Links order».",
  },
  {
    question: "StarsPaymee username sotadimi?",
    answer:
      "Sotmaydi. @StarsPaymee_bot’da username ijarasi bor: katalogdagi kolleksiya nomni e’londagi muddatga so‘mda olasiz, muddat tugagach u qaytariladi. Butunlay sotib olish — faqat Fragment’da.",
  },
  {
    question: "Faqat Stars yoki Premium kerak bo‘lsa, hamyon kerakmi?",
    answer:
      "Yo‘q. Stars va Premium StarsPaymee’da so‘mda, @username bo‘yicha olinadi — Gram, hamyon va Fragment kerak emas.",
  },
];

const faqRu = [
  {
    question: "Можно ли купить занятый (Taken) username?",
    answer:
      "Только если согласится владелец. На Fragment отправляете предложение через «Make an offer»: сбор за предложение не возвращается, указанная сумма ни к чему не обязывает, предложение доставляется анонимно, но ваш кошелёк виден публично. Если имя освободится, можно подписаться на уведомление.",
  },
  {
    question: "Что с деньгами, если я проиграл аукцион?",
    answer:
      "Если кто-то перебил вашу ставку, предыдущая сумма возвращается сразу. Если ставка не попала в блокчейн до конца аукциона, деньги тоже вернутся — просто ставка не засчитается.",
  },
  {
    question: "Сколько длится аукцион?",
    answer: `${AUCTION_DAYS} дней после первой ставки. Если продавец задал максимальную цену, оплативший её сразу завершает аукцион.`,
  },
  {
    question: "Сколько username можно привязать к одному профилю?",
    answer:
      "Один обычный и сколько угодно коллекционных. Несколько коллекционных имён работают одновременно, у каждого своя ссылка t.me.",
  },
  {
    question: "Можно ли назначить username боту?",
    answer:
      "Да, но на Fragment имя нужно «апгрейдить» с разовой оплатой, и это необратимо — имя навсегда становится именем для бота. Сумма показывается на странице Fragment.",
  },
  {
    question: "Как платить на Fragment?",
    answer: `В Gram (бывший Toncoin) через кошелёк с TON Connect; к каждой транзакции добавляется ~${NETWORK_FEE_GRAM} Gram сетевого сбора. Узбекская карта и сумы на Fragment не работают.`,
  },
  {
    question: "Какие комиссии?",
    answer: `При продаже ${RESALE_FEE}; при первом выставлении обычного имени на аукцион разовый сбор ${CONVERSION_FEE_GRAM} Gram; сетевой сбор ~${NETWORK_FEE_GRAM} Gram; сбор за «Make an offer» не возвращается.`,
  },
  {
    question: "Как включить имя в Telegram после покупки?",
    answer:
      "На Fragment: My Assets → «Assign to Telegram» → профиль, группа или канал. Затем в Telegram: для профиля Настройки → Имя пользователя, для группы и канала — «Links order» в настройках типа.",
  },
  {
    question: "Продаёт ли StarsPaymee username?",
    answer:
      "Нет. В @StarsPaymee_bot есть аренда username: коллекционное имя из каталога берётся на срок из объявления за сумы, по окончании срока оно возвращается. Купить насовсем — только на Fragment.",
  },
  {
    question: "Если нужны только Stars или Premium, нужен ли кошелёк?",
    answer: "Нет. Stars и Premium покупаются в StarsPaymee за сумы по @username — Gram, кошелёк и Fragment не нужны.",
  },
];

const faqEn = [
  {
    question: "Can I buy a username that is Taken?",
    answer:
      "Only if the owner agrees. On Fragment you send a proposal via “Make an offer”: the offer fee is non-refundable, the amount entered is not binding, the offer is delivered anonymously but your wallet is publicly visible. You can subscribe to be notified if the name becomes available.",
  },
  {
    question: "What happens to my money if I lose the auction?",
    answer:
      "If someone outbids you, your previous bid is refunded immediately. If your bid does not reach the blockchain before the auction ends, the money comes back too — the bid simply does not count.",
  },
  {
    question: "How long does an auction last?",
    answer: `${AUCTION_DAYS} days after the first bid. If the seller set a maximum price, whoever pays it ends the auction immediately.`,
  },
  {
    question: "How many usernames can one profile have?",
    answer: "One basic and any number of collectible usernames. Several collectible names work at the same time, each with its own t.me link.",
  },
  {
    question: "Can a username be assigned to a bot?",
    answer:
      "Yes, but on Fragment the name has to be “upgraded” with a one-time payment, and that is irreversible — the name becomes a bot name for good. The amount is shown on the Fragment page.",
  },
  {
    question: "How do I pay on Fragment?",
    answer: `In Gram (formerly Toncoin) through a TON Connect wallet; each transaction adds ~${NETWORK_FEE_GRAM} Gram in network fees. An Uzbek card or som does not work on Fragment.`,
  },
  {
    question: "What are the fees?",
    answer: `${RESALE_FEE} on a sale; a one-time ${CONVERSION_FEE_GRAM} Gram conversion fee when a basic name is first auctioned; ~${NETWORK_FEE_GRAM} Gram network fee; the “Make an offer” fee is non-refundable.`,
  },
  {
    question: "How do I enable the name in Telegram after buying?",
    answer:
      "On Fragment: My Assets → “Assign to Telegram” → profile, group or channel. Then in Telegram: Settings → Username for a profile, “Links order” in the type settings for groups and channels.",
  },
  {
    question: "Does StarsPaymee sell usernames?",
    answer:
      "No. @StarsPaymee_bot offers username rental: a collectible name from the catalogue for the term in its listing, paid in som, returned when the term ends. Buying outright happens only on Fragment.",
  },
  {
    question: "If I only need Stars or Premium, do I need a wallet?",
    answer: "No. Stars and Premium are bought at StarsPaymee in som by @username — no Gram, wallet or Fragment needed.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "howto",
  datePublished: "2026-07-24",
  dateModified: "2026-10-23",
  keywords: [
    "telegram username sotib olish",
    "fragment username",
    "qisqa username telegram",
    "kolleksiya username",
    "telegram username auksion",
    "username ijarasi",
    "купить username telegram",
    "fragment аукцион username",
    "коллекционный username",
    "buy telegram username fragment",
  ],
  howToSteps: [
    { name: "Hamyon va Gram tayyorlang", text: "TON Connect hamyoni o‘rnating, seed so‘zlarini saqlang, nom narxi va to‘lovlar uchun Gram o‘tkazing." },
    { name: "Fragment’ga ulaning", text: "fragment.com’da Connect TON orqali hamyonni, Connect Telegram orqali akkauntni ulang." },
    { name: "Nomni toping va oling", text: "On auction — taklif bering, For sale — belgilangan narxda oling, Taken — Make an offer yuboring." },
    { name: "Telegram’ga biriktiring", text: "My Assets → Assign to Telegram → profil, guruh yoki kanal; Telegram’da Sozlamalar → Username yoki Links order orqali yoqing." },
  ],
  locales: {
    uz: {
      title: "Telegram username sotib olish: Fragment’da kolleksiya @nom — auksion, narx va xarid bosqichlari (2026)",
      excerpt:
        "Kolleksiya username nima, Fragment’da narx va komissiyalar (5%, 5 Gram, ~1 Gram), hamyon tayyorlashdan profilga biriktirishgacha 4 qadam, auksion qoidalari, botga biriktirish, xavfsizlik va StarsPaymee’da so‘mda username ijarasi.",
      metaTitle: "Telegram username sotib olish — Fragment auksioni va narxi",
      metaDescription: "Fragment’da Telegram username sotib olish: Gram hamyoni, 7 kunlik auksion, Make an offer, profilga biriktirish, 5% komissiya; so‘mda username ijarasi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Nom muddatga kerakmi? Ijaraga oling — so‘mda",
      ctaBody: "@StarsPaymee_bot’da username ijarasi: katalogdagi kolleksiya nom e’londagi muddatga, to‘lov so‘mda. Stars va Premium ham shu yerda — hamyonsiz.",
      faq: faqUz,
    },
    ru: {
      title: "Купить username в Telegram: коллекционное @имя на Fragment — аукцион, цена и шаги покупки (2026)",
      excerpt:
        "Что такое коллекционный username, цена и комиссии Fragment (5%, 5 Gram, ~1 Gram), 4 шага от кошелька до привязки к профилю, правила аукциона, привязка к боту, безопасность и аренда username за сумы в StarsPaymee.",
      metaTitle: "Купить username Telegram — аукцион и цена на Fragment",
      metaDescription: "Купить username Telegram на Fragment: кошелёк Gram, 7-дневный аукцион, Make an offer, привязка к профилю, комиссия 5%; аренда username за сумы.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Имя нужно на срок? Возьмите в аренду — за сумы",
      ctaBody: "Аренда username в @StarsPaymee_bot: коллекционное имя из каталога на срок из объявления, оплата в сумах. Stars и Premium — там же, без кошелька.",
      faq: faqRu,
    },
    en: {
      title: "Buying a Telegram username: a collectible @name on Fragment — auction, price and purchase steps (2026)",
      excerpt:
        "What a collectible username is, Fragment’s price and fees (5%, 5 Gram, ~1 Gram), 4 steps from wallet to profile, auction rules, attaching to a bot, safety, and username rental in som at StarsPaymee.",
      metaTitle: "Buying a Telegram username — Fragment auction and price",
      metaDescription: "Buying a Telegram username on Fragment: a Gram wallet, the 7-day auction, Make an offer, attaching to a profile, the 5% fee; username rental in som.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need a name for a while? Rent it — in som",
      ctaBody: "Username rental in @StarsPaymee_bot: a collectible name from the catalogue for the listed term, paid in som. Stars and Premium are there too — no wallet.",
      faq: faqEn,
    },
  },
};
