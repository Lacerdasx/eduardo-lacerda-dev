import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Projects } from './projects';
import { projects } from '@/lib/content';

describe('Projects', () => {
  it('renders a card for every project', () => {
    render(<Projects />);
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(projects.length);
  });
});
