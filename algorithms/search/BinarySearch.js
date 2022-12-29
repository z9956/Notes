/*
 * 二分查找
 * https://zh.wikipedia.org/zh-cn/%E4%BA%8C%E5%88%86%E6%90%9C%E5%B0%8B%E6%BC%94%E7%AE%97%E6%B3%95
 * */
function binarySearch(list, value) {
	let start = 0;
	let end = list.length - 1;

	while (start <= end) {
		const mid = Math.floor((start + end) / 2);
		if (list[mid] === value) return mid;

		if (list[mid] < value) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}

	return -1;
}

export default binarySearch;
