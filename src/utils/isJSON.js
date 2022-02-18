/**
 * 判断是否为JSON
 * @param { string } str 需要判断的数据
 */
export const isJSON = (str) => {
	if (typeof str == 'string') {
		try {
			let obj = JSON.parse(str);
			return !!(typeof obj == 'object' && obj);
		} catch (e) {
			console.log('error：' + str + '!!!' + e);
			return false;
		}
	}
	console.log('It is not a string!');
};
