# Case Study: Enterprise Retail Platform

**Type:** Enterprise E-commerce  
**Company:** Wizard Software & Technology Bangladesh Ltd.  
**Role:** Lead Implementation Engineer  
**Status:** Production — [perfectobd.com](https://perfectobd.com/)  
**Demo:** [enterprise-retail-demo](https://github.com/sazharul/enterprise-retail-demo) (GlowCart)

---

## Overview

Production skincare e-commerce platform with React storefront, Laravel write API, Node.js catalog read layer, multi-warehouse inventory, Pathao shipping, rewards, and Flutter mobile app APIs.

---

## Architecture

- **React storefront** — fast catalog browsing via Node read API
- **Laravel API** — auth, cart, checkout, orders, admin CMS
- **Node catalog API** — homepage, product filters, search (performance offload)
- **Flutter app** — consumes Laravel Sanctum APIs (source not in demo)

---

## Highlights

- Three-tier read/write split for production performance
- 80+ database migrations, 19 CMS homepage sections
- Multi-warehouse stock, product variants, offers, and blog
- Open-source **GlowCart** demo with DEMO_MODE and Docker Compose

---

## Clone the demo

```bash
git clone https://github.com/sazharul/enterprise-retail-demo.git
cd enterprise-retail-demo
docker compose up --build
```

Storefront: http://localhost:5174 · API: http://localhost:8002/api · Catalog: http://localhost:4001/api/node

---

## Portfolio & legal notice

The [enterprise-retail-demo](https://github.com/sazharul/enterprise-retail-demo) repository (GlowCart) is an **independent portfolio showcase** for hiring review — same technology stack and architecture patterns as production work, **not** the source code of PerfectoBD or any client. [Legal & demo notice](/legal).
