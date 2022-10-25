class Heap {
	constructor() {
		this.heapContainer = [];
	}

	add(item) {
		this.heapContainer.push(item);
		this.heapifyUp();
		return this;
	}

	heapifyUp(customStartIndex) {
		let currentIndex = customStartIndex || this.heapContainer.length - 1;

		// while (this.ha)
	}

	hasParent(childIndex) {
		return this.getParentIndex(childIndex) > -1;
	}

	getParentIndex(childIndex) {
		return Math.floor((childIndex - 1) / 2);
	}
}

export default Heap;
