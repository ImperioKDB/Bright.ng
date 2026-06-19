const stack = [
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Supabase",
  "PostgreSQL",
  "Vercel",
  "GitHub",
  "Framer Motion",
];

export default function StackIcons() {
  return (
    <section className="px-6 md:px-12 max-w-5xl mx-auto py-12">
      <p className="text-sm uppercase tracking-widest text-neutral-500 mb-6">
        Tools I work with
      </p>
      <div className="flex flex-wrap gap-3">
        {stack.map((tool) => (
          <span
            key={tool}
            className="px-4 py-2 border border-neutral-700 rounded-full text-sm text-neutral-300"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}
