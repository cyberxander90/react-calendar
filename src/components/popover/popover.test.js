import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Popover from './popover';

describe(`Test ${Popover.name} component`, () => {
  test('renders correctly', () => {
    const { getByText } = render(
      <Popover
        content={(toggle) => (
          <div>
            <button onClick={toggle} type="button">Dismiss</button>
            my content
          </div>
        )}
      >
        Click Me to open Modal
      </Popover>
    );
    const element = getByText(/Click Me to open Modal/i);
    expect(element).toBeInTheDocument();
    fireEvent.click(element);
    expect(screen.getByText(/my content/i)).toBeVisible();
    fireEvent.click(screen.getByText(/Dismiss/i));
  });
});
