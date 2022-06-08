class Eventbus {
	constructor() {
		this.listener = {};
	}

	on(eventName, handler) {
		if (!this.listener[eventName]) {
			this.listener[eventName] = new Set();
		}
		this.listener[eventName].add(handler);
	}

	once(eventName, handler) {
		const fun = (...args) => {
			handler.apply(this, args);
			this.off(eventName);
		};
		if (!this.listener[eventName]) {
			this.listener[eventName] = new Set();
		}
		this.listener[eventName].add(fun);
	}

	off(eventName) {
		delete this.listener[eventName];
	}

	hasEvent(eventName) {
		return this.listener[eventName] && this.listener[eventName].size;
	}

	emit(eventName, ...args) {
		if (this.hasEvent(eventName)) {
			const handlers = this.listener[eventName];
			handlers.forEach((handler) => {
				handler.apply(this, args);
			});
		} else {
			throw new Error(`事件 ${eventName} 尚未注册`);
		}
	}
}

export default Eventbus;
