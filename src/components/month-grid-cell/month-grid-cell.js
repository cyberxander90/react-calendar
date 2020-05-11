import React from 'react';
import PropTypes from 'prop-types';
import Popover from 'src/components/popover';
import EventForm from 'src/components/event-form';
import EventTag from 'src/components/event-tag';

import styles from './month-grid-cell.module.scss';

const data = [
  {
    id: 1, color: 'red', remainder: 'Text 1 q debe funcionar', dateTime: '2020-05-10 09-30'
  },
  {
    id: 2, color: 'green', remainder: 'Text 2', dateTime: '2020-05-10 10-30'
  },
  {
    id: 3, color: 'blue', remainder: 'Text 3', dateTime: '2020-05-10 11-00'
  },
];

const MonthGridCell = ({
  day, isCurrentMonth, tabIndex
}) => (
  // receive id
  <div className={`${isCurrentMonth ? '' : styles.disabled}`}>
    <Popover
      tabIndex={tabIndex}
      content={(toggle) => (
        <EventForm
          text="hello world"
          onSubmit={() => toggle()}
        />
      )}
    >
      <div>{day}</div>
    </Popover>
    <EventTag events={data} />
  </div>
);

MonthGridCell.propTypes = {
  // id: PropTypes.string.isRequired,
  day: PropTypes.number.isRequired,
  isCurrentMonth: PropTypes.bool.isRequired,
  tabIndex: PropTypes.number.isRequired,
};

MonthGridCell.defaultProps = { };

export default MonthGridCell;
