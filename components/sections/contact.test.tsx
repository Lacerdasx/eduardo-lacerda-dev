import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Contact } from './contact';
import { contact } from '@/lib/content';

describe('Contact', () => {
  it('links to email, GitHub and LinkedIn', () => {
    render(<Contact />);
    expect(screen.getByRole('link', { name: contact.email })).toHaveAttribute(
      'href',
      `mailto:${contact.email}`,
    );
    expect(screen.getByRole('link', { name: contact.github })).toHaveAttribute(
      'href',
      contact.github,
    );
    expect(screen.getByRole('link', { name: contact.linkedin })).toHaveAttribute(
      'href',
      contact.linkedin,
    );
  });
});
