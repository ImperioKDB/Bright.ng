"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import PillBadge from "@/components/PillBadge";

const testimonials = [
  {
    quote:
      "Bright's instincts for frontend architecture shaped Forge from the ground up. He doesn't just implement — he sees how a feature should feel before a single line is written, and that insight has saved us from rebuilding things twice.",
    name: "E07",
    role: "Co-founder, Forge",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const hasMultiple = testimonials.length > 1;

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="px-6 md:px-12 max-w-3xl mx-auto py-20 text-center"
    >
      <div className="flex justify-center">
        <PillBadge className="mb-6">Testimonials 🏅</PillBadge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-text">
        What people say.
      </h2>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 bg-accent-gradient bg-clip-text text-transparent">
        About me.
      </h2>

      <div className="text-6xl text-accent/30 font-display mb-4">"</div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="min-h-[140px]"
        >
          <p className="text-lg md:text-xl text-text mb-6 leading-relaxed">
            {current.quote}
          </p>
          <p className="font-semibold text-text">{current.name}</p>
          <p className="text-sm text-muted">{current.role}</p>
        </motion.div>
      </AnimatePresence>

      {hasMultiple && (
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-12 h-12 rounded-full border border-edge flex items-center justify-center hover:border-accent transition"
          >
            ←
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-accent" : "w-2 bg-edge"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-12 h-12 rounded-full border border-edge flex items-center justify-center hover:border-accent transition"
          >
            →
          </button>
        </div>
      )}
    </motion.section>
  );
}
