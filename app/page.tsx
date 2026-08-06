import { PrismaHero } from '@/components/ui/prisma-hero';
import { About } from '@/components/sections/about';
import { Timeline } from '@/components/sections/timeline';
import { AccessControl } from '@/components/sections/access-control';
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
        <AccessControl />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
