"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function Hero() {
  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-5xl mx-auto overflow-hidden"
    >
      {/* Signature gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(232,119,46,0.35) 0%, rgba(232,119,46,0.12) 45%, rgba(232,119,46,0) 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="flex-1">
          <p className="text-sm uppercase tracking-widest text-accent mb-4 font-mono">
            Hey, I'm Bright
          </p>
          <h1 className="font-display text-4xl md:text-7xl font-bold leading-tight mb-6 text-text">
            Full-stack developer building products from the ground up.
          </h1>
          <p className="text-base md:text-lg text-muted max-w-2xl mb-6">
            100-level Software Engineering student at UNIBEN. I build full-stack
            SaaS products, e-commerce platforms, and tools for Nigerian markets.
          </p>

          <div className="flex items-center gap-3 mb-8 max-w-xl border-l-2 border-accent pl-4">
            <p className="text-sm text-muted italic">
              This site — like everything else I build — was made entirely on a
              phone. No laptop, no desktop IDE. Just Colab, GitHub, and patience.
            </p>
          </div>

          <a
            href="#projects"
            className="inline-block w-fit px-6 py-3 bg-accent text-bg font-medium rounded-full hover:opacity-90 transition"
          >
            See my work
          </a>
        </div>

        {/* Frameless cutout-style photo — no circle, no border, no card.
            Bottom-aligned with the text block, bleeds toward the edge.
            If /assets/profile.png is missing, the slot collapses cleanly. */}
        <div className="flex-shrink-0 w-48 md:w-72 self-end md:self-end">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/profile.png"
            alt="Bright"
            className="w-full h-auto object-contain object-bottom"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      </div>
    </motion.section>
  );
}
