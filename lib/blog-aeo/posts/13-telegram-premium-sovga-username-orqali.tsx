import { Link } from "@/i18n/navigation";
import {
  InfoCard,
  InfoGrid,
  InlineCta,
  KeyFacts,
  Sources,
  Step,
  Steps,
  Toc,
} from "@/components/blog/aeo-blocks";
import { PremiumPlanBoard } from "@/components/blog/premium-plan-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-premium-sovga-username-orqali";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Telegram Premium’ni boshqa odamga sovg‘a qilish uchun uning <b>@username</b>’ini bilsangiz kifoya.
      @StarsPaymee_bot da: Premium’ni tanlang → qabul qiluvchining @username’ini kiriting → muddatni tanlang →
      so‘mda to‘lang. Premium o‘rtacha <b>10 soniyada</b> avtomatik faollashadi — qabul qiluvchining paroli, kodi
      yoki akkauntiga kirish kerak emas.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nega-sovga", label: "Nega Premium yaxshi sovg‘a" },
          { href: "#bosqichlar", label: "Bosqichma-bosqich" },
          { href: "#username", label: "Username’ni to‘g‘ri tekshirish" },
          { href: "#holat", label: "Odamda Premium bormi?" },
          { href: "#yetkazildi", label: "Yetkazilganini qanday bilaman" },
          { href: "#muddat", label: "Qaysi muddatni tanlash" },
        ]}
      />

      <h2 id="nega-sovga">Nega Premium yaxshi sovg‘a hisoblanadi</h2>
      <InfoGrid>
        <InfoCard emoji="🛠️" title="Amaliy foyda">
          Oluvchi kundalik hayotda haqiqiy qulaylikdan foydalanadi.
        </InfoCard>
        <InfoCard emoji="📅" title="Uzoq ta’sir">
          Bir martalik sovg‘adan farqli — oylar davomida foyda beradi.
        </InfoCard>
        <InfoCard emoji="✨" title="Zamonaviy">
          An’anaviy sovg‘alardan ajralib turadigan raqamli tuhfa.
        </InfoCard>
        <InfoCard emoji="🎯" title="Aniq maqsad">
          Faol Telegram foydalanuvchisiga aynan kerakli narsa.
        </InfoCard>
      </InfoGrid>
      <KeyFacts label="Qanday holatlarga mos">
        <li>Tug‘ilgan kun yoki bayram tabrigi sifatida do‘stlarga.</li>
        <li>Faol Telegram foydalanuvchisi bo‘lgan hamkasblarga.</li>
        <li>Kanal yoki bot yaratuvchisiga — ishini rag‘batlantirish uchun.</li>
      </KeyFacts>

      <h2 id="bosqichlar">Username orqali sovg‘a qilish — bosqichma-bosqich</h2>
      <Steps>
        <Step title="1. Botni oching">
          Telegramda{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          ni oching yoki Mini App’ni ishga tushiring.
        </Step>
        <Step title="2. Premium’ni tanlang">Mahsulotlar ichidan «Telegram Premium» bo‘limini tanlang.</Step>
        <Step title="3. Qabul qiluvchi username’ini kiriting">
          O‘z username’ingiz emas — sovg‘a qilayotgan odamniki. Login, parol yoki SMS-kod so‘ralmaydi.
        </Step>
        <Step title="4. Muddatni tanlang">
          3, 6 yoki 12 oy. Sovg‘a username oqimida beriladi, shuning uchun 1 oylik bu yerda mavjud emas.
        </Step>
        <Step title="5. So‘mda to‘lang">UzCard, HUMO, Click, Payme, Uzum yoki Paynet.</Step>
        <Step title="6. Yetkazilganini tasdiqlang">Quyidagi «Yetkazilganini qanday bilaman» bo‘limiga qarang.</Step>
      </Steps>

      <InlineCta
        text="Do‘stingizga Premium sovg‘a qiling — username yetarli."
        product={{ kind: "premium", months: 3 }}
      />

      <h2 id="username">Username’ni to‘g‘ri tekshirish</h2>
      <p>
        Sovg‘a aynan username bo‘yicha yetkaziladi, shuning uchun bitta harf ham muhim. To‘lovdan oldin quyidagilarni
        tekshiring:
      </p>
      <KeyFacts label="Uchta tekshiruv">
        <li>
          <b>Manbadan nusxa oling</b> — username’ni qo‘lda yozmang. Odamning profilini oching va username’ni bosib
          nusxalang; shunda harf almashib ketmaydi.
        </li>
        <li>
          <b>@ belgisi va katta-kichik harf</b> — Telegram username’da katta-kichik harf farq qilmaydi, lekin
          ortiqcha bo‘sh joy yoki nuqta xatoga olib keladi.
        </li>
        <li>
          <b>Telegramda qidirib ko‘ring</b> — username’ni qidiruvga kiriting va aynan o‘sha odam chiqishiga ishonch
          hosil qiling. Username egasi uni istalgan vaqtda o‘zgartirishi mumkin.
        </li>
      </KeyFacts>
      <p>
        Agar to‘lovdan keyin xato qilganingizni sezsangiz, buyurtma ID bilan darhol{" "}
        <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">
          @StarsPaymeeSupport
        </a>{" "}
        ga yozing — qanchalik tez yozsangiz, tuzatish imkoniyati shunchalik yuqori.
      </p>

      <h2 id="holat">Odamda allaqachon Premium bo‘lsa nima bo‘ladi</h2>
      <p>
        Bu holatda sovg‘a yo‘qolmaydi: <b>yangi muddat mavjud obuna ustiga qo‘shiladi</b>, ya’ni Premium uzayadi.
        Shunga qaramay, sovg‘a qilishdan oldin holatni bilib olish foydali — masalan, odam yaqinda o‘zi 12 oylik
        obuna olgan bo‘lsa, siz boshqa sovg‘ani tanlashingiz mumkin.
      </p>
      <p>
        Buni bilishning eng oson yo‘li — odamning profilini ochish: Premium faol bo‘lsa, ism yonida yulduzcha
        rozetkasi turadi. Rozetka yo‘q bo‘lsa, obuna ham yo‘q.
      </p>

      <h2 id="yetkazildi">Sovg‘a yetkazilganini qanday bilaman</h2>
      <p>To‘lovdan keyin yetkazilganini uch xil tarzda tasdiqlash mumkin:</p>
      <InfoGrid>
        <InfoCard emoji="🤖" title="Botdagi status">
          Buyurtma «bajarildi» holatiga o‘tadi va buyurtma raqami beriladi — uni saqlab qo‘ying.
        </InfoCard>
        <InfoCard emoji="⭐" title="Qabul qiluvchi profili">
          Odamning ismi yonida Premium rozetkasi paydo bo‘ladi — buni siz ham ko‘rasiz.
        </InfoCard>
        <InfoCard emoji="🔔" title="Telegram bildirishnomasi">
          Qabul qiluvchi Telegram’dan obuna faollashgani haqida xabar oladi.
        </InfoCard>
        <InfoCard emoji="⏳" title="Ko‘rinmasa">
          Telegram’ni yopib qayta oching; keyin ham o‘zgarmasa, buyurtma ID bilan supportga yozing.
        </InfoCard>
      </InfoGrid>

      <h2 id="muddat">Qaysi muddatni tanlash kerak</h2>
      <PremiumPlanBoard locale="uz" flow="username" />
      <p>
        Birinchi marta sovg‘a qilayotgan bo‘lsangiz, <b>3 oylik</b> yaxshi boshlang‘ich. Yaqin do‘st yoki oila a’zosi
        uchun esa <b>6 yoki 12 oylik</b> obuna qadrliroq tuhfa bo‘ladi — 12 oylik oyiga hisoblaganda eng tejamkor.
      </p>
      <p>
        Qarang: <Link href="/blog/telegram-premium-eng-oson-usul">Premium olishning eng oson usuli</Link>,{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">narxlar</Link> va{" "}
        <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">Telegram sovg‘alarini yuborish</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Premium va sovg‘a haqida" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "sovg‘a buyurtmasi" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Чтобы подарить Telegram Premium другому человеку, достаточно знать его <b>@username</b>. В @StarsPaymee_bot:
      выберите Premium → введите @username получателя → выберите срок → оплатите в сумах. Premium активируется
      автоматически в среднем за <b>10 секунд</b> — пароль, код или вход в аккаунт получателя не нужны.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nega-sovga", label: "Почему Premium — хороший подарок" },
          { href: "#bosqichlar", label: "Пошаговая инструкция" },
          { href: "#username", label: "Как проверить username" },
          { href: "#holat", label: "А если Premium уже есть?" },
          { href: "#yetkazildi", label: "Как понять, что подарок дошёл" },
          { href: "#muddat", label: "Какой срок выбрать" },
        ]}
      />

      <h2 id="nega-sovga">Почему Premium — хороший подарок</h2>
      <InfoGrid>
        <InfoCard emoji="🛠️" title="Практическая польза">
          Получатель пользуется реальным удобством каждый день.
        </InfoCard>
        <InfoCard emoji="📅" title="Долгий эффект">
          В отличие от разового подарка — приносит пользу месяцами.
        </InfoCard>
        <InfoCard emoji="✨" title="Современно">
          Цифровой подарок, который выделяется среди традиционных.
        </InfoCard>
        <InfoCard emoji="🎯" title="Точное попадание">
          Именно то, что нужно активному пользователю Telegram.
        </InfoCard>
      </InfoGrid>
      <KeyFacts label="Кому подойдёт">
        <li>Друзьям — как поздравление с днём рождения или праздником.</li>
        <li>Коллегам, которые активно пользуются Telegram.</li>
        <li>Автору канала или бота — чтобы поддержать его работу.</li>
      </KeyFacts>

      <h2 id="bosqichlar">Как подарить по username — пошагово</h2>
      <Steps>
        <Step title="1. Откройте бота">
          Откройте{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          в Telegram или запустите Mini App.
        </Step>
        <Step title="2. Выберите Premium">Среди продуктов выберите раздел «Telegram Premium».</Step>
        <Step title="3. Введите username получателя">
          Не свой, а того, кому дарите. Логин, пароль или SMS-код не запрашиваются.
        </Step>
        <Step title="4. Выберите срок">
          3, 6 или 12 месяцев. Подарок оформляется в потоке по username, поэтому месячного тарифа здесь нет.
        </Step>
        <Step title="5. Оплатите в сумах">UzCard, HUMO, Click, Payme, Uzum или Paynet.</Step>
        <Step title="6. Подтвердите доставку">Смотрите раздел «Как понять, что подарок дошёл» ниже.</Step>
      </Steps>

      <InlineCta
        text="Подарите другу Premium — достаточно username."
        product={{ kind: "premium", months: 3 }}
      />

      <h2 id="username">Как правильно проверить username</h2>
      <p>
        Подарок доставляется именно по username, поэтому важна каждая буква. Перед оплатой проверьте три вещи:
      </p>
      <KeyFacts label="Три проверки">
        <li>
          <b>Копируйте из источника</b> — не набирайте username вручную. Откройте профиль человека и скопируйте
          username нажатием; так буквы не перепутаются.
        </li>
        <li>
          <b>Символ @ и регистр</b> — регистр в username Telegram не важен, но лишний пробел или точка приведут к
          ошибке.
        </li>
        <li>
          <b>Найдите его в поиске Telegram</b> — введите username и убедитесь, что открывается именно тот человек.
          Владелец может сменить username в любой момент.
        </li>
      </KeyFacts>
      <p>
        Если ошибку заметили уже после оплаты, сразу напишите в{" "}
        <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">
          @StarsPaymeeSupport
        </a>{" "}
        с ID заказа — чем быстрее, тем выше шанс исправить.
      </p>

      <h2 id="holat">Что если у человека уже есть Premium</h2>
      <p>
        Подарок не пропадёт: <b>новый срок добавится к действующей подписке</b>, то есть Premium продлится. И всё
        же перед покупкой полезно знать статус — например, если человек недавно сам оформил годовую подписку, вы
        можете выбрать другой подарок.
      </p>
      <p>
        Проще всего посмотреть профиль: если Premium активен, рядом с именем стоит значок-звёздочка. Нет значка —
        нет и подписки.
      </p>

      <h2 id="yetkazildi">Как понять, что подарок дошёл</h2>
      <p>После оплаты доставку можно подтвердить тремя способами:</p>
      <InfoGrid>
        <InfoCard emoji="🤖" title="Статус в боте">
          Заказ переходит в состояние «выполнен» и выдаётся номер заказа — сохраните его.
        </InfoCard>
        <InfoCard emoji="⭐" title="Профиль получателя">
          Рядом с именем появляется значок Premium — его видите и вы.
        </InfoCard>
        <InfoCard emoji="🔔" title="Уведомление Telegram">
          Получатель получает от Telegram сообщение об активации подписки.
        </InfoCard>
        <InfoCard emoji="⏳" title="Если не видно">
          Закройте и снова откройте Telegram; если и тогда ничего, напишите в поддержку с ID заказа.
        </InfoCard>
      </InfoGrid>

      <h2 id="muddat">Какой срок выбрать</h2>
      <PremiumPlanBoard locale="ru" flow="username" />
      <p>
        Если дарите впервые, хорошее начало — <b>3 месяца</b>. Близкому другу или члену семьи ценнее будет{" "}
        <b>6 или 12 месяцев</b>, причём годовой в пересчёте на месяц самый выгодный.
      </p>
      <p>
        Смотрите: <Link href="/blog/telegram-premium-eng-oson-usul">самый простой способ купить Premium</Link>,{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">цены</Link> и{" "}
        <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">отправка подарков Telegram</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "о Premium и подарках" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "заказ подарка" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      To gift Telegram Premium to someone, their <b>@username</b> is all you need. In @StarsPaymee_bot: pick
      Premium → enter the recipient’s @username → choose a term → pay in so‘m. Premium activates automatically in
      about <b>10 seconds</b> — the recipient’s password, code or account access is never required.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#nega-sovga", label: "Why Premium makes a good gift" },
          { href: "#bosqichlar", label: "Step by step" },
          { href: "#username", label: "Checking the username" },
          { href: "#holat", label: "What if they already have Premium?" },
          { href: "#yetkazildi", label: "Confirming delivery" },
          { href: "#muddat", label: "Which term to choose" },
        ]}
      />

      <h2 id="nega-sovga">Why Premium makes a good gift</h2>
      <InfoGrid>
        <InfoCard emoji="🛠️" title="Practical value">
          The recipient gets real everyday convenience out of it.
        </InfoCard>
        <InfoCard emoji="📅" title="A long effect">
          Unlike a one-off present, it keeps paying off for months.
        </InfoCard>
        <InfoCard emoji="✨" title="Modern">
          A digital gift that stands out among traditional ones.
        </InfoCard>
        <InfoCard emoji="🎯" title="On target">
          Exactly what an active Telegram user wants.
        </InfoCard>
      </InfoGrid>
      <KeyFacts label="When it fits">
        <li>For friends — as a birthday or holiday present.</li>
        <li>For colleagues who live in Telegram.</li>
        <li>For a channel or bot author — to back their work.</li>
      </KeyFacts>

      <h2 id="bosqichlar">Gifting by username — step by step</h2>
      <Steps>
        <Step title="1. Open the bot">
          Open{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          in Telegram or launch the Mini App.
        </Step>
        <Step title="2. Pick Premium">Choose the “Telegram Premium” section among the products.</Step>
        <Step title="3. Enter the recipient’s username">
          Theirs, not yours. No login, password or SMS code is requested.
        </Step>
        <Step title="4. Choose a term">
          3, 6 or 12 months. Gifts go through the username flow, so the monthly plan is not offered here.
        </Step>
        <Step title="5. Pay in so‘m">UzCard, HUMO, Click, Payme, Uzum or Paynet.</Step>
        <Step title="6. Confirm delivery">See “Confirming delivery” below.</Step>
      </Steps>

      <InlineCta text="Gift a friend Premium — a username is enough." product={{ kind: "premium", months: 3 }} />

      <h2 id="username">Checking the username properly</h2>
      <p>
        The gift is delivered by username, so every character counts. Check three things before paying:
      </p>
      <KeyFacts label="Three checks">
        <li>
          <b>Copy it from the source</b> — do not type the username by hand. Open the person’s profile and copy the
          username with a tap so no letters get swapped.
        </li>
        <li>
          <b>The @ sign and letter case</b> — Telegram usernames are case-insensitive, but a stray space or full
          stop will break it.
        </li>
        <li>
          <b>Search for it in Telegram</b> — type the username in search and confirm the right person comes up.
          Owners can change their username at any time.
        </li>
      </KeyFacts>
      <p>
        If you spot a mistake after paying, message{" "}
        <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">
          @StarsPaymeeSupport
        </a>{" "}
        with the order ID straight away — the sooner you write, the better the chance of fixing it.
      </p>

      <h2 id="holat">What happens if they already have Premium</h2>
      <p>
        Nothing is lost: <b>the new term is added on top of the existing subscription</b>, so Premium simply runs
        longer. Even so, it is worth knowing the status first — if the person recently bought a year themselves, you
        might prefer a different gift.
      </p>
      <p>
        The easiest way to check is their profile: when Premium is active, a star badge sits next to the name. No
        badge means no subscription.
      </p>

      <h2 id="yetkazildi">Confirming that the gift arrived</h2>
      <p>After payment there are three ways to confirm delivery:</p>
      <InfoGrid>
        <InfoCard emoji="🤖" title="Status in the bot">
          The order moves to “completed” and an order number is issued — keep it.
        </InfoCard>
        <InfoCard emoji="⭐" title="The recipient’s profile">
          A Premium badge appears next to their name, and you can see it too.
        </InfoCard>
        <InfoCard emoji="🔔" title="Telegram’s notification">
          The recipient gets a message from Telegram about the activated subscription.
        </InfoCard>
        <InfoCard emoji="⏳" title="If nothing shows">
          Close and reopen Telegram; if it still does not appear, contact support with the order ID.
        </InfoCard>
      </InfoGrid>

      <h2 id="muddat">Which term to choose</h2>
      <PremiumPlanBoard locale="en" flow="username" />
      <p>
        For a first gift, <b>3 months</b> is a good start. For a close friend or family member <b>6 or 12 months</b>{" "}
        lands better — and the yearly pack is the cheapest per month.
      </p>
      <p>
        See also: <Link href="/blog/telegram-premium-eng-oson-usul">the easiest way to buy Premium</Link>,{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">prices</Link> and{" "}
        <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">sending Telegram gifts</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "on Premium and gifting" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "placing a gift order" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Premium sovg‘a qilish uchun nima kerak?",
    answer: "Faqat qabul qiluvchining @username’i. Uning paroli, SMS-kodi yoki akkauntiga kirish kerak emas.",
  },
  {
    question: "Sovg‘a necha soniyada yetadi?",
    answer: "Username oqimida Premium o‘rtacha 10 soniyada qabul qiluvchining akkauntida faollashadi.",
  },
  {
    question: "Username’ni xato yozsam-chi?",
    answer:
      "To‘lovdan oldin profildan nusxa olib tekshiring. Xato bo‘lsa darhol @StarsPaymeeSupport ga buyurtma ID bilan murojaat qiling.",
  },
  {
    question: "Odamda allaqachon Premium bo‘lsa-chi?",
    answer: "Sovg‘a yo‘qolmaydi — yangi muddat mavjud obuna ustiga qo‘shiladi, ya’ni Premium uzayadi.",
  },
  {
    question: "Sovg‘a yetkazilganini qanday bilaman?",
    answer:
      "Botda buyurtma «bajarildi» holatiga o‘tadi, qabul qiluvchi profilida Premium rozetkasi chiqadi va unga Telegram bildirishnoma yuboradi.",
  },
  {
    question: "Sovg‘a uchun 1 oylik muddat bormi?",
    answer:
      "Ha. 2026-yil sentabridan 1 oylik ham username oqimida, ya'ni uni sovg‘a qilish ham mumkin — 45 000 so‘m.",
  },
  {
    question: "Anonim sovg‘a qilsa bo‘ladimi?",
    answer:
      "Premium faollashtirish qabul qiluvchiga ko‘rinadi; anonim variant ko‘proq noyob sovg‘alar (Gifts) uchun mavjud.",
  },
  {
    question: "Qaysi muddat sovg‘a uchun ma’qul?",
    answer: "Birinchi sovg‘aga 3 oy, yaqin insonga 6 yoki 12 oy. 12 oylik oyiga hisoblaganda eng tejamkor.",
  },
];

