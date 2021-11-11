/**
 * 数组对象去重
 */
const reduceArray = (repeatList = [], key = 'id') => {
	let obj = {};

	return repeatList.reduce((acc, cur) => {
		if (obj[cur[key]] ? '' : (obj[cur[key]] = true)) acc.push(cur);
		return acc;
	}, []);
};
