import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, KeyFacts, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "premium-bor-odamga-premium-sovga";

/**
 * «Holat → xarid usuli → mumkin bo‘lgan harakat» jadvali.
 *
 * MUHIM: bu yerda barcha usulga bitta «ha, muddat qo‘shiladi» javobi
 * berilmaydi. Telegramning ochiq FAQ’ida faol obunali akkauntga sovg‘a
 * tushganda nima bo‘lishi yozilmagan, shuning uchun har bir usulning sharti
 * alohida ko‘rsatiladi va tekshirish tavsiya etiladi.
 */
function MethodTable({ locale }: { locale: "uz" | "ru" | "en" }) {
  const copy = {
    uz: {
      headers: ["Xarid usuli", "Qabul qiluvchida Premium bor bo‘lsa", "Nima qilish kerak"],
      rows: [
        [
          "Telegram ichidan sovg‘a",
          "Ilova yuborishdan oldin o‘zi tekshiradi va mumkin bo‘lmasa sababni ko‘rsatadi",
          "Ekrandagi xabarni o‘qing — u aniq sababni aytadi",
        ],
        [
          "StarsPaymee — username oqimi (3/6/12 oy)",
          "Xizmat yangi muddatni joriysining ustiga qo‘shadi",
          "Buyurtmadan oldin botda username va holatni tasdiqlang",
        ],
        [
          "StarsPaymee — login oqimi (1 oy)",
          "Faollashtirishni operator bajaradi, muddat qo‘lda hisoblanadi",
          "Buyurtmadan oldin muddatni support bilan aniqlashtiring",
        ],
        [
          "Konkurs yoki sovg‘a kodi",
          "Kodni qo‘llash shartlari alohida belgilanadi",
          "Kod shartlarini o‘qing — ular sovg‘adan farq qiladi",
        ],
      ],
    },
    ru: {
      headers: ["Способ покупки", "Если у получателя уже есть Premium", "Что делать"],
      rows: [
        [
          "Подарок внутри Telegram",
          "Приложение проверяет само и при невозможности показывает причину",
          "Прочитайте сообщение на экране — там указана точная причина",
        ],
        [
          "StarsPaymee — поток по username (3/6/12 мес)",
          "Сервис добавляет новый срок к действующему",
          "Перед заказом подтвердите username и статус в боте",
        ],
        [
          "StarsPaymee — поток через логин (1 мес)",
          "Активацию выполняет оператор, срок считается вручную",
          "Уточните срок в поддержке до оформления заказа",
        ],
        [
          "Розыгрыш или подарочный код",
          "Условия применения кода задаются отдельно",
          "Прочитайте условия кода — они отличаются от подарка",
        ],
      ],
    },
    en: {
      headers: ["Purchase route", "If the recipient already has Premium", "What to do"],
      rows: [
        [
          "A gift inside Telegram",
          "The app checks for itself and shows the reason if it cannot proceed",
          "Read the on-screen message — it names the exact cause",
        ],
        [
          "StarsPaymee — username flow (1/3/6/12 mo)",
          "The service adds the new term on top of the current one",
          "Confirm the username and status in the bot before ordering",
        ],
        [
          "StarsPaymee — sign-in flow",
          "An operator handles activation and counts the term manually",
          "Clarify the dates with support before placing the order",
        ],
        [
          "A giveaway or gift code",
          "The code carries its own conditions",
          "Read the code's terms — they differ from a normal gift",
        ],
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
      Ha, ko‘p holatda mumkin — lekin natija <b>qaysi usul bilan olayotganingizga bog‘liq</b>, shuning uchun
      «hamma joyda muddat qo‘shiladi» deb aytib bo‘lmaydi. Buyurtmadan oldin ikkita narsani tekshiring: qabul
      qiluvchida Premium haqiqatan faolmi va siz tanlagan usul shu holatda qanday ishlaydi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#tekshirish", label: "Premium borligini tekshirish" },
          { href: "#usul", label: "Qaysi usuldan foydalanyapsiz" },
          { href: "#jadval", label: "Holat va usul jadvali" },
          { href: "#xato", label: "«Yuborib bo‘lmaydi» chiqsa" },
          { href: "#oldindan", label: "Buyurtmadan oldingi tekshiruv" },
          { href: "#support", label: "To‘lab bo‘lgan bo‘lsangiz" },
        ]}
      />

      <p>
        Bu maqolaning maqsadi — sizni <b>mos kelmaydigan buyurtmadan oldin to‘xtatish</b>. Premium sovg‘a
        qilishning umumiy tartibi{" "}
        <Link href="/blog/telegram-premium-sovga-username-orqali">alohida qo‘llanmada</Link> yozilgan; bu yerda
        faqat bitta holat ko‘rib chiqiladi: qabul qiluvchida obuna allaqachon bor.
      </p>

      <h2 id="tekshirish">Qabul qiluvchida Premium borligini qanday tekshiramiz</h2>
      <p>
        Eng ishonchli va eng oson usul — profilga qarash. Premium faol bo‘lsa, foydalanuvchi ismi yonida yulduzcha
        rozetkasi turadi va uni har kim ko‘radi.
      </p>
      <Steps>
        <Step title="1. Profilni oching">Chat orqali yoki qidiruvdan uning profiliga o‘ting.</Step>
        <Step title="2. Ism yonidagi rozetkani qidiring">
          Rozetka bor — obuna faol. Rozetka yo‘q — obuna ham yo‘q.
        </Step>
        <Step title="3. Muddatni o‘zidan so‘rang">
          Rozetka obunaning <b>qachon tugashini</b> ko‘rsatmaydi. Tugash sanasini faqat egasi o‘z sozlamalarida
          ko‘ra oladi.
        </Step>
      </Steps>
      <KeyFacts label="Nega muddatni bilish muhim">
        <li>Yaqinda 12 oylik olgan odamga yana yillik sovg‘a qilish — ehtimol, eng yaxshi tanlov emas.</li>
        <li>Muddat tugashiga bir necha kun qolgan bo‘lsa, sovg‘a aynan o‘z vaqtida keladi.</li>
        <li>Sovg‘ani sirli qilib qo‘ymoqchi bo‘lsangiz, muddatni umumiy tanishlaridan bilib olish mumkin.</li>
      </KeyFacts>

      <h2 id="usul">Qaysi usuldan foydalanyapsiz</h2>
      <p>
        Bu savol natijani belgilaydi, chunki usullar bir-biridan jiddiy farq qiladi:
      </p>
      <KeyFacts label="Uchta yo‘l">
        <li>
          <b>Telegram ichidagi sovg‘a</b> — ilova o‘zi tekshiradi. Yuborish mumkin bo‘lmasa, sababni ekranda
          yozadi.
        </li>
        <li>
          <b>Konkurs yoki sovg‘a kodi</b> — kodning o‘z shartlari bo‘ladi; ular oddiy sovg‘a bilan bir xil emas.
        </li>
        <li>
          <b>StarsPaymee kabi xizmat</b> — bu yerda muhim nuqta oqim: username oqimi va login oqimi boshqacha
          ishlaydi.
        </li>
      </KeyFacts>
      <p>
        Shuni ochiq aytish kerak: Telegramning ochiq FAQ’ida <b>faol obunali akkauntga sovg‘a tushganda nima
        bo‘lishi alohida yozilmagan</b>. Shuning uchun quyidagi jadvalda har bir usul uchun «tekshiring» tavsiyasi
        bor — bu ehtiyotkorlik, ortiqcha rasmiyatchilik emas.
      </p>

      <h2 id="jadval">Holat, usul va mumkin bo‘lgan harakat</h2>
      <MethodTable locale="uz" />

      <h2 id="xato">«Bu foydalanuvchiga yuborib bo‘lmaydi» chiqsa</h2>
      <p>
        Bunday xabar odatda obuna borligidan emas, boshqa sabablardan chiqadi. Ketma-ket tekshiring:
      </p>
      <Steps>
        <Step title="1. Username to‘g‘rimi?">
          Profildan nusxa oling. Username egasi uni istalgan vaqtda o‘zgartirishi mumkin.
        </Step>
        <Step title="2. Qabul qiluvchi cheklov qo‘yganmi?">
          Telegramda sovg‘a qabul qilishni cheklash mumkin — bu maxfiylik sozlamasi.
        </Step>
        <Step title="3. Boshqa muddatni sinang">
          Ba’zan muammo tanlangan paketda bo‘ladi, umuman sovg‘ada emas.
        </Step>
        <Step title="4. Boshqa odamga sinab ko‘ring">
          O‘tsa — sabab qabul qiluvchi tomonida; o‘tmasa — sizning tomoningizda yoki paketda.
        </Step>
      </Steps>
      <p>
        Sovg‘a bilan bog‘liq boshqa xato holatlari{" "}
        <Link href="/blog/telegram-gift-yuborilmayapti">«Gift yuborilmayapti» maqolasida</Link> batafsil
        ko‘rilgan.
      </p>

      <h2 id="oldindan">Buyurtmadan oldingi tekshiruv</h2>
      <p>
        Bir daqiqalik tekshiruv keyinchalik uzoq yozishmalardan qutqaradi:
      </p>
      <KeyFacts label="Uch qadam">
        <li>
          <b>Username’ni profildan nusxa oling</b> va botga qo‘yishdan oldin bir marta o‘qib chiqing.
        </li>
        <li>
          <b>Profildagi rozetkani ko‘ring</b> — obuna bor-yo‘qligi shundan bilinadi.
        </li>
        <li>
          <b>Oqimni tanlang</b> — sovg‘a uchun username oqimi ishlatiladi, u yerda muddatlar 3, 6 va 12 oy.
        </li>
      </KeyFacts>

      <InlineCta
        text="Muddatni tanlang va username’ni tekshirib buyurtma bering."
        product={{ kind: "premium", months: 3 }}
      />

      <h2 id="support">To‘lov qilib bo‘lgan bo‘lsangiz</h2>
      <p>
        Agar to‘lov o‘tgan, lekin natija kutganingizdek bo‘lmasa, qayta buyurtma bermang — avval yozing. Quyidagi
        ma’lumotlar bitta xabarda bo‘lsa, masala tezroq hal bo‘ladi:
      </p>
      <KeyFacts label="Supportga yuboriladigan ma’lumot">
        <li>
          <b>Buyurtma ID</b> va to‘lov vaqti.
        </li>
        <li>
          <b>Qabul qiluvchining username’i</b> — buyurtmada aynan qanday yozgan bo‘lsangiz, shundayligicha.
        </li>
        <li>
          <b>Tanlangan muddat</b> va oqim (username yoki login).
        </li>
        <li>
          <b>Ekrandagi xabar skrinshoti</b>, agar xato ko‘rsatilgan bo‘lsa.
        </li>
      </KeyFacts>
      <p>
        Manzil —{" "}
        <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">
          @StarsPaymeeSupport
        </a>
        . Narxlar va muddatlar —{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">Premium narxi maqolasida</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Premium rasmiy FAQ" },
          { href: "https://core.telegram.org/api/premium", label: "core.telegram.org/api/premium", note: "Premium sovg‘a oqimi" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Да, чаще всего можно — но результат <b>зависит от способа покупки</b>, поэтому универсального ответа «срок
      везде добавится» не существует. Перед заказом проверьте две вещи: действительно ли у получателя активен
      Premium и как выбранный вами способ ведёт себя в этой ситуации.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#tekshirish", label: "Как проверить наличие Premium" },
          { href: "#usul", label: "Каким способом покупаете" },
          { href: "#jadval", label: "Таблица: ситуация и способ" },
          { href: "#xato", label: "Если «нельзя отправить»" },
          { href: "#oldindan", label: "Проверка перед заказом" },
          { href: "#support", label: "Если уже оплатили" },
        ]}
      />

      <p>
        Задача этой статьи — <b>остановить вас до неподходящего заказа</b>. Общий порядок дарения Premium описан в{" "}
        <Link href="/blog/telegram-premium-sovga-username-orqali">отдельном руководстве</Link>; здесь разбирается
        только один случай: у получателя подписка уже есть.
      </p>

      <h2 id="tekshirish">Как проверить, есть ли у получателя Premium</h2>
      <p>
        Самый надёжный и простой способ — посмотреть профиль. Если Premium активен, рядом с именем стоит
        значок-звёздочка, и его видно всем.
      </p>
      <Steps>
        <Step title="1. Откройте профиль">Через чат или через поиск.</Step>
        <Step title="2. Найдите значок рядом с именем">
          Значок есть — подписка активна. Значка нет — подписки нет.
        </Step>
        <Step title="3. Срок спросите у него самого">
          Значок не показывает, <b>когда</b> подписка заканчивается. Дату окончания видит только владелец в своих
          настройках.
        </Step>
      </Steps>
      <KeyFacts label="Почему срок важен">
        <li>Дарить годовую подписку тому, кто сам недавно взял 12 месяцев, — вероятно, не лучший выбор.</li>
        <li>Если до конца срока осталось несколько дней, подарок придётся как раз вовремя.</li>
        <li>Если хотите сделать сюрприз, срок можно узнать через общих знакомых.</li>
      </KeyFacts>

      <h2 id="usul">Каким способом вы покупаете</h2>
      <p>Именно этот вопрос определяет результат, потому что способы заметно различаются:</p>
      <KeyFacts label="Три пути">
        <li>
          <b>Подарок внутри Telegram</b> — приложение проверяет само. Если отправить нельзя, причина появится на
          экране.
        </li>
        <li>
          <b>Розыгрыш или подарочный код</b> — у кода свои условия, и они не совпадают с обычным подарком.
        </li>
        <li>
          <b>Сервис вроде StarsPaymee</b> — здесь важен поток: по username и через логин они работают по-разному.
        </li>
      </KeyFacts>
      <p>
        Скажем прямо: в открытом FAQ Telegram <b>отдельно не описано, что происходит, когда подарок попадает на
        аккаунт с активной подпиской</b>. Поэтому в таблице ниже у каждого способа есть рекомендация «проверьте» —
        это осторожность, а не формальность.
      </p>

      <h2 id="jadval">Ситуация, способ и возможное действие</h2>
      <MethodTable locale="ru" />

      <h2 id="xato">Если появляется «этому пользователю нельзя отправить»</h2>
      <p>Такое сообщение обычно связано не с наличием подписки, а с другими причинами. Проверьте по порядку:</p>
      <Steps>
        <Step title="1. Верен ли username?">
          Скопируйте из профиля. Владелец может сменить username в любой момент.
        </Step>
        <Step title="2. Не ограничил ли получатель приём?">
          В Telegram можно ограничить приём подарков — это настройка приватности.
        </Step>
        <Step title="3. Попробуйте другой срок">Иногда дело в конкретном пакете, а не в подарке вообще.</Step>
        <Step title="4. Попробуйте другого человека">
          Прошло — причина на стороне получателя; не прошло — на вашей или в пакете.
        </Step>
      </Steps>
      <p>
        Другие ошибки при отправке подарков разобраны в статье{" "}
        <Link href="/blog/telegram-gift-yuborilmayapti">«Подарок не отправляется»</Link>.
      </p>

      <h2 id="oldindan">Проверка перед заказом</h2>
      <p>Минутная проверка избавляет от долгой переписки потом:</p>
      <KeyFacts label="Три шага">
        <li>
          <b>Скопируйте username из профиля</b> и перечитайте его перед вставкой в бота.
        </li>
        <li>
          <b>Посмотрите значок в профиле</b> — по нему видно, есть подписка или нет.
        </li>
        <li>
          <b>Выберите поток</b> — для подарка используется поток по username со сроками 3, 6 и 12 месяцев.
        </li>
      </KeyFacts>

      <InlineCta
        text="Выберите срок и оформите заказ, проверив username."
        product={{ kind: "premium", months: 3 }}
      />

      <h2 id="support">Если оплата уже прошла</h2>
      <p>
        Если платёж прошёл, а результат не такой, как вы ожидали, не оформляйте новый заказ — сначала напишите.
        Одно сообщение со следующими данными ускорит разбор:
      </p>
      <KeyFacts label="Что отправить в поддержку">
        <li>
          <b>ID заказа</b> и время оплаты.
        </li>
        <li>
          <b>Username получателя</b> — ровно в том виде, как вы указали при заказе.
        </li>
        <li>
          <b>Выбранный срок</b> и поток (по username или через логин).
        </li>
        <li>
          <b>Скриншот сообщения на экране</b>, если была показана ошибка.
        </li>
      </KeyFacts>
      <p>
        Адрес —{" "}
        <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">
          @StarsPaymeeSupport
        </a>
        . Цены и сроки — в статье{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">о стоимости Premium</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "официальный FAQ Premium" },
          { href: "https://core.telegram.org/api/premium", label: "core.telegram.org/api/premium", note: "поток дарения Premium" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Premium bor odamga yana Premium sovg‘a qilsa bo‘ladimi?",
    answer:
      "Ko‘p holatda ha, lekin natija xarid usuliga bog‘liq. Buyurtmadan oldin qabul qiluvchining holatini va tanlagan oqimingiz shartlarini tekshiring.",
  },
  {
    question: "Muddat mavjud obuna ustiga qo‘shiladimi?",
    answer:
      "StarsPaymee’ning username oqimida yangi muddat joriysining ustiga qo‘shiladi. Telegramning ochiq FAQ’ida bu holat alohida yozilmagan, shuning uchun boshqa usullarda oldindan tekshirish kerak.",
  },
  {
    question: "Odamda Premium borligini qanday bilaman?",
    answer: "Profilini oching — Premium faol bo‘lsa, ism yonida yulduzcha rozetkasi turadi.",
  },
  {
    question: "Obuna qachon tugashini ko‘ra olamanmi?",
    answer: "Yo‘q. Rozetka faqat obuna bor-yo‘qligini ko‘rsatadi; tugash sanasini egasi o‘z sozlamalarida ko‘radi.",
  },
  {
    question: "«Bu foydalanuvchiga yuborib bo‘lmaydi» chiqsa nima qilaman?",
    answer:
      "Username’ni profildan nusxa olib tekshiring, qabul qiluvchining sovg‘a sozlamalarini so‘rang, boshqa muddat va boshqa odamga sinab ko‘ring.",
  },
  {
    question: "Sovg‘a uchun 1 oylik muddat bormi?",
    answer: "Yo‘q. Sovg‘a username oqimida beriladi, u yerda eng qisqa muddat 3 oy.",
  },
  {
    question: "To‘lab bo‘ldim, natija kutganimdek emas — nima qilaman?",
    answer:
      "Qayta buyurtma bermang. Buyurtma ID, to‘lov vaqti, qabul qiluvchi username’i, tanlangan muddat va skrinshot bilan @StarsPaymeeSupport ga yozing.",
  },
];

const ruFaq = [
  {
    question: "Можно ли подарить Premium тому, у кого он уже есть?",
    answer:
      "Чаще всего да, но результат зависит от способа покупки. Перед заказом проверьте статус получателя и условия выбранного потока.",
  },
  {
    question: "Добавится ли срок к действующей подписке?",
    answer:
      "В потоке по username в StarsPaymee новый срок добавляется к текущему. В открытом FAQ Telegram этот случай отдельно не описан, поэтому для других способов стоит проверить заранее.",
  },
  {
    question: "Как узнать, есть ли у человека Premium?",
    answer: "Откройте его профиль — при активном Premium рядом с именем стоит значок-звёздочка.",
  },
  {
    question: "Можно ли увидеть, когда заканчивается подписка?",
    answer: "Нет. Значок показывает только наличие подписки; дату окончания владелец видит в своих настройках.",
  },
  {
    question: "Что делать при сообщении «нельзя отправить этому пользователю»?",
    answer:
      "Скопируйте username из профиля и проверьте его, уточните настройки приёма подарков у получателя, попробуйте другой срок и другого человека.",
  },
  {
    question: "Есть ли подарок на 1 месяц?",
    answer: "Нет. Подарок оформляется в потоке по username, где минимальный срок — 3 месяца.",
  },
  {
    question: "Оплатил, но результат не тот — что делать?",
    answer:
      "Не оформляйте новый заказ. Напишите в @StarsPaymeeSupport, приложив ID заказа, время оплаты, username получателя, выбранный срок и скриншот.",
  },
];

function EnAnswer() {
  return (
    <p>
      In most cases yes — but the outcome <b>depends on how you buy it</b>, so there is no universal &laquo;the term
      always stacks&raquo; answer. Before ordering, check two things: whether Premium is genuinely active on the
      recipient&rsquo;s account, and how your chosen route behaves in that situation.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#tekshirish", label: "Checking for Premium" },
          { href: "#usul", label: "Which route are you using" },
          { href: "#jadval", label: "Situation and route" },
          { href: "#xato", label: "If it says «cannot send»" },
          { href: "#oldindan", label: "Checks before ordering" },
          { href: "#support", label: "If you already paid" },
        ]}
      />

      <p>
        The point of this article is to <b>stop you before an order that will not do what you expect</b>. The general
        gifting procedure is in{" "}
        <Link href="/blog/telegram-premium-sovga-username-orqali">gifting Premium by username</Link>; here we cover
        one case only — the recipient already has a subscription.
      </p>

      <h2 id="tekshirish">How to check whether they already have Premium</h2>
      <p>
        The simplest and most reliable way is to look at their profile. When Premium is active, a star badge sits
        next to the name and everyone can see it.
      </p>
      <Steps>
        <Step title="1. Open the profile">Through the chat or via search.</Step>
        <Step title="2. Look for the badge next to the name">
          A badge means the subscription is active. No badge means none.
        </Step>
        <Step title="3. Ask them about the end date">
          The badge does not show <b>when</b> it ends — only the owner sees that in their settings.
        </Step>
      </Steps>
      <KeyFacts label="Why the date matters">
        <li>Gifting a year to someone who just bought a year themselves is probably not the best choice.</li>
        <li>If only days remain, the gift lands exactly when it is useful.</li>
        <li>For a surprise, mutual friends are the usual way to find out the date.</li>
      </KeyFacts>

      <h2 id="usul">Which route are you using</h2>
      <p>This question decides the outcome, because the routes behave differently:</p>
      <KeyFacts label="Three routes">
        <li>
          <b>A gift inside Telegram</b> — the app checks by itself and states the reason on screen if it cannot
          proceed.
        </li>
        <li>
          <b>A giveaway or gift code</b> — codes carry their own conditions, which differ from a normal gift.
        </li>
        <li>
          <b>A service such as StarsPaymee</b> — here the flow matters: username and sign-in behave differently.
        </li>
      </KeyFacts>
      <p>
        Worth saying plainly: Telegram&rsquo;s public FAQ <b>does not separately document what happens when a gift
        lands on an account with an active subscription</b>. That is why every row in the table below carries a
        &laquo;check first&raquo; note — caution, not bureaucracy.
      </p>

      <h2 id="jadval">Situation, route and what to do</h2>
      <MethodTable locale="en" />

      <h2 id="xato">If you see «cannot send to this user»</h2>
      <p>That message usually has nothing to do with an existing subscription. Check in order:</p>
      <Steps>
        <Step title="1. Is the username right?">
          Copy it from the profile. Owners can change a username at any time.
        </Step>
        <Step title="2. Has the recipient restricted gifts?">
          Telegram allows limiting incoming gifts — it is a privacy setting.
        </Step>
        <Step title="3. Try a different term">Sometimes the issue is the specific pack, not gifting itself.</Step>
        <Step title="4. Try another person">
          If it goes through, the cause is on their side; if not, it is on yours or in the pack.
        </Step>
      </Steps>
      <p>
        Other gift-sending errors are covered in{" "}
        why a gift will not send.
      </p>

      <h2 id="oldindan">Checks before ordering</h2>
      <KeyFacts label="Three steps">
        <li>
          <b>Copy the username from the profile</b> and read it once more before pasting it into the bot.
        </li>
        <li>
          <b>Look at the profile badge</b> — that tells you whether a subscription exists.
        </li>
        <li>
          <b>Pick the route</b> — gifts go through the username flow, with terms of 1, 3, 6 and 12 months.
        </li>
      </KeyFacts>

      <InlineCta text="Check the username, choose a term and order." product={{ kind: "premium", months: 3 }} />

      <h2 id="support">If the payment already went through</h2>
      <p>
        If it did and the result is not what you expected, do not place another order — write first. One message with
        the following gets it resolved faster:
      </p>
      <KeyFacts label="What to send support">
        <li>
          <b>The order ID</b> and the time of payment.
        </li>
        <li>
          <b>The recipient&rsquo;s username</b> — exactly as you entered it.
        </li>
        <li>
          <b>The term you chose</b> and the flow used.
        </li>
        <li>
          <b>A screenshot</b> of the on-screen message, if an error was shown.
        </li>
      </KeyFacts>
      <p>
        Write to{" "}
        <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">
          @StarsPaymeeSupport
        </a>
        . Prices and terms are in{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">the Premium pricing article</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "official Premium FAQ" },
          { href: "https://core.telegram.org/api/premium", label: "core.telegram.org/api/premium", note: "the Premium gifting flow" },
        ]}
      />
    </>
  );
}

