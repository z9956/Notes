/*
 * 冒泡排序
 * https://visualgo.net/zh/sorting
 * */

const bubbleSort = (arr) => {
	const len = arr.length;
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return arr;
};

const bubbleSortTwo = (items) => {
	for (let i = 0; i < items.length - 1; i++) {
		for (let j = 0; j < items.length - 1; j++) {
			if (items[j] > items[j + 1]) {
				[items[j], items[j + 1]] = [items[j + 1], items[j]];
			}
		}
	}
	return items;
};

export default bubbleSort;
