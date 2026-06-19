"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, fadeUpItem } from "@/lib/motion";

const stack = [
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Supabase",
  "PostgreSQL",
  "Vercel",
  "GitHub",
  "Framer Motion",
];

export default function StackIcons() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="px-6 md:px-12 max-w-5xl mx-auto py-12"
    >
      <p className="text-sm uppercase tracking-widest text-muted mb-6 font-mono">
        Tools I work with
      </p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-wrap gap-3"
      >
        {stack.map((tool) => (
          <motion.span
            key={tool}
            variants={fadeUpItem}
            className="px-4 py-2 border border-edge rounded-full text-sm text-muted font-mono"
          >
            {tool}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  );
}
