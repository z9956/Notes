import ColumnReverseComponent from '../../src/components/column-reverse';

## css设置滚动条默认至最底部

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>css设置滚动条默认至最底部</title>
	<style>
		.examples {
			display: flex;
		}
		.list {
			width: 200px;
			margin-right: 20px;
			max-height: 400px;
			display: flex;
			flex-flow: column-reverse;
			overflow-y: auto;
			text-align: center;
			border: 1px solid gray;
		}

		button {
			width: 100px;
			height: 30px;
			margin-bottom: 10px;
		}
	</style>
</head>
<body>
<button type="submit">add</button>

<div class="examples">
	<div class="list"></div>
	<div class="list">
		<p>有固定高度，数据量少显示会有点不正确</p>
	</div>
	<div class="example">
		<div class="list"><span>高度自适应</span></div>
	</div>
</div>

<script>
	const data = {
		title: 'content',
	};

	const $lists = document.querySelectorAll('.list');
	const $add = document.querySelector('button');

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

	$add.onclick = function () {
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
	};
</script>
</body>
</html>

```

## examples
<ColumnReverseComponent/>    