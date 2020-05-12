import React from 'react';
import { render } from '@testing-library/react';
import PickColor from './pick-color';

describe(`Test ${PickColor.name} component`, () => {
  test('renders correctly', () => {
    const { container } = render(<PickColor />);
    expect(container).toBeTruthy();
  });
});
