const getGreetingTime = (hours = new Date().getHours()) => {
	let text = ``;

	if (hours >= 6 && hours <= 9) {
		text = `早上好`;
	} else if (hours > 9 && hours < 12) {
		text = `上午好`;
	} else if (hours >= 12 && hours <= 13) {
		text = `中午好`;
	} else if (hours > 13 && hours < 19) {
		text = `下午好`;
	} else if (hours >= 19 && hours <= 24) {
		text = `晚上好`;
	}

	return text;
};

export default getGreetingTime;
