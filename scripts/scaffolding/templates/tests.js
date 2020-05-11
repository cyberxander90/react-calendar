const getTemplate = ({ paramCase, pascalCase }) => `import React from 'react';
import { render } from '@testing-library/react';
import ${pascalCase} from './${paramCase}';

describe(\`Test \${${pascalCase}.name} component\`, () => {
  test('renders correctly', () => {
    const { getByText } = render(<${pascalCase} />);
    const element = getByText(/${pascalCase}/i);
    expect(element).toBeInTheDocument();
  });
});
`;

const getFileName = ({ paramCase }) => `${paramCase}.test.js`;

module.exports = {
  getFileName,
  getTemplate
};
