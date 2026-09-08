import { Link } from "@/i18n/navigation";
import {
  CompareTable,
  InfoCard,
  InfoGrid,
  InlineCta,
  KeyFacts,
  Sources,
  Toc,
} from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-premium-tugasa-nima-boladi";

/**
 * «Premium vaqtida / tugagandan keyin» jadvali.
 *
 * MUHIM: Telegramning rasmiy Premium FAQ’i faqat bir necha holatni aniq
 * yozadi (papkalar, qadab qo‘yilgan chatlar, kanallar, rozetka). Qolganlari
 * uchun jadvalda «FAQ’da aniq yozilmagan» deb ko‘rsatiladi — taxminni fakt
 * sifatida berish o‘quvchini chalg‘itadi.
 */
function ExpiryTable({ locale }: { locale: "uz" | "ru" }) {
  const copy = {
    uz: {
      headers: ["Nima", "Premium vaqtida", "Muddat tugagandan keyin"],
      rows: [
        ["Chat papkalari", "Kengaytirilgan soni", "Birinchi 10 tasi ishlaydi, ortiqchasi qulflanadi"],
        ["Qadab qo‘yilgan chatlar", "Kengaytirilgan soni", "Birinchi 5 tasi qoladi, ortiqchasi yechiladi"],
        ["Kanallar va papkalar", "Kengaytirilgan chegara", "Joyida qoladi, lekin yangisini qo‘shib bo‘lmaydi"],
        ["Profil rozetkasi", "Ko‘rinadi", "Yo‘qoladi"],
        ["Fayl yuklash chegarasi", "4 GB gacha", "Oddiy hisob chegarasiga qaytadi"],
        ["Yuborilgan fayl va xabarlar", "Chatda", "FAQ o‘zgaradigan narsalar ro‘yxatida ularni sanamaydi"],
        ["Premium emoji va stikerlar", "Ishlatiladi", "FAQ’da aniq yozilmagan"],
        ["Animatsion profil rasmi", "Yoqilgan", "FAQ’da aniq yozilmagan"],
      ],
    },
    ru: {
      headers: ["Что именно", "Пока Premium активен", "После окончания срока"],
      rows: [
        ["Папки чатов", "Расширенное количество", "Первые 10 работают, остальные блокируются"],
        ["Закреплённые чаты", "Расширенное количество", "Первые 5 остаются, лишние открепляются"],
        ["Каналы и папки", "Расширенный лимит", "Остаются на месте, но добавить новые нельзя"],
        ["Значок в профиле", "Виден", "Пропадает"],
        ["Лимит загрузки файлов", "До 4 ГБ", "Возвращается к лимиту обычного аккаунта"],
        ["Отправленные файлы и сообщения", "В чатах", "FAQ не упоминает их среди того, что меняется"],
        ["Премиум-эмодзи и стикеры", "Используются", "В FAQ прямо не описано"],
        ["Анимированное фото профиля", "Включено", "В FAQ прямо не описано"],
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
      Akkaunt bloklanmaydi va chatlaringiz yo‘qolmaydi. Rasmiy FAQ’ga ko‘ra o‘zgaradigan narsalar aniq:{" "}
      <b>birinchi 10 ta papka</b> ishlashda qoladi, ortiqchasi qulflanadi; <b>birinchi 5 ta qadab qo‘yilgan chat</b>{" "}
      qoladi, ortiqchasi yechiladi; kanal va papkalar joyida qoladi, lekin yangisini qo‘sha olmaysiz; profil
      rozetkasi yo‘qoladi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#farq", label: "Bekor qilish va tugash farqi" },
          { href: "#jadval", label: "Nima o‘zgaradi — jadval" },
          { href: "#fayl", label: "Chat va fayllar" },
          { href: "#yangi", label: "Yangi fayl yuborish" },
          { href: "#bezak", label: "Emoji va bezaklar" },
          { href: "#papka", label: "Papka, kanal va qadab qo‘yilgan chatlar" },
          { href: "#qayta", label: "Qayta obuna bo‘lganda" },
        ]}
      />

      <p>
        Obuna tugashidan oldingi asosiy xavotir odatda bitta: <b>ma’lumotlarim yo‘qoladimi?</b> Qisqa javob —
        yo‘q. Quyida rasmiy FAQ nimani aniq yozgani va nimani yozmagani ajratib ko‘rsatilgan.
      </p>

      <h2 id="farq">Obunani bekor qilish va muddat tugashi — bir xil emas</h2>
      <InfoGrid>
        <InfoCard emoji="🛑" title="Bekor qilish">
          Avtomatik uzaytirishni o‘chirish. Imkoniyatlar darhol to‘xtamaydi — to‘langan muddat oxirigacha
          ishlaydi.
        </InfoCard>
        <InfoCard emoji="📅" title="Muddat tugashi">
          Aynan shu paytda quyidagi jadvaldagi o‘zgarishlar kuchga kiradi.
        </InfoCard>
      </InfoGrid>
      <p>
        StarsPaymee orqali olingan obunada <b>avtoto‘lov umuman ulanmaydi</b>, ya’ni bekor qilinadigan narsa
        yo‘q: muddat shunchaki o‘z vaqtida tugaydi va hisobingizdan hech narsa yechilmaydi.
      </p>

      <h2 id="jadval">Nima o‘zgaradi — aniq jadval</h2>
      <ExpiryTable locale="uz" />
      <p>
        Jadvaldagi «FAQ’da aniq yozilmagan» qatorlari ataylab shunday qoldirilgan: rasmiy hujjat ularni
        sanamaydi, biz esa taxminni fakt sifatida bermaymiz.
      </p>

      <h2 id="fayl">Chatlar va avval yuborilgan fayllar</h2>
      <p>
        Rasmiy FAQ obuna tugaganda o‘zgaradigan narsalar ro‘yxatini beradi — va bu ro‘yxatda yuborilgan xabarlar
        yoki fayllar <b>yo‘q</b>. O‘zgaradigan narsalar sifatida papkalar, qadab qo‘yilgan chatlar, kanal
        qo‘shish imkoniyati va rozetka ko‘rsatilgan.
      </p>
      <KeyFacts label="Amaliy tavsiya">
        <li>Siz uchun juda muhim bo‘lgan katta fayllarni har doim alohida joyda ham saqlang — bu umumiy qoida.</li>
        <li>«Saqlangan xabarlar» bo‘limi obunaga bog‘liq emas.</li>
        <li>Muddat tugashidan oldin hech narsani shoshib ko‘chirishning hojati yo‘q.</li>
      </KeyFacts>

      <h2 id="yangi">Yangi fayl yuborish va yuklab olish</h2>
      <p>
        Bu yerda o‘zgarish tabiiy: <b>4 GB</b> gacha yuklash Premium imkoniyati bo‘lgani uchun, muddat tugagach
        chegara oddiy hisobnikiga qaytadi. Ya’ni eski fayllar joyida qoladi, lekin <b>yangi</b> katta faylni
        yuborish uchun yana obuna kerak bo‘ladi.
      </p>

      <h2 id="bezak">Emoji, rozetka va boshqa bezaklar</h2>
      <p>
        Rasmiy FAQ’da <b>profil rozetkasi yo‘qolishi</b> aniq aytilgan. Premium emoji va animatsion profil rasmi
        haqida esa alohida yozilmagan — shuning uchun biz ham bu haqda qat’iy gapirmaymiz. Agar bu siz uchun
        muhim bo‘lsa, muddat tugashidan oldin o‘zingiz tekshirib ko‘rish eng ishonchli yo‘l.
      </p>

      <h2 id="papka">Papka, kanal va qadab qo‘yilgan chatlar</h2>
      <p>Bu qism FAQ’da eng aniq yozilgan va odamlar aynan shundan xavotir oladi:</p>
      <KeyFacts label="Rasmiy FAQ nima deydi">
        <li>
          <b>Papkalar:</b> birinchi 10 tasi ishlashda qoladi; qolganlari qulflanadi.
        </li>
        <li>
          <b>Qadab qo‘yilgan chatlar:</b> birinchi 5 tasi qoladi, ortiqchalari yechiladi.
        </li>
        <li>
          <b>Kanal va papkalar:</b> bor holicha qoladi, lekin yangi kanalga qo‘shila olmaysiz va papkalarga yangi
          chat qo‘sha olmaysiz.
        </li>
      </KeyFacts>
      <p>
        Ya’ni hech narsa o‘chirilmaydi — cheklov <b>yangi qo‘shishga</b> qo‘yiladi. Qulflangan papka ham
        yo‘qolmaydi, u shunchaki ishlamay turadi.
      </p>

      <h2 id="qayta">Qayta obuna bo‘lganda nima tiklanadi</h2>
      <p>
        Qulflangan papkalar va boshqa cheklovlar obuna qayta faollashgach yana ishlay boshlaydi — chunki ular
        o‘chirilmagan, faqat cheklangan edi. Rozetka ham qaytadi.
      </p>
      <p>
        Qayta faollashtirish uchun avvalgi tarifni tanlash shart emas: muddatlar va narxlar —{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">Premium narxi maqolasida</Link>, xarid
        tartibi esa <Link href="/blog/telegram-premium-eng-oson-usul">eng oson usul</Link> qo‘llanmasida.
      </p>

      <InlineCta text="Muddat tugashidan oldin uzaytiring." product={{ kind: "premium", months: 6 }} />

      <Sources
        label="Manbalar"
        items={[
          {
            href: "https://telegram.org/faq_premium#q-what-happens-if-i-cancel-my-subscription",
            label: "telegram.org/faq_premium",
            note: "obuna tugagach nima o‘zgaradi",
          },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Аккаунт не блокируется и чаты не пропадают. По официальному FAQ меняется вполне определённое:{" "}
      <b>первые 10 папок</b> продолжают работать, остальные блокируются; <b>первые 5 закреплённых чатов</b>{" "}
      остаются, лишние открепляются; каналы и папки сохраняются, но добавлять новые нельзя; значок в профиле
      пропадает.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#farq", label: "Отмена и окончание — разное" },
          { href: "#jadval", label: "Что меняется — таблица" },
          { href: "#fayl", label: "Чаты и файлы" },
          { href: "#yangi", label: "Отправка новых файлов" },
          { href: "#bezak", label: "Эмодзи и оформление" },
          { href: "#papka", label: "Папки, каналы, закреплённые" },
          { href: "#qayta", label: "Если оформить снова" },
        ]}
      />

      <p>
        Главное опасение перед окончанием подписки обычно одно: <b>пропадут ли мои данные?</b> Короткий ответ —
        нет. Ниже отделено то, что официальный FAQ описывает прямо, от того, о чём он молчит.
      </p>

      <h2 id="farq">Отмена подписки и окончание срока — это не одно и то же</h2>
      <InfoGrid>
        <InfoCard emoji="🛑" title="Отмена">
          Отключение автопродления. Возможности не выключаются сразу — они работают до конца оплаченного срока.
        </InfoCard>
        <InfoCard emoji="📅" title="Окончание срока">
          Именно в этот момент вступают в силу изменения из таблицы ниже.
        </InfoCard>
      </InfoGrid>
      <p>
        В подписке, оформленной через StarsPaymee, <b>автоплатёж не подключается вообще</b>, поэтому отменять
        нечего: срок просто заканчивается вовремя и с вас ничего не списывается.
      </p>

      <h2 id="jadval">Что меняется — точная таблица</h2>
      <ExpiryTable locale="ru" />
      <p>
        Строки «в FAQ прямо не описано» оставлены такими намеренно: официальный документ их не перечисляет, а
        выдавать предположение за факт мы не будем.
      </p>

      <h2 id="fayl">Чаты и ранее отправленные файлы</h2>
      <p>
        Официальный FAQ перечисляет, что меняется по окончании подписки — и отправленных сообщений или файлов в
        этом перечне <b>нет</b>. В качестве изменяющегося указаны папки, закреплённые чаты, возможность
        добавлять каналы и значок.
      </p>
      <KeyFacts label="Практический совет">
        <li>Действительно важные большие файлы всегда держите ещё где-то — это общее правило.</li>
        <li>Раздел «Сохранённые сообщения» с подпиской не связан.</li>
        <li>Срочно ничего переносить перед окончанием срока не нужно.</li>
      </KeyFacts>

      <h2 id="yangi">Отправка и загрузка новых файлов</h2>
      <p>
        Здесь изменение естественное: загрузка до <b>4 ГБ</b> — возможность Premium, поэтому после окончания
        срока лимит возвращается к обычному. Старые файлы остаются на месте, но для отправки{" "}
        <b>нового</b> большого файла подписка снова понадобится.
      </p>

      <h2 id="bezak">Эмодзи, значок и оформление</h2>
      <p>
        В официальном FAQ прямо сказано, что <b>значок профиля пропадает</b>. О премиум-эмодзи и анимированном
        фото профиля отдельно не написано — поэтому и мы не будем утверждать. Если для вас это важно, надёжнее
        всего проверить самому до окончания срока.
      </p>

      <h2 id="papka">Папки, каналы и закреплённые чаты</h2>
      <p>Эта часть в FAQ описана точнее всего, и именно из-за неё обычно волнуются:</p>
      <KeyFacts label="Что говорит официальный FAQ">
        <li>
          <b>Папки:</b> первые 10 продолжают работать; остальные блокируются.
        </li>
        <li>
          <b>Закреплённые чаты:</b> первые 5 остаются, лишние открепляются.
        </li>
        <li>
          <b>Каналы и папки:</b> сохраняются как есть, но вступать в новые каналы и добавлять чаты в папки
          нельзя.
        </li>
      </KeyFacts>
      <p>
        То есть ничего не удаляется — ограничение касается <b>добавления нового</b>. Заблокированная папка тоже
        не исчезает, она просто перестаёт работать.
      </p>

      <h2 id="qayta">Что восстановится при повторной подписке</h2>
      <p>
        Заблокированные папки и прочие ограничения снова заработают после активации подписки — они ведь не были
        удалены, а только ограничены. Значок тоже вернётся.
      </p>
      <p>
        Выбирать прежний тариф необязательно: сроки и цены — в{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">статье о стоимости Premium</Link>, порядок
        покупки — в руководстве{" "}
        <Link href="/blog/telegram-premium-eng-oson-usul">самый простой способ</Link>.
      </p>

      <InlineCta text="Продлите до окончания срока." product={{ kind: "premium", months: 6 }} />

      <Sources
        label="Источники"
        items={[
          {
            href: "https://telegram.org/faq_premium#q-what-happens-if-i-cancel-my-subscription",
            label: "telegram.org/faq_premium",
            note: "что меняется после окончания подписки",
          },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Premium tugasa fayllarim o‘chadimi?",
    answer:
      "Rasmiy FAQ obuna tugaganda o‘zgaradigan narsalar ro‘yxatini beradi va unda yuborilgan fayllar yoki xabarlar sanalmagan.",
  },
  {
    question: "Papkalarim nima bo‘ladi?",
    answer: "Birinchi 10 ta papka ishlashda qoladi, ortiqchasi qulflanadi — lekin o‘chirilmaydi.",
  },
  {
    question: "Qadab qo‘yilgan chatlar qoladimi?",
    answer: "Birinchi 5 tasi qoladi, ortiqchasi yechiladi.",
  },
  {
    question: "Obuna bo‘lgan kanallarim yo‘qoladimi?",
    answer: "Yo‘q. Kanallar va papkalar bor holicha qoladi, faqat yangisini qo‘shib bo‘lmaydi.",
  },
  {
    question: "Premium emoji qoladimi?",
    answer: "Rasmiy FAQ bu haqda aniq yozmagan, shuning uchun kafolat berib bo‘lmaydi.",
  },
  {
    question: "Profil rozetkasi nima bo‘ladi?",
    answer: "Rasmiy FAQ’ga ko‘ra rozetka yo‘qoladi; obuna qayta faollashsa, u ham qaytadi.",
  },
  {
    question: "Akkauntim bloklanadimi?",
    answer: "Yo‘q. Chatlar, kanallar va akkauntning o‘zi joyida qoladi.",
  },
  {
    question: "Avtoto‘lov ulanadimi?",
    answer: "StarsPaymee orqali olingan obunada avtoto‘lov ulanmaydi — muddat tugagach hech narsa yechilmaydi.",
  },
];

const ruFaq = [
  {
    question: "Пропадут ли файлы, когда закончится Premium?",
    answer:
      "Официальный FAQ перечисляет, что меняется после окончания подписки, и отправленных файлов или сообщений в этом перечне нет.",
  },
  {
    question: "Что будет с папками?",
    answer: "Первые 10 папок продолжат работать, остальные заблокируются — но не удалятся.",
  },
  { question: "Останутся ли закреплённые чаты?", answer: "Первые 5 останутся, лишние открепятся." },
  {
    question: "Пропадут ли каналы, на которые я подписан?",
    answer: "Нет. Каналы и папки сохраняются, нельзя лишь добавлять новые.",
  },
  {
    question: "Останутся ли премиум-эмодзи?",
    answer: "В официальном FAQ об этом прямо не сказано, поэтому гарантировать нельзя.",
  },
  {
    question: "Что будет со значком профиля?",
    answer: "По официальному FAQ значок пропадает; при повторной подписке он вернётся.",
  },
  { question: "Заблокируют ли аккаунт?", answer: "Нет. Чаты, каналы и сам аккаунт остаются на месте." },
  {
    question: "Подключается ли автоплатёж?",
    answer: "В подписке через StarsPaymee автоплатёж не подключается — по окончании срока ничего не спишется.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "info",
  datePublished: "2026-09-08",
  dateModified: "2026-09-08",
  keywords: [
    "telegram premium tugasa nima bo‘ladi",
    "premium tugasa fayllar o‘chadimi",
    "premium tugasa emoji qoladimi",
    "telegram premium muddati tugadi",
    "premium tugasa kanallar qoladimi",
    "premium tugasa sozlamalar",
  ],
  locales: {
    uz: {
      title: "Telegram Premium tugasa fayllar, emoji va sozlamalar nima bo‘ladi?",
      excerpt:
        "Rasmiy FAQ nimani aniq yozgan: papkalar, qadab qo‘yilgan chatlar, kanallar va rozetka. Nima yozilmagani ham ochiq ko‘rsatilgan.",
      metaTitle: "Telegram Premium tugasa nima bo‘ladi?",
      metaDescription:
        "Premium muddati tugasa: 10 ta papka qoladi, 5 ta qadalgan chat saqlanadi, kanallar joyida, rozetka yo‘qoladi. Fayllar va emoji haqida aniq holat.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Muddatni uzaytirasizmi?",
      ctaBody: "@StarsPaymee_bot — 3, 6 yoki 12 oy, so‘mda, avtoto‘lovsiz.",
      faq: uzFaq,
    },
    ru: {
      title: "Что будет с файлами, эмодзи и настройками, когда закончится Premium?",
      excerpt:
        "Что официальный FAQ описывает точно: папки, закреплённые чаты, каналы и значок. И о чём он прямо не говорит.",
      metaTitle: "Что будет, когда закончится Telegram Premium?",
      metaDescription:
        "После окончания Premium: остаются 10 папок и 5 закреплённых чатов, каналы на месте, значок пропадает. Что известно про файлы и эмодзи.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Продлить подписку?",
      ctaBody: "@StarsPaymee_bot — 3, 6 или 12 месяцев, в сумах, без автоплатежа.",
      faq: ruFaq,
    },
  },
};
