import React, { ChangeEvent, useEffect, useState } from 'react';

const GetCssProperties = () => {
	const [cssProperties, setCssProperties] = useState(null);
	const [current, setCurrent] = useState(null);

	const getAllCss = async () => {
		const res = await fetch(
			'https://raw.githubusercontent.com/chromium/chromium/master/third_party/blink/renderer/core/css/css_properties.json5',
			// '/img/data.json5',
		);
		const data = eval('(' + (await res.text()) + ')');

		if (data && Array.isArray(data?.data)) {
			setCssProperties(data.data);
		}
	};

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		console.log(e, e.target.value, e.target.selectedIndex, e.target.options);

		const curCssProperties = cssProperties[e.target.selectedIndex]?.keywords;

		if (curCssProperties) setCurrent(curCssProperties);
	};

	useEffect(() => {
		getAllCss();
	}, []);

	return (
		<div>
			<select name="pets" id="pet-select" onChange={handleChange}>
				{cssProperties &&
					cssProperties.map((attr, index) => {
						return (
							<option key={index} value={attr.name}>
								{attr.name}
							</option>
						);
					})}
			</select>
			{current && <p>{`${current}`}</p>}
		</div>
	);
};

export default GetCssProperties;
