"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function AboutTerminal() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="px-6 md:px-12 max-w-5xl mx-auto py-12"
    >
      <div className="border border-edge rounded-xl bg-surface overflow-hidden">
        <div className="bg-bg border-b border-edge px-4 py-2.5 flex items-center justify-between">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-edge" />
            <div className="w-2.5 h-2.5 rounded-full bg-edge" />
            <div className="w-2.5 h-2.5 rounded-full bg-edge" />
          </div>
          <span className="font-mono text-[11px] text-muted">user@bright:~/about$ cat workflow.md</span>
        </div>

        <div className="p-6 md:p-8 font-mono text-sm text-muted leading-relaxed space-y-4">
          <p>
            <span className="text-accent"># Status:</span>{" "}
            <span className="text-text">100-level Software Engineering @ UNIBEN</span>
          </p>
          <p>
            <span className="text-accent"># Methodology:</span>{" "}
            <span className="text-text">
              No laptop, no desktop IDE. My entire development environment runs
              on mobile infrastructure — Colab scripts, the GitHub API, and
              patience.
            </span>
          </p>
          <ul className="list-none space-y-2 mt-4 text-text">
            <li className="flex items-start gap-2">
              <span className="bg-accent-gradient bg-clip-text text-transparent">&gt;</span>
              Orchestrating backend logic via Google Colab Python scripts.
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-accent-gradient bg-clip-text text-transparent">&gt;</span>
              Version control and deploys via the GitHub Contents API.
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-accent-gradient bg-clip-text text-transparent">&gt;</span>
              Authenticated pushes using Personal Access Tokens, no local git.
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-accent-gradient bg-clip-text text-transparent">&gt;</span>
              Shipping production SaaS, e-commerce, and EdTech products this way.
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
