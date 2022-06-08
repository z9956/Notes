// 防抖：执行最后一次
const debounce = (fun, time = 300) => {
	let timer;

	return (...args) => {
		if (timer) {
			clearTimeout(timer);
		}

		timer = setTimeout(() => {
			fun(args);
		}, time);
	};
};

export default debounce;
