"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="project-section scroll-mt-20 py-20 md:py-28">
      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 flex flex-wrap items-end justify-between gap-5"
        >
          <div className="eyebrow text-white/70 before:bg-gradient-to-r before:from-white before:to-transparent">Projects</div>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.04] text-white sm:text-4xl lg:text-5xl">Selected work, built to solve real problems.</h2>
          <p className="max-w-sm text-sm leading-6 text-white/65">A selection of products and digital experiences delivered with clarity from first idea to launch.</p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 42, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className={`project-card group overflow-hidden rounded-2xl border border-white/15 shadow-[0_22px_60px_rgba(0,0,0,0.18)] ${
                project.featured ? "lg:col-span-2 lg:grid lg:grid-cols-[1.1fr_0.9fr]" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${project.featured ? "h-[280px] lg:h-full lg:min-h-[340px]" : "h-[250px] sm:h-[300px]"}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes={project.featured ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 1024px) 100vw, 50vw"}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07152f]/65 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-sm border border-white/25 bg-[#081735]/65 px-3 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-sm">{project.category}</span>
              </div>

              <div className="flex flex-col p-5 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">Case study {String(index + 1).padStart(2, "0")}</div>
                  <a href={project.href} aria-label={`Discuss project: ${project.title}`} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]">
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <h3 className="mt-5 text-2xl font-semibold leading-tight text-white sm:text-3xl">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">{project.description}</p>

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-sm border border-white/20 bg-white/5 px-2.5 py-1.5 text-[0.62rem] uppercase tracking-[0.1em] text-white/75">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
