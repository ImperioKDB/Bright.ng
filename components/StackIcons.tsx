"use client";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiPostgresql,
  SiVercel,
  SiGithub,
  SiFramer,
} from "react-icons/si";

const stack = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Supabase", Icon: SiSupabase },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Vercel", Icon: SiVercel },
  { name: "GitHub", Icon: SiGithub },
  { name: "Framer Motion", Icon: SiFramer },
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
          {loopedStack.map(({ name, Icon }, i) => (
            <span
              key={`${name}-${i}`}
              className="flex items-center gap-2 px-4 py-2 border border-edge rounded-full text-sm text-muted font-mono whitespace-nowrap hover:border-accent/50 hover:text-text transition flex-shrink-0"
            >
              <Icon size={16} />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
