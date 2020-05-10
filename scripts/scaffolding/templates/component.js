const getTemplate = ({ paramCase, pascalCase, camelCase }) => `import React from 'react';
import PropTypes from 'prop-types';

import styles from './${paramCase}.module.scss';

const ${pascalCase} = ({ name }) => <div className={styles.${camelCase}}>{name}</div>;

${pascalCase}.propTypes = {
  name: PropTypes.string
};

${pascalCase}.defaultProps = {
  name: ${pascalCase}.name
};

export default ${pascalCase};
`;

const getFileName = ({ paramCase }) => `${paramCase}.js`;

module.exports = {
  getFileName,
  getTemplate
};
