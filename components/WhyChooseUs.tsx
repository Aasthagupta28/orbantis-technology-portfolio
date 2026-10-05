"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2018",
    title: "Digital Product Foundations",
    description: "Built the foundation for strategy-first product decisions, combining business context with interface clarity.",
  },
  {
    year: "2020",
    title: "Product & Brand Systems",
    description: "Expanded into end-to-end brand and product thinking, translating ideas into elegant digital experiences.",
  },
  {
    year: "2023",
    title: "Orbantis Technologies",
    description: "Established a focused venture for premium digital products, strategic systems and modern web experiences.",
  },
];

const reasons = [
  "Founder-led decision making",
  "Elegant product craft",
  "Scalable technology foundations",
  "Clear business alignment",
];

export function WhyChooseUs() {
  return (
    <section id="experience" className="scroll-mt-28 py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 max-w-2xl"
        >
          <div className="eyebrow">Experience</div>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.04] tracking-[-0.06em] text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Technology, design and leadership shaped around business momentum.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-[2rem] border border-[var(--border)] bg-[var(--foreground)] p-8 text-[var(--paper)] shadow-[0_25px_50px_rgba(17,17,17,0.08)]"
          >
            <div className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--paper)]/70">Founder</div>
            <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.06em]">Product-led thinking from concept to execution.</h3>
            <p className="mt-6 text-base leading-8 text-[var(--paper)]/70">
              Arun Kumar leads Orbantis Technologies with a founder-first mindset — translating business goals into digital systems that are useful, scalable and thoughtfully designed.
            </p>

            <div className="mt-8 space-y-3">
              {reasons.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/85">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-5">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                className="flex gap-5 rounded-[1.8rem] border border-[var(--border)] bg-[rgba(255,255,255,0.3)] p-6"
              >
                <div className="flex flex-col items-center">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)] text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                    {item.year.slice(2)}
                  </span>
                  {index < timeline.length - 1 && <div className="mt-2 h-full w-px bg-[var(--border)]" />}
                </div>

                <div>
                  <div className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">{item.year}</div>
                  <h3 className="mt-3 text-2xl font-medium tracking-[-0.05em] text-[var(--foreground)]">{item.title}</h3>
                  <p className="mt-3 max-w-lg text-base leading-7 text-[var(--muted)]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
