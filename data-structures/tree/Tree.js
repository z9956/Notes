class Tree {
	constructor() {
		this.root = null;
	}

	traverse(callback) {
		function walk(node) {
			callback(node);
			node.children.forEach(walk);
		}

		walk(this.root);
	}

	add(value, parentValue) {
		let newNode = {
			value,
			children: [],
		};

		if (!this.root) return (this.root = newNode);

		this.traverse((node) => {
			if (node.value === parentValue) {
				node.children.push(newNode);
			}
		});
	}

	toArray() {
		const results = [];

		function addNode(value) {
			results.push(value);
		}

		this.traverse(addNode);

		return results;
	}
}

export default Tree;
