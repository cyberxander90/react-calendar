import React from 'react';
import { render } from '@testing-library/react';
import Button from './button';

describe(`Test ${Button.name} component`, () => {
  test('renders correctly', () => {
    const { getByText } = render(<Button>Click Me</Button>);
    expect(getByText(/Click Me/i)).toBeTruthy();
  });
});
