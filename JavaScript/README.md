## Table of Contents

1. [in](#in)

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
