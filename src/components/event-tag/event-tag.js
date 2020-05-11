import React from 'react';
import PropTypes from 'prop-types';
import { withResizeDetector } from 'react-resize-detector';
import EventTagItem from 'src/components/event-tag-item';
import Popover from 'src/components/popover';
import moment from 'moment';

import styles from './event-tag.module.scss';

const getTime = (dateTime) => moment(dateTime).format('hh:mm a');

const ITEM_HEIGHT = 30;

const getMaxItemsToDisplay = (height) => Math.floor((height - 30) / ITEM_HEIGHT);

const EventTag = ({ events, height, displayAll }) => {
  const maxItemsToDisplay = height && !displayAll ? getMaxItemsToDisplay(height) : events.length;
  const eventsToDisplay = events.slice(0, maxItemsToDisplay);
  const missingEvents = events.slice(maxItemsToDisplay).length;

  return (
    <ul>
      {eventsToDisplay.map((event) => (
        <EventTagItem
          key={event.id}
          color={event.color}
          remainder={event.remainder}
          time={getTime(event.dateTime)}
        />
      ))}
      { missingEvents > 0 && (
        <li>
          <Popover
            content={(toggle) => (
              <div className={styles.all}>
                <EventTag
                  displayAll
                  events={events}
                />
                <button type="button" onClick={toggle}>close</button>
              </div>
            )}
          >
            <div>
              {missingEvents}
              more
            </div>
          </Popover>
        </li>
      ) }
    </ul>
  );
};

EventTag.propTypes = {
  events: PropTypes.arrayOf().isRequired,
  height: PropTypes.number.isRequired,
  displayAll: PropTypes.bool
};

EventTag.defaultProps = {
  displayAll: false
};

export default withResizeDetector(EventTag);
