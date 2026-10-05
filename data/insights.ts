export type Insight = {
  title: string;
  category: string;
  date: string;
  image: string;
  href: string;
};

export const insights: Insight[] = [
  {
    title: "How Modern Businesses Can Benefit From Next.js",
    category: "Strategy",
    date: "June 08, 2026",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    href: "#contact",
  },
  {
    title: "Building Better Digital Experiences With UI/UX",
    category: "Design",
    date: "May 19, 2026",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    href: "#contact",
  },
  {
    title: "Why Scalable Technology Matters for Growing Businesses",
    category: "Technology",
    date: "April 29, 2026",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    href: "#contact",
  },
];
