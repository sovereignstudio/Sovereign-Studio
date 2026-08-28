import FadeUp from "./FadeUp";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
      <FadeUp>
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <span className="font-mono-label text-[11px] uppercase" style={{ color: "var(--accent)" }}>
              Inventory
            </span>
            <h2 className="font-display mt-2 text-3xl font-semibold sm:text-4xl" style={{ color: "var(--text)" }}>
              Projects
            </h2>
          </div>
          <span className="font-mono-label hidden text-[11px] sm:block" style={{ color: "var(--text-muted)" }}>
            {projects.length} items shown
          </span>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <FadeUp key={project.id} delay={i * 0.1} className="h-full">
            <ProjectCard project={project} />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
