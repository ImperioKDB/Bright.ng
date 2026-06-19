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
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-5xl mx-auto relative"
    >
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

      {/* Signature moment: the mobile-first confession */}
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
    </motion.section>
  );
}
