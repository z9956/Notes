import ScrollFun from '../../src/components/scrollFun';

## examples

查看控制台输出
<ScrollFun/>

## source code

```typescript jsx
const scrollFunc = (event) => {
	let e = event || window.event;
	if (e.wheelDelta) {
		if (e.wheelDelta > 0) {
			//当鼠标滚轮向上滚动时
			console.log('鼠标滚轮向上滚动');
		}
		if (e.wheelDelta < 0) {
			//当鼠标滚轮向下滚动时
			console.log('鼠标滚轮向下滚动');
		}
	} else if (e.detail) {
		if (e.detail < 0) {
			//当鼠标滚轮向上滚动时
			console.log('鼠标滚轮向上滚动');
		}
		if (e.detail > 0) {
			//当鼠标滚轮向下滚动时
			console.log('鼠标滚轮向下滚动');
		}
	}
};

useEffect(() => {
	window.addEventListener('wheel', scrollFun);

	return () => {
		window.removeEventListener('wheel', scrollFun);
	};
}, []);
```
