export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  featured: boolean;
  demoUrl: string;
  repoUrl: string;
  company?: string;
  role?: string;
};

export const projects: Project[] = [
  {
    slug: "ecommerce-analytics",
    title: "E-commerce Analytics Platform",
    tagline: "Event tracking, visitor journeys, and business dashboards",
    description:
      "Portfolio recreation of a production-style analytics system with event ingestion, session grouping, funnel reporting, and an admin dashboard.",
    tags: ["Laravel", "MySQL", "Analytics", "REST API", "Chart.js"],
    featured: true,
    demoUrl: "https://analytics.mdazharulislam.com",
    repoUrl: "https://github.com/sazharul/ecommerce-analytics-platform",
    company: "Portfolio Demo",
    role: "Full-stack implementation",
  },
  {
    slug: "payment-gateway",
    title: "Payment Gateway Platform",
    tagline: "Centralized fintech payment workflow for multi-business operations",
    description:
      "US client payment gateway unifying transaction workflows across multiple businesses with admin reporting and banking API integration.",
    tags: ["Laravel", "FinTech", "REST API", "RBAC"],
    featured: true,
    demoUrl: "https://payments.mdazharulislam.com",
    repoUrl: "https://github.com/sazharul/payment-gateway-demo",
    company: "HSBLCO Ltd.",
    role: "Primary Implementation Engineer",
  },
  {
    slug: "insurance-platform",
    title: "Insurance Management System",
    tagline: "Complex business-rule engine with mobile API integration",
    description:
      "Insurance platform with premium calculation, policy management, customer dashboards, and Flutter mobile APIs.",
    tags: ["Laravel", "Business Rules", "REST API", "MySQL"],
    featured: true,
    demoUrl: "https://payments.mdazharulislam.com",
    repoUrl: "https://github.com/sazharul/insurance-calculator-demo",
    company: "WizTecBD",
    role: "Lead Laravel Developer",
  },
  {
    slug: "enterprise-retail",
    title: "Enterprise Retail Platform",
    tagline: "Large-scale retail operations with inventory and order workflows",
    description:
      "Enterprise retail system with complex inventory, order management, and production API optimization.",
    tags: ["Laravel", "E-commerce", "MySQL", "API"],
    featured: false,
    demoUrl: "https://analytics.mdazharulislam.com",
    repoUrl: "https://github.com/sazharul",
    company: "WizTecBD",
    role: "Lead Implementation Engineer",
  },
  {
    slug: "ai-shopping-assistant",
    title: "AI Shopping Assistant",
    tagline: "OpenAI-powered product search and customer assistance",
    description:
      "Production-style AI assistant with chat-based product discovery and image search integration.",
    tags: ["Laravel", "OpenAI API", "AI", "E-commerce"],
    featured: false,
    demoUrl: "https://analytics.mdazharulislam.com",
    repoUrl: "https://github.com/sazharul",
    company: "Enorsia",
    role: "Implementation Engineer",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
