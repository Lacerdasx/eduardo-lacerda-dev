import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { About } from './about';
import { aboutText } from '@/lib/content';

describe('About', () => {
  it('renders the professional summary', () => {
    render(<About />);
    expect(screen.getByText(aboutText)).toBeInTheDocument();
  });
});
