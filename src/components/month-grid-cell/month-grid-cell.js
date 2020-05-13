import React from 'react';
import PropTypes from 'prop-types';
import Popover from 'src/components/popover';
import EventForm from 'src/components/event-form';
import EventTag from 'src/components/event-tag';

import styles from './month-grid-cell.module.scss';

const MonthGridCell = ({
  day, isCurrentMonth, tabIndex, events, onCreateEvent
}) => (
  <div className={`${isCurrentMonth ? '' : styles.disabled}`}>
    <Popover
      tabIndex={tabIndex}
      content={(toggle) => (
        <EventForm
          text="hello world"
          onSubmit={(event) => {
            console.log(event);
            onCreateEvent(event);
            toggle();
          }}
        />
      )}
    >
      <div>{day}</div>
    </Popover>
    <EventTag events={events} />
  </div>
);

MonthGridCell.propTypes = {
  day: PropTypes.number.isRequired,
  isCurrentMonth: PropTypes.bool.isRequired,
  tabIndex: PropTypes.number.isRequired,
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCreateEvent: PropTypes.func
};

MonthGridCell.defaultProps = {
  onCreateEvent: () => {}
};

export default MonthGridCell;
