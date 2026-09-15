# Case Study: E-commerce Analytics Platform

**Type:** Analytics / Data Platform  
**Company:** Enorsia (Pakiza Group)  
**Role:** Implementation Engineer (under engineering lead guidance)  
**Status:** Production (work experience) + GitHub portfolio showcase (open source, local only)

---

## Overview

Enorsia's management needed visibility into customer behavior on their UK fashion e-commerce site — visitor tracking, engagement metrics, conversion funnels, and product analytics. I contributed to building this internal analytics platform under the engineering lead's technical direction.

The open-source recreation on GitHub demonstrates the same architectural patterns at a showcase-friendly scale. **There is no public live demo** — the code is published for review on GitHub; reviewers can clone and run locally.

---

## Business Problem

- No structured visibility into how customers used the website
- Marketing and management decisions needed data, not guesses
- Required event tracking, session grouping, visitor journeys, and dashboards
- Production e-commerce site — data accuracy and performance mattered

---

## My Contribution

- Developed backend APIs for analytics data processing and retrieval
- Designed and managed MySQL database structures for analytics data
- Implemented event tracking to capture user interactions
- Built visitor journey tracking features
- Developed dashboard interfaces for monitoring analytics and reports
- Worked under engineering lead guidance on architecture and analytics design

**Honest scope:** I implemented major components — the engineering lead owned architecture, technology selection, and overall system design.

---

## Technical Stack

| Layer | Technology |
|-------|-----------|
| Backend | Laravel, PHP, REST APIs |
| Database | MySQL, Redis |
| Frontend | JavaScript SDK + Blade dashboards |
| Tools | Git, PHPUnit |

---

## Portfolio Recreation (GitHub)

**Repository:** [github.com/sazharul/ecommerce-analytics-platform](https://github.com/sazharul/ecommerce-analytics-platform)

| Pattern | Implementation |
|---------|----------------|
| Resilient SDK | localStorage queue, exponential backoff, offline flush |
| Secure ingest | Bearer API key, rate limiting, validation |
| Session resolution | Redis with 30-min gap + DB fallback |
| Idempotent ingest | Client UUID + `updateOrInsert` on `event_id` |
| Bot detection | UA patterns + Cloudflare bot score |
| Structured logging | Step-coded `AnalyticsLogger` |
| Admin drill-down | Session list + event timeline |
| Tests | 43+ PHPUnit feature tests |

### Explore locally

```bash
git clone https://github.com/sazharul/ecommerce-analytics-platform.git
cd ecommerce-analytics-platform
composer install && cp .env.example .env && php artisan key:generate
touch database/database.sqlite && php artisan migrate --seed
npm install && npm run build && php artisan serve
```

Then open `/demo-store` and `/admin/tracker/dashboard` (login: `admin@analytics.demo` / `password`).

**Note:** Production analytics code from client work remains private. This repo is an **original portfolio showcase** for hiring review — not client production source code. [Legal & demo notice](/legal).
