import stylexPlugin from '@stylexjs/eslint-plugin';
import tseslint, { parser as typescriptParser } from 'typescript-eslint';
import storybookPlugin from 'eslint-plugin-storybook';
import importPlugin from 'eslint-plugin-import';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const typescriptPlugin = tseslint.config({
  files: ['**/*.ts', '**/*.tsx'],
  extends: [...tseslint.configs.recommended],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        caughtErrors: 'none',
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/consistent-type-imports': ['error'],
    'no-undef': 'off',
  },
});

export default [
  {
    ignores: ['postcss.config.*', 'storybook-static/', 'dist/'],
  },
  {
    plugins: {
      '@stylexjs': stylexPlugin,
      ...typescriptPlugin,
      ...storybookPlugin.configs['flat/recommended'],
      import: importPlugin,
    },

    languageOptions: {
      parser: typescriptParser,
      parserOpts: {
        ecmaVersion: 12,
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      'import/ignore': ['node_modules'],
      react: {
        version: 'detect',
      },
    },
    rules: {
      '@stylexjs/valid-styles': 'error',
      '@stylexjs/no-unused': 'error',
      '@stylexjs/no-legacy-contextual-styles': 'error',
      '@stylexjs/sort-keys': ['error', { order: 'recess' }],
    },
  },
];
