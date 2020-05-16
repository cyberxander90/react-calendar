import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import TimerInput from './timer-input';

export default {
  title: TimerInput.name,
  decorators: [withKnobs]
};

export const Default = () => (
  <TimerInput
    text={text('Text', 'time')}
    hour={text('Hour', '01')}
    minute={text('Minute', '00')}
    onChangeTimer={action('Change time')}
  />
);

export const WithErrors = () => (
  <TimerInput
    text={text('Text', 'time')}
    hour={text('Hour', '01')}
    minute={text('Minute', '00')}
    onChangeTimer={action('Change time')}
    displayValidation
    errors={['Invalid']}
  />
);
