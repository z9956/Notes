class Stack {
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

export default Stack;
