import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Timeline } from './timeline';

describe('Timeline', () => {
  it('renders the Lize role and both education institutions', () => {
    render(<Timeline />);
    expect(screen.getByText(/Lize — Plataforma VitrineOOH/)).toBeInTheDocument();
    expect(screen.getByText(/Universidade Cruzeiro do Sul/)).toBeInTheDocument();
    expect(screen.getByText(/EBAC/)).toBeInTheDocument();
  });
});
