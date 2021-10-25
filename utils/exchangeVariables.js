/**
 * 使用异或运算 交换变量
 * https://www.ruanyifeng.com/blog/2021/01/_xor.html
 * @param { any } x
 * @param { any } y
 * */

const exchangeVariables = (x, y) => {
	console.log(`x: ${x}, y:${y}`);
	x = x ^ y;
	y = x ^ y;
	x = x ^ y;
	console.log(`x: ${x}, y:${y}`);
};

console.log(exchangeVariables(1, 2));
