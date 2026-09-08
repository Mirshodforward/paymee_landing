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

const SLUG = "telegram-gift-havolasini-tekshirish";

/**
 * Havolani tekshirish namunasi.
 *
 * MUHIM: bu yerdagi «soxta» manzillar ataylab bosilmaydigan oddiy matn
 * sifatida beriladi va `example` domenida — o‘quvchini haqiqiy zararli
 * sahifaga olib boradigan havola qo‘yilmaydi.
 */
function LinkCheckTable({ locale }: { locale: "uz" | "ru" }) {
  const copy = {
    uz: {
      headers: ["Nima ko‘rinadi", "Nima tekshiriladi", "Xulosa"],
      rows: [
        ["Ko‘rinadigan matn: t.me/nft/...", "Bosishdan oldin uzoq bosib manzilni ko‘ring", "Matn va haqiqiy manzil mos kelmasa — to‘xtang"],
        ["Manzil: t-me-gifts.example", "Domen Telegramning o‘ziga tegishlimi", "Qo‘shimcha so‘z va chiziqchalar — soxta belgisi"],
        ["Manzil: telegram-gift-bot.example", "Bu bot Telegram ichida topiladimi", "Qidiruvda chiqmasa — ishonchsiz"],
        ["Skrinshot yuborilgan", "Skrinshotni tekshirib bo‘lmaydi", "Dalil sifatida qabul qilmang"],
        ["«Login qiling» talabi", "Telegram sovg‘a uchun login so‘ramaydi", "Bu — o‘g‘irlash urinishi"],
      ],
    },
    ru: {
      headers: ["Что видно", "Что проверяем", "Вывод"],
      rows: [
        ["Видимый текст: t.me/nft/...", "Перед нажатием посмотрите реальный адрес долгим нажатием", "Текст и адрес не совпали — остановитесь"],
        ["Адрес: t-me-gifts.example", "Принадлежит ли домен самому Telegram", "Лишние слова и дефисы — признак подделки"],
        ["Адрес: telegram-gift-bot.example", "Находится ли этот бот внутри Telegram", "Не находится в поиске — доверия нет"],
        ["Прислали скриншот", "Скриншот проверить невозможно", "Не принимайте как доказательство"],
        ["Требование «войдите»", "Telegram не просит логин ради подарка", "Это попытка угона аккаунта"],
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
      Havolaning o‘zi hech narsani isbotlamaydi. Haqiqiy sovg‘a sahifasiga havola yuborish{" "}
      <b>sotuvchining ishonchliligini ham, bitimning xavfsizligini ham</b> tasdiqlamaydi — chunki har kim
      begonaning sovg‘asiga havola yubora oladi. Shuning uchun havolani emas, <b>sovg‘ani Telegram ichidan
      mustaqil topib</b> tekshiring.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#manzil", label: "Ko‘rinadigan matn va haqiqiy manzil" },
          { href: "#mustaqil", label: "Sovg‘ani o‘zingiz topib ko‘ring" },
          { href: "#xususiyat", label: "Kolleksiya, raqam va xususiyatlar" },
          { href: "#skrinshot", label: "Nega skrinshot dalil emas" },
          { href: "#login", label: "«Login qiling» talabi" },
          { href: "#vositachi", label: "Noma’lum bot va vositachi" },
          { href: "#keyin", label: "Ma’lumot bergan bo‘lsangiz" },
        ]}
      />

      <p>
        Bu maqola akkaunt xavfsizligi haqida umumiy maslahatlar emas — u bitta aniq lahza haqida:{" "}
        <b>sizga Gift havolasi keldi va siz sotib olmoqchisiz</b>. Shu daqiqada nimani tekshirish kerakligini
        ko‘rib chiqamiz.
      </p>

      <h2 id="manzil">Ko‘rinadigan matn bilan ochiladigan manzilni solishtiring</h2>
      <p>
        Telegramda havolaning <b>ko‘rinadigan matni</b> va u olib boradigan <b>haqiqiy manzil</b> boshqa-boshqa
        bo‘lishi mumkin. Bu — eng ko‘p ishlatiladigan usul.
      </p>
      <Steps>
        <Step title="1. Bosmasdan turib manzilni ko‘ring">
          Havolani uzoq bosib turing (yoki kompyuterda ustiga olib boring) — haqiqiy manzil ko‘rinadi.
        </Step>
        <Step title="2. Domenni diqqat bilan o‘qing">
          Qo‘shimcha so‘zlar, chiziqchalar va almashtirilgan harflar bor-yo‘qligiga qarang.
        </Step>
        <Step title="3. Shubha bo‘lsa — umuman bosmang">
          Sovg‘ani baribir Telegram ichidan o‘zingiz topa olasiz.
        </Step>
      </Steps>
      <LinkCheckTable locale="uz" />
      <p>
        Jadvaldagi manzillar <b>namuna uchun</b> yozilgan va ataylab bosilmaydigan oddiy matn ko‘rinishida —
        biz haqiqiy zararli sahifaga havola bermaymiz.
      </p>

      <h2 id="mustaqil">Sovg‘ani Telegram ichidan mustaqil topib ko‘ring</h2>
      <p>
        Bu — eng kuchli tekshiruv va u bir daqiqa oladi. Agar sovg‘a haqiqiy bo‘lsa, siz uni{" "}
        <b>sotuvchining havolasisiz ham</b> topa olasiz.
      </p>
      <KeyFacts label="Nima qilinadi">
        <li>Sovg‘a nomi va kolleksiyasini sotuvchidan so‘rang — havolani emas, nomni.</li>
        <li>Telegram qidiruvidan yoki sovg‘alar bo‘limidan o‘sha nomni o‘zingiz qidiring.</li>
        <li>Topilgan sahifadagi ma’lumotlar sotuvchi aytganlariga mos keladimi — solishtiring.</li>
        <li>Topa olmasangiz yoki mos kelmasa — bitimni davom ettirmang.</li>
      </KeyFacts>

      <h2 id="xususiyat">Kolleksiya, raqam va xususiyatlarni taqqoslash</h2>
      <p>
        Kolleksion sovg‘alarda tashqi ko‘rinish o‘xshash bo‘lishi mumkin, lekin har bir nusxaning o‘z belgilari
        bor. Aynan ular sovg‘ani ajratib turadi:
      </p>
      <InfoGrid>
        <InfoCard emoji="🏷️" title="Kolleksiya nomi">
          Sotuvchi aytgan kolleksiya bilan sahifadagi kolleksiya bir xilmi?
        </InfoCard>
        <InfoCard emoji="🔢" title="Nusxa raqami">
          Raqam aniq ko‘rsatilganmi va u sotuvchi aytganiga mos keladimi?
        </InfoCard>
        <InfoCard emoji="🎨" title="Model, fon, belgi">
          Bu uch xususiyat nusxani boshqasidan farqlaydi — ularni yonma-yon solishtiring.
        </InfoCard>
        <InfoCard emoji="👤" title="Hozirgi egasi">
          Sovg‘a hozir kimda turibdi — sotuvchining o‘zidami?
        </InfoCard>
      </InfoGrid>
      <p>
        Bir xil ko‘rinadigan sovg‘alar nega har xil narxda turishi{" "}
        <Link href="/blog/telegram-gift-price">sovg‘a narxi maqolasida</Link> tushuntirilgan.
      </p>

      <h2 id="skrinshot">Nega skrinshot yetarli dalil emas</h2>
      <p>
        Skrinshot — tahrirlash eng oson bo‘lgan narsa. Unda ko‘rsatilgan egalik, raqam yoki narxni tekshirib
        bo‘lmaydi. Shuning uchun qoida oddiy:
      </p>
      <KeyFacts label="Qoida">
        <li>Skrinshot — suhbat uchun, qaror uchun emas.</li>
        <li>Har qanday da’voni Telegram ichidan o‘zingiz tekshiring.</li>
        <li>«Ishonmasangiz, mana skrinshot» degan javob — tekshiruvning o‘rnini bosmaydi.</li>
      </KeyFacts>

      <h2 id="login">«Sovg‘ani olish uchun login qiling» — bu firibgarlik</h2>
      <p>
        Telegram sovg‘a berish yoki qabul qilish uchun sizdan <b>hech qachon</b> alohida saytda login qilishni,
        parol yoki kirish kodini kiritishni so‘ramaydi.
      </p>
      <KeyFacts label="Darhol to‘xtatadigan talablar">
        <li>Kirish kodi yoki parolni yuborish.</li>
        <li>Telegramdan tashqaridagi sahifada «akkaunt bilan kirish».</li>
        <li>Sovg‘ani «tasdiqlash» uchun kalit iborani (seed) kiritish.</li>
        <li>Ekraningizni ko‘rsatish yoki masofaviy boshqaruv ilovasini o‘rnatish.</li>
      </KeyFacts>

      <h2 id="vositachi">Sotuvchi yuborgan noma’lum bot yoki «vositachi»</h2>
      <p>
        Yana bir keng tarqalgan sxema — «xavfsiz bitim uchun» notanish bot yoki «kafil» taklif qilish. Bunday
        vositachi odatda sotuvchining o‘zi yoki uning sherigi bo‘ladi.
      </p>
      <Steps>
        <Step title="1. Vositachini kim tanladi?">
          Uni sotuvchi taklif qilgan bo‘lsa, bu tomonsiz kafil emas.
        </Step>
        <Step title="2. Bot Telegram qidiruvida topiladimi?">Topilmasa yoki yangi bo‘lsa — ishonmang.</Step>
        <Step title="3. «Avval yuboring, keyin to‘layman»">
          Bu taklif qaysi tomondan kelishidan qat’i nazar — eng keng tarqalgan aldov sxemasi.
        </Step>
        <Step title="4. Shoshiltirish bormi?">Vaqt bosimi — har doim ogohlantiruvchi belgi.</Step>
      </Steps>

      <h2 id="keyin">Shubhali sahifaga ma’lumot bergan bo‘lsangiz</h2>
      <p>Vaqt muhim — quyidagilarni darhol bajaring:</p>
      <Steps>
        <Step title="1. Faol seanslarni tekshiring">
          Telegram sozlamalarida notanish qurilmalar bo‘lsa, ularni yopib tashlang.
        </Step>
        <Step title="2. Ikki bosqichli tasdiqni yoqing">
          Parol o‘rnatilgan bo‘lsa, uni o‘zgartiring.
        </Step>
        <Step title="3. Karta ma’lumotini bergan bo‘lsangiz">Bankka qo‘ng‘iroq qilib kartani bloklang.</Step>
        <Step title="4. Yaqinlaringizni ogohlantiring">
          O‘g‘irlangan akkauntdan ular nomidan xabar yuborilishi mumkin.
        </Step>
      </Steps>
      <p>
        Akkauntni himoyalash bo‘yicha to‘liq qo‘llanma —{" "}
        <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">2FA va himoya choralari</Link>. Xavfsiz
        xarid tartibi esa <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">sovg‘a qo‘llanmasida</Link>{" "}
        yozilgan.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "sovg‘alar va egalik" },
          { href: "https://telegram.org/faq", label: "telegram.org/faq", note: "xavfsizlik bo‘yicha rasmiy FAQ" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Сама по себе ссылка ничего не доказывает. Присланная ссылка на настоящую страницу подарка{" "}
      <b>не подтверждает ни надёжность продавца, ни безопасность сделки</b> — прислать ссылку на чужой подарок
      может кто угодно. Поэтому проверяйте не ссылку, а <b>сам подарок, найдя его в Telegram самостоятельно</b>.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#manzil", label: "Видимый текст и реальный адрес" },
          { href: "#mustaqil", label: "Найдите подарок сами" },
          { href: "#xususiyat", label: "Коллекция, номер, свойства" },
          { href: "#skrinshot", label: "Почему скриншот не доказательство" },
          { href: "#login", label: "Требование «войдите»" },
          { href: "#vositachi", label: "Неизвестный бот или посредник" },
          { href: "#keyin", label: "Если данные уже введены" },
        ]}
      />

      <p>
        Эта статья не про общие советы по безопасности аккаунта — она про один конкретный момент:{" "}
        <b>вам прислали ссылку на Gift, и вы собираетесь купить</b>. Разберём, что проверить именно сейчас.
      </p>

      <h2 id="manzil">Сравните видимый текст и адрес, который открывается</h2>
      <p>
        В Telegram <b>видимый текст</b> ссылки и <b>реальный адрес</b>, куда она ведёт, могут различаться. Это
        самый частый приём.
      </p>
      <Steps>
        <Step title="1. Посмотрите адрес, не нажимая">
          Задержите палец на ссылке (или наведите курсор на компьютере) — покажется настоящий адрес.
        </Step>
        <Step title="2. Внимательно прочитайте домен">
          Проверьте лишние слова, дефисы и подменённые буквы.
        </Step>
        <Step title="3. Сомневаетесь — не нажимайте вовсе">
          Подарок вы всё равно сможете найти внутри Telegram сами.
        </Step>
      </Steps>
      <LinkCheckTable locale="ru" />
      <p>
        Адреса в таблице приведены <b>как образец</b> и намеренно оставлены обычным текстом без ссылки — мы не
        даём переходов на реально вредоносные страницы.
      </p>

      <h2 id="mustaqil">Найдите подарок в Telegram самостоятельно</h2>
      <p>
        Это самая сильная проверка, и она занимает минуту. Если подарок настоящий, вы найдёте его{" "}
        <b>и без ссылки продавца</b>.
      </p>
      <KeyFacts label="Что делать">
        <li>Спросите у продавца название подарка и коллекцию — именно название, а не ссылку.</li>
        <li>Найдите это название сами через поиск Telegram или раздел подарков.</li>
        <li>Сравните данные на найденной странице с тем, что говорит продавец.</li>
        <li>Не нашли или не совпало — сделку не продолжайте.</li>
      </KeyFacts>

      <h2 id="xususiyat">Сравнение коллекции, номера и свойств</h2>
      <p>
        У коллекционных подарков внешний вид может быть похожим, но у каждого экземпляра свои признаки. Именно
        они и отличают подарок:
      </p>
      <InfoGrid>
        <InfoCard emoji="🏷️" title="Название коллекции">
          Совпадает ли коллекция на странице с тем, что назвал продавец?
        </InfoCard>
        <InfoCard emoji="🔢" title="Номер экземпляра">
          Указан ли номер точно и совпадает ли он со словами продавца?
        </InfoCard>
        <InfoCard emoji="🎨" title="Модель, фон, символ">
          Эти три свойства отличают экземпляр от других — сравните их рядом.
        </InfoCard>
        <InfoCard emoji="👤" title="Текущий владелец">
          У кого подарок находится сейчас — действительно у продавца?
        </InfoCard>
      </InfoGrid>
      <p>
        Почему похожие подарки стоят по-разному, объяснено в{" "}
        <Link href="/blog/telegram-gift-price">статье о цене подарка</Link>.
      </p>

      <h2 id="skrinshot">Почему скриншот не является доказательством</h2>
      <p>
        Скриншот проще всего отредактировать. Показанные на нём владение, номер или цену проверить невозможно.
        Поэтому правило простое:
      </p>
      <KeyFacts label="Правило">
        <li>Скриншот — для разговора, а не для решения.</li>
        <li>Любое утверждение проверяйте сами внутри Telegram.</li>
        <li>Ответ «не верите — вот скриншот» проверку не заменяет.</li>
      </KeyFacts>

      <h2 id="login">«Войдите, чтобы получить подарок» — это мошенничество</h2>
      <p>
        Telegram <b>никогда</b> не просит для отправки или получения подарка входить на отдельном сайте, вводить
        пароль или код входа.
      </p>
      <KeyFacts label="Требования, при которых нужно остановиться">
        <li>Переслать код входа или пароль.</li>
        <li>«Войти через аккаунт» на странице вне Telegram.</li>
        <li>Ввести seed-фразу для «подтверждения» подарка.</li>
        <li>Показать экран или установить приложение удалённого доступа.</li>
      </KeyFacts>

      <h2 id="vositachi">Неизвестный бот или «посредник» от продавца</h2>
      <p>
        Ещё одна распространённая схема — предложить незнакомого бота или «гаранта» ради «безопасной сделки».
        Такой посредник обычно и есть сам продавец или его сообщник.
      </p>
      <Steps>
        <Step title="1. Кто выбрал посредника?">Если его предложил продавец — это не независимый гарант.</Step>
        <Step title="2. Находится ли бот в поиске Telegram?">Не находится или создан недавно — доверия нет.</Step>
        <Step title="3. «Сначала отправьте, потом заплачу»">
          С какой бы стороны это ни прозвучало — самая частая схема обмана.
        </Step>
        <Step title="4. Есть ли спешка?">Давление по времени — всегда тревожный признак.</Step>
      </Steps>

      <h2 id="keyin">Если вы уже ввели данные на подозрительной странице</h2>
      <p>Здесь важно время — сделайте следующее сразу:</p>
      <Steps>
        <Step title="1. Проверьте активные сессии">
          В настройках Telegram завершите незнакомые устройства.
        </Step>
        <Step title="2. Включите двухэтапную проверку">Если пароль уже стоял — смените его.</Step>
        <Step title="3. Если вводили данные карты">Позвоните в банк и заблокируйте карту.</Step>
        <Step title="4. Предупредите близких">С угнанного аккаунта могут писать от вашего имени.</Step>
      </Steps>
      <p>
        Полное руководство по защите аккаунта —{" "}
        <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">2FA и меры защиты</Link>. Безопасный порядок
        покупки описан в{" "}
        <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">руководстве по подаркам</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "подарки и владение" },
          { href: "https://telegram.org/faq", label: "telegram.org/faq", note: "официальный FAQ по безопасности" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Gift havolasi haqiqiy bo‘lsa, sotuvchi ham ishonchlimi?",
    answer:
      "Yo‘q. Har kim begonaning sovg‘asiga havola yubora oladi. Havola sotuvchining egalik qilishini isbotlamaydi.",
  },
  {
    question: "Havolani qanday tekshiraman?",
    answer:
      "Bosmasdan uzoq bosib turing va haqiqiy manzilni ko‘ring. Keyin sovg‘ani nomi bo‘yicha Telegram ichidan o‘zingiz qidiring.",
  },
  {
    question: "Sotuvchi skrinshot yubordi — bu yetarlimi?",
    answer: "Yo‘q. Skrinshotni tahrirlash oson va uni tekshirib bo‘lmaydi; qaror uchun asos bo‘la olmaydi.",
  },
  {
    question: "«Sovg‘ani olish uchun login qiling» deyishyapti.",
    answer:
      "Bu firibgarlik. Telegram sovg‘a uchun alohida saytda login qilishni, parol yoki kirish kodini so‘ramaydi.",
  },
  {
    question: "Sotuvchi vositachi bot taklif qilyapti — ishonsam bo‘ladimi?",
    answer: "Vositachini sotuvchi tanlagan bo‘lsa, u tomonsiz kafil emas. Ishonch uchun asos yo‘q.",
  },
  {
    question: "Nimani solishtirish kerak?",
    answer: "Kolleksiya nomi, nusxa raqami, model, fon, belgi va hozirgi egasi — sotuvchi aytgani bilan yonma-yon.",
  },
  {
    question: "Shubhali sahifaga ma’lumot berib qo‘ydim, nima qilaman?",
    answer:
      "Faol seanslarni yoping, ikki bosqichli tasdiqni yoqing yoki parolni o‘zgartiring, karta bergan bo‘lsangiz bankka murojaat qiling.",
  },
];

