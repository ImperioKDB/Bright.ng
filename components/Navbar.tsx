"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sectionLinks = [
  { label: "Home", anchor: "home" },
  { label: "Projects", anchor: "projects" },
  { label: "About", anchor: "about" },
  { label: "Contact", anchor: "contact" },
];

// How long the mobile panel takes to collapse (matches the motion.nav
// transition below). We wait this long before scrolling so the section
// we're scrolling to isn't being covered by a panel still animating shut.
const MENU_CLOSE_MS = 300;

export default function Navbar({ variant = "home" }: { variant?: "home" | "subpage" }) {
  const [open, setOpen] = useState(false);

  const scrollToSection = (anchor: string) => {
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${anchor}`);
    }
  };

  const handleClick = (anchor: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (variant !== "home") {
      // Subpage: native href="/#anchor" handles navigation + reload scroll.
      setOpen(false);
      return;
    }

    e.preventDefault();

    if (open) {
      // Close the menu first, THEN scroll once the collapse animation
      // has had time to finish. Doing both at once was the bug: the
      // panel's height animation was still running, so scrollIntoView
      // measured a layout that hadn't settled yet and silently no-op'd.
      setOpen(false);
      window.setTimeout(() => scrollToSection(anchor), MENU_CLOSE_MS);
    } else {
      scrollToSection(anchor);
    }
  };

  const logoHref = variant === "home" ? "#home" : "/";
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (variant === "home") handleClick("home", e);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-bg/80 border-b border-edge">
      <div className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a
          href={logoHref}
          onClick={handleLogoClick}
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
