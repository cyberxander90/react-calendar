/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { getWeekDates } from 'src/services/grid-service';

import styles from './month-grid.module.scss';

const MonthGrid = ({
  startOnMonday, cellCmp, cellHeaderCmp, grid, monthValue
}) => {
  const CellCmp = cellCmp || (({ id }) => <div>{id}</div>);
  const CellHeaderCmp = cellHeaderCmp || (({ day }) => <div>{day}</div>);

  const mapHeaderCell = (day) => <CellHeaderCmp key={day} day={day} />;
  const Header = () => (
    <div className={styles.header}>
      {getWeekDates({ startOnMonday }).map(mapHeaderCell)}
    </div>
  );

  let tabIndex = 0;
  const mapCell = (item) => {
    const id = item.format('YYYY-MM-DD');
    const day = item.date();
    const isCurrentMonth = item.month() === monthValue;
    tabIndex += 1;

    return (
      <CellCmp
        key={id}
        id={id}
        day={day}
        isCurrentMonth={isCurrentMonth}
        tabIndex={tabIndex}
      />
    );
  };
  const Body = () => (
    <div className={styles.body}>
      {grid.map((row, i) => (
        <div key={i} className={styles.row}>
          {row.map(mapCell)}
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.monthGrid}>
      <Header />
      <Body />
    </div>
  );
};

MonthGrid.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.object).isRequired,
  startOnMonday: PropTypes.bool,
  monthValue: PropTypes.number.isRequired,
  cellCmp: PropTypes.func,
  cellHeaderCmp: PropTypes.func
};

MonthGrid.defaultProps = {
  startOnMonday: false,
  cellCmp: null,
  cellHeaderCmp: null
};

export default MonthGrid;
