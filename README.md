# Dhinesh Kandukuri — Portfolio

A performance- and SEO-optimized personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Features a developer-terminal hero, real project case studies, a skills matrix, research/experience section, and a contact block — all driven from a single content file.

## ✨ Features

- Next.js App Router with server-rendered metadata (great Core Web Vitals + SEO out of the box)
- Typed terminal hero animation built with `framer-motion` (respects `prefers-reduced-motion`)
- Fully responsive layout (mobile → desktop)
- Centralized content file (`app/data/content.ts`) — edit once, updates everywhere
- Full SEO config: Open Graph, Twitter cards, JSON-LD `Person` schema, `sitemap.xml`, `robots.txt`, `manifest.webmanifest`
- next/font self-hosted fonts (Space Grotesk, Inter, JetBrains Mono) — no render-blocking font requests
- Accessible: visible focus states, semantic landmarks, reduced-motion support

## 📁 Folder structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Header.tsx        # Sticky nav with mobile menu
│   │   ├── Hero.tsx           # Terminal-style typed intro (signature element)
│   │   ├── Projects.tsx       # Featured + secondary project cards
│   │   ├── Skills.tsx         # Skills/stack grid
│   │   ├── Research.tsx       # Research + experience + certifications
│   │   └── Contact.tsx        # Contact CTA + footer
│   ├── data/
│   │   └── content.ts         # ALL site copy & data lives here
│   ├── globals.css            # Tailwind layers + design tokens
│   ├── layout.tsx             # Root layout, fonts, full metadata, JSON-LD
│   ├── loading.tsx            # Route loading state
│   ├── not-found.tsx          # Custom 404
│   ├── page.tsx                # Homepage — assembles all sections
│   ├── robots.ts              # robots.txt generator
│   └── sitemap.ts             # sitemap.xml generator
├── public/
│   ├── favicon.svg            # Source favicon (see Favicons section)
│   └── manifest.webmanifest
├── next.config.js
├── tailwind.config.js         # Design tokens: colors, fonts, animations
├── postcss.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## 🚀 Setup instructions

**Requirements:** Node.js 18.17+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → open http://localhost:3000

# 3. Build for production
npm run build
npm run start

# 4. Lint
npm run lint
```

## ✏️ Editing content

All copy, projects, skills, and contact info live in **`app/data/content.ts`**. Update that file and every section (hero stats, project cards, skills grid, contact links) updates automatically — no need to touch component files for content changes.

To add a new project, append an object to the `projects` array:

```ts
{
  slug: 'project-slug',
  name: 'Project Name',
  description: 'One or two sentence summary.',
  highlights: ['Bullet one', 'Bullet two'],
  stack: ['React', 'Node.js'],
  github: 'https://github.com/...',
  link: 'https://your-live-demo.com', // optional
  featured: true, // featured = full case-study card, false = compact card
}
```

## 🎨 Design system

Defined in `tailwind.config.js`:

| Token | Value | Use |
|---|---|---|
| `ink` | `#0E1117` | Background |
| `panel` | `#151A23` | Card surfaces |
| `line` | `#232A38` | Borders |
| `paper` | `#E8EAED` | Primary text |
| `fog` | `#94A3B8` | Secondary text |
| `indigo` | `#6366F1` | Primary accent |
| `teal` | `#2DD4BF` | Secondary accent |

Fonts: **Space Grotesk** (display), **Inter** (body), **JetBrains Mono** (terminal/code UI).

## 🔍 SEO configuration

- `app/layout.tsx` — title template, description, keywords, Open Graph, Twitter card, JSON-LD `Person` schema, icons, manifest reference
- `app/sitemap.ts` — generates `/sitemap.xml`
- `app/robots.ts` — generates `/robots.txt`, points crawlers to the sitemap
- Update `siteUrl` in **both** `app/layout.tsx` and `app/sitemap.ts` / `app/robots.ts` to your real deployed domain before going live
- Add a real `public/og-image.png` (1200×630) for social share previews

## 📧 Contact form setup

The contact section includes a working form (`app/components/ContactForm.tsx`) backed by a Next.js API route (`app/api/contact/route.ts`) that sends email via [Resend](https://resend.com) (free tier: 3,000 emails/month, no credit card required).

1. Sign up at [resend.com](https://resend.com) and create an API key
2. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
3. Fill in your values:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   CONTACT_TO_EMAIL=your-real-email@example.com
   ```
4. Restart the dev server. Messages submitted through the form will arrive in your inbox, with the visitor's address set as reply-to so you can respond directly.

When deploying (e.g. to Vercel), add `RESEND_API_KEY` and `CONTACT_TO_EMAIL` as environment variables in your project settings — `.env.local` is gitignored and never committed.

If the env vars aren't set, the form will show a friendly error asking the visitor to email you directly — it won't crash the page.

## 🖼️ Favicons

A source `public/favicon.svg` is included (dark rounded square + `>_` glyph in indigo, matching the terminal theme). Generate the full icon set from it before deploying:

1. Go to [realfavicongenerator.net](https://realfavicongenerator.net) or use `npx pwa-asset-generator`
2. Upload `public/favicon.svg`
3. Export and place these files directly in `public/`:
   - `favicon.ico` (16×16, 32×32, 48×48 multi-size)
   - `icon-192.png` (192×192, referenced in manifest)
   - `icon-512.png` (512×512, referenced in manifest)
   - `apple-touch-icon.png` (180×180)

`app/layout.tsx` already references all of these paths — no code changes needed once the files are dropped in.

## ⚡ Performance notes

- Fonts are self-hosted via `next/font` (no external font requests, no layout shift)
- `next.config.js` enables `swcMinify` and image compression
- Animations are GPU-friendly (`transform`/`opacity` only) and respect `prefers-reduced-motion`
- All sections use `whileInView` so off-screen animations don't run until needed

## 📦 Deployment

Optimized for [Vercel](https://vercel.com) (zero-config):

```bash
npm i -g vercel
vercel
```

Or any Node host that supports `next build && next start`.
