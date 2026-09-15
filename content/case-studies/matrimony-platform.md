# Case Study: Matrimony Platform

**Type:** Matrimonial / Matchmaking Platform  
**Company:** My Bouma (Client Project)  
**Duration:** Ongoing  
**Role:** Full-Stack Developer  
**Status:** Production ([mybouma.com](https://mybouma.com/)) + GitHub demo repo

---

## Overview

My Bouma is a family-friendly matrimonial platform for Bangladesh and the NRB (Non-Resident Bangladeshi) community. The platform connects verified brides and grooms through smart matching, secure chat, and premium features like HD video calling and face verification.

I built the full-stack application — Laravel API backend, Next.js frontend, real-time chat, WebRTC calls, subscription payments, and admin moderation tools.

---

## Business Problem

- Families need a trusted, privacy-first platform for serious matchmaking
- Fake profiles and unverified accounts undermine trust
- Premium features (video calls, profile views, advanced search) require subscription management
- Real-time communication must be secure without sharing personal phone numbers
- Admin team needs tools to moderate photos, reports, and user accounts

---

## My Responsibilities

- Laravel 12 REST API with versioning, Sanctum auth, and Swagger documentation
- Next.js 16 frontend with App Router, TanStack Query, and shadcn/ui
- Compatibility matching algorithm with daily match digest
- Real-time chat via Laravel Reverb with typing indicators and read receipts
- WebRTC audio/video call signaling and ICE server management
- Face scan verification using MediaPipe (browser-side)
- Subscription tiers (Free/Gold) with SSLCommerz payment integration
- Admin panels — Next.js admin and Laravel Blade super-admin
- Photo moderation, report queue, and CMS for public pages
- Database design (57 migrations, 32 Eloquent models)

---

## Technical Stack

| Layer | Technology |
|-------|-----------|
| Backend | Laravel 12, PHP 8.2+, REST APIs |
| Frontend | Next.js 16, React 19, TypeScript |
| Database | MySQL 8 |
| Auth | Laravel Sanctum |
| Real-time | Laravel Reverb, Laravel Echo |
| Styling | Tailwind CSS 4, shadcn/ui |
| State | Zustand, TanStack Query |
| Search | Laravel Scout (database driver) |
| Payments | SSLCommerz (Bangladesh) |
| Calls | WebRTC + coturn TURN server |
| Face scan | MediaPipe Tasks Vision |
| Storage | Cloudflare R2 + Cloudflare Images (production) |

---

## Portfolio Recreation (GitHub)

**Repository:** [github.com/sazharul/matrimony-platform-demo](https://github.com/sazharul/matrimony-platform-demo)

> Independent portfolio demo for hiring review — **not** My Bouma production source code. [Legal & demo notice](/legal).

| Pattern | Demo implementation |
|---------|-------------------|
| Rebrand | Enorsia/My Bouma → MatriConnect (fictional demo name) |
| Payments | `DEMO_MODE=true` bypasses SSLCommerz, activates plans instantly |
| Photos | SVG placeholder avatars (no Cloudflare Images) |
| Users | 30 seeded demo accounts with Faker data |
| Content | Success stories labeled as fictional demo content |
| Secrets | All credentials replaced with placeholders |

### Run locally

```bash
git clone https://github.com/sazharul/matrimony-platform-demo.git
cd matrimony-platform-demo
docker compose up --build
```

- Frontend: http://localhost:3000
- API: http://localhost:8000
- Admin: `admin@matriconnect.demo` / `DemoAdmin123!`

See [docs/DEMO_ACCOUNTS.md](https://github.com/sazharul/matrimony-platform-demo/blob/main/docs/DEMO_ACCOUNTS.md) for full credentials.

---

## Production Site

Live client platform: [mybouma.com](https://mybouma.com/)
