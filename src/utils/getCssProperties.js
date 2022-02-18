//https://www.zhihu.com/question/473711103/answer/2011576302
/**
 * 获取指定css属性支持的所有值
 * @param  { string } cssProp css属性
 */
export const getCssProperties = async (cssProp) => {
	const res = await fetch(
		'https://raw.githubusercontent.com/chromium/chromium/master/third_party/blink/renderer/core/css/css_properties.json5',
	);
	const cssProperties = eval('(' + (await res.text()) + ')');
	const property = cssProperties.data.find((item) => item.name === cssProp);

	return property?.keywords;
};
