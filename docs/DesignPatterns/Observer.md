> 观察者模式是一种行为设计模式，允许你定义一种订阅机制，可在对象事件发生时通知多个 “观察” 该对象的其他对象

```javascript
class Product {
	constructor() {
		this.price = 0;
		this.actions = [];
	}

	setBasePrice(value) {
		this.price = value;
		this.notifyAll();
	}

	register(observer) {
		this.actions.push(observer);
	}

	unregister(observer) {
		this.actions = this.actions.filter((el) => {
			if (!(el instanceof observer)) return el;
		});
	}

	notifyAll() {
		return this.actions.forEach((el) => el.update(this));
	}
}

class Fees {
	update(product) {
		product.price = product.price * 1.2;
	}
}

class Proft {
	update(product) {
		product.price = product.price * 2;
	}
}

const product = new Product();
const proft = new Proft();
const fees = new Fees();

product.register(fees);
product.register(proft);

product.setBasePrice(100);
console.log(product.price); //240

product.unregister(Proft);
product.setBasePrice(100);
console.log(product.price); //120
```
