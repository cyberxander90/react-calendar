import React from 'react';
import PropTypes from 'prop-types';

import styles from './month-grid.module.scss';

const MonthGrid = ({ name }) => <div className={styles.monthGrid}>{name}</div>;

MonthGrid.propTypes = {
  name: PropTypes.string
};

MonthGrid.defaultProps = {
  name: MonthGrid.name
};

export default MonthGrid;
