/*
* 在数学中，斐波那契数是以下整数序列（称为斐波那契数列）中的数字，其特征在于前两个数字之后的每个数字都是前两个数字的和：

* 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
* */

/**
 * @param {number} number
 * @return {number[]}
 * */
const fibonacci = (number) => {
	const fibSequence = [1];

	let currentValue = 1;
	let prevValue = 0;

	if (number === 1) return fibSequence;

	let iterationsCounter = number - 1;

	while (iterationsCounter) {
		currentValue += prevValue;
		prevValue = currentValue - prevValue;

		fibSequence.push(currentValue);
		iterationsCounter--;
	}

	return fibSequence;
};
