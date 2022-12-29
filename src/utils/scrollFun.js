const scrollFunc = (event) => {
	let e = event || window.event;
	if (e.wheelDelta) {
		if (e.wheelDelta > 0) {
			//当鼠标滚轮向上滚动时
			console.log('鼠标滚轮向上滚动');
		}
		if (e.wheelDelta < 0) {
			//当鼠标滚轮向下滚动时
			console.log('鼠标滚轮向下滚动');
		}
	} else if (e.detail) {
		if (e.detail < 0) {
			//当鼠标滚轮向上滚动时
			console.log('鼠标滚轮向上滚动');
		}
		if (e.detail > 0) {
			//当鼠标滚轮向下滚动时
			console.log('鼠标滚轮向下滚动');
		}
	}
};

export default scrollFunc;
/*
 * window.addEventListener('wheel', ((event) => {})
 * */
