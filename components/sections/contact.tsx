import { contact } from '@/lib/content';
import { ScrollReveal } from '@/components/scroll-reveal';

const GITHUB_HANDLE = contact.github.replace('https://github.com/', '');

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-24 sm:px-6 md:px-10">
      <ScrollReveal>
        <h2 className="text-3xl font-medium tracking-tight text-[#E1E0CC] sm:text-4xl">
          Contato
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <ul className="mt-6 space-y-3 text-base text-[#E1E0CC]/80 sm:text-lg">
          <li>
            <span className="text-[#E1E0CC]/50">Email: </span>
            <a href={`mailto:${contact.email}`} className="underline underline-offset-4">
              {contact.email}
            </a>
          </li>
          <li>
            <span className="text-[#E1E0CC]/50">GitHub: </span>
            <a href={contact.github} target="_blank" rel="noreferrer" className="underline underline-offset-4">
              {GITHUB_HANDLE}
            </a>
          </li>
          <li>
            <span className="text-[#E1E0CC]/50">LinkedIn: </span>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="underline underline-offset-4">
              Eduardo Lacerda
            </a>
          </li>
        </ul>
      </ScrollReveal>
    </section>
  );
}
