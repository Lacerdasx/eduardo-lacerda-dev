import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';

vi.mock('@emailjs/browser', () => ({ default: { sendForm: vi.fn() } }));

describe('Home', () => {
  it('renders every section', () => {
    render(<Home />);
    expect(screen.getByText('Desenvolvedor de Software')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Sobre' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Currículo' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Controle de Acesso' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Stack' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Projetos' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Contato' })).toBeInTheDocument();
  });
});
