import React from 'react';
import useClickAnywhere from '../hooks/useClickAnywhere';

const UseClickAnywhere = () => {
	useClickAnywhere((e: Event) => {
		console.log('Click anywhere!', e);
	});

	return (
		<div
			style={{
				width: 500,
				height: 500,
				border: '1px solid black',
				textAlign: 'center',
				lineHeight: '500px',
			}}
		>
			click anywhere
		</div>
	);
};

export default UseClickAnywhere;
