import { Link } from "@/i18n/navigation";
import { Toc, Steps, Step, InlineCta, KeyFacts, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-affiliate-dasturi";

function UzAnswer() {
  return (
    <p>
      Telegram affiliate dasturi — bot va Mini App egalari o‘z mahsulotini <strong>reklama qiluvchilarga</strong>{" "}
      ochib, ular orqali kelgan har bir sotuvdan foiz (komissiya) to‘lash imkonini beruvchi rasmiy tizim. Komissiya
      foizini mahsulot egasi o‘zi belgilaydi, to‘lov esa avtomatik ravishda <strong>Stars</strong>da amalga oshadi.
      Bu — kreatorlar va marketchilar uchun qo‘shimcha daromad kanali.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "Affiliate dasturi nima" },
          { href: "#egasi", label: "Mahsulot egasi uchun" },
          { href: "#reklamachi", label: "Reklamachi (affiliate) uchun" },
          { href: "#komissiya", label: "Komissiya qanday to‘lanadi" },
          { href: "#kimga", label: "Kimlarga mos" },
        ]}
      />

      <h2 id="nima">Telegram affiliate dasturi nima?</h2>
      <p>
        Bu — Telegram’ning rasmiy referal/hamkorlik tizimi: bot yoki Mini App egasi o‘z mahsulotini ochiq
        affiliate dasturi sifatida e’lon qilishi mumkin. Boshqa foydalanuvchilar (reklamachilar) o‘z havolasi orqali
        yangi xaridor jalb qilsa, ular belgilangan foizda komissiya oladi — bu Stars orqali avtomatik hisoblanadi.
      </p>

      <h2 id="egasi">Mahsulot egasi sifatida qanday sozlash mumkin?</h2>
      <Steps>
        <Step title="Bot/Mini App’ni tayyorlang">
          Mahsulotingiz Telegram’ning to‘lov API’si orqali Stars qabul qilishi kerak.
        </Step>
        <Step title="Affiliate dasturini yoqing">
          Bot sozlamalarida affiliate dasturini faollashtiring va komissiya foizini belgilang.
        </Step>
        <Step title="Ochiq yoki yopiq qiling">
          Dasturni barcha uchun ochiq yoki faqat tanlangan hamkorlar uchun yopiq qilib sozlash mumkin.
        </Step>
        <Step title="Natijalarni kuzating">
          Har bir affiliate orqali kelgan sotuv va to‘langan komissiyani statistikada ko‘rib boring.
        </Step>
      </Steps>

      <InlineCta text="O‘z botingizni sinash uchun Stars kerakmi? So‘mda, botda 10 soniyada." />

      <h2 id="reklamachi">Reklamachi (affiliate) sifatida qanday ishtirok etish mumkin?</h2>
      <KeyFacts label="Ishtirok etish yo‘li">
        <li>
          <b>Ochiq dasturlarni toping:</b> affiliate dasturini yoqqan botlar ro‘yxatidan mos mahsulotni tanlang.
        </li>
        <li>
          <b>Referal havolangizni oling:</b> har bir affiliate’ga noyob havola beriladi.
        </li>
        <li>
          <b>Auditoriyangizga ulashing:</b> kanal, guruh yoki shaxsiy tarmoq orqali havolani tarqating.
        </li>
        <li>
          <b>Komissiyani kuzating:</b> sotuv amalga oshgach, komissiya avtomatik Stars balansingizga tushadi.
        </li>
      </KeyFacts>

      <h2 id="komissiya">Komissiya qanday hisoblanadi va to‘lanadi?</h2>
      <p>
        Komissiya foizini mahsulot egasi belgilaydi (masalan, har sotuvdan 10-30%). Xaridor to‘lov qilgach, tizim
        avtomatik ravishda tegishli qismni affiliate’ning Stars balansiga o‘tkazadi — qo‘lda hisob-kitob yoki
        alohida to‘lov so‘rovi kerak emas. Kreatorlar Stars’ni qanday pulga chiqarishi haqida{" "}
        <Link href="/blog/telegram-stars-daromad-qilish-mumkinmi">«Stars orqali daromad qilish mumkinmi»</Link>{" "}
        maqolasida batafsil.
      </p>

      <h2 id="kimga">Bu dastur kimlarga mos?</h2>
      <ul>
        <li>
          <strong>Bot/Mini App ishlab chiquvchilari:</strong> qo‘shimcha marketing kanali orqali sotuvni oshirish
          uchun.
        </li>
        <li>
          <strong>Kanal egalari va influenserlar:</strong> auditoriyasiga mos mahsulotni tavsiya qilib, komissiya
          ishlab topish uchun.
        </li>
        <li>
          <strong>Kreator iqtisodiyoti ishtirokchilari:</strong> Stars asosidagi daromad manbalarini
          diversifikatsiya qilish uchun.
        </li>
      </ul>
      <p>
        Umumiy Creator Economy strategiyasi haqida{" "}
        <Link href="/blog/telegram-creator-economy-stars">«Telegram Creator Economy»</Link> maqolasida o‘qing.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org/bots/payments-stars", note: "Stars to‘lov API hujjati" },
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "Stars rasmiy e’loni" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Партнёрская (affiliate) программа Telegram — официальная система, позволяющая владельцам ботов и Mini App
      открыть своё предложение для <strong>рекламодателей (партнёров)</strong> и платить процент (комиссию) с
      каждой продажи, пришедшей через них. Процент комиссии устанавливает владелец продукта, а выплата происходит
      автоматически в <strong>Stars</strong>. Это дополнительный источник дохода для авторов и маркетологов.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nima", label: "Что такое партнёрская программа" },
          { href: "#egasi", label: "Для владельца продукта" },
          { href: "#reklamachi", label: "Для партнёра (affiliate)" },
          { href: "#komissiya", label: "Как выплачивается комиссия" },
          { href: "#kimga", label: "Кому подходит" },
        ]}
      />

      <h2 id="nima">Что такое партнёрская программа Telegram?</h2>
      <p>
        Это официальная реферальная/партнёрская система Telegram: владелец бота или Mini App может объявить свой
        продукт открытой партнёрской программой. Другие пользователи (партнёры) приводят новых покупателей по своей
        ссылке и получают установленный процент комиссии — он автоматически рассчитывается в Stars.
      </p>

      <h2 id="egasi">Как настроить программу владельцу продукта?</h2>
      <Steps>
        <Step title="Подготовьте бота/Mini App">
          Ваш продукт должен принимать Stars через платёжный API Telegram.
        </Step>
        <Step title="Включите партнёрскую программу">
          В настройках бота активируйте партнёрскую программу и укажите процент комиссии.
        </Step>
        <Step title="Сделайте открытой или закрытой">
          Программу можно сделать доступной для всех или закрытой только для выбранных партнёров.
        </Step>
        <Step title="Отслеживайте результаты">
          Смотрите в статистике продажи через каждого партнёра и выплаченную комиссию.
        </Step>
      </Steps>

      <InlineCta text="Нужны Stars для теста своего бота? В сумах, в боте за 10 секунд." />

      <h2 id="reklamachi">Как участвовать в качестве партнёра (affiliate)?</h2>
      <KeyFacts label="Как участвовать">
        <li>
          <b>Найдите открытые программы:</b> выберите подходящий продукт из списка ботов с включённой партнёрской
          программой.
        </li>
        <li>
          <b>Получите реферальную ссылку:</b> каждому партнёру выдаётся уникальная ссылка.
        </li>
        <li>
          <b>Поделитесь с аудиторией:</b> распространите ссылку через канал, группу или личную сеть.
        </li>
        <li>
          <b>Отслеживайте комиссию:</b> после продажи комиссия автоматически поступает на ваш баланс Stars.
        </li>
      </KeyFacts>

      <h2 id="komissiya">Как рассчитывается и выплачивается комиссия?</h2>
      <p>
        Процент комиссии устанавливает владелец продукта (например, 10-30% с каждой продажи). После оплаты
        покупателем система автоматически переводит соответствующую часть на баланс Stars партнёра — ручной расчёт
        или отдельный запрос на выплату не требуется. Как авторы выводят Stars в деньги — подробно в статье{" "}
        <Link href="/blog/telegram-stars-daromad-qilish-mumkinmi">«Можно ли заработать на Stars»</Link>.
      </p>

      <h2 id="kimga">Кому подходит эта программа?</h2>
      <ul>
        <li>
          <strong>Разработчикам ботов/Mini App:</strong> для увеличения продаж через дополнительный маркетинговый
          канал.
        </li>
        <li>
          <strong>Владельцам каналов и инфлюенсерам:</strong> для заработка комиссии, рекомендуя подходящий продукт
          своей аудитории.
        </li>
        <li>
          <strong>Участникам creator-экономики:</strong> для диверсификации источников дохода на основе Stars.
        </li>
      </ul>
      <p>
        Об общей стратегии Creator Economy — в статье{" "}
        <Link href="/blog/telegram-creator-economy-stars">«Telegram Creator Economy»</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org/bots/payments-stars", note: "документация Stars API оплаты" },
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "официальный анонс Stars" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "info",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  keywords: [
    "telegram affiliate dasturi",
    "telegram referal daromad",
    "telegram mini app affiliate",
    "telegram partner program",
    "telegram stars komissiya",
  ],
  locales: {
    uz: {
      title: "Telegram affiliate dasturi: Mini App’lar orqali referal daromad (2026)",
      excerpt:
        "Telegram’ning rasmiy affiliate tizimi qanday ishlaydi, komissiya ulushlari qanday belgilanadi va kimlarga mos ekani.",
      metaTitle: "Telegram affiliate dasturi — referal daromad 2026",
      metaDescription:
        "Telegram affiliate dasturi qanday ishlaydi: mahsulot egasi va reklamachi uchun sozlash, komissiya to‘lash mexanizmi va kimlarga mos ekani.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "O‘z loyihangizni sinaysizmi?",
      ctaBody: "Stars’ni so‘mda, mahalliy karta bilan @StarsPaymee_bot orqali 10 soniyada oling.",
      faq: [
        {
          question: "Telegram affiliate dasturi qanday ishlaydi?",
          answer: "Mahsulot egasi komissiya foizini belgilaydi, reklamachi noyob havola orqali xaridor jalb qiladi va sotuvdan komissiya Stars’da avtomatik to‘lanadi.",
        },
        {
          question: "Affiliate bo‘lish uchun nima kerak?",
          answer: "Affiliate dasturini yoqqan bot yoki Mini App’ni topib, o‘z referal havolangizni olish kifoya.",
        },
        {
          question: "Komissiya qanday valyutada to‘lanadi?",
          answer: "Komissiya avtomatik ravishda Telegram Stars ko‘rinishida to‘lanadi.",
        },
        {
          question: "Komissiya foizini kim belgilaydi?",
          answer: "Mahsulot (bot/Mini App) egasi o‘zi komissiya foizini belgilaydi.",
        },
        {
          question: "Bu dastur ochiq bo‘lishi shartmi?",
          answer: "Yo‘q, mahsulot egasi dasturni barcha uchun ochiq yoki faqat tanlangan hamkorlar uchun yopiq qilib sozlashi mumkin.",
        },
      ],
    },
    ru: {
      title: "Партнёрская программа Telegram: реферальный доход через Mini App (2026)",
      excerpt:
        "Как работает официальная партнёрская система Telegram, как устанавливаются доли комиссии и кому она подходит.",
      metaTitle: "Партнёрская программа Telegram — реферальный доход 2026",
      metaDescription:
        "Как работает партнёрская программа Telegram: настройка для владельца продукта и партнёра, механизм выплаты комиссии и кому она подходит.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Хотите протестировать свой проект?",
      ctaBody: "Купите Stars в сумах локальной картой через @StarsPaymee_bot за 10 секунд.",
      faq: [
        {
          question: "Как работает партнёрская программа Telegram?",
          answer: "Владелец продукта устанавливает процент комиссии, партнёр приводит покупателя по уникальной ссылке, комиссия с продажи автоматически выплачивается в Stars.",
        },
        {
          question: "Что нужно, чтобы стать партнёром?",
          answer: "Достаточно найти бота или Mini App с включённой партнёрской программой и получить свою реферальную ссылку.",
        },
        {
          question: "В какой валюте выплачивается комиссия?",
          answer: "Комиссия автоматически выплачивается в виде Telegram Stars.",
        },
        {
          question: "Кто устанавливает процент комиссии?",
          answer: "Процент комиссии устанавливает сам владелец продукта (бота/Mini App).",
        },
        {
          question: "Обязательно ли программа должна быть открытой?",
          answer: "Нет, владелец продукта может сделать программу открытой для всех или закрытой только для выбранных партнёров.",
        },
      ],
    },
  },
};
