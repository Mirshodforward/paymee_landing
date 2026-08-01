import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, Steps, Step, KeyFacts } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "steam-balansi-tushmadi";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Steam balansi darhol ko‘rinmasa vahima qilmang: avval bir necha daqiqa kuting va Steam’ni yangilang, so‘ng
      buyurtmadagi hisob ma’lumotlarini tekshiring va botda buyurtma holatini ko‘ring. Ko‘pincha sabab — qayta ishlash
      vaqti yoki noto‘g‘ri kiritilgan login. Muammo davom etsa, buyurtma ID bilan @StarsPaymeeSupport ga yozing.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="kirish">Nega balans darhol ko‘rinmaydi?</h2>
      <p>
        Steam Wallet balansini to‘ldirgandan so‘ng mablag‘ darhol tushishini kutish tabiiy. Biroq ayrim holatlarda
        balans bir zumda ko‘rinmasligi mumkin. Quyida sabablar va ularni qanday tekshirish kerakligi keltirilgan.
      </p>

      <Steps>
        <Step title="1. Bir necha daqiqa kuting">
          Ba’zi to‘lovlar va buyurtmalarni qayta ishlash ozgina vaqt talab qiladi. Steam hisobingizni yangilang va
          biroz kuting.
        </Step>
        <Step title="2. Hisob ma’lumotlarini tekshiring">
          Buyurtma berishda login yoki boshqa kerakli ma’lumot noto‘g‘ri kiritilgan bo‘lishi mumkin.{" "}
          <Link href="/blog/steam-login-nima">Steam Login nima?</Link>
        </Step>
        <Step title="3. Buyurtma holatini ko‘ring">
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> orqali
          buyurtma bergan bo‘lsangiz, holatni bot ichida kuzatishingiz mumkin.
        </Step>
        <Step title="4. Steam tomonidagi vaqtinchalik muammo">
          Ba’zan Steam serverlaridagi yuklama yoki texnik ishlar sababli balans kechroq aks etadi. Bunday holatda
          biroz kutish foydali.
        </Step>
        <Step title="5. Qo‘llab-quvvatlashga murojaat qiling">
          Uzoq vaqt o‘tsa va muammo hal bo‘lmasa: buyurtma raqamini tayyorlang, to‘lov tasdig‘ini saqlang va{" "}
          <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> ga
          yozing.
        </Step>
      </Steps>

      <InlineCta text="Buyurtmangiz bo‘yicha savol bormi? Supportga yozing." />

      <h2 id="oldini">Bunday muammolarni qanday oldini olish mumkin?</h2>
      <KeyFacts label="Oldini olish choralari">
        <li>Hisob ma’lumotlarini diqqat bilan kiriting.</li>
        <li>To‘lovdan oldin barcha ma’lumotlarni tekshiring.</li>
        <li>Faqat ishonchli xizmatlardan foydalaning.</li>
        <li>Buyurtma tasdiqlangunga qadar sahifani yopmang (agar xizmat shunday ko‘rsatsa).</li>
        <li>To‘lov chekini va buyurtma ID sini saqlang.</li>
      </KeyFacts>

      <p>
        To‘ldirish usullari bo‘yicha:{" "}
        <Link href="/blog/steam-hisobini-qanday-toldirish-mumkin">Steam hisobini qanday to‘ldirish mumkin</Link>,{" "}
        <Link href="/blog/steam-wallet-uzcard-orqali-toldirish">UzCard</Link> va{" "}
        <Link href="/blog/steam-wallet-humo-orqali-toldirish">Humo</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://help.steampowered.com/", label: "help.steampowered.com", note: "Steam yordam markazi" },
          { href: "https://store.steampowered.com/", label: "store.steampowered.com", note: "Steam rasmiy do‘koni" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Если баланс Steam не появился сразу, не паникуйте: сначала подождите несколько минут и обновите Steam, затем
      проверьте данные аккаунта в заказе и посмотрите статус в боте. Чаще всего причина — время обработки или неверно
      введённый логин. Если проблема сохраняется, напишите в @StarsPaymeeSupport с ID заказа.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="kirish">Почему баланс не виден сразу?</h2>
      <p>
        После пополнения баланса Steam Wallet естественно ожидать мгновенного зачисления. Однако в отдельных случаях
        баланс может отобразиться не сразу. Ниже — возможные причины и как их проверить.
      </p>

      <Steps>
        <Step title="1. Подождите несколько минут">
          Обработка некоторых платежей и заказов занимает немного времени. Обновите аккаунт Steam и подождите.
        </Step>
        <Step title="2. Проверьте данные аккаунта">
          При оформлении заказа логин или другие данные могли быть введены неверно.{" "}
          <Link href="/blog/steam-login-nima">Что такое Steam Login?</Link>
        </Step>
        <Step title="3. Посмотрите статус заказа">
          Если вы оформляли заказ через{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>,
          статус можно отследить в боте.
        </Step>
        <Step title="4. Временная проблема на стороне Steam">
          Иногда из‑за нагрузки или техработ на серверах Steam баланс отображается позже. В этом случае стоит
          подождать.
        </Step>
        <Step title="5. Обратитесь в поддержку">
          Если прошло много времени и проблема не решена: подготовьте номер заказа, сохраните подтверждение оплаты и
          напишите в{" "}
          <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.
        </Step>
      </Steps>

      <InlineCta text="Есть вопрос по заказу? Напишите в поддержку." />

      <h2 id="oldini">Как предотвратить такие проблемы?</h2>
      <KeyFacts label="Меры предосторожности">
        <li>Внимательно вводите данные аккаунта.</li>
        <li>Проверяйте все данные перед оплатой.</li>
        <li>Пользуйтесь только надёжными сервисами.</li>
        <li>Не закрывайте страницу до подтверждения заказа (если сервис так указывает).</li>
        <li>Сохраняйте чек оплаты и ID заказа.</li>
      </KeyFacts>

      <p>
        О способах пополнения:{" "}
        <Link href="/blog/steam-hisobini-qanday-toldirish-mumkin">как пополнить аккаунт Steam</Link>,{" "}
        <Link href="/blog/steam-wallet-uzcard-orqali-toldirish">UzCard</Link> и{" "}
        <Link href="/blog/steam-wallet-humo-orqali-toldirish">Humo</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://help.steampowered.com/", label: "help.steampowered.com", note: "справка Steam" },
          { href: "https://store.steampowered.com/", label: "store.steampowered.com", note: "официальный магазин Steam" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      If your Steam balance doesn't appear right away, don't panic: first wait a few minutes and refresh Steam, then
      check the account details in the order and view the order status in the bot. The usual cause is processing time
      or a mistyped login. If the problem persists, message @StarsPaymeeSupport with your order ID.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="kirish">Why isn't the balance visible immediately?</h2>
      <p>
        After topping up your Steam Wallet it's natural to expect funds instantly. In some cases, though, the balance
        may not show right away. Below are the possible causes and how to check them.
      </p>

      <Steps>
        <Step title="1. Wait a few minutes">
          Processing some payments and orders takes a little time. Refresh your Steam account and wait.
        </Step>
        <Step title="2. Check the account details">
          The login or other required details may have been entered incorrectly when ordering.{" "}
          <Link href="/blog/steam-login-nima">What is Steam Login?</Link>
        </Step>
        <Step title="3. View the order status">
          If you ordered via{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>, you
          can track the status in the bot.
        </Step>
        <Step title="4. A temporary issue on Steam's side">
          Sometimes load or maintenance on Steam servers delays the balance appearing. In that case waiting helps.
        </Step>
        <Step title="5. Contact support">
          If a long time has passed and the issue isn't resolved: prepare your order number, keep the payment
          confirmation and message{" "}
          <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.
        </Step>
      </Steps>

      <InlineCta text="Have a question about your order? Message support." />

      <h2 id="oldini">How to prevent such problems</h2>
      <KeyFacts label="Preventive measures">
        <li>Enter account details carefully.</li>
        <li>Check all details before paying.</li>
        <li>Use only trusted services.</li>
        <li>Don't close the page until the order is confirmed (if the service says so).</li>
        <li>Keep the payment receipt and order ID.</li>
      </KeyFacts>

      <p>
        On top‑up methods:{" "}
        <Link href="/blog/steam-hisobini-qanday-toldirish-mumkin">how to top up a Steam account</Link>,{" "}
        <Link href="/blog/steam-wallet-uzcard-orqali-toldirish">UzCard</Link> and{" "}
        <Link href="/blog/steam-wallet-humo-orqali-toldirish">Humo</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://help.steampowered.com/", label: "help.steampowered.com", note: "Steam help centre" },
          { href: "https://store.steampowered.com/", label: "store.steampowered.com", note: "official Steam store" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Steam balansi tushmasa nima qilish kerak?", answer: "Bir necha daqiqa kuting va Steam’ni yangilang, hisob ma’lumotlarini tekshiring, botda buyurtma holatini ko‘ring; muammo davom etsa supportga yozing." },
  { question: "Balans odatda qancha vaqtda tushadi?", answer: "Ko‘p hollarda qisqa vaqt ichida, ammo ayrim holatlarda kechikish bo‘lishi mumkin." },
  { question: "Noto‘g‘ri login kiritsam nima bo‘ladi?", answer: "Buyurtma noto‘g‘ri hisobga yo‘naltirilishi yoki bajarilmasligi mumkin. Shuning uchun ma’lumotlarni tekshirish juda muhim." },
  { question: "Steam serverlarida muammo bo‘lishi mumkinmi?", answer: "Ha, ayrim vaqtlarda texnik ishlar yoki yuklama sababli xizmatlarda kechikish kuzatilishi mumkin." },
  { question: "Buyurtma holatini qayerdan ko‘raman?", answer: "@StarsPaymee_bot ichida buyurtma holatini kuzatishingiz mumkin." },
  { question: "Supportga nima bilan murojaat qilaman?", answer: "Buyurtma raqami (ID) va to‘lov tasdig‘i bilan — bu muammoni tezroq aniqlashga yordam beradi." },
  { question: "Steam’ni yangilash nimani anglatadi?", answer: "Steam ilovasini qayta ishga tushirish yoki hisobdan chiqib qayta kirish orqali balansni yangilash." },
  { question: "Pulim yechildi-yu, balans yo‘q — nima qilaman?", answer: "To‘lov chekini saqlang va buyurtma ID bilan @StarsPaymeeSupport ga yozing." },
  { question: "Qancha kutish kerak?", answer: "Odatda bir necha daqiqa. Agar sezilarli vaqt o‘tsa, supportga murojaat qiling." },
  { question: "Balans boshqa hisobga tushib qolsa-chi?", answer: "Bu ko‘pincha noto‘g‘ri login sababli bo‘ladi; support bilan bog‘lanib holatni aniqlang." },
  { question: "To‘lovni qaytarib olsam bo‘ladimi?", answer: "Yetkazilmagan buyurtma bo‘yicha xizmat shartlariga ko‘ra qaraladi — support bilan bog‘laning." },
  { question: "Buyurtmani qayta yuborsam bo‘ladimi?", answer: "Avval holatni aniqlang — ikki marta to‘lov qilib qo‘ymang." },
  { question: "Internet uzilishi ta’sir qiladimi?", answer: "To‘lov jarayonida uzilish bo‘lsa, buyurtma holatini albatta tekshiring." },
  { question: "Steam Guard muammo keltirib chiqaradimi?", answer: "Guard hisob himoyasi uchun; balans tushishiga to‘g‘ridan-to‘g‘ri to‘sqinlik qilmaydi." },
  { question: "Hisob valyutasi noto‘g‘ri bo‘lsa-chi?", answer: "Balans hisobingiz valyutasida tushadi; xariddan oldin valyutani tekshiring." },
  { question: "Chek qanday saqlanadi?", answer: "Bank ilovasidagi tranzaksiya va botdagi buyurtma ID sini saqlab qo‘ying." },
  { question: "Tunda ham support ishlaydimi?", answer: "@StarsPaymeeSupport ga yozib qoldirsangiz, javob beriladi." },
  { question: "Ikki marta to‘lov qilib yuborsam-chi?", answer: "Support bilan bog‘lanib, takroriy tranzaksiyani aniqlashtiring." },
  { question: "Muammo takrorlanmasligi uchun nima qilay?", answer: "Ma’lumotlarni diqqat bilan kiriting, ishonchli xizmatdan foydalaning va chekni saqlang." },
  { question: "Yordam kerak bo‘lsa kimga yozaman?", answer: "@StarsPaymeeSupport — buyurtma ID bilan." },
];

const ruFaq = [
  { question: "Что делать, если баланс Steam не пришёл?", answer: "Подождите несколько минут и обновите Steam, проверьте данные аккаунта, посмотрите статус заказа в боте; если проблема остаётся — напишите в поддержку." },
  { question: "За сколько обычно поступает баланс?", answer: "В большинстве случаев за короткое время, но в отдельных случаях возможна задержка." },
  { question: "Что если ввести неверный логин?", answer: "Заказ может уйти не на тот аккаунт или не выполниться. Поэтому очень важно проверять данные." },
  { question: "Могут ли быть проблемы на серверах Steam?", answer: "Да, иногда из‑за техработ или нагрузки возможны задержки в сервисах." },
  { question: "Где посмотреть статус заказа?", answer: "Статус заказа можно отследить внутри @StarsPaymee_bot." },
  { question: "С чем обращаться в поддержку?", answer: "С номером заказа (ID) и подтверждением оплаты — так проблему определят быстрее." },
  { question: "Что значит обновить Steam?", answer: "Перезапустить приложение Steam или выйти и снова войти, чтобы обновить баланс." },
  { question: "Деньги списаны, а баланса нет — что делать?", answer: "Сохраните чек об оплате и напишите в @StarsPaymeeSupport с ID заказа." },
  { question: "Сколько нужно ждать?", answer: "Обычно несколько минут. Если прошло заметное время — обратитесь в поддержку." },
  { question: "Что если баланс ушёл на другой аккаунт?", answer: "Чаще это из‑за неверного логина; свяжитесь с поддержкой для выяснения." },
  { question: "Можно ли вернуть оплату?", answer: "По недоставленному заказу рассматривается согласно условиям сервиса — свяжитесь с поддержкой." },
  { question: "Можно ли отправить заказ повторно?", answer: "Сначала выясните статус — не оплачивайте дважды." },
  { question: "Влияет ли обрыв интернета?", answer: "Если во время оплаты произошёл обрыв, обязательно проверьте статус заказа." },
  { question: "Мешает ли Steam Guard?", answer: "Guard защищает аккаунт и напрямую не препятствует зачислению баланса." },
  { question: "Что если валюта аккаунта другая?", answer: "Баланс поступает в валюте вашего аккаунта; проверьте валюту до покупки." },
  { question: "Как сохранить чек?", answer: "Сохраните транзакцию в банковском приложении и ID заказа из бота." },
  { question: "Работает ли поддержка ночью?", answer: "Если написать в @StarsPaymeeSupport, вам ответят." },
  { question: "Что если я оплатил дважды?", answer: "Свяжитесь с поддержкой и уточните повторную транзакцию." },
  { question: "Как избежать повторения проблемы?", answer: "Внимательно вводите данные, пользуйтесь надёжным сервисом и сохраняйте чек." },
  { question: "Куда писать за помощью?", answer: "@StarsPaymeeSupport — с ID заказа." },
];

const enFaq = [
  { question: "What should I do if the Steam balance didn't arrive?", answer: "Wait a few minutes and refresh Steam, check the account details, view the order status in the bot; if it persists, message support." },
  { question: "How fast does the balance usually arrive?", answer: "In most cases within a short time, but in some cases there may be a delay." },
  { question: "What if I enter the wrong login?", answer: "The order may go to the wrong account or fail. That's why checking the details matters." },
  { question: "Can there be issues on Steam's servers?", answer: "Yes, sometimes maintenance or load causes delays in services." },
  { question: "Where do I see the order status?", answer: "You can track the order status inside @StarsPaymee_bot." },
  { question: "What should I include when contacting support?", answer: "The order number (ID) and payment confirmation — this helps identify the problem faster." },
  { question: "What does refreshing Steam mean?", answer: "Restarting the Steam app or signing out and back in to refresh the balance." },
  { question: "Money was charged but no balance — what now?", answer: "Keep the payment receipt and message @StarsPaymeeSupport with the order ID." },
  { question: "How long should I wait?", answer: "Usually a few minutes. If considerable time has passed, contact support." },
  { question: "What if the balance went to another account?", answer: "This is usually due to a wrong login; contact support to clarify." },
  { question: "Can I get a refund?", answer: "An undelivered order is reviewed per the service terms — contact support." },
  { question: "Can I resend the order?", answer: "First check the status — don't pay twice." },
  { question: "Does an internet drop matter?", answer: "If the connection dropped during payment, be sure to check the order status." },
  { question: "Does Steam Guard interfere?", answer: "Guard protects the account and doesn't directly block the balance arriving." },
  { question: "What if the account currency is different?", answer: "The balance arrives in your account's currency; check the currency before buying." },
  { question: "How do I keep the receipt?", answer: "Keep the transaction in your bank app and the order ID from the bot." },
  { question: "Does support work at night?", answer: "If you write to @StarsPaymeeSupport, you'll get a reply." },
  { question: "What if I paid twice?", answer: "Contact support and clarify the duplicate transaction." },
  { question: "How do I avoid this happening again?", answer: "Enter details carefully, use a trusted service and keep the receipt." },
  { question: "Who do I contact for help?", answer: "@StarsPaymeeSupport — with the order ID." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Steam",
  type: "problem",
  datePublished: "2026-07-24",
  dateModified: "2026-07-24",
  keywords: [
    "steam balansi tushmadi",
    "steam balans kelmadi",
    "steam wallet tushmadi",
    "steam to‘lov muammosi",
    "steam balance not received",
    "steam buyurtma holati",
  ],
  howToSteps: [
    { name: "Bir necha daqiqa kuting", text: "Steam hisobingizni yangilab, biroz kuting." },
    { name: "Hisob ma’lumotlarini tekshiring", text: "Buyurtmadagi login va ma’lumotlarni qayta tekshiring." },
    { name: "Buyurtma holatini ko‘ring", text: "Botda buyurtma holatini kuzating." },
    { name: "Steam holatini hisobga oling", text: "Texnik ishlar yoki yuklama bo‘lsa, biroz kuting." },
    { name: "Supportga murojaat qiling", text: "Buyurtma ID va to‘lov tasdig‘i bilan @StarsPaymeeSupport ga yozing." },
  ],
  locales: {
    uz: {
      title: "Steam balansi tushmasa nima qilish kerak? To‘liq qo‘llanma",
      excerpt:
        "Steam balansi hisobga tushmadimi? Sabablari, 5 bosqichli tekshiruv, oldini olish choralari va supportga qanday murojaat qilish — 20 savol-javob bilan.",
      metaTitle: "Steam balansi tushmasa nima qilish kerak? Qo‘llanma",
      metaDescription:
        "Steam balansi hisobga tushmadi? Muammoning sabablari va uni hal qilish usullari bo‘yicha foydali tavsiyalar.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Muammo hal bo‘lmadimi?",
      ctaBody: "Buyurtma ID bilan @StarsPaymeeSupport ga yozing — tezda yordam beriladi.",
      faq: uzFaq,
    },
    ru: {
      title: "Что делать, если баланс Steam не пришёл? Полное руководство",
      excerpt:
        "Баланс Steam не зачислился? Причины, проверка в 5 шагов, меры предосторожности и как обратиться в поддержку — с 20 вопросами‑ответами.",
      metaTitle: "Что делать, если баланс Steam не пришёл? Руководство",
      metaDescription:
        "Баланс Steam не зачислился? Полезные советы о причинах проблемы и способах её решения.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Проблема не решилась?",
      ctaBody: "Напишите в @StarsPaymeeSupport с ID заказа — помогут быстро.",
      faq: ruFaq,
    },
    en: {
      title: "What to do if your Steam balance didn't arrive? A full guide",
      excerpt:
        "Steam balance not credited? Causes, a 5‑step check, preventive measures and how to contact support — with 20 Q&A.",
      metaTitle: "What to do if your Steam balance didn't arrive? A guide",
      metaDescription:
        "Steam balance not credited? Useful advice on the causes of the problem and how to resolve it.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Still not resolved?",
      ctaBody: "Message @StarsPaymeeSupport with your order ID — you'll get help quickly.",
      faq: enFaq,
    },
  },
};
