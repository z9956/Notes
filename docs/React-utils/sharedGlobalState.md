import SharedGlobalState from '../../src/components/sharedGlobalState/index.jsx';

## examples

查看控制台输出
<SharedGlobalState/>

## [source code](https://github.com/z9956/Notes/blob/main/src/components/sharedGlobalState)

```jsx
export default function useCounter() {
	const [count, setCount] = useState(0);
	const decrement = () => setCount(count - 1);
	const increment = () => setCount(count + 1);
	const invert = () => setCount(count * -1);
	const reset = () => setCount(0);
	return {
		count,
		decrement,
		increment,
		invert,
		reset,
	};
}
//...
```
