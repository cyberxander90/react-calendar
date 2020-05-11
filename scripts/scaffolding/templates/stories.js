const getTemplate = ({ paramCase, pascalCase }) => `import React from 'react';
import ${pascalCase} from './${paramCase}';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: ${pascalCase}.name,
  decorators: [withKnobs]
};

export const Default = () => <${pascalCase} />;
export const ${pascalCase}WithName = () => <${pascalCase} name={text('Text', 'hello world')} />;
`;

const getFileName = ({ paramCase }) => `${paramCase}.stories.js`;

module.exports = {
  getFileName,
  getTemplate
};
