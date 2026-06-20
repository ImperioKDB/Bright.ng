"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import PillBadge from "@/components/PillBadge";
import WordRotator from "@/components/WordRotator";

const rotatingWords = ["Products", "Apps", "Tools", "Ideas"];

export default function Hero() {
  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="relative min-h-screen flex flex-col items-center text-center px-6 md:px-12 max-w-5xl mx-auto overflow-hidden pt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[90vw] h-[60vw] max-w-[800px] max-h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(232,119,46,0.35) 0%, rgba(232,119,46,0.1) 45%, rgba(232,119,46,0) 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <PillBadge className="mb-8">Yo! Whats up? 👋🏿</PillBadge>

        <h1 className="font-display text-4xl md:text-7xl font-bold leading-tight mb-2">
          <span className="text-text">Let's create</span>
        </h1>
        <h1 className="font-display text-4xl md:text-7xl font-bold leading-tight mb-2 bg-accent-gradient bg-clip-text text-transparent min-h-[1.2em]">
          <WordRotator words={rotatingWords} />
        </h1>
        <h1 className="font-display text-4xl md:text-7xl font-bold leading-tight mb-8">
          <span className="text-text">together</span>
        </h1>

        <div className="w-56 md:w-72 mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/profile.png"
            alt="Bright"
            className="w-full h-auto object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent-gradient text-bg font-semibold rounded-full hover:opacity-90 transition shadow-[0_0_30px_rgba(232,119,46,0.4)] mb-8"
        >
          See my work →
        </a>

        <p className="text-base text-muted max-w-xl mb-4">
          100-level Software Engineering student at UNIBEN. I build full-stack
          SaaS products, e-commerce platforms, and tools for Nigerian markets.
        </p>

        <p className="text-sm text-muted/70 italic max-w-md">
          This site — like everything else I build — was made entirely on a
          phone. No laptop, no desktop IDE. Just Colab, GitHub, and patience.
        </p>
      </div>
    </motion.section>
  );
}
