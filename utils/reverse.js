/**
 * 整数翻转
 * @param { number } x 正整数
 * */
const reverse = (x) => {
	let result = 0;

	while (x) {
		result = result * 10 + (x % 10);
		x = Math.floor(x / 10);
	}

	return result;
};
