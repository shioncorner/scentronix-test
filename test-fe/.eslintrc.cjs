/* eslint-disable tsdoc/syntax */

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:security/recommended-legacy',
    'plugin:storybook/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', 'next', '.eslintrc.cjs', '*.config.js', '!.storybook'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/ban-types': [
          'error',
          {
            extendDefaults: true,
            types: {
              '{}': false,
            },
          },
        ],
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'default',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'enum',
            format: ['UPPER_CASE'],
          },
          {
            selector: 'parameter',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'property',
            format: null,
            leadingUnderscore: 'allow',
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
          },
        ],
        '@typescript-eslint/no-misused-promises': [
          2,
          {
            checksVoidReturn: {
              attributes: false,
            },
          },
        ],
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      },
    },
    {
      files: [
        '*.d.ts',
        '*stories.*',
        'error.tsx',
        'layout.tsx',
        'loading.tsx',
        'middleware.ts',
        'next.config.mjs',
        'not-found.tsx',
        'page.tsx',
        'tailwind.config.ts',
        'template.tsx',
        './src/app/api/**/*.ts',
        './.storybook/main.ts',
        './.storybook/preview.ts',
        '**/[id].tsx',
      ],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'filename-rules',
    'import',
    'jsdoc',
    'jsx-a11y',
    'react',
    'react-hooks',
    'react-refresh',
    'security',
    'storybook',
    'tsdoc',
  ],
  rules: {
    'filename-rules/match': ['error', { '.ts': 'kebab-case', '.tsx': 'kebab-case' }],
    'import/no-extraneous-dependencies': 'error',
    'import/no-default-export': 'off',
    'jsdoc/check-indentation': 'warn',
    'jsdoc/check-syntax': 'warn',
    'jsdoc/no-blank-blocks': 'warn',
    'jsdoc/require-asterisk-prefix': 'warn',
    'jsdoc/require-jsdoc': [
      'warn',
      {
        publicOnly: true,
        require: {},
        enableFixer: true,
      },
    ],
    'jsdoc/require-description': 'warn',
    'jsdoc/require-param': ['warn', { checkDestructuredRoots: false }],
    'jsdoc/require-throws': 'error',
    'jsdoc/require-hyphen-before-param-description': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/tag-lines': ['warn', 'never', { startLines: 1 }],
    'jsdoc/sort-tags': 'warn',
    'react/button-has-type': 'error',
    'react/destructuring-assignment': ['error', 'always', { destructureInSignature: 'always' }],
    'react/display-name': 'warn',
    'react/function-component-definition': ['warn', { namedComponents: 'arrow-function' }],
    'react/jsx-curly-brace-presence': 'warn',
    'react/jsx-fragments': 'error',
    'react/jsx-max-depth': ['error', { max: 10 }],
    'react/jsx-no-leaked-render': 'error',
    'react/jsx-no-script-url': 'error',
    'react/jsx-pascal-case': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unstable-nested-components': 'error',
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'off',
    'react/self-closing-comp': 'warn',
    'react/jsx-sort-props': 'warn',
    'tailwindcss/no-custom-classname': 'off',
    'tsdoc/syntax': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: true,
    },
    react: {
      version: 'detect',
    },
  },
};
