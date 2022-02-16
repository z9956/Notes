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

## husky

- Command not found

```shell
# ~/.huskyrc
# This loads nvm.sh and sets the correct PATH before running hook
export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
