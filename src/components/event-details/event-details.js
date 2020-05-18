import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  TextIcon, ClockIcon, CalendarIcon, LocationIcon
} from 'src/components/icons';
import { YYYY_MM_DD, HH_MM } from 'src/services/dates';

import styles from './event-details.module.scss';
import Weather from '../weather';
import ColorTag from '../color-tag';

const EventDetails = ({
  remainder, color, startDate, endDate, city
}) => {
  const mStartDate = moment(startDate);
  const mEndDate = moment(endDate);
  return (
    <ul className={styles.list}>
      <li>
        <span className={styles.label}>
          <TextIcon />
        </span>
        <span className={styles.value}>
          <ColorTag color={color} className={styles.color} />
          {remainder}
        </span>
      </li>
      <li>
        <span className={styles.label}>
          <ClockIcon />
        </span>
        <span className={styles.value}>
          {`${mStartDate.format(HH_MM)} - ${mEndDate.format(HH_MM)}`}
        </span>
      </li>
      <li>
        <span className={styles.label}>
          <CalendarIcon />
        </span>
        <span className={styles.value}>
          {mStartDate.format(YYYY_MM_DD)}
        </span>
      </li>

      <li>
        <span className={styles.label}>
          <LocationIcon />
        </span>
        <span className={styles.value}>
          {city || <span className={styles.disabled}>None</span>}
        </span>
      </li>
      { city && startDate && (
        <li>
          <Weather city={city} date={mStartDate} />
        </li>
      ) }
    </ul>
  );
};

EventDetails.propTypes = {
  remainder: PropTypes.string,
  color: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  city: PropTypes.string,
};

EventDetails.defaultProps = {
  remainder: '',
  color: '',
  startDate: '',
  endDate: '',
  city: '',
};

export default EventDetails;
