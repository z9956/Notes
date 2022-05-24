import GetCssProperties from '../../src/components/getCssProperties';

## 获取指定 css 属性支持的所有值

## examples

<GetCssProperties/>

```javascript
const getCssProperties = async (cssProp) => {
	const res = await fetch(
		'https://raw.githubusercontent.com/chromium/chromium/master/third_party/blink/renderer/core/css/css_properties.json5',
	);
	const cssProperties = eval('(' + (await res.text()) + ')');
	const property = cssProperties.data.find((item) => item.name === cssProp);

	return property?.keywords;
};
```
