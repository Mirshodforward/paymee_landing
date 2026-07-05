import { Link } from "@/i18n/navigation";
import { Toc, Steps, Step, InlineCta, KeyFacts, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-akkauntni-ogirlashdan-himoya-2fa";

function UzAnswer() {
  return (
    <p>
      Telegram akkauntini o‘g‘irlashdan himoya qilishning eng muhim qadami — <strong>ikki bosqichli parol
      (2FA)</strong>ni yoqish: Sozlamalar → Maxfiylik va xavfsizlik → Ikki bosqichli tekshirish. Bundan tashqari
      muntazam <strong>faol seanslar</strong>ni tekshirib, notanish qurilmalarni chiqarib yuborish va SMS-kodni
      hech kimga (hatto «Telegram xodimi» deb tanishtirgan shaxsga ham) aytmaslik zarur.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#2fa", label: "Ikki bosqichli parolni yoqish" },
          { href: "#seans", label: "Faol seanslarni tekshirish" },
          { href: "#belgi", label: "O‘g‘irlashning odatiy usullari" },
          { href: "#qaytarish", label: "Akkaunt o‘g‘irlansa, qanday qaytarish" },
        ]}
      />

      <h2 id="2fa">Ikki bosqichli parolni (2FA) qanday yoqish mumkin?</h2>
      <Steps>
        <Step title="Sozlamalarga o‘ting">Telegram → Sozlamalar → Maxfiylik va xavfsizlik.</Step>
        <Step title="«Ikki bosqichli tekshirish»ni tanlang">Ushbu bo‘limni oching.</Step>
        <Step title="Parol o‘rnating">
          SMS-kod bilan bir qatorda talab qilinadigan qo‘shimcha parolni kiriting.
        </Step>
        <Step title="Zaxira email qo‘shing">
          Parolni unutgan holatda tiklash uchun email manzil qo‘shib qo‘ying.
        </Step>
      </Steps>
      <p>
        2FA yoqilgach, akkauntga kirish uchun faqat SMS-kod yetarli emas — qo‘shimcha parol ham talab qilinadi. Bu
        SIM-almashtirish (SIM swap) orqali hujumlarning oldini oladi.
      </p>

      <InlineCta text="Xavfsiz xarid — Stars’ni so‘mda, botda 10 soniyada oling." />

      <h2 id="seans">Faol seanslarni qanday tekshirish mumkin?</h2>
      <KeyFacts label="Seanslarni nazorat qilish">
        <li>
          <b>Qayerda ko‘riladi:</b> Sozlamalar → Qurilmalar (Devices) bo‘limida barcha faol kirishlar ro‘yxati.
        </li>
        <li>
          <b>Notanish qurilma:</b> tanimagan qurilma yoki joylashuv ko‘rinsa, uni darhol chiqarib yuboring.
        </li>
        <li>
          <b>Muntazam tekshirish:</b> oyiga bir marta seanslar ro‘yxatini ko‘zdan kechirish yaxshi odat.
        </li>
      </KeyFacts>

      <h2 id="belgi">Akkauntni o‘g‘irlashning odatiy usullari</h2>
      <ul>
        <li>
          <strong>SMS-kodni so‘rash:</strong> firibgar «tasdiqlash kodi keldi, ayting» deb yozadi — bu kodni hech
          qachon uchinchi shaxsga bermang.
        </li>
        <li>
          <strong>Soxta «Telegram xodimi»:</strong> rasmiy Telegram hech qachon shaxsiy xabar orqali parol yoki kod
          so‘ramaydi.
        </li>
        <li>
          <strong>Fishing havolalar:</strong> Telegram’ga o‘xshab yasalgan soxta login sahifalariga login qilmang.
        </li>
      </ul>
      <p>
        Xavfsizlik belgilarini umumiy ko‘rinishda{" "}
        <Link href="/blog/telegram-stars-xavfsiz-sotib-olish-qollanma">«Xavfsiz sotib olish qo‘llanmasi»</Link>da
        ham ko‘rish mumkin.
      </p>

      <h2 id="qaytarish">Agar akkaunt allaqachon o‘g‘irlangan bo‘lsa, nima qilish kerak?</h2>
      <p>
        Darhol boshqa qurilmadan (agar hali kirish imkoni bo‘lsa) barcha faol seanslarni yakunlang, 2FA parolini
        o‘zgartiring va Telegram’ning rasmiy support kanaliga murojaat qiling. Agar kirish imkoni umuman yo‘q bo‘lsa,
        telefon raqamingiz orqali qayta ro‘yxatdan o‘tishga urinib, Telegram’ning rasmiy tiklash jarayonidan
        foydalaning.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq#q-two-step-verification", label: "telegram.org/faq", note: "ikki bosqichli tekshirish FAQ" },
          { href: "https://telegram.org/blog/sessions-and-scheduled-messages", label: "telegram.org/blog/sessions-and-scheduled-messages", note: "faol seanslar e’loni" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Самый важный шаг для защиты аккаунта Telegram от угона — включить <strong>двухэтапную проверку (2FA)</strong>:
      Настройки → Конфиденциальность и безопасность → Двухэтапная проверка. Кроме того, важно регулярно проверять{" "}
      <strong>активные сеансы</strong>, удалять незнакомые устройства и никогда не сообщать SMS-код никому (даже
      тому, кто представился «сотрудником Telegram»).
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#2fa", label: "Включение двухэтапной проверки" },
          { href: "#seans", label: "Проверка активных сеансов" },
          { href: "#belgi", label: "Типичные способы угона" },
          { href: "#qaytarish", label: "Что делать, если аккаунт угнали" },
        ]}
      />

      <h2 id="2fa">Как включить двухэтапную проверку (2FA)?</h2>
      <Steps>
        <Step title="Перейдите в настройки">Telegram → Настройки → Конфиденциальность и безопасность.</Step>
        <Step title="Выберите «Двухэтапная проверка»">Откройте этот раздел.</Step>
        <Step title="Установите пароль">
          Введите дополнительный пароль, требуемый вместе с SMS-кодом.
        </Step>
        <Step title="Добавьте резервный email">
          Добавьте email для восстановления на случай, если забудете пароль.
        </Step>
      </Steps>
      <p>
        После включения 2FA для входа в аккаунт недостаточно только SMS-кода — требуется ещё и дополнительный
        пароль. Это предотвращает атаки через подмену SIM-карты (SIM swap).
      </p>

      <InlineCta text="Безопасная покупка — купите Stars в сумах, в боте за 10 секунд." />

      <h2 id="seans">Как проверить активные сеансы?</h2>
      <KeyFacts label="Контроль сеансов">
        <li>
          <b>Где смотреть:</b> в разделе Настройки → Устройства виден список всех активных входов.
        </li>
        <li>
          <b>Незнакомое устройство:</b> если видите незнакомое устройство или локацию, немедленно завершите сеанс.
        </li>
        <li>
          <b>Регулярная проверка:</b> хорошая привычка — проверять список сеансов раз в месяц.
        </li>
      </KeyFacts>

      <h2 id="belgi">Типичные способы угона аккаунта</h2>
      <ul>
        <li>
          <strong>Запрос SMS-кода:</strong> мошенник пишет «пришёл код подтверждения, скажите его» — никогда не
          сообщайте этот код третьим лицам.
        </li>
        <li>
          <strong>Фейковый «сотрудник Telegram»:</strong> официальный Telegram никогда не запрашивает пароль или
          код через личное сообщение.
        </li>
        <li>
          <strong>Фишинговые ссылки:</strong> не входите на поддельные страницы входа, замаскированные под Telegram.
        </li>
      </ul>
      <p>
        Общие признаки безопасности также описаны в статье{" "}
        <Link href="/blog/telegram-stars-xavfsiz-sotib-olish-qollanma">«Руководство по безопасной покупке»</Link>.
      </p>

      <h2 id="qaytarish">Что делать, если аккаунт уже угнали?</h2>
      <p>
        Немедленно (если ещё есть доступ с другого устройства) завершите все активные сеансы, смените пароль 2FA и
        обратитесь в официальную поддержку Telegram. Если доступа совсем нет, попробуйте зарегистрироваться заново
        по своему номеру телефона, используя официальный процесс восстановления Telegram.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/faq#q-two-step-verification", label: "telegram.org/faq", note: "FAQ по двухэтапной проверке" },
          { href: "https://telegram.org/blog/sessions-and-scheduled-messages", label: "telegram.org/blog/sessions-and-scheduled-messages", note: "анонс активных сеансов" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Xavfsizlik",
  type: "howto",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  keywords: [
    "telegram akkaunt ogirlandi",
    "telegram parol qoyish",
    "telegram 2fa yoqish",
    "telegram ikki bosqichli parol",
    "telegram akkauntni himoya qilish",
  ],
  howToSteps: [
    { name: "Sozlamalarga o‘ting", text: "Telegram → Sozlamalar → Maxfiylik va xavfsizlik." },
    { name: "Ikki bosqichli tekshirishni tanlang", text: "Ushbu bo‘limni oching." },
    { name: "Parol o‘rnating", text: "Qo‘shimcha parolni kiriting." },
    { name: "Zaxira email qo‘shing", text: "Parolni tiklash uchun email qo‘shing." },
  ],
  locales: {
    uz: {
      title: "Telegram akkauntni o‘g‘irlashdan himoya: 2FA va asosiy sozlamalar (2026)",
      excerpt:
        "Telegram akkauntini o‘g‘irlashdan himoya qilish: ikki bosqichli parol (2FA) yoqish, faol seanslarni tekshirish va o‘g‘irlangan akkauntni qaytarish.",
      metaTitle: "Telegram akkaunt xavfsizligi — 2FA qo‘llanma 2026",
      metaDescription:
        "Telegram akkauntni o‘g‘irlashdan himoya qilish: 2FA (ikki bosqichli parol) yoqish, faol seanslarni tekshirish, o‘g‘irlashning odatiy usullari va akkaunt qaytarish.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Xavfsiz xarid qilmoqchimisiz?",
      ctaBody: "Stars’ni so‘mda, mahalliy karta bilan @StarsPaymee_bot orqali 10 soniyada oling.",
      faq: [
        {
          question: "Telegram akkauntini o‘g‘irlashdan qanday himoya qilish mumkin?",
          answer: "Eng muhim qadam — ikki bosqichli parol (2FA)ni yoqish va faol seanslarni muntazam tekshirish.",
        },
        {
          question: "SMS-kodni kimgadir aytsam bo‘ladimi?",
          answer: "Yo‘q, hech qachon — bu kod akkauntga kirish uchun kalit va uni hech kimga aytish kerak emas.",
        },
        {
          question: "Telegram xodimi parol so‘rasa, bu haqiqiymi?",
          answer: "Yo‘q, rasmiy Telegram hech qachon shaxsiy xabar orqali parol yoki kod so‘ramaydi — bu firibgarlik.",
        },
        {
          question: "Faol seanslarni qayerdan tekshirish mumkin?",
          answer: "Sozlamalar → Qurilmalar bo‘limida barcha faol kirishlar ro‘yxati ko‘rinadi.",
        },
        {
          question: "Akkaunt o‘g‘irlangan bo‘lsa, birinchi nima qilish kerak?",
          answer: "Imkon bo‘lsa, boshqa qurilmadan barcha seanslarni yakunlang, parolni o‘zgartiring va Telegram support’iga murojaat qiling.",
        },
      ],
    },
    ru: {
      title: "Защита аккаунта Telegram от угона: 2FA и основные настройки (2026)",
      excerpt:
        "Защита аккаунта Telegram от угона: включение двухэтапного пароля (2FA), проверка активных сеансов и возврат угнанного аккаунта.",
      metaTitle: "Безопасность аккаунта Telegram — руководство по 2FA 2026",
      metaDescription:
        "Защита аккаунта Telegram от угона: включение 2FA (двухэтапного пароля), проверка активных сеансов, типичные способы угона и возврат аккаунта.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Хотите безопасно купить?",
      ctaBody: "Купите Stars в сумах локальной картой через @StarsPaymee_bot за 10 секунд.",
      faq: [
        {
          question: "Как защитить аккаунт Telegram от угона?",
          answer: "Самый важный шаг — включить двухэтапный пароль (2FA) и регулярно проверять активные сеансы.",
        },
        {
          question: "Можно ли кому-то сообщить SMS-код?",
          answer: "Нет, никогда — этот код является ключом доступа к аккаунту, его нельзя никому сообщать.",
        },
        {
          question: "Если \"сотрудник Telegram\" просит пароль, это правда?",
          answer: "Нет, официальный Telegram никогда не запрашивает пароль или код через личное сообщение — это мошенничество.",
        },
        {
          question: "Где проверить активные сеансы?",
          answer: "В разделе Настройки → Устройства виден список всех активных входов.",
        },
        {
          question: "Что делать в первую очередь, если аккаунт угнали?",
          answer: "Если есть возможность, завершите все сеансы с другого устройства, смените пароль и обратитесь в поддержку Telegram.",
        },
      ],
    },
  },
};
