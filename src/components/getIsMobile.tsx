import React, { useEffect, useState } from 'react';
import getIsMobile from '@site/src/utils/getIsMobile';

const GetIsMobileComponent = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const nextIsMobile = getIsMobile();
		setIsMobile(nextIsMobile);
	}, []);

	return <div>移动端：{`${isMobile ? '是' : '否'}`}</div>;
};

export default GetIsMobileComponent;
