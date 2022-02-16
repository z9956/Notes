> 状态模式是一种行为设计模式，让你能在一个对象的内部状态变化时改变其行为，使其看上去就像改变了自身所属的类一样

```javascript
class OrderStatus {
	constructor(name, nextStatus) {
		this.name = name;
		this.nextStatus = nextStatus;
	}

	next() {
		return new this.nextStatus();
	}
}

class Delivered extends OrderStatus {
	constructor() {
		super('Delivered', Delivered);
	}
}

class WaitingForPayment extends OrderStatus {
	constructor() {
		super('waitingForPayment', Shipping);
	}
}

class Shipping extends OrderStatus {
	constructor() {
		super('shipping', Delivered);
	}
}

class Order {
	constructor() {
		this.state = new WaitingForPayment();
	}

	nextState() {
		this.state = this.state.next();
	}
}

const order = new Order();

console.log(order.state.name); //waitingForPayment

order.nextState();
console.log(order.state.name); //shipping

order.nextState();
console.log(order.state.name); //Delivered
```
