import { Link } from "@/i18n/navigation";
import { Toc, Steps, Step, InlineCta, KeyFacts, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-premium-sovga-qilishdi-nima-qilish";

function UzAnswer() {
  return (
    <p>
      Sizga Telegram Premium sovg‘a qilishsa, Telegram’dan <strong>rasmiy xizmat xabari</strong> keladi va Premium
      avtomatik ravishda akkauntingizga faollashadi — alohida qabul qilish tugmasini bosish yoki kod kiritish shart
      emas. Faollashgach profilingizda Premium yulduzcha belgisi paydo bo‘ladi. Muddatini{" "}
      <strong>Sozlamalar → Telegram Premium</strong> bo‘limidan tekshirishingiz mumkin.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#xabar", label: "Xabarnoma qanday keladi" },
          { href: "#faollashtirish", label: "Faollashtirish kerakmi" },
          { href: "#tekshirish", label: "Muddatni tekshirish" },
          { href: "#eski", label: "Avvaldan Premium bo‘lsa nima bo‘ladi" },
          { href: "#minnat", label: "Sovg‘a qilganga qanday javob berish" },
        ]}
      />

      <h2 id="xabar">Premium sovg‘a qilinganda xabarnoma qanday keladi?</h2>
      <p>
        Kimdir sizga Telegram Premium sovg‘a qilganda, Telegram tizimidan (odatda «Telegram» rasmiy xizmat chatidan)
        xabar keladi — u sovg‘a qilingan muddatni (masalan, 1, 3, 6 yoki 12 oy) va kim tomonidan yuborilganini
        ko‘rsatadi. Bu xabarnoma darhol, to‘lov amalga oshirilgach yetib keladi.
      </p>

      <h2 id="faollashtirish">Uni faollashtirish uchun nima qilish kerak?</h2>
      <Steps>
        <Step title="Hech narsa qilish shart emas">
          Sovg‘a qilingan Premium avtomatik ravishda akkauntingizga ulanadi — kod kiritish yoki tasdiqlash tugmasi
          bosish talab qilinmaydi.
        </Step>
        <Step title="Profilni tekshiring">Profilingizda Premium yulduzcha belgisi paydo bo‘lganini ko‘ring.</Step>
        <Step title="Ilovani yangilang">
          Agar darhol ko‘rinmasa, ilovani yopib qayta oching yoki internetni yangilang.
        </Step>
      </Steps>

      <InlineCta text="O‘zingiz ham do‘stingizga Premium sovg‘a qilmoqchimisiz? So‘mda, botda 10 soniyada." />

      <h2 id="tekshirish">Muddatni qanday tekshirish mumkin?</h2>
      <KeyFacts label="Tekshirish yo‘li">
        <li>
          <b>Sozlamalar → Telegram Premium:</b> bu yerda joriy obuna va uning tugash sanasi ko‘rsatiladi.
        </li>
        <li>
          <b>Avtomatik yangilanish yo‘q:</b> sovg‘a qilingan Premium odatda bir martalik — muddat tugagach avtomatik
          yechib olinmaydi.
        </li>
        <li>
          <b>Cheklovlar:</b> ba’zan sovg‘a qilingan obunani bekor qilish yoki ko‘chirish imkoni bo‘lmasligi mumkin.
        </li>
      </KeyFacts>

      <h2 id="eski">Sizda avvaldan Premium bo‘lsa nima bo‘ladi?</h2>
      <p>
        Agar sizda allaqachon faol Premium obuna bo‘lsa, yangi sovg‘a qilingan muddat odatda joriy obunangiz
        <strong> ustiga qo‘shiladi</strong> (muddat uzayadi), obuna to‘xtab qolmaydi yoki bekor qilinmaydi. Premium
        umuman nima berishini{" "}
        <Link href="/blog/telegram-premium-arziydimi-foydalari">«Premium arziydimi»</Link> maqolasida ko‘rishingiz
        mumkin.
      </p>

      <h2 id="minnat">Sovg‘a qilgan odamga qanday javob berish kerak?</h2>
      <p>
        Bu shunchaki odob masalasi, lekin amaliy jihatdan — Telegram xabarnomasi sovg‘a qilgan shaxsning ismini
        ko‘rsatadi, shuning uchun rahmat aytish oson. Agar o‘zingiz ham kimgadir Premium sovg‘a qilmoqchi bo‘lsangiz,
        buning eng oson yo‘li{" "}
        <Link href="/blog/telegram-premium-sovga-username-orqali">«Premium sovg‘a username orqali»</Link>{" "}
        maqolasida yozilgan.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Telegram Premium FAQ" },
          { href: "https://telegram.org/blog/premium", label: "telegram.org/blog/premium", note: "Premium funksiyalari e’loni" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Если вам подарили Telegram Premium, от Telegram придёт <strong>официальное системное сообщение</strong>, и
      Premium автоматически активируется на вашем аккаунте — отдельно нажимать кнопку принятия или вводить код не
      нужно. После активации в профиле появится значок Premium со звездой. Срок действия можно проверить в разделе{" "}
      <strong>Настройки → Telegram Premium</strong>.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#xabar", label: "Как приходит уведомление" },
          { href: "#faollashtirish", label: "Нужна ли активация" },
          { href: "#tekshirish", label: "Проверка срока действия" },
          { href: "#eski", label: "Что если Premium уже был" },
          { href: "#minnat", label: "Как поблагодарить дарителя" },
        ]}
      />

      <h2 id="xabar">Как приходит уведомление о подаренном Premium?</h2>
      <p>
        Когда кто-то дарит вам Telegram Premium, приходит сообщение от системы Telegram (обычно из официального
        служебного чата «Telegram») — в нём указан срок подарка (например, 1, 3, 6 или 12 месяцев) и от кого он
        отправлен. Уведомление приходит сразу после оплаты.
      </p>

      <h2 id="faollashtirish">Что нужно сделать для активации?</h2>
      <Steps>
        <Step title="Делать ничего не нужно">
          Подаренный Premium автоматически подключается к аккаунту — вводить код или нажимать кнопку подтверждения
          не требуется.
        </Step>
        <Step title="Проверьте профиль">Убедитесь, что в профиле появился значок Premium со звездой.</Step>
        <Step title="Обновите приложение">
          Если не отображается сразу, закройте и снова откройте приложение или обновите интернет-соединение.
        </Step>
      </Steps>

      <InlineCta text="Тоже хотите подарить Premium другу? В сумах, в боте за 10 секунд." />

      <h2 id="tekshirish">Как проверить срок действия?</h2>
      <KeyFacts label="Способ проверки">
        <li>
          <b>Настройки → Telegram Premium:</b> здесь показана текущая подписка и дата её окончания.
        </li>
        <li>
          <b>Без автопродления:</b> подаренный Premium обычно разовый — по истечении срока автоматически не
          списывается.
        </li>
        <li>
          <b>Ограничения:</b> иногда отменить или перенести подаренную подписку невозможно.
        </li>
      </KeyFacts>

      <h2 id="eski">Что будет, если у вас уже был Premium?</h2>
      <p>
        Если у вас уже есть активная подписка Premium, новый подаренный срок обычно{" "}
        <strong>добавляется к текущей</strong> подписке (срок продлевается), подписка не прерывается и не
        отменяется. Что вообще даёт Premium — можно посмотреть в статье{" "}
        <Link href="/blog/telegram-premium-arziydimi-foydalari">«Стоит ли Premium»</Link>.
      </p>

      <h2 id="minnat">Как поблагодарить того, кто подарил?</h2>
      <p>
        Это вопрос вежливости, но с практической стороны — уведомление Telegram показывает имя дарителя, поэтому
        поблагодарить легко. Если вы сами хотите подарить Premium кому-то, самый простой способ описан в статье{" "}
        <Link href="/blog/telegram-premium-sovga-username-orqali">«Подарок Premium через username»</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "FAQ по Telegram Premium" },
          { href: "https://telegram.org/blog/premium", label: "telegram.org/blog/premium", note: "анонс функций Premium" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "howto",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  keywords: [
    "telegram premium sovga qilishdi",
    "telegram premium sovga keldi",
    "telegram premium qabul qilish",
    "telegram premium gift activate",
    "sizga premium sovga qilindi",
  ],
  locales: {
    uz: {
      title: "Sizga Telegram Premium sovg‘a qilishdi — endi nima qilish kerak? (2026)",
      excerpt:
        "Telegram Premium sovg‘a qilinganda xabarnoma qanday keladi, uni faollashtirish talab qilinadimi va muddatini qanday tekshirish mumkin.",
      metaTitle: "Telegram Premium sovg‘a keldi — nima qilish kerak 2026",
      metaDescription:
        "Sizga Telegram Premium sovg‘a qilishdi: xabarnoma qanday keladi, faollashtirish kerakmi, muddatni tekshirish va avvaldan Premium bo‘lsa nima bo‘ladi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "O‘zingiz ham sovg‘a qilmoqchimisiz?",
      ctaBody: "So‘mda, mahalliy karta bilan @StarsPaymee_bot orqali 10 soniyada.",
      faq: [
        {
          question: "Premium sovg‘a qilinganda qanday xabar keladi?",
          answer: "Telegram’ning rasmiy xizmat chatidan xabarnoma keladi — u muddat va kimdan kelganini ko‘rsatadi.",
        },
        {
          question: "Sovg‘a qilingan Premium’ni faollashtirish kerakmi?",
          answer: "Yo‘q, u avtomatik ravishda akkauntga ulanadi — alohida tasdiqlash talab qilinmaydi.",
        },
        {
          question: "Muddatni qayerdan tekshirish mumkin?",
          answer: "Sozlamalar → Telegram Premium bo‘limida joriy obuna va tugash sanasi ko‘rsatilgan bo‘ladi.",
        },
        {
          question: "Menda avvaldan Premium bo‘lsa, sovg‘a nima bo‘ladi?",
          answer: "Odatda yangi muddat joriy obunangiz ustiga qo‘shiladi — obuna to‘xtamaydi, faqat muddati uzayadi.",
        },
        {
          question: "Sovg‘a qilingan Premium’ni bekor qilib bo‘ladimi?",
          answer: "Ba’zan bu cheklangan bo‘lishi mumkin — sovg‘a odatda bir martalik va avtomatik yangilanmaydi.",
        },
      ],
    },
    ru: {
      title: "Вам подарили Telegram Premium — что делать дальше? (2026)",
      excerpt:
        "Как приходит уведомление о подаренном Telegram Premium, нужна ли его активация и как проверить срок действия.",
      metaTitle: "Подарили Telegram Premium — что делать 2026",
      metaDescription:
        "Вам подарили Telegram Premium: как приходит уведомление, нужна ли активация, как проверить срок и что будет, если Premium уже был.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Сами хотите подарить Premium?",
      ctaBody: "В сумах, локальной картой через @StarsPaymee_bot за 10 секунд.",
      faq: [
        {
          question: "Какое сообщение приходит при подарке Premium?",
          answer: "Приходит уведомление из официального служебного чата Telegram — оно показывает срок и от кого пришёл подарок.",
        },
        {
          question: "Нужно ли активировать подаренный Premium?",
          answer: "Нет, он автоматически подключается к аккаунту — отдельного подтверждения не требуется.",
        },
        {
          question: "Где проверить срок действия?",
          answer: "В разделе Настройки → Telegram Premium показаны текущая подписка и дата её окончания.",
        },
        {
          question: "Что будет, если у меня уже был Premium?",
          answer: "Обычно новый срок добавляется к текущей подписке — она не прерывается, просто продлевается.",
        },
        {
          question: "Можно ли отменить подаренный Premium?",
          answer: "Иногда это ограничено — подарок обычно разовый и не продлевается автоматически.",
        },
      ],
    },
  },
};
