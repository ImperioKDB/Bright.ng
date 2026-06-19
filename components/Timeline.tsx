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
      <p className="text-sm uppercase tracking-widest text-neutral-500 mb-2">
        Experience
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Where I've worked.
      </h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-6"
      >
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            variants={fadeUpItem}
            className="flex flex-col md:flex-row md:justify-between border-b border-neutral-800 pb-6"
          >
            <div>
              <h3 className="font-semibold">{exp.company}</h3>
              <p className="text-neutral-400 text-sm">{exp.role}</p>
              <p className="text-neutral-500 text-xs">{exp.location}</p>
            </div>
            <p className="text-neutral-500 text-sm mt-2 md:mt-0">
              {exp.startDate} — {exp.endDate}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
