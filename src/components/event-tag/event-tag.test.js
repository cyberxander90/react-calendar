import React from 'react';
import { render } from '@testing-library/react';
import EventTag from './event-tag';

describe(`Test ${EventTag.name} component`, () => {
  test('renders correctly', () => {
    const { container } = render(<EventTag events={[]} />);
    expect(container).toBeTruthy();
  });
});
