import React from 'react';
import { render } from '@testing-library/react';
import Tooltip from './tooltip';

describe(`Test ${Tooltip.name} component`, () => {
  test('renders correctly', () => {
    const { getByText } = render(
      <Tooltip text="tooltip info" inline>
        <span>Over me</span>
      </Tooltip>
    );
    expect(getByText('Over me')).toBeTruthy();
  });
});
