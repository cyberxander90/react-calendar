/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import Popover from 'src/components/popover';
import { editAsyncEvent, deleteAsyncEvent } from 'src/redux/actions/events.actions';

import styles from './event-tag-item.module.scss';
import EventForm from '../event-form';

const deleteEvent = (dispatch, event) => () => {
  if (confirm('Do you want to delete the event?')) {
    dispatch(deleteAsyncEvent(event));
  }
};

const A = ({ id, event, toggle }) => {
  const [view, setView] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={toggle}>close</button>
      <button type="button" onClick={deleteEvent(dispatch, event)}>delete</button>
      {view ? (
        <div>
          <button type="button" onClick={() => setView(0)}>cancelar</button>
          <EventForm
            id={id}
            remainder={event.remainder}
            color={event.color}
            startMinute={moment(event.startDate).format('mm')}
            startHour={moment(event.startDate).format('HH')}
            endMinute={moment(event.endDate).format('mm')}
            endHour={moment(event.endDate).format('HH')}
            city={event.city}
            onSubmit={(value) => dispatch(editAsyncEvent({ id: event.id, ...value }))}
            onCancel={() => setView(0)}
          />
        </div>
      ) : (
        <div className={styles.all}>
          <button type="button" onClick={() => setView(1)}>edit</button>
          <div>{event.color}</div>
          <div>{event.startDate}</div>
          <div>{event.endDate}</div>
          <div>{event.remainder}</div>
        </div>
      )}

    </div>
  );
};

const EventTagItem = ({ id, event }) => {
  const { color, time, remainder } = event;
  return (
    <li className={styles.li}>
      <Popover
        content={(toggle) => (
          <A id={id} toggle={toggle} event={event} />
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
};

EventTagItem.propTypes = {
  id: PropTypes.string.isRequired,
  event: PropTypes.shape.isRequired
};

EventTagItem.defaultProps = { };

export default EventTagItem;
