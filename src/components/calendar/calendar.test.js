import React from 'react';
import { render } from '@testing-library/react';
import Calendar from './calendar';

describe(`Test ${Calendar.name} component`, () => {
  test('renders correctly', () => {
    const { container } = render(<Calendar />);
    expect(container).toBeTruthy();
  });
});
