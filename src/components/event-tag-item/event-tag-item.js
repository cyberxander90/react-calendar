import React from 'react';
import PropTypes from 'src/services/prop-types';
import moment from 'moment';
import Popover from 'src/components/popover';
import ColorTag from 'src/components/color-tag';
import { HH_MM } from 'src/services/dates';
import EventTagItemContent from './event-tag-item-content';
import styles from './event-tag-item.module.scss';


const EventTagItem = ({ date, event }) => {
  const { color, startDate, remainder } = event;
  return (
    <li className={styles.li}>
      <Popover
        displayClose={false}
        content={(toggle) => (
          <EventTagItemContent
            date={date}
            toggle={toggle}
            event={event}
          />
        )}
      >
        <>
          <ColorTag color={color} className={styles.color} />
          <span className={styles.reminder}>
            {`${moment(startDate).format(HH_MM)} `}
            <strong>{remainder}</strong>
          </span>
        </>
      </Popover>
    </li>
  );
};

EventTagItem.propTypes = {
  date: PropTypes.date.isRequired,
  event: PropTypes.event.isRequired
};

EventTagItem.defaultProps = { };

export default EventTagItem;
