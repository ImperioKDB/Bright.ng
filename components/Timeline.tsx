"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, fadeUpItem } from "@/lib/motion";
import { experience } from "@/data/experience";
import PillBadge from "@/components/PillBadge";

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
      <div className="flex justify-center md:justify-start">
        <PillBadge className="mb-6">Work Experience 💼</PillBadge>
      </div>

      <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-text text-center md:text-left">
        Building products.
      </h2>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 bg-accent-gradient bg-clip-text text-transparent text-center md:text-left">
        From day one.
      </h2>
      <p className="text-muted mb-10 text-center md:text-left">… and counting</p>

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
            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
            <div className="flex-1 flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <div>
                <h3 className="font-display font-semibold text-text">{exp.company}</h3>
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
