module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
  ],
  webpackFinal: (config) => {
    function removeDocGen(obj) {
      if(!obj) {
        return;
      }
      
      if (typeof(obj) === 'object' && Array.isArray(obj.plugins)) {
        obj.plugins = obj.plugins.filter(plugin => {
          return !(Array.isArray(plugin) && plugin.some(item => typeof item == 'object' && item['DOC_GEN_COLLECTION_NAME']))
        })
      }

      if (Array.isArray(obj)) {
        obj.forEach(x => {
          removeDocGen(x);
        });
      } else if (typeof obj === 'object') {
        Object.keys(obj).forEach(key => removeDocGen(obj[key]))
      }
    }

    removeDocGen(config.module)

    return config;
  },
};
