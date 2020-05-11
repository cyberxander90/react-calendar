import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './event-form.module.scss';

const EventForm = ({ text, onSubmit }) => {
  const [remainder, setRemainder] = useState(text);

  const handleChange = ({ target: { value } }) => {
    setRemainder(value);
  };

  return (
    <form className={styles.eventForm}>
      <input type="text" placeholder="Add a reminder" value={remainder} onChange={handleChange} />
      <button type="button" onClick={() => onSubmit({ remainder })}>
        Save
      </button>
    </form>
  );
};

EventForm.propTypes = {
  text: PropTypes.string.isRequired,
  onSubmit: PropTypes.func
};

EventForm.defaultProps = {
  onSubmit: () => {}
};

export default EventForm;
