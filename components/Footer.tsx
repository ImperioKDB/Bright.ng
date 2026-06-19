"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="px-6 md:px-12 max-w-5xl mx-auto py-20 border-t border-neutral-800"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-8">
        Let's build something together.
      </h2>
      <a
        href="mailto:you@example.com"
        className="inline-block px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition"
      >
        Get in touch
      </a>
      <p className="text-neutral-600 text-sm mt-12">
        © {new Date().getFullYear()} Bright. All rights reserved.
      </p>
    </motion.footer>
  );
}
