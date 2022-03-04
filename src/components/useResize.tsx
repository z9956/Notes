import React from 'react';
import useResize from '../hooks/useResize';

const UseClickAway = () => {
	useResize(() => {
		console.log('window resize');
	});

	return <div />;
};

export default UseClickAway;
