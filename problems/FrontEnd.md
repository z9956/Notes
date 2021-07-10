## Table of Contents

1. [ESLint](#ESLint) 
2. [React](#React)
3. [React-18](#React-18)
4. [Rollup](#Rollup)

## ESLint

* @typescript-eslint/no-unused-vars

    [no-unused-vars 对 TypeScript 支持差，会报告不正确的错误](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md)

    [[no-unused-vars] False positive enum ](https://github.com/typescript-eslint/typescript-eslint/issues/2621)

```
{
  // note you must disable the base rule as it can report incorrect errors
  "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": ["error"]
}
```

**[⬆ back to top](#table-of-contents)**

## React

* normalize.css(使用 create-react-app 创建的项目)

    app.css 下添加

```
@import-normalize; /* bring in normalize.css styles */
```

* setState 更新数组元素

```
this.setState({ [list[{ index }]]: item });
```

* Code-Splitting

    [React.lazy Suspense](https://zh-hans.reactjs.org/docs/code-splitting.html#reactlazy)


* 错误边界（Error Boundaries）

    [官方文档](https://zh-hans.reactjs.org/docs/error-boundaries.html)


```javascript
class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// 更新 state 使下一次渲染能够显示降级后的 UI
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// 你同样可以将错误日志上报给服务器
		logErrorToMyService(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// 你可以自定义降级后的 UI 并渲染
			return <h1>Something went wrong.</h1>;
		}

		return this.props.children;
	}
}
```

**[⬆ back to top](#table-of-contents)**

## React-18

* Property 'createRoot' does not exist on type 'typeof import("/home/zh9956/WebstormProjects/react-18-demo/node_modules/@types/react-dom/index")'.

```json5
 //tsconfig.json
{
  "compilerOptions": {
    "types": ["react/next", "react-dom/next"]
  }
}
```

**[⬆ back to top](#table-of-contents)**

## Rollup

* (!) Entry module "src/main.js" is implicitly using "default" export mode...

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