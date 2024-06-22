/* eslint-disable tsdoc/syntax */

/**
 * @type {import('prettier').Config}
 */
module.exports = {
  endOfLine: 'auto',
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^(~actions|~app|~auth|~components|~constants|~context|~data|~env|~history|~hooks|~lib|~pages|~prisma|~schema|~store|~translation|~types)',
    '^[./]',
    '^(~styles)',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  jsxSingleQuote: true,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
    'prettier-plugin-sort-json',
  ],
  printWidth: 100,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
};
