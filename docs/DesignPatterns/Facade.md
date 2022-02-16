> 外观模式是一种结构型设计模式， 能为程序库、 框架或其他复杂类提供一个简单的接口

```javascript
class ShopFacade {
	constructor() {
		this.discount = new Discount();
		this.shipping = new Shipping();
		this.fees = new Fees();
	}

	calc(price) {
		price = this.discount.calc(price);
		price = this.fees.calc(price);
		price += this.shipping.calc(price);

		return price;
	}
}

class Discount {
	calc(value) {
		return value * 0.5;
	}
}

class Shipping {
	calc() {
		return 5;
	}
}

class Fees {
	calc(value) {
		return value * 1.5;
	}
}

const shop = new ShopFacade();
shop.calc(100); //80
```
