/* eslint-disable tsdoc/syntax */

/**
 * @type {import('svgo').Config}
 */
module.exports = {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
  ],
};
