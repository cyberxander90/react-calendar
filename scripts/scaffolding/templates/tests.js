const getTemplate = ({ paramCase, pascalCase }) => `import React from 'react';
import { render } from '@testing-library/react';
import ${pascalCase} from './${paramCase}';

describe(\`Test \${${pascalCase}.name} component\`, () => {
  test('renders correctly', () => {
    const { container } = render(<${pascalCase} />);
    expect(container).toBeTruthy();
  });
});
`;

const getFileName = ({ paramCase }) => `${paramCase}.test.js`;

module.exports = {
  getFileName,
  getTemplate
};
