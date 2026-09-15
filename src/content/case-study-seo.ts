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
};

export function getCaseStudySeo(slug: string): CaseStudySeo | undefined {
  return caseStudySeo[slug];
}
