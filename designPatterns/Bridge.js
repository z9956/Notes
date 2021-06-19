/**
 * 桥接是一种结构型设计模式， 可将业务逻辑或一个大类拆分为不同的层次结构， 从而能独立地进行开发
 */
class Abstraction {
	constructor(implementation) {
		this.implementation = implementation;
	}

	operation() {
		const result = this.implementation.operationImplementation();
		return `Abstraction: ${result}`;
	}
}

class ExtendedAbstraction extends Abstraction {
	operation() {
		const result = this.implementation.operationImplementation();
		return `ExtendedAbstraction: ${result}`;
	}
}

class ConcreteImplementationA {
	operationImplementation() {
		return 'ConcreteImplementationA';
	}
}

class ConcreteImplementationB {
	operationImplementation() {
		return 'ConcreteImplementationB';
	}
}

const clientCode = (abstraction) => {
	console.log(abstraction.operation());
};

let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);
