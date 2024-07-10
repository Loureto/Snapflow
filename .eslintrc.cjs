module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  settings: { react: { version: 'detect' } },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-refresh', 'react-hooks', '@typescript-eslint', 'import-helpers'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'no-redeclare': 'off',
    'import/export': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react-refresh/only-export-components': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          '/^@radix-ui/',
          'module',
          '/^@providers/',
          '/^@store/',
          '/^@components/',
          '/^@utils/',
          [('parent', 'sibling', 'index')]
        ],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ]
  }
}
