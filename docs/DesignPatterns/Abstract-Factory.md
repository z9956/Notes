> 抽象工厂模式是一种创建型设计模式，它能创建一系列相关的对象，而无需指定其具体类

```javascript
class B1 {
	info() {
		return 'B1';
	}
}

class Rx24 {
	info() {
		return 'RX24';
	}
}

function droidProducer(kind) {
	if (kind === 'battle') return battleDroidFactory;

	return pilotDroidFactory;
}

function battleDroidFactory() {
	return B1;
}

function pilotDroidFactory() {
	return new Rx24();
}

droidProducer('battle');
```
