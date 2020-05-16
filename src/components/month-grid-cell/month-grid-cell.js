import React from 'react';
import PropTypes from 'prop-types';
import Popover from 'src/components/popover';
import EventForm from 'src/components/event-form';
import EventTag from 'src/components/event-tag';
import { AddIcon, TrashIcon } from 'src/components/icons';
import Tooltip from 'src/components/tooltip';

import styles from './month-grid-cell.module.scss';

const MonthGridCell = ({
  id, day, isCurrentMonth, isWeekend, tabIndex, events, onCreateEvent, onDeleteAllEvents
}) => (
  <div className={`${styles.cell} ${isWeekend ? styles.weekend : ''}`}>
    <div className={`${isCurrentMonth ? '' : styles.disabled}`}>

      <div className={styles.header}>
        <div className={styles.day}>{day}</div>
        <div className={styles.actions}>
          <Popover
            childrenClassName={styles.actions22}
            tabIndex={tabIndex}
            content={(toggle) => (
              <EventForm
                id={id}
                onSubmit={(event) => {
                  onCreateEvent(event);
                  toggle();
                }}
                onCancel={toggle}
              />
            )}
          >
            <Tooltip text="add event" className={`${styles.action} action-icon`}>
              <AddIcon />
            </Tooltip>
          </Popover>

          {events.length > 0 && (
            <Tooltip text="delete all" className={`${styles.action} action-icon`} onClick={onDeleteAllEvents}>
              <TrashIcon />
            </Tooltip>
          )}
        </div>
      </div>

      <EventTag id={id} events={events} />
    </div>
  </div>
);

MonthGridCell.propTypes = {
  id: PropTypes.string.isRequired,
  day: PropTypes.number,
  isCurrentMonth: PropTypes.bool,
  isWeekend: PropTypes.bool,
  tabIndex: PropTypes.number,
  events: PropTypes.arrayOf(PropTypes.shape),
  onCreateEvent: PropTypes.func,
  onDeleteAllEvents: PropTypes.func
};

MonthGridCell.defaultProps = {
  day: 0,
  isCurrentMonth: false,
  isWeekend: false,
  tabIndex: 0,
  events: [],
  onCreateEvent: () => {},
  onDeleteAllEvents: () => {}
};

export default MonthGridCell;
