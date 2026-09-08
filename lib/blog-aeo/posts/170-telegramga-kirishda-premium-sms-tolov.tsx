import { Link } from "@/i18n/navigation";
import {
  CompareTable,
  InfoCard,
  InfoGrid,
  KeyFacts,
  Sources,
  Step,
  Steps,
  Toc,
} from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegramga-kirishda-premium-sms-tolov";

/** Kirish uchun to‘lov va oddiy Premium xaridi — bir xil narsa emas. */
function LoginVsPremium({ locale }: { locale: "uz" | "ru" }) {
  const copy = {
    uz: {
      headers: ["Jihat", "Kirish uchun to‘lov talabi", "Oddiy Premium xaridi"],
      rows: [
        ["Qachon chiqadi", "Kirish yoki ro‘yxatdan o‘tish paytida", "Xohlagan vaqtingizda, akkauntga kirgan holda"],
        ["Nimaga bog‘liq", "Mamlakat va operatorda SMS narxi yuqoriligiga", "Sizning xohishingizga"],
        ["Kim uchun", "Aynan shu kirish urinishi uchun", "Akkauntning o‘zi uchun"],
        ["Qanday to‘lanadi", "Ilova ko‘rsatgan do‘kon mahsuloti orqali", "Istalgan qulay usulda"],
        ["Maqsad", "Kirishni davom ettirish", "Premium imkoniyatlaridan foydalanish"],
      ],
    },
    ru: {
      headers: ["Аспект", "Требование оплаты при входе", "Обычная покупка Premium"],
      rows: [
        ["Когда появляется", "Во время входа или регистрации", "В любой момент, уже внутри аккаунта"],
        ["От чего зависит", "От высокой стоимости SMS в стране и у оператора", "От вашего желания"],
        ["Для чего", "Для конкретной попытки входа", "Для самого аккаунта"],
        ["Как оплачивается", "Через магазинный продукт, который показывает приложение", "Любым удобным способом"],
        ["Цель", "Продолжить вход", "Пользоваться возможностями Premium"],
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
      Bu haqiqatan Telegramda mavjud oqim: rasmiy hujjatda yozilishicha, ayrim mamlakat va operatorlarda{" "}
      <b>SMS-kod narxi juda yuqori bo‘lgani uchun</b> ilova kirishni davom ettirish uchun Telegram Premium
      obunasini sotib olishni talab qilishi mumkin. Ya’ni Telegram umuman pullik bo‘lgani emas — bu{" "}
      <b>aynan shu kirish urinishiga</b> tegishli shart. Shunga o‘xshash soxta oynalar ham uchraydi, shuning
      uchun avval ekrandagi xabarni tekshirish kerak.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#xabar", label: "Ekranda qanday xabar chiqyapti" },
          { href: "#rasmiymi", label: "Bu Telegramning o‘z oynasimi" },
          { href: "#farq", label: "Kirish to‘lovi va Premium xaridi farqi" },
          { href: "#tekshirish", label: "Qanday tekshirish kerak" },
          { href: "#tolangan", label: "To‘landi, lekin kirish ochilmadi" },
          { href: "#bizdan", label: "Bizdan Premium olsam ochiladimi" },
        ]}
      />

      <h2 id="xabar">Ekranda aynan qanday xabar chiqyapti?</h2>
      <p>
        Birinchi qadam — xabarni diqqat bilan o‘qish. Uchta butunlay boshqa holat bir-biriga o‘xshab ketadi:
      </p>
      <InfoGrid>
        <InfoCard emoji="💳" title="Kirish uchun to‘lov talabi">
          Ilova kirishni davom ettirish uchun Premium obunasini sotib olishni taklif qiladi va narxni ko‘rsatadi.
          Bu — rasmiy hujjatda tasvirlangan oqim.
        </InfoCard>
        <InfoCard emoji="⭐" title="Oddiy Premium reklamasi">
          Telegram vaqti-vaqti bilan Premium’ni taklif qiladi. Bunda kirish bloklanmaydi — taklifni yopib
          ketaverish mumkin.
        </InfoCard>
        <InfoCard emoji="📵" title="SMS shunchaki kelmayapti">
          Bu — yetkazish muammosi, to‘lov talabi emas. Sababi operator, tarmoq yoki raqamda.
        </InfoCard>
        <InfoCard emoji="🚩" title="Soxta oyna">
          Karta ma’lumotini so‘raydigan, Telegramdan tashqarida ochiladigan yoki shoshiltiradigan sahifa.
        </InfoCard>
      </InfoGrid>
      <p>
        SMS umuman kelmayotgan bo‘lsa, bu boshqa mavzu —{" "}
        <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">akkaunt xavfsizligi</Link> emas, yetkazish
        masalasi va u alohida yechiladi.
      </p>

      <h2 id="rasmiymi">Bu Telegramning o‘z oynasimi?</h2>
      <p>
        Rasmiy oqimda to‘lov <b>ilovaning o‘zi ichida</b> boshlanadi va tizim do‘koni orqali o‘tadi. Hujjatda
        aynan shu tarzda tasvirlangan: ilova to‘lov uchun do‘kon mahsuloti, valyuta va summani oladi.
      </p>
      <KeyFacts label="Rasmiy oqim belgilari">
        <li>Oyna Telegram ilovasining ichida ochiladi, brauzerga otib yubormaydi.</li>
        <li>To‘lov qurilmangizdagi ilova do‘koni orqali o‘tadi — uning odatiy tasdiq oynasi chiqadi.</li>
        <li>Sizdan karta raqami, CVV yoki parol alohida sahifada so‘ralmaydi.</li>
        <li>Summa va valyuta ekranda oldindan ko‘rsatiladi.</li>
      </KeyFacts>
      <KeyFacts label="Soxta oyna belgilari">
        <li>Havola Telegramdan tashqariga, notanish domenga olib chiqadi.</li>
        <li>Karta ma’lumotlarini to‘g‘ridan-to‘g‘ri formaga kiritish so‘raladi.</li>
        <li>«Faqat 5 daqiqa qoldi» kabi shoshiltiruvchi matn bor.</li>
        <li>Kirish kodini yoki parolni birovga yuborish talab qilinadi — buni Telegram hech qachon so‘ramaydi.</li>
      </KeyFacts>

      <h2 id="farq">Kirish uchun to‘lov bilan oddiy Premium xaridi nimasi bilan farq qiladi</h2>
      <LoginVsPremium locale="uz" />
      <p>
        Eng muhim farq shu: kirish uchun to‘lov <b>kirish jarayonining bir qismi</b> sifatida, ilova ko‘rsatgan
        do‘kon mahsuloti orqali amalga oshiriladi. Oddiy Premium xaridi esa akkauntga kirgandan keyin, istalgan
        usulda qilinadi.
      </p>

      <h2 id="tekshirish">Qanday tekshirish kerak?</h2>
      <Steps>
        <Step title="1. Ilova rasmiyligini tekshiring">
          Telegram faqat rasmiy ilova do‘konidan yoki telegram.org dan o‘rnatilgan bo‘lsin. Modifikatsiyalangan
          («plus», «mod») ilovalarda bunday oynalar ishonchsiz.
        </Step>
        <Step title="2. Ilovani yangilang">
          Eski versiyalarda kirish oqimlari to‘g‘ri ko‘rsatilmasligi mumkin.
        </Step>
        <Step title="3. Boshqa ochiq seansdan foydalaning">
          Agar boshqa qurilmada shu akkaunt allaqachon ochiq bo‘lsa, yangi qurilmani o‘sha yerdan tasdiqlash
          mumkin — bu ko‘pincha eng tez yo‘l.
        </Step>
        <Step title="4. Ekrandagi yordam havolasini o‘qing">
          Rasmiy oynada odatda tushuntirish yoki yordam havolasi bo‘ladi. Uni o‘qib chiqing.
        </Step>
        <Step title="5. Shubha bo‘lsa — to‘lamang">
          Ekranni yopib, ilovani qayta oching. Rasmiy talab yo‘qolmaydi; soxta oyna esa ko‘pincha qaytmaydi.
        </Step>
      </Steps>

      <h2 id="tolangan">To‘lov qilingan, lekin kirish ochilmagan bo‘lsa</h2>
      <p>
        Bu holatda murojaat <b>to‘lovni qabul qilgan tomonga</b> qilinadi. To‘lov ilova do‘koni orqali o‘tgan
        bo‘lsa, chek ham o‘sha do‘kon hisobingizda bo‘ladi.
      </p>
      <KeyFacts label="Tayyorlab qo‘yiladigan ma’lumotlar">
        <li>To‘lov cheki yoki tranzaksiya raqami.</li>
        <li>To‘lov sanasi va taxminiy vaqti.</li>
        <li>Kirishga urinilgan telefon raqami.</li>
        <li>Ekrandagi xato matnining skrinshoti — shaxsiy ma’lumotlar yopilgan holda.</li>
      </KeyFacts>
      <p>
        Telegramning o‘z yordam kanallari va ilova do‘koni qo‘llab-quvvatlashi — shu holat uchun to‘g‘ri manzil.
        Uchinchi tomon xizmatlari boshqa odamning kirishini ocha olmaydi.
      </p>

      <h2 id="bizdan">«Bizdan Premium olsangiz kirish ochiladi» — bunday va’da bermaymiz</h2>
      <p>
        Buni ochiq aytamiz: rasmiy hujjatda bu oqim <b>ilova ko‘rsatgan do‘kon mahsuloti</b> bilan bog‘langan.
        Boshqa yo‘l bilan olingan Premium obunasi shu ekranni ochishini biz tekshirmaganmiz va shuning uchun
        kafolat bera olmaymiz.
      </p>
      <p>
        Agar sizga Premium <b>o‘z imkoniyatlari uchun</b> kerak bo‘lsa —{" "}
        <Link href="/blog/telegram-premium-eng-oson-usul">xarid tartibi</Link> va{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">narxlar</Link> alohida yozilgan. Lekin uni
        aynan kirish oynasini ochish maqsadida sotib olishni tavsiya qilmaymiz.
      </p>

      <Sources
        label="Manbalar"
        items={[
          {
            href: "https://core.telegram.org/api/auth",
            label: "core.telegram.org/api/auth",
            note: "kirishda to‘lov talab qilinadigan oqim",
          },
          { href: "https://telegram.org/faq", label: "telegram.org/faq", note: "Telegram umumiy FAQ" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Такой сценарий в Telegram действительно существует: в официальной документации сказано, что в отдельных
      странах и у отдельных операторов <b>из-за высокой стоимости SMS-кода</b> приложение может потребовать
      оформить подписку Telegram Premium, чтобы продолжить вход. То есть Telegram не стал платным — это условие{" "}
      <b>конкретной попытки входа</b>. Похожие поддельные окна тоже встречаются, поэтому сначала проверьте, что
      именно на экране.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#xabar", label: "Что именно на экране" },
          { href: "#rasmiymi", label: "Это окно самого Telegram?" },
          { href: "#farq", label: "Отличие от обычной покупки" },
          { href: "#tekshirish", label: "Как проверить" },
          { href: "#tolangan", label: "Оплатил, но вход не открылся" },
          { href: "#bizdan", label: "Поможет ли Premium от нас" },
        ]}
      />

      <h2 id="xabar">Какое именно сообщение появляется на экране?</h2>
      <p>Первый шаг — внимательно прочитать сообщение. Три совершенно разные ситуации похожи друг на друга:</p>
      <InfoGrid>
        <InfoCard emoji="💳" title="Требование оплаты для входа">
          Приложение предлагает оформить Premium, чтобы продолжить вход, и показывает сумму. Это сценарий,
          описанный в официальной документации.
        </InfoCard>
        <InfoCard emoji="⭐" title="Обычная реклама Premium">
          Telegram периодически предлагает Premium. Вход при этом не блокируется — предложение можно закрыть.
        </InfoCard>
        <InfoCard emoji="📵" title="SMS просто не приходит">
          Это проблема доставки, а не требование оплаты. Причина в операторе, сети или номере.
        </InfoCard>
        <InfoCard emoji="🚩" title="Поддельное окно">
          Страница, которая просит данные карты, открывается вне Telegram или торопит вас.
        </InfoCard>
      </InfoGrid>

      <h2 id="rasmiymi">Это окно самого Telegram?</h2>
      <p>
        В официальном сценарии оплата начинается <b>внутри самого приложения</b> и проходит через магазин
        системы. В документации так и описано: приложение получает магазинный продукт, валюту и сумму.
      </p>
      <KeyFacts label="Признаки официального сценария">
        <li>Окно открывается внутри приложения Telegram, а не выбрасывает в браузер.</li>
        <li>Оплата идёт через магазин приложений на устройстве — появляется его обычное окно подтверждения.</li>
        <li>Номер карты, CVV или пароль на отдельной странице не запрашиваются.</li>
        <li>Сумма и валюта показаны заранее.</li>
      </KeyFacts>
      <KeyFacts label="Признаки поддельного окна">
        <li>Ссылка уводит за пределы Telegram, на незнакомый домен.</li>
        <li>Просят ввести данные карты прямо в форму.</li>
        <li>Есть подгоняющий текст вроде «осталось 5 минут».</li>
        <li>Требуют переслать кому-то код входа или пароль — Telegram такого не просит никогда.</li>
      </KeyFacts>

      <h2 id="farq">Чем оплата за вход отличается от обычной покупки Premium</h2>
      <LoginVsPremium locale="ru" />
      <p>
        Главное отличие: оплата за вход выполняется <b>как часть процесса входа</b>, через магазинный продукт,
        который показывает приложение. Обычная покупка Premium делается уже внутри аккаунта и любым удобным
        способом.
      </p>

      <h2 id="tekshirish">Как проверить</h2>
      <Steps>
        <Step title="1. Проверьте официальность приложения">
          Telegram должен быть установлен из официального магазина или с telegram.org. В модифицированных
          сборках таким окнам доверять нельзя.
        </Step>
        <Step title="2. Обновите приложение">В старых версиях сценарии входа могут отображаться неверно.</Step>
        <Step title="3. Используйте другую активную сессию">
          Если этот аккаунт уже открыт на другом устройстве, новое устройство можно подтвердить оттуда — часто
          это самый быстрый путь.
        </Step>
        <Step title="4. Прочитайте ссылку помощи на экране">
          В официальном окне обычно есть пояснение или ссылка на справку. Прочитайте её.
        </Step>
        <Step title="5. Сомневаетесь — не платите">
          Закройте экран и откройте приложение заново. Официальное требование никуда не денется, а поддельное
          окно чаще всего не возвращается.
        </Step>
      </Steps>

      <h2 id="tolangan">Если оплата прошла, а вход не открылся</h2>
      <p>
        В этом случае обращаться нужно <b>к той стороне, которая приняла платёж</b>. Если оплата шла через
        магазин приложений, чек находится в вашем аккаунте этого магазина.
      </p>
      <KeyFacts label="Что подготовить">
        <li>Чек или номер транзакции.</li>
        <li>Дату и примерное время оплаты.</li>
        <li>Номер телефона, на который выполнялся вход.</li>
        <li>Скриншот текста ошибки — с закрытыми личными данными.</li>
      </KeyFacts>
      <p>
        Справочные каналы Telegram и поддержка магазина приложений — правильный адрес для этой ситуации.
        Сторонние сервисы не могут открыть чужой вход.
      </p>

      <h2 id="bizdan">«Купите Premium у нас — и вход откроется»: такого мы не обещаем</h2>
      <p>
        Скажем прямо: в официальной документации этот сценарий связан с <b>магазинным продуктом, который
        показывает приложение</b>. Открывает ли этот экран подписка, полученная другим путём, мы не проверяли и
        поэтому гарантировать не можем.
      </p>
      <p>
        Если Premium нужен вам <b>ради его возможностей</b> —{" "}
        <Link href="/blog/telegram-premium-eng-oson-usul">порядок покупки</Link> и{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">цены</Link> описаны отдельно. Но покупать его
        именно ради открытия окна входа мы не советуем.
      </p>

      <Sources
        label="Источники"
        items={[
          {
            href: "https://core.telegram.org/api/auth",
            label: "core.telegram.org/api/auth",
            note: "сценарий входа с требованием оплаты",
          },
          { href: "https://telegram.org/faq", label: "telegram.org/faq", note: "общий FAQ Telegram" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Telegramga kirish pullik bo‘lib qoldimi?",
    answer:
      "Yo‘q. Rasmiy hujjatda ayrim mamlakat va operatorlarda SMS narxi yuqori bo‘lgani uchun kirishda Premium talab qilinishi mumkinligi yozilgan — bu umumiy qoida emas.",
  },
  {
    question: "Bu har safar chiqadimi?",
    answer:
      "Bu talab aynan kirish urinishiga bog‘liq. Akkauntga kirgandan keyin oddiy foydalanish uchun u qayta chiqmaydi.",
  },
  {
    question: "Boshqa odam Premium sovg‘a qilsa, kirish ochiladimi?",
    answer:
      "Buni kafolatlab bo‘lmaydi. Rasmiy hujjatda oqim ilova ko‘rsatgan do‘kon mahsuloti bilan bog‘langan; boshqa yo‘l bilan olingan obuna bu ekranni ochishi tekshirilmagan.",
  },
  {
    question: "Bu soxta oynami yoki haqiqiymi?",
    answer:
      "Rasmiy oyna ilova ichida ochiladi va do‘kon orqali to‘lanadi. Karta ma’lumotini alohida formada so‘rasa yoki notanish saytga olib chiqsa — bu soxta.",
  },
  {
    question: "To‘ladim, lekin kirish ochilmadi. Kimga yozaman?",
    answer:
      "To‘lovni qabul qilgan tomonga — odatda ilova do‘koni qo‘llab-quvvatlashiga, chek va tranzaksiya raqami bilan.",
  },
  {
    question: "SMS umuman kelmayapti — bu ham shu muammomi?",
    answer: "Yo‘q. SMS kelmasligi yetkazish muammosi va u to‘lov talabidan butunlay boshqa holat.",
  },
  {
    question: "To‘lamasdan kirish yo‘li bormi?",
    answer:
      "Agar shu akkaunt boshqa qurilmada ochiq bo‘lsa, yangi qurilmani o‘sha seansdan tasdiqlash mumkin. Boshqa hollarda ekrandagi rasmiy yordam havolasiga murojaat qiling.",
  },
];

const ruFaq = [
  {
    question: "Вход в Telegram стал платным?",
    answer:
      "Нет. В документации сказано, что в отдельных странах и у отдельных операторов из-за высокой цены SMS при входе может требоваться Premium — это не общее правило.",
  },
  {
    question: "Это будет появляться каждый раз?",
    answer:
      "Требование связано именно с попыткой входа. После входа в аккаунт для обычного пользования оно не появляется снова.",
  },
  {
    question: "Если Premium подарит другой человек, вход откроется?",
    answer:
      "Гарантировать нельзя. В документации сценарий связан с магазинным продуктом, который показывает приложение; работает ли подписка, полученная иначе, не проверено.",
  },
  {
    question: "Это поддельное окно или настоящее?",
    answer:
      "Официальное окно открывается внутри приложения, оплата идёт через магазин. Если данные карты просят в отдельной форме или уводят на незнакомый сайт — это подделка.",
  },
  {
    question: "Оплатил, но вход не открылся. Куда писать?",
    answer: "Той стороне, которая приняла платёж — обычно в поддержку магазина приложений, с чеком и номером транзакции.",
  },
  {
    question: "SMS вообще не приходит — это та же проблема?",
    answer: "Нет. Недоставленная SMS — проблема доставки, и это совсем другая ситуация.",
  },
  {
    question: "Есть ли способ войти без оплаты?",
    answer:
      "Если аккаунт открыт на другом устройстве, новое устройство можно подтвердить из той сессии. В остальных случаях используйте официальную ссылку помощи на экране.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "problem",
  datePublished: "2026-09-08",
  dateModified: "2026-09-08",
  keywords: [
    "telegramga kirishda premium so‘rayapti",
    "telegram pul so‘rayapti",
    "telegram sms uchun pul",
    "telegram sms fee nima",
    "telegram ochish pullikmi",
    "telegramga kirolmayapman premium",
    "telegram ro‘yxatdan o‘tish pullikmi",
  ],
  locales: {
    uz: {
      title: "Telegramga kirishda nega Premium yoki SMS uchun pul so‘rayapti?",
      excerpt:
        "Rasmiy hujjatda tasvirlangan kirish oqimi, uni soxta oynadan ajratish, oddiy Premium xarididan farqi va to‘langan-u kirish ochilmagan holat.",
      metaTitle: "Telegramga kirishda nega Premium so‘rayapti?",
      metaDescription:
        "Telegramga kirishda to‘lov yoki Premium talab qilinsa: bu qanday oqim, rasmiy oynani soxtasidan qanday ajratish va to‘langandan keyin kimga murojaat qilish.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Premium imkoniyatlari kerakmi?",
      ctaBody: "@StarsPaymee_bot — so‘mda, 3, 6 yoki 12 oy. Kirish oynasi uchun emas, Premium foydalari uchun.",
      faq: uzFaq,
    },
    ru: {
      title: "Почему Telegram просит оплату или Premium при входе?",
      excerpt:
        "Официально описанный сценарий входа, как отличить его от поддельного окна, чем он отличается от обычной покупки и что делать после оплаты.",
      metaTitle: "Почему Telegram просит Premium при входе?",
      metaDescription:
        "Если при входе в Telegram просят оплату или Premium: что это за сценарий, как отличить официальное окно от поддельного и куда обращаться после оплаты.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны возможности Premium?",
      ctaBody: "@StarsPaymee_bot — в сумах, на 3, 6 или 12 месяцев. Ради возможностей, а не ради окна входа.",
      faq: ruFaq,
    },
  },
};
