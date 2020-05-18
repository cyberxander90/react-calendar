/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import PropTypes from 'src/services/prop-types';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import {
  CloseIcon, TrashIcon, BackIcon, EditIcon
} from 'src/components/icons';
import { editAsyncEvent, deleteAsyncEvent } from 'src/redux/actions/events';
import EventForm from 'src/components/event-form';
import Tooltip from 'src/components/tooltip';
import EventDetails from 'src/components/event-details';
import styles from './event-tag-item.module.scss';

const deleteEvent = (dispatch, event) => () => {
  if (confirm('Do you want to delete the event?')) {
    dispatch(deleteAsyncEvent(event));
  }
};

const onSubmit = (dispatch, setView) => (value) => {
  dispatch(editAsyncEvent({
    id: event.id,
    ...value
  }));
  setView(0);
};

const EventTagItemContent = ({ date, event, toggle }) => {
  const [view, setView] = useState(0);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.actions}>
        {view ? (
          <Tooltip
            text="Back"
            onClick={() => setView(0)}
            inline
            className="action-icon"
          >
            <BackIcon data-keep-popover />
          </Tooltip>
        ) : (
          <Tooltip
            text="Edit"
            onClick={() => setView(1)}
            inline
            className="action-icon"
          >
            <EditIcon data-keep-popover />
          </Tooltip>
        )}

        <Tooltip
          text="Delete event"
          onClick={deleteEvent(dispatch, event)}
          inline
          className="action-icon"
        >
          <TrashIcon data-keep-popover />
        </Tooltip>

        <Tooltip
          text="Close"
          onClick={toggle}
          inline
          className="action-icon"
        >
          <CloseIcon data-keep-popover />
        </Tooltip>
      </div>

      {view ? (
        <EventForm
          date={date}
          remainder={event.remainder}
          color={event.color}
          city={event.city}
          startMinute={moment(event.startDate).format('mm')}
          startHour={moment(event.startDate).format('HH')}
          endMinute={moment(event.endDate).format('mm')}
          endHour={moment(event.endDate).format('HH')}
          onSubmit={onSubmit(dispatch, setView)}
          onCancel={() => setView(0)}
        />
      ) : (
        <EventDetails {...event} />
      )}
    </div>
  );
};

EventTagItemContent.propTypes = {
  date: PropTypes.date.isRequired,
  event: PropTypes.event.isRequired,
  toggle: PropTypes.func
};

EventTagItemContent.defaultProps = {
  toggle: () => {}
};

export default EventTagItemContent;
