import React from 'react';
import throttle from '@site/src/utils/throttle';

const ThrottleComponent = () => {
	return (
		<div>
			<button onClick={(e) => console.log(e)}>click</button>
			<br />
			<button onClick={throttle((e) => console.log('throttle', e))}>
				throttle click
			</button>
		</div>
	);
};

export default ThrottleComponent;
