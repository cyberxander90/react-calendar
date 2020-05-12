import React from 'react';
import { render } from '@testing-library/react';
import TextInput from './text-input';

describe(`Test ${TextInput.name} component`, () => {
  test('renders correctly', () => {
    const { getByDisplayValue } = render(<TextInput value="hello" />);
    const element = getByDisplayValue(/hello/i);
    expect(element).toBeInTheDocument();
  });
});
