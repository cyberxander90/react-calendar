const getTemplate = ({ paramCase }) => `export { default } from './${paramCase}';
`;

const getFileName = () => 'index.js';

module.exports = {
  getFileName,
  getTemplate
};
