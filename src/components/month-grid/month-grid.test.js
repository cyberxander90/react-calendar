import React from 'react';
import { render } from '@testing-library/react';
import moment from 'moment';
import { range } from 'src/services/tools-service';
import MonthGrid from './month-grid';

const dates = range(4)
  .map((week) => range(7)
    .map((day) => moment().add(week * day, 'day')));

describe(`Test ${MonthGrid.name} component`, () => {
  test('renders correctly', () => {
    const { container } = render(
      <MonthGrid
        grid={dates}
        startOnMonday={false}
        monthValue={moment().month()}
      />
    );
    expect(container).toBeTruthy();
  });
});
