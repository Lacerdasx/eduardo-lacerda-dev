import { stack } from '@/lib/content';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Badge } from '@/components/ui/badge';

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-3xl px-4 py-24 sm:px-6 md:px-10">
      <ScrollReveal>
        <h2 className="text-3xl font-medium tracking-tight text-[#E1E0CC] sm:text-4xl">
          Stack
        </h2>
      </ScrollReveal>
      <div className="mt-10 space-y-8">
        {stack.map((category, i) => (
          <ScrollReveal key={category.id} delay={i * 0.05}>
            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-[#E1E0CC]/60">
                {category.label}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
