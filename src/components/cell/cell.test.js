import React from 'react';
import { render } from '@testing-library/react';
import Cell from 'src/components/cell';

describe(`Test ${Cell.name} component`, () => {
  test('renders learn react link', () => {
    const { getByText } = render(<Cell />);
    const element = getByText(/cell/i);
    expect(element).toBeInTheDocument();
  });
});
