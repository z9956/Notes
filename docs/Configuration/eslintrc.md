## .eslintrc

```json5
{
	extends: 'prettier',
	env: {
		es6: true,
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	rules: {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				args: 'none',
				ignoreRestSiblings: true,
			},
		],
		//		"no-use-before-define": "off",
		//		"@typescript-eslint/no-use-before-define": ["error"]
	},
}
```
