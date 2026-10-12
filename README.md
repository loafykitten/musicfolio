# musicfolio

The link-in-bio site for [loafykitten](https://github.com/loafykitten), a lofi / hip-hop artist ("lofi to cast spells to"). It's a small Next.js app that puts the music, socials, newsletter signup, and latest releases on one page.

## Features

- **Header on every page**: banner, avatar, social icon row, a newsletter signup modal, and tab navigation.
- **Pages**
  - `/` (showcase): a featured YouTube video embed.
  - `/music`: link buttons for Spotify, Apple Music, YouTube, and Bandcamp.
  - `/socials`: link buttons for Ko-fi, TikTok, Threads, and Instagram.
  - `/latest`: the newest Spotify single (from the Spotify Web API) and the newest YouTube Music single (via [libmuse](https://www.npmjs.com/package/libmuse)), each loaded behind a skeleton.
- **Short redirects**: `/spotify`, `/apple`, `/youtube`, `/bandcamp`, `/soundcloud`, `/tiktok`, `/threads`, `/instagram`, `/facebook`, `/twitch`, `/ko-fi`, and `/github` each forward to the matching profile.
- **Newsletter**: a server action adds subscribers to a MailerLite group.
- **Caching**: Spotify tokens, album lists, and the latest-release lookups are cached in Vercel KV.

The "merch" tab is still a placeholder link.

## Stack

| Piece | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router, Turbopack in dev), React 19, TypeScript |
| Styling | Sass modules, DM Sans via `next/font` |
| Icons | Font Awesome |
| Data | Spotify Web API (client credentials), libmuse for YouTube Music, MailerLite API |
| Storage | `@vercel/kv` |
| Metrics | `@vercel/speed-insights` |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
npm run lint
```

Create a `.env.local` (`.env*` files are gitignored) with:

| Variable | Used for |
|----------|----------|
| `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET` | Spotify API token |
| `SPOTIFY_ARTIST_ID` | whose singles `/latest` shows |
| `YOUTUBE_ARTIST_ID` | YouTube Music artist lookup |
| `MAILER_API_KEY` | MailerLite subscriptions |
| `KV_REST_API_URL`, `KV_REST_API_TOKEN` | Vercel KV (read by `@vercel/kv`) |
| `LOG_LEVEL`, `LOG_LOCALE`, `LOG_TIMEZONE`, `LOG_SPACING` | optional logger settings (defaults: `info`, `en-US`, `America/Chicago`, off) |

## Customizing

- **Profile links**: the `redirects` list in `next.config.ts`. Every button and icon links to these short paths, so you only change a URL in one place.
- **Music / socials buttons**: `src/app/music/page.tsx` and `src/app/socials/page.tsx`.
- **Header icon row**: `src/app/_components/SocialGlyph/SocialGlyphCollection.tsx`.
- **Name, tagline, nav**: `src/app/_components/Header/Header.tsx` and `src/app/_components/Navigation/Navigation.tsx`.
- **Featured video**: the iframe `src` in `src/app/(showcase)/page.tsx`.
- **Site metadata and footer**: `src/app/layout.tsx`.
- **Images**: `src/assets/images/` (avatar, banner, background), plus `src/app/icon.png` and `src/app/opengraph-image.png`.
- **Theme**: `src/assets/styles/variables.sass` and friends.
- **Newsletter group**: the group ID in `src/features/mailerlite/subscribe.ts`.

## License

[MIT](LICENSE.md) © 2025 loafykitten
