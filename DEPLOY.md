# Deployment Guide — Portfolio (Vercel)

## Prerequisites

- GitHub repo: `github.com/sazharul/portfolio`
- Vercel account
- Domain `azharulislamsohan.com` on Namecheap (optional at first deploy)

## Steps

1. Push the `portfolio/` folder to GitHub.
2. In Vercel: **Add New Project → Import Git Repository**.
3. Root directory: `/` (if repo is portfolio-only) or set to `portfolio` if using monorepo.
4. Deploy — Vercel auto-detects Next.js.
5. Add custom domain `azharulislamsohan.com` in Vercel project settings.
6. Update Namecheap DNS per Vercel instructions.

## Post-deploy Checklist

- [ ] Home, About, Projects, Contact load correctly
- [ ] Case study pages render markdown
- [ ] E-commerce analytics project links to GitHub (no live demo URL)
- [ ] Add portfolio URL to LinkedIn Featured + GitHub profile README

## Analytics showcase

The e-commerce analytics project is **GitHub-only** — reviewers clone [ecommerce-analytics-platform](https://github.com/sazharul/ecommerce-analytics-platform) locally. No Railway subdomain required.
