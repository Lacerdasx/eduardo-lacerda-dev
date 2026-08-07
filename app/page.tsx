import { PrismaHero } from '@/components/ui/prisma-hero';
import { MountainTransition } from '@/components/ui/mountain-transition';
import { About } from '@/components/sections/about';
import { Timeline } from '@/components/sections/timeline';
import { Stack } from '@/components/sections/stack';
import { Projects } from '@/components/sections/projects';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <main>
        <PrismaHero />
        <About />
        <Timeline />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <MountainTransition />
    </>
  );
}
