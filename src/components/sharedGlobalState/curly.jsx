import React from 'react';
import global from './global.js';
import CurlyJr from './curly.jr';

export default function Curly() {
	const decrement = () => {
		global.counter.count = global.counter.count - 1;
	};

	return (
		<div style={{ marginBottom: 20 }}>
			<div style={{ float: 'left' }}>
				<div>Curly: {global.counter.count}</div>
				<div>
					<button onClick={decrement}>Decrement</button>
				</div>
			</div>
			<CurlyJr />
		</div>
	);
}
