export type CaseStudyFaq = {
  question: string;
  answer: string;
};

export type CaseStudySeo = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  articleHeadline: string;
  articleSummary: string;
  datePublished: string;
  dateModified: string;
  faqs: CaseStudyFaq[];
  howTo: {
    name: string;
    description: string;
    steps: string[];
  };
};

export const caseStudySeo: Record<string, CaseStudySeo> = {
  "matrimony-platform": {
    slug: "matrimony-platform",
    metaTitle:
      "Matrimony Platform Case Study — Laravel, Next.js, WebRTC & Real-time Chat | Md. Azharul Islam (Sohan)",
    metaDescription:
      "Full-stack matrimony platform built with Laravel 12 and Next.js 16 — verified profiles, compatibility matching, Laravel Reverb chat, WebRTC video calls, face verification, and SSLCommerz subscriptions. Production at mybouma.com. Open-source demo on GitHub.",
    keywords: [
      "matrimony platform developer",
      "matchmaking app Laravel",
      "Laravel Next.js full stack",
      "WebRTC developer portfolio",
      "Laravel Reverb real-time chat",
      "matrimonial website Bangladesh",
      "hire Laravel developer matrimony",
      "subscription platform Laravel",
      "face verification MediaPipe",
      "My Bouma developer",
      "matrimony platform case study",
      "full stack developer portfolio",
    ],
    articleHeadline: "Building a Production Matrimony Platform with Laravel 12 and Next.js 16",
    articleSummary:
      "Case study of a full-stack matrimonial platform for My Bouma — covering profile verification, compatibility matching, real-time chat via Laravel Reverb, WebRTC calls, face scan verification, subscription payments, and dual admin panels. Includes an open-source GitHub demo for local review.",
    datePublished: "2025-01-15",
    dateModified: "2026-03-15",
    faqs: [
      {
        question: "What technologies power the matrimony platform?",
        answer:
          "The platform uses Laravel 12 (PHP 8.2+) for the REST API, Next.js 16 with React 19 for the frontend, MySQL 8 for data, Laravel Sanctum for authentication, Laravel Reverb for real-time WebSocket chat, WebRTC for video calls, MediaPipe for face verification, and SSLCommerz for subscription payments in production.",
      },
      {
        question: "Is there a live demo of the matrimony platform?",
        answer:
          "The production client site is live at mybouma.com. For code review, an open-source sanitized demo is available on GitHub (matrimony-platform-demo) that can be cloned and run locally with Docker Compose.",
      },
      {
        question: "Can recruiters clone and run the matrimony platform demo?",
        answer:
          "Yes. Clone github.com/sazharul/matrimony-platform-demo, run docker compose up --build, and access the frontend at localhost:3000 and API at localhost:8000. Demo admin login: admin@matriconnect.demo / DemoAdmin123!",
      },
      {
        question: "What was the developer's role on the matrimony project?",
        answer:
          "Md. Azharul Islam (Sohan) was the full-stack developer — building the Laravel API, Next.js frontend, matching algorithm, real-time chat, WebRTC signaling, face scan integration, subscription system, and admin moderation tools.",
      },
      {
        question: "What features does the matrimony platform include?",
        answer:
          "Multi-step registration, rich matrimony profiles (religious, family, career, horoscope), compatibility matching with daily suggestions, profile search, interests and shortlist, real-time chat, WebRTC audio/video calls, face verification, subscription tiers (Free/Gold), photo moderation, CMS pages, and admin panels.",
      },
    ],
    howTo: {
      name: "How to run the Matrimony Platform demo locally",
      description:
        "Clone and start the open-source matrimony platform demo using Docker Compose on your local machine.",
      steps: [
        "Clone the repository: git clone https://github.com/sazharul/matrimony-platform-demo.git",
        "Navigate into the project: cd matrimony-platform-demo",
        "Start all services: docker compose up --build",
        "Open the frontend at http://localhost:3000 and API at http://localhost:8000",
        "Log in as admin with admin@matriconnect.demo / DemoAdmin123!",
      ],
    },
  },
  "ecommerce-analytics": {
    slug: "ecommerce-analytics",
    metaTitle:
      "E-commerce Analytics Platform Case Study — Laravel Event Tracking & Funnels | Md. Azharul Islam (Sohan)",
    metaDescription:
      "Production-style e-commerce analytics platform with Laravel — event ingestion SDK, Redis session resolution, visitor journeys, conversion funnels, bot detection, and 43+ PHPUnit tests. Open-source GitHub showcase for portfolio code review.",
    keywords: [
      "e-commerce analytics developer",
      "Laravel analytics platform",
      "event tracking Laravel",
      "conversion funnel dashboard",
      "Redis session tracking",
      "visitor analytics PHP",
      "hire Laravel analytics developer",
      "e-commerce data platform",
      "bot detection analytics",
      "PHPUnit analytics tests",
      "Enorsia analytics developer",
      "analytics platform case study",
    ],
    articleHeadline: "Building an E-commerce Analytics Platform with Laravel and Redis",
    articleSummary:
      "Case study of an internal analytics platform for a UK fashion e-commerce site — event tracking SDK, secure ingest API, Redis-backed session resolution, visitor journey timelines, conversion funnel dashboards, bot detection, and 43+ PHPUnit feature tests. Open-source recreation on GitHub.",
    datePublished: "2024-08-01",
    dateModified: "2026-03-15",
    faqs: [
      {
        question: "What does the e-commerce analytics platform track?",
        answer:
          "It tracks page views, user interactions, session grouping, visitor journeys, conversion funnels, and product engagement metrics. Events are captured via a resilient JavaScript SDK with offline queue support and ingested through a secure Laravel API.",
      },
      {
        question: "How is session resolution handled in the analytics system?",
        answer:
          "Sessions are resolved using Redis with a 30-minute gap logic and database fallback. This ensures accurate visitor grouping even when Redis is unavailable, maintaining data integrity for journey and funnel analysis.",
      },
      {
        question: "How many tests cover the analytics platform?",
        answer:
          "The open-source GitHub recreation includes 43+ PHPUnit feature tests covering event ingest, session resolution, bot detection, idempotent event handling, and admin dashboard functionality.",
      },
      {
        question: "Is the production analytics code publicly available?",
        answer:
          "No. The production EnoxTracker codebase remains private. The GitHub repository (ecommerce-analytics-platform) is an original recreation demonstrating the same architectural patterns at showcase-friendly scale for portfolio code review.",
      },
      {
        question: "How do I run the e-commerce analytics demo locally?",
        answer:
          "Clone github.com/sazharul/ecommerce-analytics-platform, run composer install, php artisan migrate --seed, npm run build, and php artisan serve. Visit /demo-store to generate events and /admin/tracker/dashboard to view analytics (login: admin@analytics.demo / password).",
      },
    ],
    howTo: {
      name: "How to run the E-commerce Analytics Platform demo locally",
      description:
        "Clone and set up the open-source e-commerce analytics platform for local exploration and code review.",
      steps: [
        "Clone: git clone https://github.com/sazharul/ecommerce-analytics-platform.git",
        "Install dependencies: composer install && cp .env.example .env && php artisan key:generate",
        "Set up database: touch database/database.sqlite && php artisan migrate --seed",
        "Build frontend assets: npm install && npm run build",
        "Start server: php artisan serve — then visit /demo-store and /admin/tracker/dashboard",
      ],
    },
  },
  "ai-shopping-assistant": {
    slug: "ai-shopping-assistant",
    metaTitle:
      "AI Shopping Assistant Case Study — LangGraph, RAG & OpenAI | Md. Azharul Islam (Sohan)",
    metaDescription:
      "Production AI shopping assistant for UK fashion e-commerce — LangGraph ReAct agent, hybrid FAISS + BM25 RAG, CLIP image search, SSE streaming, and Laravel order tools. Live widget at enorsia.com. Open-source demo on GitHub.",
    keywords: [
      "AI shopping assistant developer",
      "LangGraph e-commerce",
      "RAG product search",
      "FastAPI LangChain developer",
      "OpenAI chat widget",
      "CLIP image search e-commerce",
      "hire AI developer Laravel",
      "conversational commerce",
      "Enorsia AI developer",
      "AI shopping assistant case study",
      "LangGraph portfolio",
      "FAISS BM25 RAG",
    ],
    articleHeadline: "Building a Production AI Shopping Assistant with LangGraph and RAG",
    articleSummary:
      "Case study of a production AI shopping assistant for Enorsia UK fashion — LangGraph ReAct agent with 13+ commerce tools, hybrid FAISS + BM25 product and FAQ retrieval, CLIP image search, SSE streaming chat, and an embeddable React widget. Includes an open-source GitHub demo with synthetic data.",
    datePublished: "2025-06-01",
    dateModified: "2026-03-15",
    faqs: [
      {
        question: "What technologies power the AI shopping assistant?",
        answer:
          "The assistant uses Python 3.11 with FastAPI and LangGraph for the agent, OpenAI GPT-4o for reasoning, text-embedding-3-small for vector search, FAISS + BM25 hybrid RAG for products and FAQs, optional CLIP image search, and a React 19 embeddable chat widget with SSE streaming.",
      },
      {
        question: "Is there a live demo of the AI shopping assistant?",
        answer:
          "The production widget is embedded on enorsia.com. For code review, an open-source sanitized demo (ai-shopping-assistant-demo) is available on GitHub with synthetic StyleHub catalog data and DEMO_MODE API stubs.",
      },
      {
        question: "Can recruiters clone and run the AI shopping assistant demo?",
        answer:
          "Yes. Clone github.com/sazharul/ai-shopping-assistant-demo, set OPENAI_API_KEY, and run docker compose up --build. The chat widget runs at localhost:5173 and the API at localhost:8001/docs. Admin login: admin@stylehub.demo / DemoAdmin123!",
      },
      {
        question: "How does image search work without publishing client data?",
        answer:
          "The GitHub demo ships with 18 synthetic products and local SVG placeholder images. CLIP image search builds a FAISS index only from these demo images — no production CDN paths or client catalog data are included.",
      },
      {
        question: "What does DEMO_MODE do in the open-source demo?",
        answer:
          "When DEMO_MODE=true (the default), all Laravel commerce API calls return canned JSON stubs for order status, returns, discounts, and shipping. No outbound calls to a production backend are made.",
      },
    ],
    howTo: {
      name: "How to run the AI Shopping Assistant demo locally",
      description:
        "Clone and start the open-source AI shopping assistant demo using Docker Compose.",
      steps: [
        "Clone: git clone https://github.com/sazharul/ai-shopping-assistant-demo.git",
        "Navigate: cd ai-shopping-assistant-demo",
        "Set API key: export OPENAI_API_KEY=your-openai-key",
        "Start services: docker compose up --build",
        "Open the chat widget at http://localhost:5173 and API docs at http://localhost:8001/docs",
      ],
    },
  },
  "insurance-platform": {
    slug: "insurance-platform",
    metaTitle:
      "Insurance Management System Case Study — Laravel Premium Calculator & APIs | Md. Azharul Islam (Sohan)",
    metaDescription:
      "Non-life insurance platform with 12+ online premium calculators, admin tariff CMS, customer dashboards, SSLCommerz checkout, and Flutter REST APIs. Production at eastlandinsurance.com. Open-source CoverSure demo on GitHub.",
    keywords: [
      "insurance platform developer",
      "Laravel insurance calculator",
      "premium calculation engine",
      "insurance REST API developer",
      "Flutter insurance API",
      "SSLCommerz insurance",
      "hire Laravel insurance developer",
      "insurance management system",
      "non-life insurance Bangladesh",
      "insurance platform case study",
      "Laravel business rules engine",
    ],
    articleHeadline: "Building an Insurance Management System with Laravel Premium Calculators",
    articleSummary:
      "Case study of a non-life insurance platform — 12+ online premium calculators (fire, motor, marine, mediclaim, personal accident), configurable tariff engine with 40+ lookup models, admin CMS, customer portal with SSLCommerz checkout, and Sanctum REST APIs for Flutter mobile apps. Production at eastlandinsurance.com. Open-source CoverSure demo on GitHub.",
    datePublished: "2024-01-01",
    dateModified: "2026-03-15",
    faqs: [
      {
        question: "What technologies power the insurance management system?",
        answer:
          "The platform uses Laravel 9 (PHP 8.1+) with MySQL 8, Blade admin and public UI, Sanctum for mobile API auth, SSLCommerz for policy purchase payments, and 156 database migrations across 40+ calculator tariff models.",
      },
      {
        question: "Is there a live demo of the insurance platform?",
        answer:
          "The production client site is live at eastlandinsurance.com. For code review, an open-source sanitized demo (insurance-platform-demo) is available on GitHub as CoverSure — clone and run with Docker Compose locally.",
      },
      {
        question: "How do I clone and run the insurance platform demo?",
        answer:
          "Clone github.com/sazharul/insurance-platform-demo, run docker compose up --build, open localhost:8001, and log in with admin@coversure.demo / DemoAdmin123! or customer@coversure.demo / DemoUser123!. OTP is 123456 in DEMO_MODE.",
      },
      {
        question: "What insurance products does the platform support?",
        answer:
          "Fire, motor, marine cargo, overseas mediclaim, personal accident, peoples personal accident, Bangobandhu Suroksha Bima, flat/apartment owner, cash-in-safe, cash-in-transit, cash on counter, and boiler insurance — each with its own tariff lookup tables and calculation logic.",
      },
      {
        question: "What does DEMO_MODE do?",
        answer:
          "When DEMO_MODE=true (the default), SSLCommerz payment redirects are skipped and orders complete instantly. API OTP is fixed to 123456. Mail uses the log driver — no SMTP or payment gateway credentials required.",
      },
    ],
    howTo: {
      name: "How to run the Insurance Platform demo locally",
      description: "Clone and start the CoverSure insurance demo using Docker Compose.",
      steps: [
        "Clone: git clone https://github.com/sazharul/insurance-platform-demo.git",
        "Navigate: cd insurance-platform-demo",
        "Start: docker compose up --build",
        "Open website at http://localhost:8001",
        "Log in with admin@coversure.demo / DemoAdmin123! and explore premium calculators",
      ],
    },
  },
  "enterprise-retail": {
    slug: "enterprise-retail",
    metaTitle:
      "Enterprise Retail Platform Case Study — Laravel, React & Node.js Catalog API | Md. Azharul Islam (Sohan)",
    metaDescription:
      "Skincare e-commerce at scale — Laravel write API, React storefront, Node.js catalog read layer, multi-warehouse inventory, Flutter REST APIs. Production at perfectobd.com. Open-source GlowCart demo on GitHub.",
    keywords: [
      "enterprise retail developer",
      "Laravel e-commerce developer",
      "React e-commerce portfolio",
      "Node.js catalog API",
      "Laravel React full stack",
      "Flutter e-commerce API",
      "hire Laravel e-commerce developer",
      "skincare e-commerce Bangladesh",
      "enterprise retail case study",
      "multi-warehouse inventory Laravel",
      "e-commerce performance optimization",
    ],
    articleHeadline: "Building an Enterprise Retail Platform with Laravel, React, and Node.js",
    articleSummary:
      "Case study of a production skincare e-commerce platform — Laravel for auth, cart, and orders; React storefront; Node.js read API for catalog performance; multi-warehouse stock; Pathao shipping; Flutter mobile APIs. Production at perfectobd.com. Open-source GlowCart demo on GitHub.",
    datePublished: "2023-06-01",
    dateModified: "2026-03-15",
    faqs: [
      {
        question: "What technologies power the enterprise retail platform?",
        answer:
          "Laravel 10 (PHP) for the write API and admin, React 18 with Vite and Redux for the storefront, Node.js Express for high-traffic catalog reads, MySQL 8, and Sanctum for API authentication. A Flutter mobile app consumes the Laravel APIs in production.",
      },
      {
        question: "Why was a Node.js catalog API added?",
        answer:
          "Public catalog endpoints (homepage sections, product filters, attribute facets) slowed under production load on Laravel. A dedicated read-only Express layer with GZIP compression and raw SQL offloads those paths while Laravel remains the source of truth for writes.",
      },
      {
        question: "How do I clone and run the GlowCart demo?",
        answer:
          "Clone github.com/sazharul/enterprise-retail-demo, run docker compose up --build, open localhost:5174 for the storefront. Admin: admin@glowcart.demo / DemoAdmin123!. Customer: customer@glowcart.demo / DemoUser123!. OTP is 123456 in DEMO_MODE.",
      },
      {
        question: "Is there a live production site?",
        answer:
          "Yes — the production client site is live at perfectobd.com. The GitHub repo is a sanitized demo (GlowCart) for portfolio review, not the full production codebase.",
      },
      {
        question: "What does DEMO_MODE do in the retail demo?",
        answer:
          "DEMO_MODE stubs Pathao shipping with canned data, returns fixed OTP 123456, and serves static JSON for offers, shipping (60 BDT), and rewards — no production pricing engines or third-party credentials required.",
      },
    ],
    howTo: {
      name: "How to run the Enterprise Retail demo locally",
      description: "Clone and start the GlowCart enterprise retail demo using Docker Compose.",
      steps: [
        "Clone: git clone https://github.com/sazharul/enterprise-retail-demo.git",
        "Navigate: cd enterprise-retail-demo",
        "Start: docker compose up --build",
        "Open storefront at http://localhost:5174",
        "Log in with customer@glowcart.demo / DemoUser123! or admin@glowcart.demo / DemoAdmin123!",
      ],
    },
  },
  "reverb-platform": {
    slug: "reverb-platform",
    metaTitle:
      "Real-time Event Platform Case Study — Laravel Reverb & WebSockets | Md. Azharul Islam (Sohan)",
    metaDescription:
      "Self-hosted multi-tenant Laravel Reverb platform — HMAC-signed event API, channel ACLs, subscription plans, event logging, and Pulse monitoring. Open-source PulseWire demo on GitHub for local review.",
    keywords: [
      "Laravel Reverb developer",
      "WebSocket platform Laravel",
      "multi-tenant real-time",
      "Pusher alternative Laravel",
      "Laravel Reverb portfolio",
      "real-time event API",
      "hire Laravel WebSocket developer",
      "Laravel Pulse monitoring",
      "real-time platform case study",
      "Laravel SaaS developer",
    ],
    articleHeadline: "Building a Multi-tenant Real-time Event Platform with Laravel Reverb",
    articleSummary:
      "Case study of a self-hosted Pusher-style platform built on Laravel Reverb — multi-tenant app management, HMAC-signed event trigger API, channel permission enforcement via custom EventDispatcher, subscription plan limits, SSLCommerz billing with DEMO_MODE, and Laravel Pulse monitoring. Open-source PulseWire demo on GitHub.",
    datePublished: "2026-01-01",
    dateModified: "2026-03-15",
    faqs: [
      {
        question: "What technologies power the real-time event platform?",
        answer:
          "The platform uses Laravel 12 with Laravel Reverb for WebSockets, Livewire for the dashboard, Spatie Permission for RBAC, Sanctum for API tokens, database queues for event log jobs, SSLCommerz for subscriptions (bypassed in DEMO_MODE), and Laravel Pulse for production monitoring.",
      },
      {
        question: "Is there a live demo of the real-time platform?",
        answer:
          "No public live demo. An open-source sanitized recreation (reverb-platform-demo) is available on GitHub as PulseWire — clone and run with Docker Compose locally.",
      },
      {
        question: "How do I clone and run the Reverb platform demo?",
        answer:
          "Clone github.com/sazharul/reverb-platform-demo, run docker compose up --build, open localhost:8000, and log in with demo@pulsewire.demo / DemoUser123!. Trigger events using the HMAC-signed API example in the README.",
      },
      {
        question: "How does this relate to the Matrimony Platform?",
        answer:
          "The Matrimony Platform uses Laravel Reverb for real-time chat on mybouma.com. This project is the infrastructure layer — a multi-tenant Reverb management platform that can host apps for similar real-time workloads.",
      },
      {
        question: "What does DEMO_MODE do?",
        answer:
          "When DEMO_MODE=true (the default), paid subscription plans activate instantly without redirecting to SSLCommerz. Free plan subscription also works without payment gateway credentials.",
      },
    ],
    howTo: {
      name: "How to run the Real-time Event Platform demo locally",
      description: "Clone and start the PulseWire demo using Docker Compose.",
      steps: [
        "Clone: git clone https://github.com/sazharul/reverb-platform-demo.git",
        "Navigate: cd reverb-platform-demo",
        "Start: docker compose up --build",
        "Open dashboard at http://localhost:8000",
        "Log in with demo@pulsewire.demo / DemoUser123! and explore My Apps and Events",
      ],
    },
  },
};

export function getCaseStudySeo(slug: string): CaseStudySeo | undefined {
  return caseStudySeo[slug];
}
