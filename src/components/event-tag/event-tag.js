import React from 'react';
import PropTypes from 'prop-types';
import { withResizeDetector } from 'react-resize-detector';
import EventTagItem from 'src/components/event-tag-item';
import Popover from 'src/components/popover';

import styles from './event-tag.module.scss';

const ITEM_HEIGHT = 30;

const getMaxItemsToDisplay = (height) => Math.floor((height - 30) / ITEM_HEIGHT);

const EventTag = ({
  id, events, height, displayAll
}) => {
  const maxItemsToDisplay = height && !displayAll ? getMaxItemsToDisplay(height) : events.length;
  const eventsToDisplay = events.slice(0, maxItemsToDisplay);
  const missingEvents = events.slice(maxItemsToDisplay).length;

  return (
    <ul>
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
            content={(toggle) => (
              <div className={styles.all}>
                <EventTag
                  id={id}
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
  id: PropTypes.string.isRequired,
  events: PropTypes.arrayOf().isRequired,
  height: PropTypes.number.isRequired,
  displayAll: PropTypes.bool
};

EventTag.defaultProps = {
  displayAll: false
};

export default withResizeDetector(EventTag);
