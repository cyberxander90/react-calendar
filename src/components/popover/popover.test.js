import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Popover from './popover';

describe(`Test ${Popover.name} component`, () => {
  test('renders correctly', async () => {
    const { getByText } = render(
      <Popover
        tabIndex={0}
        childrenClassName="my-class"
        content={(toggle) => (
          <div>
            <span>my content</span>
            <button type="button" onClick={toggle}>Close</button>
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
    fireEvent.click(screen.getByText(/Close/i));
    expect(screen.getByText(/my content/i)).not.toBeVisible();
  });
});
