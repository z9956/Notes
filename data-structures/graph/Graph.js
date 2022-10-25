class Graph {
	constructor() {
		this.nodes = [];
	}

	addNode(value) {
		const node = {
			value,
			lines: [],
		};

		return this.nodes.push(node);
	}

	find(value) {
		return this.nodes.find((node) => {
			return (node.value = value);
		});
	}

	addLine(startValue, endValue) {
		let startNode = this.find(startValue);
		let endNode = this.find(endValue);

		if (!startNode || !endNode) throw new Error('Both nodes need to exist');

		startNode.lines.push(endNode);
	}
}

export default Graph;
