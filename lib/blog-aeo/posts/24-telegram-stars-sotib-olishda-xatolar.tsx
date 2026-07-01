import { Link } from "@/i18n/navigation";
import { Toc, InfoGrid, InfoCard, InlineCta, KeyFacts, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-stars-sotib-olishda-xatolar";

function UzAnswer() {
  return (
    <p>
      Telegram Stars sotib olishda eng ko‘p uchraydigan xatolar — noto‘g‘ri @username kiritish, boshqa akkauntga
      yuborish, parol yoki SMS-kod so‘ragan firibgarga ishonish, juda past narxli soxta «aksiya»larga uchish va
      to‘lovdan keyin statusni yangilamaslik. Ularning aksariyati oldini olsa bo‘ladi: <strong>@username’ni tekshiring,
      parol so‘ralmasligini yodda tuting va faqat oferta hamda support’i bor xizmatdan oling.</strong>
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#username", label: "Username va qabul qiluvchi xatolari" },
          { href: "#firibgar", label: "Firibgarlik bilan bog‘liq xatolar" },
          { href: "#tolov", label: "To‘lov va texnik xatolar" },
          { href: "#oldini", label: "Xatolarni oldini olish" },
        ]}
      />

      <h2 id="username">1-guruh: Username va qabul qiluvchi xatolari</h2>
      <InfoGrid>
        <InfoCard emoji="✍️" title="1. @username’da xato">
          Bitta harf yoki raqam noto‘g‘ri — yulduzlar boshqa odamga ketadi. Har doim nusxa-joylashtiring.
        </InfoCard>
        <InfoCard emoji="🔁" title="2. Eski username">
          Do‘stingiz username’ini o‘zgartirgan bo‘lishi mumkin — yuborishdan oldin tasdiqlang.
        </InfoCard>
        <InfoCard emoji="👥" title="3. O‘xshash nomlar">
          Firibgarlar mashhur nomga o‘xshash username ochadi. Rasmiy profilni tekshiring.
        </InfoCard>
        <InfoCard emoji="🙈" title="4. O‘ziga emas, xatoga">
          Sovg‘a qilaman deb o‘z username’ini kiritib qo‘yish yoki aksincha.
        </InfoCard>
      </InfoGrid>

      <h2 id="firibgar">2-guruh: Firibgarlik bilan bog‘liq xatolar</h2>
      <InfoGrid>
        <InfoCard emoji="🔑" title="5. Parol/kod berish">
          Stars uchun parol, SMS-kod yoki 2FA <strong>hech qachon</strong> so‘ralmaydi. So‘rasa — firibgar.
        </InfoCard>
        <InfoCard emoji="🎣" title="6. Soxta «arzon» aksiya">
          Bozordan keskin past narx — ko‘pincha aldov. Real narxni bilib oling.
        </InfoCard>
        <InfoCard emoji="💬" title="7. Shaxsiy yozgan «sotuvchi»">
          O‘zini bot deb tanishtirgan, lekin shaxsiy hisobdan yozadigan «sotuvchi»ga ishonmang.
        </InfoCard>
        <InfoCard emoji="🏷️" title="8. Ofertasiz xizmat">
          Oferta, support kanali va manzili yo‘q joydan olmang.
        </InfoCard>
        <InfoCard emoji="⏫" title="9. Oldindan to‘liq to‘lov talab">
          Noma’lum shaxsga oldindan katta pul o‘tkazish — xavfli.
        </InfoCard>
      </InfoGrid>

      <InlineCta text="Xavfsiz yo‘l: oferta, support va buyurtma ID’si bor rasmiy bot." />

      <h2 id="tolov">3-guruh: To‘lov va texnik xatolar</h2>
      <InfoGrid>
        <InfoCard emoji="🔄" title="10. Statusni yangilamaslik">
          To‘lovdan keyin bir zum kutib, ilovani yangilang — yulduz ko‘pincha bir necha soniyada tushadi.
        </InfoCard>
        <InfoCard emoji="🧾" title="11. Buyurtma ID’ni saqlamaslik">
          Muammo bo‘lsa support ID’ni so‘raydi. Chekni/ID’ni saqlang.
        </InfoCard>
        <InfoCard emoji="💳" title="12. Karta limiti/blok">
          Kartada limit yoki onlayn to‘lov bloki bo‘lishi mumkin — bankdan tekshiring.
        </InfoCard>
        <InfoCard emoji="📵" title="13. Sekin internetda ikki marta">
          To‘lov tasdig‘ini kutmasdan qayta bosish — ikkilanma to‘lovga olib kelishi mumkin.
        </InfoCard>
        <InfoCard emoji="🌍" title="14. Noto‘g‘ri platforma tanlash">
          O‘zbekiston kartasi bilan App Store/Fragment’dan olishga urinish — ishlamaydi.
        </InfoCard>
      </InfoGrid>

      <KeyFacts label="Eng muhim 3 qoida">
        <li>
          <b>Parol yo‘q:</b> Stars uchun faqat @username kifoya.
        </li>
        <li>
          <b>Tekshirib yuboring:</b> username’ni nusxalab, bir marta qayta ko‘ring.
        </li>
        <li>
          <b>ID saqlang:</b> muammoda support ID orqali tez yordam beradi.
        </li>
      </KeyFacts>

      <h2 id="oldini">Xatolarni qanday oldini olish?</h2>
      <p>
        Aksariyat muammolar diqqat bilan hal bo‘ladi: @username’ni ikki marta tekshiring, narx haqiqiyligini{" "}
        <Link href="/blog/telegram-stars-narxlari-2026-platformalar-taqqoslash">narx maqolasidan</Link> bilib oling va
        xavfsizlik belgilariga e’tibor bering —{" "}
        <Link href="/blog/telegram-stars-xavfsiz-sotib-olish-qollanma">«Xavfsiz sotib olish qo‘llanmasi»</Link>. Agar
        to‘lov o‘tib, yulduz kelmasa —{" "}
        <Link href="/blog/telegram-stars-kelmadi-nima-qilish">«Stars kelmadi, nima qilish»</Link> maqolasidagi
        bosqichlarni bajaring.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "Stars rasmiy e’loni" },
          { href: "https://telegram.org/faq", label: "telegram.org/faq", note: "Telegram xavfsizlik FAQ" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "texnik hujjat" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Самые частые ошибки при покупке Telegram Stars — неверный @username, отправка на чужой аккаунт, доверие
      мошеннику, который просит пароль или SMS-код, слишком дешёвые фейковые «акции» и отсутствие обновления статуса
      после оплаты. Большинство из них предотвратимы: <strong>проверяйте @username, помните, что пароль не спрашивают,
      и покупайте только там, где есть оферта и поддержка.</strong>
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#username", label: "Ошибки с username и получателем" },
          { href: "#firibgar", label: "Ошибки, связанные с мошенничеством" },
          { href: "#tolov", label: "Ошибки оплаты и технические" },
          { href: "#oldini", label: "Как избежать ошибок" },
        ]}
      />

      <h2 id="username">Группа 1: ошибки с username и получателем</h2>
      <InfoGrid>
        <InfoCard emoji="✍️" title="1. Опечатка в @username">
          Одна неверная буква — и звёзды уйдут другому человеку. Всегда копируйте username.
        </InfoCard>
        <InfoCard emoji="🔁" title="2. Старый username">
          Друг мог сменить username — подтвердите перед отправкой.
        </InfoCard>
        <InfoCard emoji="👥" title="3. Похожие имена">
          Мошенники создают похожие на известные username. Проверяйте официальный профиль.
        </InfoCard>
        <InfoCard emoji="🙈" title="4. Себе вместо получателя">
          Хотели подарить, но вписали свой username, или наоборот.
        </InfoCard>
      </InfoGrid>

      <h2 id="firibgar">Группа 2: ошибки, связанные с мошенничеством</h2>
      <InfoGrid>
        <InfoCard emoji="🔑" title="5. Дать пароль/код">
          Для Stars <strong>никогда</strong> не спрашивают пароль, SMS-код или 2FA. Спрашивают — мошенник.
        </InfoCard>
        <InfoCard emoji="🎣" title="6. Фейковая «дешёвая» акция">
          Цена сильно ниже рынка — часто обман. Узнайте реальную цену.
        </InfoCard>
        <InfoCard emoji="💬" title="7. «Продавец» в личке">
          Не доверяйте «продавцу», который представился ботом, но пишет с личного аккаунта.
        </InfoCard>
        <InfoCard emoji="🏷️" title="8. Сервис без оферты">
          Не покупайте там, где нет оферты, канала поддержки и адреса.
        </InfoCard>
        <InfoCard emoji="⏫" title="9. Полная предоплата">
          Переводить крупную сумму незнакомцу заранее — рискованно.
        </InfoCard>
      </InfoGrid>

      <InlineCta text="Безопасный путь: официальный бот с офертой, поддержкой и ID заказа." />

      <h2 id="tolov">Группа 3: ошибки оплаты и технические</h2>
      <InfoGrid>
        <InfoCard emoji="🔄" title="10. Не обновить статус">
          После оплаты подождите пару секунд и обновите приложение — звёзды часто приходят за секунды.
        </InfoCard>
        <InfoCard emoji="🧾" title="11. Не сохранить ID заказа">
          При проблеме поддержка спросит ID. Сохраняйте чек/ID.
        </InfoCard>
        <InfoCard emoji="💳" title="12. Лимит/блок карты">
          На карте может быть лимит или блок онлайн-оплаты — уточните в банке.
        </InfoCard>
        <InfoCard emoji="📵" title="13. Двойное нажатие на медленном интернете">
          Повторное нажатие без подтверждения может привести к двойной оплате.
        </InfoCard>
        <InfoCard emoji="🌍" title="14. Неверная платформа">
          Попытка купить картой Узбекистана в App Store/Fragment — не сработает.
        </InfoCard>
      </InfoGrid>

      <KeyFacts label="Три главных правила">
        <li>
          <b>Без пароля:</b> для Stars достаточно только @username.
        </li>
        <li>
          <b>Проверяйте:</b> скопируйте username и перепроверьте один раз.
        </li>
        <li>
          <b>Храните ID:</b> при проблеме поддержка быстро поможет по ID.
        </li>
      </KeyFacts>

      <h2 id="oldini">Как избежать ошибок?</h2>
      <p>
        Большинство проблем решается внимательностью: дважды проверьте @username, узнайте реальную цену из{" "}
        <Link href="/blog/telegram-stars-narxlari-2026-platformalar-taqqoslash">статьи о ценах</Link> и следите за
        признаками безопасности —{" "}
        <Link href="/blog/telegram-stars-xavfsiz-sotib-olish-qollanma">«Руководство по безопасной покупке»</Link>. Если
        оплата прошла, а звёзды не пришли — выполните шаги из{" "}
        <Link href="/blog/telegram-stars-kelmadi-nima-qilish">«Stars не пришли, что делать»</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "официальный анонс Stars" },
          { href: "https://telegram.org/faq", label: "telegram.org/faq", note: "FAQ по безопасности Telegram" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "техническая документация" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "problem",
  datePublished: "2026-06-30",
  dateModified: "2026-06-30",
  keywords: [
    "telegram stars xato",
    "telegram stars sotib olish xatolari",
    "telegram stars problems",
    "telegram stars firibgarlik",
    "telegram stars mistake",
    "telegram stars kelmadi",
  ],
  locales: {
    uz: {
      title: "Telegram Stars sotib olayotganda eng ko‘p uchraydigan xatolar (2026)",
      excerpt:
        "Telegram Stars sotib olishda yo‘l qo‘yiladigan xatolar: noto‘g‘ri username, firibgarlik, parol berish, soxta aksiya va to‘lov muammolari — hamda ularni oldini olish.",
      metaTitle: "Telegram Stars sotib olishda xatolar va yechimlari 2026",
      metaDescription:
        "Telegram Stars sotib olayotganda eng ko‘p uchraydigan xatolar: username, firibgarlik, parol, soxta aksiya, to‘lov nosozliklari va ularni oldini olish bo‘yicha maslahatlar.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Xatosiz va xavfsiz olasizmi?",
      ctaBody: "Oferta, support va buyurtma ID’si bor @StarsPaymee_bot orqali so‘mda 10 soniyada.",
      faq: [
        {
          question: "Stars sotib olishda eng katta xato qaysi?",
          answer:
            "Eng xavflisi — parol yoki SMS-kod so‘ragan firibgarga ishonish. Stars uchun bu hech qachon kerak emas; faqat @username yetarli.",
        },
        {
          question: "Noto‘g‘ri username’ga yulduz ketsa, qaytariladimi?",
          answer:
            "Telegram to‘g‘ridan-to‘g‘ri @username’ga yetkazgani uchun qaytarish qiyin. Shu bois yuborishdan oldin username’ni tekshirish juda muhim.",
        },
        {
          question: "Juda arzon narx nega xavfli?",
          answer:
            "Bozordan keskin past narx ko‘pincha soxta «aksiya» — pulni olib, yulduz bermaslik uchun ishlatiladi. Real narxni bilib olib solishtiring.",
        },
        {
          question: "To‘lov o‘tdi, lekin yulduz kelmadi — xatomi?",
          answer:
            "Har doim ham xato emas — ba’zan statusni yangilash kifoya. Kelmasa, buyurtma ID bilan support’ga yozing; texnik sabab bo‘lsa to‘lov qaytariladi.",
        },
        {
          question: "Ikki marta to‘lab yuborsam nima bo‘ladi?",
          answer:
            "Sekin internetda tugmani qayta bosmang. Ikkilanma to‘lov bo‘lsa, buyurtma ID bilan support’ga murojaat qiling — ortiqcha summa hal qilinadi.",
        },
      ],
    },
    ru: {
      title: "Самые частые ошибки при покупке Telegram Stars (2026)",
      excerpt:
        "Ошибки при покупке Telegram Stars: неверный username, мошенничество, передача пароля, фейковые акции и проблемы оплаты — и как их избежать.",
      metaTitle: "Ошибки при покупке Telegram Stars и их решения 2026",
      metaDescription:
        "Самые частые ошибки при покупке Telegram Stars: username, мошенничество, пароль, фейковые акции, сбои оплаты и советы, как их избежать.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Купить без ошибок и безопасно?",
      ctaBody: "Через @StarsPaymee_bot с офертой, поддержкой и ID заказа — в сумах за 10 секунд.",
      faq: [
        {
          question: "Какая самая серьёзная ошибка при покупке Stars?",
          answer:
            "Опаснее всего — довериться мошеннику, который просит пароль или SMS-код. Для Stars это никогда не нужно; достаточно только @username.",
        },
        {
          question: "Если звёзды ушли на неверный username, их вернут?",
          answer:
            "Telegram доставляет напрямую на @username, поэтому вернуть сложно. Поэтому так важно проверить username перед отправкой.",
        },
        {
          question: "Почему слишком низкая цена опасна?",
          answer:
            "Цена сильно ниже рынка часто фейковая «акция» — чтобы забрать деньги и не выдать звёзды. Сравните с реальной ценой.",
        },
        {
          question: "Оплата прошла, а звёзды не пришли — это ошибка?",
          answer:
            "Не всегда — иногда достаточно обновить статус. Если нет, напишите в поддержку с ID заказа; при технической причине оплата возвращается.",
        },
        {
          question: "Что будет, если оплатить дважды?",
          answer:
            "Не нажимайте кнопку повторно на медленном интернете. При двойной оплате обратитесь в поддержку с ID заказа — лишнюю сумму решат.",
        },
      ],
    },
  },
};
