"use client";

const items = [
  "Product strategy",
  "Brand systems",
  "UX design",
  "Web experiences",
  "Digital products",
  "Creative engineering",
  "Business growth",
];

export function MarqueeStrip() {
  return (
    <section className="py-4 md:py-6">
      <div className="overflow-hidden border-y border-[var(--border)] bg-[var(--dark-panel)] text-white">
        <div className="marquee-track items-center gap-8 whitespace-nowrap px-4 py-4 text-sm uppercase tracking-[0.22em] text-white/80 md:px-8">
          {[...items, ...items].map((item, index) => (
            <span key={`${item}-${index}`} className="inline-flex items-center gap-4">
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
