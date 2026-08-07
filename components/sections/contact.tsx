import { contact } from '@/lib/content';
import { ScrollReveal } from '@/components/scroll-reveal';

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-24 sm:px-6 md:px-10">
      <ScrollReveal>
        <h2 className="text-3xl font-medium tracking-tight text-[#E1E0CC] sm:text-4xl">
          Contato
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <ul className="mt-6 space-y-1 text-sm text-[#E1E0CC]/80">
          <li>
            <a href={`mailto:${contact.email}`} className="underline underline-offset-4">
              {contact.email}
            </a>
          </li>
          <li>
            <a href={contact.github} target="_blank" rel="noreferrer" className="underline underline-offset-4">
              {contact.github}
            </a>
          </li>
          <li>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="underline underline-offset-4">
              {contact.linkedin}
            </a>
          </li>
        </ul>
      </ScrollReveal>
    </section>
  );
}
