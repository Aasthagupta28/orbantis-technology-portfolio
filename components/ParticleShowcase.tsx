"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function ParticleShowcase() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    const points = Array.from({ length: 760 }, (_, index) => {
      const y = 1 - (index / 759) * 2;
      const radius = Math.sqrt(1 - y * y);
      const angle = Math.PI * (3 - Math.sqrt(5)) * index;

      return {
        x: Math.cos(angle) * radius,
        y,
        z: Math.sin(angle) * radius,
      };
    });

    let rotation = 0;
    let frame = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resizeCanvas = () => {
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(bounds.width * pixelRatio);
      canvas.height = Math.round(bounds.height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.47;
      const sine = Math.sin(rotation);
      const cosine = Math.cos(rotation);

      context.clearRect(0, 0, width, height);

      points.forEach((point) => {
        const rotatedX = point.x * cosine - point.z * sine;
        const depth = point.x * sine + point.z * cosine;
        const perspective = 1 / (1.13 - depth * 0.12);
        const x = centerX + rotatedX * radius * perspective;
        const y = centerY + point.y * radius * perspective;
        const opacity = 0.12 + ((depth + 1) / 2) * 0.76;
        const size = 0.55 + ((depth + 1) / 2) * 1.05;

        context.beginPath();
        context.arc(x, y, size, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fill();
      });

      if (!reduceMotion) {
        rotation += 0.0022;
        frame = window.requestAnimationFrame(draw);
      }
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(canvas);
    resizeCanvas();
    draw();

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className="particle-showcase relative overflow-hidden bg-[var(--dark-panel)] py-20 text-center text-white md:py-28">
      <div className="particle-orb absolute left-1/2 top-1/2 aspect-square w-[min(90vw,700px)] -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>

      <div className="section-shell relative z-10 flex min-h-[580px] items-center justify-center sm:min-h-[640px]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl px-4"
        >
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/65">Orbantis Technologies · Digital innovation</div>
          <h2 className="mt-6 text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl">
            Make your next move
            <span className="block text-white/65">mean something.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
            Thoughtful technology, in motion. Built around the people and ideas ready to move business forward.
          </p>
          <Link href="#contact" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-white px-7 text-sm font-semibold text-black transition hover:bg-white/85">
            Start a conversation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}