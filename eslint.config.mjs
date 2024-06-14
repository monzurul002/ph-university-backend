// @ts-check
import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'no-undef': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
    },
  },
  {
    ignores: ['**/.env/', '**/node_modules/', '**/dist/'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
  },
];

// we can use this way also

// export default tseslint.config(
//   eslint.configs.recommended,
//   ...tseslint.configs.recommended,
//   {
//     rules: {
//         "no-unused-vars": "error",
//         "no-undef": "error"
//     }
// }
// );
