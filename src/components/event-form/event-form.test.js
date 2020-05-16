import React from 'react';
import { render } from '@testing-library/react';
import EventForm from './event-form';

describe(`Test ${EventForm.name} component`, () => {
  test('renders correctly', () => {
    const { container } = render(
      <EventForm
        id="2020-01-01"
      />
    );
    expect(container).toBeTruthy();
  });
});
