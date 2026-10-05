export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  href: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "AgencyFlow CRM",
    category: "Multi-tenant SaaS Platform",
    description:
      "Built a full-stack CRM for Indian digital agencies to manage leads, deals, clients, projects, HR workflows, GST invoicing, and performance dashboards in one connected system.",
    image: "/portfolio/web-development.jpg",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Finance"],
    href: "#contact",
    featured: true,
  },
  {
    title: "Smart HRMS Platform",
    category: "Human Resource Management",
    description:
      "Developed a role-based HRMS for employee lifecycle management, attendance, leave, payroll logic, recruitment, and internal announcements using a modern dashboard-centric architecture.",
    image: "/portfolio/software.jpg",
    tags: ["Next.js", "Django", "HR Tech", "Dashboard"],
    href: "#contact",
  },
  {
    title: "Wooden Handicraft eCommerce",
    category: "Retail & Commerce",
    description:
      "Designed and built a responsive storefront for handcrafted wooden showpieces with a premium customer journey, catalog experience, and scalable backend architecture.",
    image: "/portfolio/ecommerce.jpg",
    tags: ["Next.js", "Django", "E-Commerce", "UX"],
    href: "#contact",
  },
  {
    title: "Build Monitoring Platform",
    category: "Infrastructure & Observability",
    description:
      "Built a full-stack monitoring platform with a Next.js interface, NestJS services, PostgreSQL storage, and OpenTelemetry instrumentation. The engagement focused on methodical troubleshooting, clear progress updates, and making interconnected infrastructure easier to understand.",
    image: "/portfolio/hero-circuit.jpg",
    tags: ["Next.js", "NestJS", "PostgreSQL", "OpenTelemetry"],
    href: "#contact",
    featured: true,
  },
  {
    title: "WNRS Couples Edition",
    category: "Interactive Web Experience",
    description:
      "Created and deployed two revised versions of the WNRS web app: an expanded deck that combines the original questions with Couples Edition, and a Couples Edition-only version. Both retain the Level 1, 2, and 3 progression, shuffled questions, and the familiar gameplay experience.",
    image: "/portfolio/ui-ux.jpg",
    tags: ["JavaScript", "GitHub Pages", "Interactive UX", "Web App"],
    href: "#contact",
  },
];
