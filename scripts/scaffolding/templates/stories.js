const getTemplate = ({ paramCase, pascalCase }) => `import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import ${pascalCase} from './${paramCase}';

export default {
  title: ${pascalCase}.name,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <${pascalCase} />
  );
};
`;

const getFileName = ({ paramCase }) => `${paramCase}.stories.js`;

module.exports = {
  getFileName,
  getTemplate
};
