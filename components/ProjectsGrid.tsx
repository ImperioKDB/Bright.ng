import { projects } from "@/data/projects";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="px-6 md:px-12 max-w-5xl mx-auto py-20">
      <p className="text-sm uppercase tracking-widest text-neutral-500 mb-2">
        My work
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Projects I've worked on.
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs px-2 py-1 bg-neutral-800 rounded-full">
                {project.category}
              </span>
              <span className="text-xs px-2 py-1 bg-emerald-900 text-emerald-300 rounded-full">
                {project.status}
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-neutral-400 text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
