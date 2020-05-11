import React from 'react';
import PropTypes from 'prop-types';
import Popover from 'src/components/popover';

import styles from './event-tag-item.module.scss';

const EventTagItem = ({ color, time, remainder }) => (
  <li className={styles.li}>
    <Popover
      content={(toggle) => (
        <div className={styles.all}>
          <div>{color}</div>
          <div>{time}</div>
          <div>{remainder}</div>
          <button type="button" onClick={toggle}>close</button>
        </div>
      )}
    >
      <div>
        <span className={styles.color} style={color ? { background: color } : {}} />
        <span className={styles.time}>{time}</span>
        <span className={styles.reminder}>{remainder}</span>
      </div>
    </Popover>
  </li>
);

EventTagItem.propTypes = {
  color: PropTypes.string,
  time: PropTypes.string,
  remainder: PropTypes.string
};

EventTagItem.defaultProps = {
  color: '',
  time: '',
  remainder: ''
};

export default EventTagItem;
