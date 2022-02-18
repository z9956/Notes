import React, { useState } from 'react';
import { isJSON } from '../utils/isJSON';

const IsJSONComponent = () => {
	const [value, setValue] = useState('');
	const [isJson, setIsJSON] = useState(false);

	const handleChange = (e) => {
		const json = e.target.value.trim();
		setValue(json);

		setIsJSON(() => {
			if (typeof isJSON(json) === 'boolean') {
				return isJSON(json);
			}

			return false;
		});
	};

	return (
		<div>
			<textarea onChange={handleChange} />

			{value.length > 0 && <p>isJSON // {`${isJson}`}</p>}
		</div>
	);
};

export default IsJSONComponent;
