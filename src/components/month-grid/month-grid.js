import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { getGridDates, getWeekDates } from 'src/services/grid-service';

import styles from './month-grid.module.scss';

const MonthGrid = ({
  dateStr, startOnMonday, cellCmp, cellHeaderCmp
}) => {
  const date = moment(dateStr);
  const grid = getGridDates({ date, startOnMonday });
  const CellCmp = cellCmp || (({ id }) => <div>{id}</div>);
  const CellHeaderCmp = cellHeaderCmp || (({ day }) => <div>{day}</div>);

  const mapHeaderCell = (day) => <CellHeaderCmp key={day} day={day} />;
  let tabIndex = 0;
  const mapCell = (item) => {
    const id = item.format('YYYY-MM-DD');
    const day = item.date();
    const isCurrentMonth = item.month() === date.month();
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

  const Header = () => (
    <div className={styles.header}>
      {getWeekDates({ startOnMonday }).map(mapHeaderCell)}
    </div>
  );
  const Body = () => (
    <div className={styles.body}>
      {grid.map((row, i) => (
        // eslint-disable-next-line react/no-array-index-key
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
  dateStr: PropTypes.string,
  startOnMonday: PropTypes.bool,
  cellCmp: PropTypes.func,
  cellHeaderCmp: PropTypes.func
};

MonthGrid.defaultProps = {
  dateStr: undefined,
  startOnMonday: false,
  cellCmp: null,
  cellHeaderCmp: null
};

export default MonthGrid;
