"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, fadeUpItem } from "@/lib/motion";
import { projects } from "@/data/projects";
import PillBadge from "@/components/PillBadge";
import LivePreview from "@/components/LivePreview";

export default function ProjectsGrid() {
  const featured = projects.filter((p) => p.featured);

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
        {featured.map((project) => (
          <motion.div key={project.slug} variants={fadeUpItem}>
            <Link
              href={`/projects/${project.slug}`}
              className="block bg-surface border border-edge rounded-2xl overflow-hidden transition-colors duration-200 hover:border-text/30"
            >
              {/* Live preview thumbnail at top of card */}
              {project.liveUrl && (
                <div className="pointer-events-none">
                  <LivePreview url={project.liveUrl} compact={true} />
                </div>
              )}

              <div className="p-6">
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
                <span className="inline-block mt-4 text-sm bg-accent-gradient bg-clip-text text-transparent font-medium">
                  View case study →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center md:justify-start mt-10">
        <Link
          href="/projects"
          className="text-sm bg-accent-gradient bg-clip-text text-transparent font-medium hover:opacity-80 transition"
        >
          ALL PROJECTS →
        </Link>
      </div>
    </motion.section>
  );
}
