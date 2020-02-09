module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/strongly-recommended',
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  // add your custom rules here
  rules: {
    "space-before-function-paren": ["warn", {
      "anonymous": "always", "named": "never", "asyncArrow": "always"
    }]
  }
}
