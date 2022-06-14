## React 应用启动的 3 种模式

在当前稳定版`react@17.0.2`源码中, 有 3 种启动方式. 先引出官网上对于[这 3 种模式的介绍](https://zh-hans.reactjs.org/docs/concurrent-mode-adoption.html#why-so-many-modes), 其基本说明如下:

1. `legacy` 模式: `ReactDOM.render(<App />, rootNode)`. 这是当前 React app 使用的方式. 这个模式可能不支持[这些新功能(concurrent 支持的所有功能)](https://zh-hans.reactjs.org/docs/concurrent-mode-patterns.html#the-three-steps).

   ```js
   // LegacyRoot
   ReactDOM.render(<App />, document.getElementById('root'), (dom) => {}); // 支持callback回调, 参数是一个dom对象
   ```

2. [Blocking 模式](https://zh-hans.reactjs.org/docs/concurrent-mode-adoption.html#migration-step-blocking-mode): `ReactDOM.createBlockingRoot(rootNode).render(<App />)`. 目前正在实验中, 它仅提供了 `concurrent` 模式的小部分功能, 作为迁移到 `concurrent` 模式的第一个步骤.

   ```js
   // BlockingRoot
   // 1. 创建ReactDOMRoot对象
   const reactDOMBlockingRoot = ReactDOM.createBlockingRoot(
   	document.getElementById('root'),
   );
   // 2. 调用render
   reactDOMBlockingRoot.render(<App />); // 不支持回调
   ```

3. [Concurrent 模式](https://zh-hans.reactjs.org/docs/concurrent-mode-adoption.html#enabling-concurrent-mode): `ReactDOM.createRoot(rootNode).render(<App />)`. 目前在实验中, 未来稳定之后，打算作为 React 的默认开发模式. 这个模式开启了所有的新功能.

   ```js
   // ConcurrentRoot
   // 1. 创建ReactDOMRoot对象
   const reactDOMRoot = ReactDOM.createRoot(document.getElementById('root'));
   // 2. 调用render
   reactDOMRoot.render(<App />); // 不支持回调
   ```

## 14 种类型 HookType

```typescript
export type HookType =
	| 'useState'
	| 'useReducer'
	| 'useContext'
	| 'useRef'
	| 'useEffect'
	| 'useLayoutEffect'
	| 'useCallback'
	| 'useMemo'
	| 'useImperativeHandle'
	| 'useDebugValue'
	| 'useDeferredValue'
	| 'useTransition'
	| 'useMutableSource'
	| 'useOpaqueIdentifier';
```

## 参考

[图解 React 源码系列](https://github.com/7kms/react-illustration-series)
