import React from 'react';
import { render } from '@testing-library/react';
import moment from 'moment';
import { getGridDates } from 'src/services/grid-service';
import MonthGrid from './month-grid';

describe(`Test ${MonthGrid.name} component`, () => {
  test('renders correctly', () => {
    const { container } = render(
      <MonthGrid
        grid={getGridDates({ date: moment() })}
        monthValue={moment().month()}
      />
    );
    expect(container).toBeTruthy();
  });
});
