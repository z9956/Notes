import { expect, test } from 'vitest';

import {
	binarySearch,
	bubbleSort,
	insertionSort,
	mergeSort,
	quickSort,
	selectionSort,
} from './sorts';

test('binarySearch', () => {
	expect(binarySearch([1, 2, 3, 4, 5], 2)).toBe(1);
	expect(binarySearch([], 1)).toBe(-1);
	expect(binarySearch([1, 2, 3], 3)).toBe(2);
	expect(binarySearch([1, 2, 5, 6, 7, 8, 12, 14], 5)).toBe(2);
	expect(binarySearch([4, 5, 6, 7, 8, 9], 7)).toBe(3);
});

test('bubbleSort', () => {
	expect(bubbleSort([5, 4, 1, 2, 3])).toStrictEqual([1, 2, 3, 4, 5]);
	expect(bubbleSort([])).toStrictEqual([]);
	expect(bubbleSort([1, 2, 3])).toStrictEqual([1, 2, 3]);
	expect(bubbleSort([5, 6, 7, 8, 1, 2, 12, 14])).toStrictEqual([
		1, 2, 5, 6, 7, 8, 12, 14,
	]);
	expect(bubbleSort([5, 6, 7, 8, 9, 4])).toStrictEqual([4, 5, 6, 7, 8, 9]);
	expect(bubbleSort([20, 30, 40])).toStrictEqual([20, 30, 40]);
	expect(bubbleSort([2, 1, 3])).toStrictEqual([1, 2, 3]);
	expect(bubbleSort([10, 15, 16, 100])).toStrictEqual([10, 15, 16, 100]);
	expect(bubbleSort([10, 9, 11])).toStrictEqual([9, 10, 11]);
	expect(bubbleSort([10, 9, 12])).toStrictEqual([9, 10, 12]);
	expect(bubbleSort([3, 2, 1])).toStrictEqual([1, 2, 3]);
	expect(bubbleSort([10, 9, 8])).toStrictEqual([8, 9, 10]);
});

test('insertionSort', () => {
	expect(insertionSort([5, 4, 1, 2, 3])).toStrictEqual([1, 2, 3, 4, 5]);
	expect(insertionSort([])).toStrictEqual([]);
	expect(insertionSort([1, 2, 3])).toStrictEqual([1, 2, 3]);
	expect(insertionSort([5, 6, 7, 8, 1, 2, 12, 14])).toStrictEqual([
		1, 2, 5, 6, 7, 8, 12, 14,
	]);
	expect(insertionSort([5, 6, 7, 8, 9, 4])).toStrictEqual([4, 5, 6, 7, 8, 9]);
	expect(insertionSort([20, 30, 40])).toStrictEqual([20, 30, 40]);
	expect(insertionSort([2, 1, 3])).toStrictEqual([1, 2, 3]);
	expect(insertionSort([10, 15, 16, 100])).toStrictEqual([10, 15, 16, 100]);
	expect(insertionSort([10, 9, 11])).toStrictEqual([9, 10, 11]);
	expect(insertionSort([10, 9, 12])).toStrictEqual([9, 10, 12]);
	expect(insertionSort([3, 2, 1])).toStrictEqual([1, 2, 3]);
	expect(insertionSort([10, 9, 8])).toStrictEqual([8, 9, 10]);
});

test('mergeSort', () => {
	expect(mergeSort([5, 4, 1, 2, 3])).toStrictEqual([1, 2, 3, 4, 5]);
	expect(mergeSort([])).toStrictEqual([]);
	expect(mergeSort([1, 2, 3])).toStrictEqual([1, 2, 3]);
	expect(mergeSort([5, 6, 7, 8, 1, 2, 12, 14])).toStrictEqual([
		1, 2, 5, 6, 7, 8, 12, 14,
	]);
	expect(mergeSort([5, 6, 7, 8, 9, 4])).toStrictEqual([4, 5, 6, 7, 8, 9]);
	expect(mergeSort([20, 30, 40])).toStrictEqual([20, 30, 40]);
	expect(mergeSort([2, 1, 3])).toStrictEqual([1, 2, 3]);
	expect(mergeSort([10, 15, 16, 100])).toStrictEqual([10, 15, 16, 100]);
	expect(mergeSort([10, 9, 11])).toStrictEqual([9, 10, 11]);
	expect(mergeSort([10, 9, 12])).toStrictEqual([9, 10, 12]);
	expect(mergeSort([3, 2, 1])).toStrictEqual([1, 2, 3]);
	expect(mergeSort([10, 9, 8])).toStrictEqual([8, 9, 10]);
});

test('quickSort', () => {
	expect(quickSort([5, 4, 1, 2, 3])).toStrictEqual([1, 2, 3, 4, 5]);
	expect(quickSort([])).toStrictEqual([]);
	expect(quickSort([1, 2, 3])).toStrictEqual([1, 2, 3]);
	expect(quickSort([5, 6, 7, 8, 1, 2, 12, 14])).toStrictEqual([
		1, 2, 5, 6, 7, 8, 12, 14,
	]);
	expect(quickSort([5, 6, 7, 8, 9, 4])).toStrictEqual([4, 5, 6, 7, 8, 9]);
	expect(quickSort([20, 30, 40])).toStrictEqual([20, 30, 40]);
	expect(quickSort([2, 1, 3])).toStrictEqual([1, 2, 3]);
	expect(quickSort([10, 15, 16, 100])).toStrictEqual([10, 15, 16, 100]);
	expect(quickSort([10, 9, 11])).toStrictEqual([9, 10, 11]);
	expect(quickSort([10, 9, 12])).toStrictEqual([9, 10, 12]);
	expect(quickSort([3, 2, 1])).toStrictEqual([1, 2, 3]);
	expect(quickSort([10, 9, 8])).toStrictEqual([8, 9, 10]);
});

test('selectionSort', () => {
	expect(selectionSort([5, 4, 1, 2, 3])).toStrictEqual([1, 2, 3, 4, 5]);
	expect(selectionSort([])).toStrictEqual([]);
	expect(selectionSort([1, 2, 3])).toStrictEqual([1, 2, 3]);
	expect(selectionSort([5, 6, 7, 8, 1, 2, 12, 14])).toStrictEqual([
		1, 2, 5, 6, 7, 8, 12, 14,
	]);
	expect(selectionSort([5, 6, 7, 8, 9, 4])).toStrictEqual([4, 5, 6, 7, 8, 9]);
	expect(selectionSort([20, 30, 40])).toStrictEqual([20, 30, 40]);
	expect(selectionSort([2, 1, 3])).toStrictEqual([1, 2, 3]);
	expect(selectionSort([10, 15, 16, 100])).toStrictEqual([10, 15, 16, 100]);
	expect(selectionSort([10, 9, 11])).toStrictEqual([9, 10, 11]);
	expect(selectionSort([10, 9, 12])).toStrictEqual([9, 10, 12]);
	expect(selectionSort([3, 2, 1])).toStrictEqual([1, 2, 3]);
	expect(selectionSort([10, 9, 8])).toStrictEqual([8, 9, 10]);
});
