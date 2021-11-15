/**
 * 工厂方法模式是一种创建型设计模式，其在父类中提供一个创建对象的方法，允许子类决定实例化对象的类型
 */
class BmwFactory {
	static create(type) {
		if (type === 'X5') return new Bmw(type, 108000, 300);
		if (type === 'X6') return new Bmw(type, 111000, 320);
	}
}

class Bmw {
	constructor(model, price, maxSpeed) {
		this.model = model;
		this.price = price;
		this.maxSpeed = maxSpeed;
	}
}

BmwFactory.create('X5');
