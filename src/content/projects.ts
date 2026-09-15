export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  featured: boolean;
  demoUrl?: string;
  repoUrl: string;
  company?: string;
  role?: string;
};

export const projects: Project[] = [
  {
    slug: "ai-shopping-assistant",
    title: "AI Shopping Assistant",
    tagline: "LangGraph agent with RAG product search, image search, and order tools",
    description:
      "Production AI shopping assistant for Enorsia UK fashion — conversational product discovery, FAQ RAG, CLIP image search, and Laravel order integration. Open-source demo on GitHub.",
    tags: ["Python", "FastAPI", "LangGraph", "OpenAI", "RAG", "React"],
    featured: true,
    demoUrl: "https://enorsia.com/",
    repoUrl: "https://github.com/sazharul/ai-shopping-assistant-demo",
    company: "Enorsia (Pakiza Group)",
    role: "Software Developer",
  },
  {
    slug: "matrimony-platform",
    title: "Matrimony Platform",
    tagline: "Full-stack matchmaking with real-time chat, video calls, and face verification",
    description:
      "Production matrimonial platform for My Bouma — profiles, compatibility matching, subscriptions, WebRTC calls, and admin moderation. Open-source demo repo available for local review.",
    tags: ["Laravel", "Next.js", "WebRTC", "Real-time", "MySQL", "Subscriptions"],
    featured: true,
    demoUrl: "https://mybouma.com/",
    repoUrl: "https://github.com/sazharul/matrimony-platform-demo",
    company: "My Bouma (Client Project)",
    role: "Full-Stack Developer",
  },
  {
    slug: "ecommerce-analytics",
    title: "E-commerce Analytics Platform",
    tagline: "Event tracking, visitor journeys, and business dashboards",
    description:
      "Open-source GitHub showcase of production-style analytics: event ingestion, Redis session resolution, bot detection, funnel dashboards, and 43+ tests. Clone locally to explore — no public live demo.",
    tags: ["Laravel", "MySQL", "Redis", "Analytics", "REST API"],
    featured: true,
    repoUrl: "https://github.com/sazharul/ecommerce-analytics-platform",
    company: "Enorsia (Pakiza Group)",
    role: "Software Developer",
  },
  {
    slug: "payment-gateway",
    title: "Payment Gateway Platform",
    tagline: "Centralized fintech payment workflow for multi-business operations",
    description:
      "US client payment gateway unifying transaction workflows across multiple businesses with admin reporting and banking API integration.",
    tags: ["Laravel", "FinTech", "REST API", "RBAC"],
    featured: true,
    demoUrl: "https://payments.azharulislamsohan.com",
    repoUrl: "https://github.com/sazharul/payment-gateway-demo",
    company: "Hsblco Solution",
    role: "Full-Stack Web Developer → Team Leader",
  },
  {
    slug: "insurance-platform",
    title: "Insurance Management System",
    tagline: "Complex business-rule engine with mobile API integration",
    description:
      "Insurance platform with premium calculation, policy management, customer dashboards, and Flutter mobile APIs.",
    tags: ["Laravel", "Business Rules", "REST API", "MySQL"],
    featured: true,
    demoUrl: "https://payments.azharulislamsohan.com",
    repoUrl: "https://github.com/sazharul/insurance-calculator-demo",
    company: "Wizard Software & Technology Bangladesh Ltd.",
    role: "Software Engineer — informal technical lead",
  },
  {
    slug: "enterprise-retail",
    title: "Enterprise Retail Platform",
    tagline: "Large-scale retail operations with inventory and order workflows",
    description:
      "Enterprise retail system with complex inventory, order management, and production API optimization.",
    tags: ["Laravel", "E-commerce", "MySQL", "API"],
    featured: false,
    demoUrl: "https://analytics.azharulislamsohan.com",
    repoUrl: "https://github.com/sazharul",
    company: "Wizard Software & Technology Bangladesh Ltd.",
    role: "Lead Implementation Engineer",
  },
  {
    slug: "reverb-platform",
    title: "Real-time Event Platform",
    tagline: "Multi-tenant Laravel Reverb SaaS with signed APIs and channel permissions",
    description:
      "Self-hosted Pusher-style platform — multi-tenant Reverb apps, HMAC-signed event API, channel ACLs, subscription plans, event logging, and Pulse monitoring. Open-source demo on GitHub.",
    tags: ["Laravel", "Reverb", "WebSockets", "Livewire", "SaaS"],
    featured: false,
    repoUrl: "https://github.com/sazharul/reverb-platform-demo",
    company: "Personal / Infrastructure Project",
    role: "Software Developer",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
