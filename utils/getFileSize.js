/**
 * 获取类型
 * @param { number } size
 * */
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