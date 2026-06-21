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
  const initial = current.name.trim().charAt(0).toUpperCase();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="px-6 md:px-12 max-w-3xl mx-auto py-20"
    >
      <div className="flex justify-center">
        <PillBadge className="mb-6">Testimonials 🏅</PillBadge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-text text-center">
        What people say.
      </h2>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 bg-accent-gradient bg-clip-text text-transparent text-center">
        About me.
      </h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="relative bg-surface border border-edge rounded-2xl p-8 md:p-10"
        >
          <div
            aria-hidden="true"
            className="absolute -top-5 left-8 w-12 h-12 rounded-full bg-accent-gradient flex items-center justify-center shadow-[0_0_20px_rgba(232,69,60,0.4)]"
          >
            <span className="text-bg font-display text-2xl font-black leading-none">"</span>
          </div>

          <p className="text-lg md:text-xl text-text leading-relaxed mt-6 mb-8">
            {current.quote}
          </p>

          <div className="flex items-center gap-3 pt-6 border-t border-edge">
            <div className="w-11 h-11 rounded-full bg-accent-gradient flex items-center justify-center flex-shrink-0">
              <span className="font-display font-bold text-bg text-lg">{initial}</span>
            </div>
            <div>
              <p className="font-semibold text-text">{current.name}</p>
              <p className="text-sm text-muted">{current.role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {hasMultiple && (
        <div className="flex items-center justify-center gap-6 mt-8">
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