const ruFaq = [
  {
    question: "Что нужно, чтобы подарить Premium?",
    answer: "Только @username получателя. Его пароль, SMS-код или вход в аккаунт не нужны.",
  },
  {
    question: "За сколько доходит подарок?",
    answer: "В потоке по username Premium активируется на аккаунте получателя в среднем за 10 секунд.",
  },
  {
    question: "А если я ошибусь в username?",
    answer:
      "Скопируйте username из профиля и проверьте до оплаты. При ошибке сразу напишите в @StarsPaymeeSupport с ID заказа.",
  },
  {
    question: "Что если у человека уже есть Premium?",
    answer: "Подарок не пропадёт — новый срок добавится к действующей подписке, то есть Premium продлится.",
  },
  {
    question: "Как понять, что подарок дошёл?",
    answer:
      "Заказ в боте переходит в «выполнен», в профиле получателя появляется значок Premium, и Telegram присылает ему уведомление.",
  },
  {
    question: "Есть ли подарок на 1 месяц?",
    answer:
      "Нет. Подарок оформляется в потоке по username, где минимальный срок 3 месяца. Месячный тариф есть только в потоке со входом.",
  },
  {
    question: "Можно ли подарить анонимно?",
    answer: "Активация Premium видна получателю; анонимный вариант чаще доступен для уникальных подарков (Gifts).",
  },
  {
    question: "Какой срок лучше для подарка?",
    answer: "Для первого подарка — 3 месяца, близкому человеку — 6 или 12. Годовой выгоднее всего в пересчёте на месяц.",
  },
];

