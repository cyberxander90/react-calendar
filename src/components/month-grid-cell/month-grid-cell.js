import React from 'react';
import PropTypes from 'prop-types';
import Popover from 'src/components/popover';
import EventForm from 'src/components/event-form';

import styles from './month-grid-cell.module.scss';

const MonthGridCell = ({
  id, day, isCurrentMonth, tabIndex
}) => (
  <div className={`${styles.monthGridCell} ${isCurrentMonth ? '' : styles.disabled}`}>
    <Popover
      tabIndex={tabIndex}
      childrenClassName={styles.monthGridCell}
      content={(toggle) => (
        <EventForm
          text="hello world"
          onSubmit={() => toggle()}
        />
      )}
    >
      {day}
    </Popover>
    <div>{id}</div>
  </div>
);

MonthGridCell.propTypes = {
  id: PropTypes.string.isRequired,
  day: PropTypes.number.isRequired,
  isCurrentMonth: PropTypes.bool.isRequired,
  tabIndex: PropTypes.number.isRequired,
};

MonthGridCell.defaultProps = { };

export default MonthGridCell;
