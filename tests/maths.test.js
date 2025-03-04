import { expect, test } from 'vitest';

import { factorial, fibonacci } from './maths';

test('factorial', () => {
	expect(factorial(1)).toBe(1);
	expect(factorial(2)).toBe(2);
	expect(factorial(3)).toBe(6);
	expect(factorial(4)).toBe(24);
});

test('fibonacci', () => {
	expect(fibonacci(1)).toEqual([1]);
	expect(fibonacci(2)).toEqual([1, 1]);
	expect(fibonacci(3)).toEqual([1, 1, 2]);
	expect(fibonacci(4)).toEqual([1, 1, 2, 3]);
	expect(fibonacci(5)).toEqual([1, 1, 2, 3, 5]);
	expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8]);
	expect(fibonacci(7)).toEqual([1, 1, 2, 3, 5, 8, 13]);
	expect(fibonacci(8)).toEqual([1, 1, 2, 3, 5, 8, 13, 21]);
	expect(fibonacci(9)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34]);
	expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
});
