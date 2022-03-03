import React from 'react';
import useResize from '../hooks/useResize';

const UseClickAway = () => {
	useResize(() => {
		console.log('window resize');
	});

	return <div>调整窗口大小，并查看控制台</div>;
};

export default UseClickAway;
