import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import ColorTag from './color-tag';

export default {
  title: ColorTag.name,
  decorators: [withKnobs]
};

export const Default = () => (
  ['red', 'blue', 'green', 'yellow', 'black'].map((color) => <ColorTag key="color" color={color} />)
);

export const CustomColor = () => <ColorTag color={text('Color', 'red')} />;
