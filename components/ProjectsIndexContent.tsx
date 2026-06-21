"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, fadeUpItem } from "@/lib/motion";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";

export default function ProjectsIndexContent() {
  return (
    <>
      <Navbar variant="subpage" />
      <main className="px-6 md:px-12 max-w-5xl mx-auto py-16 md:py-24">
        <Link
          href="/"
          className="text-sm text-muted hover:text-accent transition mb-12 inline-block font-mono"
        >
          ← Back to home
        </Link>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12">
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 text-text">
            All projects.
          </h1>
          <p className="text-muted text-lg max-w-xl">
            Every product I've built or co-built, from SaaS to e-commerce to EdTech.
          </p>
        </motion.div>

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
                className="block bg-surface border border-edge rounded-2xl p-6 transition-colors duration-200 hover:border-text/30 h-full"
              >
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
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </>
  );
}
