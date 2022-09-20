import React from 'react';

const OpenBase64ImageComponent = () => {
	const handleChangeFiles = (e) => {
		const files = e.target.files;
		if (!files.length) return;

		const img = document.createElement('img');
		img.src = URL.createObjectURL(files[0]);

		const newWindow = window.open('');
		newWindow.document.write(img.outerHTML);
		newWindow.document.close();
	};

	return (
		<div>
			<h5>在新窗口预览图片(支持base64)</h5>
			<input
				type="file"
				accept={'image/*'}
				onChange={handleChangeFiles}
				placeholder={'请选择图片'}
			/>
		</div>
	);
};

export default OpenBase64ImageComponent;
