> 备忘录模式是一种行为设计模式，允许在不暴露对象实现细节的情况下保存和恢复对象之前的状态

```javascript
const originator = {
	store: function (value) {
		return new Memento(value);
	},

	restore: function (memento) {
		return memento.value;
	},
};

class Memento {
	constructor(value) {
		this.value = value;
	}
}

class Caretaker {
	constructor() {
		this.values = [];
	}

	addMemento(memento) {
		this.values.push(memento);
	}

	getMemento(index) {
		return this.values[index];
	}
}

const caretaker = new Caretaker();
caretaker.addMemento(originator.store('value 1'));
caretaker.addMemento(originator.store('value 2'));
caretaker.addMemento(originator.store('value 3'));

const result = originator.restore(caretaker.getMemento(1));

console.log(result); //value 2
```
