import {
  nextjsIconSrc,
  type BrandIconKey,
} from "@/components/ui/brand-icon";

export type TechItem = {
  title: string;
  description: string;
  /** Local image in /public/icons */
  icon?: string;
  /** Logo from devicons-react / simple-icons */
  brandIcon?: BrandIconKey;
  link?: string;
};

export type TechSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: TechItem[];
};

export const featuredTech = [
  {
    id: 1,
    name: "TypeScript",
    designation: "Language",
    image: "/icons/typescript.png",
  },
  {
    id: 2,
    name: "Next.js",
    designation: "Frontend",
    image: nextjsIconSrc,
  },
  {
    id: 3,
    name: "React",
    designation: "Frontend",
    image: "/icons/react.png",
  },
  {
    id: 4,
    name: "Node.js",
    designation: "Backend",
    image: "/icons/nodeJs.png",
  },
  {
    id: 5,
    name: "Python",
    designation: "Language",
    image: "/icons/python-logo.png",
  },
  {
    id: 6,
    name: "MySQL",
    designation: "Database",
    image: "/icons/mySql.png",
  },
  {
    id: 7,
    name: "Tailwind",
    designation: "Styling",
    image: "/icons/tailwind.png",
  },
  {
    id: 8,
    name: "GraphQL",
    designation: "API",
    image: "/icons/graphQL.png",
  },
];

