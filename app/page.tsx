import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Insights } from "@/components/Insights";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { Navbar } from "@/components/Navbar";
import { ParticleShowcase } from "@/components/ParticleShowcase";
import { Projects } from "@/components/Projects";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Services } from "@/components/Services";
import { Technologies } from "@/components/Technologies";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="site-canvas relative z-10 text-[var(--foreground)]">
        <Hero />
        <ScrollReveal><ParticleShowcase /></ScrollReveal>
        <ScrollReveal><About /></ScrollReveal>
        <ScrollReveal><Services /></ScrollReveal>
        <ScrollReveal><WhyChooseUs /></ScrollReveal>
        <ScrollReveal><Technologies /></ScrollReveal>
        <ScrollReveal><MarqueeStrip /></ScrollReveal>
        <ScrollReveal><Testimonials /></ScrollReveal>
        <ScrollReveal><Projects /></ScrollReveal>
        <ScrollReveal><Insights /></ScrollReveal>
        <ScrollReveal><Contact /></ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
