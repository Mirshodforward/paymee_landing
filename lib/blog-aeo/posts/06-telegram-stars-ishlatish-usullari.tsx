import { Link } from "@/i18n/navigation";
import { InfoGrid, InfoCard, InlineCta, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-stars-nima-uchun-ishlatiladi-usullar";

function UzAnswer() {
  return (
    <p>
      Telegram Stars Telegram ekotizimi ichida ko‘plab maqsadlarda ishlatiladi: sovg‘a yuborish, Premium hadya qilish,
      botlar va Mini App’larda to‘lov, pulli xabarlar (paid messages), Star Reactions, Premium emoji, pulli kontent,
      kanal boost va kreator monetizatsiyasi. Quyida 20 ta amaliy usulni jamladik.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="usullar">Telegram Stars bilan nima qilish mumkin — 20 usul</h2>
      <p>
        Stars (yulduzlar) — Telegram’ning rasmiy ichki valyutasi. Ular faqat Telegram ichida ishlaydi, lekin juda
        ko‘p funksiyani qoplaydi. Mana eng amaliy 20 ta ishlatish:
      </p>
      <InfoGrid>
        <InfoCard emoji="🎁" title="1. Sovg‘a yuborish">Do‘stga raqamli sovg‘a (Gift) jo‘natish.</InfoCard>
        <InfoCard emoji="⭐" title="2. Premium hadya">Boshqa odamga Telegram Premium obunani sovg‘a qilish.</InfoCard>
        <InfoCard emoji="🤖" title="3. Bot to‘lovlari">Botlarda raqamli mahsulot va xizmatlarni sotib olish.</InfoCard>
        <InfoCard emoji="📱" title="4. Mini App xaridlari">Mini App’lardagi ichki kontent va funksiyalar uchun to‘lov.</InfoCard>
        <InfoCard emoji="✉️" title="5. Paid messages">Kontaktda bo‘lmaganlardan keladigan xabarlar uchun narx belgilash.</InfoCard>
        <InfoCard emoji="😀" title="6. Premium emoji">Maxsus animatsiyali emoji’lardan foydalanish.</InfoCard>
        <InfoCard emoji="👍" title="7. Star Reactions">Postga yulduzli reaksiya — muallifga to‘g‘ridan-to‘g‘ri daromad.</InfoCard>
        <InfoCard emoji="📺" title="8. Pulli kontent (paid media)">Kanal post, video yoki fayllarni pulli qilish.</InfoCard>
        <InfoCard emoji="🔁" title="9. Pulli obuna">Kanal yoki kontentga Stars asosidagi obuna.</InfoCard>
        <InfoCard emoji="🚀" title="10. Kanalni boost qilish">Kanal darajasini oshirishga hissa qo‘shish.</InfoCard>
        <InfoCard emoji="🎮" title="11. O‘yin ichidagi xaridlar">Telegram o‘yinlari va ilovalaridagi ichki narsalar.</InfoCard>
        <InfoCard emoji="🎟️" title="12. Raqamli bilet/kupon">Tadbir yoki xizmatga kirish uchun raqamli to‘lov.</InfoCard>
        <InfoCard emoji="💼" title="13. Kreator monetizatsiyasi">Ishlab topilgan Stars’ni Fragment orqali pulga chiqarish.</InfoCard>
        <InfoCard emoji="📨" title="14. Murojaat filtri">Paid messages bilan keraksiz xabarlarni kamaytirish.</InfoCard>
        <InfoCard emoji="🏷️" title="15. Raqamli mahsulot sotish">Kurslar, e-kitoblar va shablonlarni Stars bilan sotish.</InfoCard>
        <InfoCard emoji="🎨" title="16. Maxsus stikerlar">Premium/maxsus stiker to‘plamlaridan foydalanish.</InfoCard>
        <InfoCard emoji="🤝" title="17. Tip / chaqirtmasiz qo‘llab-quvvatlash">Yoqqan muallifga ixtiyoriy «tip» berish.</InfoCard>
        <InfoCard emoji="🏆" title="18. Tanlov va mukofotlar">Konkurslarda yulduzli mukofot tarqatish.</InfoCard>
        <InfoCard emoji="🛍️" title="19. Mini App do‘konlari">Mini App ichidagi e-commerce to‘lovlari.</InfoCard>
        <InfoCard emoji="🎂" title="20. Bayram tabriklari">Tug‘ilgan kun va bayramlarda sovg‘a + izoh.</InfoCard>
      </InfoGrid>

      <InlineCta text="Yulduz kerakmi? Botda so‘mda 10 soniyada oling." />

      <h2 id="qoidalar">Bilish kerak bo‘lgan qoidalar</h2>
      <ul>
        <li>
          <strong>Akkauntga bog‘liq:</strong> Stars akkauntingizga biriktirilgan; akkaunt o‘chsa, balans yo‘qoladi.
        </li>
        <li>
          <strong>Faqat Telegram ichida:</strong> tashqi to‘lov tizimlariga o‘tkazib bo‘lmaydi (kreatorlar uchun
          Fragment istisno).
        </li>
        <li>
          <strong>Muddatsiz:</strong> Stars vaqt o‘tishi bilan kuyib ketmaydi.
        </li>
      </ul>
      <p>
        Stars nima ekani va qanday sotib olinishi haqida —{" "}
        <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">«Stars qayerdan sotib olish»</Link> hamda{" "}
        <Link href="/blog/telegram-stars-savol-javob-faq">«Stars bo‘yicha 50 savol»</Link> maqolalarini ko‘ring.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "Stars rasmiy e’loni" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "texnik hujjat" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Telegram Stars используются внутри экосистемы Telegram для множества целей: отправка подарков, дарение Premium,
      оплата в ботах и Mini App, платные сообщения (paid messages), Star Reactions, премиум-эмодзи, платный контент,
      буст канала и монетизация авторов. Ниже — 20 практических применений.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="usullar">Что можно делать с Telegram Stars — 20 способов</h2>
      <p>
        Stars (звёзды) — официальная внутренняя валюта Telegram. Они работают только внутри Telegram, но покрывают
        множество функций. Вот 20 практичных применений:
      </p>
      <InfoGrid>
        <InfoCard emoji="🎁" title="1. Отправка подарков">Отправить другу цифровой подарок (Gift).</InfoCard>
        <InfoCard emoji="⭐" title="2. Premium в подарок">Подарить кому-то подписку Telegram Premium.</InfoCard>
        <InfoCard emoji="🤖" title="3. Оплата в ботах">Покупка цифровых товаров и услуг в ботах.</InfoCard>
        <InfoCard emoji="📱" title="4. Покупки в Mini App">Оплата контента и функций внутри Mini App.</InfoCard>
        <InfoCard emoji="✉️" title="5. Paid messages">Плата за сообщения от тех, кого нет в контактах.</InfoCard>
        <InfoCard emoji="😀" title="6. Премиум-эмодзи">Использование эксклюзивных анимированных эмодзи.</InfoCard>
        <InfoCard emoji="👍" title="7. Star Reactions">Звёздная реакция на пост — прямой доход автору.</InfoCard>
        <InfoCard emoji="📺" title="8. Платный контент (paid media)">Сделать посты, видео или файлы платными.</InfoCard>
        <InfoCard emoji="🔁" title="9. Платная подписка">Подписка на канал/контент на основе Stars.</InfoCard>
        <InfoCard emoji="🚀" title="10. Буст канала">Вклад в повышение уровня канала.</InfoCard>
        <InfoCard emoji="🎮" title="11. Внутриигровые покупки">Предметы в играх и приложениях Telegram.</InfoCard>
        <InfoCard emoji="🎟️" title="12. Цифровой билет/купон">Оплата доступа к мероприятию или услуге.</InfoCard>
        <InfoCard emoji="💼" title="13. Монетизация авторов">Вывод заработанных Stars через Fragment.</InfoCard>
        <InfoCard emoji="📨" title="14. Фильтр обращений">Снизить спам с помощью paid messages.</InfoCard>
        <InfoCard emoji="🏷️" title="15. Продажа цифровых товаров">Курсы, e-книги и шаблоны за Stars.</InfoCard>
        <InfoCard emoji="🎨" title="16. Особые стикеры">Премиум/особые наборы стикеров.</InfoCard>
        <InfoCard emoji="🤝" title="17. Чаевые (tip)">Добровольная поддержка понравившегося автора.</InfoCard>
        <InfoCard emoji="🏆" title="18. Конкурсы и награды">Раздача звёздных призов в конкурсах.</InfoCard>
        <InfoCard emoji="🛍️" title="19. Магазины в Mini App">E-commerce оплата внутри Mini App.</InfoCard>
        <InfoCard emoji="🎂" title="20. Праздничные поздравления">Подарок с комментарием на дни рождения и праздники.</InfoCard>
      </InfoGrid>

      <InlineCta text="Нужны звёзды? В боте — в сумах за 10 секунд." />

      <h2 id="qoidalar">Правила, которые надо знать</h2>
      <ul>
        <li>
          <strong>Привязка к аккаунту:</strong> Stars закреплены за аккаунтом; при удалении баланс пропадает.
        </li>
        <li>
          <strong>Только внутри Telegram:</strong> нельзя вывести во внешние платёжные системы (исключение — Fragment
          для создателей).
        </li>
        <li>
          <strong>Без срока:</strong> Stars не сгорают со временем.
        </li>
      </ul>
      <p>
        Что такое Stars и как их купить — в статьях{" "}
        <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">«Где купить Stars»</Link> и{" "}
        <Link href="/blog/telegram-stars-savol-javob-faq">«50 вопросов про Stars»</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "официальный анонс Stars" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "техническая документация" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "info",
  datePublished: "2026-06-18",
  dateModified: "2026-06-18",
  keywords: [
    "telegram stars bilan nima qilish",
    "telegram stars nima uchun kerak",
    "telegram stars ishlatish",
    "telegram stars use cases",
    "telegram stars funksiyalari",
  ],
  locales: {
    uz: {
      title: "Telegram Stars’ni ishlatishning 20 ta usuli (2026)",
      excerpt:
        "Telegram Stars bilan nima qilish mumkin? Sovg‘a, Premium hadya, bot to‘lovlari, paid messages, Star Reactions, monetizatsiya — 20 ta amaliy usul va qoidalar.",
      metaTitle: "Telegram Stars’ni ishlatishning 20 ta usuli — 2026",
      metaDescription:
        "Telegram Stars bilan nima qilish mumkin: sovg‘a, Premium hadya, bot/Mini App to‘lovlari, paid messages, Star Reactions va kreator monetizatsiyasi — 20 usul.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Yulduzlarni ishga soling",
      ctaBody: "Kerakli miqdorni botda so‘mda oling — sovg‘a, Premium yoki to‘lovlar uchun 10 soniyada tayyor.",
      faq: [
        {
          question: "Telegram Stars bilan eng ko‘p nima qilinadi?",
          answer:
            "Eng ko‘p — sovg‘a yuborish, Premium hadya qilish, bot/Mini App to‘lovlari va Star Reactions. Kreatorlar uchun esa monetizatsiya muhim.",
        },
        {
          question: "Stars’ni boshqa odamga o‘tkazsa bo‘ladimi?",
          answer:
            "To‘g‘ridan-to‘g‘ri pul ko‘rinishida emas, lekin sovg‘a yoki Star Reaction orqali boshqa foydalanuvchiga yuborish mumkin.",
        },
        {
          question: "Stars’ni pulga aylantirsa bo‘ladimi?",
          answer:
            "Oddiy foydalanuvchi sotib olgan Stars’ni qaytarib pulga aylantira olmaydi. Faqat kreatorlar ishlab topgan Stars’ni Fragment orqali chiqaradi.",
        },
        {
          question: "Stars kuyib ketadimi?",
          answer: "Yo‘q, Stars muddatsiz. Akkaunt faol turguncha balansda saqlanadi.",
        },
        {
          question: "Paid messages nima?",
          answer:
            "Bu — kontaktda bo‘lmagan foydalanuvchilardan keladigan xabarlar uchun Stars’da narx belgilash imkoni; keraksiz xabarlarni kamaytiradi.",
        },
      ],
    },
    ru: {
      title: "20 способов использовать Telegram Stars (2026)",
      excerpt:
        "Что можно делать с Telegram Stars? Подарки, дарение Premium, оплата в ботах, paid messages, Star Reactions, монетизация — 20 практичных способов и правила.",
      metaTitle: "20 способов использовать Telegram Stars — 2026",
      metaDescription:
        "Что можно делать с Telegram Stars: подарки, дарение Premium, оплата в ботах/Mini App, paid messages, Star Reactions и монетизация авторов — 20 способов.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Запустите звёзды в дело",
      ctaBody: "Возьмите нужное количество в боте в сумах — для подарков, Premium или оплат готово за 10 секунд.",
      faq: [
        {
          question: "Для чего чаще всего используют Telegram Stars?",
          answer:
            "Чаще всего — отправка подарков, дарение Premium, оплата в ботах/Mini App и Star Reactions. Для авторов важна монетизация.",
        },
        {
          question: "Можно ли передать Stars другому человеку?",
          answer:
            "Напрямую в виде денег — нет, но можно отправить через подарок или Star Reaction другому пользователю.",
        },
        {
          question: "Можно ли обналичить Stars?",
          answer:
            "Обычный пользователь не может обналичить купленные Stars. Только авторы выводят заработанные Stars через Fragment.",
        },
        {
          question: "Сгорают ли Stars?",
          answer: "Нет, Stars бессрочные. Пока аккаунт активен, баланс сохраняется.",
        },
        {
          question: "Что такое paid messages?",
          answer:
            "Это возможность задавать цену в Stars за сообщения от пользователей не из контактов; снижает количество спама.",
        },
      ],
    },
  },
};
