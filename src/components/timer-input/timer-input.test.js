import React from 'react';
import { action } from '@storybook/addon-actions';
import { render } from '@testing-library/react';
import TimerInput from './timer-input';

describe(`Test ${TimerInput.name} component`, () => {
  test('renders correctly', () => {
    const { container } = render(
      <TimerInput
        text="time"
        hour="01"
        minute="00"
        onChangeTimer={action('Changed Time')}
      />
    );
    expect(container).toBeTruthy();
  });
});
