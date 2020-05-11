import React from 'react';
import Popover from './popover';

export default {
  title: Popover.name
};

export const Default = () => (
  <Popover
    tabIndex={0}
    childrenClassName="my-class"
    content={(toggle) => (
      <div>
        content
        <button type="button" onClick={toggle}>Close</button>
      </div>
    )}
  >
    Click Me to open Modal
  </Popover>
);
