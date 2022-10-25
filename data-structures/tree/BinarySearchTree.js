class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	contains(value) {
		let current = this.root;

		while (current) {
			if (value > current.value) {
				current = current.right;
			} else if (value < current) {
				current = current.left;
			} else {
				return true;
			}
		}

		return false;
	}

	add(value) {
		let node = {
			value,
			left: null,
			right: null,
		};

		if (this.root === null) return (this.root = node);

		let current = this.root;

		while (true) {
			if (value > current.value) {
				if (!current.right) {
					current.right = node;
					break;
				}

				current = current.right;
			} else if (value < current.value) {
				if (!current.left) {
					current.left = node;
					break;
				}
				current = current.left;
			} else {
				break;
			}
		}
	}

	fromArray(values) {
		values.forEach((value) => this.add(value));
		return this;
	}
}

export default BinarySearchTree;
