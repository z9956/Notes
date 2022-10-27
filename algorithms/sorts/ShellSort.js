/*
 * 希尔排序
 * */
function shellSort(list) {
	let interval = 1;

	while (interval < list.length / 3) {
		interval = interval * 3 + 1;
	}

	while (interval > 0) {
		for (let i = interval; i < list.length; i++) {
			const value = list[i];
			let inner = i;

			while (inner > interval - 1 && list[inner - interval] >= value) {
				list[inner] = list[inner - interval];
				inner = inner - interval;
			}
			list[inner] = value;
		}
		interval = (interval - 1) / 3;
	}

	return list;
}

export default shellSort;
