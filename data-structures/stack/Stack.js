//栈 stack」是一种遵循先入后出的逻辑的线性数据结构
class Stack {
	constructor() {
		this.stack = [];
		this.top = 0;
	}

	push(value) {
		this.stack.push(value);
		this.top++;
	}

	pop(value) {
		if (!this.length) return undefined;
		this.top--;
		return this.stack.pop();
	}
	peek() {
		if (!this.length) return undefined;
		return this.stack[this.stack.length - 1];
	}

	isEmpty() {
		return this.top === 0;
	}
	length() {
		return this.top;
	}

	clear() {
		this.stack = [];
		this.top = 0;
	}
}

export default Stack;
