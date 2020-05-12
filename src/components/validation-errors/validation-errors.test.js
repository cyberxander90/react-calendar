import React from 'react';
import { render } from '@testing-library/react';
import ValidationErrors from './validation-errors';

describe(`Test ${ValidationErrors.name} component`, () => {
  test('renders correctly', () => {
    const { getByText } = render(
      <ValidationErrors displayValidation errors={['wrong']} />
    );
    const element = getByText(/wrong/i);
    expect(element).toBeInTheDocument();
  });
});
