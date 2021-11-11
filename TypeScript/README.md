## Table of Contents

1. [Parameters<Type>](#Parameters<Type>)

## Parameters<Type>

[官网链接](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype)

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
