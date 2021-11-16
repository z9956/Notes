## Table of Contents

1. [ESLint](#ESLint)
2. [Rollup](#Rollup)

## ESLint

- @typescript-eslint/no-unused-vars

  [no-unused-vars 对 TypeScript 支持差，会报告不正确的错误](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md)

  [[no-unused-vars] False positive enum](https://github.com/typescript-eslint/typescript-eslint/issues/2621)

```json5
{
	// note you must disable the base rule as it can report incorrect errors
	'no-unused-vars': 'off',
	'@typescript-eslint/no-unused-vars': ['error'],
}
```

**[⬆ back to top](#table-of-contents)**

## Rollup

- (!) Entry module "src/main.js" is implicitly using "default" export mode...

```javascript
 //rollup.config.js exports: "auto"
export default {
  input: 'src/main.js',
  output: [
    {
      dir: 'lib',
      format: 'cjs',
      exports: "auto",
    },
  ],
  ...
};
```

**[⬆ back to top](#table-of-contents)**
