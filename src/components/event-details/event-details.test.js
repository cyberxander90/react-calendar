import React from 'react';
import { render } from '@testing-library/react';
import EventDetails from './event-details';

describe(`Test ${EventDetails.name} component`, () => {
  test('renders correctly', () => {
    const { getByText } = render(
      <EventDetails
        remainder="hello"
        color="red"
        startDate="2020-01-01 10:10 am"
        endDate="2020-01-01 11:10 am"
        city=""
      />
    );
    expect(getByText('hello')).toBeTruthy();
    expect(getByText('10:10 - 11:10')).toBeTruthy();
  });
});
