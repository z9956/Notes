const {
	binarySearch,
	bubbleSort,
	insertionSort,
	mergeSort,
	quickSort,
	selectionSort,
} = require('./algorithms.js');

describe('binarySearch', () => {
	it('should sort arrays correctly', () => {
		expect(binarySearch([1, 2, 3, 4, 5], 2)).toEqual(1);
		expect(binarySearch([], 1)).toEqual(-1);
		expect(binarySearch([1, 2, 3], 3)).toEqual(2);
		expect(binarySearch([1, 2, 5, 6, 7, 8, 12, 14], 5)).toEqual(2);
		expect(binarySearch([4, 5, 6, 7, 8, 9], 7)).toEqual(3);
	});
});

describe('bubbleSort', () => {
	it('should sort arrays correctly', () => {
		expect(bubbleSort([5, 4, 1, 2, 3])).toEqual([1, 2, 3, 4, 5]);
		expect(bubbleSort([])).toEqual([]);
		expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
		expect(bubbleSort([5, 6, 7, 8, 1, 2, 12, 14])).toEqual([
			1, 2, 5, 6, 7, 8, 12, 14,
		]);
		expect(bubbleSort([5, 6, 7, 8, 9, 4])).toEqual([4, 5, 6, 7, 8, 9]);
		expect(bubbleSort([20, 30, 40])).toEqual([20, 30, 40]);
		expect(bubbleSort([2, 1, 3])).toEqual([1, 2, 3]);
		expect(bubbleSort([10, 15, 16, 100])).toEqual([10, 15, 16, 100]);
		expect(bubbleSort([10, 9, 11])).toEqual([9, 10, 11]);
		expect(bubbleSort([10, 9, 12])).toEqual([9, 10, 12]);
		expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
		expect(bubbleSort([10, 9, 8])).toEqual([8, 9, 10]);
	});
});

describe('insertionSort', () => {
	it('should sort arrays correctly', () => {
		expect(insertionSort([5, 4, 1, 2, 3])).toEqual([1, 2, 3, 4, 5]);
		expect(insertionSort([])).toEqual([]);
		expect(insertionSort([1, 2, 3])).toEqual([1, 2, 3]);
		expect(insertionSort([5, 6, 7, 8, 1, 2, 12, 14])).toEqual([
			1, 2, 5, 6, 7, 8, 12, 14,
		]);
		expect(insertionSort([5, 6, 7, 8, 9, 4])).toEqual([4, 5, 6, 7, 8, 9]);
		expect(insertionSort([20, 30, 40])).toEqual([20, 30, 40]);
		expect(insertionSort([2, 1, 3])).toEqual([1, 2, 3]);
		expect(insertionSort([10, 15, 16, 100])).toEqual([10, 15, 16, 100]);
		expect(insertionSort([10, 9, 11])).toEqual([9, 10, 11]);
		expect(insertionSort([10, 9, 12])).toEqual([9, 10, 12]);
		expect(insertionSort([3, 2, 1])).toEqual([1, 2, 3]);
		expect(insertionSort([10, 9, 8])).toEqual([8, 9, 10]);
	});
});

describe('mergeSort', () => {
	it('should sort arrays correctly', () => {
		expect(mergeSort([5, 4, 1, 2, 3])).toEqual([1, 2, 3, 4, 5]);
		expect(mergeSort([])).toEqual([]);
		expect(mergeSort([1, 2, 3])).toEqual([1, 2, 3]);
		expect(mergeSort([5, 6, 7, 8, 1, 2, 12, 14])).toEqual([
			1, 2, 5, 6, 7, 8, 12, 14,
		]);
		expect(mergeSort([5, 6, 7, 8, 9, 4])).toEqual([4, 5, 6, 7, 8, 9]);
		expect(mergeSort([20, 30, 40])).toEqual([20, 30, 40]);
		expect(mergeSort([2, 1, 3])).toEqual([1, 2, 3]);
		expect(mergeSort([10, 15, 16, 100])).toEqual([10, 15, 16, 100]);
		expect(mergeSort([10, 9, 11])).toEqual([9, 10, 11]);
		expect(mergeSort([10, 9, 12])).toEqual([9, 10, 12]);
		expect(mergeSort([3, 2, 1])).toEqual([1, 2, 3]);
		expect(mergeSort([10, 9, 8])).toEqual([8, 9, 10]);
	});
});

describe('quickSort', () => {
	it('should sort arrays correctly', () => {
		expect(quickSort([5, 4, 1, 2, 3])).toEqual([1, 2, 3, 4, 5]);
		expect(quickSort([])).toEqual([]);
		expect(quickSort([1, 2, 3])).toEqual([1, 2, 3]);
		expect(quickSort([5, 6, 7, 8, 1, 2, 12, 14])).toEqual([
			1, 2, 5, 6, 7, 8, 12, 14,
		]);
		expect(quickSort([5, 6, 7, 8, 9, 4])).toEqual([4, 5, 6, 7, 8, 9]);
		expect(quickSort([20, 30, 40])).toEqual([20, 30, 40]);
		expect(quickSort([2, 1, 3])).toEqual([1, 2, 3]);
		expect(quickSort([10, 15, 16, 100])).toEqual([10, 15, 16, 100]);
		expect(quickSort([10, 9, 11])).toEqual([9, 10, 11]);
		expect(quickSort([10, 9, 12])).toEqual([9, 10, 12]);
		expect(quickSort([3, 2, 1])).toEqual([1, 2, 3]);
		expect(quickSort([10, 9, 8])).toEqual([8, 9, 10]);
	});
});

describe('selectionSort', () => {
	it('should sort arrays correctly', () => {
		expect(selectionSort([5, 4, 1, 2, 3])).toEqual([1, 2, 3, 4, 5]);
		expect(selectionSort([])).toEqual([]);
		expect(selectionSort([1, 2, 3])).toEqual([1, 2, 3]);
		expect(selectionSort([5, 6, 7, 8, 1, 2, 12, 14])).toEqual([
			1, 2, 5, 6, 7, 8, 12, 14,
		]);
		expect(selectionSort([5, 6, 7, 8, 9, 4])).toEqual([4, 5, 6, 7, 8, 9]);
		expect(selectionSort([20, 30, 40])).toEqual([20, 30, 40]);
		expect(selectionSort([2, 1, 3])).toEqual([1, 2, 3]);
		expect(selectionSort([10, 15, 16, 100])).toEqual([10, 15, 16, 100]);
		expect(selectionSort([10, 9, 11])).toEqual([9, 10, 11]);
		expect(selectionSort([10, 9, 12])).toEqual([9, 10, 12]);
		expect(selectionSort([3, 2, 1])).toEqual([1, 2, 3]);
		expect(selectionSort([10, 9, 8])).toEqual([8, 9, 10]);
	});
});
