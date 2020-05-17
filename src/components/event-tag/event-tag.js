import React from 'react';
import PropTypes from 'src/services/prop-types';
import { withResizeDetector } from 'react-resize-detector';
import EventTagItem from 'src/components/event-tag-item';
import Popover from 'src/components/popover';

import styles from './event-tag.module.scss';

const getMaxItemsToDisplay = (height, itemHeight) => Math.floor((height - 20) / itemHeight);

const EventTag = ({
  date, events, height, displayAll, itemHeight
}) => {
  let maxItemsToDisplay = height && !displayAll
    ? getMaxItemsToDisplay(height, itemHeight)
    : events.length;
  if (maxItemsToDisplay + 1 === events.length) {
    maxItemsToDisplay = events.length;
  }
  const eventsToDisplay = events.slice(0, maxItemsToDisplay);
  const missingEvents = events.slice(maxItemsToDisplay).length;

  return (
    <ul className={styles.list}>
      {eventsToDisplay.map((event) => (
        <EventTagItem
          date={date}
          key={event.id}
          event={event}
        />
      ))}
      { missingEvents > 0 && (
        <li>
          <Popover
            content={() => (
              <EventTag
                date={date}
                displayAll
                events={events}
              />
            )}
          >
            {`${missingEvents} more`}
          </Popover>
        </li>
      ) }
    </ul>
  );
};

EventTag.propTypes = {
  date: PropTypes.date.isRequired,
  events: PropTypes.arrayOf(PropTypes.event),
  height: PropTypes.number,
  displayAll: PropTypes.bool,
  itemHeight: PropTypes.number
};

EventTag.defaultProps = {
  displayAll: false,
  itemHeight: 30,
  height: 100,
  events: []
};

export default withResizeDetector(EventTag);
