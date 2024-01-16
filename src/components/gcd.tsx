import { useRef, useState } from 'react';
import gcd from '../utils/gcd';

const GcdDemo = () => {
	const [first, setFirst] = useState(null);
	const [last, setLast] = useState(null);
	const [text, setText] = useState('');

	const lastRef = useRef<HTMLInputElement>();

	const handleCompute = () => {
		if (typeof +first === 'number' && typeof +last === 'number') {
			setText(gcd(+first, +last));
		}
	};

	return (
		<div>
			<input
				style={{ width: 150 }}
				type="number"
				min={0}
				max={24}
				placeholder={'请输入数字'}
				onChange={(e) => setFirst(e.target.value.trim())}
				onKeyDown={({ key }) => {
					if (key === 'Enter') {
						lastRef.current.focus();
					}
				}}
			/>
			<br />
			<input
				ref={lastRef}
				style={{ width: 150, marginRight: 10 }}
				type="number"
				min={0}
				max={24}
				placeholder={'请输入数字'}
				onChange={(e) => setLast(e.target.value.trim())}
				onKeyDown={({ key }) => {
					if (key === 'Enter') {
						handleCompute();
					}
				}}
			/>
			<button onClick={handleCompute}>计算</button>
			<p>结果：{text}</p>
		</div>
	);
};

export default GcdDemo;
