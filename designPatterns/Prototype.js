/**
 * 原型模式是一种创建型设计模式， 使你能够复制已有对象， 而又无需使代码依赖它们所属的类
 */
class Prototype {
	primitive;
	component;
	circularReference;

	clone() {
		const clone = Object.create(this);

		clone.component = Object.create(this.component);
		clone.circularReference = {
			...this.circularReference,
			prototype: { ...this },
		};

		return clone;
	}
}

class ComponentWithBackReference {
	prototype;

	constructor(prototype) {
		this.prototype = prototype;
	}
}

const clientCode = () => {
	const p1 = new Prototype();
	p1.primitive = 111;
	p1.component = new Date();
	p1.circularReference = new ComponentWithBackReference();

	const p2 = p1.clone();

	if (p1.primitive === p2.primitive) {
		console.log('===');
	}
};
