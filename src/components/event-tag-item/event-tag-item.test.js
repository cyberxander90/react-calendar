import React from 'react';
import { render } from '@testing-library/react';
import EventTagItem from './event-tag-item';

describe(`Test ${EventTagItem.name} component`, () => {
  test('renders correctly', () => {
    const { getByText } = render(
      <ul style={{ listStyle: 'none' }}>
        <EventTagItem
          date="2020-05-10"
          event={{
            remainder: 'Daily Meeting',
            color: 'red',
            startDate: '2020-05-10 09-30',
            endDate: '2020-05-10 09-30'
          }}
        />
      </ul>
    );
    expect(getByText(/Daily Meeting/i)).toBeInTheDocument();
  });
});
