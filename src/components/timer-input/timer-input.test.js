import React from 'react';
import { render } from '@testing-library/react';
import TimerInput from './timer-input';

describe(`Test ${TimerInput.name} component`, () => {
  test('renders correctly', () => {
    const { container } = render(
      <TimerInput
        text="time"
        hour="01"
        minute="00"
        // eslint-disable-next-line no-console
        onChangeTimer={() => {}}
      />
    );
    expect(container).toBeTruthy();
  });
});
