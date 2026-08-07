'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const VIDEO_SRC = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/videos/mountain-base.mp4`;

export function MountainTransition() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end'],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], ['-10%', '0%']);
  const riseOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={sectionRef} className="relative h-[50vh] w-full overflow-hidden">
      <motion.video
        style={{ y: videoY }}
        autoPlay
        loop
        muted
        playsInline
        className="absolute -top-[10%] inset-x-0 h-[120%] w-full object-cover"
        src={VIDEO_SRC}
      />
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent" />
      <motion.div
        style={{ opacity: riseOpacity }}
        className="pointer-events-none absolute inset-0 bg-black"
      />
    </section>
  );
}

export default MountainTransition;
