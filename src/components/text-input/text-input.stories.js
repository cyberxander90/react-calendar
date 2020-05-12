import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import TextInput from './text-input';

export default {
  title: TextInput.name,
  decorators: [withKnobs]
};

export const Default = () => <TextInput />;
export const TextInputWithName = () => <TextInput name={text('Text', 'hello world')} />;
