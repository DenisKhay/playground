module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
       {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
           modules: true,
           localIdentName: '[name]__[local]--[hash:base64:5]',
        }
      }
    },
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
};
