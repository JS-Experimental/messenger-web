const path = require('path');

module.exports = {
  extends: ['react-app', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error'],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.tsx',
          '.js',
          '.jsx',
          '.ts'
        ]
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'comma-dangle': [
      'error',
      {
        functions: 'never'
      }
    ],
    'linebreak-style': 0,
    'react/forbid-prop-types': 0,
    'no-param-reassign': [
      'error',
      {
        props: false
      }
    ],
    'react/jsx-uses-react': 'off',
    'react/prop-types': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'react/jsx-props-no-spreading': 'off',
    'no-undef': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false,
      packageDir: path.join(__dirname, './')
    }],
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off'
  },
  overrides: [
    {
      files: [
        '**/*.stories.*'
      ],
      rules: {
        'import/no-anonymous-default-export': 'off'
      }
    }
  ]
};
