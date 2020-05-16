/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { getDaysOfWeek } from 'src/services/grid-service';

import styles from './month-grid.module.scss';

// TODO: move to a service
const nameOfWeekDay = [
  ['Sunday', 'Sun'],
  ['Monday', 'Mon'],
  ['Tuesday', 'Tue'],
  ['Wednesday', 'Wed'],
  ['Thursday', 'Thu'],
  ['Friday', 'Fri'],
  ['Saturday', 'Sat']
];
const geNameOfWeekDay = (day) => nameOfWeekDay[day];

const MonthGrid = ({
  startOnMonday, cellCmp, cellHeaderCmp, grid, monthValue
}) => {
  const CellHeaderCmp = cellHeaderCmp || (({ day }) => {
    const [fullName, shortName] = geNameOfWeekDay(day);
    return (
      <div className={styles.dayweek}>
        <span className={styles.large}>{fullName}</span>
        <span className={styles.short}>{shortName}</span>
      </div>
    );
  });
  const Header = () => (
    <div className={styles.header}>
      {getDaysOfWeek({ startOnMonday }).map((day) => (
        <CellHeaderCmp key={day} day={day} />
      ))}
    </div>
  );

  const CellCmp = cellCmp || (({ id }) => <div className={styles.daymonth}>{id}</div>);
  let tabIndex = 0;
  const mapCell = (item) => {
    const dateStr = item.format('YYYY-MM-DD');
    const isCurrentMonth = item.month() === monthValue;
    tabIndex += 1;
    return (
      <CellCmp
        key={dateStr}
        id={dateStr}
        day={item.date()}
        isCurrentMonth={isCurrentMonth}
        isWeekend={[0, 6].includes(item.day())}
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
    <div className={styles.grid}>
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
  cellHeaderCmp: PropTypes.objectOf()
};

MonthGrid.defaultProps = {
  startOnMonday: false,
  cellCmp: null,
  cellHeaderCmp: null
};

export default MonthGrid;
