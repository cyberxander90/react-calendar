import React from 'react';
import { render } from '@testing-library/react';
import LoadingBar from './loading-bar';

describe(`Test ${LoadingBar.name} component`, () => {
  test('renders correctly', () => {
    const { container } = render(<LoadingBar />);
    expect(container).toBeTruthy();
  });
});
