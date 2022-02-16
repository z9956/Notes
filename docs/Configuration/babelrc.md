## .babelrc

```json5
{
	presets: ['react-app'],
	plugins: [
		'@babel/plugin-proposal-optional-chaining',
		'@babel/plugin-proposal-nullish-coalescing-operator',
	],
	env: {
		production: {
			plugins: [['transform-remove-console', { exclude: ['error'] }]],
		},
	},
}
```