import React from 'react';
import { render } from '@testing-library/react';
import EventTag from './event-tag';

const data = [
  {
    id: '1', color: 'red', remainder: 'Text 1', startDate: '2020-05-10 09-30', endDate: '2020-05-10 09-30'
  },
  {
    id: '2', color: 'green', remainder: 'Text 2', startDate: '2020-05-10 10-30', endDate: '2020-05-10-09-30'
  }
];

// TODO: provide redux provider
describe(`Test ${EventTag.name} component`, () => {
  test('renders correctly', () => {
    const { getByText } = render(<EventTag date="2020-01-01" events={data} />);
    expect(getByText('Text 1')).toBeTruthy();
    expect(getByText('Text 2')).toBeTruthy();
  });
});
