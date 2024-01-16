import { CSSProperties, useEffect } from 'react';

const listStyles: CSSProperties = {
	width: '200px',
	marginRight: '20px',
	maxHeight: '400px',
	display: 'flex',
	flexFlow: 'column-reverse',
	overflowY: 'auto',
	textAlign: 'center',
	border: '1px solid gray',
};

const ColumnReverseComponent = () => {
	const data = {
		title: 'content',
	};

	useEffect(() => {
		const $lists = document.querySelectorAll('.list');
		const $add = document.querySelector('.add');

		const fragment = document.createDocumentFragment();

		function createEle(text) {
			const pTag = document.createElement('p');
			pTag.innerText = text;

			return pTag;
		}

		//设置flex-flow: column-reverse后，数据要反转过来
		for (let i = 10; i > 0; i--) {
			const pTag = createEle(`${data.title}-${i}`);

			fragment.appendChild(pTag);
		}
		$lists[0].appendChild(fragment);
		$lists[1].appendChild(createEle('content-0'));
		$lists[2].appendChild(createEle('content-0'));

		// $lists[1].style.flexFlow = 'column';
		// $lists[1].appendChild(createEle('content-0'));

		$add.addEventListener('click', () => {
			const content = Math.floor(Math.random() * 100);

			$lists[0].prepend(createEle(content));
			$lists[1].prepend(createEle(content));
			$lists[2].prepend(createEle(content));

			/*if ($lists[1].scrollHeight > $lists[1].clientHeight) {
				$lists[1].style.flexFlow = 'column-reverse';
				$lists[1].prepend(createEle(content));
			} else {
				$lists[1].appendChild(createEle(content));
			}*/
		});
	}, []);

	return (
		<div>
			<button type="submit" className="add">
				add
			</button>

			<div className="examples" style={{ display: 'flex' }}>
				<div className="list" style={listStyles} />
				<div className="list" style={listStyles}>
					<p>有固定高度，数据量少显示会有点不正确</p>
				</div>
				<div className="example">
					<div className="list" style={listStyles}>
						<span>高度自适应</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ColumnReverseComponent;
