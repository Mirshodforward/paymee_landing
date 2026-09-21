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
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-xabar-yuborish-stars";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Bu Telegramda yozish umuman pullik bo‘lgani degani emas. Ayrim foydalanuvchilar{" "}
      <b>kontaktlarida bo‘lmagan odamlardan keladigan xabarlar uchun</b> Stars to‘lovini o‘rnatgan bo‘lishi mumkin —
      summani <b>qabul qiluvchi</b> belgilaydi va yulduzlar <b>o‘shanga</b> o‘tadi. Boshqa hamma yozishmalaringiz
      avvalgidek bepul qoladi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "Summa nimani anglatadi" },
          { href: "#kim", label: "To‘lovni kim belgilaydi" },
          { href: "#tekshirish", label: "Yuborishdan oldin tekshirish" },
          { href: "#balans", label: "Balans yetmasa" },
          { href: "#bepul", label: "To‘lovsiz bog‘lanish" },
          { href: "#javob", label: "Javob kelmasa" },
          { href: "#qancha", label: "Qancha Stars kerak" },
        ]}
      />

      <h2 id="nima">Xabar oynasidagi Stars summasi nimani anglatadi</h2>
      <p>
        Telegram 2025-yilda <b>pulli xabarlar</b> (Star Messages) imkoniyatini joriy qildi. Uning mohiyati oddiy:
        foydalanuvchi o‘zining <b>kiruvchi</b> xabarlariga narx qo‘yishi mumkin. Kimdir unga yozmoqchi bo‘lsa,
        xabar yuborilishi uchun belgilangan miqdordagi Stars to‘lanadi.
      </p>
      <p>
        Ya’ni ekrandagi summa — bu Telegramning sizdan olayotgan to‘lovi emas, balki{" "}
        <b>aynan o‘sha odamga yozish narxi</b>. Bu spam va notanish odamlarning ketma-ket xabarlaridan himoya
        sifatida o‘ylab topilgan.
      </p>
      <KeyFacts label="Asosiy faktlar">
        <li>
          Narx <b>kiruvchi</b> xabarlarga qo‘yiladi — chiquvchi xabarlaringizga emas.
        </li>
        <li>
          Rasmiy e’londa bu imkoniyat <b>kontaktlar ro‘yxatidan tashqaridagi</b> foydalanuvchilar uchun
          tasvirlangan.
        </li>
        <li>To‘langan yulduzlar xabarni qabul qiluvchiga o‘tadi.</li>
        <li>
          Qabul qiluvchi ayrim odamlarga yoki muayyan guruh a’zolariga <b>bepul</b> yozish huquqini berishi mumkin.
        </li>
      </KeyFacts>

      <h2 id="kim">To‘lovni kim belgilaydi</h2>
      <p>
        Narxni <b>qabul qiluvchi</b> o‘zi tanlaydi — Telegram emas, siz emas, xizmat ko‘rsatuvchi ham emas.
        Shuning uchun bir odamga yozish bepul, boshqasiga esa pulli bo‘lishi mumkin; summa ham har xil bo‘ladi.
      </p>
      <p>
        Xuddi shu sabab bilan «bu narxni qanday o‘chiraman?» degan savolning javobi ham aniq: siz o‘chira
        olmaysiz. Narxni faqat uni qo‘ygan odamning o‘zi olib tashlashi yoki sizga bepul yozish ruxsatini berishi
        mumkin.
      </p>

      <h2 id="tekshirish">Yuborishdan oldin yakuniy summani tekshirish</h2>
      <p>
        Xabarni yuborishdan oldin ilova qancha Stars yechilishini ko‘rsatadi. Aniq joylashuv va matn ilova
        versiyasiga qarab farq qiladi, lekin quyidagilarga e’tibor bering:
      </p>
      <Steps>
        <Step title="1. Summani o‘qing">
          Yuborish tugmasi yonidagi yoki xabar maydonidagi yulduz miqdorini ko‘ring — bu bitta xabar uchun narx.
        </Step>
        <Step title="2. Bu bir martalikmi yoki har safarmi?">
          Narx <b>har bir xabarga</b> qo‘llanadi. Uzun fikringizni beshta qisqa xabarga bo‘lib yuborsangiz,
          to‘lov ham besh marta bo‘lishi mumkin — bitta xabarda yozgan ma’qul.
        </Step>
        <Step title="3. Tasdiqni bosishdan oldin to‘xtang">
          Haqiqatan yozish shartmi? Ko‘p holatda javobni ochiq kanal, sayt yoki qo‘llab-quvvatlash havolasidan
          bepul topish mumkin.
        </Step>
      </Steps>

      <h2 id="balans">Stars balansi yetmasa nima bo‘ladi</h2>
      <p>
        Balansingizda yetarli yulduz bo‘lmasa, xabar shunchaki yuborilmaydi — pul ham yechilmaydi, xabar ham
        ketmaydi. Telegram bu holatda balansni to‘ldirishni taklif qiladi.
      </p>
      <p>
        Balansni ilova ichidan to‘ldirish App Store yoki Google Play hisobini, ya’ni xorijiy kartani talab qiladi.
        O‘zbekistondagi foydalanuvchilar uchun muqobil yo‘l —{" "}
        <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">so‘mda Stars sotib olish</Link>.
      </p>

      <h2 id="bepul">To‘lov qilmasdan bog‘lanish imkoniyati bormi</h2>
      <p>
        Ba’zan bor, lekin bu <b>qabul qiluvchining ixtiyorida</b>. Rasmiy e’londa aytilishicha, foydalanuvchi
        ayrim odamlarga yoki muayyan guruhlar a’zolariga bepul yozish ruxsatini berishi mumkin.
      </p>
      <InfoGrid>
        <InfoCard emoji="👥" title="Umumiy guruh">
          Agar u ruxsat bergan guruhda ikkalangiz ham bo‘lsangiz, yozish bepul bo‘lishi mumkin.
        </InfoCard>
        <InfoCard emoji="📣" title="Ochiq kanal">
          Ko‘p holatda savolga javob kanal postlarida yoki izohlar bo‘limida allaqachon bor.
        </InfoCard>
        <InfoCard emoji="🔗" title="Ko‘rsatilgan aloqa">
          Profil yoki saytda ko‘rsatilgan boshqa aloqa usuli — pochta, yordam boti, forma.
        </InfoCard>
        <InfoCard emoji="🚫" title="Aylanma yo‘l yo‘q">
          Narxni chetlab o‘tadigan «usul» yoki «xizmat» taklif qilinsa — bu firibgarlik belgisi.
        </InfoCard>
      </InfoGrid>

      <h2 id="javob">Pul yechildi, lekin javob kelmadi</h2>
      <p>
        Bu yerda muhim narsani aniq tushunib olish kerak: <b>to‘lov xabarni yetkazish uchun</b>, javob olish
        kafolati uchun emas. Odam javob bermasligi, javobni kechiktirishi yoki umuman o‘qimasligi mumkin — bu
        pulli xabar qoidalariga zid emas.
      </p>
      <p>
        Rasmiy e’londa aytilishicha, <b>qabul qiluvchi</b> yulduzlarni bir bosishda qaytarib berishi mumkin. Ya’ni
        qaytarish qarori ham o‘shaning ixtiyorida — Telegram uni majburlamaydi va uchinchi tomon xizmatlari bu
        pulni qaytara olmaydi.
      </p>
      <KeyFacts label="Shuning uchun">
        <li>Katta summali pulli xabarni yuborishdan oldin javob sizga qanchalik zarurligini o‘ylab ko‘ring.</li>
        <li>Savolni bitta aniq xabarda yozing — takroriy xabarlar yana to‘lov demakdir.</li>
        <li>Notanish odam «avval pulli xabar yuboring, keyin gaplashamiz» desa — ehtiyot bo‘ling.</li>
      </KeyFacts>

      <h2 id="qancha">Qancha Stars kerakligini qanday aniqlash</h2>
      <p>
        Ekranda ko‘rsatilgan miqdor — bitta xabar narxi. Bir necha xabar yozmoqchi bo‘lsangiz, uni shunga
        ko‘paytiring va balansingiz bilan solishtiring.{" "}
        
          Kerakli Stars miqdorining so‘mdagi narxini hisoblash
        {" "}
        sahifasi shu hisobni tez bajaradi.
      </p>

      <InlineCta text="Yetishmagan yulduzlarni so‘mda to‘ldiring." product={{ kind: "stars", amount: 50 }} />

      <p>
        Agar siz aksincha — <b>o‘zingiz</b> kiruvchi xabarlarga narx qo‘ymoqchi bo‘lsangiz, bu boshqa mavzu va u{" "}
        <Link href="/blog/telegram-pulli-xabarlar-paid-messages">pulli xabarlar haqidagi maqolada</Link>{" "}
        yozilgan.
      </p>

      <Sources
        label="Manbalar"
        items={[
          {
            href: "https://telegram.org/blog/star-messages-gateway-2-0-and-more",
            label: "telegram.org/blog",
            note: "Star Messages rasmiy e’loni",
          },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "Stars texnik hujjati" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Это не значит, что переписка в Telegram стала платной. Отдельные пользователи могут установить плату в Stars{" "}
      <b>за входящие сообщения от людей не из своих контактов</b> — сумму задаёт <b>получатель</b>, и звёзды
      достаются <b>ему</b>. Все остальные ваши переписки остаются бесплатными.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nima", label: "Что означает сумма" },
          { href: "#kim", label: "Кто устанавливает плату" },
          { href: "#tekshirish", label: "Проверка перед отправкой" },
          { href: "#balans", label: "Если не хватает баланса" },
          { href: "#bepul", label: "Связаться без оплаты" },
          { href: "#javob", label: "Если ответа нет" },
          { href: "#qancha", label: "Сколько нужно Stars" },
        ]}
      />

      <h2 id="nima">Что означает сумма в Stars в окне сообщения</h2>
      <p>
        В 2025 году Telegram запустил <b>платные сообщения</b> (Star Messages). Суть простая: пользователь может
        назначить цену за <b>входящие</b> сообщения. Если кто-то хочет ему написать, за отправку списывается
        заданное количество Stars.
      </p>
      <p>
        То есть сумма на экране — это не плата Telegram за пользование мессенджером, а{" "}
        <b>цена сообщения именно этому человеку</b>. Функция задумана как защита от спама и потока сообщений от
        незнакомых людей.
      </p>
      <KeyFacts label="Ключевые факты">
        <li>
          Цена ставится на <b>входящие</b> сообщения, а не на ваши исходящие.
        </li>
        <li>
          В официальном анонсе функция описана для пользователей <b>вне списка контактов</b>.
        </li>
        <li>Оплаченные звёзды достаются получателю сообщения.</li>
        <li>
          Получатель может разрешить <b>бесплатно</b> писать отдельным людям или участникам определённых групп.
        </li>
      </KeyFacts>

      <h2 id="kim">Кто устанавливает плату</h2>
      <p>
        Цену выбирает <b>получатель</b> — не Telegram, не вы и не сторонний сервис. Поэтому одному человеку писать
        бесплатно, а другому платно, и суммы у всех разные.
      </p>
      <p>
        По той же причине ответ на вопрос «как это отключить?» однозначен: вы отключить не можете. Убрать цену или
        дать вам право писать бесплатно может только тот, кто её установил.
      </p>

      <h2 id="tekshirish">Как проверить итоговую сумму до отправки</h2>
      <p>
        Перед отправкой приложение показывает, сколько Stars спишется. Точное расположение и формулировка зависят
        от версии приложения, но обратите внимание на следующее:
      </p>
      <Steps>
        <Step title="1. Прочитайте сумму">
          Количество звёзд рядом с кнопкой отправки или в поле ввода — это цена одного сообщения.
        </Step>
        <Step title="2. Это разово или каждый раз?">
          Цена применяется <b>к каждому сообщению</b>. Если разбить мысль на пять коротких сообщений, списание
          может пройти пять раз — лучше написать одним.
        </Step>
        <Step title="3. Остановитесь перед подтверждением">
          Так ли нужно писать? Часто ответ бесплатно есть в открытом канале, на сайте или в поддержке.
        </Step>
      </Steps>

      <h2 id="balans">Что будет, если не хватает Stars</h2>
      <p>
        Если звёзд на балансе недостаточно, сообщение просто не отправится — деньги не спишутся и сообщение не
        уйдёт. Telegram в этом случае предложит пополнить баланс.
      </p>
      <p>
        Пополнение внутри приложения требует аккаунта App Store или Google Play, то есть зарубежной карты.
        Альтернатива для пользователей из Узбекистана —{" "}
        <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">покупка Stars в сумах</Link>.
      </p>

      <h2 id="bepul">Можно ли связаться без оплаты</h2>
      <p>
        Иногда да, но это <b>на усмотрение получателя</b>. В официальном анонсе сказано, что пользователь может
        разрешить бесплатно писать отдельным людям или участникам определённых групп.
      </p>
      <InfoGrid>
        <InfoCard emoji="👥" title="Общая группа">
          Если вы оба в группе, которой он дал разрешение, сообщение может быть бесплатным.
        </InfoCard>
        <InfoCard emoji="📣" title="Открытый канал">
          Часто ответ на вопрос уже есть в постах канала или в комментариях.
        </InfoCard>
        <InfoCard emoji="🔗" title="Указанный контакт">
          Другой способ связи, указанный в профиле или на сайте: почта, бот поддержки, форма.
        </InfoCard>
        <InfoCard emoji="🚫" title="Обходных путей нет">
          Если предлагают «способ» или «сервис» в обход платы — это признак мошенничества.
        </InfoCard>
      </InfoGrid>

      <h2 id="javob">Деньги списались, а ответа нет</h2>
      <p>
        Здесь важно понимать одно: <b>оплата идёт за доставку сообщения</b>, а не за гарантию ответа. Человек может
        не ответить, ответить позже или вовсе не прочитать — это не нарушает правила платных сообщений.
      </p>
      <p>
        В официальном анонсе сказано, что <b>получатель</b> может вернуть звёзды одним нажатием. То есть решение о
        возврате тоже за ним — Telegram его не обязывает, и сторонние сервисы эти деньги вернуть не могут.
      </p>
      <KeyFacts label="Поэтому">
        <li>Перед дорогим платным сообщением подумайте, насколько вам нужен ответ.</li>
        <li>Формулируйте вопрос одним чётким сообщением — повторы означают новую оплату.</li>
        <li>Если незнакомец говорит «сначала напишите платно, потом поговорим» — будьте осторожны.</li>
      </KeyFacts>

      <h2 id="qancha">Как понять, сколько нужно Stars</h2>
      <p>
        Указанное на экране количество — цена одного сообщения. Если планируете несколько, умножьте и сравните с
        балансом. Страница{" "}
        расчёта стоимости нужного количества Stars в сумах{" "}
        делает этот подсчёт быстро.
      </p>

      <InlineCta text="Пополните недостающие звёзды в сумах." product={{ kind: "stars", amount: 50 }} />

      <p>
        Если же вы, наоборот, хотите <b>сами</b> установить плату за входящие сообщения — это другая тема, она
        разобрана в статье{" "}
        <Link href="/blog/telegram-pulli-xabarlar-paid-messages">о платных сообщениях</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          {
            href: "https://telegram.org/blog/star-messages-gateway-2-0-and-more",
            label: "telegram.org/blog",
            note: "официальный анонс Star Messages",
          },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "документация Stars" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Telegramda yozish endi pullikmi?",
    answer:
      "Yo‘q. Faqat narx qo‘ygan foydalanuvchilarga, ya’ni ularning kiruvchi xabarlariga to‘lanadi. Qolgan yozishmalar bepul.",
  },
  {
    question: "Bu to‘lovni kim oladi?",
    answer: "Yulduzlar xabarni qabul qiluvchiga o‘tadi. Telegram bu summani o‘zi uchun olmaydi.",
  },
  {
    question: "Narxni men o‘chira olamanmi?",
    answer:
      "Yo‘q. Uni faqat qo‘ygan odam olib tashlashi yoki sizga bepul yozish ruxsatini berishi mumkin.",
  },
  {
    question: "Premium olsam, pulli xabarlar bepul bo‘ladimi?",
    answer:
      "Rasmiy e’londa bu haqda aytilmagan, shuning uchun buni kafolatlab bo‘lmaydi. Premium xaridini shu maqsadda qilmang.",
  },
  {
    question: "Har bir xabar uchun alohida to‘lanadimi?",
    answer: "Ha, narx har bir xabarga qo‘llanadi. Shuning uchun fikringizni bitta xabarda yozgan ma’qul.",
  },
  {
    question: "Balansim yetmasa nima bo‘ladi?",
    answer: "Xabar yuborilmaydi va pul yechilmaydi. Telegram balansni to‘ldirishni taklif qiladi.",
  },
  {
    question: "Javob kelmasa, pulim qaytadimi?",
    answer:
      "Rasmiy e’londa yulduzlarni qabul qiluvchi bir bosishda qaytarishi mumkinligi aytilgan — ya’ni bu uning ixtiyorida, avtomatik qaytarish emas.",
  },
  {
    question: "Kontaktlarimdagi odamlarga ham to‘lanadimi?",
    answer:
      "Rasmiy e’londa funksiya kontaktlar ro‘yxatidan tashqaridagi foydalanuvchilar uchun tasvirlangan; aniq holat qabul qiluvchining sozlamalariga bog‘liq.",
  },
];

