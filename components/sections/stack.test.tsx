import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Stack } from './stack';

describe('Stack', () => {
  it('renders category labels and a sample badge', () => {
    render(<Stack />);
    expect(screen.getByText('Backend')).toBeInTheDocument();
    expect(screen.getByText('ASP.NET Core')).toBeInTheDocument();
  });
});
