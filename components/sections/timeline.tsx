import { experience, education } from '@/lib/content';
import { ScrollReveal } from '@/components/scroll-reveal';

export function Timeline() {
  return (
    <section id="timeline" className="mx-auto max-w-3xl px-4 py-24 sm:px-6 md:px-10">
      <ScrollReveal>
        <h2 className="text-3xl font-medium tracking-tight text-[#E1E0CC] sm:text-4xl">
          Currículo
        </h2>
      </ScrollReveal>

      <div className="mt-10">
        <ScrollReveal>
          <h3 className="text-sm uppercase tracking-[0.2em] text-[#E1E0CC]/60">
            Experiência
          </h3>
        </ScrollReveal>
        {experience.map((entry, i) => (
          <ScrollReveal key={entry.id} delay={0.1 + i * 0.05}>
            <article className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h4 className="text-lg font-medium text-[#E1E0CC]">
                {entry.role} ·{' '}
                {entry.orgUrl ? (
                  <a href={entry.orgUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                    {entry.org}
                  </a>
                ) : (
                  entry.org
                )}
              </h4>
              <p className="mt-1 text-sm text-[#E1E0CC]/60">{entry.period}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#E1E0CC]/80">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-10">
        <ScrollReveal>
          <h3 className="text-sm uppercase tracking-[0.2em] text-[#E1E0CC]/60">
            Formação
          </h3>
        </ScrollReveal>
        {education.map((entry, i) => (
          <ScrollReveal key={entry.id} delay={0.1 + i * 0.05}>
            <article className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h4 className="text-lg font-medium text-[#E1E0CC]">
                {entry.course} · {entry.institution}
              </h4>
              <p className="mt-1 text-sm text-[#E1E0CC]/60">
                {entry.period} · {entry.status}
              </p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
