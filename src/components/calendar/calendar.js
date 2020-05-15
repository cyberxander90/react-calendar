import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { BackIcon, NextIcon } from 'src/images';

import styles from './calendar.module.scss';


const Calendar = ({ gridCmp: Grid }) => {
  const [date, setDate] = useState(moment());

  return (
    <div className={styles.calendar}>
      <div>
        <BackIcon onClick={() => setDate(moment(date.subtract(1, 'months')))} />
        { date.format('YYYY-MM-DD') }
        <NextIcon onClick={() => setDate(moment(date.add(1, 'months')))} />
        <button onClick={() => setDate(moment())} type="button">Today</button>
      </div>
      { Grid && <Grid dateStr={date.format('YYYY-MM-DD')} />}
    </div>
  );
};

Calendar.propTypes = {
  gridCmp: PropTypes.node,
};

Calendar.defaultProps = {
  gridCmp: null
};

export default Calendar;
