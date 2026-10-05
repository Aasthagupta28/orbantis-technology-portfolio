"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "3+", label: "Web products" },
  { value: "10+", label: "Core stacks" },
  { value: "100%", label: "Owner-led" },
  { value: "24/7", label: "Execution mindset" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-28 py-20 md:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -left-8 top-12 h-40 w-40 rounded-full bg-[var(--accent)]/14 blur-3xl" />
          <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[rgba(255,255,255,0.38)] p-3 shadow-[0_28px_60px_rgba(17,17,17,0.06)]">
            <Image
              src="/portfolio/digital-solutions.jpg"
              alt=""
              width={900}
              height={1100}
              className="h-[540px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <div className="eyebrow mb-5">About us</div>
          <h2 className="max-w-xl text-3xl font-semibold leading-[1.04] tracking-[-0.06em] text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Founder-led technology strategy, execution, and digital product thinking.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)]">
            Arun Kumar Bhardwaj is the founder and driving force behind Orbantis Technologies — a technology venture focused on building modern digital solutions, product systems, and strategic business experiences.
          </p>

          <div className="mt-7 rounded-[2rem] border border-[var(--border)] bg-[rgba(255,255,255,0.3)] p-6">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">Orbantis Technologies</div>
            <p className="mt-3 max-w-xl text-base leading-8 text-[var(--foreground)]/90">
              The company is led by Arun Kumar, and the work is built around helping ambitious businesses move from idea to product, from concept to execution, and from digital complexity to practical growth.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.35)] p-4">
                <div className="text-2xl font-semibold tracking-[-0.06em] text-[var(--foreground)]">{stat.value}</div>
                <div className="mt-2 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
