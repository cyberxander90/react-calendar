import React from 'react';
import { render } from '@testing-library/react';
import EventTagItem from './event-tag-item';

describe(`Test ${EventTagItem.name} component`, () => {
  test('renders correctly without params', () => {
    const { getByText } = render(<EventTagItem remainder="Daily" time="11:40am" />);
    expect(getByText(/Daily/i)).toBeInTheDocument();
    expect(getByText(/11:40am/i)).toBeInTheDocument();
  });
});