const ruFaq = [
  {
    question: "Переписка в Telegram теперь платная?",
    answer:
      "Нет. Оплата идёт только тем пользователям, которые установили цену на свои входящие сообщения. Остальные переписки бесплатны.",
  },
  {
    question: "Кому достаются эти деньги?",
    answer: "Звёзды получает адресат сообщения. Telegram эту сумму себе не забирает.",
  },
  {
    question: "Могу ли я отключить плату?",
    answer: "Нет. Убрать её или разрешить вам писать бесплатно может только тот, кто её установил.",
  },
  {
    question: "Если оформить Premium, платные сообщения станут бесплатными?",
    answer:
      "В официальном анонсе об этом не сказано, поэтому гарантировать нельзя. Не покупайте Premium ради этого.",
  },
  {
    question: "Плата берётся за каждое сообщение?",
    answer: "Да, цена применяется к каждому сообщению. Поэтому лучше уместить мысль в одно.",
  },
  {
    question: "Что будет, если не хватает баланса?",
    answer: "Сообщение не отправится и деньги не спишутся. Telegram предложит пополнить баланс.",
  },
  {
    question: "Вернут ли деньги, если ответа не будет?",
    answer:
      "В анонсе сказано, что получатель может вернуть звёзды одним нажатием — то есть это на его усмотрение, а не автоматический возврат.",
  },
  {
    question: "С контактов тоже берётся плата?",
    answer:
      "В официальном анонсе функция описана для пользователей вне списка контактов; конкретный случай зависит от настроек получателя.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "problem",
  datePublished: "2026-09-08",
  dateModified: "2026-09-08",
  keywords: [
    "telegram xabar yuborish uchun stars so‘rayapti",
    "telegramda yozish pullikmi",
    "telegram pulli xabar nima",
    "telegram xabar uchun yulduz",
    "stars bo‘lmasa xabar yuborish",
    "telegram paid messages nima",
  ],
  locales: {
    uz: {
      title: "Telegramda xabar yuborish uchun nega Stars so‘rayapti?",
      excerpt:
        "Xabar oynasidagi yulduz summasi nimani anglatadi, uni kim belgilaydi, balans yetmasa nima bo‘ladi va to‘lovsiz bog‘lanish imkoniyati bormi.",
      metaTitle: "Telegramda xabar uchun nega Stars so‘rayapti?",
      metaDescription:
        "Telegramda xabar yuborishda Stars so‘ralsa: summani kim belgilaydi, har safar to‘lanadimi, balans yetmasa nima bo‘ladi va javob kelmasa pul qaytadimi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Yulduz kerakmi?",
      ctaBody: "@StarsPaymee_bot — so‘mda, Click, Payme, Uzum, UzCard yoki HUMO orqali.",
      faq: uzFaq,
    },
    ru: {
      title: "Почему Telegram просит Stars за отправку сообщения?",
      excerpt:
        "Что означает сумма звёзд в окне сообщения, кто её устанавливает, что будет при нехватке баланса и можно ли связаться без оплаты.",
      metaTitle: "Почему Telegram просит Stars за сообщение?",
      metaDescription:
        "Telegram просит Stars за сообщение: кто задаёт сумму, списывается ли она каждый раз, что при нехватке баланса и вернут ли деньги без ответа.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны звёзды?",
      ctaBody: "@StarsPaymee_bot — в сумах через Click, Payme, Uzum, UzCard или HUMO.",
      faq: ruFaq,
    },
  },
};