const enFaq = [
  {
    question: "What do I need to gift Premium?",
    answer: "Only the recipient’s @username. Their password, SMS code or account access is never required.",
  },
  {
    question: "How fast does the gift arrive?",
    answer: "In the username flow Premium activates on the recipient’s account in about 10 seconds.",
  },
  {
    question: "What if I get the username wrong?",
    answer:
      "Copy it from their profile and check before paying. If it is wrong, message @StarsPaymeeSupport with the order ID right away.",
  },
  {
    question: "What if they already have Premium?",
    answer: "Nothing is lost — the new term is added to the existing subscription, so Premium simply runs longer.",
  },
  {
    question: "How do I know the gift was delivered?",
    answer:
      "The order turns to “completed” in the bot, a Premium badge appears on the recipient’s profile, and Telegram sends them a notification.",
  },
  {
    question: "Is there a 1-month gift option?",
    answer:
      "Yes. Since September 2026 the monthly plan runs by username too, so it can be gifted — 45,000 UZS.",
  },
  {
    question: "Can the gift be anonymous?",
    answer: "Premium activation is visible to the recipient; anonymous sending is more of a unique-Gifts feature.",
  },
  {
    question: "Which term works best as a gift?",
    answer: "3 months for a first gift, 6 or 12 for someone close. The yearly pack is the cheapest per month.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "howto",
  datePublished: "2026-06-13",
  dateModified: "2026-09-08",
  keywords: [
    "telegram premium sovga qilish",
    "telegram premium username orqali",
    "telegram premium hadya",
    "telegram premium boshqaga yuborish",
    "telegram premium gift username",
    "premium sovga yetkazilganini bilish",
  ],
  howToSteps: [
    { name: "Botni oching", text: "Telegramda @StarsPaymee_bot ni oching yoki Mini App’ni ishga tushiring." },
    { name: "Premium’ni tanlang", text: "Mahsulotlar ichidan Telegram Premium bo‘limini tanlang." },
    {
      name: "Qabul qiluvchi username’ini kiriting",
      text: "Sovg‘a qiladigan odamning @username’ini kiriting — login yoki parol kerak emas.",
    },
    { name: "Muddatni tanlang", text: "3, 6 yoki 12 oylik paketni tanlang." },
    { name: "So‘mda to‘lang", text: "UzCard, HUMO, Click, Payme, Uzum yoki Paynet." },
    {
      name: "Yetkazilganini tasdiqlang",
      text: "Botdagi status, qabul qiluvchi profilidagi rozetka va Telegram bildirishnomasi.",
    },
  ],
  locales: {
    uz: {
      title: "Telegram Premium’ni username orqali qanday sovg‘a qilinadi?",
      excerpt:
        "Premium sovg‘asining to‘liq qo‘llanmasi: username’ni to‘g‘ri tekshirish, odamda obuna bor-yo‘qligini bilish, yetkazilganini tasdiqlash va muddat tanlash.",
      metaTitle: "Telegram Premium’ni username orqali sovg‘a qilish",
      metaDescription:
        "Telegram Premium’ni username orqali sovg‘a qilish: username tekshiruvi, mavjud obuna holati, yetkazilganini tasdiqlashning uch usuli va muddat tanlash.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Premium sovg‘a qilasizmi?",
      ctaBody: "Botda @username’ni kiriting, so‘mda to‘lang — Premium 10 soniyada qabul qiluvchida faollashadi.",
      faq: uzFaq,
    },
    ru: {
      title: "Как подарить Telegram Premium по username?",
      excerpt:
        "Полное руководство по подарку Premium: как проверить username, есть ли у человека подписка, как подтвердить доставку и какой срок выбрать.",
      metaTitle: "Как подарить Telegram Premium по username",
      metaDescription:
        "Как подарить Telegram Premium по username: проверка username, статус текущей подписки, три способа подтвердить доставку и выбор срока.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Подарить Premium?",
      ctaBody: "Введите @username в боте, оплатите в сумах — Premium активируется у получателя за 10 секунд.",
      faq: ruFaq,
    },
    en: {
      title: "How to gift Telegram Premium by username",
      excerpt:
        "The complete guide to gifting Premium: checking the username, seeing whether they already have a subscription, confirming delivery and picking a term.",
      metaTitle: "How to gift Telegram Premium by username",
      metaDescription:
        "Gifting Telegram Premium by username: verifying the username, the recipient’s current subscription status, three delivery checks and choosing a term.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Gifting Premium?",
      ctaBody: "Enter the @username in the bot and pay in so‘m — Premium activates for them in 10 seconds.",
      faq: enFaq,
    },
  },
};
