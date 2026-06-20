"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, fadeUpItem } from "@/lib/motion";
import { projects } from "@/data/projects";
import PillBadge from "@/components/PillBadge";

export default function ProjectsGrid() {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="px-6 md:px-12 max-w-5xl mx-auto py-20 text-center md:text-left"
    >
      <div className="flex justify-center md:justify-start">
        <PillBadge className="mb-6">My Works 🤩</PillBadge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-text">
        Projects I've worked on.
      </h2>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 bg-accent-gradient bg-clip-text text-transparent">
        At a glance.
      </h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 gap-6 text-left"
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

      <div className="flex justify-center md:justify-start mt-10">
        <a href="#projects" className="text-sm text-accent font-medium hover:opacity-80 transition">
          ALL PROJECTS →
        </a>
      </div>
    </motion.section>
  );
}
