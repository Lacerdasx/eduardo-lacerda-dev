import { aboutText } from '@/lib/content';
import { ScrollReveal } from '@/components/scroll-reveal';

export function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-4 py-24 sm:px-6 md:px-10">
      <ScrollReveal>
        <h2 className="text-3xl font-medium tracking-tight text-[#E1E0CC] sm:text-4xl">
          Sobre
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="mt-6 text-base leading-relaxed text-[#E1E0CC]/80 sm:text-lg">
          {aboutText}
        </p>
      </ScrollReveal>
    </section>
  );
}
