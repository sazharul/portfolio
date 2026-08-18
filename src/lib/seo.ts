import type { Metadata } from "next";

export const SITE_URL = "https://www.azharulislamsohan.com";
export const SITE_DOMAIN = "azharulislamsohan.com";
export const SITE_NAME = "Azharul Sohan";
export const AUTHOR_NAME = "MD. Azharul Islam (Sohan)";
export const AUTHOR_SHORT_NAME = "Azharul Sohan";
export const FIRST_NAME = "Azharul";
export const LAST_NAME = "Sohan";
export const FULL_NAME = "Azharul Islam Sohan";
export const JOB_TITLE = "Senior Software Engineer";
export const JOB_TITLE_SHORT = "Software Engineer";
export const JOB_FOCUS = "Laravel & PHP Engineer";
export const LOCATION = "Dhaka, Bangladesh";
export const CURRENT_COMPANY = "Enorsia";
export const PROFILE_IMAGE_PATH = "/profile.jpg";

// Name searches + hiring-intent searches (long-tail, location + skill focused).
export const DEFAULT_TITLE = "Azharul Sohan | Hire Experienced Software Engineer — Laravel, PHP";
export const DEFAULT_DESCRIPTION =
  "Hire Azharul (Sohan) — experienced senior software engineer in Dhaka. 8+ years Laravel, PHP, fintech & e-commerce. Remote, contract & full-time.";
export const LINKEDIN_URL = "https://www.linkedin.com/in/azharul-islam-sohan/";
export const GITHUB_URL = "https://github.com/sazharul";
export const EMAIL = "ahamedsohan592@gmail.com";

export const HIRING_KEYWORDS = [
  "hire software engineer",
  "hire experienced software engineer",
  "hire senior software engineer",
  "hire laravel developer",
  "hire php developer",
  "hire software engineer bangladesh",
  "hire laravel developer dhaka",
  "hire remote software engineer",
  "experienced software engineer",
  "senior software engineer for hire",
  "best laravel developer bangladesh",
  "contract software engineer",
  "freelance laravel developer",
  "fintech software engineer hire",
  "e-commerce developer hire",
];

export const DEFAULT_KEYWORDS = [
  ...HIRING_KEYWORDS,
  "azharul software engineer",
  "sohan software engineer",
  "azharul laravel developer",
  "sohan laravel developer",
  "azharul php developer",
  "sohan php developer",
  "azharul sohan",
  "azharul",
  "sohan",
  FULL_NAME,
  "MD Azharul Islam",
  "software engineer Dhaka",
  "Laravel developer Bangladesh",
  "PHP developer Dhaka",
  "senior software engineer Bangladesh",
  "fintech software engineer",
  "e-commerce developer",
  "remote Laravel developer",
];

const robots = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
  },
};

const profileImage = {
  url: PROFILE_IMAGE_PATH,
  width: 800,
  height: 800,
  alt: `${AUTHOR_SHORT_NAME} — ${JOB_TITLE}`,
};

type PageSeoOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: "website" | "article";
  noIndex?: boolean;
  absoluteTitle?: boolean;
};

export function createPageMetadata(options: PageSeoOptions): Metadata {
  const url = `${SITE_URL}${options.path}`;
  const keywords = options.keywords ?? DEFAULT_KEYWORDS;
  const title = options.absoluteTitle ? { absolute: options.title } : options.title;

  return {
    title,
    description: options.description,
    keywords,
    authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
    creator: AUTHOR_NAME,
    publisher: AUTHOR_NAME,
    alternates: {
      canonical: url,
    },
    robots: options.noIndex ? { index: false, follow: false } : robots,
    openGraph: {
      title: options.title,
      description: options.description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: options.ogType ?? "website",
      images: [profileImage],
    },
    twitter: {
      card: "summary_large_image",
      title: options.title,
      description: options.description,
      images: [PROFILE_IMAGE_PATH],
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${AUTHOR_SHORT_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
  creator: AUTHOR_NAME,
  publisher: AUTHOR_NAME,
  applicationName: SITE_NAME,
  category: "technology",
  robots,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [profileImage],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [PROFILE_IMAGE_PATH],
  },
};

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: [AUTHOR_NAME, FULL_NAME, FIRST_NAME, LAST_NAME, "MD Azharul Islam"],
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    inLanguage: "en-US",
    publisher: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
  };
}

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}#person`,
    name: AUTHOR_NAME,
    givenName: FIRST_NAME,
    familyName: LAST_NAME,
    alternateName: [FIRST_NAME, LAST_NAME, AUTHOR_SHORT_NAME, FULL_NAME, "MD Azharul Islam"],
    url: SITE_URL,
    image: `${SITE_URL}${PROFILE_IMAGE_PATH}`,
    jobTitle: JOB_TITLE,
    description: DEFAULT_DESCRIPTION,
    email: EMAIL,
    nationality: {
      "@type": "Country",
      name: "Bangladesh",
    },
    homeLocation: {
      "@type": "Place",
      name: LOCATION,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    worksFor: {
      "@type": "Organization",
      name: CURRENT_COMPANY,
      jobTitle: "Software Developer",
    },
    alumniOf: [
      {
        "@type": "Organization",
        name: "WizTecBD",
        description: "Lead implementation engineer for insurance, retail, and education platforms.",
      },
      {
        "@type": "Organization",
        name: "HSBLCO Ltd.",
        description: "Payment gateway implementation and team leadership for US fintech client.",
      },
    ],
    knowsAbout: [
      "Laravel",
      "PHP",
      "JavaScript",
      "React",
      "MySQL",
      "REST APIs",
      "E-commerce",
      "FinTech",
      "Insurance platforms",
      "Analytics",
      "OpenAI API",
      "Payment gateways",
    ],
    sameAs: [LINKEDIN_URL, GITHUB_URL],
  };
}

export function getProfessionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${AUTHOR_SHORT_NAME} — Software Engineering`,
    url: `${SITE_URL}/contact`,
    description:
      "Hire an experienced senior software engineer for Laravel, PHP, fintech, e-commerce, insurance, analytics, and AI product work.",
    provider: {
      "@id": `${SITE_URL}#person`,
    },
    areaServed: [
      { "@type": "Country", name: "Bangladesh" },
      { "@type": "Place", name: "Remote" },
      { "@type": "Place", name: "European Union" },
    ],
    serviceType: [
      "Software engineering",
      "Laravel development",
      "PHP development",
      "Full-stack development",
      "Fintech software",
      "E-commerce development",
    ],
    knowsAbout: [
      "Laravel",
      "PHP",
      "React",
      "MySQL",
      "REST APIs",
      "FinTech",
      "E-commerce",
      "Analytics",
      "OpenAI API",
    ],
  };
}

export function getFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getProfilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${AUTHOR_SHORT_NAME} — ${JOB_TITLE}`,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    mainEntity: {
      "@id": `${SITE_URL}#person`,
    },
    inLanguage: "en-US",
  };
}

export function getBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function getProjectJsonLd(project: {
  title: string;
  description: string;
  tagline: string;
  slug: string;
  demoUrl: string;
  repoUrl: string;
  tags: string[];
  company?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: `${project.tagline}. ${project.description}`,
    url: `${SITE_URL}/projects/${project.slug}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    keywords: project.tags.join(", "),
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    ...(project.company
      ? {
          provider: {
            "@type": "Organization",
            name: project.company,
          },
        }
      : {}),
    sameAs: [project.demoUrl, project.repoUrl].filter(Boolean),
  };
}
