import React from 'react';
import Tooltip from './tooltip';

export default {
  title: Tooltip.name
};

export const Default = () => (
  <Tooltip text="tooltip info" inline>
    <span>Over me!</span>
  </Tooltip>
);
