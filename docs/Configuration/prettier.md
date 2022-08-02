## 安装依赖

```shell
npm i -D husky prettier lint-staged
```

## 配置

```shell
npx husky install
```

```shell
npm set-script prepare "husky install"
```

## .husky/pre-commit

```shell
yarn lint-staged
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
