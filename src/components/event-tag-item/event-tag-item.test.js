import React from 'react';
import { render } from '@testing-library/react';
import EventTagItem from './event-tag-item';

describe(`Test ${EventTagItem.name} component`, () => {
  test('renders correctly without params', () => {
    const { getByText } = render(<EventTagItem event={{ remainder: 'Daily ' }} />);
    expect(getByText(/Daily/i)).toBeInTheDocument();
  });
});
