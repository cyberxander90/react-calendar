/* eslint-disable import/prefer-default-export */
import PropTypes from 'prop-types';
import moment from 'moment';

PropTypes.date = PropTypes.oneOfType([
  PropTypes.string,
  Date,
  PropTypes.instanceOf(moment)
]);

export default PropTypes;
