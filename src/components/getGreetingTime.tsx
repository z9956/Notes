import { useState } from 'react';
import getGreetingTime from '@site/src/utils/getGreetingTime';

const GetGreetingTimeDemo = () => {
	const [text, setText] = useState('');

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			console.log(getGreetingTime(Number(e.target.value)));
			setText(getGreetingTime(Number(e.target.value)));
		}
	};

	return (
		<div>
			<input
				type="number"
				min={0}
				max={24}
				placeholder={'请输入小时，并回车确认'}
				onKeyDown={handleKeyDown}
			/>
			<p>{text}</p>
		</div>
	);
};

export default GetGreetingTimeDemo;
