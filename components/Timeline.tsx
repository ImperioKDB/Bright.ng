"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, fadeUpItem } from "@/lib/motion";
import { experience } from "@/data/experience";

// Deterministic fake short-hash per entry, generated from company name.
// Purely cosmetic — evokes a git log without claiming to be a real commit SHA.
function pseudoHash(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return hash.toString(16).padStart(7, "0").slice(0, 7);
}

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
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-text">
        Where I've worked.
      </h2>
      <p className="text-sm text-muted mb-10 font-mono">
        $ git log --reverse --oneline
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative pl-6 border-l border-edge space-y-8"
      >
        {experience.map((exp, i) => (
          <motion.div key={i} variants={fadeUpItem} className="relative">
            {/* commit node */}
            <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-accent border-2 border-bg" />

            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <p className="font-mono text-sm text-accent">
                {pseudoHash(exp.company)}{" "}
                <span className="text-text">
                  joined <span className="font-semibold">{exp.company}</span> as {exp.role}
                </span>
              </p>
              <p className="font-mono text-xs text-muted whitespace-nowrap">
                {exp.startDate} → {exp.endDate}
              </p>
            </div>
            <p className="text-muted text-xs mt-1 pl-0">{exp.location}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
