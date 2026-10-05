"use client";

import { motion } from "framer-motion";
import { AnimatePresence, motion as motionPrimitive } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedReview, setExpandedReview] = useState<(typeof testimonials)[number] | null>(null);

  useEffect(() => {
    if (!expandedReview) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpandedReview(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [expandedReview]);

  const moveToReview = (index: number) => {
    const track = carouselRef.current;
    const card = track?.children.item(index) as HTMLElement | null;

    if (!track || !card) return;

    const trackCenter = track.getBoundingClientRect().left + track.clientWidth / 2;
    const cardCenter = card.getBoundingClientRect().left + card.clientWidth / 2;
    track.scrollBy({ left: cardCenter - trackCenter, behavior: "smooth" });
    setActiveIndex(index);
  };

  const updateActiveReview = () => {
    const track = carouselRef.current;
    if (!track) return;

    const trackCenter = track.getBoundingClientRect().left + track.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    Array.from(track.children).forEach((card, index) => {
      const bounds = card.getBoundingClientRect();
      const distance = Math.abs(bounds.left + bounds.width / 2 - trackCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  return (
    <section id="testimonials" className="review-section scroll-mt-20 py-20 md:py-28">
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="section-shell mb-10 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <div className="eyebrow text-white/70 before:bg-gradient-to-r before:from-[var(--accent)] before:to-transparent">Client Reviews</div>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.04] text-white sm:text-4xl lg:text-5xl">Good work is remembered. Here&apos;s what clients shared.</h2>
          </div>
          <div className="flex gap-3">
            <button type="button" aria-label="Previous review" onClick={() => moveToReview(Math.max(0, activeIndex - 1))} disabled={activeIndex === 0} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white hover:text-[var(--brand-blue)] disabled:cursor-not-allowed disabled:opacity-40">
              <ChevronLeft size={20} />
            </button>
            <button type="button" aria-label="Next review" onClick={() => moveToReview(Math.min(testimonials.length - 1, activeIndex + 1))} disabled={activeIndex === testimonials.length - 1} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white hover:text-[var(--brand-blue)] disabled:cursor-not-allowed disabled:opacity-40">
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        <div ref={carouselRef} onScroll={updateActiveReview} className="review-track">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={`${testimonial.company}-${index}`}
              initial={{ opacity: 0, y: 34, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`review-card flex h-[410px] flex-col rounded-2xl border border-white/50 bg-white p-6 text-[var(--foreground)] shadow-[0_28px_80px_rgba(0,0,0,0.25)] transition-opacity duration-300 sm:h-[370px] sm:p-8 ${activeIndex === index ? "opacity-100" : "opacity-55"}`}
            >
              <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
                <div className="flex items-center gap-1 text-[var(--accent)]" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, starIndex) => <Star key={starIndex} size={15} fill="currentColor" />)}
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">5.0 / 5.0</div>
              </div>
              <blockquote className="mt-5 flex-1 text-base leading-7 text-[var(--foreground)]/85 sm:text-lg sm:leading-8">&ldquo;{testimonial.summary}&rdquo;</blockquote>
              <div className="mt-5 flex items-end justify-between gap-4 border-t border-[var(--border)] pt-4">
                <div className="min-w-0">
                  <div className="text-base font-semibold text-[var(--foreground)]">{testimonial.name}</div>
                  <div className="mt-1 text-[0.62rem] uppercase tracking-[0.1em] text-[var(--muted)]">{testimonial.role} · {testimonial.company}</div>
                </div>
                <button type="button" onClick={() => setExpandedReview(testimonial)} className="shrink-0 text-xs font-semibold text-[var(--brand-blue-3)] underline decoration-[var(--brand-blue-3)]/30 underline-offset-4 transition hover:text-[var(--accent-strong)]">Read full review</button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-1 flex justify-center gap-2" aria-label="Choose a review">
          {testimonials.map((testimonial, index) => (
            <button key={`${testimonial.company}-dot-${index}`} type="button" aria-label={`Show review ${index + 1}`} aria-current={activeIndex === index} onClick={() => moveToReview(index)} className={`h-2 rounded-full transition-all ${activeIndex === index ? "w-8 bg-[var(--accent)]" : "w-2 bg-white/45 hover:bg-white/75"}`} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {expandedReview && (
          <motionPrimitive.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050b18]/75 p-4 backdrop-blur-sm"
            onClick={() => setExpandedReview(null)}
          >
            <motionPrimitive.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="full-review-title"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[min(80vh,720px)] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 text-[var(--foreground)] shadow-2xl sm:p-9"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="flex gap-1 text-[var(--accent)]" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }, (_, starIndex) => <Star key={starIndex} size={15} fill="currentColor" />)}
                  </div>
                  <h3 id="full-review-title" className="mt-4 text-2xl font-semibold">{expandedReview.company}</h3>
                </div>
                <button type="button" aria-label="Close full review" onClick={() => setExpandedReview(null)} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] transition hover:bg-[var(--paper-strong)]">
                  <X size={18} />
                </button>
              </div>
              <blockquote className="mt-6 whitespace-pre-line text-base leading-7 text-[var(--foreground)]/85">&ldquo;{expandedReview.quote}&rdquo;</blockquote>
              <div className="mt-7 border-t border-[var(--border)] pt-5 text-sm font-semibold">
                {expandedReview.name}
                <span className="ml-2 font-normal text-[var(--muted)]">{expandedReview.role}</span>
              </div>
            </motionPrimitive.div>
          </motionPrimitive.div>
        )}
      </AnimatePresence>
    </section>
  );
}
