/*
 * 插入排序
 * https://visualgo.net/zh/sorting
 * */

function insertionSort(list) {
	for (let i = 1; i < list.length; i++) {
		let j = i - 1;

		const current = list[i];
		while (j >= 0 && list[j] > current) {
			list[j + 1] = list[j];
			j--;
		}
		list[j + 1] = current;
	}

	return list;
}

console.log(insertionSort([5, 4, 2, 7, 1, 2, 0, 1]));
