## Table of Contents

1. [in](#in)
2. [crypto.randomUUID](#randomUUID)
3. [Intl.DateTimeFormat](#DateTimeFormat)
4. [Array.prototype.at](#at)

## <span id='in'>in</span>

- 如果指定的属性在指定的对象或其原型链中，则 in 运算符返回 true
- [in 运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in)

```javascript
const car = { make: 'Honda', model: 'Accord', year: 1998 };

if ('make' in car) {
	console.log(car.make);
}
```

**[⬆ back to top](#table-of-contents)**

## <span id='randomUUID'>crypto.randomUUID</span>

- [crypto.randomUUID](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)

```javascript
let uuid = crypto.randomUUID();
console.log(uuid); // for example "36b8f84d-df4e-4d49-b662-bcde71a8764f"
```

**[⬆ back to top](#table-of-contents)**

## <span id='DateTimeFormat'>Intl.DateTimeFormat</span>

- Intl.DateTimeFormat 是根据语言来格式化日期和时间的对象的构造器
- [Intl.DateTimeFormat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)

```javascript
const date = new Date();

console.log(new Intl.DateTimeFormat('en-US').format(date)); // expected output: '12/17/2021'
console.log(new Intl.DateTimeFormat('zh-CN').format(new D())); // expected output: '2021/12/17'
```

**[⬆ back to top](#table-of-contents)**

## <span id='at'>Array.prototype.at</span>

- Array.prototype.at 方法采用整数值并返回该索引处的元素，允许负数索引
- [Array.prototype.at](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

```javascript
const list = [5, 12, 8, 130, 44];

console.log(list.at(-1)); // 44
console.log(list.at(-2)); // 130
console.log(list.at(0)); // 5
```

**[⬆ back to top](#table-of-contents)**
