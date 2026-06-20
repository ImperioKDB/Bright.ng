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
      {/* Signature gradient glow — warm, monochrome (accent only, varying
          opacity/blur), not a multi-hue gradient. Sits behind content,
          purely decorative, no pointer events. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(232,119,46,0.35) 0%, rgba(232,119,46,0.12) 45%, rgba(232,119,46,0) 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
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

        {/* Photo slot. Drop a photo at /public/assets/profile.jpg via the
            GitHub web editor and it will appear here automatically. */}
        <div className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-edge bg-surface mx-auto md:mx-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/profile.jpg"
            alt="Bright"
            className="w-full h-full object-cover"
            onError={(e) => {
              // If no photo has been uploaded yet, hide the broken image
              // icon gracefully instead of showing a broken-image glyph.
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      </div>
    </motion.section>
  );
}
