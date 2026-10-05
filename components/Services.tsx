"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

import { services } from "@/data/services";

export function Services() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const moveCarousel = (direction: number) => {
    carouselRef.current?.scrollBy({ left: direction * 340, behavior: "smooth" });
  };

  return (
    <section id="services" className="domain-carousel scroll-mt-20 py-20 text-white md:py-24">
      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-9 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <div className="eyebrow text-white/75 before:bg-gradient-to-r before:from-[var(--accent)] before:to-transparent">Key Verticals</div>
            <h2 className="mt-3 text-3xl font-semibold leading-[1.04] sm:text-4xl lg:text-5xl">Our Core Domains</h2>
          </div>
          <div className="flex gap-3">
            <button type="button" onClick={() => moveCarousel(-1)} aria-label="Previous services" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/5 text-white transition hover:border-white hover:bg-white hover:text-[var(--brand-blue)]">
              <ChevronLeft size={20} />
            </button>
            <button type="button" onClick={() => moveCarousel(1)} aria-label="Next services" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/5 text-white transition hover:border-white hover:bg-white hover:text-[var(--brand-blue)]">
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        <div ref={carouselRef} className="domain-track -mx-4 flex gap-5 overflow-x-auto px-4 pb-5 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="domain-card group flex w-[min(84vw,310px)] shrink-0 flex-col rounded-[1.4rem] bg-white p-3 text-[var(--foreground)] sm:w-[300px]"
            >
              <div className="relative h-44 overflow-hidden rounded-[1rem] bg-[var(--paper-strong)]">
                <Image src={service.image} alt={service.title} fill sizes="(max-width: 640px) 84vw, 300px" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07152f]/35 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">{service.number}</div>
                <h3 className="mt-2 text-xl font-semibold leading-tight">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[var(--muted)]">{service.description}</p>
                <a href="#contact" className="mt-5 flex items-center justify-between border-t border-[var(--border)] pt-3 text-sm font-semibold text-[var(--brand-blue)] transition group-hover:text-[var(--accent-strong)]">
                  Learn more
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
