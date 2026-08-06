import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import emailjs from '@emailjs/browser';
import { Contact } from './contact';

vi.mock('@emailjs/browser', () => ({
  default: { sendForm: vi.fn() },
}));

function fillForm() {
  fireEvent.change(screen.getByLabelText('Nome'), { target: { value: 'Teste' } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'teste@example.com' } });
  fireEvent.change(screen.getByLabelText('Assunto'), { target: { value: 'Oi' } });
  fireEvent.change(screen.getByLabelText('Mensagem'), { target: { value: 'Mensagem de teste' } });
}

describe('Contact', () => {
  beforeEach(() => {
    vi.mocked(emailjs.sendForm).mockReset();
  });

  it('renders the real contact info', () => {
    render(<Contact />);
    expect(screen.getByText('(11) 98080-2502')).toBeInTheDocument();
    expect(screen.getByText('sugiganedu@gmail.com')).toBeInTheDocument();
  });

  it('sends the form and shows a success message', async () => {
    vi.mocked(emailjs.sendForm).mockResolvedValue({ status: 200, text: 'OK' } as never);
    render(<Contact />);
    fillForm();
    fireEvent.click(screen.getByRole('button', { name: /enviar/i }));

    await waitFor(() => expect(emailjs.sendForm).toHaveBeenCalledTimes(1));
    expect(await screen.findByText('Mensagem enviada.')).toBeInTheDocument();
  });

  it('shows an error message when sending fails', async () => {
    vi.mocked(emailjs.sendForm).mockRejectedValue(new Error('network error'));
    render(<Contact />);
    fillForm();
    fireEvent.click(screen.getByRole('button', { name: /enviar/i }));

    expect(await screen.findByText('Falha ao enviar. Tente novamente.')).toBeInTheDocument();
  });
});
