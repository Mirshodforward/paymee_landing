import { Link } from "@/i18n/navigation";
import { Steps, Step, InlineCta, KeyFacts, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-stars-kelmadi-nima-qilish";

function UzAnswer() {
  return (
    <p>
      Stars yoki Premium kelmasa: avval Telegram’ni yangilang va statusni tekshiring, @username to‘g‘riligiga ishonch
      hosil qiling, to‘lov bankda tasdiqlanganini ko‘ring. Aksariyat hollarda yetkazib berish bir necha soniya–daqiqa
      ichida tugaydi. Agar baribir kelmasa, <strong>buyurtma ID</strong> bilan <strong>@StarsPaymeeSupport</strong>’ga
      yozing — texnik nosozlikda to‘lov to‘liq qaytariladi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="sabablar">Nega Stars kechikishi yoki kelmasligi mumkin?</h2>
      <KeyFacts label="Eng keng tarqalgan sabablar">
        <li>
          <b>Status hali yangilanmagan</b> — ilova keshini yangilash kerak
        </li>
        <li>
          <b>Noto‘g‘ri @username</b> — yulduzlar boshqa akkauntga ketishi mumkin
        </li>
        <li>
          <b>To‘lov bankda «kutilmoqda»</b> — OTP yoki tasdiq yakunlanmagan
        </li>
        <li>
          <b>Telegram tarmog‘idagi vaqtinchalik kechikish</b>
        </li>
      </KeyFacts>

      <h2 id="qadamlar">Bosqichma-bosqich yechim</h2>
      <Steps>
        <Step title="Telegram’ni yangilang">Ilovani yoping va qayta oching; eng so‘nggi versiyada ekanini tekshiring.</Step>
        <Step title="Statusni tekshiring">Bot yoki Mini App’dagi buyurtma statusiga qarang — «yetkazildi» yoki «kutilmoqda».</Step>
        <Step title="@username’ni qayta tekshiring">Buyurtmada to‘g‘ri username kiritilganini tasdiqlang.</Step>
        <Step title="To‘lovni tekshiring">Bank ilovasida to‘lov o‘tganini (yechilganini) ko‘ring.</Step>
        <Step title="Bir necha daqiqa kuting">Tarmoq yukida yetkazish biroz cho‘zilishi mumkin.</Step>
        <Step title="Support’ga yozing">
          Hali kelmasa,{" "}
          <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>’ga
          buyurtma ID va to‘lov chekini yuboring.
        </Step>
      </Steps>

      <InlineCta text="Muammo bo‘lsa, support buyurtma ID bo‘yicha tez yordam beradi." />

      <h2 id="premium">Premium faollashmasa-chi?</h2>
      <p>
        Premium uchun ham xuddi shu mantiq: statusni yangilang, @username to‘g‘riligini tekshiring va bir oz kuting.
        Premium odatda 10 soniyada yoqiladi; kechiksa, support buyurtma ID bilan tekshiradi. SMS-kod muammosi bo‘lsa,{" "}
        <Link href="/blog/telegram-premium-eng-oson-usul">username orqali oqim</Link> kerak emasligini eslang — u
        SMS/parol talab qilmaydi.
      </p>

      <h2 id="refund">To‘lov qaytarish (refund)</h2>
      <p>
        Diqqat: Telegram qoidalariga ko‘ra Stars va ular orqali sotib olingan mahsulotlar Telegram tomonidan
        qaytarilmaydi (final sale). Lekin vositachi xizmat — masalan StarsPaymee — texnik sabab bilan yetkazib
        berolmasa, o‘z navbatida to‘lovni to‘liq qaytaradi. Ishonchlilik belgilarini{" "}
        <Link href="/blog/starspaymee-ishonchli-xavfsizmi">«StarsPaymee ishonchlimi?»</Link> maqolasida ko‘ring.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/tos/stars", label: "telegram.org/tos/stars", note: "Stars shartlari (final sale)" },
          { href: "https://t.me/StarsPaymeeSupport", label: "@StarsPaymeeSupport", note: "qo‘llab-quvvatlash" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Если Stars или Premium не пришли: сначала обновите Telegram и проверьте статус, убедитесь в верности @username,
      посмотрите, подтверждена ли оплата банком. В большинстве случаев доставка завершается за секунды–минуты. Если
      всё равно нет — напишите <strong>@StarsPaymeeSupport</strong> с <strong>ID заказа</strong>; при технической
      ошибке оплата возвращается полностью.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="sabablar">Почему Stars могут задержаться или не прийти?</h2>
      <KeyFacts label="Самые частые причины">
        <li>
          <b>Статус ещё не обновился</b> — нужно обновить кэш приложения
        </li>
        <li>
          <b>Неверный @username</b> — звёзды могли уйти на другой аккаунт
        </li>
        <li>
          <b>Оплата «в ожидании» у банка</b> — OTP или подтверждение не завершены
        </li>
        <li>
          <b>Временная задержка в сети Telegram</b>
        </li>
      </KeyFacts>

      <h2 id="qadamlar">Пошаговое решение</h2>
      <Steps>
        <Step title="Обновите Telegram">Закройте и снова откройте приложение; проверьте, что у вас последняя версия.</Step>
        <Step title="Проверьте статус">Посмотрите статус заказа в боте/Mini App — «доставлено» или «в ожидании».</Step>
        <Step title="Перепроверьте @username">Подтвердите, что в заказе указан верный username.</Step>
        <Step title="Проверьте оплату">В банковском приложении убедитесь, что платёж прошёл (списан).</Step>
        <Step title="Подождите пару минут">При нагрузке сети доставка может немного задержаться.</Step>
        <Step title="Напишите в поддержку">
          Если всё ещё нет — отправьте{" "}
          <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> ID
          заказа и чек оплаты.
        </Step>
      </Steps>

      <InlineCta text="Если возникла проблема — поддержка быстро поможет по ID заказа." />

      <h2 id="premium">А если Premium не активировался?</h2>
      <p>
        Для Premium та же логика: обновите статус, проверьте верность @username и немного подождите. Premium обычно
        включается за 10 секунд; при задержке поддержка проверит по ID заказа. Если проблема с SMS-кодом, помните, что{" "}
        <Link href="/blog/telegram-premium-eng-oson-usul">поток по username</Link> его не требует — ни SMS, ни пароля.
      </p>

      <h2 id="refund">Возврат оплаты (refund)</h2>
      <p>
        Важно: по правилам Telegram сами Stars и купленные через них товары не возвращаются Telegram (final sale). Но
        сервис-посредник, например StarsPaymee, при невозможности доставки по техпричине возвращает оплату полностью.
        Признаки надёжности — в статье{" "}
        <Link href="/blog/starspaymee-ishonchli-xavfsizmi">«Надёжен ли StarsPaymee?»</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/tos/stars", label: "telegram.org/tos/stars", note: "условия Stars (final sale)" },
          { href: "https://t.me/StarsPaymeeSupport", label: "@StarsPaymeeSupport", note: "поддержка" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "problem",
  datePublished: "2026-06-12",
  dateModified: "2026-06-12",
  keywords: [
    "telegram stars kelmadi",
    "stars kelmadi nima qilish",
    "telegram stars not received",
    "telegram stars ishlamayapti",
    "telegram premium faollashmadi",
    "telegram stars delay",
  ],
  locales: {
    uz: {
      title: "Telegram Stars kelmadi — nima qilish kerak? (yechim)",
      excerpt:
        "Stars yoki Premium kelmadimi? Sabablari, bosqichma-bosqich yechim, statusni tekshirish, support va refund qoidalari — barchasi bitta yo‘riqnomada.",
      metaTitle: "Telegram Stars kelmadi — nima qilish kerak?",
      metaDescription:
        "Telegram Stars yoki Premium kelmasa nima qilish: sabablari, statusni tekshirish, @username, to‘lov, support va refund. Bosqichma-bosqich yechim.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Yordam kerakmi?",
      ctaBody: "Buyurtma ID bilan @StarsPaymeeSupport’ga yozing yoki botda yangi buyurtma bering — yetkazib berish 10 soniyada.",
      faq: [
        {
          question: "To‘lov o‘tdi, lekin Stars kelmadi. Nega?",
          answer:
            "Ko‘pincha status hali yangilanmagan yoki to‘lov bankda «kutilmoqda» holatida. Telegram’ni yangilang, statusni tekshiring, bir oz kuting; kelmasa support’ga ID bilan yozing.",
        },
        {
          question: "Qancha kutish kerak?",
          answer:
            "Odatda bir necha soniya–daqiqa. Tarmoq yuki sabab cho‘zilishi mumkin. 10–15 daqiqadan keyin ham kelmasa, support’ga murojaat qiling.",
        },
        {
          question: "Noto‘g‘ri username kiritsam-chi?",
          answer:
            "Yulduzlar kiritilgan username’ga ketadi. Xato bo‘lsa darhol support’ga yozing — vaziyatga qarab yordam beriladi.",
        },
        {
          question: "To‘lov qaytariladimi?",
          answer:
            "Telegram Stars’ni qaytarmaydi (final sale), lekin StarsPaymee texnik sabab bilan yetkaza olmasa, to‘lovni to‘liq qaytaradi.",
        },
        {
          question: "Premium faollashmasa nima qilaman?",
          answer:
            "Statusni yangilang, @username’ni tekshiring va kuting. Username flow SMS/parol talab qilmaydi; kechiksa support ID bo‘yicha tekshiradi.",
        },
      ],
    },
    ru: {
      title: "Telegram Stars не пришли — что делать? (решение)",
      excerpt:
        "Не пришли Stars или Premium? Причины, пошаговое решение, проверка статуса, поддержка и правила возврата — всё в одной инструкции.",
      metaTitle: "Telegram Stars не пришли — что делать?",
      metaDescription:
        "Что делать, если Telegram Stars или Premium не пришли: причины, проверка статуса, @username, оплата, поддержка и возврат. Пошаговое решение.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужна помощь?",
      ctaBody: "Напишите @StarsPaymeeSupport с ID заказа или оформите новый заказ в боте — доставка за 10 секунд.",
      faq: [
        {
          question: "Оплата прошла, но Stars не пришли. Почему?",
          answer:
            "Чаще всего статус ещё не обновился или платёж у банка «в ожидании». Обновите Telegram, проверьте статус, подождите; если нет — напишите в поддержку с ID.",
        },
        {
          question: "Сколько ждать?",
          answer:
            "Обычно секунды–минуты. При нагрузке сети возможна задержка. Если через 10–15 минут не пришло — обратитесь в поддержку.",
        },
        {
          question: "А если я ввёл неверный username?",
          answer:
            "Звёзды уйдут на указанный username. При ошибке сразу напишите в поддержку — помогут по ситуации.",
        },
        {
          question: "Вернут ли оплату?",
          answer:
            "Telegram не возвращает Stars (final sale), но StarsPaymee при невозможности доставки по техпричине возвращает оплату полностью.",
        },
        {
          question: "Что делать, если не активировался Premium?",
          answer:
            "Обновите статус, проверьте @username и подождите. Поток по username не требует SMS/пароля; при задержке поддержка проверит по ID.",
        },
      ],
    },
  },
};
