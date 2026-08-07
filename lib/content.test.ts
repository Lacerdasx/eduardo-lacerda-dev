import { describe, it, expect } from 'vitest';
import { experience, education, stack, projects, contact } from './content';

describe('content data', () => {
  it('has the Lize experience entry', () => {
    expect(experience).toHaveLength(1);
    expect(experience[0].org).toContain('Lize');
    expect(experience[0].bullets.length).toBeGreaterThan(0);
  });

  it('has both education entries', () => {
    expect(education.map((e) => e.institution)).toEqual([
      'Universidade Cruzeiro do Sul',
      'EBAC',
    ]);
  });

  it('has all seven stack categories', () => {
    expect(stack).toHaveLength(7);
    expect(stack.map((c) => c.id)).toContain('backend');
  });

  it('has at least one real project with a working link', () => {
    const real = projects.filter((p) => !p.placeholder);
    expect(real.length).toBeGreaterThan(0);
    expect(real.every((p) => p.url?.startsWith('https://'))).toBe(true);
  });

  it('includes VitrineOOH among the real projects', () => {
    const vitrine = projects.find((p) => p.id === 'vitrineooh');
    expect(vitrine?.url).toBe('https://www.vitrineooh.com.br/');
    expect(vitrine?.placeholder).toBe(false);
  });

  it('has the real contact info', () => {
    expect(contact.email).toBe('sugiganedu@gmail.com');
    expect(contact.github).toBe('https://github.com/Lacerdasx');
  });
});
