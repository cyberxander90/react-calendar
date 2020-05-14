import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Weather from './weather';

export default {
  title: Weather.name,
  decorators: [withKnobs]
};

export const Default = () => <Weather />;
export const WeatherWithName = () => <Weather name={text('Text', 'hello world')} />;
