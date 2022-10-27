/*
 * 阶乘
 * 在数学上, 一个正整数 n 的阶乘 (写作 n!), 就是所有小于等于 n 的正整数的乘积. 比如:
 * 5! = 5 * 4 * 3 * 2 * 1 = 120
 * */

/**
 * @param {number} number
 * @return {number}
 */
const factorial = (number) => {
	let result = 1;

	for (let i = 2; i <= number; i++) {
		result *= i;
	}

	return result;
};
