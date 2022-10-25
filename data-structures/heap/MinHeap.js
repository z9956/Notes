class MinHeap {
	constructor(array) {
		this.heap = this.initializeHeap(array);
	}

	/**
	 *   startingParent represents the parent of the last index (=== array.length-1)
	 *   and iterates towards 0 with all index values below sorted to meet heap conditions
	 */
	initializeHeap(array) {
		const startingParent = Math.floor((array.length - 2) / 2);

		for (let currIdx = startingParent; currIdx >= 0; currIdx--) {
			this.sinkDown(currIdx, array.length - 1, array);
		}
		return array;
	}

	sinkDown(currIdx, endIdx, heap) {
		let childOneIdx = currIdx * 2 + 1;

		while (childOneIdx <= endIdx) {
			const childTwoIdx = childOneIdx + 1 <= endIdx ? childOneIdx + 1 : -1;
			const swapIdx =
				childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]
					? childTwoIdx
					: childOneIdx;

			if (heap[swapIdx] < heap[currIdx]) {
				this.swap(currIdx, swapIdx, heap);
				currIdx = swapIdx;
				childOneIdx = currIdx * 2 + 1;
			} else {
				return;
			}
		}
	}

	bubbleUp(currIdx) {
		let parentIdx = Math.floor((currIdx - 1) / 2);

		while (currIdx > 0 && this.heap[currIdx] < this.heap[parentIdx]) {
			this.swap(currIdx, parentIdx, this.heap);
			currIdx = parentIdx;
			parentIdx = Math.floor((currIdx - 1) / 2);
		}
	}

	peek() {
		return this.heap[0];
	}

	extractMin() {
		this.swap(0, this.heap.length - 1, this.heap);
		const min = this.heap.pop();
		this.sinkDown(0, this.heap.length - 1, this.heap);
		return min;
	}

	insert(value) {
		this.heap.push(value);
		this.bubbleUp(this.heap.length - 1);
	}

	swap(idx1, idx2, heap) {
		const temp = heap[idx1];
		heap[idx1] = heap[idx2];
		heap[idx2] = temp;
	}
}

export { MinHeap };
