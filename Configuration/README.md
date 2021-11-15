## Table of Contents

1. [babelrc](#babelrc)
2. [eslintrc](#eslintrc)
3. [prettier](#prettier)
4. [commitlint](#commitlint)

## babelrc

```json5
//package.json

{
	devDependencies: {
		'babel-plugin-transform-remove-console': '^6.9.4',

		'@babel/plugin-proposal-nullish-coalescing-operator': '^7.12.1',
		'@babel/plugin-proposal-optional-chaining': '^7.12.7',
	},
}
```

**[⬆ back to top](#table-of-contents)**

## eslintrc

```json5
//package.json

{
	dependencies: {
		'@typescript-eslint/parser': '^4.5.0',

		'eslint-config-prettier': '^8.1.0',
		'eslint-plugin-react-hooks': '^4.2.0',
	},
}
```

**[⬆ back to top](#table-of-contents)**

## prettier

```json5
//husky v4

//package.json
{
	devDependencies: {
		husky: '^4.3.8',
		prettier: '^2.2.1',
		'pretty-quick': '^3.1.0',
	},

	husky: {
		hooks: {
			'pre-commit': 'pretty-quick --staged',
		},
	},
}
```

```json5
//husky v6

//npx husky-init && npm
//npm set-script prepare "husky install"
//npx husky add .husky/pre-commit 'yarn pretty-quick --staged'

//or

//package.json
{
	scripts: {
		prepare: 'husky install',
	},
	devDependencies: {
		husky: '^6.0.0',
		prettier: '^2.2.1',
		'pretty-quick': '^3.1.0',
	},
}

//.husky/pre-commit
//npx --no-install pretty-quick --staged
//or
//yarn pretty-quick --staged
```

**[⬆ back to top](#table-of-contents)**

## commitlint

```json5
//husky v4

//package.json

{
	devDependencies: {
		husky: '^4.3.8',
		'@commitlint/cli': '^11.0.0',
		'@commitlint/config-conventional': '^11.0.0',
	},

	husky: {
		hooks: {
			'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
		},
	},
}
```

```json5
//husky v6
//
//npx husky-init && npm
//npm set-script prepare "husky install"
//npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
//
//or

//package.json
{
	scripts: {
		prepare: 'husky install',
	},
	devDependencies: {
		husky: '^6.0.0',
		'@commitlint/cli': '^11.0.0',
		'@commitlint/config-conventional': '^11.0.0',
	},
}

//.husky/commit-msg
//npx --no-install commitlint --edit $1
//or
//yarn commitlint --edit $1
```

**[⬆ back to top](#table-of-contents)**
