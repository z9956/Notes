import IsJSONComponent from '../../src/components/isJSON';

## 判断是否为JSON

```javascript
const isJSON = (str) => {
	if (typeof str == 'string') {
		try {
			let obj = JSON.parse(str);
			return !!(typeof obj == 'object' && obj);
		} catch (e) {
			console.log('error：' + str + '!!!' + e);
			return false;
		}
	}
	console.log('It is not a string!');
};
```

## examples
<IsJSONComponent/>    