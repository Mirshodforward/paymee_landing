import { Toc, CompareTable, InlineCta, KeyFacts, Yes, No, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "onlayn-tolovda-karta-xavfsizligi";

function UzAnswer() {
  return (
    <p>
      UzCard/HUMO bilan onlayn to‘lov qilganda faqat <strong>karta raqami, amal qilish muddati va SMS/OTP
      kod</strong>ni ishonchli xizmatga kiritish mumkin. <strong>Hech qachon</strong> karta paroli (agar bo‘lsa),
      internet-banking login/paroli yoki to‘liq CVV’ni telefon orqali og‘zaki aytmang — bu ma’lumotlar faqat
      rasmiy to‘lov sahifasining o‘zida, bir martalik tranzaksiya uchun kiritiladi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima-berish", label: "Qaysi ma'lumotni berish mumkin" },
          { href: "#otp", label: "OTP va SMS-kod xavfsizligi" },
          { href: "#phishing", label: "Phishing’dan qanday saqlanish" },
          { href: "#belgi", label: "Ishonchli to'lov sahifasi belgilari" },
        ]}
      />

      <h2 id="nima-berish">Onlayn to‘lovda qaysi ma’lumotni berish mumkin, qaysinisini emas?</h2>
      <CompareTable
        headers={["Ma'lumot", "Berish mumkinmi", "Izoh"]}
        rows={[
          ["Karta raqami (16 xonali)", <Yes key="1" />, "Rasmiy to‘lov sahifasida standart"],
          ["Amal qilish muddati", <Yes key="2" />, "Standart to‘lov ma'lumoti"],
          ["CVV/CVC (orqadagi 3 raqam)", <Yes key="3">faqat rasmiy sahifada</Yes>, "Faqat rasmiy to‘lov formasida, telefon orqali emas"],
          ["Bir martalik SMS/OTP kod", <Yes key="4">faqat forma ichida</Yes>, "Kodni hech kimga og‘zaki aytmang"],
          ["Internet-banking login/parol", <No key="5" />, "Hech qachon uchinchi shaxsga berilmaydi"],
          ["Karta PIN-kodi", <No key="6" />, "Onlayn to‘lovda umuman kerak emas"],
        ]}
      />

      <InlineCta text="Xavfsiz to‘lov — Stars’ni ishonchli botda so‘mda 10 soniyada oling." />

      <h2 id="otp">OTP va SMS-kod xavfsizligi qanday ishlaydi?</h2>
      <KeyFacts label="OTP qoidalari">
        <li>
          <b>Kod faqat forma ichida:</b> bank yuborgan bir martalik kodni faqat to‘lov sahifasining o‘z maydoniga
          kiritasiz.
        </li>
        <li>
          <b>Hech kimga aytmang:</b> «operator» yoki «qo‘llab-quvvatlash xodimi» kodni so‘rasa — bu firibgarlik.
        </li>
        <li>
          <b>Muddati cheklangan:</b> OTP odatda bir necha daqiqada eskiradi — bu qo‘shimcha himoya qatlami.
        </li>
      </KeyFacts>

      <h2 id="phishing">Phishing (fishing)dan qanday saqlanish mumkin?</h2>
      <ul>
        <li>
          <strong>URL manzilini tekshiring:</strong> to‘lov sahifasi manzili tanish va to‘g‘ri yozilganini
          tasdiqlang.
        </li>
        <li>
          <strong>Shubhali havolalarga bosmang:</strong> «kartangiz bloklandi, shu yerdan tasdiqlang» kabi SMS/email
          havolalariga ishonmang.
        </li>
        <li>
          <strong>Faqat rasmiy ilova/sayt orqali kiring:</strong> bank ilovasi yoki rasmiy botni to‘g‘ridan-to‘g‘ri
          oching, havola orqali emas.
        </li>
      </ul>

      <h2 id="belgi">Ishonchli to‘lov sahifasining belgilari</h2>
      <p>
        Xavfsiz to‘lov sahifasi odatda: <strong>HTTPS</strong> protokoli (manzil qulf belgisi bilan), aniq kompaniya
        nomi, tranzaksiya summasi oldindan ko‘rsatilgan holda va faqat standart maydonlarni (karta raqami, muddat,
        CVV, OTP) so‘raydi — boshqa hech qanday qo‘shimcha «tasdiqlash» yoki parol talab qilmaydi.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://uzcard.uz", label: "uzcard.uz", note: "UzCard rasmiy xavfsizlik tavsiyalari" },
          { href: "https://humocard.uz", label: "humocard.uz", note: "HUMO rasmiy sayti" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      При онлайн-оплате картой UzCard/HUMO надёжному сервису можно передавать только <strong>номер карты, срок
      действия и SMS/OTP-код</strong>. <strong>Никогда</strong> не называйте по телефону пароль от карты (если он
      есть), логин/пароль интернет-банкинга или полный CVV устно — эти данные вводятся только на самой официальной
      странице оплаты для разовой транзакции.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nima-berish", label: "Какие данные можно передавать" },
          { href: "#otp", label: "Безопасность OTP и SMS-кода" },
          { href: "#phishing", label: "Как защититься от фишинга" },
          { href: "#belgi", label: "Признаки надёжной страницы оплаты" },
        ]}
      />

      <h2 id="nima-berish">Какие данные можно передавать при онлайн-оплате, а какие нет?</h2>
      <CompareTable
        headers={["Данные", "Можно передавать", "Комментарий"]}
        rows={[
          ["Номер карты (16 цифр)", <Yes key="1" />, "Стандартно для официальной страницы оплаты"],
          ["Срок действия", <Yes key="2" />, "Стандартные данные оплаты"],
          ["CVV/CVC (3 цифры на обороте)", <Yes key="3">только на официальной странице</Yes>, "Только в официальной форме оплаты, не по телефону"],
          ["Одноразовый SMS/OTP-код", <Yes key="4">только в форме</Yes>, "Не называйте код никому устно"],
          ["Логин/пароль интернет-банкинга", <No key="5" />, "Никогда не передаётся третьим лицам"],
          ["PIN-код карты", <No key="6" />, "При онлайн-оплате вообще не требуется"],
        ]}
      />

      <InlineCta text="Безопасная оплата — купите Stars в надёжном боте, в сумах за 10 секунд." />

      <h2 id="otp">Как работает безопасность OTP и SMS-кода?</h2>
      <KeyFacts label="Правила OTP">
        <li>
          <b>Код только в форме:</b> одноразовый код от банка вводится только в собственное поле страницы оплаты.
        </li>
        <li>
          <b>Никому не говорите:</b> если «оператор» или «сотрудник поддержки» просит код — это мошенничество.
        </li>
        <li>
          <b>Ограниченный срок:</b> OTP обычно устаревает за несколько минут — это дополнительный уровень защиты.
        </li>
      </KeyFacts>

      <h2 id="phishing">Как защититься от фишинга?</h2>
      <ul>
        <li>
          <strong>Проверяйте URL-адрес:</strong> убедитесь, что адрес страницы оплаты знаком и написан правильно.
        </li>
        <li>
          <strong>Не переходите по подозрительным ссылкам:</strong> не доверяйте SMS/email вида «карта
          заблокирована, подтвердите здесь».
        </li>
        <li>
          <strong>Заходите только через официальное приложение/сайт:</strong> открывайте банковское приложение или
          официального бота напрямую, а не по ссылке.
        </li>
      </ul>

      <h2 id="belgi">Признаки надёжной страницы оплаты</h2>
      <p>
        Безопасная страница оплаты обычно имеет: протокол <strong>HTTPS</strong> (значок замка в адресе), чёткое
        название компании, заранее показанную сумму транзакции и запрашивает только стандартные поля (номер карты,
        срок, CVV, OTP) — без каких-либо дополнительных «подтверждений» или паролей.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://uzcard.uz", label: "uzcard.uz", note: "официальные рекомендации по безопасности UzCard" },
          { href: "https://humocard.uz", label: "humocard.uz", note: "официальный сайт HUMO" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Xavfsizlik",
  type: "info",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  keywords: [
    "onlayn tolov xavfsizligi",
    "karta xavfsizligi",
    "otp cvv xavfsizlik",
    "phishing dan saqlanish",
    "uzcard humo xavfsizlik",
  ],
  locales: {
    uz: {
      title: "Onlayn to‘lovda karta xavfsizligi: OTP, CVV va phishing’dan saqlanish (2026)",
      excerpt:
        "UzCard/HUMO bilan internetda to‘laganda qaysi ma'lumotni berish mumkin, qaysinisini hech qachon emas — OTP, CVV va phishing xavfsizligi qo'llanmasi.",
      metaTitle: "Onlayn to‘lovda karta xavfsizligi — 2026",
      metaDescription:
        "Onlayn to‘lovda karta xavfsizligi: UzCard/HUMO bilan qaysi ma'lumotni berish mumkin, OTP/CVV qoidalari va phishing’dan saqlanish yo'llari.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Xavfsiz to‘lov qilmoqchimisiz?",
      ctaBody: "Stars’ni ishonchli botda so‘mda 10 soniyada oling.",
      faq: [
        {
          question: "Onlayn to‘lovda kimdir OTP kodni so‘rasa nima qilish kerak?",
          answer: "Hech qachon aytmang — bu 100% firibgarlik belgisi, OTP faqat rasmiy to‘lov formasiga kiritiladi.",
        },
        {
          question: "CVV kodni telefon orqali aytsa bo‘ladimi?",
          answer: "Yo‘q, CVV faqat rasmiy to‘lov sahifasining o‘zida kiritiladi, og‘zaki aytilmaydi.",
        },
        {
          question: "Internet-banking parolini kimgadir berish kerakmi?",
          answer: "Yo‘q, hech qachon — bu login ma'lumoti faqat sizga tegishli va hech kimga berilmaydi.",
        },
        {
          question: "Onlayn to‘lovda karta PIN-kodi kerakmi?",
          answer: "Yo‘q, PIN-kod odatda faqat bankomat yoki terminalda kerak, onlayn to‘lovda talab qilinmaydi.",
        },
        {
          question: "Ishonchli to‘lov sahifasini qanday aniqlash mumkin?",
          answer: "HTTPS protokoli, aniq kompaniya nomi va faqat standart maydonlarni (karta, muddat, CVV, OTP) so‘rashi orqali.",
        },
      ],
    },
    ru: {
      title: "Безопасность карты при онлайн-оплате: OTP, CVV и защита от фишинга (2026)",
      excerpt:
        "Какие данные можно передавать при онлайн-оплате картой UzCard/HUMO, а какие никогда — руководство по безопасности OTP, CVV и защите от фишинга.",
      metaTitle: "Безопасность карты при онлайн-оплате — 2026",
      metaDescription:
        "Безопасность карты при онлайн-оплате: какие данные можно передавать с UzCard/HUMO, правила OTP/CVV и способы защиты от фишинга.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Хотите безопасно оплатить?",
      ctaBody: "Купите Stars в надёжном боте в сумах за 10 секунд.",
      faq: [
        {
          question: "Что делать, если кто-то просит OTP-код при онлайн-оплате?",
          answer: "Никогда не называйте его — это 100% признак мошенничества, OTP вводится только в официальную форму оплаты.",
        },
        {
          question: "Можно ли назвать CVV-код по телефону?",
          answer: "Нет, CVV вводится только на самой официальной странице оплаты, устно его не называют.",
        },
        {
          question: "Нужно ли кому-то давать пароль от интернет-банкинга?",
          answer: "Нет, никогда — эти данные для входа принадлежат только вам и никому не передаются.",
        },
        {
          question: "Нужен ли PIN-код карты при онлайн-оплате?",
          answer: "Нет, PIN-код обычно нужен только в банкомате или терминале, при онлайн-оплате не требуется.",
        },
        {
          question: "Как определить надёжную страницу оплаты?",
          answer: "По протоколу HTTPS, чёткому названию компании и запросу только стандартных полей (карта, срок, CVV, OTP).",
        },
      ],
    },
  },
};
