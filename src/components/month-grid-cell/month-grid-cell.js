import React from 'react';
import PropTypes from 'prop-types';
import Popover from 'src/components/popover';
import EventForm from 'src/components/event-form';
import EventTag from 'src/components/event-tag';

import styles from './month-grid-cell.module.scss';

const MonthGridCell = ({
  id, day, isCurrentMonth, tabIndex, events, onCreateEvent, onDeleteAllEvents
}) => (
  <div className={`${styles.cell} ${isCurrentMonth ? '' : styles.disabled}`}>
    <div className={styles.header}>
      <div>{day}</div>
      <Popover
        childrenClassName={styles.actions}
        tabIndex={tabIndex}
        content={(toggle) => (
          <EventForm
            id={id}
            onSubmit={(event) => {
              onCreateEvent(event);
              toggle();
            }}
          />
        )}
      >
        <div>+</div>
      </Popover>
      <div role="button" onClick={onDeleteAllEvents} onKeyDown={() => {}} tabIndex={0}>-</div>
    </div>
    <EventTag id={id} events={events} />
  </div>
);

MonthGridCell.propTypes = {
  id: PropTypes.string.isRequired,
  day: PropTypes.number.isRequired,
  isCurrentMonth: PropTypes.bool.isRequired,
  tabIndex: PropTypes.number.isRequired,
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCreateEvent: PropTypes.func,
  onDeleteAllEvents: PropTypes.func
};

MonthGridCell.defaultProps = {
  onCreateEvent: () => {},
  onDeleteAllEvents: () => {}
};

export default MonthGridCell;
