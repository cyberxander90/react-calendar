import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import moment from 'moment';
import Calendar from './calendar';

const onUpdateDate = jest.fn();

describe(`Test ${Calendar.name} component`, () => {
  it('allow change date correctly', () => {
    // ARRANGE
    const { container, getByText } = render(
      <Calendar
        GridCmp={({ date }) => <p>{moment(date).format('DD-MM-YYYY')}</p>}
        date={moment('2020-05-10', 'YYYY-MM-DD')}
        onUpdateDate={onUpdateDate}
      />
    );

    // ACT
    fireEvent.click(container.querySelector('[data-test=arrow-back]'));
    fireEvent.click(container.querySelector('[data-test=arrow-next]'));
    fireEvent.click(getByText('Today'));

    // ASSERT

    expect(getByText('May 2020')).toBeTruthy();
    expect(getByText('10-05-2020')).toBeTruthy();
    expect(onUpdateDate.mock.calls).toHaveLength(3);

    // back
    expect(moment(onUpdateDate.mock.calls[0][0] === moment('2020-05-09'))).toBeTruthy();
    expect(onUpdateDate.mock.calls[0][1]).toBeFalsy();

    // next
    expect(moment(onUpdateDate.mock.calls[1][0] === moment('2020-05-11'))).toBeTruthy();
    expect(onUpdateDate.mock.calls[1][1]).toBeFalsy();

    // today
    expect(moment(onUpdateDate.mock.calls[2][0] === moment())).toBeTruthy();
    expect(onUpdateDate.mock.calls[2][1]).toBeTruthy();
  });
});
