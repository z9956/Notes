import { describe, test, expect } from 'vitest';
import {
	List,
	HashTable,
	Stack,
	Queue,
	Graph,
	LinkedList,
	Tree,
	BinarySearchTree,
} from './data-structures';

describe('List', () => {
	test('performs push, unshift, shift, and pop operations', () => {
		const list = new List();

		list.push(1);
		list.unshift(2);

		expect(list.get(1)).toBe(1);
		expect(list.get(0)).toBe(2);

		expect(list.shift()).toBe(2);
		expect(list.get(0)).toBe(1);

		expect(list.pop()).toBe(1);
		expect(list.get(0)).toBeUndefined();
	});
});

describe('HashTable', () => {
	test('sets, gets, and removes values', () => {
		const hashTable = new HashTable();

		hashTable.set('foo', 'bar');
		expect(hashTable.get('foo')).toBe('bar');

		hashTable.remove('foo');
		expect(hashTable.get('foo')).toBeUndefined();
	});
});

describe('Stack', () => {
	test('pushes, peeks, and pops elements', () => {
		const stack = new Stack();

		stack.push(1);
		stack.push(2);

		expect(stack.peek()).toBe(2);
		expect(stack.pop()).toBe(2);
		expect(stack.peek()).toBe(1);
		expect(stack.pop()).toBe(1);
	});
});

describe('Queue', () => {
	test('enqueues, peeks, and dequeues elements', () => {
		const queue = new Queue();

		queue.enqueue(1);
		queue.enqueue(2);

		expect(queue.peek()).toBe(1);
		expect(queue.dequeue()).toBe(1);
		expect(queue.peek()).toBe(2);
		expect(queue.dequeue()).toBe(2);
	});
});

describe('Graph', () => {
	test('adds nodes and lines correctly', () => {
		const graph = new Graph();

		graph.addNode(1);
		graph.addNode(2);
		graph.addNode(3);

		expect(graph.find(1).value).toBe(1);
		expect(graph.find(2).value).toBe(2);

		graph.addLine(1, 2);
		graph.addLine(1, 3);
		graph.addLine(2, 3);

		expect(graph.find(1).lines[0].value).toBe(2);
		expect(graph.find(1).lines[1].value).toBe(3);
		expect(graph.find(2).lines[0].value).toBe(3);
	});
});

describe('LinkedList', () => {
	test('adds and removes elements', () => {
		const linkedList = new LinkedList();

		linkedList.add(1, 0);
		linkedList.add(2, 1);
		linkedList.add(3, 2);
		linkedList.add(4, 3);

		expect(linkedList.get(0).value).toBe(1);
		expect(linkedList.get(1).value).toBe(2);

		linkedList.remove(1);
		expect(linkedList.get(1).value).toBe(3);

		linkedList.remove(2);
		expect(linkedList.get(1).value).toBe(3);

		linkedList.remove(0);
		expect(linkedList.get(0).value).toBe(3);
	});
});

describe('Tree', () => {
	test('adds nodes and traverses correctly', () => {
		const tree = new Tree();

		tree.add(1);
		tree.add(2, 1);
		tree.add(3, 1);
		tree.add(4, 2);
		tree.add(5, 2);

		const traversed = [];
		tree.traverse((node) => traversed.push(node.value));

		expect(traversed).toEqual([1, 2, 4, 5, 3]);
	});
});

describe('BinarySearchTree', () => {
	test('adds nodes and checks containment', () => {
		const binarySearchTree = new BinarySearchTree();

		// Root
		binarySearchTree.add(4);

		// Left side
		binarySearchTree.add(2);
		binarySearchTree.add(1);
		binarySearchTree.add(3);

		// Right side
		binarySearchTree.add(6);
		binarySearchTree.add(5);
		binarySearchTree.add(7);

		expect(binarySearchTree.contains(2)).toBe(true);
		expect(binarySearchTree.contains(3)).toBe(true);
		expect(binarySearchTree.contains(4)).toBe(true);

		// Test duplicate
		binarySearchTree.add(6); // Should handle duplicates gracefully
	});
});
