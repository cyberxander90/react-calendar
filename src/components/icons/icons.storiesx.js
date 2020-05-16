/* eslint-disable react/jsx-key */
/* eslint-disable import/namespace */
import React from 'react';
import * as All from '.';

export default {
  title: 'Icons',
};

export const Default = () => (
  <ul style={{ padding: 10 }}>
    {
      Object.keys(All).map((i) => {
        const Icon = All[i];
        return (
          <li>
            {i}
            <Icon />
          </li>
        );
      })
    }
  </ul>
);
