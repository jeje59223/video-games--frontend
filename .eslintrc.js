// eslint-disable-next-line no-undef
module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'settings': {
        'react': {
            'version': 'detect'
        }
    },
    'plugins': [
        'react',
        '@typescript-eslint'
    ],
    'rules': {
        'quotes': [ 'error', 'single' ],
        'semi': [ 2, 'always' ],
        'comma-dangle': [ 'error', 'never' ],
        'array-bracket-spacing': [ 'error', 'always' ],
        'object-curly-spacing': [ 'error', 'always' ],
        '@typescript-eslint/ban-types': [
            'error',
            {
                'extendDefaults': true,
                'types': {
                    '{}': false
                }
            }
        ]
    }
};
