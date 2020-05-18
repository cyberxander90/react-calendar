import React from 'react';
import Popover from './popover';

export default {
  title: Popover.name
};

export const Default = () => (
  <Popover
    content={() => (
      <div>
        content
      </div>
    )}
  >
    Click Me to open Modal
  </Popover>
);

export const WithCloseIcon = () => (
  <Popover
    displayClose={false}
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
