module.exports = {
<<<<<<< HEAD
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: [ '.vue' ]
  },

  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    'plugin:@typescript-eslint/recommended',

    // Uncomment any of the lines below to choose desired strictness,
    // but leave only one uncommented!
    // See https://eslint.vuejs.org/rules/#available-rules
    // "plugin:vue/vue3-essential", // Priority A: Essential (Error Prevention)
    // 'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
    'plugin:vue/vue3-recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

    "airbnb-base",
  ],

  plugins: [
    // required to apply rules which need type information
    '@typescript-eslint',

    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files
    // required to lint *.vue files
    "vue",
  ],

  globals: {
    ga: "readonly", // Google Analytics
    cordova: "readonly",
    __statics: "readonly",
    __QUASAR_SSR__: "readonly",
    __QUASAR_SSR_SERVER__: "readonly",
    __QUASAR_SSR_CLIENT__: "readonly",
    __QUASAR_SSR_PWA__: "readonly",
    process: "readonly",
    Capacitor: "readonly",
    chrome: "readonly",
  },

  // add your custom rules here
  rules: {
    "linebreak-style": 'off',
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    
    'semi': [2, 'never'],
    "vue/multi-word-component-names": ["error", {
      "ignores": ["Index"]
    }],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    
    "vue/require-default-prop": ["off"],

    "no-underscore-dangle": "off",
    "lines-between-class-members": 'off',
    "no-param-reassign": "off",
    "no-void": "off",
    "no-nested-ternary": "off",
    "max-classes-per-file": "off",
    "no-console": "off",
    "@typescript-eslint/no-var-requires": "off",

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    "import/first": "off",
    "import/named": "error",
    "import/namespace": "error",
    "import/default": "error",
    "import/export": "error",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",

    "prefer-promise-reject-errors": "off",

    // allow debugger during development only
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
};
=======
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    './.eslintrc-auto-import.json',
    'plugin:react/recommended',
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      // tsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'linebreak-style': 'off',
    'no-return-assign': 'off',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'max-classes-per-file': 'off',
    'lines-between-class-members': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-shadow': ['error'],
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-undef': 'off',
    semi: [2, 'never'],

    'jsx-quotes': 1,
    'react/display-name': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-boolean-value': 1,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-curly-spacing': 1,
    'react/jsx-handler-names': 1,
    'react/jsx-indent-props': 1,
    'react/jsx-indent': [1, 2],
    'react/jsx-key': 1,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-bind': 0,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-literals': 0,
    'react/jsx-pascal-case': 1,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
  },
}
>>>>>>> 9f133389b5ae55479fcc065b5a6053c66bc97f3d
