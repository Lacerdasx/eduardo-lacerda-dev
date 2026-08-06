import { accessControlItems } from '@/lib/content';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Badge } from '@/components/ui/badge';

export function AccessControl() {
  return (
    <section id="access-control" className="mx-auto max-w-3xl px-4 py-24 sm:px-6 md:px-10">
      <ScrollReveal>
        <h2 className="text-3xl font-medium tracking-tight text-[#E1E0CC] sm:text-4xl">
          Controle de Acesso
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <div className="mt-6 flex flex-wrap gap-2">
          {accessControlItems.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
