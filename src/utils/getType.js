/**
 * 获取类型
 * @param { any } value
 */

export const getType = (value) => {
	return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
};
