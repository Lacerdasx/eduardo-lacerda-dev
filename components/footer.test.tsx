import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Footer', () => {
  it('renders a copyright notice with the current year', () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
    expect(screen.getByText(/Todos os direitos reservados/)).toBeInTheDocument();
  });

  it('credits the source of the Hero background video', () => {
    render(<Footer />);
    expect(screen.getByText(/Prisma Creative Studio/)).toBeInTheDocument();
    expect(screen.getByText(/Aura\.build/)).toBeInTheDocument();
  });
});
