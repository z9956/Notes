import React, { useRef } from 'react';
import useClickAway from '../hooks/useClickAway';

const UseClickAway = () => {
	const clickAwayRef = useRef(null);

	useClickAway(clickAwayRef, (e: Event) => {
		console.log('Click away!', e);
	});

	return (
		<div style={{ width: 500, height: 500, border: '1px solid black' }}>
			<div
				className="click-away"
				style={{
					width: 200,
					height: 200,
					border: '1px solid #ccc',

					textAlign: 'center',
					lineHeight: '200px',
				}}
				ref={clickAwayRef}
			>
				click away
			</div>
		</div>
	);
};

export default UseClickAway;
