class DoublyLinkedListNode {
	constructor(value, next = null, previous = null) {
		this.value = value;
		this.next = next;
		this.previous = previous;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	append(value) {
		const newNode = new DoublyLinkedListNode(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;

			return this;
		}

		this.tail.next = newNode;
		newNode.previous = this.tail;
		this.tail = newNode;

		return this;
	}

	delete(value) {
		if (!this.head) return null;

		let deleteNode = null;
		let currentNode = this.head;

		while (currentNode) {
			if (currentNode.value === value) {
				deleteNode = currentNode;

				if (deleteNode === this.head) {
					this.head = deleteNode.next;

					if (this.head) {
						this.head.previous = null;
					}

					if (deleteNode === this.tail) {
						this.tail = null;
					}
				} else if (deleteNode === this.tail) {
					this.tail = deleteNode.previous;
					this.tail.next = null;
				} else {
					const prevNode = deleteNode.previous;
					const nextNode = deleteNode.next;

					prevNode.next = nextNode;
					nextNode.previous = prevNode;
				}
			}

			currentNode = currentNode.next;
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
			prevNode = currentNode.previous;

			currentNode.next = prevNode;
			currentNode.previous = nextNode;

			prevNode = currentNode;
			currentNode = nextNode;
		}

		this.tail = this.head;
		this.head = prevNode;

		return this;
	}

	deleteTail() {
		if (!this.tail) return null;

		if (this.head === this.tail) {
			const deletedTail = this.tail;
			this.head = null;
			this.tail = null;

			return deletedTail;
		}

		const deletedTail = this.tail;

		this.tail = this.tail.previous;
		this.tail.next = null;

		return deletedTail;
	}

	deleteHead() {
		if (!this.head) return null;

		const deletedHead = this.head;

		if (this.head.next) {
			this.head = this.head.next;
			this.head.previous = null;
		} else {
			this.head = null;
			this.tail = null;
		}
		return deletedHead;
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

	formArray(values) {
		values.forEach((value) => this.append(value));
		return this;
	}
}

export default DoublyLinkedList;
