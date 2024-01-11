/**
 * 迭代器模式是一种行为设计模式，让你能在不暴露集合底层表现形式（列表、栈和树等）的情况下遍历集合中所有的元素
 */
class Iterator {
	constructor(el) {
		this.index = 0;
		this.elements = el;
	}

	next() {
		return this.elements[this.index++];
	}

	hasNext() {
		return this.index < this.elements.length;
	}
}

const list = new Iterator([1, 2, 3]);
list.next(); //1
list.next(); //2
list.next(); //3
list.hasNext(); //false
