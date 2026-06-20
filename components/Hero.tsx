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
      className="relative min-h-screen flex flex-col justify-end md:justify-center px-6 md:px-12 max-w-5xl mx-auto overflow-hidden"
    >
      {/* Signature gradient glow, positioned to show through around the
          cutout silhouette rather than sit behind a hard rectangle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-[-15%] w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(232,119,46,0.4) 0%, rgba(232,119,46,0.15) 45%, rgba(232,119,46,0) 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Cutout photo — bleeds off the bottom edge, no card, no border,
          no background. Sits behind the text block on mobile (low
          opacity backdrop), beside it on desktop. */}
      <div className="pointer-events-none absolute bottom-0 right-0 md:right-[2%] w-[70vw] md:w-[38vw] max-w-[480px] h-[85vh] md:h-[90vh] flex items-end justify-center z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/profile.png"
          alt=""
          className="w-full h-full object-contain object-bottom opacity-90"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl pb-12 md:pb-0">
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
    </motion.section>
  );
}
