"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Solutions" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [activeId, setActiveId] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -52% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/95 shadow-[0_5px_20px_rgba(13,29,80,0.05)] backdrop-blur-xl">
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <div className="h-0.5 w-full bg-[rgba(15,23,42,0.06)]">
            <div className="h-full bg-[var(--accent)] transition-all duration-150" style={{ width: `${progress}%` }} />
          </div>

            <nav className="mx-auto flex max-w-7xl items-center justify-between py-3.5" aria-label="Main navigation">
            <Link href="#home" className="flex items-center gap-3" aria-label="Arun Kumar home">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[var(--border)] bg-white/80 p-1">
                <Image src="/logo2.png" alt="Orbantis logo" fill className="object-contain" sizes="40px" />
              </div>
              <div className="leading-none">
                  <div className="whitespace-nowrap text-[0.78rem] font-semibold tracking-[0.12em] text-[var(--foreground)]">ARUN KUMAR</div>
                  <div className="mt-1 whitespace-nowrap text-[0.52rem] uppercase tracking-[0.14em] text-[var(--muted)]">Founder · Orbantis</div>
              </div>
            </Link>

              <div className="hidden items-center gap-6 xl:flex">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-[0.72rem] font-medium uppercase tracking-[0.2em] transition-colors ${
                    activeId === item.id ? "text-[var(--foreground)]" : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden xl:block">
              <a
                href="#contact"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-[var(--accent)] px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[var(--accent-strong)]"
              >
                Let&apos;s Talk
              </a>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white/70 p-2.5 text-[var(--foreground)] xl:hidden"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mx-auto mt-2 max-w-[1280px] px-4 sm:px-6 xl:hidden"
          >
            <div className="rounded-[2rem] border border-[var(--border)] bg-[rgba(245,243,238,0.94)] p-4 shadow-[var(--shadow)] backdrop-blur-xl">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      activeId === item.id
                        ? "bg-[var(--foreground)] text-[var(--paper)]"
                        : "text-[var(--foreground)] hover:bg-[var(--paper-strong)]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
