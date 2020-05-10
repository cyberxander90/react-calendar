import React from 'react';
import { render } from '@testing-library/react';
import MonthGrid from './month-grid';

describe(`Test ${MonthGrid.name} component`, () => {
  test('renders correctly without params', () => {
    const { getByText } = render(<MonthGrid />);
    const element = getByText(/MonthGrid/i);
    expect(element).toBeInTheDocument();
  });

  test('renders correctly with params', () => {
    const { getByText } = render(<MonthGrid name="hello world" />);
    const element = getByText(/hello world/i);
    expect(element).toBeInTheDocument();
  });
});
