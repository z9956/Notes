import React from 'react';
import global from './global';

export default function Larry() {
	return (
		<div style={{ marginBottom: 20 }}>
			<div>Larry: {global.counter.count}</div>
			<div>
				<button onClick={global.counter.increment}>Increment</button>
			</div>
		</div>
	);
}
