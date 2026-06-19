"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, fadeUpItem } from "@/lib/motion";
import type { Project } from "@/data/projects";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function CaseStudyContent({ project }: { project: Project }) {
  return (
    <>
      <Navbar variant="subpage" />
      <main className="px-6 md:px-12 max-w-3xl mx-auto py-16 md:py-24">
        <Link
          href="/"
          className="text-sm text-muted hover:text-accent transition mb-12 inline-block font-mono"
        >
          ← Back to home
        </Link>

        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs px-2 py-1 bg-surface border border-edge rounded-full text-muted font-mono">
              {project.category}
            </span>
            <span className="text-xs px-2 py-1 bg-accent/15 text-accent rounded-full font-mono">
              {project.status}
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-6 text-text">
            {project.title}
          </h1>
          <p className="text-lg text-muted mb-12">
            {project.description}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-10"
        >
          <h2 className="text-sm uppercase tracking-widest text-accent mb-3 font-mono">
            The problem
          </h2>
          <p className="text-text leading-relaxed">{project.problem}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-10"
        >
          <h2 className="text-sm uppercase tracking-widest text-accent mb-3 font-mono">
            The solution
          </h2>
          <p className="text-text leading-relaxed">{project.solution}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mb-10"
        >
          <h2 className="text-sm uppercase tracking-widest text-muted mb-3 font-mono">
            Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <motion.span
                key={tech}
                variants={fadeUpItem}
                className="px-3 py-1.5 border border-edge rounded-full text-sm text-muted font-mono"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {(project.liveUrl || project.repoUrl) && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex gap-4 mt-12"
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-accent text-bg font-medium rounded-full hover:opacity-90 transition"
              >
                View live
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-edge rounded-full text-text hover:border-accent transition"
              >
                View repo
              </a>
            )}
          </motion.div>
        )}

        {project.images.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mt-16 space-y-6"
          >
            {project.images.map((src, i) => (
              <motion.img
                key={i}
                variants={fadeUpItem}
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                className="w-full rounded-2xl border border-edge"
              />
            ))}
          </motion.div>
        )}
      </main>
    </>
  );
}
