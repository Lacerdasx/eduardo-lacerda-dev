import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Projects } from './projects';
import { projects } from '@/lib/content';

describe('Projects', () => {
  it('renders a card for every project', () => {
    render(<Projects />);
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(projects.length);
  });

  it('links real projects to their GitHub repo', () => {
    render(<Projects />);
    const real = projects.filter((p) => !p.placeholder && p.url);
    for (const project of real) {
      expect(screen.getByRole('link', { name: new RegExp(project.title) })).toHaveAttribute(
        'href',
        project.url,
      );
    }
  });
});
