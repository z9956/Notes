/*
 * 线性搜索
 * https://zh.wikipedia.org/zh-cn/%E7%BA%BF%E6%80%A7%E6%90%9C%E7%B4%A2
 * */

function linearSearch(arr, seekElement) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === seekElement) return i;
	}

	return -1;
}

export default linearSearch;
