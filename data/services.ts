export type Service = {
  number: string;
  title: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Web Development",
    description: "Modern, fast and scalable web applications built for meaningful business growth.",
    image: "/portfolio/web-development.jpg",
  },
  {
    number: "02",
    title: "Mobile App Development",
    description: "High-quality Android and iOS applications designed to feel effortless for users.",
    image: "/portfolio/mobile-apps.jpg",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description: "User-focused interfaces and digital experiences that are clear, expressive and intuitive.",
    image: "/portfolio/ui-ux.jpg",
  },
  {
    number: "04",
    title: "Software Development",
    description: "Custom software systems shaped around your business goals, workflows, and scale.",
    image: "/portfolio/software.jpg",
  },
  {
    number: "05",
    title: "E-Commerce",
    description: "Conversion-focused storefronts that blend performance, storytelling and trust.",
    image: "/portfolio/ecommerce.jpg",
  },
  {
    number: "06",
    title: "Digital Solutions",
    description: "Technology strategies and operational tools that help brands move with confidence.",
    image: "/portfolio/digital-solutions.jpg",
  },
];
