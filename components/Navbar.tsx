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

  const handleClick = (anchor: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    handleLinkClick();

    if (variant !== "home") {
      return;
    }

    const el = document.getElementById(anchor);
    if (!el) {
      return;
    }

    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", `#${anchor}`);
  };

  const logoHref = variant === "home" ? "#home" : "/";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-bg/80 border-b border-edge">
      <div className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a
          href={logoHref}
          onClick={(e) => variant === "home" && handleClick("home", e)}
          className="font-display font-bold text-lg tracking-tight text-text"
        >
          Bright<span className="text-accent">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {sectionLinks.map((link) => (
            <a
              key={link.anchor}
              href={variant === "home" ? `#${link.anchor}` : `/#${link.anchor}`}
              onClick={(e) => handleClick(link.anchor, e)}
              className="text-sm text-muted hover:text-text transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href={variant === "home" ? "#contact" : "/#contact"}
            onClick={(e) => handleClick("contact", e)}
            className="px-4 py-2 bg-accent text-bg text-sm font-medium rounded-full hover:opacity-90 transition"
          >
            Start a Project
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-text block"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-text block"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-text block"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-edge"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {sectionLinks.map((link) => (
                <a
                  key={link.anchor}
                  href={variant === "home" ? `#${link.anchor}` : `/#${link.anchor}`}
                  onClick={(e) => handleClick(link.anchor, e)}
                  className="text-base text-muted hover:text-text transition"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={variant === "home" ? "#contact" : "/#contact"}
                onClick={(e) => handleClick("contact", e)}
                className="px-4 py-2.5 bg-accent text-bg text-sm font-medium rounded-full w-fit hover:opacity-90 transition"
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
