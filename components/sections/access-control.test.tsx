import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AccessControl } from './access-control';
import { accessControlItems } from '@/lib/content';

describe('AccessControl', () => {
  it('renders every access control item', () => {
    render(<AccessControl />);
    for (const item of accessControlItems) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
  });
});
