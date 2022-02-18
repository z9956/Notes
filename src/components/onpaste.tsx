import React, { useEffect } from 'react';

const OnpasteComponent = () => {
	useEffect(() => {
		const $log = document.getElementById('log');
		const $editor = document.getElementById('editor');
		const $pasteImg = document.querySelector('.paste-img');

		$editor.onpaste = pasteIntercept;

		function pasteIntercept(e) {
			if (!e.clipboardData) return;
			let data = e.clipboardData.items;

			for (let i = 0; i < data.length; i++) {
				if (data[i].kind === 'string' && data[i].type.match('^text/plain')) {
					data[i].getAsString((text) => {
						$log.appendChild(document.createTextNode(text));
					});
				} else if (data[i].kind === 'file' && data[i].type.match('^image/')) {
					//防止文件名默认粘贴至文本框 除文本外，都需要加
					e.preventDefault();
					const file = data[i].getAsFile();
					const imgTag = document.createElement('img');
					imgTag.src = URL.createObjectURL(file);

					$pasteImg.appendChild(imgTag);
				} else if (
					data[i].kind === 'string' &&
					data[i].type.match('^text/html')
				) {
					// 拖拽项的数据是 HTML
					console.log('... Drop: HTML');
				} else if (
					data[i].kind === 'string' &&
					data[i].type.match('^text/uri-list')
				) {
					// 拖拽项的数据是URI
					console.log('... Drop: URI');
				}
			}
		}
	}, []);

	return (
		<div>
			<h3>尝试在下方文本框粘贴(文本、图片)!</h3>
			<label htmlFor="editor">
				<textarea id="editor" rows={3} cols={80}>
					暂时只处理了文本、图片，其他类型的如有需要自行处理
				</textarea>
			</label>

			<h3>Log</h3>
			<label htmlFor="log">
				<textarea rows={15} cols={80} id="log" readOnly />
			</label>
			<div className="paste-img" />
		</div>
	);
};

export default OnpasteComponent;
