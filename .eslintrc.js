module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    'import/prefer-default-export': ['off'],
    'jsx-a11y/href-no-hash': ['off'],
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        comments: 80,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'object-curly-spacing': ['warn', 'always'],
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'warn',
    'react/prop-types': ['error', { ignore: ['children'] }],
    'space-in-parens': ['warn', 'never'],
  },
  ignorePatterns: ['**/dist/**/*'],
};
