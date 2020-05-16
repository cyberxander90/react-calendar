/* eslint-disable react/prop-types */
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Calendar from './calendar';
import 'src/styles/index.scss';

export default {
  title: Calendar.name,
  decorators: [withKnobs]
};

export const Default = () => (
  <Calendar />
);

const Grid = ({ dateStr }) => (
  <h1>
    {`You are on: ${dateStr}`}
  </h1>
);

export const CustomGrid = () => (
  <Calendar gridCmp={Grid} />
);
