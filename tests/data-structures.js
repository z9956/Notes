'use strict';

class List {
	constructor() {
		this.memory = [];
		this.length = 0;
	}

	get(address) {}

	push(value) {}

	pop() {}

	unshift(value) {}

	shift() {}
}

class HashTable {
	constructor() {
		this.memory = [];
	}

	hashKey(key) {}

	get(key) {}

	set(key, value) {}

	remove(key) {}
}

class Stack {
	constructor() {
		this.list = [];
		this.length = 0;
	}

	push(value) {
		this.length++;
		this.list.push(value);
	}

	pop() {}

	peek() {}
}

class Queue {
	constructor() {
		this.list = [];
		this.length = 0;
	}

	enqueue(value) {
		this.length++;
		this.list.push(value);
	}

	dequeue() {}

	peek() {
		return this.list[0];
	}
}

class Graph {
	constructor() {
		this.nodes = [];
	}

	addNode(value) {}

	find(value) {}

	addLine(startValue, endValue) {}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	get(position) {}

	add(value, position) {}

	remove(position) {}
}

class Tree {
	constructor() {
		this.root = null;
	}

	traverse(callback) {}

	add(value, parentValue) {}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	contains(value) {
		let current = this.root;

		while (current) {
			if (value > current.value) {
				current = current.right;
			} else if (value < current.value) {
				current = current.left;
			} else {
				return true;
			}
		}

		return false;
	}

	add(value) {}
}

export {
	List,
	HashTable,
	Stack,
	Queue,
	Graph,
	LinkedList,
	Tree,
	BinarySearchTree,
};
