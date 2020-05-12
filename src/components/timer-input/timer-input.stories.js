import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
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
    // eslint-disable-next-line no-console
    onChangeTimer={(value) => console.log(value)}
  />
);
