import React from 'react';
import { render } from '@testing-library/react';
import MonthGridCell from './month-grid-cell';

describe(`Test ${MonthGridCell.name} component`, () => {
  test('renders correctly without params', () => {
    const { getByText } = render(<MonthGridCell />);
    const element = getByText(/MonthGridCell/i);
    expect(element).toBeInTheDocument();
  });

  test('renders correctly with params', () => {
    const { getByText } = render(<MonthGridCell name="hello world" />);
    const element = getByText(/hello world/i);
    expect(element).toBeInTheDocument();
  });
});
