import React from 'react';
import { render } from '@testing-library/react';
import moment from 'moment';
import { getGridDates } from 'src/services/dates';
import MonthGrid from './month-grid';

describe(`Test ${MonthGrid.name} component`, () => {
  test('renders correctly', () => {
    const { container } = render(
      <MonthGrid
        gridDates={getGridDates({ date: moment() })}
        month={0}
      />
    );
    expect(container).toBeTruthy();
  });
});
