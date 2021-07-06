/**
 * 原型模式是一种创建型设计模式， 使你能够复制已有对象， 而又无需使代码依赖它们所属的类
 */
class Sheep {
	constructor(name, weight) {
		this.name = name;
		this.weight = weight;
	}

	clone() {
		return new Sheep(this.name, this.weight);
	}
}

const sheep = new Sheep('sheep', 10);
const cloneSheep = sheep.clone();

sheep.name === cloneSheep.name && console.log('===');
