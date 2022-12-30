import React, { useEffect } from 'react';
import scrollFun from '../utils/scrollFun';

const ScrollFun = () => {
	useEffect(() => {
		window.addEventListener('wheel', scrollFun);

		return () => {
			window.removeEventListener('wheel', scrollFun);
		};
	}, []);

	return <div />;
};

export default ScrollFun;