const ruFaq = [
  {
    question: "Если ссылка на Gift настоящая, значит продавец надёжный?",
    answer:
      "Нет. Прислать ссылку на чужой подарок может кто угодно. Ссылка не доказывает, что подарок принадлежит продавцу.",
  },
  {
    question: "Как проверить ссылку?",
    answer:
      "Задержите палец на ней и посмотрите реальный адрес, не нажимая. Затем найдите подарок по названию в Telegram самостоятельно.",
  },
  {
    question: "Продавец прислал скриншот — этого достаточно?",
    answer: "Нет. Скриншот легко отредактировать и невозможно проверить; основанием для решения он быть не может.",
  },
  {
    question: "Просят «войти, чтобы получить подарок».",
    answer:
      "Это мошенничество. Telegram не просит ради подарка входить на отдельном сайте, вводить пароль или код входа.",
  },
  {
    question: "Продавец предлагает бота-посредника — можно доверять?",
    answer: "Если посредника выбрал продавец, это не независимый гарант. Оснований для доверия нет.",
  },
  {
    question: "Что именно сравнивать?",
    answer: "Название коллекции, номер экземпляра, модель, фон, символ и текущего владельца — рядом со словами продавца.",
  },
  {
    question: "Я уже ввёл данные на подозрительной странице, что делать?",
    answer:
      "Завершите активные сессии, включите двухэтапную проверку или смените пароль, а при вводе данных карты — обратитесь в банк.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Xavfsizlik",
  type: "problem",
  datePublished: "2026-09-08",
  dateModified: "2026-09-08",
  keywords: [
    "telegram gift havolasini tekshirish",
    "telegram gift haqiqiymi",
    "telegram gift scam",
    "soxta telegram nft",
    "gift sotishda aldash",
    "telegram sovg‘a firibgarlik",
  ],
  locales: {
    uz: {
      title: "Telegram Gift havolasi haqiqiymi? Xariddan oldin tekshirish",
      excerpt:
        "Ko‘rinadigan matn va haqiqiy manzil farqi, sovg‘ani mustaqil topib tekshirish, nega skrinshot dalil emas va vositachi taklif qilinsa nima qilish.",
      metaTitle: "Telegram Gift havolasini xariddan oldin tekshirish",
      metaDescription:
        "Telegram Gift havolasi haqiqiymi: manzilni bosmasdan tekshirish, sovg‘ani o‘zingiz topish, kolleksiya va raqamni solishtirish, firibgarlik belgilari.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Ishonchli xarid",
      ctaBody: "@StarsPaymee_bot — ochiq katalog, so‘mda narx va buyurtma raqami bilan.",
      faq: uzFaq,
    },
    ru: {
      title: "Настоящая ли ссылка на Telegram Gift? Проверка до покупки",
      excerpt:
        "Чем видимый текст отличается от реального адреса, как найти подарок самому, почему скриншот не доказательство и что делать с посредником.",
      metaTitle: "Проверка ссылки на Telegram Gift до покупки",
      metaDescription:
        "Настоящая ли ссылка на Telegram Gift: как посмотреть адрес не нажимая, найти подарок самому, сравнить коллекцию и номер, признаки мошенничества.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Надёжная покупка",
      ctaBody: "@StarsPaymee_bot — открытый каталог, цена в сумах и номер заказа.",
      faq: ruFaq,
    },
  },
};
