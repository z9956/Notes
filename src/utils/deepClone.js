const deepClone = (source, cache = new Map()) => {
	if (source instanceof Object) {
		if (cache.get(source)) {
			return cache.get(source);
		}
		let result;
		if (source instanceof Function) {
			if (source.prototype) {
				result = function () {
					return source.apply(this, arguments);
				};
			} else {
				result = (...args) => {
					return source.call(undefined, ...args);
				};
			}
		} else if (source instanceof Array) {
			result = [];
		} else if (source instanceof Date) {
			result = new Date(source - 0);
		} else if (source instanceof RegExp) {
			result = new RegExp(source.source, source.flags);
		} else if (source instanceof Set) {
			result = new Set(source);
		} else if (source instanceof Map) {
			result = new Map(source);
		} else {
			result = {};
		}
		//追加其他类型

		cache.set(source, result);
		for (let key in source) {
			if (source.hasOwnProperty(key)) {
				result[key] = deepClone(source[key], cache);
			}
		}
		return result;
	} else {
		return source;
	}
};

/*const deepClone = (target, cache = new Map()) => {
	const isObject = (obj) => obj instanceof Object;

	if (isObject(target)) {
		const cacheTarget = cache.get(target);

		if (cacheTarget) {
			return cacheTarget;
		}

		let cloneTarget = Array.isArray(target) ? [] : {};

		cache.set(target, cloneTarget);

		for (const key in target) {
			const value = target[key];
			cloneTarget[key] = isObject(value) ? deepClone(value, cache) : value;
		}

		return cloneTarget;
	} else {
		return target;
	}
};*/

/*const target = {
	symbol: Symbol('foo'),
	regExp: new RegExp('\\w+'),
	date: new Date(),
	set: new Set([1, 2, 3]),
	map: new Map([
		['a', 1],
		['b', 2],
		['c', 3],
	]),
	fun: function () {
		console.log(123);
	},
	field: 1,
	key: undefined,
	object: {
		child: 'child',
	},
	array: [2, 4, 8],
	a: {
		b: { c: { d: { e: { f: { g: { h: { i: { j: { k: { l: {} } } } } } } } } } },
	},
};

const result = deepClone(target);

console.log(result);*/

export default deepClone;
