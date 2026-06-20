"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, fadeUpItem } from "@/lib/motion";
import { experience } from "@/data/experience";

export default function Timeline() {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="px-6 md:px-12 max-w-5xl mx-auto py-20"
    >
      <p className="text-sm uppercase tracking-widest text-muted mb-2 font-mono">
        Experience
      </p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-text">
        Where I've worked.
      </h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            variants={fadeUpItem}
            className="flex items-start gap-4 py-6 border-b border-edge last:border-b-0"
          >
            {/* Small accent marker, replaces the old company-icon slot.
                Simple and quiet — not a focal point. */}
            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />

            <div className="flex-1 flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <div>
                <h3 className="font-display font-semibold text-text">
                  {exp.company}
                </h3>
                <p className="text-muted text-sm">{exp.role}</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-sm text-muted font-mono whitespace-nowrap">
                  {exp.startDate} – {exp.endDate}
                </p>
                <p className="text-xs text-muted/70">{exp.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
