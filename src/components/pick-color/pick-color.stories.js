import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import PickColor from './pick-color';

export default {
  title: PickColor.name,
  decorators: [withKnobs]
};

export const Default = () => <PickColor color={text('Color', 'red')} />;
