## 安装依赖

```shell
npm i -D husky prettier pretty-quick
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
npx pretty-quick --staged
#or
npx --no-install pretty-quick --staged
#or
yarn pretty-quick --staged
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
