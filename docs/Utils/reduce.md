## 数组对象去重

```javascript
const reduceArray = (repeatList = [], key = 'id') => {
	let obj = {};

	return repeatList.reduce((acc, cur) => {
		if (obj[cur[key]] ? '' : (obj[cur[key]] = true)) acc.push(cur);
		return acc;
	}, []);
};
```

## examples
```javascript
reduceArray([{ id: 1 }, { id: 2 }, { id: 1 }, { id: 3 }], 'id'); // [{ id: 1 }, { id: 2 }, { id: 3 }]
```