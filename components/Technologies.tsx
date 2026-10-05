"use client";

import { motion } from "framer-motion";

import { technologies } from "@/data/technologies";

export function Technologies() {
  return (
    <section id="technologies" className="scroll-mt-20 py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 max-w-2xl"
        >
          <div className="eyebrow">Expertise</div>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.04] tracking-[-0.06em] text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Built with tools chosen for speed, quality and long-term flexibility.
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {technologies.map((technology, index) => (
            <motion.div
              key={technology}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.04, ease: "easeOut" }}
              className="rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.28)] p-4 text-center shadow-[0_12px_30px_rgba(15,23,42,0.03)]"
            >
              <div className="text-sm font-medium tracking-[-0.03em] text-[var(--foreground)]">{technology}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
