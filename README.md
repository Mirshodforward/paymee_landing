This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy

Sayt o'z serverimizda ishlaydi: nginx + pm2 `starstg-web`, Next.js standalone build (`next.config.ts` da
`output: "standalone"`). 2026-11-26 gacha Vercel'da edi.

`main` ga push qilingach server 2 daqiqa ichida o'zi quradi (build ~7 daqiqa) va yangi versiyani yoqadi.
Build yoki tekshiruv o'tmasa saytda oldingi versiya qoladi va Telegram'ga xabar keladi.

Qo'lda qayta chiqarish: `ssh root@<server> site-build starstg --force`. Server sozlamasi (nginx, HTTPS,
build skriptlari) — avtoblogyoz loyihasida, `scripts/sites/`.
