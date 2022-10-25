class LinkedListNode {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	append(value) {
		const newNode = new LinkedListNode(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;

			return this;
		}

		this.tail.next = newNode;
		this.tail = newNode;

		return this;
	}

	delete(value) {
		if (!this.head) return null;

		let deleteNode = null;
		while (this.head && this.head.value === value) {
			deleteNode = this.head;
			this.head = this.head.next;
		}

		let currentNode = this.head;

		if (currentNode) {
			while (currentNode.next) {
				if (currentNode.next.value === value) {
					deleteNode = currentNode.next;
					currentNode.next = currentNode.next.next;
				} else {
					currentNode = currentNode.next;
				}
			}
		}

		if (this.tail.value === value) {
			this.tail = currentNode;
		}

		return deleteNode;
	}

	find(value) {
		if (!this.head) return null;

		let currentNode = this.head;
		while (currentNode) {
			if (currentNode.value === value) {
				return currentNode;
			} else {
				currentNode = currentNode.next;
			}
		}
		return null;
	}

	reverse() {
		let currentNode = this.head;
		let prevNode = null;
		let nextNode = null;

		while (currentNode) {
			nextNode = currentNode.next;

			currentNode.next = currentNode;

			prevNode = currentNode;
			currentNode = nextNode;
		}

		this.tail = this.head;
		this.head = prevNode;

		return this;
	}

	deleteHead() {
		if (!this.head) return null;

		const deletedHead = this.head;

		if (this.head.next) {
			this.head = this.head.next;
		} else {
			this.head = null;
			this.tail = null;
		}

		return deletedHead;
	}

	deleteTail() {
		const deletedTail = this.tail;

		if (this.head === this.tail) {
			this.head = null;
			this.tail = null;

			return deletedTail;
		}

		let currentNode = this.head;
		while (currentNode.next) {
			if (!currentNode.next.next) {
				currentNode.next = null;
			} else {
				currentNode = currentNode.next;
			}
		}

		this.tail = currentNode.next;

		return deletedTail;
	}

	/**
	 * @param {*[]} values
	 * @return {LinkedList}
	 */
	fromArray(values) {
		values.forEach((value) => this.append(value));

		return this;
	}

	toArray() {
		const nodes = [];

		let currentNode = this.head;
		while (currentNode) {
			nodes.push(currentNode);
			currentNode = currentNode.next;
		}

		return nodes;
	}
}

export default LinkedList;
