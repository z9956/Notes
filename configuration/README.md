## Table of Contents

1. [babelrc](#babelrc)
2. [eslintrc](#eslintrc)
3. [prettier](#prettier)
4. [commitlint](#commitlint)

## babelrc

```
package.json

"babel-plugin-transform-remove-console": "^6.9.4",

"@babel/plugin-proposal-nullish-coalescing-operator": "^7.12.1",
"@babel/plugin-proposal-optional-chaining": "^7.12.7",

```

**[⬆ back to top](#table-of-contents)**

## eslintrc

```
package.json

"@typescript-eslint/parser": "^4.5.0",

"eslint-config-prettier": "^8.1.0",
"eslint-plugin-react-hooks": "^4.2.0",
```

**[⬆ back to top](#table-of-contents)**

## prettier

```
package.json

"devDependencies" {
    "husky": "^4.3.8",
    "prettier": "^2.2.1",
    "pretty-quick": "^3.1.0"
}

"husky": {
	"hooks": {
		"pre-commit": "pretty-quick --staged"
	    }
	},
```

**[⬆ back to top](#table-of-contents)**

## commitlint

```
package.json

"devDependencies" {
    "husky": "^4.3.8",
    "@commitlint/cli": "^11.0.0",
	"@commitlint/config-conventional": "^11.0.0",
}

"husky": {
	"hooks": {
		"commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
	    }
	},
```

**[⬆ back to top](#table-of-contents)**
