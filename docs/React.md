## useImperativeHandle

- [官方文档](https://react.docschina.org/docs/hooks-reference.html#useimperativehandle)
- useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。在大多数情况下，应当避免使用 ref 这样的命令式代码。useImperativeHandle 应当与 forwardRef 一起使用

```tsx
//父组件
import { useRef } from 'react';
const curRef: MutableRefObject<{ getFiles: Function } | undefined> = useRef();
curRef.current?.getFiles(); //调用子组件方法或者获取数据

<MailFiles ref={curRef} />;

//子组件
import { useState, useImperativeHandle, forwardRef } from 'react';
const MailFiles = forwardRef((props, ref) => {
	const [files, setFiles] = useState<UploadFileType[]>([]);

	useImperativeHandle(ref, () => {
		return {
			getFiles: () => files,
		};
	});
});
```

**[⬆ back to top](#table-of-contents)**

## <span id='normalize'>normalize</span>

- 使用 create-react-app 创建的项目,app.css 下添加

```
@import-normalize; /* bring in normalize.css styles */
```

**[⬆ back to top](#table-of-contents)**

## <span id='setState-array'>setState 直接更新数组元素</span>

```jsx
this.setState({ [list[{ index }]]: item });
```

**[⬆ back to top](#table-of-contents)**

## Code-Splitting

- [React.lazy Suspense](https://zh-hans.reactjs.org/docs/code-splitting.html#reactlazy)

**[⬆ back to top](#table-of-contents)**

## <span id='Error-Boundaries'>错误边界 Error Boundaries</span>

- [官方文档](https://zh-hans.reactjs.org/docs/error-boundaries.html)

```jsx
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

## <span id='Moment'>替换 Moment ant design</span>

- [ant design](https://ant.design/docs/react/replace-moment-cn#%E4%BD%BF%E7%94%A8%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6)

```typescript jsx
//自定义组件 新建 src/components/DatePicker.tsx
import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/es/generate/dayjs';
import generatePicker from 'antd/es/date-picker/generatePicker';
import 'antd/es/date-picker/style/index';

const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);
export default DatePicker;

//导出自定义组件 src/components/index.tsx
export { default as DatePicker } from './DatePicker';
```

**[⬆ back to top](#table-of-contents)**

## React-18

- Property 'createRoot' does not exist on type 'typeof
  import("/home/zh9956/WebstormProjects/react-18-demo/node_modules/@types/react-dom/index")'.

```json5
//tsconfig.json
{
	compilerOptions: {
		types: ['react/next', 'react-dom/next'],
	},
}
```

**[⬆ back to top](#table-of-contents)**

## <span id='ForwardRefExoticComponent'>Property 'Search' does not exist on type 'ForwardRefExoticComponent>'</span>

- [source code](https://github.com/z9956/simple-ui/blob/main/components/input/index.ts)
- [DefinitelyTyped/issues/34757](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34757)

```typescript jsx
import Input from './Input';
import Search from './Search';
// const Input = React.forwardRef<HTMLInputElement, Props>((props, ref)...
// const Search = React.forwardRef<HTMLInputElement, Props>((props, ref)...

export type InputComponentType = typeof Input & {
	Search: typeof Search;
};

(Input as InputComponentType).Search = Search;

export default Input as InputComponentType;
```

**[⬆ back to top](#table-of-contents)**

## <span id='createPortal'>createPortal</span>

- [官方文档](https://zh-hans.reactjs.org/docs/portals.html)

```typescript jsx
ReactDOM.createPortal(child, container);
```

**[⬆ back to top](#table-of-contents)**

## <span id='Timeout'>Type 'Timeout' is not assignable to type 'number'</span>

- [stackoverflow](https://stackoverflow.com/questions/55550096/ts2322-type-timeout-is-not-assignable-to-type-number-when-running-unit-te)

```typescript jsx
const timer = useRef<number>();

timer.current = setTimeout(() => handler); //Type 'Timeout' is not assignable to type 'number'

//window.setTimeout
timer.current = window.setTimeout(() => handler);
```

**[⬆ back to top](#table-of-contents)**
