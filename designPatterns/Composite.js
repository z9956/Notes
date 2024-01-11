/**
 * 组合模式是一种结构型设计模式， 你可以使用它将对象组合成树状结构， 并且能像使用独立对象一样使用它们
 */
class Equipment {
	getPrice() {
		return this.price ?? 0;
	}

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
	}
}

class Composite extends Equipment {
	constructor() {
		super();
		this.equipments = [];
	}

	add(equipment) {
		this.equipments.push(equipment);
	}

	getPrice() {
		return this.equipments
			.map((equipment) => equipment.getPrice())
			.reduce((pre, cur) => pre + cur);
	}
}

class Cabinet extends Composite {
	constructor() {
		super();
		this.setName('cabinet');
	}
}

class FloppyDisk extends Equipment {
	constructor() {
		super();
		this.setName('Floppy Disk');
		this.price = 70;
	}
}

class HardDrive extends Equipment {
	constructor() {
		super();
		this.setName('Hard Drive');
		this.price = 250;
	}
}

class Memory extends Equipment {
	constructor() {
		super();
		this.setName('Memory');
		this.price = 200;
	}
}

const cabinet = new Cabinet();
cabinet.add(new FloppyDisk());
cabinet.add(new HardDrive());
cabinet.add(new Memory());

console.log(cabinet.getPrice(), cabinet.getName(), cabinet);