const enFaq = [
  {
    question: "Can I gift Premium to someone who already has it?",
    answer: "Usually yes, but the outcome depends on the purchase route. Check the recipient's status and your flow's terms first.",
  },
  {
    question: "Will the term stack on the existing subscription?",
    answer:
      "In the StarsPaymee username flow the new term is added to the current one. Telegram's public FAQ does not document this case, so check first on other routes.",
  },
  { question: "How do I know if they have Premium?", answer: "Open their profile — an active subscription shows a star badge next to the name." },
  { question: "Can I see when it expires?", answer: "No. The badge only shows that a subscription exists; the owner sees the date in their settings." },
  {
    question: "What if it says «cannot send to this user»?",
    answer: "Copy and verify the username, ask them about their gift privacy settings, and try a different term and a different person.",
  },
  { question: "Which terms can be gifted?", answer: "1, 3, 6 and 12 months — all through the username flow, with no password." },
  {
    question: "I paid and the result is wrong — what now?",
    answer: "Do not reorder. Message @StarsPaymeeSupport with the order ID, payment time, recipient username, term and a screenshot.",
  },
];
export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "problem",
  datePublished: "2026-09-08",
  dateModified: "2026-09-08",
  keywords: [
    "premium bor odamga premium sovg‘a qilish",
    "telegram premium ustiga premium olish",
    "premium bor odamga yana premium",
    "telegram premium muddatini qo‘shish",
    "premium sovg‘a qilib bo‘lmayapti",
    "premium tugamasdan yana olish",
  ],
  locales: {
    uz: {
      title: "Telegram Premium bor odamga yana Premium sovg‘a qilsa bo‘ladimi?",
      excerpt:
        "Qabul qiluvchida obuna faol bo‘lsa nima bo‘ladi: holatni tekshirish, usullar jadvali, «yuborib bo‘lmaydi» xatosi va buyurtmadan oldingi tekshiruv.",
      metaTitle: "Premium bor odamga yana Premium sovg‘a qilish",
      metaDescription:
        "Premium bor odamga sovg‘a qilish mumkinmi: obunani qanday tekshirish, usullar bo‘yicha farq, xato xabarlari va to‘lovdan keyin nima qilish kerak.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Sovg‘a bermoqchimisiz?",
      ctaBody: "@StarsPaymee_bot — username’ni tekshiring, muddatni tanlang va so‘mda to‘lang.",
      faq: uzFaq,
    },
    ru: {
      title: "Можно ли подарить Premium тому, у кого он уже есть?",
      excerpt:
        "Что происходит, если у получателя активна подписка: как проверить статус, таблица по способам, ошибка «нельзя отправить» и проверка перед заказом.",
      metaTitle: "Подарить Premium тому, у кого он уже есть",
      metaDescription:
        "Можно ли подарить Premium при активной подписке: как проверить статус, чем отличаются способы, что делать при ошибке и после оплаты.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Дарите Premium?",
      ctaBody: "@StarsPaymee_bot — проверьте username, выберите срок и оплатите в сумах.",
      faq: ruFaq,
    },
    en: {
      title: "Can you gift Premium to someone who already has it?",
      excerpt: "What happens when the recipient has an active subscription: checking status, how each route behaves, the «cannot send» error and what to do after paying.",
      metaTitle: "Gift Premium to someone who already has it",
      metaDescription: "Can you gift Telegram Premium when a subscription is already active: how to check status, how routes differ, common errors and next steps.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Gifting Premium?",
      ctaBody: "@StarsPaymee_bot — check the username, pick a term and pay in so\u2018m.",
      faq: enFaq,
    },
  },
};
