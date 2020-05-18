import React from 'react';
import { render } from '@testing-library/react';
import TextInput from './text-input';

describe(`Test ${TextInput.name} component`, () => {
  test('renders correctly', () => {
    const { getByDisplayValue } = render(<TextInput value="hello" />);
    expect(getByDisplayValue(/hello/i)).toBeInTheDocument();
  });
});
