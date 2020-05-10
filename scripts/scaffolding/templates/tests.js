const getTemplate = ({ paramCase, pascalCase }) => `import React from 'react';
import { render } from '@testing-library/react';
import ${pascalCase} from './${paramCase}';

describe(\`Test \${${pascalCase}.name} component\`, () => {
  test('renders correctly without params', () => {
    const { getByText } = render(<${pascalCase} />);
    const element = getByText(/${pascalCase}/i);
    expect(element).toBeInTheDocument();
  });

  test('renders correctly with params', () => {
    const { getByText } = render(<${pascalCase} name="hello world" />);
    const element = getByText(/hello world/i);
    expect(element).toBeInTheDocument();
  });
});
`;

const getFileName = ({ paramCase }) => `${paramCase}.test.js`;

module.exports = {
  getFileName,
  getTemplate
};
