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
            "radial-gradient(circle, rgba(245,166,35,0.4) 0%, rgba(232,69,60,0.18) 45%, rgba(232,69,60,0) 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <PillBadge className="mb-8">Yo! Whats up? 👋🏿</PillBadge>

        <h1 className="font-display text-4xl md:text-7xl font-bold leading-[1.1] mb-2">
          <span className="text-text">Let's create</span>
        </h1>
        <h1
          className="font-display text-4xl md:text-7xl font-bold leading-[1.1] mb-2"
          style={{ minHeight: "1.1em" }}
        >
          <WordRotator words={rotatingWords} />
        </h1>
        <h1 className="font-display text-4xl md:text-7xl font-bold leading-[1.1] mb-8">
          <span className="text-text">together</span>
        </h1>

        <div className="relative w-56 md:w-72 mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/profile.png"
            alt="Bright"
            className="w-full h-auto object-contain"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 60%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
              maskComposite: "intersect",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 60%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
              WebkitMaskComposite: "source-in",
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent-gradient text-bg font-semibold rounded-full hover:opacity-90 transition shadow-[0_0_30px_rgba(232,69,60,0.4)] mb-8"
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
