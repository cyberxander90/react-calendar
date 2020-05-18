import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Button from './button';

export default {
  title: Button.name,
  decorators: [withKnobs]
};

export const Default = () => (
  <Button>Default</Button>
);

export const Primary = () => (
  <Button primary>Primary</Button>
);
