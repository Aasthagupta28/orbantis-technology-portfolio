import { ArrowUpRight, Camera, Code2, Globe2, Send } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our approach", href: "#experience" },
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
    <footer className="border-t border-white/10 bg-[#081735] py-12 text-white sm:py-14">
      <div className="section-shell grid gap-10 md:grid-cols-[1.15fr_0.85fr] lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-14">
        <div>
          <div className="flex flex-col leading-none tracking-[0.18em] text-white">
            <span className="text-[0.82rem] font-semibold">ORBANTIS TECHNOLOGIES</span>
            <span className="mt-2 text-[0.64rem] tracking-[0.22em] text-white/55">DIGITAL PRODUCTS & TECHNOLOGY</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
            We design and build digital products that connect strategy, technology, and meaningful business growth.
          </p>
          <a href="mailto:support@orbantistechnologies.com" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-[var(--accent)]">
            Start a conversation <ArrowUpRight size={15} />
          </a>
        </div>

        <div>
          <div className="text-[0.66rem] font-medium uppercase tracking-[0.22em] text-white/45">Explore</div>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="inline-flex min-h-8 items-center text-sm text-white/75 transition hover:text-[var(--accent)]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[0.66rem] font-medium uppercase tracking-[0.22em] text-white/45">Connect</div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">Follow the work and ideas behind Orbantis Technologies.</p>
          <div className="mt-4 flex gap-2.5">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center border border-white/20 text-white/75 transition hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="section-shell mt-10 flex flex-col gap-2 border-t border-white/12 px-0 pt-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Orbantis Technologies. All rights reserved.</span>
        <a href="#home" className="transition hover:text-white">Back to top ↑</a>
      </div>
    </footer>
  );
}
