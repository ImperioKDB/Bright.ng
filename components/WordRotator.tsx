"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WordRotator({
  words,
  intervalMs = 2200,
  className = "",
}: {
  words: string[];
  intervalMs?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [words.length, intervalMs]);

  const gradientClass =
    "bg-accent-gradient bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]";

  return (
    <span className={`relative inline-block ${className}`}>
      {mounted ? (
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`inline-block ${gradientClass}`}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      ) : (
        <span className={`inline-block ${gradientClass}`}>{words[0]}</span>
      )}
    </span>
  );
}
