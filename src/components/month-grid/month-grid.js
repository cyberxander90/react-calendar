/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { geNameOfWeekDay, getDaysOfWeek, YYYY_MM_DD } from 'src/services/dates';
import moment from 'moment';

import styles from './month-grid.module.scss';

const MonthGrid = ({
  gridDates, startOnMonday, monthNumber, cellHeaderCmp, cellBodyCmp
}) => {
  // the header of the grid
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

  // the body of the grid
  const CellBodyCmp = cellBodyCmp || (({ id }) => <div className={styles.daymonth}>{id}</div>);
  const today = moment();
  const mapCell = (mDate, i) => (
    <CellBodyCmp
      key={mDate.format(YYYY_MM_DD)}
      id={mDate.format(YYYY_MM_DD)}
      date={mDate}
      day={mDate.date()}
      isToday={today.isSame(mDate, 'day')}
      isCurrentMonth={mDate.month() === monthNumber}
      isWeekend={[0, 6].includes(mDate.day())}
      tabIndex={i}
    />
  );
  const Body = () => (
    <div className={styles.body}>
      {gridDates.map((row, i) => (
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
  gridDates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.date)),
  startOnMonday: PropTypes.bool,
  monthNumber: PropTypes.number,
  cellBodyCmp: PropTypes.func,
  cellHeaderCmp: PropTypes.func
};

MonthGrid.defaultProps = {
  gridDates: [],
  startOnMonday: false,
  monthNumber: 0,
  cellBodyCmp: null,
  cellHeaderCmp: null
};

export default MonthGrid;
