import React from 'react';
import { render } from '@testing-library/react';
import EventForm from './event-form';

describe(`Test ${EventForm.name} component`, () => {
  test('renders correctly without params', () => {
    const { container } = render(<EventForm text="hello" event={{}} />);
    expect(container).toBeTruthy();
  });
});
