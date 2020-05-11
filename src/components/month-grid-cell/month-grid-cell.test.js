import React from 'react';
import { render } from '@testing-library/react';
import MonthGridCell from './month-grid-cell';

describe(`Test ${MonthGridCell.name} component`, () => {
  test('renders correctly', () => {
    const { container } = render(<MonthGridCell id="2020-05-10" day={3} tabIndex={0} isCurrentMonth />);
    expect(container).toBeTruthy();
  });
});
