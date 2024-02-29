import { KeyboardEventHandler, useEffect, useState } from 'react';
import { hashToHex, hashToRgb, hashToHsl } from '../utils/hashToColor';

const HashToColorComponent = () => {
	const [hash, setHash] = useState<number>();
	const [value, setValue] = useState('');

	useEffect(() => {
		handleGenerateUuid();
	}, []);

	const allFormats = {
		hex: () => hashToHex(hash),
		rgb: () => hashToRgb(hash),
		hsl: () => hashToHsl(hash),
	};

	const getHash = (str = '') => {
		const s = JSON.stringify(str);
		return s
			.split('')
			.reduce((a, _, i) => (a += s.charCodeAt(i) + (a << 5)), 0);
	};
	const handleGenerateUuid = (nextValue?: string) => {
		const nextHash = nextValue ?? crypto.randomUUID();

		setHash(getHash(nextHash));
		setValue(nextHash);
	};

	const handlePressEnter: KeyboardEventHandler<HTMLInputElement> = ({
		key,
		currentTarget: { value },
	}) => {
		if (key === 'Enter') {
			handleGenerateUuid(value.trim());
		}
	};

	return (
		<div>
			<button onClick={() => handleGenerateUuid()}>Generate uuid</button>
			<br />
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value.trim())}
				onKeyDown={handlePressEnter}
				placeholder="输入后并回车"
			/>
			<br />

			<div
				style={{ width: 400, textAlign: 'center', fontSize: 14, color: '#fff' }}
			>
				<h4 style={{ color: 'gray' }}>{value}</h4>
				{Object.keys(allFormats).map((color) => {
					const textColor = allFormats[color]();
					console.error('textColor', textColor);
					return (
						<div
							key={color}
							style={{
								background: textColor,
								marginBottom: '1px',
							}}
						>
							<span>{color}</span>
							<br /> {textColor}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default HashToColorComponent;
