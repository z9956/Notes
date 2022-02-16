> 装饰模式是一种结构型设计模式， 允许你通过将对象放入包含行为的特殊封装对象中来为原对象绑定新的行为

```javascript
class Pasta {
	constructor() {
		this.price = 0;
	}

	getPrice() {
		return this.price;
	}
}

class Penne extends Pasta {
	constructor() {
		super();
		this.price = 8;
	}
}

class PastaDecorator extends Pasta {
	constructor(pasta) {
		super();
		this.pasta = pasta;
	}

	getPrice() {
		return this.pasta.getPrice();
	}
}

class SauceDecorator extends PastaDecorator {
	constructor(pasta) {
		super(pasta);
	}

	getPrice() {
		return super.getPrice() + 5;
	}
}

class CheeseDecorator extends PastaDecorator {
	constructor(pasta) {
		super(pasta);
	}

	getPrice() {
		return super.getPrice() + 3;
	}
}

const penne = new Penne();
const penneWithSauce = new SauceDecorator(penne);
const penneWithSauceAndCheese = new CheeseDecorator(penneWithSauce);

console.log(penne.price);
```
