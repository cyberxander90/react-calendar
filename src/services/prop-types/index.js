import PropTypes from 'prop-types';
import moment from 'moment';

PropTypes.date = PropTypes.oneOfType([
  PropTypes.string,
  Date,
  PropTypes.instanceOf(moment)
]);

PropTypes.event = PropTypes.shape({
  id: PropTypes.string,
  color: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  city: PropTypes.string,
  remainder: PropTypes.string
});

PropTypes.children = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
]);

export default PropTypes;
