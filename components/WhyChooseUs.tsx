"use client";

import { motion } from "framer-motion";

const approach = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your goals, users, and constraints before shaping the right digital direction.",
  },
  {
    number: "02",
    title: "Design",
    description: "Turn the strategy into clear product experiences and a practical technical blueprint.",
  },
  {
    number: "03",
    title: "Deliver",
    description: "Build, launch, and improve digital products with a focus on quality and business value.",
  },
];

const reasons = [
  "Direct, accountable collaboration",
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
          <div className="eyebrow">Why Orbantis</div>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.04] tracking-[-0.06em] text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            A thoughtful technology partner, from first idea to launch.
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
            <div className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--paper)]/70">Our approach</div>
            <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.06em]">Product-led thinking from concept to execution.</h3>
            <p className="mt-6 text-base leading-8 text-[var(--paper)]/70">
              We translate business goals into digital systems that are useful, scalable, and thoughtfully designed.
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
            {approach.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                className="flex gap-5 rounded-[1.8rem] border border-[var(--border)] bg-[rgba(255,255,255,0.3)] p-6"
              >
                <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                  {item.number}
                </span>

                <div>
                  <div className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">Step {item.number}</div>
                  <h3 className="mt-2 text-2xl font-medium tracking-[-0.05em] text-[var(--foreground)]">{item.title}</h3>
                  <p className="mt-2 max-w-lg text-base leading-7 text-[var(--muted)]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
