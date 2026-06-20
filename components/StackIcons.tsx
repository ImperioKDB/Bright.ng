"use client";

const stack = [
  "Next.js", "TypeScript", "Tailwind", "Supabase",
  "PostgreSQL", "Vercel", "GitHub", "Framer Motion",
];

const loopedStack = [...stack, ...stack];

export default function StackIcons() {
  return (
    <section className="py-12 overflow-hidden">
      <p className="text-sm uppercase tracking-widest text-muted mb-6 font-mono text-center px-6">
        Tools I work with
      </p>

      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-bg to-transparent z-10" />

        <div className="flex gap-3 animate-marquee w-max">
          {loopedStack.map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="px-4 py-2 border border-edge rounded-full text-sm text-muted font-mono whitespace-nowrap hover:border-accent/50 transition flex-shrink-0"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
