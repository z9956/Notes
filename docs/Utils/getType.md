import GetTypeComponent from '../../src/components/getType';

## 获取数据类型

```javascript
const getType = (value) => {
	return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
};
```

## examples
<GetTypeComponent/>    