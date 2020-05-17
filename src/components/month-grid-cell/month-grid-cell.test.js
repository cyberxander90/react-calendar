import React from 'react';
import { render } from '@testing-library/react';
import MonthGridCell from './month-grid-cell';

const data = [
  {
    id: 1, color: 'red', remainder: 'Text 1', startDate: '2020-05-10 09-30', endDate: '2020-05-10 09-30'
  },
  {
    id: 2, color: 'green', remainder: 'Text 2', startDate: '2020-05-10 10-30', endDate: '2020-05-10-09-30'
  }
];

describe(`Test ${MonthGridCell.name} component`, () => {
  test('renders correctly', () => {
    const { container } = render(
      <MonthGridCell
        date="2020-05-10"
        events={data}
      />
    );
    expect(container).toBeTruthy();
  });
});
