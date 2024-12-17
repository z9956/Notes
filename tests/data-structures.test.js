import { expect, test } from 'vitest';

import { Tree } from './data-structures';

test('Tree', () => {
	const tree = new Tree();

	expect(tree([1, 2, 3, 4, 5], 2)).toBe(1);
	expect(tree([], 1)).toBe(-1);
	expect(tree([1, 2, 3], 3)).toBe(2);
	expect(tree([1, 2, 5, 6, 7, 8, 12, 14], 5)).toBe(2);
	expect(tree([4, 5, 6, 7, 8, 9], 7)).toBe(3);
});
