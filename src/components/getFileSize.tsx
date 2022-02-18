import React from 'react';
import { getFileSize } from '../utils/getFileSize';

const sizes = [100, 200, 1000, 2000];

const GetFileSizeComponent = () => {
	return (
		<div>
			{sizes.map((size, index) => {
				return (
					<p key={index}>
						<span>getFileSize({`${size}`})</span> //
						<span>{getFileSize(size)}</span>
					</p>
				);
			})}
		</div>
	);
};

export default GetFileSizeComponent;
