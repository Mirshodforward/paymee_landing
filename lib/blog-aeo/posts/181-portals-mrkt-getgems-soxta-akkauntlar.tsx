import { Link } from "@/i18n/navigation";
import {
  CompareTable,
  InfoCard,
  InfoGrid,
  InlineCta,
  KeyFacts,
  No,
  Notice,
  Sources,
  Step,
  Steps,
  Toc,
  Yes,
} from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "portals-mrkt-getgems-soxta-akkauntlar";

/** Soxta akkauntni farqlash — nimaga qarash kerak va nimaga qaramaslik kerak. */
function SignalTable({ locale }: { locale: "uz" | "ru" | "en" }) {
  const copy = {
    uz: {
      headers: ["Belgi", "Nimani anglatadi", "Ishonsa bo‘ladimi"],
      rows: [
        ["Ismi «Portals Support»", "Ism istalgan odam qo‘ya oladi", "Yo‘q"],
        ["Avatar market logotipi", "Rasm ko‘chirilgan bo‘lishi mumkin", "Yo‘q"],
        ["Kanalda ko‘p obunachi", "Obunachi sotib olinadi", "Yo‘q"],
        ["Siz o‘zingiz ilovadan ochdingiz", "Manzil market ilovasidan keldi", "Ha"],
        ["Telegram xizmat akkauntining xabari", "Tizim xabari, nusxalab bo‘lmaydi", "Ha"],
      ],
    },
    ru: {
      headers: ["Признак", "Что это значит", "Можно ли доверять"],
      rows: [
        ["Имя «Portals Support»", "Имя может поставить кто угодно", "Нет"],
        ["Аватар с логотипом маркета", "Картинку легко скопировать", "Нет"],
        ["Много подписчиков в канале", "Подписчиков покупают", "Нет"],
        ["Вы открыли сами из приложения", "Ссылка пришла из самого маркета", "Да"],
        ["Сообщение служебного аккаунта Telegram", "Системное, подделать нельзя", "Да"],
      ],
    },
    en: {
      headers: ["Signal", "What it means", "Can you trust it"],
      rows: [
        ["The name “Portals Support”", "Anyone can set that name", "No"],
        ["An avatar with the market’s logo", "An image is easy to copy", "No"],
        ["A channel with many subscribers", "Subscribers can be bought", "No"],
        ["You opened it from the app yourself", "The link came from the market itself", "Yes"],
        ["A message from Telegram’s service account", "A system message, it cannot be faked", "Yes"],
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
      Telegram <b>Portals</b>, <b>MRKT</b>, <b>Getgems</b> va <b>Tonnel</b> kabi sovg‘a
      maydonchalariga sovg‘a yuborilganda o‘zining <b>xizmat akkaunti</b> orqali qo‘shimcha
      ogohlantirish yubora boshladi: market nomidan yozayotgan akkauntni tekshiring. Asosiy qoida
      o‘zgarmaydi — <b>Telegram ham, market ham hech qachon parol yoki kirish kodini so‘ramaydi</b>.
      Rasmiy akkauntlar ro‘yxatini faqat marketning o‘z ilovasidan tasdiqlang.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima-boldi", label: "Nima o‘zgardi" },
          { href: "#nega", label: "Nega aynan shu paytda" },
          { href: "#sxema", label: "Firibgarlik sxemasi qanday ishlaydi" },
          { href: "#tekshirish", label: "Akkauntni qanday tekshirish kerak" },
          { href: "#belgilar", label: "Nimaga ishonmaslik kerak" },
          { href: "#royxat", label: "Nega biz akkaunt ro‘yxatini bermaymiz" },
          { href: "#aldandim", label: "Agar aldangan bo‘lsangiz" },
          { href: "#biz", label: "Bu StarsPaymee’ga qanday aloqador" },
        ]}
      />

      <h2 id="nima-boldi">Nima o‘zgardi</h2>
      <p>
        Sovg‘ani marketga (Portals, MRKT, Getgems, Tonnel va shunga o‘xshash maydonchalarga)
        yuborganingizdan so‘ng, Telegramning <b>ko‘k belgili xizmat akkaunti</b> qo‘shimcha xabar
        yuboradi. Xabarning mazmuni taxminan shunday:
      </p>
      <Notice label="Xizmat akkauntining xabari (mazmuni)">
        Market nomidan yozayotgan <b>soxta akkauntlardan ehtiyot bo‘ling</b>. Marketning rasmiy
        akkauntlari — asosiy ilova, qo‘llab-quvvatlash boti va sovg‘a saqlanadigan akkaunt.
        <b> Boshqa har qanday akkaunt</b>, o‘zini market vakili deb tanishtirsa ham,{" "}
        <b>firibgar</b>. Telegram siz bilan faqat shu akkaunt orqali bog‘lanadi va{" "}
        <b>hech qachon parol yoki kirish kodini so‘ramaydi</b>.
      </Notice>
      <p>
        Bu xabar sizga <b>yangi ma’lumot</b> bergani uchun emas, balki <b>aynan o‘sha daqiqada</b>{" "}
        kelgani uchun qimmatli. Sovg‘a yuborilgan payt — firibgar uchun eng qulay lahza, chunki siz
        market javobini kutayotgan bo‘lasiz.
      </p>

      <h2 id="nega">Nega aynan shu paytda</h2>
      <p>
        Sovg‘ani marketga yuborish ochiq harakat: uni kuzatish mumkin. Firibgar buni ko‘radi va
        sizga <b>bir necha soniya ichida</b> yozadi — go‘yo market qo‘llab-quvvatlash xizmati.
      </p>
      <KeyFacts label="Nima uchun bu ishlaydi">
        <li>
          <b>Vaqt mos tushadi</b> — siz endigina sovg‘a yuborgansiz, xabar tabiiy ko‘rinadi.
        </li>
        <li>
          <b>Ism va avatar bir xil</b> — logotip va nomni ko‘chirish bir daqiqalik ish.
        </li>
        <li>
          <b>Shoshiltirish bor</b> — «tranzaksiya to‘xtab qoldi, tezda tasdiqlang» degan ohang.
        </li>
        <li>
          <b>Siz kutayotgan bo‘lasiz</b> — kutayotgan odam tekshirishga kamroq vaqt sarflaydi.
        </li>
      </KeyFacts>

      <h2 id="sxema">Firibgarlik sxemasi qanday ishlaydi</h2>
      <Steps>
        <Step title="1. Siz sovg‘ani marketga yuborasiz">
          Bu normal harakat — sotuvga qo‘yish yoki saqlash uchun.
        </Step>
        <Step title="2. Darhol «support» yozadi">
          Ismi va avatari marketniki. Ko‘pincha «tranzaksiya tasdiqlanmadi» deb boshlanadi.
        </Step>
        <Step title="3. Havola yuboradi">
          Tashqi ko‘rinishi market sahifasiga o‘xshash, lekin manzili boshqa sayt.
        </Step>
        <Step title="4. Kirishni so‘raydi">
          «Akkauntni tasdiqlang» degan bahona bilan telefon raqami, SMS-kod yoki 2FA paroli
          so‘raladi. <b>Aynan shu yerda to‘xtash kerak.</b>
        </Step>
        <Step title="5. Akkaunt qo‘ldan ketadi">
          Kod berilsa, akkauntga kirib olinadi va undagi sovg‘alar boshqa joyga o‘tkaziladi.
        </Step>
      </Steps>
      <Notice label="Eng muhim jumla">
        <b>Kirish kodi va 2FA paroli hech kimga, hech qachon, hech qanday sabab bilan berilmaydi.</b>{" "}
        Na Telegram, na market, na «administrator» uni so‘ramaydi. Bu so‘ralgan payt — suhbatning
        oxiri.
      </Notice>

      <h2 id="tekshirish">Akkauntni qanday tekshirish kerak</h2>
      <p>
        Bitta ishonchli usul bor va u juda oddiy: <b>siz o‘zingiz boshlang</b>. Kimdir sizga yozgan
        chatda javob bermang — marketning ilovasini oching va qo‘llab-quvvatlashga <b>o‘sha yerdan</b>{" "}
        kiring.
      </p>
      <InfoGrid>
        <InfoCard emoji="📲" title="Ilovadan kiring">
          Marketning mini-ilovasi ichida qo‘llab-quvvatlash havolasi bor. Faqat shu havolaga ishoning.
        </InfoCard>
        <InfoCard emoji="🔍" title="Manzilni o‘qing">
          Username’ni belgi-belgilab solishtiring: <b>l</b> va <b>I</b>, <b>0</b> va <b>O</b> almashtiriladi.
        </InfoCard>
        <InfoCard emoji="🕒" title="Shoshmang">
          Haqiqiy support sizni shoshiltirmaydi. Shoshirish — o‘zi bitta belgi.
        </InfoCard>
        <InfoCard emoji="🚫" title="Havolaga bosmang">
          Noma’lum akkaunt yuborgan havolani ochmang, hatto qiziq bo‘lsa ham.
        </InfoCard>
      </InfoGrid>
      <p>
        Sovg‘a havolasini tekshirishning batafsil usullari alohida maqolada:{" "}
        <Link href="/blog/telegram-gift-havolasini-tekshirish">
          Telegram sovg‘a havolasini qanday tekshirish
        </Link>
        .
      </p>

      <h2 id="belgilar">Nimaga ishonmaslik kerak</h2>
      <SignalTable locale="uz" />
      <InfoGrid>
        <InfoCard emoji="🟢" title="Yaxshi odat">
          <Yes>Har doim ilovadan boshlash</Yes>
          <Yes>2FA parolini yoqib qo‘yish</Yes>
          <Yes>Faol sessiyalarni vaqti-vaqti bilan ko‘rib chiqish</Yes>
        </InfoCard>
        <InfoCard emoji="🔴" title="Xavfli odat">
          <No>O‘zi yozgan «support» ga javob berish</No>
          <No>Skrinshotni dalil deb qabul qilish</No>
          <No>«Tez bo‘ling» degan xabarga ergashish</No>
        </InfoCard>
      </InfoGrid>

      <h2 id="royxat">Nega biz bu yerda akkaunt ro‘yxatini bermaymiz</h2>
      <p>
        Odatda bunday maqolalarda «mana rasmiy akkauntlar» degan ro‘yxat beriladi. Biz ataylab
        bermaymiz va sababini ochiq aytamiz.
      </p>
      <KeyFacts label="Sabablari">
        <li>
          <b>Ro‘yxat eskiradi.</b> Marketlar akkauntini o‘zgartirsa, maqoladagi eski username
          firibgarga bo‘shab qoladi.
        </li>
        <li>
          <b>Uchinchi tomon ro‘yxati isbot emas.</b> Bizning saytimizda yozilgani — akkauntni
          haqiqiy qilmaydi.
        </li>
        <li>
          <b>To‘g‘ri manba bitta.</b> Rasmiy akkauntni <b>marketning o‘z ilovasidan</b> va Telegram
          xizmat akkauntining xabaridan tasdiqlash kerak.
        </li>
      </KeyFacts>
      <p>
        Ya’ni to‘g‘ri savol «qaysi username rasmiy?» emas, balki <b>«men bu manzilni qayerdan
        oldim?»</b>. Agar javob «o‘zi yozgan edi» bo‘lsa — u rasmiy emas.
      </p>

      <h2 id="aldandim">Agar aldangan bo‘lsangiz</h2>
      <Steps>
        <Step title="1. Sessiyalarni tekshiring">
          Telegram → Sozlamalar → Qurilmalar. Notanish sessiyalarni darhol yopib tashlang.
        </Step>
        <Step title="2. 2FA parolini almashtiring">
          Sozlamalar → Maxfiylik va xavfsizlik → Ikki bosqichli tasdiqlash.
        </Step>
        <Step title="3. Marketga o‘z ilovasidan yozing">
          Firibgar yozgan chatdan emas — ilovadagi rasmiy qo‘llab-quvvatlash havolasidan.
        </Step>
        <Step title="4. Firibgar akkauntini shikoyat qiling">
          Chatda «Report» → «Scam or fraud». Bu keyingi odamni himoya qiladi.
        </Step>
        <Step title="5. Yaqinlaringizni ogohlantiring">
          Sizning akkauntingizdan ular ham xabar olishi mumkin.
        </Step>
      </Steps>
      <Notice label="Ochiq gap">
        Sovg‘a boshqa akkauntga o‘tkazib yuborilgan bo‘lsa, uni qaytarish <b>ko‘pincha imkonsiz</b>.
        Shuning uchun bu maqoladagi barcha maslahat <b>oldini olishga</b> qaratilgan.
      </Notice>

      <h2 id="biz">Bu StarsPaymee’ga qanday aloqador</h2>
      <p>
        To‘g‘ridan-to‘g‘ri aloqasi yo‘q, lekin bilib qo‘yganingiz foydali:{" "}
        <b>@StarsPaymee_bot kolleksion sovg‘alarni yetkazmaydi</b> — Telegram bu imkoniyatni botlar
        uchun yopgan. Buni batafsil{" "}
        <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">alohida maqolada</Link> yozganmiz.
      </p>
      <p>
        Demak, kimdir «StarsPaymee nomidan» sizga kolleksion gift taklif qilsa yoki akkauntingizga
        kirishni so‘rasa — bu biz emas. Bizning xaridimizda <b>faqat ochiq @username</b> kerak
        bo‘ladi: parol ham, SMS-kod ham, 2FA ham hech qachon so‘ralmaydi.
      </p>

      <InlineCta text="Stars va Premium — parolsiz, faqat username orqali." product={{ kind: "open" }} />

      <Sources
        label="Foydali havolalar"
        items={[
          { href: "https://telegram.org/faq", label: "Telegram FAQ", note: "xavfsizlik bo‘limi" },
          {
            href: "https://telegram.org/privacy",
            label: "Telegram Privacy Policy",
            note: "ma’lumotlar bilan ishlash",
          },
          { href: "https://t.me/StarsPaymeeSupport", label: "@StarsPaymeeSupport", note: "savollar uchun" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Telegram начал присылать дополнительное предупреждение через свой <b>служебный аккаунт</b>, когда
      подарок отправляется на площадки вроде <b>Portals</b>, <b>MRKT</b>, <b>Getgems</b> и{" "}
      <b>Tonnel</b>: проверьте аккаунт, который пишет от имени маркета. Главное правило не меняется —{" "}
      <b>ни Telegram, ни маркет никогда не спрашивают пароль или код входа</b>. Список официальных
      аккаунтов подтверждайте только в самом приложении маркета.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nima-boldi", label: "Что изменилось" },
          { href: "#nega", label: "Почему именно в этот момент" },
          { href: "#sxema", label: "Как работает схема обмана" },
          { href: "#tekshirish", label: "Как проверить аккаунт" },
          { href: "#belgilar", label: "Чему не стоит верить" },
          { href: "#royxat", label: "Почему мы не даём список аккаунтов" },
          { href: "#aldandim", label: "Если вас обманули" },
          { href: "#biz", label: "Как это связано со StarsPaymee" },
        ]}
      />

      <h2 id="nima-boldi">Что изменилось</h2>
      <p>
        После того как вы отправили подарок на маркет (Portals, MRKT, Getgems, Tonnel и подобные
        площадки), <b>служебный аккаунт Telegram с синей галочкой</b> присылает дополнительное
        сообщение. Смысл примерно такой:
      </p>
      <Notice label="Сообщение служебного аккаунта (смысл)">
        <b>Остерегайтесь поддельных аккаунтов</b>, которые пишут от имени маркета. Официальные
        аккаунты маркета — это основное приложение, бот поддержки и аккаунт хранения подарков.{" "}
        <b>Любой другой аккаунт</b>, даже если он представляется представителем маркета, —{" "}
        <b>мошеннический</b>. Telegram связывается с вами только через этот аккаунт и{" "}
        <b>никогда не запрашивает пароль или код входа</b>.
      </Notice>
      <p>
        Ценность этого сообщения не в <b>новой информации</b>, а в том, что оно приходит{" "}
        <b>именно в ту минуту</b>. Момент отправки подарка — самый удобный для мошенника, потому что
        вы как раз ждёте ответа маркета.
      </p>

      <h2 id="nega">Почему именно в этот момент</h2>
      <p>
        Отправка подарка на маркет — открытое действие, его видно. Мошенник замечает это и пишет вам{" "}
        <b>через считаные секунды</b> — якобы от службы поддержки маркета.
      </p>
      <KeyFacts label="Почему это срабатывает">
        <li>
          <b>Совпадает время</b> — вы только что отправили подарок, сообщение выглядит естественно.
        </li>
        <li>
          <b>Имя и аватар те же</b> — скопировать логотип и название — минутное дело.
        </li>
        <li>
          <b>Есть спешка</b> — тон «транзакция зависла, срочно подтвердите».
        </li>
        <li>
          <b>Вы в ожидании</b> — ожидающий человек тратит меньше времени на проверку.
        </li>
      </KeyFacts>

      <h2 id="sxema">Как работает схема обмана</h2>
      <Steps>
        <Step title="1. Вы отправляете подарок на маркет">
          Обычное действие — чтобы выставить на продажу или сохранить.
        </Step>
        <Step title="2. Сразу пишет «поддержка»">
          Имя и аватар маркета. Чаще всего начинают с «транзакция не подтвердилась».
        </Step>
        <Step title="3. Присылают ссылку">
          Внешне похожа на страницу маркета, но адрес — другого сайта.
        </Step>
        <Step title="4. Просят войти">
          Под предлогом «подтвердите аккаунт» запрашивают номер телефона, SMS-код или пароль 2FA.{" "}
          <b>Вот здесь нужно остановиться.</b>
        </Step>
        <Step title="5. Аккаунт уходит">
          Если код передан, в аккаунт входят и переводят подарки в другое место.
        </Step>
      </Steps>
      <Notice label="Самая важная фраза">
        <b>Код входа и пароль 2FA не передаются никому, никогда и ни по какой причине.</b> Их не
        спрашивают ни Telegram, ни маркет, ни «администратор». Как только их спросили — разговор
        окончен.
      </Notice>

      <h2 id="tekshirish">Как проверить аккаунт</h2>
      <p>
        Надёжный способ один, и он простой: <b>начните сами</b>. Не отвечайте в чате, где вам
        написали, — откройте приложение маркета и зайдите в поддержку <b>оттуда</b>.
      </p>
      <InfoGrid>
        <InfoCard emoji="📲" title="Заходите из приложения">
          Внутри мини-приложения маркета есть ссылка на поддержку. Доверяйте только ей.
        </InfoCard>
        <InfoCard emoji="🔍" title="Читайте адрес">
          Сверяйте username посимвольно: <b>l</b> и <b>I</b>, <b>0</b> и <b>O</b> подменяют.
        </InfoCard>
        <InfoCard emoji="🕒" title="Не спешите">
          Настоящая поддержка вас не торопит. Спешка — сама по себе признак.
        </InfoCard>
        <InfoCard emoji="🚫" title="Не нажимайте на ссылки">
          Не открывайте ссылки от незнакомых аккаунтов, даже если любопытно.
        </InfoCard>
      </InfoGrid>
      <p>
        Подробные способы проверки ссылки на подарок — в отдельной статье:{" "}
        <Link href="/blog/telegram-gift-havolasini-tekshirish">
          как проверить ссылку на подарок Telegram
        </Link>
        .
      </p>

      <h2 id="belgilar">Чему не стоит верить</h2>
      <SignalTable locale="ru" />
      <InfoGrid>
        <InfoCard emoji="🟢" title="Хорошая привычка">
          <Yes>Всегда начинать из приложения</Yes>
          <Yes>Держать включённым пароль 2FA</Yes>
          <Yes>Время от времени просматривать активные сессии</Yes>
        </InfoCard>
        <InfoCard emoji="🔴" title="Опасная привычка">
          <No>Отвечать «поддержке», которая написала первой</No>
          <No>Принимать скриншот за доказательство</No>
          <No>Поддаваться на «поторопитесь»</No>
        </InfoCard>
      </InfoGrid>

      <h2 id="royxat">Почему мы не даём здесь список аккаунтов</h2>
      <p>
        Обычно в таких статьях приводят список «вот официальные аккаунты». Мы сознательно этого не
        делаем и честно объясняем почему.
      </p>
      <KeyFacts label="Причины">
        <li>
          <b>Список устаревает.</b> Если маркет сменит аккаунт, старый username из статьи освободится
          — и достанется мошеннику.
        </li>
        <li>
          <b>Список третьей стороны — не доказательство.</b> То, что написано на нашем сайте, не
          делает аккаунт настоящим.
        </li>
        <li>
          <b>Верный источник один.</b> Официальный аккаунт нужно подтверждать{" "}
          <b>в самом приложении маркета</b> и в сообщении служебного аккаунта Telegram.
        </li>
      </KeyFacts>
      <p>
        То есть правильный вопрос не «какой username официальный?», а <b>«откуда я взял этот
        адрес?»</b>. Если ответ «он сам мне написал» — значит, не официальный.
      </p>

      <h2 id="aldandim">Если вас обманули</h2>
      <Steps>
        <Step title="1. Проверьте сессии">
          Telegram → Настройки → Устройства. Незнакомые сессии закройте немедленно.
        </Step>
        <Step title="2. Смените пароль 2FA">
          Настройки → Конфиденциальность и безопасность → Двухэтапная аутентификация.
        </Step>
        <Step title="3. Напишите маркету из его приложения">
          Не из чата мошенника, а по официальной ссылке поддержки внутри приложения.
        </Step>
        <Step title="4. Пожалуйтесь на аккаунт мошенника">
          В чате «Report» → «Scam or fraud». Это защитит следующего человека.
        </Step>
        <Step title="5. Предупредите близких">
          Им тоже могут прийти сообщения с вашего аккаунта.
        </Step>
      </Steps>
      <Notice label="Говорим прямо">
        Если подарок уже переведён на другой аккаунт, вернуть его <b>чаще всего невозможно</b>.
        Поэтому все советы в этой статье — про <b>предотвращение</b>.
      </Notice>

      <h2 id="biz">Как это связано со StarsPaymee</h2>
      <p>
        Напрямую — никак, но знать полезно: <b>@StarsPaymee_bot не доставляет коллекционные
        подарки</b> — Telegram закрыл эту возможность для ботов. Подробно мы написали об этом{" "}
        <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">в отдельной статье</Link>.
      </p>
      <p>
        Значит, если кто-то «от имени StarsPaymee» предлагает вам коллекционный подарок или просит
        доступ к аккаунту — это не мы. Для покупки у нас нужен <b>только открытый @username</b>:
        пароль, SMS-код и 2FA не запрашиваются никогда.
      </p>

      <InlineCta text="Звёзды и Premium — без пароля, только по username." product={{ kind: "open" }} />

      <Sources
        label="Полезные ссылки"
        items={[
          { href: "https://telegram.org/faq", label: "Telegram FAQ", note: "раздел безопасности" },
          {
            href: "https://telegram.org/privacy",
            label: "Telegram Privacy Policy",
            note: "работа с данными",
          },
          { href: "https://t.me/StarsPaymeeSupport", label: "@StarsPaymeeSupport", note: "по вопросам" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      Telegram has started sending an extra warning through its <b>service account</b> when a gift is sent
      to a marketplace such as <b>Portals</b>, <b>MRKT</b>, <b>Getgems</b> or <b>Tonnel</b>: check the
      account writing to you in the market’s name. The underlying rule has not changed —{" "}
      <b>neither Telegram nor a marketplace ever asks for a password or a login code</b>. Confirm the list
      of official accounts only inside the market’s own app.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#nima-boldi", label: "What changed" },
          { href: "#nega", label: "Why at that particular moment" },
          { href: "#sxema", label: "How the scam works" },
          { href: "#tekshirish", label: "How to check an account" },
          { href: "#belgilar", label: "What not to trust" },
          { href: "#royxat", label: "Why we do not list the accounts" },
          { href: "#aldandim", label: "If you have been caught" },
          { href: "#biz", label: "How this relates to StarsPaymee" },
        ]}
      />

      <h2 id="nima-boldi">What changed</h2>
      <p>
        After you send a gift to a marketplace (Portals, MRKT, Getgems, Tonnel and similar venues),{" "}
        <b>Telegram’s blue-ticked service account</b> sends an additional message. It says roughly this:
      </p>
      <Notice label="The service account’s message, in substance">
        <b>Beware of fake accounts</b> writing in the market’s name. The market’s official accounts are its
        main app, its support bot and the account that holds gifts. <b>Any other account</b>, however it
        introduces itself, is <b>fraudulent</b>. Telegram will only contact you through this one account
        and <b>will never ask for your password or login codes</b>.
      </Notice>
      <p>
        The value of that message is not the <b>information</b> but the <b>timing</b>. The moment a gift is
        sent is the most convenient one for a scammer, because you are sitting there waiting for the
        market to respond.
      </p>

      <h2 id="nega">Why at that particular moment</h2>
      <p>
        Sending a gift to a market is a public action — it can be watched. A scammer sees it and writes to
        you <b>within seconds</b>, supposedly as the market’s support team.
      </p>
      <KeyFacts label="Why it works">
        <li>
          <b>The timing fits</b> — you have just sent a gift, so the message looks natural.
        </li>
        <li>
          <b>The name and avatar match</b> — copying a logo and a name takes a minute.
        </li>
        <li>
          <b>There is urgency</b> — the tone of “the transaction is stuck, confirm quickly”.
        </li>
        <li>
          <b>You are already waiting</b> — someone waiting spends less time checking.
        </li>
      </KeyFacts>

      <h2 id="sxema">How the scam works</h2>
      <Steps>
        <Step title="1. You send the gift to a market">
          An ordinary step — to list it for sale or to store it.
        </Step>
        <Step title="2. “Support” writes immediately">
          The name and avatar are the market’s. It usually opens with “the transaction was not confirmed”.
        </Step>
        <Step title="3. A link arrives">
          It looks like the market’s page, but the address belongs to a different site.
        </Step>
        <Step title="4. You are asked to log in">
          Under the pretext of “verify your account” they ask for your phone number, an SMS code or your
          2FA password. <b>This is the point to stop.</b>
        </Step>
        <Step title="5. The account is gone">
          Once a code is handed over, the account is entered and its gifts are moved elsewhere.
        </Step>
      </Steps>
      <Notice label="The one sentence that matters">
        <b>A login code and a 2FA password go to nobody, ever, for no reason at all.</b> Telegram does not
        ask for them, nor does a marketplace, nor an “administrator”. The moment they are asked for, the
        conversation is over.
      </Notice>

      <h2 id="tekshirish">How to check an account</h2>
      <p>
        There is one reliable method and it is simple: <b>start the contact yourself</b>. Do not reply in
        the chat where someone wrote to you — open the market’s app and reach support <b>from there</b>.
      </p>
      <InfoGrid>
        <InfoCard emoji="📲" title="Go in through the app">
          The market’s mini app carries its own support link. Trust that one only.
        </InfoCard>
        <InfoCard emoji="🔍" title="Read the address">
          Compare the username character by character: <b>l</b> and <b>I</b>, <b>0</b> and <b>O</b> get
          swapped.
        </InfoCard>
        <InfoCard emoji="🕒" title="Do not rush">
          Real support does not hurry you. Being hurried is itself a signal.
        </InfoCard>
        <InfoCard emoji="🚫" title="Do not tap the links">
          Do not open links from unknown accounts, however curious you are.
        </InfoCard>
      </InfoGrid>
      <p>
        There is a separate piece on checking a gift link in detail:{" "}
        <Link href="/blog/telegram-gift-havolasini-tekshirish">
          how to check a Telegram gift link
        </Link>
        .
      </p>

      <h2 id="belgilar">What not to trust</h2>
      <SignalTable locale="en" />
      <InfoGrid>
        <InfoCard emoji="🟢" title="Good habits">
          <Yes>Always starting from the app</Yes>
          <Yes>Keeping a 2FA password switched on</Yes>
          <Yes>Reviewing active sessions now and then</Yes>
        </InfoCard>
        <InfoCard emoji="🔴" title="Risky habits">
          <No>Replying to “support” that messaged first</No>
          <No>Treating a screenshot as proof</No>
          <No>Going along with “be quick about it”</No>
        </InfoCard>
      </InfoGrid>

      <h2 id="royxat">Why we do not list the accounts here</h2>
      <p>
        Articles like this usually print a list of “the official accounts”. We deliberately do not, and it
        is worth saying why.
      </p>
      <KeyFacts label="The reasons">
        <li>
          <b>A list goes stale.</b> If a market changes its account, the old username in the article is
          freed up — and a scammer can take it.
        </li>
        <li>
          <b>A third party’s list is not proof.</b> Something being written on our site does not make an
          account genuine.
        </li>
        <li>
          <b>There is one correct source.</b> An official account should be confirmed{" "}
          <b>inside the market’s own app</b> and in the message from Telegram’s service account.
        </li>
      </KeyFacts>
      <p>
        So the right question is not “which username is official?” but <b>“where did I get this address
        from?”</b> If the answer is “they messaged me”, it is not official.
      </p>

      <h2 id="aldandim">If you have been caught</h2>
      <Steps>
        <Step title="1. Check your sessions">
          Telegram → Settings → Devices. Terminate any session you do not recognise, straight away.
        </Step>
        <Step title="2. Change the 2FA password">
          Settings → Privacy and Security → Two-Step Verification.
        </Step>
        <Step title="3. Contact the market through its app">
          Not through the scammer’s chat — through the official support link inside the app.
        </Step>
        <Step title="4. Report the scammer’s account">
          In the chat, “Report” → “Scam or fraud”. It protects whoever is next.
        </Step>
        <Step title="5. Warn the people close to you">
          They may be getting messages from your account too.
        </Step>
      </Steps>
      <Notice label="Put plainly">
        If a gift has already been moved to another account, recovering it is <b>usually impossible</b>.
        That is why every piece of advice here is about <b>prevention</b>.
      </Notice>

      <h2 id="biz">How this relates to StarsPaymee</h2>
      <p>
        Not directly, but it is worth knowing: <b>@StarsPaymee_bot does not deliver collectible gifts</b> —
        Telegram has closed that route to bots. We wrote about it{" "}
        <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">separately</Link>.
      </p>
      <p>
        So if somebody offers you a collectible gift “on behalf of StarsPaymee”, or asks for access to your
        account, it is not us. Buying from us needs <b>nothing but a public @username</b>: a password, an
        SMS code or 2FA is never requested.
      </p>

      <InlineCta text="Stars and Premium — no password, just a username." product={{ kind: "open" }} />

      <Sources
        label="Useful links"
        items={[
          { href: "https://telegram.org/faq", label: "Telegram FAQ", note: "the security section" },
          {
            href: "https://telegram.org/privacy",
            label: "Telegram Privacy Policy",
            note: "how data is handled",
          },
          { href: "https://t.me/StarsPaymeeSupport", label: "@StarsPaymeeSupport", note: "for questions" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Telegram nega sovg‘a yuborganimdan keyin ogohlantirish yubordi?",
    answer:
      "Sovg‘a marketga yuborilgan payt firibgar uchun eng qulay lahza. Telegram aynan shu daqiqada xizmat akkaunti orqali soxta «support» dan ehtiyot bo‘lishni eslatadi.",
  },
  {
    question: "Portals, MRKT, Getgems va Tonnel xavfsizmi?",
    answer:
      "Ogohlantirish marketlarning o‘ziga emas, ular nomidan yozadigan soxta akkauntlarga tegishli. Xavf — marketda emas, sizga birinchi bo‘lib yozgan noma’lum akkauntda.",
  },
  {
    question: "Qaysi akkaunt rasmiy ekanini qanday bilaman?",
    answer:
      "Faqat bitta ishonchli yo‘l bor: marketning o‘z ilovasini ochib, qo‘llab-quvvatlashga o‘sha yerdan kirish. O‘zi yozgan akkaunt — rasmiy emas.",
  },
  {
    question: "Nega maqolada rasmiy akkauntlar ro‘yxati yo‘q?",
    answer:
      "Ro‘yxat eskiradi va eski username firibgarga o‘tib ketishi mumkin. Uchinchi tomon ro‘yxati akkauntni haqiqiy qilmaydi — manba marketning ilovasi bo‘lishi kerak.",
  },
  {
    question: "Telegram support parol yoki kod so‘raydimi?",
    answer: "Yo‘q. Na Telegram, na market, na bot kirish kodini yoki 2FA parolini so‘ramaydi. So‘ralsa — bu firibgar.",
  },
  {
    question: "Ko‘k belgisi bor akkauntga ishonsa bo‘ladimi?",
    answer:
      "Telegramning tizim xabari haqiqiy. Lekin oddiy chatdagi «belgi» rasmini avatarga qo‘yib olish mumkin — shuning uchun manzilni belgi-belgilab tekshiring.",
  },
  {
    question: "Kod berib qo‘ydim, nima qilay?",
    answer:
      "Darhol Sozlamalar → Qurilmalar bo‘limidan notanish sessiyalarni yoping va 2FA parolini almashtiring, so‘ng marketga uning ilovasidan yozing.",
  },
  {
    question: "O‘tkazib yuborilgan sovg‘ani qaytarib bo‘ladimi?",
    answer: "Ko‘pincha yo‘q. Shuning uchun asosiy e’tibor oldini olishga qaratiladi.",
  },
  {
    question: "StarsPaymee kolleksion sovg‘a sotadimi?",
    answer:
      "Yo‘q. Telegram kolleksion sovg‘alarni botlar orqali yetkazishni yopgan. Kimdir bizning nomimizdan buni taklif qilsa — u biz emas.",
  },
  {
    question: "Sizdan xarid qilishda parol so‘raladimi?",
    answer: "Hech qachon. Faqat ochiq @username kerak bo‘ladi — parol, SMS-kod va 2FA so‘ralmaydi.",
  },
];

const ruFaq = [
  {
    question: "Почему Telegram прислал предупреждение после отправки подарка?",
    answer:
      "Момент отправки подарка на маркет — самый удобный для мошенника. Именно в эту минуту Telegram через служебный аккаунт напоминает опасаться поддельной «поддержки».",
  },
  {
    question: "Portals, MRKT, Getgems и Tonnel безопасны?",
    answer:
      "Предупреждение касается не самих маркетов, а поддельных аккаунтов, которые пишут от их имени. Опасность не в маркете, а в незнакомом аккаунте, написавшем первым.",
  },
  {
    question: "Как понять, какой аккаунт официальный?",
    answer:
      "Надёжный путь один: открыть приложение маркета и зайти в поддержку оттуда. Аккаунт, который написал сам, официальным не является.",
  },
  {
    question: "Почему в статье нет списка официальных аккаунтов?",
    answer:
      "Список устаревает, а освободившийся username может достаться мошеннику. Список третьей стороны не делает аккаунт настоящим — источником должно быть приложение маркета.",
  },
  {
    question: "Запрашивает ли поддержка Telegram пароль или код?",
    answer: "Нет. Ни Telegram, ни маркет, ни бот не запрашивают код входа или пароль 2FA. Если спрашивают — это мошенник.",
  },
  {
    question: "Можно ли доверять аккаунту с синей галочкой?",
    answer:
      "Системное сообщение Telegram настоящее. Но картинку «галочки» можно поставить на аватар в обычном чате — поэтому сверяйте адрес посимвольно.",
  },
  {
    question: "Я передал код, что делать?",
    answer:
      "Немедленно закройте незнакомые сессии в разделе Настройки → Устройства и смените пароль 2FA, затем напишите маркету из его приложения.",
  },
  {
    question: "Можно ли вернуть переведённый подарок?",
    answer: "Чаще всего нет. Поэтому основной упор — на предотвращение.",
  },
  {
    question: "Продаёт ли StarsPaymee коллекционные подарки?",
    answer:
      "Нет. Telegram закрыл доставку коллекционных подарков через ботов. Если кто-то предлагает их от нашего имени — это не мы.",
  },
  {
    question: "Запрашиваете ли вы пароль при покупке?",
    answer: "Никогда. Нужен только открытый @username — пароль, SMS-код и 2FA не запрашиваются.",
  },
];

const enFaq = [
  {
    question: "Why did Telegram send a warning after I sent a gift?",
    answer:
      "The moment a gift goes to a marketplace is the most convenient one for a scammer. That is exactly when Telegram’s service account reminds you to beware of fake “support”.",
  },
  {
    question: "Are Portals, MRKT, Getgems and Tonnel safe?",
    answer:
      "The warning is not about the marketplaces themselves but about fake accounts writing in their name. The risk is not the market — it is the unknown account that messages you first.",
  },
  {
    question: "How do I tell which account is official?",
    answer:
      "There is one reliable way: open the market’s app and reach support from inside it. An account that contacted you first is not official.",
  },
  {
    question: "Why does this article not list the official accounts?",
    answer:
      "Lists go stale, and a freed-up username can end up with a scammer. A third party’s list does not make an account genuine — the source has to be the market’s own app.",
  },
  {
    question: "Does Telegram support ask for a password or a code?",
    answer: "No. Neither Telegram nor a marketplace nor a bot asks for a login code or a 2FA password. If they do, it is a scam.",
  },
  {
    question: "Can I trust an account with a blue tick?",
    answer:
      "Telegram’s system message is genuine. But a tick image can be put on an avatar in an ordinary chat, so compare the address character by character.",
  },
  {
    question: "I handed over a code — what now?",
    answer:
      "Terminate unfamiliar sessions under Settings → Devices immediately and change your 2FA password, then contact the market through its app.",
  },
  {
    question: "Can a transferred gift be recovered?",
    answer: "Usually not. That is why the emphasis falls on prevention.",
  },
  {
    question: "Does StarsPaymee sell collectible gifts?",
    answer:
      "No. Telegram has closed collectible gift delivery to bots. If somebody offers them in our name, it is not us.",
  },
  {
    question: "Do you ask for a password when I buy?",
    answer: "Never. All that is needed is a public @username — no password, no SMS code, no 2FA.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Xavfsizlik",
  type: "problem",
  datePublished: "2026-09-16",
  dateModified: "2026-09-16",
  keywords: [
    "portals soxta akkaunt",
    "telegram gift market firibgarlik",
    "getgems tonnel mrkt xavfsizmi",
    "telegram sovga marketiga yuborish xavfi",
    "portals фейковый аккаунт",
    "мошенники telegram подарки маркет",
    "telegram gift marketplace scam",
  ],
  locales: {
    uz: {
      title: "Portals, MRKT, Getgems va Tonnel nomidan yozadigan soxta akkauntlar",
      excerpt:
        "Telegram sovg‘a marketiga gift yuborilganda xizmat akkaunti orqali ogohlantirish yubora boshladi. Firibgarlik sxemasi qanday ishlaydi va akkauntni qanday tekshirish kerak.",
      metaTitle: "Portals va gift marketlar: soxta akkauntlar",
      metaDescription:
        "Telegram sovg‘a marketiga gift yuborilganda ogohlantirish yuboradi. Soxta «support» sxemasi, akkauntni tekshirish usuli va aldangan bo‘lsangiz nima qilish kerak.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Parolsiz, xavfsiz xarid",
      ctaBody: "@StarsPaymee_bot — Stars va Premium uchun faqat @username kerak, parol hech qachon so‘ralmaydi.",
      faq: uzFaq,
    },
    ru: {
      title: "Поддельные аккаунты от имени Portals, MRKT, Getgems и Tonnel",
      excerpt:
        "Telegram начал присылать предупреждение через служебный аккаунт при отправке подарка на маркет. Как устроена схема обмана и как проверить аккаунт.",
      metaTitle: "Portals и гифт-маркеты: поддельные аккаунты",
      metaDescription:
        "Telegram предупреждает при отправке подарка на маркет. Схема поддельной «поддержки», способ проверить аккаунт и что делать, если вас обманули.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Покупка без пароля",
      ctaBody: "@StarsPaymee_bot — для звёзд и Premium нужен только @username, пароль не запрашивается.",
      faq: ruFaq,
    },
    en: {
      title: "Fake accounts posing as Portals, MRKT, Getgems and Tonnel",
      excerpt:
        "Telegram now sends a warning through its service account when a gift goes to a marketplace. How the scam works and how to check an account properly.",
      metaTitle: "Portals and gift markets: fake accounts",
      metaDescription:
        "Telegram warns you when a gift goes to a marketplace. The fake “support” scam, how to verify an account and what to do if you have been caught.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Buying without a password",
      ctaBody: "@StarsPaymee_bot — Stars and Premium need only a @username; a password is never requested.",
      faq: enFaq,
    },
  },
};
