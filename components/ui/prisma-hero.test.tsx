import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PrismaHero } from './prisma-hero';

describe('PrismaHero', () => {
  it('renders name, role, tagline and every nav link', () => {
    render(<PrismaHero />);
    expect(screen.getByText('Desenvolvedor de Software')).toBeInTheDocument();
    expect(screen.getByText('Guarulhos % DEV')).toBeInTheDocument();
    expect(screen.getByText('EDUARDO')).toBeInTheDocument();
    expect(screen.getByText('LACERDA')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contato' })).toHaveAttribute('href', '#contact');
    expect(screen.getByRole('link', { name: 'Falar comigo' })).toHaveAttribute('href', '#contact');
  });
});
