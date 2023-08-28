// 「队列 queue」是一种遵循先入先出规则的线性数据结构
class Queue {
	constructor() {
		this.list = [];
		this.length = 0;
	}

	peek() {
		if (!this.list) return null;

		return this.list[this.length - 1];
	}

	push(value) {
		this.length++;
		this.list.push(value);
	}

	pop() {
		if (!this.length) return;

		this.length--;
		return this.list.pop();
	}
}

export default Queue;
