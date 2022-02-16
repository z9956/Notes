> 享元模式是一种结构型设计模式，它摒弃了在每个对象中保存所有数据的方式，通过共享多个对象所共有的相同状态，让你能在有限的内存容量中载入更多对象

```javascript
class Color {
	constructor(name) {
		this.name = name;
	}
}

class ColorFactory {
	constructor() {
		this.colors = {};
	}

	create(name) {
		let color = this.colors[name];
		if (color) return color;

		this.colors[name] = new Color(name);
		return this.colors[name];
	}
}

const colorFactory = new ColorFactory();
colorFactory.create('red');
colorFactory.create('red');
colorFactory.create('blue');
colorFactory.create('blue');

```
