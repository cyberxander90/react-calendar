import React from 'react';
import { render } from '@testing-library/react';
import EventTag from './event-tag';

describe(`Test ${EventTag.name} component`, () => {
  test('renders correctly', () => {
    const { getByText } = render(<EventTag />);
    const element = getByText(/EventTag/i);
    expect(element).toBeInTheDocument();
  });
});
