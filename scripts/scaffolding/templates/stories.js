const getTemplate = ({ paramCase, pascalCase }) => `import React from 'react';
import ${pascalCase} from './${paramCase}';

export default {
  title: ${pascalCase}.name
};

export const Default = () => <${pascalCase} />;
export const ${pascalCase}WithName = () => <${pascalCase} name="hello world" />;
`;

const getFileName = ({ paramCase }) => `${paramCase}.stories.js`;

module.exports = {
  getFileName,
  getTemplate
};
