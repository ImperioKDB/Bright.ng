"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import type { FormEvent } from "react";

export default function Footer() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const project = String(form.get("project") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const subject = project ? `Project inquiry: ${project}` : "New project inquiry";
    const body = [`Name: ${name}`, `Email: ${email}`, `Project: ${project}`, "", message].join("\n");
    window.location.href = `mailto:kingbrite123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <motion.footer
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="px-6 md:px-12 max-w-5xl mx-auto pt-20"
    >
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-text">
          Have a project<br />in mind?
        </h2>
        <p className="text-muted max-w-xl mx-auto leading-relaxed mb-6">
          Tell me what you&apos;re building, what is currently stuck, and where
          you want to take it. I&apos;m open to thoughtful collaborations,
          full-stack opportunities, and selected freelance work.
        </p>
        <p className="text-xs uppercase tracking-widest text-muted font-mono">
          Based in Benin City, Nigeria · Open to remote work
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-20 bg-surface border border-edge rounded-2xl p-6 md:p-8 text-left">
        <div className="grid md:grid-cols-2 gap-5">
          <label className="flex flex-col gap-2 text-sm text-muted">
            Your name
            <input required name="name" type="text" autoComplete="name" className="rounded-xl border border-edge bg-bg px-4 py-3 text-text outline-none focus:border-accent" placeholder="Jane Doe" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-muted">
            Email address
            <input required name="email" type="email" autoComplete="email" className="rounded-xl border border-edge bg-bg px-4 py-3 text-text outline-none focus:border-accent" placeholder="jane@company.com" />
          </label>
        </div>
        <label className="flex flex-col gap-2 text-sm text-muted mt-5">
          What are you building?
          <input required name="project" type="text" className="rounded-xl border border-edge bg-bg px-4 py-3 text-text outline-none focus:border-accent" placeholder="A scholarship platform, marketplace, or internal tool" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-muted mt-5">
          Tell me about the project
          <textarea required name="message" rows={5} className="resize-y rounded-xl border border-edge bg-bg px-4 py-3 text-text outline-none focus:border-accent" placeholder="What problem are you solving, and what kind of help do you need?" />
        </label>
        <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 font-semibold text-bg hover:opacity-90 transition">
          Tell me about the project →
        </button>
        <p className="text-xs text-muted mt-4">This opens your email app with the message filled in.</p>
      </form>

      <div className="border-t border-edge pt-12 pb-8">
        <div className="text-center mb-10">
          <p className="font-display font-extrabold text-2xl bg-accent-gradient bg-clip-text text-transparent mb-3">
            BRIGHT
          </p>
          <p className="text-sm text-muted max-w-md mx-auto">
            Full-stack developer building Scholars and other useful products
            from concept to production.
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
              <a href="https://www.linkedin.com/in/roqeeb-abolaji-3218b640" target="_blank" rel="noopener noreferrer" className="hover:text-text transition">LinkedIn</a>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-4 font-mono">Projects</p>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <a href="/projects/scholars" className="hover:text-text transition">Scholars</a>
              <a href="/projects/levyledger" className="hover:text-text transition">LevyLedger</a>
              <a href="/projects/tacsfon-bookshop" className="hover:text-text transition">TACSFON Bookshop</a>
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
