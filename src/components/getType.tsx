import React from 'react';
import getType from '../utils/getType';

const types = [
	'1',
	2,
	true,
	new Set(),
	new Map(),
	new Date(),
	{},
	new Function(),
	undefined,
	null,
];

const GetTypeComponent = () => {
	return (
		<div>
			{types.map((type, index) => {
				return (
					<p key={index}>
						<span>getType({`${type}`})</span> //<span>{getType(type)}</span>
					</p>
				);
			})}
		</div>
	);
};

export default GetTypeComponent;
