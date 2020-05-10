import React from 'react';
import PropTypes from 'prop-types';

import styles from './month-grid-cell.module.scss';

const MonthGridCell = ({ name }) => <div className={styles.monthGridCell}>{name}</div>;

MonthGridCell.propTypes = {
  name: PropTypes.string
};

MonthGridCell.defaultProps = {
  name: MonthGridCell.name
};

export default MonthGridCell;
