"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="px-6 md:px-12 max-w-5xl mx-auto pt-20"
    >
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-text">
          Ready to create<br />something huge?
        </h2>
        <a
          href="mailto:bright@brightng.dev"
          className="inline-flex items-center gap-2 text-lg font-semibold bg-accent-gradient bg-clip-text text-transparent hover:opacity-80 transition"
        >
          Let's Work →
        </a>
      </div>

      <div className="border-t border-edge pt-12 pb-8">
        <div className="text-center mb-10">
          <p className="font-display font-extrabold text-2xl bg-accent-gradient bg-clip-text text-transparent mb-3">
            BRIGHT
          </p>
          <p className="text-sm text-muted max-w-md mx-auto">
            Full-stack developer building SaaS, e-commerce, and EdTech
            products from concept to production.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-4 font-mono">Pages</p>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <a href="#home" className="hover:text-text transition">Home</a>
              <a href="#about" className="hover:text-text transition">About</a>
              <a href="#projects" className="hover:text-text transition">Projects</a>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-4 font-mono">Connect</p>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <a href="mailto:kingbrite123@gmail.com" className="hover:text-text transition">Email</a>
              <a href="https://github.com/ImperioKDB" target="_blank" rel="noopener noreferrer" className="hover:text-text transition">GitHub</a>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-4 font-mono">Projects</p>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <a href="/projects/forge" className="hover:text-text transition">Forge</a>
              <a href="/projects/pastq" className="hover:text-text transition">PastQ</a>
              <a href="/projects/tacsfon-merch" className="hover:text-text transition">TACSFON Merch</a>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-4 font-mono">Status</p>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <span>100-level, UNIBEN</span>
              <span>Benin City, Nigeria</span>
            </div>
          </div>
        </div>

        <p className="text-center text-muted text-xs font-mono border-t border-edge pt-6">
          © {new Date().getFullYear()} Bright. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
