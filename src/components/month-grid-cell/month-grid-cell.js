import React from 'react';
import PropTypes from 'src/services/prop-types';
import Popover from 'src/components/popover';
import EventForm from 'src/components/event-form';
import EventTag from 'src/components/event-tag';
import { AddIcon, TrashIcon } from 'src/components/icons';
import Tooltip from 'src/components/tooltip';
import classNames from 'classnames';

import styles from './month-grid-cell.module.scss';

const MonthGridCell = ({
  date, day, isCurrentMonth, isWeekend, tabIndex, events, onCreateEvent, onDeleteAllEvents
}) => (
  <div className={classNames(styles.cell, { [styles.weekend]: isWeekend })}>
    <div className={classNames({ [styles.disabled]: !isCurrentMonth })}>

      <div className={styles.header}>
        <div className={styles.day}>{day}</div>
        <div className={styles.actions}>
          <Popover
            tabIndex={tabIndex}
            content={(toggle) => (
              <EventForm
                id={date}
                date={date}
                onSubmit={(event) => {
                  onCreateEvent(event);
                  toggle();
                }}
                onCancel={toggle}
              />
            )}
          >
            <Tooltip
              text="Add event"
              className={`${styles.action} action-icon`}
            >
              <AddIcon />
            </Tooltip>
          </Popover>

          {events.length > 0 && (
            <Tooltip
              text="Delete all"
              className={`${styles.action} action-icon`}
              onClick={onDeleteAllEvents}
            >
              <TrashIcon />
            </Tooltip>
          )}
        </div>
      </div>

      <EventTag id={date} events={events} />
    </div>
  </div>
);

MonthGridCell.propTypes = {
  date: PropTypes.date.isRequired,
  day: PropTypes.number,
  isCurrentMonth: PropTypes.bool,
  isWeekend: PropTypes.bool,
  tabIndex: PropTypes.number,
  events: PropTypes.arrayOf(PropTypes.event),
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
