module.exports = {
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/html-indent': ['error', 'tab']
  },
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  extends: [
    'plugin:vue/essential'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/html-indent': ['error', 'tab']
  }
}