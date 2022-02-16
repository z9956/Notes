> 责任链模式是一种行为设计模式，允许你将请求沿着处理者链进行发送。收到请求后，每个处理者均可对请求进行处理，或将其传递给链上的下个处理者

```javascript
class ShoppingCart {
	constructor() {
		this.products = [];
	}

	addProduct(p) {
		this.products.push(p);
	}
}

class Discount {
	calc(products) {
		let ndiscount = new NumberDiscount();
		let pdiscount = new PriceDiscount();
		let none = new NoneDiscount();
		ndiscount.setNext(pdiscount);
		pdiscount.setNext(none);
		return ndiscount.exec(products);
	}
}

class NumberDiscount {
	constructor() {
		this.next = null;
	}

	setNext(fn) {
		this.next = fn;
	}

	exec(products) {
		let result = 0;
		if (products.length > 3) result = 0.05;

		return result + this.next.exec(products);
	}
}

class PriceDiscount {
	constructor() {
		this.next = null;
	}

	setNext(fn) {
		this.next = fn;
	}

	exec(products) {
		let result = 0;
		let total = products.reduce((a, b) => a + b);

		if (total >= 500) result = 0.1;

		return result + this.next.exec(products);
	}
}

class NoneDiscount {
	exec() {
		return 0;
	}
}

const discount = new Discount();
const shoppingCart = new ShoppingCart();
const shoppingCartTwo = new ShoppingCart();

shoppingCart.addProduct(100);
shoppingCart.addProduct(100);
shoppingCart.addProduct(100);

shoppingCartTwo.addProduct(1000);

console.log(discount.calc(shoppingCart.products)); //0
console.log(discount.calc(shoppingCartTwo.products)); //0.1
```