export const techStackSections: TechSection[] = [
  {
    id: "languages",
    eyebrow: "Foundations",
    title: "Programming languages.",
    description:
      "The languages I reach for day to day across APIs, frontends, CMS work, and data pipelines.",
    items: [
      {
        title: "TypeScript",
        description:
          "Primary language for Next.js apps and shared types across REST/GraphQL clients and services.",
        icon: "/icons/typescript.png",
      },
      {
        title: "JavaScript",
        description:
          "Used across Craft CMS portals, interactive UI flows, and production browser tooling.",
        icon: "/icons/javascript.png",
      },
      {
        title: "Go",
        description:
          "Built Gin REST APIs for Servd and client projects needing fast, lean backend services.",
        brandIcon: "go",
      },
      {
        title: "Python",
        description:
          "FastAPI services and data-oriented backends deployed behind Nginx on AWS.",
        icon: "/icons/python-logo.png",
      },
      {
        title: "PHP",
        description:
          "Craft CMS plugins, Twig-powered sites, and high-traffic government application portals.",
        icon: "/icons/php.png",
      },
      {
        title: "SQL",
        description:
          "Schema design, migrations, pooling, and ETL work across MySQL, MSSQL, PostgreSQL, and SQLite.",
        brandIcon: "sql",
      },
    ],
  },
  {
    id: "frontend",
    eyebrow: "Interfaces",
    title: "Frontend.",
    description:
      "Accessible, performant UIs — maps, itineraries, bilingual search, and enterprise dashboards.",
    items: [
      {
        title: "Next.js",
        description:
          "App Router sites and web apps for heritage platforms, enterprise clients, and Servd.",
        brandIcon: "nextjs",
      },
      {
        title: "React",
        description:
          "Component-driven interfaces including NFC programming tools and project tracking apps.",
        icon: "/icons/react.png",
      },
      {
        title: "Tailwind CSS",
        description:
          "Utility-first styling for responsive, consistent UI across client and product work.",
        icon: "/icons/tailwind.png",
      },
      {
        title: "Bootstrap 5",
        description:
          "Craft CMS application portals serving 15,000+ Canadians with structured multi-step flows.",
        icon: "/icons/bootstrap.png",
      },
      {
        title: "Zustand",
        description:
          "Client state for bilingual search, filters, and itinerary management in Next.js apps.",
        brandIcon: "zustand",
      },
      {
        title: "TanStack",
        description:
          "Data fetching and table/query patterns for interactive, filter-heavy frontend experiences.",
        brandIcon: "tanstack",
      },
      {
        title: "Mapbox GL JS",
        description:
          "Interactive map clustering and location search for heritage itineraries and Servd.",
        brandIcon: "mapbox",
      },
      {
        title: "Twig",
        description:
          "Craft CMS templates powering bilingual page types and reusable UI component models.",
        brandIcon: "twig",
      },
      {
        title: "HTML",
        description:
          "Semantic, accessible markup for AODA/WCAG-compliant public-facing experiences.",
        icon: "/icons/html.png",
      },
      {
        title: "CSS",
        description:
          "Responsive layouts and design systems with Tailwind, Bootstrap, and custom styling.",
        icon: "/icons/css.png",
      },
    ],
  },
  {
    id: "backend",
    eyebrow: "Services",
    title: "Backend.",
    description:
      "REST and GraphQL APIs, CMS platforms, ETL workers, and modular service architectures.",
    items: [
      {
        title: "Node.js",
        description:
          "Express APIs, cron workers, and ETL microservices with pooling, caching, and retries.",
        icon: "/icons/nodeJs.png",
      },
      {
        title: "Express.js",
        description:
          "Paginated REST routes for Ontario heritage data with compression and apicache.",
        icon: "/icons/expressJs.png",
      },
      {
        title: "Go / Gin",
        description:
          "High-performance REST APIs for Servd subscriptions, search, and restaurant data.",
        brandIcon: "gin",
      },
      {
        title: "FastAPI",
        description:
          "Python REST backends reverse-proxied with Nginx and served on AWS infrastructure.",
        brandIcon: "fastapi",
      },
      {
        title: "GraphQL",
        description:
          "Craft CMS → Next.js content pipelines for normalized bilingual content delivery.",
        icon: "/icons/graphQL.png",
      },
      {
        title: "Craft CMS",
        description:
          "Content models, custom PHP plugins, and portals for heritage and government workflows.",
        icon: "/icons/craftCms.png",
      },
      {
        title: "Payload CMS",
        description:
          "Headless CMS experience for modern content-driven product and client builds.",
        brandIcon: "payloadcms",
      },
    ],
  },
  {
    id: "databases",
    eyebrow: "Data",
    title: "Databases.",
    description:
      "Relational data design, zero-downtime sync strategies, and production connection pooling.",
    items: [
      {
        title: "MySQL",
        description:
          "Primary datastore for heritage APIs, ETL promotion strategies, and enterprise apps.",
        icon: "/icons/mySql.png",
      },
      {
        title: "PostgreSQL",
        description:
          "Servd’s production database for restaurants, collections, itineraries, and subscriptions.",
        brandIcon: "postgresql",
      },
      {
        title: "MSSQL",
        description:
          "Source system in a Node.js ETL syncing 1600+ heritage sites into MySQL atomically.",
        brandIcon: "mssql",
      },
      {
        title: "SQLite",
        description:
          "Lightweight local and embedded data storage for prototypes, tooling, and smaller services.",
        brandIcon: "sqlite",
      },
    ],
  },
  {
    id: "devops",
    eyebrow: "Delivery",
    title: "DevOps & infrastructure.",
    description:
      "Containers, CI/CD, Linux servers, and multi-cloud hosting from prototype to production.",
    items: [
      {
        title: "Docker",
        description:
          "Multi-service Dockerized architectures for APIs, workers, and local/prod parity.",
        brandIcon: "docker",
      },
      {
        title: "GitHub Actions",
        description:
          "Automated build, test, and deploy pipelines for reliable shipping.",
        brandIcon: "githubactions",
      },
      {
        title: "Buddy",
        description:
          "CI/CD pipelines for client deployments and release automation.",
        icon: "/icons/buddy-works.png",
      },
      {
        title: "AWS",
        description:
          "Hosting and infrastructure for enterprise web apps serving Home Depot, Circle K, and more.",
        brandIcon: "aws",
      },
      {
        title: "GCP",
        description:
          "Cloud infrastructure for client workloads alongside AWS and VPS deployments.",
        brandIcon: "gcp",
      },
      {
        title: "Nginx",
        description:
          "Reverse proxying for Python/Go services and production traffic routing.",
        icon: "/icons/nginx.svg",
      },
      {
        title: "Git",
        description:
          "Branching, reviews, and collaboration across agencies, products, and client codebases.",
        icon: "/icons/git.png",
      },
      {
        title: "Linode / Hostinger",
        description:
          "Provisioning and maintaining Debian servers for hosted client and product workloads.",
        brandIcon: "hostinger",
      },
    ],
  },
  {
    id: "tools",
    eyebrow: "Platforms",
    title: "Tools & platforms.",
    description:
      "Auth, testing, messaging, payments, and AI tooling that show up in real product work.",
    items: [
      {
        title: "Auth0",
        description:
          "Secure authentication for enterprise Next.js apps with role-based access needs.",
        brandIcon: "auth0",
      },
      {
        title: "Jest",
        description:
          "Unit and integration testing for reliable frontend and Node.js service changes.",
        brandIcon: "jest",
      },
      {
        title: "Postman",
        description:
          "API design, exploration, and regression checks across REST resource routes.",
        brandIcon: "postman",
      },
      {
        title: "OpenAI",
        description:
          "Admin pipelines that parse and import menu/restaurant data for Servd at scale.",
        brandIcon: "openai",
      },
      {
        title: "Telnyx",
        description:
          "Scheduled SMS notifications with backoff retry logic in a Node.js cron worker.",
        brandIcon: "telnyx",
      },
      {
        title: "Autumn",
        description:
          "Tiered subscription billing model powering Servd’s monetization layer.",
        brandIcon: "autumn",
      },
      {
        title: "PostHog",
        description:
          "Product analytics and event tracking to understand usage and guide iteration.",
        brandIcon: "posthog",
      },
    ],
  },
];
