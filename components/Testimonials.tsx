const testimonials = [
  {
    quote:
      "Placeholder testimonial — swap in real feedback from collaborators or clients once available.",
    name: "Name",
    role: "Role, Company",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 md:px-12 max-w-5xl mx-auto py-20">
      <p className="text-sm uppercase tracking-widest text-neutral-500 mb-2">
        Testimonials
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        What people say.
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="border border-neutral-800 rounded-2xl p-6"
          >
            <p className="text-neutral-300 mb-4">"{t.quote}"</p>
            <p className="font-semibold">{t.name}</p>
            <p className="text-sm text-neutral-500">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
