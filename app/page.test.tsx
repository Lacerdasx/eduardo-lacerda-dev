import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders every section', () => {
    render(<Home />);
    expect(screen.getByText('Desenvolvedor de Software')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Sobre' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Currículo' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Stack' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Projetos' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Contato' })).toBeInTheDocument();
    expect(screen.getByText(/Todos os direitos reservados/)).toBeInTheDocument();
  });
});
