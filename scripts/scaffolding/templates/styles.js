const getTemplate = ({ paramCase }) => `.${paramCase} {
  font-size: 20px;
}
`;

const getFileName = ({ paramCase }) => `${paramCase}.module.scss`;

module.exports = {
  getFileName,
  getTemplate
};
