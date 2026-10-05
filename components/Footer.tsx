import { Camera, Code2, Globe2, Send } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/orbantis-technologies/", icon: Globe2 },
  { label: "GitHub", href: "https://github.com", icon: Code2 },
  { label: "Instagram", href: "https://www.instagram.com", icon: Camera },
  { label: "X/Twitter", href: "https://x.com", icon: Send },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[rgba(255,255,255,0.28)] py-10">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex flex-col leading-none tracking-[0.18em] text-[var(--foreground)]">
            <span className="text-[0.82rem] font-semibold">ARUN KUMAR BHARDWAJ</span>
            <span className="text-[0.64rem] text-[var(--muted)] tracking-[0.22em]">FOUNDER & TECHNOLOGY ENTREPRENEUR</span>
            <span className="mt-2 text-[0.74rem] tracking-[0.24em] text-[var(--muted)]">ORBANTIS TECHNOLOGIES</span>
          </div>
          <p className="mt-5 max-w-sm text-base leading-7 text-[var(--muted)]">
            Designing and building digital products that connect strategy, technology and meaningful business growth.
          </p>
        </div>

        <div>
          <div className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">Links</div>
          <ul className="mt-4 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-[var(--foreground)] transition hover:text-[var(--accent-strong)]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">Social</div>
          <div className="mt-4 flex gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.22)] text-[var(--foreground)] transition hover:border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--paper)]"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="section-shell mt-8 border-t border-[var(--border)] px-0 pt-6 text-center text-sm text-[var(--muted)]">
        © 2026 Orbantis Technologies. All rights reserved.
      </div>
    </footer>
  );
}
