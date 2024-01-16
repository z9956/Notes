import Gcd from '../../src/components/gcd.tsx';

## examples

<Gcd/>

## 获取最大公约数

```javascript
function gcd(a, b) {
	return b === 0 ? a : gcd(b, a % b);
}
```
