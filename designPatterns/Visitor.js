/**
 * 访问者模式是一种行为设计模式，它能将算法与其所作用的对象隔离开来
 */
function bonusVisitor(employee) {
	if (employee instanceof Manager) employee.bonus = employee.salary * 2;
	if (employee instanceof Developer) employee.bonus = employee.salary;
}

class Employee {
	constructor(salary) {
		this.bonus = 0;
		this.salary = salary;
	}

	accept(visitor) {
		visitor(this);
	}
}

class Manager extends Employee {
	constructor(salary) {
		super(salary);
	}
}

class Developer extends Employee {
	constructor(salary) {
		super(salary);
	}
}

let employees = [];
const john = new Developer(4000);
const maria = new Developer(4000);
const christian = new Manager(10000);

employees = [john, maria, christian];

employees.forEach((employee) => {
	employee.accept(bonusVisitor);
});

console.log(john.bonus); //4000
console.log(christian.bonus); //20000
