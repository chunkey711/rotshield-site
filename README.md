# rotshield-site

Сайт Rotshield: главная, pricing, terms, refund policy, privacy policy, support. Next.js 15 (App Router), деплой на Vercel, домен www.rotshield.app.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Где что

- `app/page.js` + `app/home.module.css` — главная
- `app/(prose)/<slug>/page.mdx` — текстовые страницы, markdown как есть: `pricing`, `terms`, `refund`, `privacy`, `support`. Pricing, Terms, Refund и Privacy — под проверку домена в Paddle: должны быть в футере и открываться без логина
- `app/globals.css` — палитра из приложения (`theme/primitives.js`), базовая типографика, стили прозы
- `components/Mascot.js` — маскот через CSS-маску, красится от темы; арт в `public/mascot/`
- `components/Cosmos.js` — космос главного экрана приложения, только в тёмной схеме
- `lib/links.js` — домен, почта, ссылка на App Store (`APP_STORE_URL`, пока `null` → «Coming to the App Store»)

Старые адреса `/rotshield-site/…` с GitHub Pages редиректятся в `next.config.mjs`.
