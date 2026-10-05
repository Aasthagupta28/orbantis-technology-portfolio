"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { insights } from "@/data/insights";

export function Insights() {
  return (
    <section id="insights" className="scroll-mt-28 py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 max-w-2xl"
        >
          <div className="eyebrow">Insights</div>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.04] tracking-[-0.06em] text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Insights & Ideas
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              className="group overflow-hidden rounded-[1.8rem] border border-[var(--border)] bg-[rgba(255,255,255,0.35)]"
            >
              <div className="overflow-hidden">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  width={900}
                  height={600}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.14em] text-[var(--muted)]">
                  <span>{insight.date}</span>
                  <span>•</span>
                  <span>{insight.category}</span>
                </div>

                <h3 className="mt-4 text-2xl font-medium leading-tight tracking-[-0.05em] text-[var(--foreground)]">{insight.title}</h3>

                <a href={insight.href} className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--foreground)] transition hover:text-[var(--accent-strong)]">
                  Read More
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
