const getTemplate = ({ paramCase, pascalCase, camelCase }) => `import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import styles from './${paramCase}.module.scss';

const ${pascalCase} = ({ name }) => {
  return (
    <div className={styles.${camelCase}}>{name}</div>
  );
};

${pascalCase}.propTypes = {
  name: PropTypes.string
};

${pascalCase}.defaultProps = {
  name: ''
};

export default ${pascalCase};
`;

const getFileName = ({ paramCase }) => `${paramCase}.js`;

module.exports = {
  getFileName,
  getTemplate
};
