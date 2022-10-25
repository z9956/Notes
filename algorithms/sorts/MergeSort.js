/*
 * 归并排序
 * https://visualgo.net/zh/sorting
 * */
const merge = (left, right) => {
	const results = [];
	let i = 0;
	let j = 0;

	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			results.push(left[i]);
			i++;
		} else {
			results.push(right[j]);
			j++;
		}
	}
	return results.concat(left.slice(i), right.slice(j));
};

const mergeSort = (list) => {
	const len = list.length;
	if (len < 2) return list;

	const middle = Math.floor(len / 2);
	const left = list.slice(0, middle);
	const right = list.slice(middle, len);

	return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([1, 3, 2, 4, 7, 8]));
