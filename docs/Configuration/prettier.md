## 安装依赖

```shell
npm install --save-dev husky lint-staged
npx husky install
npm pkg set scripts.prepare="husky install"
npx husky add .husky/pre-commit "npx lint-staged"
```

## .prettierrc

```json5
{
	trailingComma: 'all',
	semi: true,
	printWidth: 80,
	tabWidth: 2,
	useTabs: true,
	singleQuote: true,
	jsxBracketSameLine: true,
}
```

## .lintstagedrc.json

```json5
{
	'*.{js,jsx,ts,tsx,mjs}': ['eslint --fix'],
	'*': ['prettier --ignore-unknown --write'],
}
```
