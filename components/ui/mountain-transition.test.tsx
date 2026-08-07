import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MountainTransition } from './mountain-transition';

describe('MountainTransition', () => {
  it('renders the mountain-base video', () => {
    const { container } = render(<MountainTransition />);
    const video = container.querySelector('video');
    expect(video).not.toBeNull();
    expect(video).toHaveAttribute('src', '/videos/mountain-base.mp4');
  });
});
