function shellSort(arr) {
	let len = arr.length,
		temp,
		gap = 1;

	for (gap; gap > 0; gap = Math.floor(gap / 3)) {
		for (let i = gap; i < len; i++) {
			temp = arr[i];

			let j = i - gap;

			while (j >= 0 && arr[j] > temp) {
				arr[j + gap] = arr[j];
				j -= gap;
			}
			arr[j + gap] = temp;
		}
	}
	return arr;
}
