import React from 'react';
import { render } from '@testing-library/react';
import MonthGrid from './month-grid';

describe(`Test ${MonthGrid.name} component`, () => {
  test('renders correctly', () => {
    const { container } = render(<MonthGrid dateStr="2020-05-10" />);
    expect(container).toBeTruthy();
  });
});
