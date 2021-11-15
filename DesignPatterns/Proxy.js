/**
 * 代理模式是一种结构型设计模式，让你能够提供对象的替代品或其占位符。代理控制着对于原对象的访问，并允许在将请求提交给对象前后进行一些处理
 */
class Car {
	drive() {
		return '开车中';
	}
}

class CarProxy {
	constructor(driver) {
		this.driver = driver;
	}

	drive() {
		return this.driver.age < 18 ? '太年轻不能开车' : new Car().drive();
	}
}

class Driver {
	constructor(age) {
		this.age = age;
	}
}

const driver = new Driver(19);
new CarProxy(driver).drive(); //开车中
