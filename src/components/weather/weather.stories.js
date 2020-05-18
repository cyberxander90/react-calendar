import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import moment from 'moment';
import Weather from './weather';

export default {
  title: Weather.name,
  decorators: [withKnobs]
};

export const Default = () => (
  <Weather
    city={text('City', 'Montevideo')}
    date={moment()}
  />
);
