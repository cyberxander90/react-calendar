import React from 'react';
import { render } from '@testing-library/react';
import EventForm from './event-form';

describe(`Test ${EventForm.name} component`, () => {
  test('renders correctly without params', () => {
    const { getByPlaceholderText } = render(<EventForm text="hello" />);
    const element = getByPlaceholderText(/Add a reminder/i);
    expect(element).toBeInTheDocument();
  });
});
