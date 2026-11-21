import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-stars-21-kunlik-kutish-muddati";

/**
 * Telegram Stars 21 kunlik kutish muddati: Stars qachon yechiladi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-21): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Stars ishlab topayotgan kanal egasi yoki ijodkor yechib olish tugmasi nega faol emasligini va tushgan Stars qachon yechilishini bilmoqchi. U «Telegram Stars 21 kun kutish» yoki «Stars qachon yechiladi» deb qidiradi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-21):
 *   https://telegram.org/tos/content-creator-rewards
 *   https://telegram.org/blog/star-messages-gateway-2-0-and-more
 *   https://telegram.org/blog/checklists-suggested-posts
 *   https://telegram.org/tos/stars
 *
 * Narxlar konstantalardan: lib/products.ts (qo'lda raqam yozilmagan).
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/\u202f/g, "\u00a0");
const som = (n: number, locale: Locale) => `${fmt(n, locale)} ${{ uz: "so‘m", ru: "сум", en: "som" }[locale]}`;

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return <p>«Yechib olish» tugmasi faol bo‘lmasa, ko‘pincha bu xato emas. Telegram’ning ijodkorlar uchun shartlarida Stars balansidagi mukofotlar yechib olishga 21 kundan keyin tayyor bo‘lishi yozilgan. Gram balansidagi mukofotlar uchun bu muddat 2 kun. Telegram blogida ham Stars ishlab topilganidan 21 kun o‘tib yechiladi, deyilgan. Ya’ni bugun tushgan yulduzlarni taxminan uch haftadan keyin yechib olasiz.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#nega-yechib-olish-tugmasi-hali", label: "Nega «yechib olish» tugmasi hali faol emas?" },
          { href: "#stars-va-gram-mukofotlari-uchun", label: "Stars va Gram mukofotlari uchun muddatlar qanday farq qiladi?" },
          { href: "#21-kun-qaysi-kundan-hisoblanadi", label: "21 kun qaysi kundan hisoblanadi: kalendar misoli" },
          { href: "#kutish-davrida-stars-balansdan-kamayishi", label: "Kutish davrida Stars balansdan kamayishi mumkinmi?" },
          { href: "#ilovada-korinadigan-usd-qiymatiga-ishonsa", label: "Ilovada ko‘rinadigan USD qiymatiga ishonsa bo‘ladimi?" },
          { href: "#taklif-qilingan-postlarda-pul-qachon", label: "Taklif qilingan postlarda pul qachon tushadi va nimani tanlash xavfsizroq?" },
          { href: "#muddat-tugagach-yechib-olish-qanday", label: "Muddat tugagach yechib olish qanday bo‘ladi va nimaga e’tibor berish kerak?" },
          { href: "#daromadni-21-kunlik-siljish-bilan", label: "Daromadni 21 kunlik siljish bilan qanday rejalashtirish mumkin?" },
          { href: "#sotib-olingan-stars-ham-21", label: "Sotib olingan Stars ham 21 kundan keyin yechiladimi?" },
        ]}
      />
      <h2 id="nega-yechib-olish-tugmasi-hali">Nega «yechib olish» tugmasi hali faol emas?</h2>
      <p>Asosiy sabab — kutish muddati. <a href={"https://telegram.org/tos/content-creator-rewards"} target="_blank" rel="noopener noreferrer">Ijodkorlar uchun shartlarda</a> to‘g‘ridan-to‘g‘ri yozilgan: Stars balansidagi mukofotlar uchun 21 kun kerak. <a href={"https://telegram.org/blog/star-messages-gateway-2-0-and-more"} target="_blank" rel="noopener noreferrer">Telegram blogida</a> ham shu raqam bor: Stars ishlab topilganidan 21 kun keyin yechiladi.</p>
      <p>Ikki manbada sabab turlicha atalgan: shartlarda «texnik sabablar», blogda «operatsion sabablar». Telegram bundan ortiq izoh bermagan, shuning uchun sabab haqida taxmin qilmaymiz. Aniq bo‘lgani bitta: muddat 21 kun.</p>
      <p>Kanalingiz uch haftadan ko‘proq vaqtdan beri Stars yig‘ayotgan bo‘lsa-yu, tugma baribir faol bo‘lmasa, sabab boshqa bo‘lishi mumkin. Masalan, yechib olish uchun eng kam miqdor bordir. Bunday chegara rasmiy manbalarda topilmadi va bu maqolada tasdiqlanmagan. Uni ilovadagi kanal balansi oynasida yoki <a href={"https://fragment.com"} target="_blank" rel="noopener noreferrer">Fragment</a> sahifasida tekshiring.</p>
      <h2 id="stars-va-gram-mukofotlari-uchun">Stars va Gram mukofotlari uchun muddatlar qanday farq qiladi?</h2>
      <p>Ijodkorlar shartlarida ikki xil balans bor, ularning muddatlari ham boshqa-boshqa.</p>
      <CompareTable
        headers={["Balans turi", "Yechib olishga tayyor bo‘ladi", "Amal qilish muddati", "Manba"]}
        rows={[
          ["Gram balansidagi mukofot", "Yig‘ilgan sanadan 2 kun keyin", "Telegram o‘z xohishiga ko‘ra muddat qo‘yishi mumkin", "Ijodkorlar shartlari"],
          ["Stars balansidagi mukofot", "21 kundan keyin", "Olingan kundan 3 yil; Telegram bundan tashqari ham muddat qo‘yishi mumkin", "Ijodkorlar shartlari, Telegram blogi"],
        ]}
      />
      <p>Jadvaldan ikki narsa kelib chiqadi. Birinchidan, Stars’dagi mukofot Gram’dagidan ancha sekin yechiladi. Ikkinchidan, Stars mukofotini yillab yechmay qo‘yish ham xavfli: 3 yillik muddat bor, Telegram esa yechilmagan mukofotlarga alohida muddat qo‘yish huquqini o‘zida qoldirgan.</p>
      <p>«Gram balansi» — shartlardagi atama. Ilovada balansingiz qanday nomlanganini kanal daromadi oynasida ko‘ring.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="21-kun-qaysi-kundan-hisoblanadi">21 kun qaysi kundan hisoblanadi: kalendar misoli</h2>
      <p>Shartlarda mezon — mukofot <b>yig‘ilgan sana</b>. Blogda esa Stars <b>ishlab topilgan</b> payt deyiladi. Amalda bu — yulduz kanal balansingizga tushgan kun.</p>
      <CompareTable
        headers={["Davr", "Nima bo‘ladi"]}
        rows={[
          ["0-kun", "Stars kanal balansiga tushdi"],
          ["1–20-kunlar", "Stars balansda ko‘rinadi, lekin hali yechilmaydi"],
          ["21-kun", "Shu kuni tushgan Stars yechib olishga tayyor bo‘ladi"],
          ["Keyin", "Yechib olish Fragment orqali qayta ishlanadi"],
        ]}
      />
      <p>Shartlar mantig‘iga ko‘ra, har bir tushum o‘z sanasidan hisoblanadiganga o‘xshaydi. Lekin Telegram buni alohida yozmagan — bu muharrir xulosasi. Shuning uchun quyidagi sanalar taxminiy, aniq holatni ilovada tekshiring.</p>
      <CompareTable
        headers={["Tushum sanasi", "Stars mukofoti taxminan tayyor", "Gram mukofoti bo‘lsa"]}
        rows={[
          ["3-dekabr", "24-dekabr", "5-dekabr"],
          ["15-dekabr", "5-yanvar", "17-dekabr"],
          ["28-dekabr", "18-yanvar", "30-dekabr"],
        ]}
      />
      <p>Shu hisob to‘g‘ri bo‘lsa, bir oylik daromad bitta kunda emas, qismlarga bo‘linib ochiladi. Dekabr boshidagi tushum yil oxirigacha tayyor bo‘ladi, dekabr oxiridagisi esa yanvarning ikkinchi yarmiga o‘tadi.</p>
      <p>Qaysi tushumlar shu shartlarga kiradi? Stars shartlarida aniq yozilgan: kelgan pullik xabarlardan va Stars’ga aylantirilgan sovg‘alardan tushgan yulduzlar ijodkorlar shartlariga bo‘ysunadi. Sovg‘ani yulduzga almashtirish tartibi haqida: <Link href="/blog/telegram-gift-stars-ga-aylantirish">sovg‘ani Stars’ga aylantirish</Link>. Kanal qanday yo‘llar bilan Stars yig‘ishi haqida: <Link href="/blog/telegram-kanal-stars-monetizatsiya">kanalda Stars monetizatsiyasi</Link>.</p>
      <h2 id="kutish-davrida-stars-balansdan-kamayishi">Kutish davrida Stars balansdan kamayishi mumkinmi?</h2>
      <p>Ha, shartlarda bunday imkoniyat yozilgan. Kutish davridagi balansni hali «qo‘ldagi pul» deb hisoblamang.</p>
      <ul>
        <li><b>Ushlab qolish va ayirish.</b> Telegram mukofotlarni qisman yoki to‘liq ushlab qolish huquqini saqlab qoladi. Sizga beriladigan mukofotdan Gram yoki Stars’ni ayirib hisob-kitob (offset) qilishi ham mumkin.</li>
        <li><b>Balansning huquqiy maqomi.</b> Shartlarga ko‘ra, kanal balansi Telegram sizning nomingizdan depozitda yoki saqlovda ushlab turgan mablag‘ hisoblanmaydi.</li>
        <li><b>Sabab ko‘rsatilmaydi.</b> Shartlarda ushlab qolish yoki ayirishning aniq sabablari sanab o‘tilmagan. Shuning uchun har qanday o‘zgarishni o‘zingiz tarixdan tekshirasiz.</li>
      </ul>
      <p>Yechib olinmagan summa hozircha kutilayotgan daromad, xolos. Balans kutilmaganda kamaysa, avval kanalning tranzaksiyalar tarixini oching: qaysi tushum qaysi sanada o‘zgargani shu yerda ko‘rinadi.</p>
      <h2 id="ilovada-korinadigan-usd-qiymatiga-ishonsa">Ilovada ko‘rinadigan USD qiymatiga ishonsa bo‘ladimi?</h2>
      <p>Kanal balansi yonida dollardagi taxminiy summa chiqadi. Shartlarga ko‘ra, bu qiymat faqat qulaylik uchun ko‘rsatiladi. U kafolatlangan narx ham, almashtirish taklifi ham emas. Kanal balansining nisbiy qiymati vaqt o‘tishi bilan o‘zgarishi mumkin.</p>
      <p>Demak, 21 kunlik kutish davrida ekrandagi dollar summasi o‘zgarib turishi mumkin. Bugun ko‘rgan raqam uch haftadan keyingi summa bilan bir xil chiqmasligi mumkin.</p>
      <Notice label={"Muhim"}>Ekrandagi raqam — mo‘ljal, va’da emas. Ijara, reklama byudjeti yoki muallif haqini USD summasiga qarab rejalashtirmang. Yechib olinib, hamyoningizga tushgan summaga qarang.</Notice>
      <h2 id="taklif-qilingan-postlarda-pul-qachon">Taklif qilingan postlarda pul qachon tushadi va nimani tanlash xavfsizroq?</h2>
      <p>Taklif qilingan postlar (suggested posts) formatida reklama beruvchi kanalga post taklif qiladi. Bu yerda vaqt chizig‘i boshqacha.</p>
      <p>Telegram blogiga ko‘ra, kanal egasi mukofotni post chiqqanidan 24 soat keyin oladi. Mukofot Stars’da bo‘lsa, uni yechib olishga 21 kunlik qoida qanday qo‘llanishini ilovadagi balansda tekshiring.</p>
      <p>Post kelishilgan muddatdan oldin o‘chirilsa, Telegram butun summani xaridorga avtomatik qaytaradi. Shuning uchun reklama postini muddati tugamaguncha o‘chirmang.</p>
      <p>To‘lov turi bo‘yicha blogda aniq maslahat bor: taklif qilingan postlar uchun to‘lovni Toncoin’da olish xavfsizroq, chunki Toncoin to‘lovini xaridor qaytara olmaydi. Stars esa Apple kabi uchinchi tomon provayderlari orqali sotib olinadi. Ular xaridorga 21 kun ichida pulni qaytarishi mumkin, bu esa Stars balansingizdan ushlanishiga olib kelishi mumkin. Manba: <a href={"https://telegram.org/blog/checklists-suggested-posts"} target="_blank" rel="noopener noreferrer">Checklists, Suggested Posts and More</a>.</p>
      <h2 id="muddat-tugagach-yechib-olish-qanday">Muddat tugagach yechib olish qanday bo‘ladi va nimaga e’tibor berish kerak?</h2>
      <p>Shartlarga ko‘ra, Telegram hozircha ijodkorlar mukofotlarini qayta ishlashni to‘liq Fragment’ga topshirgan. Ya’ni yechib olish Fragment orqali o‘tadi. Fragment’dagi ekranlar va tugmalar ketma-ketligi bu maqolada tasdiqlanmagan, shuning uchun quyida faqat umumiy tartib berilgan.</p>
      <Steps>
        <Step title={"Tushum sanasini yozib qo‘ying"}>katta tushum kelgan kunni belgilasangiz, tayyor bo‘lish sanasini hisoblash oson bo‘ladi.</Step>
        <Step title={"21 kun o‘tganini tekshiring"}>Stars mukofoti uchun shartlardagi muddat shu. Gram mukofotiga 2 kun yetadi.</Step>
        <Step title={"Kanal balansini oching"}>ilovada yechib olishga tayyor qism bor-yo‘qligini ko‘ring. Tugma hali ishlamasa, muddat yoki boshqa cheklov tugamagan bo‘lishi mumkin.</Step>
        <Step title={"Fragment orqali davom eting"}>faqat rasmiy <a href={"https://fragment.com"} target="_blank" rel="noopener noreferrer">fragment.com</a> manziliga kiring. Xabarlarda kelgan o‘xshash havolalarga ishonmang.</Step>
        <Step title={"Hamyon manzilini ikki marta tekshiring"}>shartlarga ko‘ra, amalga oshirilgan yechib olishni bekor qilib ham, qaytarib ham bo‘lmaydi. Bitta belgi xato bo‘lsa, mablag‘ boshqa manzilga ketadi.</Step>
        <Step title={"Tranzaksiyani tekshiring"}>mablag‘ hamyonga yetib kelganini blokcheyn eksplorerida ko‘ring. Batafsil: <Link href="/blog/stars-yechish-gram-eksplorerda-tekshirish">Stars yechishni Gram eksplorerida tekshirish</Link>.</Step>
      </Steps>
      <p>Uchinchi tomonlar «tezkor naqdlashtirish» xizmatlarini ham taklif qiladi. Ular qanchalik foydali ekanini <Link href="/blog/gram-earnings-qoldigi-tonnel-cash-out">kanal qoldig‘ini yechish va Cash Out xavflari</Link> maqolasida hisoblab chiqqanmiz.</p>
      <p>Kutish o‘rniga Stars’ni kanal reklamasiga sarflash haqida <Link href="/blog/telegram-ads-stars-sarflash">Stars’ni Telegram Ads’ga sarflash</Link> maqolasini o‘qing. Bu yo‘lning shartlari (chegirma bor-yo‘qligi, kurs, qaysi kanalni reklama qilish mumkinligi) bu maqolada tasdiqlanmagan. Ularni Telegram Ads yoki Fragment sahifasida tekshiring.</p>
      <h2 id="daromadni-21-kunlik-siljish-bilan">Daromadni 21 kunlik siljish bilan qanday rejalashtirish mumkin?</h2>
      <p>Stars’dan pul ishlaydigan kanal uchun kutish muddati kassa rejasining bir qismiga aylanadi. Quyidagi maslahatlar shartlardagi faktlarga tayanadi.</p>
      <ul>
        <li><b>Uch haftalik siljish bilan hisoblang.</b> Bugun boshlangan kampaniya daromadi taxminan 21 kundan keyin yechiladi. Mualliflar haqi yoki reklama xarajatini oy boshiga emas, shu sanaga moslang.</li>
        <li><b>Katta tushumni darhol xarajatga ajratmang.</b> Telegram mukofotni ushlab qolishi yoki ayirishi mumkin. Yechilmagan summaga tayanib qarz olmang va oldindan to‘lov qilmang.</li>
        <li><b>Tez pul kerak bo‘lsa, formatni o‘ylab tanlang.</b> Taklif qilingan postda mukofot 24 soatdan keyin keladi, Toncoin to‘lovini esa xaridor qaytara olmaydi.</li>
        <li><b>Yechilmagan mukofotni cheksiz qoldirmang.</b> Kontent uchun ishlab topilgan Stars 3 yil amal qiladi, Telegram esa yechilmagan mukofotlarga alohida muddat qo‘yishi mumkin.</li>
        <li><b>Oddiy jadval yuriting.</b> Har bir yirik tushum uchun uchta ustun yetadi: tushum sanasi, summa, taxminiy tayyor bo‘lish sanasi. Oy oxirida qaysi summa yechishga tayyorligini bir qarashda ko‘rasiz.</li>
      </ul>
      <h2 id="sotib-olingan-stars-ham-21">Sotib olingan Stars ham 21 kundan keyin yechiladimi?</h2>
      <p>Yo‘q. 21 kunlik qoida ishlab topilgan mukofotlarga tegishli. O‘zingiz sotib olgan Stars — boshqa narsa.</p>
      <p>Stars shartlariga ko‘ra, shaxsiy balansdagi Stars’ni sotish, yechib olish yoki o‘tkazish taqiqlangan. Telegram shaxsiy balansdagi Stars’ni vaqtincha ushlab qolishi yoki butunlay hisobdan chiqarishi ham mumkin. Stars sotuvlari yakuniy: keraksiz yoki tasodifiy xarid uchun Telegram pul qaytarmaydi. Sotib olingan yulduzlar Telegram ichida sarflanadi.</p>
      <p>Ishlab topilgan Stars’ni «botga sotib» tezroq pul qilishning ham iloji yo‘q: StarsPaymee Stars va sovg‘alarni foydalanuvchidan sotib olmaydi.</p>
      <p>Kanal uchun yoki kimgadir sovg‘a qilish uchun Stars kerak bo‘lsa, ularni <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> orqali so‘mda olasiz. Faqat @username kerak, parol yoki SMS kod so‘ralmaydi. Eng kam buyurtma — 50 Stars. Bir dona narxi to‘lov usuliga bog‘liq: UzCard/HUMO kartaga o‘tkazma yoki bot balansidan {som(STARS_PER_UNIT_UZS, "uz")}, Click, Payme, Uzum yoki Paynet orqali {som(STARS_PER_UNIT_GATEWAY_UZS, "uz")}. Buyurtma odatda bir necha soniyada avtomatik yetkaziladi. Narx va shartlar <Link href="/stars">Stars sahifasida</Link>. StarsPaymee mustaqil xizmat, Telegram’ning o‘zi emas. Savol bo‘lsa, <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a> ga yozing.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://telegram.org/tos/content-creator-rewards", label: "Terms of Service for Content Creators" },
          { href: "https://telegram.org/blog/star-messages-gateway-2-0-and-more", label: "Star Messages, Pinned Gifts, Verification Platform 2.0, and More" },
          { href: "https://telegram.org/blog/checklists-suggested-posts", label: "Checklists, Suggested Posts and More Monetization Options for Channels" },
          { href: "https://telegram.org/tos/stars", label: "Terms of Service for Telegram Stars" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "21 kunga dam olish kunlari ham kiradimi yoki faqat ish kunlari hisoblanadimi?", answer: "Shartlarda ish kunlari haqida alohida izoh yo‘q, faqat «21 days» deb yozilgan. Oddiy kalendar kunlar bilan hisoblagan ma’qul, aniq holatni esa ilovadagi kanal balansida tekshiring." },
  { question: "Kecha tushgan Stars’ni bugun yechib olsam bo‘ladimi?", answer: "Yo‘q. Stars balansidagi mukofot 21 kun o‘tmaguncha yechishga tayyor bo‘lmaydi. 2 kunlik muddat faqat Gram balansidagi mukofotlarga tegishli." },
  { question: "Sovg‘ani Stars’ga aylantirdim — u ham 21 kun kutadimi?", answer: "Stars shartlariga ko‘ra, aylantirilgan sovg‘alardan tushgan yulduzlar ijodkorlar shartlariga bo‘ysunadi. U shartlarda esa Stars mukofoti uchun 21 kun belgilangan." },
  { question: "Pullik xabarlardan tushgan Stars ham shu qoidaga bo‘ysunadimi?", answer: "Ha, kelgan pullik xabarlardan yig‘ilgan Stars ham ijodkorlar shartlari doirasiga kiradi. Muddat har bir tushum uchun alohida sanalishi rasman yozilmagan, shuning uchun tayyor qismni ilovada ko‘ring." },
  { question: "Gram balansidagi mukofot nega tezroq, 2 kunda yechiladi?", answer: "Shartlarda faqat «texnik sabablar» deyilgan, batafsil izoh berilmagan. Bu farqni qoida sifatida qabul qilib, rejangizga kiritgan ma’qul." },
  { question: "Kutish davrida balansim kamaydi — bu xatomi?", answer: "Har doim ham emas: Telegram mukofotlarni ushlab qolish va ayirib hisob-kitob qilish huquqini saqlab qoladi. Qaysi tushum o‘zgarganini kanalning tranzaksiyalar tarixida ko‘ring." },
  { question: "Yechib olishni xato manzilga yuborsam, qaytarib olsa bo‘ladimi?", answer: "Yo‘q, shartlarga ko‘ra amalga oshgan yechib olish bekor qilinmaydi va qaytarilmaydi. Hamyon manzilini yuborishdan oldin belgima-belgi solishtiring." },
  { question: "Ishlab topilgan Stars qancha vaqt amal qiladi, yechmasam yo‘qoladimi?", answer: "Kontent uchun ishlab topilgan Stars olingan kundan boshlab 3 yil amal qiladi. Telegram yechilmagan mukofotlarga o‘zi ham muddat qo‘yishi mumkin, shuning uchun ularni uzoq qoldirmang." },
  { question: "O‘zim sotib olgan Stars’ni ham Fragment orqali yechsam bo‘ladimi?", answer: "Yo‘q, shaxsiy balansdagi Stars’ni sotish, yechish yoki o‘tkazish shartlarda taqiqlangan. Ular faqat Telegram ichida sarflanadi." },
  { question: "Ishlab topilgan Stars’ni StarsPaymee botiga sotsa bo‘ladimi?", answer: "Yo‘q, StarsPaymee foydalanuvchilardan na Stars, na sovg‘a sotib oladi. Bot Stars, Premium va sovg‘alarni so‘mda sotadi." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>Если кнопка вывода неактивна, чаще всего это не ошибка. В условиях Telegram для авторов контента сказано, что награды на балансе Stars становятся доступны к выводу через 21 день. Для наград на балансе Gram срок — 2 дня. В блоге Telegram та же цифра: Stars выводятся через 21 день после того, как их заработали. Значит, звёзды, полученные сегодня, вы выведете примерно через три недели.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#nega-yechib-olish-tugmasi-hali", label: "Почему кнопка вывода пока неактивна?" },
          { href: "#stars-va-gram-mukofotlari-uchun", label: "Чем отличаются сроки для наград в Stars и в Gram?" },
          { href: "#21-kun-qaysi-kundan-hisoblanadi", label: "С какого дня считается 21 день: пример по календарю" },
          { href: "#kutish-davrida-stars-balansdan-kamayishi", label: "Могут ли Stars списаться с баланса во время ожидания?" },
          { href: "#ilovada-korinadigan-usd-qiymatiga-ishonsa", label: "Можно ли верить сумме в USD в приложении?" },
          { href: "#taklif-qilingan-postlarda-pul-qachon", label: "Когда приходят деньги за предложенные посты и что выбрать безопаснее?" },
          { href: "#muddat-tugagach-yechib-olish-qanday", label: "Как проходит вывод после окончания срока и на что обратить внимание?" },
          { href: "#daromadni-21-kunlik-siljish-bilan", label: "Как планировать доход с учётом сдвига в 21 день?" },
          { href: "#sotib-olingan-stars-ham-21", label: "Купленные Stars тоже выводятся через 21 день?" },
        ]}
      />
      <h2 id="nega-yechib-olish-tugmasi-hali">Почему кнопка вывода пока неактивна?</h2>
      <p>Главная причина — срок ожидания. В <a href={"https://telegram.org/tos/content-creator-rewards"} target="_blank" rel="noopener noreferrer">условиях для авторов контента</a> об этом сказано прямо: наградам на балансе Stars нужен 21 день. В <a href={"https://telegram.org/blog/star-messages-gateway-2-0-and-more"} target="_blank" rel="noopener noreferrer">блоге Telegram</a> та же цифра: Stars можно вывести через 21 день после заработка.</p>
      <p>Причину источники называют по-разному: в условиях — «технические причины», в блоге — «операционные». Других пояснений Telegram не дал, поэтому гадать о причине не будем. Известно точно одно: срок — 21 день.</p>
      <p>Если канал собирает Stars больше трёх недель, а кнопка всё равно неактивна, причина может быть другой. Например, может действовать минимальная сумма для вывода. Такой порог в официальных источниках не найден, и в этой статье он не подтверждён. Проверьте его в окне баланса канала в приложении или на сайте <a href={"https://fragment.com"} target="_blank" rel="noopener noreferrer">Fragment</a>.</p>
      <h2 id="stars-va-gram-mukofotlari-uchun">Чем отличаются сроки для наград в Stars и в Gram?</h2>
      <p>В условиях для авторов упомянуты два вида баланса, и сроки у них разные.</p>
      <CompareTable
        headers={["Вид баланса", "Когда доступно к выводу", "Срок действия", "Источник"]}
        rows={[
          ["Награда на балансе Gram", "Через 2 дня после даты начисления", "Telegram может установить срок по своему усмотрению", "Условия для авторов"],
          ["Награда на балансе Stars", "Через 21 день", "3 года с даты получения; кроме того, Telegram может установить свой срок", "Условия для авторов, блог Telegram"],
        ]}
      />
      <p>Из таблицы следуют два вывода. Во-первых, награда в Stars выводится заметно медленнее, чем в Gram. Во-вторых, годами не выводить награду в Stars тоже рискованно: у неё есть 3-летний срок, а Telegram оставляет за собой право назначить отдельный срок для невыведенных наград.</p>
      <p>«Баланс Gram» — термин из условий. Как ваш баланс называется в приложении, посмотрите в окне дохода канала.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="21-kun-qaysi-kundan-hisoblanadi">С какого дня считается 21 день: пример по календарю</h2>
      <p>В условиях отправная точка — <b>дата начисления</b> награды. В блоге говорится о моменте, когда Stars были <b>заработаны</b>. На практике это день, когда звёзды пришли на баланс канала.</p>
      <CompareTable
        headers={["Период", "Что происходит"]}
        rows={[
          ["День 0", "Stars поступили на баланс канала"],
          ["Дни 1–20", "Stars видны на балансе, но вывести их пока нельзя"],
          ["День 21", "Stars, поступившие в этот день, становятся доступны к выводу"],
          ["Далее", "Вывод обрабатывается через Fragment"],
        ]}
      />
      <p>Судя по логике условий, каждое поступление считается от своей даты. Но отдельно Telegram этого не пишет — это вывод редакции. Поэтому даты ниже примерные, точную картину проверяйте в приложении.</p>
      <CompareTable
        headers={["Дата поступления", "Награда в Stars доступна примерно", "Если награда в Gram"]}
        rows={[
          ["3 декабря", "24 декабря", "5 декабря"],
          ["15 декабря", "5 января", "17 декабря"],
          ["28 декабря", "18 января", "30 декабря"],
        ]}
      />
      <p>Если расчёт верен, месячный доход открывается не в один день, а частями. Поступления начала декабря станут доступны до конца года, а конца декабря — уже во второй половине января.</p>
      <p>Какие поступления подпадают под эти условия? В условиях Stars сказано прямо: звёзды от входящих платных сообщений и от подарков, обменянных на Stars, регулируются условиями для авторов. Как обменять подарок на звёзды, читайте в статье <Link href="/blog/telegram-gift-stars-ga-aylantirish">о конвертации подарка в Stars</Link>. О том, какими способами канал может собирать Stars, — в материале <Link href="/blog/telegram-kanal-stars-monetizatsiya">о монетизации канала через Stars</Link>.</p>
      <h2 id="kutish-davrida-stars-balansdan-kamayishi">Могут ли Stars списаться с баланса во время ожидания?</h2>
      <p>Да, условия это допускают. Баланс в период ожидания пока не стоит считать «деньгами на руках».</p>
      <ul>
        <li><b>Удержание и зачёт.</b> Telegram оставляет за собой право частично или полностью удержать награды. Он также может провести зачёт (offset), вычтя Gram или Stars из причитающейся вам награды.</li>
        <li><b>Правовой статус баланса.</b> По условиям, баланс канала не считается вашими средствами, которые Telegram хранит от вашего имени на депозите или в кастодиальном хранении.</li>
        <li><b>Причины не указываются.</b> Конкретных оснований для удержания или зачёта условия не перечисляют. Поэтому любое изменение придётся проверять самому по истории.</li>
      </ul>
      <p>Невыведенная сумма — это пока лишь ожидаемый доход. Если баланс неожиданно уменьшился, сначала откройте историю транзакций канала: там видно, какое поступление и когда изменилось.</p>
      <h2 id="ilovada-korinadigan-usd-qiymatiga-ishonsa">Можно ли верить сумме в USD в приложении?</h2>
      <p>Рядом с балансом канала показывается примерная сумма в долларах. По условиям, она отображается только для удобства. Это не гарантированная цена и не предложение обмена. Относительная стоимость баланса канала со временем может меняться.</p>
      <p>Значит, за 21 день ожидания долларовая сумма на экране может колебаться. Цифра, которую вы видите сегодня, через три недели может оказаться другой.</p>
      <Notice label={"Важно"}>Цифра на экране — ориентир, а не обещание. Не планируйте аренду, рекламный бюджет или гонорары авторам по сумме в USD. Ориентируйтесь на сумму, которая уже выведена и пришла в ваш кошелёк.</Notice>
      <h2 id="taklif-qilingan-postlarda-pul-qachon">Когда приходят деньги за предложенные посты и что выбрать безопаснее?</h2>
      <p>В формате предложенных постов (suggested posts) рекламодатель сам предлагает каналу публикацию. Здесь сроки другие.</p>
      <p>По данным блога Telegram, владелец канала получает награду через 24 часа после публикации. Если награда пришла в Stars, проверьте на балансе в приложении, как к её выводу применяется правило 21 дня.</p>
      <p>Если пост удалить раньше оговорённого срока, Telegram автоматически вернёт покупателю всю сумму. Поэтому не удаляйте рекламный пост, пока срок не истёк.</p>
      <p>О способе оплаты в блоге есть прямой совет: принимать оплату за предложенные посты в Toncoin безопаснее, потому что покупатель не может вернуть платёж в Toncoin. Stars же покупают через сторонних провайдеров вроде Apple. Те могут вернуть покупателю деньги в течение 21 дня, а это может привести к списанию Stars с вашего баланса. Источник: <a href={"https://telegram.org/blog/checklists-suggested-posts"} target="_blank" rel="noopener noreferrer">Checklists, Suggested Posts and More</a>.</p>
      <h2 id="muddat-tugagach-yechib-olish-qanday">Как проходит вывод после окончания срока и на что обратить внимание?</h2>
      <p>По условиям, сейчас Telegram полностью передал обработку наград авторов Fragment. То есть вывод идёт через Fragment. Экраны и порядок кнопок на Fragment в этой статье не подтверждены, поэтому ниже — только общий порядок действий.</p>
      <Steps>
        <Step title={"Запишите дату поступления"}>если отметить день крупного поступления, дату готовности легко посчитать.</Step>
        <Step title={"Проверьте, прошёл ли 21 день"}>это срок из условий для наград в Stars. Награде в Gram хватает 2 дней.</Step>
        <Step title={"Откройте баланс канала"}>посмотрите в приложении, есть ли часть, доступная к выводу. Если кнопка ещё не работает, возможно, не закончился срок или действует другое ограничение.</Step>
        <Step title={"Продолжите через Fragment"}>заходите только на официальный адрес <a href={"https://fragment.com"} target="_blank" rel="noopener noreferrer">fragment.com</a>. Не доверяйте похожим ссылкам из сообщений.</Step>
        <Step title={"Дважды проверьте адрес кошелька"}>по условиям, совершённый вывод нельзя ни отменить, ни вернуть. Ошибка в одном символе — и средства уйдут на чужой адрес.</Step>
        <Step title={"Проверьте транзакцию"}>убедитесь в блокчейн-эксплорере, что средства дошли до кошелька. Подробнее: <Link href="/blog/stars-yechish-gram-eksplorerda-tekshirish">как проверить вывод Stars в эксплорере Gram</Link>.</Step>
      </Steps>
      <p>Сторонние сервисы предлагают и «быстрое обналичивание». Насколько это выгодно, мы посчитали в статье <Link href="/blog/gram-earnings-qoldigi-tonnel-cash-out">о выводе остатка канала и рисках Cash Out</Link>.</p>
      <p>О том, чтобы не ждать, а потратить Stars на рекламу канала, читайте в материале <Link href="/blog/telegram-ads-stars-sarflash">о расходе Stars в Telegram Ads</Link>. Условия этого способа (есть ли скидка, какой курс, какой канал можно продвигать) в этой статье не подтверждены. Проверьте их на страницах Telegram Ads или Fragment.</p>
      <h2 id="daromadni-21-kunlik-siljish-bilan">Как планировать доход с учётом сдвига в 21 день?</h2>
      <p>Для канала, который зарабатывает на Stars, срок ожидания становится частью кассового плана. Советы ниже опираются на факты из условий.</p>
      <ul>
        <li><b>Считайте со сдвигом в три недели.</b> Доход от кампании, запущенной сегодня, выводится примерно через 21 день. Привязывайте гонорары авторам и рекламные расходы к этой дате, а не к началу месяца.</li>
        <li><b>Не расписывайте крупное поступление сразу на расходы.</b> Telegram может удержать или зачесть награду. Не берите в долг и не платите авансом в расчёте на невыведенную сумму.</li>
        <li><b>Если деньги нужны быстро, выбирайте формат с умом.</b> За предложенный пост награда приходит через 24 часа, а платёж в Toncoin покупатель вернуть не может.</li>
        <li><b>Не оставляйте невыведенную награду бессрочно.</b> Stars, заработанные за контент, действуют 3 года, а Telegram может назначить невыведенным наградам отдельный срок.</li>
        <li><b>Ведите простую таблицу.</b> Для каждого крупного поступления хватит трёх столбцов: дата, сумма, примерная дата готовности. В конце месяца сразу видно, какая сумма доступна к выводу.</li>
      </ul>
      <h2 id="sotib-olingan-stars-ham-21">Купленные Stars тоже выводятся через 21 день?</h2>
      <p>Нет. Правило 21 дня касается заработанных наград. Звёзды, которые вы купили сами, — другое дело.</p>
      <p>По условиям Stars, продавать, выводить или передавать Stars с личного баланса запрещено. Telegram может временно удержать Stars на личном балансе или окончательно их списать. Продажа Stars окончательна: за ненужную или случайную покупку Telegram деньги не возвращает. Купленные звёзды тратятся внутри Telegram.</p>
      <p>Быстро превратить заработанные Stars в деньги, «продав их боту», тоже не выйдет: StarsPaymee не покупает Stars и подарки у пользователей.</p>
      <p>Если Stars нужны для канала или в подарок, их можно купить в сумах через <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>. Нужен только @username, пароль и SMS-код не запрашиваются. Минимальный заказ — 50 Stars. Цена за одну звезду зависит от способа оплаты: переводом на карту UzCard/HUMO или с баланса бота — {som(STARS_PER_UNIT_UZS, "ru")}, через Click, Payme, Uzum или Paynet — {som(STARS_PER_UNIT_GATEWAY_UZS, "ru")}. Заказ обычно доставляется автоматически за несколько секунд. Цены и условия — на <Link href="/stars">странице Stars</Link>. StarsPaymee — независимый сервис, а не сам Telegram. Если остались вопросы, напишите в <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://telegram.org/tos/content-creator-rewards", label: "Terms of Service for Content Creators" },
          { href: "https://telegram.org/blog/star-messages-gateway-2-0-and-more", label: "Star Messages, Pinned Gifts, Verification Platform 2.0, and More" },
          { href: "https://telegram.org/blog/checklists-suggested-posts", label: "Checklists, Suggested Posts and More Monetization Options for Channels" },
          { href: "https://telegram.org/tos/stars", label: "Terms of Service for Telegram Stars" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "21 день — это с выходными или только рабочие дни?", answer: "Отдельного уточнения про рабочие дни в условиях нет, там написано просто «21 days». Разумнее считать обычные календарные дни, а точную картину проверять на балансе канала в приложении." },
  { question: "Можно ли сегодня вывести Stars, которые пришли вчера?", answer: "Нет. Награда на балансе Stars не будет доступна к выводу, пока не пройдёт 21 день. Срок в 2 дня относится только к наградам на балансе Gram." },
  { question: "Я обменял подарок на Stars — эти звёзды тоже ждут 21 день?", answer: "По условиям Stars, звёзды от обменянных подарков регулируются условиями для авторов. А там для наград в Stars установлен срок 21 день." },
  { question: "Действует ли это правило на Stars от платных сообщений?", answer: "Да, звёзды от входящих платных сообщений тоже подпадают под условия для авторов. Официально не сказано, что срок считается отдельно для каждого поступления, поэтому доступную часть смотрите в приложении." },
  { question: "Почему награду в Gram можно вывести быстрее, за 2 дня?", answer: "В условиях упомянуты лишь «технические причины», подробностей нет. Лучше принять эту разницу как правило и учесть её в своём плане." },
  { question: "Во время ожидания баланс уменьшился — это ошибка?", answer: "Не обязательно: Telegram оставляет за собой право удерживать награды и проводить зачёт. Какое поступление изменилось, видно в истории транзакций канала." },
  { question: "Если я отправил вывод не на тот адрес, деньги можно вернуть?", answer: "Нет, по условиям совершённый вывод не отменяется и не возвращается. Перед отправкой сверьте адрес кошелька посимвольно." },
  { question: "Сколько действуют заработанные Stars и сгорят ли они, если их не выводить?", answer: "Stars, заработанные за контент, действуют 3 года с даты получения. Telegram может и сам установить срок для невыведенных наград, так что надолго их не оставляйте." },
  { question: "Можно ли вывести через Fragment звёзды, которые я купил сам?", answer: "Нет, продавать, выводить и передавать Stars с личного баланса условия запрещают. Их можно потратить только внутри Telegram." },
  { question: "Можно ли продать заработанные Stars боту StarsPaymee?", answer: "Нет, StarsPaymee не покупает у пользователей ни Stars, ни подарки. Бот продаёт Stars, Premium и подарки за сумы." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>A greyed-out “Withdraw” button usually isn’t a bug. Telegram’s Terms of Service for Content Creators say Stars balance rewards become available for withdrawal after 21 days. For Gram balance rewards, it’s 2 days. Telegram’s blog gives the same 21 days for Stars. So Stars that land today can be withdrawn about three weeks from now.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#nega-yechib-olish-tugmasi-hali", label: "Why isn’t the “Withdraw” button active yet?" },
          { href: "#stars-va-gram-mukofotlari-uchun", label: "How do the holding periods differ for Stars and Gram rewards?" },
          { href: "#21-kun-qaysi-kundan-hisoblanadi", label: "When does the 21-day clock start? A calendar example" },
          { href: "#kutish-davrida-stars-balansdan-kamayishi", label: "Can Stars disappear from your balance during the hold?" },
          { href: "#ilovada-korinadigan-usd-qiymatiga-ishonsa", label: "Can you trust the USD value shown in the app?" },
          { href: "#taklif-qilingan-postlarda-pul-qachon", label: "When do suggested posts pay out, and which payment is safer?" },
          { href: "#muddat-tugagach-yechib-olish-qanday", label: "How does withdrawal work once the hold ends, and what should you watch for?" },
          { href: "#daromadni-21-kunlik-siljish-bilan", label: "How do you plan channel income around a 21-day delay?" },
          { href: "#sotib-olingan-stars-ham-21", label: "Do purchased Stars also become withdrawable after 21 days?" },
        ]}
      />
      <h2 id="nega-yechib-olish-tugmasi-hali">Why isn’t the “Withdraw” button active yet?</h2>
      <p>The main reason is the holding period. The <a href={"https://telegram.org/tos/content-creator-rewards"} target="_blank" rel="noopener noreferrer">Terms of Service for Content Creators</a> state it plainly: Stars balance rewards require 21 days. The <a href={"https://telegram.org/blog/star-messages-gateway-2-0-and-more"} target="_blank" rel="noopener noreferrer">Telegram blog</a> gives the same number: Stars can be withdrawn 21 days after they are earned.</p>
      <p>The two sources word the reason differently. The terms say “technical reasons” and the blog says “operational reasons.” Telegram doesn’t explain further, so we won’t guess at the cause. What we do know is that the period is 21 days.</p>
      <p>If your channel has been collecting Stars for more than three weeks and the button still doesn’t work, something else may be going on. For example, there might be a minimum withdrawal amount. We couldn’t find any such threshold in official sources, and this article doesn’t confirm one. Check the channel balance screen in the app or the <a href={"https://fragment.com"} target="_blank" rel="noopener noreferrer">Fragment</a> website.</p>
      <h2 id="stars-va-gram-mukofotlari-uchun">How do the holding periods differ for Stars and Gram rewards?</h2>
      <p>The creator terms describe two kinds of balance, and each has its own timing.</p>
      <CompareTable
        headers={["Balance type", "Available for withdrawal", "Validity", "Source"]}
        rows={[
          ["Gram balance reward", "2 days after the date it was accrued", "Telegram may set an expiration date at its own discretion", "Terms for Content Creators"],
          ["Stars balance reward", "After 21 days", "3 years from the date received, and Telegram may also set its own expiration date", "Terms for Content Creators, Telegram blog"],
        ]}
      />
      <p>The table tells you two things. First, Stars rewards take much longer to withdraw than Gram rewards. Second, leaving Stars rewards untouched for years is risky too. They’re valid for 3 years, and Telegram also reserves the right to set its own expiration date on unredeemed rewards.</p>
      <p>“Gram balance” is the term used in the terms. To see what your balance is called in the app, open your channel’s earnings screen.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="21-kun-qaysi-kundan-hisoblanadi">When does the 21-day clock start? A calendar example</h2>
      <p>The terms measure from the date a reward was <b>accrued</b>. The blog talks about when Stars are <b>earned</b>. In practice, that means the day the Stars reached your channel balance.</p>
      <CompareTable
        headers={["Period", "What happens"]}
        rows={[
          ["Day 0", "Stars arrive on the channel balance"],
          ["Days 1–20", "Stars show on the balance but can’t be withdrawn yet"],
          ["Day 21", "Stars that arrived on day 0 can now be withdrawn"],
          ["After that", "Withdrawal is processed through Fragment"],
        ]}
      />
      <p>The way the terms are written suggests each payment is counted from its own date. Telegram doesn’t say so outright, though. That’s our editorial reading. Treat the dates below as estimates and check the app for your exact status.</p>
      <CompareTable
        headers={["Date received", "Stars reward ready around", "If it’s a Gram reward"]}
        rows={[
          ["December 3", "December 24", "December 5"],
          ["December 15", "January 5", "December 17"],
          ["December 28", "January 18", "December 30"],
        ]}
      />
      <p>If this reading is correct, a month’s earnings won’t unlock on a single day. They’ll unlock in batches. Early-December income is ready before the year ends, while late-December income slips into the second half of January.</p>
      <p>Which income falls under these terms? The Stars terms are specific: Stars from incoming paid messages and from converted gifts are covered by the Terms of Service for Content Creators. For how gift conversion works, see <Link href="/blog/telegram-gift-stars-ga-aylantirish">converting a gift into Stars</Link>. For the ways a channel can earn Stars, see <Link href="/blog/telegram-kanal-stars-monetizatsiya">Stars monetization for channels</Link>.</p>
      <h2 id="kutish-davrida-stars-balansdan-kamayishi">Can Stars disappear from your balance during the hold?</h2>
      <p>Yes, the terms allow for it. Don’t count a balance that’s still on hold as money you already have.</p>
      <ul>
        <li><b>Withholding and offsetting.</b> Telegram reserves the right to withhold rewards partially or in full. It can also offset your rewards by deducting Grams or Stars.</li>
        <li><b>Legal status of the balance.</b> Under the terms, your channel balance isn’t funds that Telegram holds in deposit or custody for you.</li>
        <li><b>No reasons listed.</b> The terms don’t say when withholding or deductions might happen. You’ll need to check any change against your own history.</li>
      </ul>
      <p>Until you withdraw it, the amount is only expected income. If your balance drops unexpectedly, start with the channel’s transaction history. It shows which payment changed and on what date.</p>
      <h2 id="ilovada-korinadigan-usd-qiymatiga-ishonsa">Can you trust the USD value shown in the app?</h2>
      <p>The app shows an estimated dollar amount next to your channel balance. According to the terms, that figure is for convenience only. It isn’t a guaranteed price or an exchange offer. The relative value of your channel balance may also change over time.</p>
      <p>So the dollar amount can move during the 21-day hold. The number you see today may not match what you see three weeks later.</p>
      <Notice label={"Important"}>Treat the number on screen as a rough guide, not a promise. Don’t base rent, an ad budget or author fees on the USD figure. Go by the amount that actually reaches your wallet after you withdraw.</Notice>
      <h2 id="taklif-qilingan-postlarda-pul-qachon">When do suggested posts pay out, and which payment is safer?</h2>
      <p>With suggested posts, an advertiser proposes a post to your channel. The timeline here works differently.</p>
      <p>According to Telegram’s blog, the channel owner receives the reward 24 hours after the post goes live. If the reward is in Stars, check your balance in the app to see how the 21-day rule applies when you withdraw it.</p>
      <p>If the post is deleted before the agreed period ends, Telegram automatically returns the full amount to the buyer. So don’t delete an ad post before its term is up.</p>
      <p>The blog also gives clear advice on payment type. Accepting payment for suggested posts in Toncoin is safer, because the buyer can’t refund a Toncoin payment. Stars, on the other hand, are bought through third-party providers like Apple. Those providers may refund buyers within 21 days, which can lead to Stars being deducted from your balance. Source: <a href={"https://telegram.org/blog/checklists-suggested-posts"} target="_blank" rel="noopener noreferrer">Checklists, Suggested Posts and More</a>.</p>
      <h2 id="muddat-tugagach-yechib-olish-qanday">How does withdrawal work once the hold ends, and what should you watch for?</h2>
      <p>The terms say Telegram currently outsources the processing of all content creator rewards to Fragment, so withdrawals go through Fragment. This article doesn’t confirm Fragment’s exact screens and button order, so here’s only the general sequence.</p>
      <Steps>
        <Step title={"Note the date a payment arrived"}>If you mark the day a large payment came in, it’s easy to work out when it will be ready.</Step>
        <Step title={"Check that 21 days have passed"}>That’s the period in the terms for Stars rewards. Gram rewards need only 2 days.</Step>
        <Step title={"Open your channel balance"}>See whether the app shows any amount ready to withdraw. If the button still doesn’t work, the hold or some other restriction may not be over yet.</Step>
        <Step title={"Continue through Fragment"}>Only use the official <a href={"https://fragment.com"} target="_blank" rel="noopener noreferrer">fragment.com</a> address. Don’t trust lookalike links sent in messages.</Step>
        <Step title={"Double-check your wallet address"}>Under the terms, a completed withdrawal can’t be reversed or refunded. One wrong character and the funds go to someone else’s address.</Step>
        <Step title={"Verify the transaction"}>Confirm in a blockchain explorer that the funds reached your wallet. Details: <Link href="/blog/stars-yechish-gram-eksplorerda-tekshirish">checking a Stars withdrawal in the Gram explorer</Link>.</Step>
      </Steps>
      <p>Third parties also offer “instant cash-out” services. We’ve worked out whether they’re worth it in <Link href="/blog/gram-earnings-qoldigi-tonnel-cash-out">cashing out a channel balance and the risks of Cash Out</Link>.</p>
      <p>If you’d rather spend Stars on channel ads than wait, read <Link href="/blog/telegram-ads-stars-sarflash">spending Stars on Telegram Ads</Link>. This article doesn’t confirm the terms for that route, such as whether there’s a discount, the rate used, or which channels you can promote. Check them on the Telegram Ads or Fragment pages.</p>
      <h2 id="daromadni-21-kunlik-siljish-bilan">How do you plan channel income around a 21-day delay?</h2>
      <p>If your channel earns Stars, the holding period becomes part of your cash-flow planning. The tips below are based on what the terms actually say.</p>
      <ul>
        <li><b>Plan with a three-week lag.</b> Income from a campaign that starts today can be withdrawn roughly 21 days later. Schedule author fees and ad spend around that date, not the start of the month.</li>
        <li><b>Don’t earmark a big payment for spending right away.</b> Telegram can withhold or deduct rewards. Don’t borrow money or pay anything upfront against an amount you haven’t withdrawn.</li>
        <li><b>If you need money fast, pick the format carefully.</b> With suggested posts, the reward arrives after 24 hours, and the buyer can’t refund a Toncoin payment.</li>
        <li><b>Don’t leave unwithdrawn rewards sitting forever.</b> Stars earned from content are valid for 3 years, and Telegram can set its own expiration date on unredeemed rewards.</li>
        <li><b>Keep a simple spreadsheet.</b> Three columns per large payment are enough: date received, amount and estimated ready date. At the end of the month you’ll see at a glance what’s ready to withdraw.</li>
      </ul>
      <h2 id="sotib-olingan-stars-ham-21">Do purchased Stars also become withdrawable after 21 days?</h2>
      <p>No. The 21-day rule applies to rewards you earn. Stars you buy yourself are a different matter.</p>
      <p>Under the Stars terms, you can’t sell, withdraw or transfer Stars in your personal balance. Telegram can also temporarily withhold Stars from your personal balance or permanently debit them. All Stars sales are final, and Telegram doesn’t refund unwanted or accidental purchases. Stars you buy are spent inside Telegram.</p>
      <p>You can’t turn earned Stars into cash faster by “selling them to a bot” either. StarsPaymee doesn’t buy Stars or gifts from users.</p>
      <p>If you need Stars for your channel or as a gift for someone, you can buy them in Uzbek som through <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>. All you need is the @username. You’ll never be asked for a password or SMS code. The minimum order is 50 Stars. The price per Star depends on how you pay: {som(STARS_PER_UNIT_UZS, "en")} by UzCard/HUMO card transfer or from your bot balance, and {som(STARS_PER_UNIT_GATEWAY_UZS, "en")} via Click, Payme, Uzum or Paynet. Orders are usually delivered automatically within a few seconds. Prices and terms are on the <Link href="/stars">Stars page</Link>. StarsPaymee is an independent service, not part of Telegram. If you have questions, message <a href={"https://t.me/StarsPaymeeSupport"} target="_blank" rel="noopener noreferrer">@StarsPaymeeSupport</a>.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://telegram.org/tos/content-creator-rewards", label: "Terms of Service for Content Creators" },
          { href: "https://telegram.org/blog/star-messages-gateway-2-0-and-more", label: "Star Messages, Pinned Gifts, Verification Platform 2.0, and More" },
          { href: "https://telegram.org/blog/checklists-suggested-posts", label: "Checklists, Suggested Posts and More Monetization Options for Channels" },
          { href: "https://telegram.org/tos/stars", label: "Terms of Service for Telegram Stars" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Do weekends count toward the 21 days, or only business days?", answer: "The terms only say “21 days” and don’t mention business days. Calendar days are the safer assumption, but your channel balance in the app will show your actual status." },
  { question: "Stars landed yesterday. Can I withdraw them today?", answer: "No. A Stars balance reward can’t be withdrawn until 21 days have passed. The 2-day period only applies to Gram balance rewards." },
  { question: "I converted a gift into Stars. Do those Stars wait 21 days too?", answer: "Under the Stars terms, Stars from converted gifts are covered by the creator terms. Those terms set 21 days for Stars rewards." },
  { question: "Are Stars from paid messages covered by the same rule?", answer: "Yes. Stars from incoming paid messages also fall under the creator terms. Telegram doesn’t officially say each payment is counted separately, so check the app to see which part is ready." },
  { question: "Why are Gram rewards faster, at just 2 days?", answer: "The terms only mention “technical reasons” and don’t explain further. It’s best to accept the difference as a rule and build it into your plans." },
  { question: "My balance went down during the hold. Is that a mistake?", answer: "Not always. Telegram reserves the right to withhold rewards and offset them by deducting Grams or Stars. Your channel’s transaction history shows which payment changed." },
  { question: "If I withdraw to the wrong address, can I get the funds back?", answer: "No. Under the terms, a completed withdrawal can’t be reversed or refunded. Compare the wallet address character by character before you send." },
  { question: "How long are earned Stars valid? Will I lose them if I don’t withdraw?", answer: "Stars earned from content are valid for 3 years from the date you received them. Telegram can also set its own expiration date on unredeemed rewards, so don’t leave them for too long." },
  { question: "Can I withdraw Stars I bought myself through Fragment?", answer: "No. The terms don’t allow you to sell, withdraw or transfer Stars in your personal balance. You can only spend them inside Telegram." },
  { question: "Can I sell my earned Stars to the StarsPaymee bot?", answer: "No. StarsPaymee doesn’t buy Stars or gifts from users. The bot sells Stars, Premium and gifts for Uzbek som." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "howto",
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  keywords: ["telegram stars 21 kunlik kutish muddati","stars qachon yechiladi","telegram stars yechib olish","kanal stars daromadini yechish","stars yechib olish tugmasi faol emas","gram mukofoti 2 kun","fragment stars yechish","telegram stars 21 день вывод","когда можно вывести telegram stars","вывод звезд telegram канал","telegram stars холд 21 день","вывод stars через fragment"],
  howToSteps: [
    { name: "Tushum sanasini yozib qo‘ying", text: "katta tushum kelgan kunni belgilasangiz, tayyor bo‘lish sanasini hisoblash oson bo‘ladi." },
    { name: "21 kun o‘tganini tekshiring", text: "Stars mukofoti uchun shartlardagi muddat shu. Gram mukofotiga 2 kun yetadi." },
    { name: "Kanal balansini oching", text: "ilovada yechib olishga tayyor qism bor-yo‘qligini ko‘ring. Tugma hali ishlamasa, muddat yoki boshqa cheklov tugamagan bo‘lishi mumkin." },
    { name: "Fragment orqali davom eting", text: "faqat rasmiy fragment.com manziliga kiring. Xabarlarda kelgan o‘xshash havolalarga ishonmang." },
    { name: "Hamyon manzilini ikki marta tekshiring", text: "shartlarga ko‘ra, amalga oshirilgan yechib olishni bekor qilib ham, qaytarib ham bo‘lmaydi. Bitta belgi xato bo‘lsa, mablag‘ boshqa manzilga ketadi." },
    { name: "Tranzaksiyani tekshiring", text: "mablag‘ hamyonga yetib kelganini blokcheyn eksplorerida ko‘ring. Batafsil: Stars yechishni Gram eksplorerida tekshirish." },
  ],
  locales: {
    uz: {
      title: "Telegram Stars 21 kunlik kutish muddati: Stars qachon yechiladi?",
      excerpt: "Kanal balansidagi Stars mukofoti tushganidan 21 kun o‘tib, Gram balansidagi mukofot esa 2 kunda yechishga tayyor bo‘ladi. Maqolada sana hisobi, kutish davridagi xavflar va daromad rejasi bor.",
      metaTitle: "Telegram Stars 21 kunlik kutish muddati",
      metaDescription: "Kanal balansidagi Stars mukofoti tushganidan 21 kun o‘tib, Gram balansidagi mukofot esa 2 kunda yechishga tayyor bo‘ladi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Вывод Telegram Stars через 21 день: когда звёзды можно вывести?",
      excerpt: "Награды в Stars на балансе канала становятся доступны к выводу через 21 день, а награды на балансе Gram — через 2 дня. Внутри: расчёт дат, риски периода ожидания и план дохода.",
      metaTitle: "Вывод Telegram Stars через 21 день",
      metaDescription: "Награды в Stars на балансе канала становятся доступны к выводу через 21 день, а награды на балансе Gram — через 2 дня.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Telegram Stars 21-day hold: when can you withdraw your Stars?",
      excerpt: "How long Telegram holds earned Stars and Gram rewards before withdrawal, how to work out your payout date, what can go wrong during the wait, and how to plan channel income around it.",
      metaTitle: "Telegram Stars 21-day hold",
      metaDescription: "How long Telegram holds earned Stars and Gram rewards before withdrawal, how to work out your payout date, what can go wrong during the wait, and how to plan…",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
