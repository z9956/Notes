//数字千分位
export default function formatNumberWithCommas(number) {
	let nextNum = Number(number);

	if (typeof nextNum === 'number' && !isNaN(nextNum)) {
		if (typeof nextNum.toLocaleString === 'function') {
			try {
				return nextNum.toLocaleString('en-US');
			} catch (error) {
				console.error('Error using toLocaleString:', error);
			}
		}

		let str = String(number).trim();
		return str.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	}

	return number;
}
