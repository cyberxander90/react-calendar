import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import ValidationErrors from './validation-errors';

export default {
  title: ValidationErrors.name,
  decorators: [withKnobs]
};

export const Default = () => (
  <ValidationErrors
    displayValidation={boolean('Display Validation', true)}
    errors={['error-1', 'error-2']}
  />
);
