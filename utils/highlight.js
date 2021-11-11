//https://github.com/jsfront/src/blob/master/js.md

/**
 * 文本高亮
 * @param { string } text 文本
 * @param { string } words 单词
 * @param { string } tag 表情
 */
function highlight(text, words, tag = 'span') {
	let i,
		len = words.length,
		re;
	for (i = 0; i < len; i++) {
		re = new RegExp(words[i], 'g');
		if (re.test(text)) {
			text = text.replace(
				re,
				'<' + tag + ' class="highlight">$&</' + tag + '>',
			);
		}
	}
	return text;
}
