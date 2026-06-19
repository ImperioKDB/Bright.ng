"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-5xl mx-auto"
    >
      <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
        Hey, I'm Bright
      </p>
      <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6">
        Full-stack developer building products from the ground up.
      </h1>
      <p className="text-base md:text-lg text-neutral-400 max-w-2xl mb-8">
        100-level Software Engineering student at UNIBEN. I build full-stack
        SaaS products, e-commerce platforms, and tools for Nigerian markets
        entirely from mobile.
      </p>
      <a
        href="#projects"
        className="inline-block w-fit px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition"
      >
        See my work
      </a>
    </motion.section>
  );
}
