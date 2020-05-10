/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const changeCase = require('change-case');

const getComponentName = () => {
  const args = process.argv.slice(2);
  if (args.length > 0) {
    return args[0];
  }

  console.log(chalk.red('Component name required'));
  throw new Error();
};

const createScaffolding = () => {
  const componentName = getComponentName();
  const cases = {
    paramCase: changeCase.paramCase(componentName),
    pascalCase: changeCase.pascalCase(componentName),
    camelCase: changeCase.camelCase(componentName)
  };

  try {
    const BASE_PATH = '../..';
    const folderName = path.resolve(__dirname, `${BASE_PATH}/src/components/${cases.paramCase}`);

    console.log(chalk.yellow(`Creating folder for component ${componentName}...`));
    fs.mkdirSync(folderName, { recursive: true });

    [
      ['component', './templates/component'],
      ['index', './templates/index'],
      ['stories', './templates/stories'],
      ['styles', './templates/styles'],
      ['tests', './templates/tests']
    ].forEach(([type, modPath]) => {
      const mod = require(modPath);
      const fileName = mod.getFileName(cases);
      const filePath = `${folderName}/${fileName}`;
      const template = mod.getTemplate(cases);

      console.log(chalk.yellow(`Creating ${type} ${fileName}`));
      fs.writeFileSync(`${filePath}`, template);
    });
  } catch (err) {
    console.log(chalk.red(`Error to create the component ${componentName}`, err));
  }
};

createScaffolding();
