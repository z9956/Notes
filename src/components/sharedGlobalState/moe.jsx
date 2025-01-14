import React from 'react';
import global from './global';

export default function Moe() {
	return (
		<div style={{ clear: 'both' }}>
			<div>Moe: {global.counter.count}</div>
			<div>
				<button onClick={global.counter.reset}>Reset</button>
			</div>
		</div>
	);
}
