"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, fadeUpItem } from "@/lib/motion";
import { projects } from "@/data/projects";
import PillBadge from "@/components/PillBadge";

export default function ProjectsGrid() {
  const [flagship, ...rest] = projects;

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
        className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
      >
        {flagship && (
          <motion.div variants={fadeUpItem} className="md:col-span-2">
            <Link
              href={`/projects/${flagship.slug}`}
              className="block bg-surface border border-edge rounded-2xl p-8 transition-colors duration-200 hover:border-text/30 min-h-[220px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2.5 py-1 bg-bg border border-edge rounded-full text-muted font-mono">
                    {flagship.category}
                  </span>
                  <span className="text-xs px-2.5 py-1 bg-accent-gradient text-bg rounded-full font-mono font-semibold">
                    {flagship.status}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-2 text-text">
                  {flagship.title}
                </h3>
                <p className="text-muted text-sm max-w-lg">{flagship.description}</p>
              </div>
              <span className="inline-block mt-6 text-sm bg-accent-gradient bg-clip-text text-transparent font-medium">
                View case study →
              </span>
            </Link>
          </motion.div>
        )}

        {rest.map((project) => (
          <motion.div key={project.slug} variants={fadeUpItem}>
            <Link
              href={`/projects/${project.slug}`}
              className="block bg-surface border border-edge rounded-2xl p-6 transition-colors duration-200 hover:border-text/30 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2.5 py-1 bg-bg border border-edge rounded-full text-muted font-mono">
                    {project.category}
                  </span>
                  <span className="text-xs px-2.5 py-1 bg-accent-gradient text-bg rounded-full font-mono font-semibold">
                    {project.status}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-text">{project.title}</h3>
                <p className="text-muted text-sm">{project.description}</p>
              </div>
              <span className="inline-block mt-4 text-sm bg-accent-gradient bg-clip-text text-transparent font-medium">
                View case study →
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center md:justify-start mt-10">
        <a href="#projects" className="text-sm bg-accent-gradient bg-clip-text text-transparent font-medium hover:opacity-80 transition">
          ALL PROJECTS →
        </a>
      </div>
    </motion.section>
  );
}
