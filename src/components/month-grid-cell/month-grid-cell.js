import React from 'react';
import PropTypes from 'src/services/prop-types';
import Popover from 'src/components/popover';
import EventForm from 'src/components/event-form';
import EventTag from 'src/components/event-tag';
import { AddIcon, TrashIcon } from 'src/components/icons';
import Tooltip from 'src/components/tooltip';
import classNames from 'classnames';
import moment from 'moment';

import styles from './month-grid-cell.module.scss';

const sortEvents = (events) => events.sort((a, b) => moment(a.startDate).diff(moment(b.startDate)));

const MonthGridCell = ({
  date, day, isCurrentMonth, isToday, isWeekend, tabIndex,
  events: eventsParams, onCreateEvent, onDeleteAllEvents
}) => {
  const events = sortEvents(eventsParams);
  return (
    <div className={classNames(styles.cell, { [styles.weekend]: isWeekend })}>
      <div className={classNames({ [styles.disabled]: !isCurrentMonth })}>

        <div className={styles.header}>
          <div className={classNames(styles.day, { [styles.today]: isToday })}>{day}</div>
          <div className={styles.actions}>
            <Popover
              tabIndex={tabIndex}
              content={(toggle) => (
                <EventForm
                  date={date}
                  onSubmit={(event) => {
                    toggle();
                    onCreateEvent(event);
                  }}
                  onCancel={toggle}
                />
              )}
            >
              <Tooltip
                text="Add event"
                className={classNames(styles.action, 'action-icon')}
              >
                <AddIcon />
              </Tooltip>
            </Popover>

            {events.length > 0 && (
              <Tooltip
                text="Delete all"
                className={classNames(styles.action, 'action-icon')}
                onClick={onDeleteAllEvents}
              >
                <TrashIcon />
              </Tooltip>
            )}
          </div>
        </div>

        <EventTag date={date} events={events} />
      </div>
    </div>
  );
};

MonthGridCell.propTypes = {
  date: PropTypes.date.isRequired,
  day: PropTypes.number,
  isCurrentMonth: PropTypes.bool,
  isToday: PropTypes.bool,
  isWeekend: PropTypes.bool,
  tabIndex: PropTypes.number,
  events: PropTypes.arrayOf(PropTypes.event),
  onCreateEvent: PropTypes.func,
  onDeleteAllEvents: PropTypes.func
};

MonthGridCell.defaultProps = {
  day: 0,
  isCurrentMonth: false,
  isToday: false,
  isWeekend: false,
  tabIndex: 0,
  events: [],
  onCreateEvent: () => {},
  onDeleteAllEvents: () => {}
};

export default MonthGridCell;
