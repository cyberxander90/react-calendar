import React from 'react';
import { render } from '@testing-library/react';
import Toast from './toast';

describe(`Test ${Toast.name} component`, () => {
  test('renders correctly', () => {
    const { getByText } = render(<Toast toasts={[{ text: 'test 1', id: '1' }, { text: 'test 2', id: '2' }]} />);
    expect(getByText('test 1')).toBeInTheDocument();
    expect(getByText('test 2')).toBeInTheDocument();
  });
});
