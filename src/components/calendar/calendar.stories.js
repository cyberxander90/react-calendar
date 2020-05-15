import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Calendar from './calendar';

export default {
  title: Calendar.name,
  decorators: [withKnobs]
};

export const Default = () => (
  <Calendar />
);
