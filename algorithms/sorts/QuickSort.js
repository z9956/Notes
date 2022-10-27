/*
 * 快速排序
 * https://visualgo.net/zh/sorting
 * */
const quickSort = (list) => {
	if (list.length < 2) return list;

	let mid = list[0],
		left = [],
		right = [];

	for (let i = 1; i < list.length; i++) {
		if (list[i] < mid) {
			left.push(list[i]);
		} else {
			right.push(list[i]);
		}
	}

	return quickSort(left).concat(mid, quickSort(right));
};

console.log(quickSort([0, 5, 3, 2, 2]));
