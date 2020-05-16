import React from 'react';
import PropTypes from 'prop-types';
import { withResizeDetector } from 'react-resize-detector';
import EventTagItem from 'src/components/event-tag-item';
import Popover from 'src/components/popover';

import styles from './event-tag.module.scss';

const getMaxItemsToDisplay = (height, itemHeight) => Math.floor((height - 20) / itemHeight);

const EventTag = ({
  id, events, height, displayAll, itemHeight
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
          id={id}
          key={event.id}
          event={event}
        />
      ))}
      { missingEvents > 0 && (
        <li>
          <Popover
            content={() => (
              <EventTag
                id={id}
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
  id: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(PropTypes.object),
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
