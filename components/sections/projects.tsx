import { projects } from '@/lib/content';
import { ScrollReveal } from '@/components/scroll-reveal';

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-3xl px-4 py-24 sm:px-6 md:px-10">
      <ScrollReveal>
        <h2 className="text-3xl font-medium tracking-tight text-[#E1E0CC] sm:text-4xl">
          Projetos
        </h2>
      </ScrollReveal>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ScrollReveal key={project.id} delay={i * 0.05}>
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-medium text-[#E1E0CC]">{project.title}</h3>
              <p className="mt-2 text-sm text-[#E1E0CC]/70">{project.description}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
