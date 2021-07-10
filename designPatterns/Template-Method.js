/**
 * 模板方法模式是一种行为设计模式，它在超类中定义了一个算法的框架，允许子类在不修改结构的情况下重写算法的特定步骤
 */
class Tax {
	calc(value) {
		if (value >= 1000) value = this.overThousand(value);

		return this.complementaryFree(value);
	}

	complementaryFree(value) {
		return value + 10;
	}
}

class TaxOne extends Tax {
	constructor() {
		super();
	}

	overThousand(value) {
		return value * 1.1;
	}
}

class TaxTwo extends Tax {
	constructor() {
		super();
	}

	overThousand(value) {
		return value * 1.2;
	}
}

const taxOne = new TaxOne();
const taxTwo = new TaxTwo();

console.log(taxOne.calc(1000)); //1110
console.log(taxTwo.calc(1000)); //1210
console.log(taxTwo.calc(100)); //110
