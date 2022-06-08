//节流：限制函数一段时间内只能执行一次 (执行第一次)
const throttle = (fun, time = 300) => {
	let timer;

	return (...args) => {
		if (!timer) {
			timer = setTimeout(() => {
				timer = null;
				fun(args);
			}, time);
		}
	};
};

export default throttle;
