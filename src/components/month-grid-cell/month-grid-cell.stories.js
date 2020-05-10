import React from 'react';
import MonthGridCell from './month-grid-cell';

export default {
  title: MonthGridCell.name
};

export const Default = () => <MonthGridCell />;
export const MonthGridCellWithName = () => <MonthGridCell name="hello world" />;
