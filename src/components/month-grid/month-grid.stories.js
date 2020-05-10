import React from 'react';
import MonthGrid from './month-grid';

export default {
  title: MonthGrid.name
};

export const Default = () => <MonthGrid />;
export const MonthGridWithName = () => <MonthGrid name="hello world" />;
