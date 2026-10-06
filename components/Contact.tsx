"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

export function Contact() {
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const company = String(formData.get("company") ?? "Not provided");
    const message = String(formData.get("message") ?? "");
    const subject = `Portfolio enquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      "",
      message,
    ].join("\n");

    setSubmitMessage("Opening your email app with the enquiry ready to send.");
    window.location.href = `mailto:support@orbantistechnologies.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="relative isolate scroll-mt-28 overflow-hidden bg-[#0b1940] py-20 text-white md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 max-w-3xl"
        >
          <div className="eyebrow text-white/65">Contact</div>
          <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            Let&apos;s build your next digital advantage.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
            Have a product idea or a business challenge? Tell us what you&apos;re working on and let&apos;s find the right way forward.
          </p>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="pt-1"
          >
            <div className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-white/45">Start a conversation</div>
            <div className="mt-6 divide-y divide-white/12 border-y border-white/12">
              <div className="flex items-start gap-4 py-5">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-[var(--accent)]">
                  <Mail size={17} />
                </div>
                <div>
                  <div className="text-[0.65rem] uppercase tracking-[0.18em] text-white/45">Email</div>
                  <a href="mailto:support@orbantistechnologies.com" className="mt-1 block break-all text-sm font-medium text-white transition hover:text-[var(--accent)] sm:text-base">support@orbantistechnologies.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 py-5">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-[var(--accent)]">
                  <Phone size={17} />
                </div>
                <div>
                  <div className="text-[0.65rem] uppercase tracking-[0.18em] text-white/45">Phone</div>
                  <a href="tel:+918352841945" className="mt-1 block text-base font-medium text-white transition hover:text-[var(--accent)]">+91 8352841945</a>
                </div>
              </div>

              <div className="flex items-start gap-4 py-5">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-[var(--accent)]">
                  <MapPin size={17} />
                </div>
                <div>
                  <div className="text-[0.65rem] uppercase tracking-[0.18em] text-white/45">Location</div>
                  <p className="mt-1 text-base font-medium leading-6 text-white">Ghumarwin, Bilaspur,<br />Himachal Pradesh</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onSubmit={handleSubmit}
            className="border border-white/15 bg-white/[0.045] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm text-white">
                <span className="mb-2 block text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/60">Name</span>
                <input type="text" name="name" required placeholder="Your name" className="w-full rounded-sm border border-white/20 bg-white/[0.06] px-4 py-3 text-base text-white outline-none transition placeholder:text-white/35 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20" />
              </label>

              <label className="block text-sm text-white">
                <span className="mb-2 block text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/60">Email</span>
                <input type="email" name="email" required placeholder="you@company.com" className="w-full rounded-sm border border-white/20 bg-white/[0.06] px-4 py-3 text-base text-white outline-none transition placeholder:text-white/35 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20" />
              </label>
            </div>

            <label className="mt-5 block text-sm text-white">
              <span className="mb-2 block text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/60">Company <span className="normal-case tracking-normal text-white/35">(optional)</span></span>
              <input type="text" name="company" placeholder="Company name" className="w-full rounded-sm border border-white/20 bg-white/[0.06] px-4 py-3 text-base text-white outline-none transition placeholder:text-white/35 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20" />
            </label>

            <label className="mt-5 block text-sm text-white">
              <span className="mb-2 block text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/60">What are you looking to build?</span>
              <textarea name="message" required rows={4} placeholder="A few details about your project, goals, or timeline..." className="w-full resize-y rounded-sm border border-white/20 bg-white/[0.06] px-4 py-3 text-base text-white outline-none transition placeholder:text-white/35 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20" />
            </label>

            <button type="submit" className="mt-6 inline-flex min-h-12 items-center justify-center gap-3 rounded-sm bg-[var(--accent)] px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[var(--accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Send enquiry
              <ArrowRight size={16} />
            </button>
            <p className="mt-4 min-h-6 text-sm text-white/55" aria-live="polite">{submitMessage}</p>
          </motion.form>
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-12 -z-10 h-80 w-80 rounded-full border border-white/[0.06]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-12 top-32 -z-10 h-48 w-48 rounded-full border border-white/[0.06]" />
    </section>
  );
}
