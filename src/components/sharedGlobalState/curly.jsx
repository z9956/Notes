import React from 'react';
import global from './global.js';
import CurlyJr from './curly.jr';

export default function Curly() {
	return (
		<div style={{ marginBottom: 20 }}>
			<div style={{ float: 'left' }}>
				<div>Curly: {global.counter.count}</div>
				<div>
					<button onClick={global.counter.decrement}>Decrement</button>
				</div>
			</div>
			<CurlyJr />
		</div>
	);
}
