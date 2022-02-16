> 策略模式是一种行为设计模式，它能让你定义一系列算法，并将每种算法分别放入独立的类中，以使算法的对象能够相互替换

```javascript
class ShoppingCart {
	constructor(discount) {
		this.discount = discount;
		this.amount = 0;
	}

	checkout() {
		return this.discount(this.amount);
	}

	setAmount(amount) {
		this.amount = amount;
	}
}

function guestStrategy(amount) {
	return amount;
}

function regularStrategy(amount) {
	return amount * 0.9;
}

function premiumStrategy(amount) {
	return amount * 0.8;
}

const guestCart = new ShoppingCart(guestStrategy);
guestCart.setAmount(100);

console.log(guestCart.checkout()); //100

const regularCart = new ShoppingCart(regularStrategy);
regularCart.setAmount(100);

console.log(regularCart.checkout()); //90

const premiumCart = new ShoppingCart(premiumStrategy);
premiumCart.setAmount(100);

console.log(premiumCart.checkout()); //80
```
