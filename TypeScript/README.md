## Table of Contents

1. [Parameters<Type>](#Parameters)
2. [ReturnType<Type>](#ReturnType)
3. [Exclude<Type,ExcludedUnion>](#Exclude)
4. [Omit<Type,Keys>](#Omit)
5. [Pick<Type,Keys>](#Pick)
6. [Record<Keys,Type>](#Record)
7. [infer](#infer)

## <span id='Parameters'>Parameters<Type></span>

- [官网链接](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype)
- 获取函数的参数类型

```typescript
const foo = (arg1: string, arg2: number): void => {};

type FooType = Parameters<typeof foo>;
type FooFirstType = Parameters<typeof foo>[0];

const fun = (...args: FooType) => {
	console.log(args);
};

const funFirst = (arg: FooFirstType) => {
	console.log(arg);
};

fun('1', 2);

funFirst('1');
```

**[⬆ back to top](#table-of-contents)**

## <span id='ReturnType'>ReturnType<Type></span>

- [官网链接](https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype)
- 获取函数的返回值类型

```typescript
const foo = (a: number, b: string) => {
	return { a, b };
};

type Foo = ReturnType<typeof foo>;

const a: ReturnType<() => string> = 'string';
const b: ReturnType<() => number[]> = [1, 2, 3];

const params: Foo = { a: 1, b: 'b' };
```

**[⬆ back to top](#table-of-contents)**

## <span id='Exclude'>Exclude<Type,ExcludedUnion></span>

- [官网链接](https://www.typescriptlang.org/docs/handbook/utility-types.html?#excludetype-excludedunion)
- 通过从 Type 中排除所有可分配给 ExcludedUnion 的成员来构造一个类型

```typescript
type Param = Exclude<'a' | 'b' | 'c', 'a'>;
//type Param = "b" | "c";

type Param2 = Exclude<string | number | (() => void), Function>;
//type Param2 = string | number;

interface Todo {
	title: string;
	description: string;
	completed: boolean;
}

//配合 Omit 使用
type TodoPreview = Omit<Todo, 'description' | 'title'>;

/*
 * type TodoPreview = {
 *   completed: boolean;
 * }
 * */
```

**[⬆ back to top](#table-of-contents)**

## <span id='Omit'>Omit<Type,Keys></span>

- [官网链接](https://www.typescriptlang.org/docs/handbook/utility-types.html?#omittype-keys)
- 通过从 Type 中选取所有属性，然后删除 Keys（字符串字面或字符串字面的联合）来构造一个类型

```typescript
interface Todo {
	title: string;
	description: string;
	completed: boolean;
}

type TodoPreview = Omit<Todo, 'description'>;

/*
 * type TodoPreview = {
 *   title: string;
 *   completed: boolean;
 * }
 * */

const todo: TodoPreview = {
	title: 'Clean room',
	completed: false,
};
```

**[⬆ back to top](#table-of-contents)**

## <span id='Pick'>Pick<Type,Keys></span>

- [官网链接](https://www.typescriptlang.org/docs/handbook/utility-types.html?#picktype-keys)
- 通过从 Type 中挑选属性集合 Keys（字符串字面或字符串字面的联合）来构造一个类型

```typescript
interface Todo {
	title: string;
	description: string;
	completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'description'>;

/*
 * type TodoPreview = {
 *   title: string;
 *   description: string;
 * }
 * */

const todo: TodoPreview = {
	title: 'Clean room',
	description: 'description',
};
```

**[⬆ back to top](#table-of-contents)**

## <span id='Record'>Record<Keys,Type></span>

- [官网链接](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)
- 构建一个对象类型，其属性键是 Keys，其属性值是 Type。这个工具可以用来将一个类型的属性映射到另一个类型

```typescript
interface CatInfo {
	age: number;
	breed: string;
}

type CatName = 'luck' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
	luck: { age: 10, breed: 'Persian' },
	boris: { age: 5, breed: 'Maine Coon' },
	mordred: { age: 16, breed: 'British Shorthair' },
};

type keys = 'A' | 'B' | 'C';
const result: Record<keys, number> = {
	A: 1,
	B: 2,
	C: 3,
};
```

**[⬆ back to top](#table-of-contents)**

## <span id='infer'>infer</span>

[comment]: <> (- [官网链接]&#40;https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type&#41;)

- 在 extends 条件语句中待推断的类型变量

```typescript
//如果 T 能赋值给 (...args: infer P) => any，则结果是 (...args: infer P) => any 类型中的参数 P，否则返回为 T
type ParamType<T> = T extends (...args: infer P) => any ? P : T;
```

**[⬆ back to top](#table-of-contents)**