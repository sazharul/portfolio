# Portfolio Site — azharulislamsohan.com

Next.js portfolio showcasing projects, case studies, and contact links.

Public GitHub demos linked from this site are **independent portfolio showcases for hiring** — not client or employer production source code. See [/legal](https://azharulislamsohan.com/legal) on the live site.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push `portfolio/` to `github.com/sazharul/portfolio`
2. Import repo in Vercel
3. Framework preset: **Next.js**
4. Add custom domain `azharulislamsohan.com`
5. On Namecheap DNS:
   - `@` → Vercel
   - `www` → Vercel

## Project Links Config

Edit `src/content/projects.ts` to update demo URLs, GitHub repos, and featured projects.

## SEO

- `src/app/sitemap.ts`
- `src/app/robots.ts`
- Metadata in `src/app/layout.tsx`
