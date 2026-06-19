"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="px-6 md:px-12 max-w-5xl mx-auto py-20 border-t border-edge"
    >
      <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 text-text">
        Let's build something together.
      </h2>
      <a
        href="mailto:you@example.com"
        className="inline-block px-6 py-3 bg-accent text-bg font-medium rounded-full hover:opacity-90 transition"
      >
        Get in touch
      </a>
      <p className="text-muted text-sm mt-12 font-mono">
        © {new Date().getFullYear()} Bright. All rights reserved.
      </p>
    </motion.footer>
  );
}
