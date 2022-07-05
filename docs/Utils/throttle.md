import ThrottleComponent from '../../src/components/throttle';

## 节流：限制函数一段时间内只能执行一次 (执行第一次)

## examples

查看控制台输出
<ThrottleComponent/>

## source code

```javascript
const throttle = (fun, time = 300) => {
	let timer;

	return (...args) => {
		if (!timer) {
			timer = setTimeout(() => {
				timer = null;
				fun(args);
			}, time);
		}
	};
};
```
