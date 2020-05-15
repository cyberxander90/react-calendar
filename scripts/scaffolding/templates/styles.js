const getTemplate = ({ paramCase }) => `.${paramCase} {
  
}
`;

const getFileName = ({ paramCase }) => `${paramCase}.module.scss`;

module.exports = {
  getFileName,
  getTemplate
};
