import React from 'react';
import { render } from '@testing-library/react';
import ColorTag from './color-tag';

describe(`Test ${ColorTag.name} component`, () => {
  test('renders correctly', () => {
    const { container } = render(<ColorTag />);
    expect(container).toBeTruthy();
  });
});
