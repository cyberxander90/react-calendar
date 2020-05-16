import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { BackIcon, NextIcon } from 'src/components/icons';
import Tooltip from '../tooltip';

import styles from './calendar.module.scss';

const Calendar = ({ gridCmp: Grid }) => {
  const [date, setDate] = useState(moment());
  const nextMonth = () => setDate(moment(date.subtract(1, 'months')));
  const prevMonth = () => setDate(moment(date.add(1, 'months')));
  const goToday = () => setDate(moment());

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <Tooltip
          text="previous month"
          inline
          className={styles.arrow}
          onClick={nextMonth}
        >
          <BackIcon />
        </Tooltip>
        <span className={styles.date}>{ date.format('MMMM YYYY') }</span>
        <Tooltip
          text="next month"
          inline
          className={styles.arrow}
          onClick={prevMonth}
        >
          <NextIcon />
        </Tooltip>

        <Tooltip text="Go to the current month" inline>
          <button type="button" onClick={goToday} className={styles.today}>
            Today
          </button>
        </Tooltip>
      </div>
      { Grid && <Grid dateStr={date.format('YYYY-MM-DD')} />}
    </div>
  );
};

Calendar.propTypes = {
  gridCmp: PropTypes.func,
};

Calendar.defaultProps = {
  gridCmp: null
};

export default Calendar;
