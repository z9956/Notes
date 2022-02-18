import GetFileSizeComponent from '../../src/components/getFileSize';

## 获取文件大小

```javascript
const getFileSize = (size) => {
	let fileSize = size;
	let count = 0;
	let units = ['B', 'KB', 'MB', 'GB', 'TB'];
	while (fileSize > 1024) {
		fileSize = fileSize / 1024;
		count++;
	}

	return units[count] ? `${fileSize.toFixed(2)}${units[count]}` : size;
};
```

## examples
<GetFileSizeComponent/>    