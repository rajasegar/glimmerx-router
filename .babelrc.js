module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      '@glimmerx/babel-plugin-component-templates',
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      '@babel/plugin-proposal-class-properties',
    ],
    presets: ['@babel/preset-env'],
  };
};
