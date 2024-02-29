import DebounceComponent from '../../src/components/debounce';

## 防抖：执行最后一次

## examples

查看控制台输出
<DebounceComponent/>

## [source code](https://github.com/z9956/Notes/blob/main/src/utils/debounce.js)

```javascript
const debounce = (fun, time = 300) => {
	let timer;

	return (...args) => {
		if (timer) {
			clearTimeout(timer);
		}

		timer = setTimeout(() => {
			fun(args);
		}, time);
	};
};
```
