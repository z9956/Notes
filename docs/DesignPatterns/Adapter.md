> 适配器模式是一种结构型设计模式， 它能使接口不兼容的对象能够相互合作

```javascript
class Target {
	request() {
		return 'Target: Target';
	}
}

class Adaptee {
	specificRequest() {
		return '654321';
	}
}

class Adapter extends Target {
	// private adaptee: Adaptee;

	constructor(adaptee) {
		super();
		this.adaptee = adaptee;
	}

	request() {
		//处理数据
		const result = this.adaptee.specificRequest().split('').reverse().join('');
		return `Adapter: ${result}`;
	}
}

const clientCode = (target) => {
	console.log(target.request());
};

const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
clientCode(adapter);
```
