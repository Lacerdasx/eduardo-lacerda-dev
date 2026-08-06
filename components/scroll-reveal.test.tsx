import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ScrollReveal } from './scroll-reveal';

describe('ScrollReveal', () => {
  it('renders its children', () => {
    render(
      <ScrollReveal>
        <p>Conteúdo revelado</p>
      </ScrollReveal>,
    );
    expect(screen.getByText('Conteúdo revelado')).toBeInTheDocument();
  });
});
