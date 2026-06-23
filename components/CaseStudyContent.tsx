"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, fadeUpItem } from "@/lib/motion";
import type { Project } from "@/data/projects";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import LivePreview from "@/components/LivePreview";

export default function CaseStudyContent({
  project,
  nextProject,
}: {
  project: Project;
  nextProject?: Project;
}) {
  return (
    <>
      <Navbar variant="subpage" />
      <main className="px-6 md:px-12 max-w-3xl mx-auto py-16 md:py-24">
        <Link
          href="/#projects"
          className="text-sm text-muted hover:text-accent transition mb-12 inline-block font-mono"
        >
          ← All Projects
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
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 text-text">
            {project.title} — {project.description}
          </h1>
          <p className="text-lg text-muted mb-10">{project.solution}</p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#problem"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 border border-edge rounded-full text-text hover:border-accent transition text-sm font-medium"
            >
              Continue Reading
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-accent-gradient text-bg font-semibold rounded-full hover:opacity-90 transition text-sm"
              >
                Visit Website
              </a>
            )}
          </div>
        </motion.div>

        {/* Live iframe preview — shown only if liveUrl exists */}
        {project.liveUrl && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-16"
          >
            <LivePreview url={project.liveUrl} />
          </motion.div>
        )}

        {/* Static image gallery, if any screenshots were added */}
        {project.images.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mb-16 space-y-6"
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

        <div className="border-t border-edge mb-16" />

        <motion.div
          id="problem"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 scroll-mt-24"
        >
          <h2 className="font-display text-2xl font-bold text-text mb-4">The Problem</h2>
          <p className="text-text leading-relaxed">{project.problem}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14"
        >
          <h2 className="font-display text-2xl font-bold text-text mb-4">The Solution</h2>
          <p className="text-text leading-relaxed">{project.solution}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14"
        >
          <h2 className="font-display text-2xl font-bold text-text mb-4">My Role</h2>
          <p className="text-text leading-relaxed">{project.myRole}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-14"
        >
          <h2 className="font-display text-2xl font-bold text-text mb-6">Features</h2>
          <div className="space-y-6">
            {project.features.map((feature) => (
              <motion.div key={feature.name} variants={fadeUpItem}>
                <h3 className="font-display font-semibold text-text mb-1">{feature.name}</h3>
                <p className="text-muted leading-relaxed text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-14"
        >
          <h2 className="font-display text-2xl font-bold text-text mb-6">Technologies Used</h2>
          <div className="space-y-8">
            {project.technologies.map((tech) => (
              <motion.div key={tech.category} variants={fadeUpItem}>
                <h3 className="font-display font-semibold text-accent mb-2 text-sm uppercase tracking-wide">
                  {tech.category}
                </h3>
                <p className="text-muted leading-relaxed text-sm mb-3">{tech.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 border border-edge rounded-full text-sm text-muted font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14"
        >
          <h2 className="font-display text-2xl font-bold text-text mb-4">Monetization Model</h2>
          <p className="text-text leading-relaxed">{project.monetization}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-20"
        >
          <h2 className="font-display text-2xl font-bold text-text mb-4">Project Summary</h2>
          <p className="text-text leading-relaxed">{project.summary}</p>
        </motion.div>

        {nextProject && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <Link
              href={`/projects/${nextProject.slug}`}
              className="block bg-surface border border-edge rounded-2xl p-8 hover:border-accent transition"
            >
              <p className="text-sm text-muted font-mono mb-2">Next Project →</p>
              <h3 className="font-display text-2xl font-bold text-text mb-2">{nextProject.title}</h3>
              <p className="text-muted text-sm">{nextProject.description}</p>
            </Link>
          </motion.div>
        )}
      </main>
    </>
  );
}
