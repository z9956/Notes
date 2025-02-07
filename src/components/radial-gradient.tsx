import { CSSProperties } from 'react';

const containerStyles: CSSProperties = {
	width: '100%',
	height: '40px',
	overflow: 'hidden',
	position: 'relative',
	borderRadius: '15px',
	backgroundColor: '#f0f0f0',
};

const progressBarStyles: CSSProperties = {
	width: '100%',
	height: '100%',
	overflow: 'hidden',
	position: 'absolute',
	top: '0',
	left: '0',
};

const progressStyles: CSSProperties = {
	width: '50%',
	height: '100%',
	backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
	backgroundSize: '5px 5px',
};

const RadialGradientComponent = () => {
	return (
		<div style={containerStyles}>
			<div className="progress-bar" style={progressBarStyles}>
				<div className="progress" style={progressStyles}></div>
			</div>
		</div>
	);
};

export default RadialGradientComponent;
