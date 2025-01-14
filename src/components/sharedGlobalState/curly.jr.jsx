import React from 'react';
import global from './global.js';

export default function CurlyJr() {
	return (
		<div style={{ marginBottom: 20, marginLeft: 150 }}>
			<div>Curly Jr: {global.counter.count}</div>
			<div>
				<button onClick={global.counter.invert}>Invert</button>
			</div>
		</div>
	);
}
