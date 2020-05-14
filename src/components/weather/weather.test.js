import React from 'react';
import { render } from '@testing-library/react';
import Weather from './weather';

describe(`Test ${Weather.name} component`, () => {
  test('renders correctly', () => {
    const { container } = render(<Weather />);
    expect(container).toBeTruthy();
  });
});
