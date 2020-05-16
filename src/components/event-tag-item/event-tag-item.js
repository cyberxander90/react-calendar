/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import Popover from 'src/components/popover';
import {
  CloseIcon, TrashIcon, BackIcon, EditIcon
} from 'src/components/icons';
import { editAsyncEvent, deleteAsyncEvent } from 'src/redux/actions/events.actions';
import styles from './event-tag-item.module.scss';
import EventForm from '../event-form';
import Tooltip from '../tooltip';
import EventDetails from '../event-details';
import ColorTag from '../color-tag';

const deleteEvent = (dispatch, event) => () => {
  if (confirm('Do you want to delete the event?')) {
    dispatch(deleteAsyncEvent(event));
  }
};

const EventTagItemContent = ({ id, event, toggle }) => {
  const [view, setView] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
      <div className={styles.actions}>
        {view ? (
          <Tooltip
            text="back"
            onClick={() => setView(0)}
            inline
            className="action-icon"
          >
            <BackIcon data-keep-popover />
          </Tooltip>
        ) : (
          <Tooltip
            text="edit"
            onClick={() => setView(1)}
            inline
            className="action-icon"
          >
            <EditIcon data-keep-popover />
          </Tooltip>
        )}

        <Tooltip
          text="delete event"
          onClick={deleteEvent(dispatch, event)}
          inline
          className="action-icon"
        >
          <TrashIcon data-keep-popover />
        </Tooltip>

        <Tooltip
          text="close"
          onClick={toggle}
          inline
          className="action-icon"
        >
          <CloseIcon data-keep-popover />
        </Tooltip>
      </div>

      {view ? (
        <div>
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
        <EventDetails {...event} />
      )}
    </div>
  );
};

const EventTagItem = ({ id, event }) => {
  const { color, startDate, remainder } = event;
  return (
    <li className={styles.li}>
      <Popover
        displayClose={false}
        content={(toggle) => (
          <EventTagItemContent id={id} toggle={toggle} event={event} />
        )}
      >
        <>
          <ColorTag color={color} className={styles.color} />
          <span className={styles.reminder}>
            {`${moment(startDate).format('HH:mm')} `}
            <strong>{remainder}</strong>
          </span>
        </>
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
