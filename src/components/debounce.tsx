import React from 'react';
import debounce from '@site/src/utils/debounce';

const DebounceComponent = () => {
	return (
		<div>
			<button onClick={(e) => console.log(e)}>click</button>
			<br />
			<button onClick={debounce((e) => console.log('debounce', e))}>
				debounce click
			</button>
		</div>
	);
};

export default DebounceComponent;
