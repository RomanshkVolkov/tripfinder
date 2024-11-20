const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: 's3.amazonaws.com',
      },
    ],
  },
  webpack: (config) => {
    // HOTFIX: https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250
    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
      }),
    );
    config.resolve.modules.push(__dirname);

    return config;
  },
};
