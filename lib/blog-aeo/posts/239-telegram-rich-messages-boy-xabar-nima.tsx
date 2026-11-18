import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Notice, Sources, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-rich-messages-boy-xabar-nima";

/**
 * Telegram Rich Messages nima: boy xabar Telegraph o‘rnini bosadimi?
 *
 * Avtoblogyoz yasagan maqola (2026-11-18): kanal postidan yoki g'oyadan, faktlar rasmiy manbalardan.
 * Niyat: Telegram'da uzun maqola yoki qo'llanma yozadigan bloger va kanal admini «telegram rich messages nima» so'rovi bilan qidiradi. U boy xabarlarda nimalar bor (bloklar, jadval, media), Telegraph o'rnida ishlatsa bo'ladimi va buning uchun Premium olish kerakmi — shuni bilmoqchi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-11-18):
 *   https://telegram.org/faq
 *   https://telegram.org/blog/communities-editor-invisible-messages
 *   https://telegram.org/blog/watch-apps-and-more
 *   https://core.telegram.org/bots/api
 *   https://core.telegram.org/api/config
 *
 * Narxlar konstantalardan: lib/products.ts (qo'lda raqam yozilmagan).
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/\u202f/g, "\u00a0");
const som = (n: number, locale: Locale) => `${fmt(n, locale)} ${{ uz: "so‘m", ru: "сум", en: "som" }[locale]}`;
const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.priceUzs ?? 0;

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return <p>«Rich Messages» yoki «boy xabar» deb Telegram’dagi Rich Text Editor muharririda yozilgan xabarni aytishadi. Unda sarlavha, jadval, ro‘yxat, iqtibos va kod bloki bo‘ladi, rasm va videoni esa matn o‘rtasiga qo‘yish mumkin. Bitta xabarga 32 768 belgigacha sig‘adi. Kanal ichida o‘qiladigan qo‘llanma uchun u ko‘pincha Telegraph o‘rnini bosadi. Lekin hozircha bunday xabarni faqat Premium foydalanuvchi yoza oladi.</p>;
}

function UzBody() {
  return (
    <>
      <Toc
        label={"Mundarija"}
        items={[
          { href: "#telegramda-boy-xabar-nima-va", label: "Telegram’da «boy xabar» nima va oddiy postdan nimasi bilan farq qiladi?" },
          { href: "#boy-xabarga-qaysi-bloklarni-qoysa", label: "Boy xabarga qaysi bloklarni qo‘ysa bo‘ladi va ular nimaga kerak?" },
          { href: "#kanallarda-aylanayotgan-limit-raqamlariga-ishonsa", label: "Kanallarda aylanayotgan limit raqamlariga ishonsa bo‘ladimi?" },
          { href: "#boy-xabar-yozish-uchun-premium", label: "Boy xabar yozish uchun Premium kerakmi?" },
          { href: "#muharrirni-qanday-ochib-birinchi-maqolani", label: "Muharrirni qanday ochib, birinchi maqolani yozish mumkin?" },
          { href: "#telegraph-orniga-boy-xabar-qachon", label: "Telegraph o‘rniga boy xabar: qachon mos, qachon yo‘q?" },
          { href: "#eski-telegraph-maqolasini-boy-xabarga", label: "Eski Telegraph maqolasini boy xabarga qanday ko‘chirish mumkin?" },
          { href: "#postlarni-bot-orqali-avtomatik-chiqarsangiz", label: "Postlarni bot orqali avtomatik chiqarsangiz nima o‘zgaradi?" },
          { href: "#skrinshot-ostidagi-izoh-maqola-ornini", label: "Skrinshot ostidagi izoh maqola o‘rnini bosadimi?" },
          { href: "#muharrir-uchun-premium-kimga-kerak", label: "Muharrir uchun Premium kimga kerak va uni so‘mda qanday ulash mumkin?" },
        ]}
      />
      <h2 id="telegramda-boy-xabar-nima-va">Telegram’da «boy xabar» nima va oddiy postdan nimasi bilan farq qiladi?</h2>
      <p>Oddiy post bitta yaxlit matndan iborat, rasm yoki video esa uning ustida turadi. Boy xabar maqolaga o‘xshab bo‘limlarga bo‘linadi. <a href={"https://telegram.org/blog/communities-editor-invisible-messages"} target="_blank" rel="noopener noreferrer">Telegram e’loniga</a> ko‘ra muharrir sarlavha, jadval, ro‘yxat, iqtibos va kod bloklarini qo‘llaydi, rasm va videoni xabar o‘rtasiga qo‘yishga ham imkon beradi. Shunda skrinshot post boshida emas, o‘zi tushuntirayotgan qadam yonida turadi.</p>
      <p>Hajmi haqida: <a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a>’da bitta xabarga 32 768 belgigacha sig‘ishi yozilgan. Muharrir haqidagi e’londa ham xuddi shu raqam keltirilgan.</p>
      <p>Nomi haqida qisqacha. Telegram’ning rasmiy sahifalarida bu vosita <b>Rich Text Editor</b> deb ataladi. «Rich Messages» va «boy xabar» esa foydalanuvchilar orasida tarqalgan nom. Ikkalasi ham bir narsani bildiradi: muharrirda yozilgan, maqolaga o‘xshash xabar.</p>
      <p>Blogerga foydasi shuki, obunachi qo‘llanmani o‘qish uchun kanaldan chiqib, boshqa sahifani ochmaydi. Sarlavha, jadval va skrinshot lentadagi bitta xabar ichida turadi.</p>
      <h2 id="boy-xabarga-qaysi-bloklarni-qoysa">Boy xabarga qaysi bloklarni qo‘ysa bo‘ladi va ular nimaga kerak?</h2>
      <p>Blok turlari rasmiy e’londagi ro‘yxatdan olingan, misollar esa turli mavzudagi kanallar uchun.</p>
      <CompareTable
        headers={["Blok turi", "Bloger uchun misol", "Qachon asqotadi"]}
        rows={[
          ["Sarlavha", "IT-darslik kanalida «O‘rnatish», «Sozlash», «Xatolar» bo‘limlari", "Matn bir nechta mavzuga bo‘linganda"],
          ["Jadval", "Onlayn do‘konning qaytarish qoidalari: mahsulot turi, muddat, shart", "Variantlarni yonma-yon solishtirish kerak bo‘lganda"],
          ["Ro‘yxat", "Retsept kanalida masalliqlar va tayyorlash bosqichlari", "Qadamlar va chek-listlarda"],
          ["Iqtibos", "Sayohat kanalida mehmonxona haqidagi sharhdan parcha", "Birovning fikri yoki manbadan parcha keltirilganda"],
          ["Kod bloki", "Dasturchi kanalida terminal buyrug‘i yoki sozlama satri", "O‘quvchi matnni aynan ko‘chirib olishi kerak bo‘lganda"],
          ["Matn o‘rtasidagi rasm yoki video", "Ilovani sozlash yo‘riqnomasida har qadam yonidagi skrinshot", "Ko‘rsatish tushuntirishdan osonroq bo‘lganda"],
        ]}
      />
      <p>Har bir maqolaga hamma blok turini qo‘shish shart emas. Sarlavhalar o‘quvchiga kerakli joyni tez topishga yordam beradi. Ko‘pchilik postni telefonda o‘qiydi, shuning uchun jadval tor bo‘lgani yaxshi: ustunlar kam, kataklardagi matn qisqa. Uzun izohni jadvaldan chiqarib, uning ostiga oddiy matn qilib yozing.</p>
      <InlineCta text={"Telegram Stars, Premium yoki sovg‘ani so‘mda oling — faqat @username kerak, buyurtma bir necha soniyada yetadi."} />
      <h2 id="kanallarda-aylanayotgan-limit-raqamlariga-ishonsa">Kanallarda aylanayotgan limit raqamlariga ishonsa bo‘ladimi?</h2>
      <p>Telegram kanallarida tarqalgan postlarda boy xabar uchun «aniq cheklovlar» sanab o‘tiladi: nechta blok, nechta rasm yoki video, jadvalda nechta ustun bo‘lishi mumkinligi. Ba’zi postlarda oddiy matn uchun alohida «Premium limiti» ham yoziladi.</p>
      <p>Biz 2026-yil noyabrida ko‘rib chiqqan rasmiy sahifalarda bunday raqamlar tasdiqlanmadi. Ular Premium muharririga tegishli ekani ham hech qayerda yozilmagan. Telegram ochiq e’lon qilgan raqam bitta: bitta xabarga 32 768 belgigacha.</p>
      <p>Amalda bu shuni anglatadi: katta maqolani «qayergacha sig‘arkin» deb tavakkal yozmang. Matn juda uzun yoki skrinshot ko‘p bo‘lsa, uni qayerdan ikkiga bo‘lishni oldindan belgilab qo‘ying. Chop etishdan oldin qoralamani o‘zingizga yuborib ko‘ring.</p>
      <Notice label={"Muhim"}>Kanal postidagi raqamni rasmiy deb qayta tarqatmang. Limitni aniq bilmoqchi bo‘lsangiz, telegram.org’dagi FAQ va e’lonlarga qarang.</Notice>
      <h2 id="boy-xabar-yozish-uchun-premium">Boy xabar yozish uchun Premium kerakmi?</h2>
      <p>Ha. Telegram e’lonida yozilishicha, Rich Text Editor <b>hozircha faqat Premium foydalanuvchilariga</b> ochiq. FAQ ham maqola va uzun postlar uchun muharrirni Premium foydalanuvchilarga beriladigan imkoniyat sifatida keltiradi. «Hozircha» so‘zi keyinchalik o‘zgarishi mumkinligini bildiradi, lekin bugungi shart shu.</p>
      <p>Premium kanalga emas, foydalanuvchi akkauntiga ulanadi. Demak, maqolani yozadigan admin akkauntida Premium bo‘lishi kerak. Kanalda uchta admin bo‘lib, uzun qo‘llanmalarni ulardan faqat bittasi yozsa, Premium o‘sha bittasiga yetarli. Qolganlar qisqa postlarni odatdagidek chiqaraveradi.</p>
      <p>Premium’siz obunachi boy xabarni qanday ko‘rishi rasmiy manbalarda alohida tushuntirilmagan. Shuning uchun birinchi katta maqoladan oldin kichik test post chiqaring va uni Premium’siz akkauntdan, masalan, oila a’zongizning telefonidan ochib ko‘ring.</p>
      <h2 id="muharrirni-qanday-ochib-birinchi-maqolani">Muharrirni qanday ochib, birinchi maqolani yozish mumkin?</h2>
      <Steps>
        <Step title={"Premium faolligini tekshiring"}>sozlamalarda obuna faol ekaniga ishonch hosil qiling. Muharrir faqat Premium bilan ochiladi.</Step>
        <Step title={"Matn yozishni boshlang"}>kanal yoki chatdagi yozish maydoniga matn kiriting. FAQ’ga ko‘ra ⛶ belgisi matn 3 qatordan oshgandan keyin chiqadi.</Step>
        <Step title={"⛶ belgisini bosing"}>muharrir to‘liq ekranda ochiladi.</Step>
        <Step title={"Matnni bo‘limlarga ajrating"}>sarlavhalarni qo‘ying, qadamlarni ro‘yxatga, taqqoslashni jadvalga, iqtibosni alohida blokka o‘tkazing.</Step>
        <Step title={"Media qo‘shing"}>skrinshot yoki videoni o‘zi tegishli bo‘lim ichiga joylang.</Step>
        <Step title={"Avval o‘zingizga yuboring"}>«Saqlangan xabarlar»da matn telefonda qanday ko‘rinishini tekshiring: jadval ekranga sig‘adimi, rasmlar o‘z joyidami.</Step>
        <Step title={"Kanalda chop eting"}>tekshirilgan maqolani kanalga joylang.</Step>
      </Steps>
      <p>⛶ belgisi chiqmasa, quyidagilarni tekshiring:</p>
      <ul>
        <li>matn rostdan 3 qatordan uzunmi;</li>
        <li>Premium faolmi yoki muddati tugab qolganmi;</li>
        <li>Telegram ilovasi so‘nggi versiyaga yangilanganmi.</li>
      </ul>
      <h2 id="telegraph-orniga-boy-xabar-qachon">Telegraph o‘rniga boy xabar: qachon mos, qachon yo‘q?</h2>
      <p>Asosiy savol bitta: maqolangiz kanal ichida qoladimi yoki sayt va boshqa tarmoqlarga ham tarqatiladimi? Jadvalda faqat boy xabar tomoni rasmiy faktlarga tayanadi, tashqi sahifa imkoniyatlari bu maqolada tekshirilmagan.</p>
      <CompareTable
        headers={["Mezon", "Kanal ichidagi boy xabar", "Tashqi maqola sahifasi (masalan, Telegraph)"]}
        rows={[
          ["O‘quvchi qayerda o‘qiydi", "Kanal lentasida, xabarning o‘zida", "Havolani ochib, alohida sahifada"],
          ["Yozish sharti", "Premium kerak", "Xizmatning o‘z qoidalariga bog‘liq"],
          ["Jadval va media", "Jadval bor, rasm va video matn o‘rtasida", "Xizmat imkoniyatiga qarab"],
          ["Hajm", "32 768 belgigacha", "Bu maqolada tekshirilmagan"],
          ["Kimga mo‘ljallangan", "Asosan kanal obunachilariga", "Havolani sayt yoki boshqa tarmoqqa qo‘yish qulayroq"],
        ]}
      />
      <p>Boy xabar quyidagi hollarda qulay:</p>
      <ul>
        <li>obunachilar uchun qo‘llanma yoki yo‘riqnoma;</li>
        <li>kanal yoki guruh qoidalari;</li>
        <li>haftalik dayjest, mahsulot sharhi yoki dars konspekti.</li>
      </ul>
      <p>Tashqi sahifa ma’qul bo‘ladigan holatlar ham bor. 32 768 belgidan oshadigan, kitobga o‘xshash matn bitta xabarga sig‘maydi: uni boblarga bo‘lib chiqarish yoki tashqi sahifada saqlash kerak. Maqolani Telegram’dan foydalanmaydigan odamlarga ham ko‘rsatmoqchi bo‘lsangiz, tashqi sahifa qulayroq bo‘lishi mumkin.</p>
      <h2 id="eski-telegraph-maqolasini-boy-xabarga">Eski Telegraph maqolasini boy xabarga qanday ko‘chirish mumkin?</h2>
      <p>Ko‘p blogerlarda Telegraph’da yozilgan qo‘llanmalar to‘planib qolgan. Ularni kanal ichiga ko‘chirmoqchi bo‘lsangiz, bir nechta narsaga e’tibor bering.</p>
      <ul>
        <li><b>Formatlash saqlanishiga tayanmang.</b> Matnni nusxalaganda sarlavha va ro‘yxatlar o‘z holicha o‘tishi bu maqolada tasdiqlanmagan. Muharrirda ularni qaytadan belgilab chiqing.</li>
        <li><b>Rasmlarni qayta yuklang.</b> Skrinshotlarni telefoningizga saqlab, kerakli bo‘lim ichiga qo‘ying. Eskirgan ekran rasmlarini shu yerda yangilab oling.</li>
        <li><b>Havolalarni tekshiring.</b> Eski maqoladagi havolalar ishlamay qolgan bo‘lishi mumkin. Har birini bosib ko‘ring.</li>
        <li><b>Hajmini o‘lchang.</b> Maqola juda katta bo‘lsa, uni «1-qism», «2-qism» qilib bo‘ling va qismlarni bir-biriga havola bilan bog‘lang.</li>
        <li><b>Eski sahifani darhol o‘chirmang.</b> Avval kanaldagi yangi variant to‘g‘ri ko‘rinishiga ishonch hosil qiling. Eski havola boshqa joylarda tarqalgan bo‘lsa, uni ham saqlab qolgan ma’qul.</li>
      </ul>
      <p>Misol: obunachilarga «Telefonda VPN’siz to‘lov qilish» degan Telegraph qo‘llanmasini yozgan admin uni boy xabarga ko‘chirdi. Har bir qadam ostiga skrinshot qo‘ydi, to‘lov usullarini jadvalga yig‘di va postni kanalda qadab qo‘ydi. Obunachi endi havolani ochmaydi, qo‘llanma lentaning o‘zida turadi.</p>
      <h2 id="postlarni-bot-orqali-avtomatik-chiqarsangiz">Postlarni bot orqali avtomatik chiqarsangiz nima o‘zgaradi?</h2>
      <p>Ba’zi adminlar postlarni qo‘lda emas, bot orqali joylaydi. <a href={"https://telegram.org/blog/watch-apps-and-more"} target="_blank" rel="noopener noreferrer">Botlarga oid yangilanishda</a> Telegram bot ham boy formatlangan matnni bitta xabarda 32 768 belgigacha yubora olishini e’lon qildi. O‘sha e’londa yana bir tafsilot bor: taxminan dastlabki 8 000 belgidan keyin «Show More» tugmasi chiqadi va o‘quvchi qolgan qismni shu tugma bilan ochadi.</p>
      <p><a href={"https://core.telegram.org/bots/api"} target="_blank" rel="noopener noreferrer">Bot API hujjatida</a> esa sendMessage usulining matn parametri uchun 1–4 096 belgi ko‘rsatilgan. Botingizni dasturchi sozlayotgan bo‘lsa, qaysi usul va formatdan foydalanayotganini hamda limit qaysi holatda amal qilishini hujjatdan tekshirsin.</p>
      <p>Admin uchun foydali odat: maqolaning eng muhim qismini — xulosa, havola, sanani — boshiga, taxminan 8 000 belgi ichiga joylang. Shunda tugmani bosmagan o‘quvchi ham asosiy gapni ko‘radi.</p>
      <h2 id="skrinshot-ostidagi-izoh-maqola-ornini">Skrinshot ostidagi izoh maqola o‘rnini bosadimi?</h2>
      <p>Yo‘q, rasm yoki video izohi (caption) uzun matn uchun mo‘ljallanmagan va uning uzunligi alohida cheklanadi. <a href={"https://core.telegram.org/api/config"} target="_blank" rel="noopener noreferrer">Client configuration</a> sahifasida Premium’siz va Premium foydalanuvchilar uchun izohning maksimal uzunligi alohida parametrlar bilan belgilanadi. Aniq qiymatlar biz ishlatgan rasmiy iqtibosda yo‘q, shuning uchun raqam keltirmaymiz.</p>
      <p>Uzun yo‘riqnomani rasm ostiga sig‘dirishga urinmang. Boy xabarda rasmni matnning kerakli joyiga qo‘yish mumkin. Bitta asosiy rasm va katta matn kerak bo‘lsa, maqolani muharrirda yozib, rasmni birinchi bo‘lim ichiga joylagan ma’qul.</p>
      <h2 id="muharrir-uchun-premium-kimga-kerak">Muharrir uchun Premium kimga kerak va uni so‘mda qanday ulash mumkin?</h2>
      <p>Kanalingizda uzun matn muntazam chiqsa — haftalik qo‘llanma, sharh, dars konspekti — Premium o‘zini oqlashi mumkin. Kanal asosan qisqa yangilik va bir-ikki qatorli e’lonlardan iborat bo‘lsa, faqat muharrir uchun obuna olish shart emas.</p>
      <p>Muharrir Premium imkoniyatlarining faqat bittasi. Qolganlari haqida <Link href="/blog/telegram-premium-arziydimi-foydalari">Premium arziydimi</Link> va <Link href="/blog/telegram-premium-yashirin-funksiyalari">Premium’ning kam ma’lum funksiyalari</Link> maqolalarida yozilgan. Kanalda video darslar va katta arxivlar ham ulashsangiz, <Link href="/blog/telegramda-4gb-fayl-yuborish">katta fayllarni yuborish bo‘yicha qo‘llanma</Link> ham kerak bo‘ladi.</p>
      <CompareTable
        headers={["Muddat", "Narx (hamma to‘lov usulida bir xil)"]}
        rows={[
          ["3 oy", `${som(premium(3), "uz")}`],
          ["6 oy", `${som(premium(6), "uz")}`],
          ["12 oy", `${som(premium(12), "uz")}`],
          ["1 oy", "Narxi botda"],
        ]}
      />
      <p><a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> orqali ulash tartibi:</p>
      <ul>
        <li>faqat @username kiritiladi, parol va SMS kod so‘ralmaydi;</li>
        <li>Premium Telegram’ning sovg‘a mexanizmi orqali ulanadi;</li>
        <li>to‘lov so‘mda: Click, Payme, Uzum, Paynet (ilova yoki terminalda naqd), UzCard/HUMO kartaga o‘tkazma yoki bot balansi;</li>
        <li>buyurtma odatda bir necha soniyada yetib boradi;</li>
        <li>akkauntda Premium faol bo‘lsa, bot yangi buyurtma ochmaydi, chunki muddat faol obuna ustiga qo‘shilmaydi.</li>
      </ul>
      <p>Maqolalarni boshqa admin yozsa, buyurtmada uning @username’ini ko‘rsatasiz. Bu <Link href="/blog/telegram-premium-sovga-username-orqali">username orqali Premium sovg‘a qilish</Link> bilan bir xil ishlaydi. Kanalni o‘stirish rejasi uchun <Link href="/blog/telegram-kanal-rivojlantirish">kanal rivojlantirish</Link> maqolasini, tariflar uchun <Link href="/premium">Premium sahifasini</Link> ko‘ring.</p>
      <Sources
        label={"Manbalar"}
        items={[
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
          { href: "https://telegram.org/blog/communities-editor-invisible-messages", label: "Rich Text Editor, Communities, Ephemeral Messages in Groups, 350 Million GIFs" },
          { href: "https://telegram.org/blog/watch-apps-and-more", label: "Smartwatch Apps, Rich Text for Bots, AI Guardians for Groups, and Much More" },
          { href: "https://core.telegram.org/bots/api", label: "Telegram Bot API" },
          { href: "https://core.telegram.org/api/config", label: "Client configuration" },
        ]}
      />
    </>
  );
}

const faqUz = [
  { question: "Rich Messages va Rich Text Editor bir narsami?", answer: "Amalda ha. Rich Text Editor — Telegram rasmiy sahifalarida ishlatgan nom, «Rich Messages» esa shu muharrirda yozilgan xabarlarni foydalanuvchilar shunday atashadi." },
  { question: "Obunachilarimda Premium bo‘lmasa, jadval va rasmlar ularga to‘g‘ri ko‘rinadimi?", answer: "Rasmiy manbalar Premium shartini faqat yozish uchun aytadi, o‘qish tomoni alohida tushuntirilmagan. Ishonch hosil qilish uchun kichik sinov post chiqarib, uni Premium’siz akkauntdan ochib ko‘ring." },
  { question: "Uzun matn yozdim, lekin to‘liq ekran muharriri ochilmayapti — sabab nima?", answer: "Odatda uchta sababdan biri bo‘ladi: matn hali 3 qatordan oshmagan, Premium muddati tugagan yoki ilova eski versiyada qolgan. Shu uchalasini birma-bir tekshiring." },
  { question: "Boy xabarni chop etgandan keyin tahrirlasa bo‘ladimi?", answer: "Bu imkoniyat biz ko‘rgan rasmiy manbalarda alohida tasdiqlanmagan, shuning uchun ilovangizdagi tahrirlash menyusini sinab ko‘ring. Muhim maqolani oldin «Saqlangan xabarlar»da tayyorlab, keyin chop etish xavfsizroq." },
  { question: "Maqolam 32 768 belgidan uzun bo‘lsa, eng qulay yo‘l qaysi?", answer: "Matnni mantiqiy joylardan qismlarga bo‘lib, har birini alohida xabar qiling va qismlarni bir-biriga havola bilan bog‘lang. Kitobdek uzun matnni tashqi sahifada saqlab, kanalga qisqa e’lon qo‘yish ham mumkin." },
  { question: "Boy xabarni guruhda ham yuborsa bo‘ladimi yoki faqat kanalda?", answer: "Rasmiy e’londa muharrir «maqola va uzun postlar» uchun deb ta’riflangan, chat turlari alohida sanalmagan. Guruhingizda ishlashini qisqa sinov xabari bilan tekshirib ko‘ring." },
  { question: "Kompyuterdagi Telegram’da muharrir ishlaydimi?", answer: "Biz ko‘rgan rasmiy iqtiboslarda qaysi platformalarda ishlashi aytilmagan. Desktop ilovani yangilab, uzun matn yozganda ⛶ belgisi chiqishini tekshiring, chiqmasa maqolani telefondan yozing." },
  { question: "Premium kanalga beriladimi yoki admin akkauntiga?", answer: "Admin akkauntiga, chunki Premium foydalanuvchiga beriladigan obuna. Boy postni qaysi admin yozsa, Premium o‘sha odamning akkauntida bo‘lishi kerak." },
  { question: "Hamkasbim maqola yozishi uchun unga Premium’ni men to‘lab bersam bo‘ladimi?", answer: "Bo‘ladi: @StarsPaymee_bot’da uning @username’ini kiritasiz va so‘mda to‘laysiz, undan parol yoki kod so‘ralmaydi. Agar unda Premium allaqachon faol bo‘lsa, bot buyurtmani ochmaydi." },
  { question: "Premium tugasa, avval yozilgan boy xabarlar o‘chib ketadimi?", answer: "Bu holat rasmiy manbalarda alohida yoritilmagan. Muharrir faqat Premium foydalanuvchilarga ochiq, shuning uchun yangi boy xabar yozish uchun obunani yangilash kerak bo‘ladi; muhim maqolalarning nusxasini saqlab qo‘ying." },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return <p>«Rich Messages», или rich-сообщения, — так называют сообщения, написанные в редакторе Telegram Rich Text Editor. В них можно добавить заголовки, таблицы, списки, цитаты и блоки кода, а фото и видео — вставить посреди текста. В одно сообщение помещается до 32 768 символов. Для инструкции, которую читают прямо в канале, это часто заменяет Telegraph. Но пока такие сообщения могут писать только пользователи Premium.</p>;
}

function RuBody() {
  return (
    <>
      <Toc
        label={"Содержание"}
        items={[
          { href: "#telegramda-boy-xabar-nima-va", label: "Что такое rich-сообщение в Telegram и чем оно отличается от обычного поста?" },
          { href: "#boy-xabarga-qaysi-bloklarni-qoysa", label: "Какие блоки можно добавить в rich-сообщение и зачем они нужны?" },
          { href: "#kanallarda-aylanayotgan-limit-raqamlariga-ishonsa", label: "Можно ли верить цифрам лимитов, которые гуляют по каналам?" },
          { href: "#boy-xabar-yozish-uchun-premium", label: "Нужен ли Premium, чтобы писать rich-сообщения?" },
          { href: "#muharrirni-qanday-ochib-birinchi-maqolani", label: "Как открыть редактор и написать первую статью?" },
          { href: "#telegraph-orniga-boy-xabar-qachon", label: "Rich-сообщение вместо Telegraph: когда подходит, а когда нет?" },
          { href: "#eski-telegraph-maqolasini-boy-xabarga", label: "Как перенести старую статью из Telegraph в rich-сообщение?" },
          { href: "#postlarni-bot-orqali-avtomatik-chiqarsangiz", label: "Что меняется, если посты публикует бот?" },
          { href: "#skrinshot-ostidagi-izoh-maqola-ornini", label: "Заменит ли подпись под скриншотом статью?" },
          { href: "#muharrir-uchun-premium-kimga-kerak", label: "Кому нужен Premium ради редактора и как подключить его в сумах?" },
        ]}
      />
      <h2 id="telegramda-boy-xabar-nima-va">Что такое rich-сообщение в Telegram и чем оно отличается от обычного поста?</h2>
      <p>Обычный пост — это один сплошной текст, а фото или видео стоит над ним. Rich-сообщение, как статья, делится на разделы. Согласно <a href={"https://telegram.org/blog/communities-editor-invisible-messages"} target="_blank" rel="noopener noreferrer">анонсу Telegram</a>, редактор поддерживает заголовки, таблицы, списки, цитаты и блоки кода, а фото и видео можно вставлять посреди сообщения. Поэтому скриншот стоит не в начале поста, а рядом с шагом, который он поясняет.</p>
      <p>Об объёме: в <a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a> сказано, что в одно сообщение помещается до 32 768 символов. Та же цифра есть и в анонсе редактора.</p>
      <p>Пара слов о названии. На официальных страницах Telegram инструмент называется <b>Rich Text Editor</b>. «Rich Messages» и «rich-сообщения» — это названия, которые прижились у пользователей. Значат они одно и то же: сообщение в виде статьи, написанное в редакторе.</p>
      <p>Блогеру это выгодно тем, что подписчику не нужно уходить из канала и открывать другую страницу, чтобы прочитать инструкцию. Заголовки, таблица и скриншоты — всё в одном сообщении в ленте.</p>
      <h2 id="boy-xabarga-qaysi-bloklarni-qoysa">Какие блоки можно добавить в rich-сообщение и зачем они нужны?</h2>
      <p>Типы блоков взяты из официального анонса, а примеры подобраны для каналов на разные темы.</p>
      <CompareTable
        headers={["Тип блока", "Пример для блогера", "Когда пригодится"]}
        rows={[
          ["Заголовок", "Разделы «Установка», «Настройка», «Ошибки» в канале с IT-уроками", "Когда текст охватывает несколько тем"],
          ["Таблица", "Правила возврата в интернет-магазине: тип товара, срок, условие", "Когда варианты нужно сравнить рядом"],
          ["Список", "Ингредиенты и этапы приготовления в кулинарном канале", "Для шагов и чек-листов"],
          ["Цитата", "Фрагмент отзыва об отеле в канале о путешествиях", "Когда приводите чужое мнение или выдержку из источника"],
          ["Блок кода", "Команда терминала или строка настроек в канале разработчика", "Когда читатель должен скопировать текст в точности"],
          ["Фото или видео посреди текста", "Скриншот у каждого шага инструкции по настройке приложения", "Когда проще показать, чем объяснить"],
        ]}
      />
      <p>Добавлять в каждую статью все типы блоков не нужно. Заголовки помогают читателю быстро найти нужное место. Большинство читает посты с телефона, поэтому таблицу лучше делать узкой: мало столбцов и короткий текст в ячейках. Длинное пояснение вынесите из таблицы и напишите под ней обычным текстом.</p>
      <InlineCta text={"Telegram Stars, Premium и подарки за сумы — нужен только @username, заказ приходит за несколько секунд."} />
      <h2 id="kanallarda-aylanayotgan-limit-raqamlariga-ishonsa">Можно ли верить цифрам лимитов, которые гуляют по каналам?</h2>
      <p>В постах, которые расходятся по Telegram-каналам, перечисляют «точные ограничения» rich-сообщений: сколько блоков, сколько фото и видео, сколько столбцов в таблице. В некоторых постах указывают ещё и отдельный «лимит Premium» для обычного текста.</p>
      <p>На официальных страницах, которые мы просмотрели в ноябре 2026 года, эти цифры не подтвердились. Нигде не сказано и о том, что они относятся к редактору Premium. Telegram открыто называет только одну цифру: до 32 768 символов в одном сообщении.</p>
      <p>На практике это значит, что не стоит писать большую статью наугад, надеясь, что «влезет». Если текст очень длинный или скриншотов много, заранее решите, где его можно разделить на две части. Перед публикацией отправьте черновик самому себе.</p>
      <Notice label={"Важно"}>Не распространяйте цифру из поста в канале как официальную. Если нужен точный лимит, смотрите FAQ и анонсы на telegram.org.</Notice>
      <h2 id="boy-xabar-yozish-uchun-premium">Нужен ли Premium, чтобы писать rich-сообщения?</h2>
      <p>Да. В анонсе Telegram сказано, что Rich Text Editor <b>пока доступен только пользователям Premium</b>. В FAQ редактор для статей и длинных постов тоже указан как возможность Premium. Слово «пока» говорит о том, что со временем это может измениться, но сегодня условие такое.</p>
      <p>Premium подключается не к каналу, а к аккаунту пользователя. Значит, Premium нужен тому админу, который пишет статью. Если в канале три админа, а длинные инструкции пишет только один, Premium достаточно ему одному. Остальные публикуют короткие посты как обычно.</p>
      <p>Как rich-сообщение видит подписчик без Premium, в официальных источниках отдельно не объясняется. Поэтому перед первой большой статьёй опубликуйте небольшой тестовый пост и откройте его с аккаунта без Premium — например, с телефона кого-то из родных.</p>
      <h2 id="muharrirni-qanday-ochib-birinchi-maqolani">Как открыть редактор и написать первую статью?</h2>
      <Steps>
        <Step title={"Проверьте, что Premium активен"}>убедитесь в настройках, что подписка действует. Без Premium редактор не откроется.</Step>
        <Step title={"Начните писать"}>введите текст в поле ввода в канале или чате. Согласно FAQ, значок ⛶ появляется, когда текст становится длиннее 3 строк.</Step>
        <Step title={"Нажмите значок ⛶"}>редактор откроется на весь экран.</Step>
        <Step title={"Разбейте текст на разделы"}>добавьте заголовки, оформите шаги списком, сравнение — таблицей, цитату — отдельным блоком.</Step>
        <Step title={"Добавьте медиа"}>вставьте скриншот или видео внутрь того раздела, к которому он относится.</Step>
        <Step title={"Сначала отправьте себе"}>проверьте в «Избранном», как текст выглядит на телефоне: помещается ли таблица на экран, стоят ли картинки на своих местах.</Step>
        <Step title={"Опубликуйте в канале"}>выложите проверенную статью в канал.</Step>
      </Steps>
      <p>Если значок ⛶ не появляется, проверьте:</p>
      <ul>
        <li>действительно ли текст длиннее 3 строк;</li>
        <li>активен ли Premium или срок подписки уже закончился;</li>
        <li>обновлено ли приложение Telegram до последней версии.</li>
      </ul>
      <h2 id="telegraph-orniga-boy-xabar-qachon">Rich-сообщение вместо Telegraph: когда подходит, а когда нет?</h2>
      <p>Главный вопрос один: статья останется внутри канала или её будут распространять на сайте и в других соцсетях? В таблице на официальные факты опирается только колонка про rich-сообщения, возможности внешних страниц в этой статье не проверялись.</p>
      <CompareTable
        headers={["Критерий", "Rich-сообщение в канале", "Внешняя страница статьи (например, Telegraph)"]}
        rows={[
          ["Где читают", "В ленте канала, прямо в сообщении", "На отдельной странице, открыв ссылку"],
          ["Условие для автора", "Нужен Premium", "Зависит от правил самого сервиса"],
          ["Таблицы и медиа", "Таблицы есть, фото и видео посреди текста", "Зависит от возможностей сервиса"],
          ["Объём", "До 32 768 символов", "В этой статье не проверялось"],
          ["Для кого", "В первую очередь для подписчиков канала", "Ссылку удобнее размещать на сайте или в других соцсетях"],
        ]}
      />
      <p>Rich-сообщение удобно, когда это:</p>
      <ul>
        <li>инструкция или руководство для подписчиков;</li>
        <li>правила канала или группы;</li>
        <li>еженедельный дайджест, обзор товара или конспект урока.</li>
      </ul>
      <p>Бывают случаи, когда лучше внешняя страница. Текст объёмом с книгу, длиннее 32 768 символов, в одно сообщение не поместится: его придётся выпускать по главам или хранить на внешней странице. Если статью нужно показать людям, которые не пользуются Telegram, внешняя страница тоже может оказаться удобнее.</p>
      <h2 id="eski-telegraph-maqolasini-boy-xabarga">Как перенести старую статью из Telegraph в rich-сообщение?</h2>
      <p>У многих блогеров накопились инструкции в Telegraph. Если хотите перенести их внутрь канала, обратите внимание на несколько моментов.</p>
      <ul>
        <li><b>Не рассчитывайте, что форматирование сохранится.</b> Что заголовки и списки перенесутся при копировании как есть, в этой статье не подтверждено. Разметьте их заново в редакторе.</li>
        <li><b>Загрузите картинки заново.</b> Сохраните скриншоты на телефон и вставьте в нужные разделы. Заодно замените устаревшие снимки экрана.</li>
        <li><b>Проверьте ссылки.</b> Ссылки в старой статье могли перестать работать. Откройте каждую.</li>
        <li><b>Оцените объём.</b> Если статья очень большая, разбейте её на «Часть 1», «Часть 2» и свяжите части ссылками друг на друга.</li>
        <li><b>Не удаляйте старую страницу сразу.</b> Сначала убедитесь, что новая версия в канале отображается правильно. Если старая ссылка разошлась по другим местам, её тоже лучше сохранить.</li>
      </ul>
      <p>Пример: админ, который написал для подписчиков инструкцию в Telegraph «Как оплатить с телефона без VPN», перенёс её в rich-сообщение. Под каждым шагом поставил скриншот, способы оплаты собрал в таблицу и закрепил пост в канале. Теперь подписчику не нужно открывать ссылку — инструкция прямо в ленте.</p>
      <h2 id="postlarni-bot-orqali-avtomatik-chiqarsangiz">Что меняется, если посты публикует бот?</h2>
      <p>Некоторые админы выкладывают посты не вручную, а через бота. В <a href={"https://telegram.org/blog/watch-apps-and-more"} target="_blank" rel="noopener noreferrer">обновлении для ботов</a> Telegram объявил, что бот тоже может отправлять текст с богатым форматированием — до 32 768 символов в одном сообщении. В том же анонсе есть ещё одна деталь: примерно после первых 8 000 символов появляется кнопка «Show More», и остальное читатель открывает ею.</p>
      <p>При этом в <a href={"https://core.telegram.org/bots/api"} target="_blank" rel="noopener noreferrer">документации Bot API</a> для текстового параметра метода sendMessage указано 1–4 096 символов. Если бота настраивает разработчик, пусть сверится с документацией: какой метод и формат он использует и в каком случае действует лимит.</p>
      <p>Полезная привычка для админа: самое важное — вывод, ссылку, дату — ставьте в начало статьи, в пределах примерно 8 000 символов. Тогда основное увидит даже тот, кто не нажмёт кнопку.</p>
      <h2 id="skrinshot-ostidagi-izoh-maqola-ornini">Заменит ли подпись под скриншотом статью?</h2>
      <p>Нет. Подпись к фото или видео (caption) не рассчитана на длинный текст, и её длина ограничена отдельно. На странице <a href={"https://core.telegram.org/api/config"} target="_blank" rel="noopener noreferrer">Client configuration</a> максимальная длина подписи для пользователей без Premium и с Premium задаётся отдельными параметрами. Точных значений в официальной цитате, на которую мы опирались, нет, поэтому цифры не приводим.</p>
      <p>Не пытайтесь уместить длинную инструкцию в подпись к картинке. В rich-сообщении картинку можно поставить в нужное место текста. Если нужна одна главная картинка и большой текст, лучше написать статью в редакторе и вставить картинку в первый раздел.</p>
      <h2 id="muharrir-uchun-premium-kimga-kerak">Кому нужен Premium ради редактора и как подключить его в сумах?</h2>
      <p>Если в канале регулярно выходят длинные тексты — еженедельные инструкции, обзоры, конспекты уроков, — Premium может окупиться. Если канал в основном состоит из коротких новостей и объявлений в пару строк, оформлять подписку только ради редактора не обязательно.</p>
      <p>Редактор — лишь одна из возможностей Premium. Об остальных читайте в статьях <Link href="/blog/telegram-premium-arziydimi-foydalari">Стоит ли брать Premium</Link> и <Link href="/blog/telegram-premium-yashirin-funksiyalari">малоизвестные функции Premium</Link>. Если вы делитесь в канале видеоуроками и большими архивами, пригодится и <Link href="/blog/telegramda-4gb-fayl-yuborish">инструкция по отправке больших файлов</Link>.</p>
      <CompareTable
        headers={["Срок", "Цена (одинаковая при любом способе оплаты)"]}
        rows={[
          ["3 месяца", `${som(premium(3), "ru")}`],
          ["6 месяцев", `${som(premium(6), "ru")}`],
          ["12 месяцев", `${som(premium(12), "ru")}`],
          ["1 месяц", "Цена в боте"],
        ]}
      />
      <p>Как подключить через <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>:</p>
      <ul>
        <li>вводится только @username, пароль и SMS-код не запрашиваются;</li>
        <li>Premium подключается через механизм подарков Telegram;</li>
        <li>оплата в сумах: Click, Payme, Uzum, Paynet (в приложении или наличными через терминал), перевод на карту UzCard/HUMO или баланс бота;</li>
        <li>заказ обычно приходит за несколько секунд;</li>
        <li>если на аккаунте уже активен Premium, бот не откроет новый заказ: срок не добавляется поверх действующей подписки.</li>
      </ul>
      <p>Если статьи пишет другой админ, в заказе указываете его @username. Это работает так же, как <Link href="/blog/telegram-premium-sovga-username-orqali">подарок Premium по username</Link>. План развития канала — в статье <Link href="/blog/telegram-kanal-rivojlantirish">о продвижении канала</Link>, тарифы — на <Link href="/premium">странице Premium</Link>.</p>
      <Sources
        label={"Источники"}
        items={[
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
          { href: "https://telegram.org/blog/communities-editor-invisible-messages", label: "Rich Text Editor, Communities, Ephemeral Messages in Groups, 350 Million GIFs" },
          { href: "https://telegram.org/blog/watch-apps-and-more", label: "Smartwatch Apps, Rich Text for Bots, AI Guardians for Groups, and Much More" },
          { href: "https://core.telegram.org/bots/api", label: "Telegram Bot API" },
          { href: "https://core.telegram.org/api/config", label: "Client configuration" },
        ]}
      />
    </>
  );
}

const faqRu = [
  { question: "Rich Messages и Rich Text Editor — это одно и то же?", answer: "На практике да. Rich Text Editor — название, которое Telegram использует на официальных страницах, а «Rich Messages» пользователи называют сообщения, написанные в этом редакторе." },
  { question: "Если у подписчиков нет Premium, увидят ли они таблицы и картинки правильно?", answer: "Официальные источники говорят о Premium только как об условии для автора, про чтение отдельно ничего не сказано. Чтобы убедиться, опубликуйте небольшой тестовый пост и откройте его с аккаунта без Premium." },
  { question: "Написал длинный текст, но полноэкранный редактор не открывается — почему?", answer: "Обычно причина одна из трёх: текст ещё не длиннее 3 строк, Premium закончился или приложение не обновлено. Проверьте все три по очереди." },
  { question: "Можно ли отредактировать rich-сообщение после публикации?", answer: "В официальных источниках, которые мы смотрели, это отдельно не подтверждено, так что попробуйте меню редактирования в своём приложении. Важную статью надёжнее сначала подготовить в «Избранном» и только потом публиковать." },
  { question: "Что делать, если статья длиннее 32 768 символов?", answer: "Разделите текст по смыслу на части, опубликуйте каждую отдельным сообщением и свяжите их ссылками. Текст объёмом с книгу можно хранить на внешней странице, а в канал выложить короткий анонс." },
  { question: "Rich-сообщение можно отправить в группу или только в канал?", answer: "В официальном анонсе редактор описан как инструмент для «статей и длинных постов», типы чатов отдельно не перечислены. Проверьте, работает ли он в вашей группе, коротким тестовым сообщением." },
  { question: "Работает ли редактор в Telegram на компьютере?", answer: "В официальных цитатах, которые мы видели, платформы не названы. Обновите десктопное приложение и проверьте, появляется ли значок ⛶ при наборе длинного текста; если нет — пишите статью с телефона." },
  { question: "Premium выдаётся каналу или аккаунту админа?", answer: "Аккаунту админа: Premium — подписка пользователя. Premium должен быть у того админа, который пишет rich-посты." },
  { question: "Могу ли я оплатить Premium коллеге, чтобы он писал статьи?", answer: "Можно: в @StarsPaymee_bot вводите его @username и платите в сумах, пароль или код у него не спрашивают. Если у него уже активен Premium, бот заказ не откроет." },
  { question: "Если Premium закончится, удалятся ли уже опубликованные rich-сообщения?", answer: "В официальных источниках этот случай отдельно не описан. Редактор доступен только пользователям Premium, поэтому для новых rich-сообщений подписку придётся продлить; копии важных статей лучше сохранить." },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return <p>“Rich Messages” is the name people use for posts written in Telegram’s Rich Text Editor. A rich message can include headings, tables, lists, quotes and code blocks, and you can place photos and videos in the middle of the text. One message holds up to 32 768 characters. For a guide that people read inside your channel, it can often replace Telegraph. For now, though, only Premium users can write one.</p>;
}

function EnBody() {
  return (
    <>
      <Toc
        label={"Contents"}
        items={[
          { href: "#telegramda-boy-xabar-nima-va", label: "What is a “rich message” in Telegram, and how is it different from a regular post?" },
          { href: "#boy-xabarga-qaysi-bloklarni-qoysa", label: "Which blocks can you add to a rich message, and what are they for?" },
          { href: "#kanallarda-aylanayotgan-limit-raqamlariga-ishonsa", label: "Can you trust the limit numbers circulating in channels?" },
          { href: "#boy-xabar-yozish-uchun-premium", label: "Do you need Premium to write a rich message?" },
          { href: "#muharrirni-qanday-ochib-birinchi-maqolani", label: "How do you open the editor and write your first article?" },
          { href: "#telegraph-orniga-boy-xabar-qachon", label: "Rich message instead of Telegraph: when does it fit, and when doesn’t it?" },
          { href: "#eski-telegraph-maqolasini-boy-xabarga", label: "How do you move an old Telegraph article into a rich message?" },
          { href: "#postlarni-bot-orqali-avtomatik-chiqarsangiz", label: "What changes if you publish posts automatically through a bot?" },
          { href: "#skrinshot-ostidagi-izoh-maqola-ornini", label: "Can a caption under a screenshot replace an article?" },
          { href: "#muharrir-uchun-premium-kimga-kerak", label: "Who needs Premium for the editor, and how can you get it in UZS?" },
        ]}
      />
      <h2 id="telegramda-boy-xabar-nima-va">What is a “rich message” in Telegram, and how is it different from a regular post?</h2>
      <p>A regular post is one block of text, with any photo or video sitting above it. A rich message is split into sections, like an article. According to <a href={"https://telegram.org/blog/communities-editor-invisible-messages"} target="_blank" rel="noopener noreferrer">Telegram’s announcement</a>, the editor supports headings, tables, lists, quotes and code blocks. It also lets you add photos and videos in the middle of a message. That means a screenshot can sit right next to the step it explains, not at the top of the post.</p>
      <p>On length: the <a href={"https://telegram.org/faq"} target="_blank" rel="noopener noreferrer">Telegram FAQ</a> says one message can hold up to 32 768 characters. The editor announcement gives the same number.</p>
      <p>A quick note on the name. On its official pages, Telegram calls the tool the <b>Rich Text Editor</b>. “Rich Messages” is the name that caught on among users. Both mean the same thing: a long, article-style message written in the editor.</p>
      <p>For a channel author, the main benefit is simple. Subscribers don’t have to leave the channel and open another page to read your guide. The headings, tables and screenshots all live in one message in the feed.</p>
      <h2 id="boy-xabarga-qaysi-bloklarni-qoysa">Which blocks can you add to a rich message, and what are they for?</h2>
      <p>The block types below come from the list in the official announcement. The examples show how channels on different topics might use them.</p>
      <CompareTable
        headers={["Block type", "Example for a channel author", "When it helps"]}
        rows={[
          ["Heading", "“Installation”, “Setup” and “Troubleshooting” sections in an IT tutorial channel", "When the text covers several topics"],
          ["Table", "An online store’s return policy: product type, return window, conditions", "When readers need to compare options side by side"],
          ["List", "Ingredients and cooking steps in a recipe channel", "For steps and checklists"],
          ["Quote", "An excerpt from a hotel review in a travel channel", "When you cite someone’s opinion or a source"],
          ["Code block", "A terminal command or config line in a developer channel", "When readers need to copy the text exactly"],
          ["Photo or video mid-text", "A screenshot next to each step of an app setup guide", "When showing is easier than explaining"],
        ]}
      />
      <p>You don’t need every block type in every post. Headings help readers jump to the part they need. Most people read on their phones, so keep tables narrow: few columns and short text in each cell. If a cell needs a long explanation, take it out of the table and write it as normal text underneath.</p>
      <InlineCta text={"Get Telegram Stars, Premium or gifts in som — only a @username is needed, delivered in seconds."} />
      <h2 id="kanallarda-aylanayotgan-limit-raqamlariga-ishonsa">Can you trust the limit numbers circulating in channels?</h2>
      <p>Posts shared across Telegram channels list “exact limits” for rich messages: how many blocks, how many photos or videos, how many table columns. Some also mention a separate “Premium limit” for plain text.</p>
      <p>We checked the official pages in November 2026 and couldn’t confirm any of those numbers. Nothing official says they apply to the Premium editor either. Telegram has published one number: up to 32 768 characters per message.</p>
      <p>In practice, don’t write a huge article and just hope it fits. If the text is very long or has lots of screenshots, decide in advance where you’d split it in two. Send yourself a draft before you publish.</p>
      <Notice label={"Important"}>Don’t repost a number from a channel post as if it were official. To check a limit, go to the FAQ and announcements on telegram.org.</Notice>
      <h2 id="boy-xabar-yozish-uchun-premium">Do you need Premium to write a rich message?</h2>
      <p>Yes. Telegram’s announcement says the Rich Text Editor is <b>currently available to Premium users only</b>. The FAQ also lists the editor for articles and long posts as a Premium feature. “Currently” suggests this could change later, but that’s the rule for now.</p>
      <p>Premium belongs to a user account, not a channel. So the admin who writes the article needs Premium on their own account. If your channel has three admins and only one writes the long guides, Premium for that one person is enough. Everyone else can keep posting short updates as usual.</p>
      <p>Official sources don’t say how rich messages look to subscribers without Premium. Before your first big article, publish a small test post and open it from a non-Premium account, for example on a family member’s phone.</p>
      <h2 id="muharrirni-qanday-ochib-birinchi-maqolani">How do you open the editor and write your first article?</h2>
      <Steps>
        <Step title={"Check that Premium is active"}>make sure your subscription is active in Settings. The editor only opens with Premium.</Step>
        <Step title={"Start typing"}>type into the message field in your channel or chat. According to the FAQ, the ⛶ icon appears once your text goes past 3 lines.</Step>
        <Step title={"Tap the ⛶ icon"}>the editor opens in full screen.</Step>
        <Step title={"Break the text into sections"}>add headings, turn steps into a list, move comparisons into a table and put quotes in their own block.</Step>
        <Step title={"Add media"}>place each screenshot or video inside the section it belongs to.</Step>
        <Step title={"Send it to yourself first"}>check in Saved Messages how it looks on a phone. Does the table fit the screen? Are the images in the right place?</Step>
        <Step title={"Publish in your channel"}>post the checked article to your channel.</Step>
      </Steps>
      <p>If the ⛶ icon doesn’t appear, check:</p>
      <ul>
        <li>whether your text is really longer than 3 lines;</li>
        <li>whether Premium is active or has expired;</li>
        <li>whether your Telegram app is updated to the latest version.</li>
      </ul>
      <h2 id="telegraph-orniga-boy-xabar-qachon">Rich message instead of Telegraph: when does it fit, and when doesn’t it?</h2>
      <p>The key question is whether your article will stay inside the channel or also be shared on a website and other platforms. In the table, only the rich message column relies on official facts. We didn’t check the external page features for this article.</p>
      <CompareTable
        headers={["Criterion", "Rich message in the channel", "External article page (e.g. Telegraph)"]}
        rows={[
          ["Where people read it", "In the channel feed, inside the message", "On a separate page, after opening a link"],
          ["What you need to write it", "Premium", "Depends on the service’s own rules"],
          ["Tables and media", "Tables supported; photos and videos mid-text", "Depends on the service"],
          ["Length", "Up to 32 768 characters", "Not checked in this article"],
          ["Main audience", "Mostly channel subscribers", "Easier to share the link on a website or other platforms"],
        ]}
      />
      <p>A rich message works well for:</p>
      <ul>
        <li>guides and how-tos for subscribers;</li>
        <li>channel or group rules;</li>
        <li>weekly digests, product reviews or lesson notes.</li>
      </ul>
      <p>An external page can still be the better choice. Book-length text over 32 768 characters won’t fit in one message, so you’d need to publish it in chapters or keep it on an external page. If you also want to share the article with people who don’t use Telegram, an external page may be more convenient.</p>
      <h2 id="eski-telegraph-maqolasini-boy-xabarga">How do you move an old Telegraph article into a rich message?</h2>
      <p>Many channel authors have a pile of guides on Telegraph. If you want to bring them into your channel, keep a few things in mind.</p>
      <ul>
        <li><b>Don’t count on formatting carrying over.</b> We haven’t confirmed that headings and lists stay intact when you copy text. Mark them up again in the editor.</li>
        <li><b>Re-upload your images.</b> Save the screenshots to your phone and place them in the right sections. It’s a good moment to replace outdated screenshots.</li>
        <li><b>Check your links.</b> Links in an old article may no longer work. Tap each one.</li>
        <li><b>Measure the length.</b> If the article is very long, split it into “Part 1” and “Part 2” and link the parts to each other.</li>
        <li><b>Don’t delete the old page right away.</b> First make sure the new version looks right in the channel. If the old link has been shared elsewhere, it’s better to keep it.</li>
      </ul>
      <p>An example: an admin had written a Telegraph guide for subscribers called “Paying from your phone without a VPN” and moved it into a rich message. They put a screenshot under each step, gathered the payment methods into a table and pinned the post in the channel. Subscribers no longer open a link. The guide sits right in the feed.</p>
      <h2 id="postlarni-bot-orqali-avtomatik-chiqarsangiz">What changes if you publish posts automatically through a bot?</h2>
      <p>Some admins don’t post by hand; they use a bot. In an <a href={"https://telegram.org/blog/watch-apps-and-more"} target="_blank" rel="noopener noreferrer">update about bots</a>, Telegram announced that bots can also send richly formatted text of up to 32 768 characters in one message. The same announcement mentions another detail: a “Show More” button appears after roughly the first 8 000 characters, and readers tap it to open the rest.</p>
      <p>Meanwhile, the <a href={"https://core.telegram.org/bots/api"} target="_blank" rel="noopener noreferrer">Bot API documentation</a> lists 1–4 096 characters for the text parameter of the sendMessage method. If a developer set up your bot, ask them to check the docs for which method and format they use and which limit applies in that case.</p>
      <p>A good habit for admins: put the most important part of the article (the summary, a link, a date) at the top, within roughly the first 8 000 characters. That way, readers who never tap the button still see the main point.</p>
      <h2 id="skrinshot-ostidagi-izoh-maqola-ornini">Can a caption under a screenshot replace an article?</h2>
      <p>No. A photo or video caption isn’t meant for long text, and its length has its own limit. On the <a href={"https://core.telegram.org/api/config"} target="_blank" rel="noopener noreferrer">Client configuration</a> page, the maximum caption length is set by separate parameters for non-Premium and Premium users. The exact values aren’t in the official quote we used, so we don’t give a number here.</p>
      <p>Don’t try to squeeze a long guide under an image. In a rich message, you can place the image exactly where it belongs in the text. If you need one main image plus a lot of text, write the article in the editor and put the image inside the first section.</p>
      <h2 id="muharrir-uchun-premium-kimga-kerak">Who needs Premium for the editor, and how can you get it in UZS?</h2>
      <p>If your channel regularly publishes long text, such as weekly guides, reviews or lesson notes, Premium may well pay for itself. If your channel is mostly short news and one- or two-line announcements, you don’t need a subscription just for the editor.</p>
      <p>The editor is only one Premium feature. You can read about the rest in <Link href="/blog/telegram-premium-arziydimi-foydalari">Is Premium worth it</Link> and <Link href="/blog/telegram-premium-yashirin-funksiyalari">lesser-known Premium features</Link>. If you also share video lessons and large archives, the <Link href="/blog/telegramda-4gb-fayl-yuborish">guide to sending large files</Link> will come in handy.</p>
      <CompareTable
        headers={["Duration", "Price (same for all payment methods)"]}
        rows={[
          ["3 months", `${som(premium(3), "en")}`],
          ["6 months", `${som(premium(6), "en")}`],
          ["12 months", `${som(premium(12), "en")}`],
          ["1 month", "See the price in the bot"],
        ]}
      />
      <p>How to get it through <a href={"https://t.me/StarsPaymee_bot"} target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>:</p>
      <ul>
        <li>you only enter an @username; no password or SMS code is needed;</li>
        <li>Premium is activated through Telegram’s gift mechanism;</li>
        <li>you pay in UZS: Click, Payme, Uzum, Paynet (in the app, or cash at a terminal), a UzCard/HUMO card transfer or your bot balance;</li>
        <li>orders usually arrive within a few seconds;</li>
        <li>if the account already has active Premium, the bot won’t open a new order, because the new period isn’t added on top of an active subscription.</li>
      </ul>
      <p>If another admin writes the articles, enter their @username in the order. It works the same way as <Link href="/blog/telegram-premium-sovga-username-orqali">gifting Premium by username</Link>. For a channel growth plan, see <Link href="/blog/telegram-kanal-rivojlantirish">growing your channel</Link>. For plans and prices, visit the <Link href="/premium">Premium page</Link>.</p>
      <Sources
        label={"Sources"}
        items={[
          { href: "https://telegram.org/faq", label: "Telegram FAQ" },
          { href: "https://telegram.org/blog/communities-editor-invisible-messages", label: "Rich Text Editor, Communities, Ephemeral Messages in Groups, 350 Million GIFs" },
          { href: "https://telegram.org/blog/watch-apps-and-more", label: "Smartwatch Apps, Rich Text for Bots, AI Guardians for Groups, and Much More" },
          { href: "https://core.telegram.org/bots/api", label: "Telegram Bot API" },
          { href: "https://core.telegram.org/api/config", label: "Client configuration" },
        ]}
      />
    </>
  );
}

const faqEn = [
  { question: "Are Rich Messages and the Rich Text Editor the same thing?", answer: "Pretty much. Rich Text Editor is the name Telegram uses on its official pages, and “Rich Messages” is what users call the posts written in it." },
  { question: "If my subscribers don’t have Premium, will tables and images show up correctly for them?", answer: "Official sources only say Premium is needed to write rich messages. They don’t cover the reading side. To be sure, publish a short test post and open it from an account without Premium." },
  { question: "I typed a long text, but the full-screen editor won’t open. Why?", answer: "It’s usually one of three things: the text isn’t longer than 3 lines yet, your Premium has expired, or the app is out of date. Check each one." },
  { question: "Can I edit a rich message after publishing it?", answer: "The official sources we checked don’t say, so try the edit menu in your app. For important articles, it’s safer to prepare them in Saved Messages first and then publish." },
  { question: "My article is longer than 32 768 characters. What’s the easiest option?", answer: "Split it at natural break points, post each part as a separate message and link the parts together. For book-length text, you can also keep it on an external page and post a short announcement in the channel." },
  { question: "Can I send a rich message in a group, or only in a channel?", answer: "The official announcement describes the editor as being “for articles and long posts” and doesn’t list chat types. Send a short test message to see whether it works in your group." },
  { question: "Does the editor work in Telegram on a computer?", answer: "The official quotes we used don’t say which platforms support it. Update the desktop app and check whether the ⛶ icon appears when you type a long text. If it doesn’t, write the article on your phone." },
  { question: "Is Premium given to the channel or to the admin’s account?", answer: "To the admin’s account, because Premium is a personal user subscription. Whichever admin writes the rich post needs Premium on their own account." },
  { question: "Can I pay for Premium for a colleague so they can write articles?", answer: "Yes. Enter their @username in @StarsPaymee_bot and pay in UZS. They won’t be asked for a password or code. If they already have active Premium, the bot won’t open the order." },
  { question: "If Premium runs out, will my existing rich messages disappear?", answer: "Official sources don’t cover this. Since the editor is only for Premium users, you’ll need to renew to write new rich messages. Keep copies of your important articles." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "howto",
  datePublished: "2026-11-18",
  dateModified: "2026-11-18",
  keywords: ["telegram rich messages nima","telegram boy xabar","telegram rich text editor","telegram maqola yozish","telegram jadval yuborish","telegraph o'rniga telegram","telegram uzun post premium","telegram xabarga rasm o'rtasiga qo'yish","rich messages telegram что это","редактор текста telegram premium","как сделать таблицу в telegram","длинный пост telegram вместо telegraph"],
  howToSteps: [
    { name: "Premium faolligini tekshiring", text: "sozlamalarda obuna faol ekaniga ishonch hosil qiling. Muharrir faqat Premium bilan ochiladi." },
    { name: "Matn yozishni boshlang", text: "kanal yoki chatdagi yozish maydoniga matn kiriting. FAQ’ga ko‘ra ⛶ belgisi matn 3 qatordan oshgandan keyin chiqadi." },
    { name: "⛶ belgisini bosing", text: "muharrir to‘liq ekranda ochiladi." },
    { name: "Matnni bo‘limlarga ajrating", text: "sarlavhalarni qo‘ying, qadamlarni ro‘yxatga, taqqoslashni jadvalga, iqtibosni alohida blokka o‘tkazing." },
    { name: "Media qo‘shing", text: "skrinshot yoki videoni o‘zi tegishli bo‘lim ichiga joylang." },
    { name: "Avval o‘zingizga yuboring", text: "«Saqlangan xabarlar»da matn telefonda qanday ko‘rinishini tekshiring: jadval ekranga sig‘adimi, rasmlar o‘z joyidami." },
    { name: "Kanalda chop eting", text: "tekshirilgan maqolani kanalga joylang." },
  ],
  locales: {
    uz: {
      title: "Telegram Rich Messages nima: boy xabar Telegraph o‘rnini bosadimi?",
      excerpt: "Boy xabar — Premium muharririda sarlavha, jadval, ro‘yxat va matn ichidagi rasm yoki video bilan yoziladigan uzun xabar, uni hozircha faqat Premium egasi yoza oladi. Maqolada Telegraph bilan taqqos va qadamlar bor.",
      metaTitle: "Telegram Rich Messages nima",
      metaDescription: "Boy xabar — Premium muharririda sarlavha, jadval, ro‘yxat va matn ichidagi rasm yoki video bilan yoziladigan uzun xabar, uni hozircha faqat Premium egasi yoza…",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars, Premium yoki sovg‘a kerakmi?",
      ctaBody: "@StarsPaymee_bot’da so‘mda to‘lang: Click, Payme, Uzum, Paynet yoki karta orqali. Faqat @username kerak — buyurtma bir necha soniyada yetadi.",
      faq: faqUz,
    },
    ru: {
      title: "Telegram Rich Messages: что это и заменят ли они Telegraph?",
      excerpt: "Rich-сообщение — длинный пост с заголовками, таблицами, списками и фото или видео посреди текста. Пока его пишут только в редакторе Premium. Внутри — сравнение с Telegraph и пошаговый запуск.",
      metaTitle: "Telegram Rich Messages: что это и заменят ли они Telegraph?",
      metaDescription: "Rich-сообщение — длинный пост с заголовками, таблицами, списками и фото или видео посреди текста. Пока его пишут только в редакторе Premium.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars, Premium или подарок?",
      ctaBody: "Оплатите в сумах в @StarsPaymee_bot: Click, Payme, Uzum, Paynet или картой. Нужен только @username — заказ приходит за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "What Are Telegram Rich Messages, and Can They Replace Telegraph?",
      excerpt: "A rich message is a long post written in Telegram’s Premium editor, with headings, tables, lists and photos or videos in the text. For now, only Premium users can write one. Here: a Telegraph comparison and steps.",
      metaTitle: "What Are Telegram Rich Messages",
      metaDescription: "A rich message is a long post written in Telegram’s Premium editor, with headings, tables, lists and photos or videos in the text.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars, Premium or a gift?",
      ctaBody: "Pay in som in @StarsPaymee_bot via Click, Payme, Uzum, Paynet or card. Only a @username is needed — the order arrives in seconds.",
      faq: faqEn,
    },
  },
};
