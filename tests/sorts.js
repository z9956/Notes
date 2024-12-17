export function binarySearch(list, value) {
	let left = 0;
	let right = list.length - 1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		if (list[mid] === value) return mid;

		if (list[mid] < value) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return -1;
}
export function bubbleSort(list) {
	for (let i = 0; i < list.length; i++) {
		for (let j = i + 1; j < list.length; j++) {
			if (list[j] < list[i]) {
				[list[i], list[j]] = [list[j], list[i]];
			}
		}
	}
	return list;
}
export function insertionSort(list) {
	for (let i = 1; i < list.length; i++) {
		let j = i - 1;

		const cur = list[i];

		while (j >= 0 && list[j] > cur) {
			list[j + 1] = list[j];
			j--;
		}

		list[j + 1] = cur;
	}

	return list;
}
function merge(left, right) {}
export function mergeSort(list) {}
export function quickSort(list) {}
export function selectionSort(list) {}
