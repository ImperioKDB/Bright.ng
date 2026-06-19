"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, fadeUpItem } from "@/lib/motion";
import { projects } from "@/data/projects";

export default function ProjectsGrid() {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="px-6 md:px-12 max-w-5xl mx-auto py-20"
    >
      <p className="text-sm uppercase tracking-widest text-muted mb-2 font-mono">
        My work
      </p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-text">
        Projects I've worked on.
      </h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {projects.map((project) => (
          <motion.div key={project.slug} variants={fadeUpItem}>
            <Link
              href={`/projects/${project.slug}`}
              className="block bg-surface border border-edge rounded-2xl p-6 hover:border-accent transition"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs px-2 py-1 bg-bg border border-edge rounded-full text-muted font-mono">
                  {project.category}
                </span>
                <span className="text-xs px-2 py-1 bg-accent/15 text-accent rounded-full font-mono">
                  {project.status}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-text">{project.title}</h3>
              <p className="text-muted text-sm">{project.description}</p>
              <span className="inline-block mt-4 text-sm text-accent">
                View case study →
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
