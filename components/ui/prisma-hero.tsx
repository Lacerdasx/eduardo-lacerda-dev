'use client';

import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { heroName, heroRole } from '@/lib/content';

const navItems = [
  { label: 'Sobre', href: '#about' },
  { label: 'Currículo', href: '#timeline' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
];

const HERO_VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4';

function WordsPullUp({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(' ');

  return (
    <div ref={ref} className="inline-flex flex-wrap">
      {words.map((word, i) => (
        <motion.span
          key={word + i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
          style={{ marginRight: i === words.length - 1 ? 0 : '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

export function PrismaHero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const sinkOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section id="hero" ref={heroRef} className="h-screen w-full">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        <motion.video
          style={{ y: videoY }}
          autoPlay
          loop
          muted
          playsInline
          className="absolute -top-[10%] inset-x-0 h-[120%] w-full object-cover"
          src={HERO_VIDEO_SRC}
        />
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
        <motion.div
          style={{ opacity: sinkOpacity }}
          className="pointer-events-none absolute inset-0 bg-black"
        />

        <nav className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
          <div className="flex items-center gap-3 rounded-b-2xl bg-black px-4 py-2 sm:gap-6 md:gap-12 md:rounded-b-3xl md:px-8 lg:gap-14">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[10px] transition-colors sm:text-xs md:text-sm"
                style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 px-4 pb-2 sm:px-6 md:px-10">
          <div className="grid grid-cols-12 items-end gap-4">
            <div className="col-span-12 lg:col-span-8">
              <p
                className="text-xs uppercase tracking-[0.2em] sm:text-sm"
                style={{ color: 'rgba(225, 224, 204, 0.7)' }}
              >
                {heroRole}
              </p>
              <h1
                className="font-medium leading-[0.85] tracking-[-0.07em] text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[11vw] 2xl:text-[12vw]"
                style={{ color: '#E1E0CC' }}
              >
                <WordsPullUp text={heroName} />
              </h1>
            </div>
            <div className="col-span-12 flex flex-col gap-5 pb-6 lg:col-span-4 lg:pb-10">
              <motion.a
                href="#contact"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group inline-flex items-center gap-2 self-start rounded-full bg-primary py-1 pl-5 pr-1 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base"
              >
                Falar comigo
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight className="h-4 w-4" style={{ color: '#E1E0CC' }} />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrismaHero;
