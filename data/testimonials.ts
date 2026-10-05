export type Testimonial = {
  quote: string;
  summary: string;
  name: string;
  role: string;
  company: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The entire experience was smooth and well-organized. Requirements were understood clearly, communication was excellent, and the final delivery met all expectations. The quality of work and attention to detail were truly impressive.",
    summary: "A smooth, well-organized collaboration with clear communication, careful attention to detail, and a final delivery that met expectations.",
    name: "Steven Guevara",
    role: "Client",
    company: "Infrastructure & Monitoring Project",
    image: "/steven.jpg",
  },
  {
    quote:
      "Outstanding work from start to finish. The team showed strong technical skills, a proactive approach, and great reliability throughout the project. Everything was delivered on time with excellent results.",
    summary: "Strong technical skills, a proactive approach, and reliable delivery from start to finish.",
    name: "Johnny Linden",
    role: "Client",
    company: "Technology Delivery",
    image: "/johny.jpg",
  },
  {
    quote:
      "Aastha has great sense of responsibility and tries her best to achieve what we asked for. There is some room for improvement in terms of delivering the final objective as specified, but with communication she was able to handle it. Keep up the good work!",
    summary: "The client appreciated her sense of responsibility and communication, while noting room to improve alignment with the final objective.",
    name: "Payload CMS Client",
    role: "Client",
    company: "Content platform project",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
  },
  {
    quote:
      "We had a very positive experience working with her on our infrastructure and monitoring platform. One of her biggest strengths was her ability to break down complex technical issues into clear, manageable parts. This made it much easier for us to understand the challenges, follow her approach, and discuss the next steps.\n\nHer communication stood out throughout the collaboration. She provided clear, well-structured progress updates and explained technical details in a way that was easy to follow. For infrastructure and monitoring work, where issues can involve several interconnected components, that clarity was particularly valuable and helped us stay aligned.\n\nWe appreciated her methodical approach to problem-solving and the care she took to keep us informed. She brought a valuable combination of technical understanding and strong communication skills to the project, making her a great collaborator.\n\nI would happily recommend her to clients looking for support with infrastructure and monitoring projects, especially those who value someone who can work through technical challenges while communicating clearly along the way.",
    summary: "The client valued her methodical troubleshooting, clear technical explanations, and consistent progress updates throughout a complex infrastructure project.",
    name: "Verified Client",
    role: "Client · 5.0/5",
    company: "Build Monitoring Platform",
    image: "/portfolio/hero-circuit.jpg",
  },
  {
    quote: "Communicative, efficient, and high-quality work. She is amazing!",
    summary: "Communicative, efficient, and high-quality work. She is amazing!",
    name: "Verified Client",
    role: "Client · 5.0/5",
    company: "Revised GitHub Site",
    image: "/portfolio/ui-ux.jpg",
  },
];
