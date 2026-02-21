// prettier.config.mjs
import xmlPlugin from 'prettier-plugin-xml';

export default {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'lf',

  // Enable XML formatting
  plugins: [xmlPlugin],
  xmlWhitespaceSensitivity: 'ignore', // keeps nice indentation in XML
};
