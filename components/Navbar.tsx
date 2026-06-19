"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sectionLinks = [
  { label: "Home", anchor: "home" },
  { label: "Projects", anchor: "projects" },
  { label: "About", anchor: "about" },
  { label: "Contact", anchor: "contact" },
];

export default function Navbar({ variant = "home" }: { variant?: "home" | "subpage" }) {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  // On the homepage, links are plain #anchors. On a subpage (e.g. case
  // study), links need to navigate back to "/" first, then jump to anchor.
  const hrefFor = (anchor: string) =>
    variant === "home" ? `#${anchor}` : `/#${anchor}`;
  const logoHref = variant === "home" ? "#home" : "/";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-neutral-800">
      <div className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href={logoHref} className="font-bold text-lg tracking-tight">
          Bright
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {sectionLinks.map((link) => (
            <a
              key={link.anchor}
              href={hrefFor(link.anchor)}
              className="text-sm text-neutral-300 hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href={hrefFor("contact")}
            className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition"
          >
            Start a Project
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white block"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white block"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white block"
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-neutral-800"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {sectionLinks.map((link) => (
                <a
                  key={link.anchor}
                  href={hrefFor(link.anchor)}
                  onClick={handleLinkClick}
                  className="text-base text-neutral-300 hover:text-white transition"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={hrefFor("contact")}
                onClick={handleLinkClick}
                className="px-4 py-2.5 bg-white text-black text-sm font-medium rounded-full w-fit hover:bg-neutral-200 transition"
              >
                Start a Project
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
