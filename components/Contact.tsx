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
    <section id="contact" className="scroll-mt-28 py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 max-w-3xl"
        >
          <div className="eyebrow">Contact</div>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.02] tracking-[-0.06em] text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Let&apos;s build your next digital advantage.
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-[2rem] border border-[var(--border)] bg-[var(--foreground)] p-8 text-[var(--paper)]"
          >
            <div className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--paper)]/70">Get in touch</div>
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--paper)]/20 bg-[var(--paper)]/5">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[0.68rem] uppercase tracking-[0.18em] text-[var(--paper)]/55">Email</div>
                  <a href="mailto:support@orbantistechnologies.com" className="mt-1 block text-lg font-medium text-[var(--paper)]">support@orbantistechnologies.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--paper)]/20 bg-[var(--paper)]/5">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[0.68rem] uppercase tracking-[0.18em] text-[var(--paper)]/55">Phone</div>
                  <a href="tel:+918352841945" className="mt-1 block text-lg font-medium text-[var(--paper)]">+91 8352841945</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--paper)]/20 bg-[var(--paper)]/5">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[0.68rem] uppercase tracking-[0.18em] text-[var(--paper)]/55">Location</div>
                  <p className="mt-1 text-lg font-medium text-[var(--paper)]">Ghumarwin, Bilaspur, Himachal Pradesh</p>
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
            className="rounded-[2rem] border border-[var(--border)] bg-[rgba(255,255,255,0.35)] p-6 sm:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm text-[var(--foreground)]">
                <span className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">Name</span>
                <input type="text" name="name" required placeholder="Your name" className="w-full rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.6)] px-4 py-3 text-base text-[var(--foreground)] outline-none transition focus:border-[var(--foreground)]" />
              </label>

              <label className="block text-sm text-[var(--foreground)]">
                <span className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">Email</span>
                <input type="email" name="email" required placeholder="Your email" className="w-full rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.6)] px-4 py-3 text-base text-[var(--foreground)] outline-none transition focus:border-[var(--foreground)]" />
              </label>
            </div>

            <label className="mt-5 block text-sm text-[var(--foreground)]">
              <span className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">Company</span>
              <input type="text" name="company" placeholder="Company name" className="w-full rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.6)] px-4 py-3 text-base text-[var(--foreground)] outline-none transition focus:border-[var(--foreground)]" />
            </label>

            <label className="mt-5 block text-sm text-[var(--foreground)]">
              <span className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">Message</span>
              <textarea name="message" required rows={6} placeholder="Tell us a little about your project" className="w-full resize-none rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.6)] px-4 py-3 text-base text-[var(--foreground)] outline-none transition focus:border-[var(--foreground)]" />
            </label>

            <button type="submit" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--paper)] transition hover:bg-[var(--accent-strong)]">
              Send Message
              <ArrowRight size={16} />
            </button>
            <p className="mt-4 min-h-6 text-sm text-[var(--muted)]" aria-live="polite">{submitMessage}</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
