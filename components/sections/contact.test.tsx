import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Contact } from './contact';
import { contact } from '@/lib/content';

describe('Contact', () => {
  it('links to email, GitHub and LinkedIn with readable labels', () => {
    render(<Contact />);
    expect(screen.getByRole('link', { name: contact.email })).toHaveAttribute(
      'href',
      `mailto:${contact.email}`,
    );
    expect(screen.getByRole('link', { name: 'Lacerdasx' })).toHaveAttribute('href', contact.github);
    expect(screen.getByRole('link', { name: 'Eduardo Lacerda' })).toHaveAttribute(
      'href',
      contact.linkedin,
    );
  });
});
