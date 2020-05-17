import React from 'react';
import PropTypes from 'src/services/prop-types';
import moment from 'moment';
import { BackIcon, NextIcon } from 'src/components/icons';
import Tooltip from 'src/components/tooltip';

import styles from './calendar.module.scss';

const Calendar = ({ GridCmp, date, updateDate }) => {
  const mDate = moment(date);

  const nextMonth = () => updateDate(moment(mDate.subtract(1, 'months')));
  const prevMonth = () => updateDate(moment(mDate.add(1, 'months')));
  const goToday = () => updateDate(moment(), true);

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <Tooltip
          text="Previous month"
          inline
          className={styles.arrow}
          onClick={nextMonth}
        >
          <BackIcon />
        </Tooltip>
        <span className={styles.date}>{ mDate.format('MMMM YYYY') }</span>
        <Tooltip
          text="Next month"
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
      { GridCmp && <GridCmp dateStr={mDate} />}
    </div>
  );
};

Calendar.propTypes = {
  GridCmp: PropTypes.func,
  date: PropTypes.date,
  updateDate: PropTypes.func
};

Calendar.defaultProps = {
  GridCmp: null,
  date: '',
  updateDate: () => {}
};

export default Calendar;
