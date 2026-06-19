"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, fadeUpItem } from "@/lib/motion";

const testimonials = [
  {
    quote:
      "Placeholder testimonial — swap in real feedback from collaborators or clients once available.",
    name: "Name",
    role: "Role, Company",
  },
];

export default function Testimonials() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="px-6 md:px-12 max-w-5xl mx-auto py-20"
    >
      <p className="text-sm uppercase tracking-widest text-muted mb-2 font-mono">
        Testimonials
      </p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-text">
        What people say.
      </h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={fadeUpItem}
            className="bg-surface border border-edge rounded-2xl p-6"
          >
            <p className="text-text mb-4">"{t.quote}"</p>
            <p className="font-semibold text-text">{t.name}</p>
            <p className="text-sm text-muted">{t.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
